"""Switching lights on for the moment a frame is captured.

A camera pointed at something that is dark for half the day records half a
timelapse. This module holds the configured lights on around the fetch and
puts them back afterwards, and nothing else — when to capture, and what to
do with the bytes, stay in the coordinator.

The guiding rule is that a capture must never leave the room in a state the
people in it did not choose: only lights that were off are touched, and a
light somebody else acted on while it was lit for the capture is theirs to
keep.
"""

from __future__ import annotations

import asyncio
import logging
from collections.abc import AsyncIterator
from contextlib import asynccontextmanager

from homeassistant.const import (
    ATTR_ENTITY_ID,
    SERVICE_TURN_OFF,
    SERVICE_TURN_ON,
    STATE_OFF,
    STATE_ON,
)
from homeassistant.core import (
    Context,
    Event,
    EventStateChangedData,
    HomeAssistant,
    callback,
    split_entity_id,
)
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.event import async_track_state_change_event
from homeassistant.helpers.sun import is_up

_LOGGER = logging.getLogger(__name__)

# Ceiling on one turn_on / turn_off call. A blocking service call to a
# light that has dropped off its mesh can sit for the radio's whole retry
# budget; the capture lock is held throughout, so an unbounded wait here
# would stall every later capture behind one unreachable bulb.
_SWITCH_TIMEOUT_SECONDS = 10


class CaptureLights:
    """The lights one config entry wants on while it captures."""

    def __init__(
        self,
        hass: HomeAssistant,
        name: str,
        entity_ids: list[str],
        *,
        settle_seconds: float,
        night_only: bool,
    ) -> None:
        """Initialise from the entry's settings."""
        self._hass = hass
        self._name = name
        self.entity_ids = entity_ids
        self.settle_seconds = settle_seconds
        self.night_only = night_only

    def _wanted_now(self) -> bool:
        """Whether this capture should be lit at all."""
        if not self.entity_ids:
            return False
        if not self.night_only:
            return True
        try:
            # Computed from the home's coordinates rather than read off
            # `sun.sun`, so the option does not depend on the sun
            # integration being set up.
            return not is_up(self._hass)
        except ValueError:
            # No sunrise or sunset to be found for this location. Erring
            # towards a lit frame costs a moment of light; erring the
            # other way costs the picture.
            return True

    def _currently_off(self) -> list[str]:
        """The configured lights that are off right now.

        Lights that are already on are left out on purpose: the scene is
        lit, and a light we did not switch on is not ours to switch off.
        Anything unavailable is skipped too — calling a service on it
        would only fail.
        """
        targets: list[str] = []
        for entity_id in self.entity_ids:
            state = self._hass.states.get(entity_id)
            if state is not None and state.state == STATE_OFF:
                targets.append(entity_id)
        return targets

    async def _async_switch(
        self, service: str, entity_ids: list[str], context: Context
    ) -> None:
        """Call turn_on / turn_off, one call per domain.

        Never raises. A light that will not switch must not cost the
        frame: a dark picture is still a data point, and a missing one is
        a gap.
        """
        by_domain: dict[str, list[str]] = {}
        for entity_id in entity_ids:
            by_domain.setdefault(split_entity_id(entity_id)[0], []).append(entity_id)

        for domain, ids in by_domain.items():
            try:
                async with asyncio.timeout(_SWITCH_TIMEOUT_SECONDS):
                    await self._hass.services.async_call(
                        domain,
                        service,
                        {ATTR_ENTITY_ID: ids},
                        blocking=True,
                        context=context,
                    )
            except (HomeAssistantError, TimeoutError) as err:
                _LOGGER.warning(
                    "%s: %s.%s failed for %s: %s",
                    self._name,
                    domain,
                    service,
                    ", ".join(ids),
                    # A TimeoutError has no message of its own.
                    str(err) or type(err).__name__,
                )

    @asynccontextmanager
    async def lit(self) -> AsyncIterator[None]:
        """Hold the capture lights on for the duration of the block."""
        targets = self._currently_off() if self._wanted_now() else []
        if not targets:
            yield
            return

        context = Context()
        claimed: set[str] = set()

        @callback
        def _on_change(event: Event[EventStateChangedData]) -> None:
            """Note a light that somebody else acted on while we held it.

            "Somebody else" is a person (the context names a user) or an
            automation or script (it has a parent). A change that carries
            neither is the device reporting in, which says nothing about
            intent. A change parented on our own call is a reaction to it
            — Adaptive Lighting adjusting the light we just switched on is
            the common one — and does not make the light theirs.
            """
            other = event.context
            if other.id == context.id or other.parent_id == context.id:
                return
            if other.user_id is not None or other.parent_id is not None:
                claimed.add(event.data["entity_id"])

        unsub = async_track_state_change_event(self._hass, targets, _on_change)
        try:
            await self._async_switch(SERVICE_TURN_ON, targets, context)
            await asyncio.sleep(self.settle_seconds)
            yield
        finally:
            unsub()
            ours = [
                entity_id
                for entity_id in targets
                if entity_id not in claimed
                and (state := self._hass.states.get(entity_id)) is not None
                and state.state == STATE_ON
            ]
            if ours:
                await self._async_switch(SERVICE_TURN_OFF, ours, context)
