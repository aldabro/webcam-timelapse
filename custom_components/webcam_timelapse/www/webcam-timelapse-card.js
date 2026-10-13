// Webcam Timelapse Card — bundled by Rollup. Edit sources in src/, then `npm run build`.
function e(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:a,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,b=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!a(e,t),w={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&h(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const o=n?.call(this);s?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...d(e),...c(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{if(i)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of n){const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,e.appendChild(n)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=n;const o=s.fromAttribute(t,e.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(e,t,i,n=!1,s){if(void 0!==e){const o=this.constructor;if(!1===n&&(s=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??y)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==s||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[b("elementProperties")]=new Map,v[b("finalized")]=new Map,f?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.2");const _=globalThis,$=e=>e,k=_.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+A,T=`<${M}>`,C=document,P=()=>C.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,O="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,N=/>/g,H=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,I=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),W=I(1),j=I(2),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Z=new WeakMap,G=C.createTreeWalker(C,129);function K(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Y=(e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":3===t?"<math>":"",r=D;for(let t=0;t<i;t++){const i=e[t];let a,h,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===D?"!--"===h[1]?r=F:void 0!==h[1]?r=N:void 0!==h[2]?(B.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=H):void 0!==h[3]&&(r=H):r===H?">"===h[0]?(r=s??D,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?H:'"'===h[3]?L:U):r===L||r===U?r=H:r===F||r===N?r=D:(r=H,s=void 0);const c=r===H&&e[t+1].startsWith("/>")?" ":"";o+=r===D?i+T:l>=0?(n.push(a),i.slice(0,l)+E+i.slice(l)+A+c):i+A+(-2===l?t:c)}return[K(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class J{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const r=e.length-1,a=this.parts,[h,l]=Y(e,t);if(this.el=J.createElement(h,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=G.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(E)){const t=l[o++],i=n.getAttribute(e).split(A),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?ie:"?"===r[1]?ne:"@"===r[1]?se:te}),n.removeAttribute(e)}else e.startsWith(A)&&(a.push({type:6,index:s}),n.removeAttribute(e));if(B.test(n.tagName)){const e=n.textContent.split(A),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],P()),G.nextNode(),a.push({type:2,index:++s});n.append(e[t],P())}}}else if(8===n.nodeType)if(n.data===M)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(A,e+1));)a.push({type:7,index:s}),e+=A.length-1}s++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,n){if(t===V)return t;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=z(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(e),s._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(t=X(e,s._$AS(e,t.values),s,n)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??C).importNode(t,!0);G.currentNode=n;let s=G.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new ee(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new oe(s,this,e)),this._$AV.push(t),a=i[++r]}o!==a?.index&&(s=G.nextNode(),o++)}return G.currentNode=C,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),z(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Q(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new J(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new ee(this.O(P()),this.O(P()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=X(this,e,t,0),o=!z(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const n=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=X(this,n[i+r],t,r),a===V&&(a=this._$AH[r]),o||=!z(a)||a!==this._$AH[r],a===q?e=q:e!==q&&(e+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class ne extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class se extends te{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??q)===V)return;const i=this._$AH,n=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const re=_.litHtmlPolyfillSupport;re?.(J,ee),(_.litHtmlVersions??=[]).push("3.3.3");const ae=globalThis;class he extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let s=n._$litPart$;if(void 0===s){const e=i?.renderBefore??null;n._$litPart$=s=new ee(t.insertBefore(P(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}he._$litElement$=!0,he.finalized=!0,ae.litElementHydrateSupport?.({LitElement:he});const le=ae.litElementPolyfillSupport;le?.({LitElement:he}),(ae.litElementVersions??=[]).push("4.2.2");const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ce={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:y},pe=(e=ce,t,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,s,e,!0,i)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];t.call(this,i),this.requestUpdate(n,s,e,!0,i)}}throw Error("Unsupported decorator location: "+n)};function ue(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function me(e){return ue({...e,state:!0,attribute:!1})}function ge(e,t){return(t,i,n)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}const fe=((e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new o(i,e,n)})`
  :host {
    --wtl-accent: var(--primary-color, #03a9f4);
    --wtl-surface: var(--card-background-color, #fff);
    --wtl-text: var(--primary-text-color, #212121);
    --wtl-muted: var(--secondary-text-color, #727272);
    --wtl-divider: var(--divider-color, #e0e0e0);
    --wtl-gap: var(--error-color, #db4437);
    --wtl-radius: var(--ha-card-border-radius, 12px);
    /* Frames are ~4:3; reserving the box up front stops the card from
       jumping when the first image decodes. */
    --wtl-aspect: 4 / 3;

    display: block;
    container-type: inline-size;
  }

  ha-card {
    overflow: hidden;
  }

  /* --- stage ------------------------------------------------------- */

  .stage {
    position: relative;
    width: 100%;
    aspect-ratio: var(--wtl-aspect);
    background: #000;
    overflow: hidden;
  }

  /* Wrapper whose only job is to be a stacking context.

     revealFrame() writes z-index onto the two layers so the incoming
     frame paints over the outgoing one. Without this wrapper that
     z-index competes with every other child of .stage — the timestamp,
     the live/gap badge, the sensor readout, the error panel — all of
     which are positioned at z-index auto and had been relying on DOM
     order to paint on top. Adding z-index to the images silently pushed
     the whole overlay underneath an opaque photo.

     position + a numeric z-index makes this element a stacking context,
     so the layers' z-index is scoped to this subtree and can only ever
     rank the two images against each other. */
  .layers {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    cursor: pointer;
  }

  /* Inset, because the layers fill the stage — an outset ring would be
     clipped away by the stage's own overflow and the focus state would
     be invisible exactly where it matters most. */
  .layers:focus-visible {
    outline: 2px solid var(--wtl-accent);
    outline-offset: -2px;
  }

  /* opacity, z-index and transition are set imperatively by
     revealFrame() and are deliberately absent here.

     They used to live in this block as a symmetric crossfade: outgoing
     1 -> 0 while incoming 0 -> 1. That is not a crossfade. Two stacked
     elements with independent opacities do not composite to an opaque
     result — at the midpoint the stage renders

         0.5*new + 0.25*old + 0.25*background

     and this background is #000, so every frame transition dipped ~25%
     toward black. A per-frame luminance pulse is exactly the artifact
     the deflicker pass exists to remove.

     The fix holds the outgoing frame fully opaque underneath and fades
     only the incoming one in on top of it, compositing to

         b*new + (1-b)*old

     with no background term. That needs z-order to follow which layer
     is incoming, and DOM order cannot express it: layer b always paints
     over layer a. Hence z-index, hence inline.

     Gap dimming is folded into --wtl-frame-filter rather than opacity,
     so it cannot collide with the fade. */
  .layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    filter: var(--wtl-frame-filter, none);
  }

  .empty .detail {
    font-size: var(--ha-font-size-s, 12px);
    opacity: 0.75;
    max-width: 34ch;
  }

  .empty {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    gap: 8px;
    padding: 16px;
    text-align: center;
    color: var(--wtl-muted);
    font-size: var(--ha-font-size-m, 14px);
  }

  /* --- overlays ---------------------------------------------------- */

  /* Passive labels, so they must not eat the click that opens the
     camera's more-info dialog — they sit over the picture and would
     otherwise punch two dead rectangles into it. */
  .stamp,
  .badge {
    pointer-events: none;
    position: absolute;
    padding: 4px 8px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: var(--ha-font-size-s, 12px);
    /* Digits must not shift width as the clock ticks. */
    font-variant-numeric: tabular-nums;
    backdrop-filter: blur(2px);
  }

  /* Top-left, because the controls now own the bottom of the stage. */
  .stamp {
    left: 8px;
    top: 8px;
  }

  .badge {
    right: 8px;
    top: 8px;
    letter-spacing: 0.06em;
    font-weight: var(--ha-font-weight-medium, 500);
  }

  .badge.live {
    background: var(--wtl-accent);
  }

  .badge.gap {
    background: var(--wtl-gap);
  }

  /* Generates no box, so the blocks inside it position themselves
     against .stage exactly as they did when there was only ever one.
     It becomes a real element only in the narrow pair layout, and only
     through .pair — see the container query below. */
  .readouts {
    display: contents;
  }

  /* Back on the bottom-right corner. It shares that edge with the centred
     control pill, which is fine while there is room between them — the
     container query below moves it to the top before the two can meet. */
  .readout {
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: grid;
    gap: 2px;
    padding: 8px 10px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    backdrop-filter: blur(2px);
    font-variant-numeric: tabular-nums;
  }

  /* The second block takes the opposite corner. Nothing else changes:
     the block that was already there keeps the rule above untouched, so
     adding this one cannot move it. */
  .readout.left {
    right: auto;
    left: 8px;
  }

  /* Folded to the eye alone. The scrim shrinks with it — a block that
     kept its padding would leave a dark square on the picture, which is
     the thing folding it away was meant to clear. */
  .readout.folded {
    padding: 2px;
  }

  /* Heading and fold control on one line. The heading is optional, so
     the row is justified from the end: with no title the eye still
     lands on the block's trailing edge instead of its leading one. */
  .readout-head {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    margin-bottom: 2px;
  }

  /* Opt-in heading for the readings block. Only rendered when the config
     carries a non-empty string, so the default look is unchanged. */
  .readout-title {
    font-size: var(--ha-font-size-s, 12px);
    font-weight: var(--ha-font-weight-medium, 500);
    color: rgba(255, 255, 255, 0.95);
    /* Takes the slack so the eye is pushed to the far edge, and keeps
       the heading over the labels it introduces: the block is
       right-aligned against the frame, and a heading that hugged the
       same edge would drift away from them. */
    flex: 1;
    text-align: left;
  }

  /* Sized down hard from the 48px default — this sits inside an overlay
     that is only a few rows tall, and the pill's 40px would dominate the
     block it belongs to. 28px still clears the 24px WCAG 2.5.8 minimum.

     Quiet until wanted: it matches .readout-name's weight so it reads as
     part of the block's furniture rather than competing with the values,
     and comes up to full white on hover and focus like the rows do. */
  .readout-fold {
    flex: none;
    color: rgba(255, 255, 255, 0.75);
    --mdc-icon-button-size: 28px;
    --mdc-icon-size: 17px;
  }

  /* :focus-within, not :focus-visible. ha-icon-button puts outline:none
     on its host and keeps focus on the button inside its shadow root, so
     a :focus-visible rule aimed at the host never matches. The ring
     itself comes from mwc-icon-button either way — this is only the
     colour coming up to meet the hover state. */
  .readout-fold:hover,
  .readout-fold:focus-within {
    color: #fff;
  }

  .readout-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
    cursor: pointer;
    border-radius: 4px;
    font-size: var(--ha-font-size-s, 12px);
    /* Pinned so the icon has a known box to be centred against. With an
       inherited line-height the row's height varies with the theme, and
       a centred icon drifts off the text by however much it differs. */
    line-height: 1.25;
  }

  /* display is explicit because a custom element is inline by default,
     and width/height on an inline box are ignored — the icon then sized
     itself from --mdc-icon-size alone and sat on the text baseline
     rather than beside it.

     The row is baseline-aligned for the text, so the icon opts out with
     align-self and centres on the line box instead. At 1.25 line-height
     the box is 1.25em and the icon 1.05em, putting its centre 0.625em
     down; the text's optical centre (baseline at ~1.03em, cap height
     ~0.7em) lands at ~0.68em. Close enough to read as aligned, and it
     holds at any font size because every term is in em. */
  .readout-icon {
    display: block;
    --mdc-icon-size: 1.05em;
    width: 1.05em;
    height: 1.05em;
    flex: none;
    align-self: center;
    /* Optical nudge, not geometry. Centring on the line box is correct to
       within half a pixel, but the row's cross size is set by the text's
       descenders, which sit lower than anything in an MDI glyph — so a
       mathematically centred icon still reads slightly low. Bottom margin
       lifts a centre-aligned item by half its value. */
    margin-bottom: 0.16em;
  }

  .readout-name {
    color: rgba(255, 255, 255, 0.75);
  }

  .readout-value {
    margin-left: auto;
    font-weight: var(--ha-font-weight-medium, 500);
  }

  .readout-row.stale .readout-value {
    opacity: 0.55;
  }

  /* Outset here, unlike the layers: the readout sits inside the stage
     with room around it, so the ring reads better outside the text than
     cutting through it. */
  .readout-row:focus-visible {
    outline: 2px solid var(--wtl-accent);
    outline-offset: 1px;
  }

  .readout-row:hover .readout-name {
    color: #fff;
  }

  .spark-wrap {
    margin: 2px 0 4px;
    color: rgba(255, 255, 255, 0.7);
  }

  .spark {
    display: block;
    width: 100%;
    height: 34px;
  }

  /* Night behind the line. Deliberately faint: it is context for the
     reading, not a series of its own, and it has to stay readable over
     an arbitrary photograph in both a bright frame and a dark one.
     currentColor picks up .spark-wrap's white, so it darkens nothing —
     it lifts the night, which is the only direction that works on a
     scrim that is already black. */
  .spark-night {
    fill: currentColor;
    opacity: 0.12;
  }

  /* The chart's units. Lives in HTML rather than inside the SVG because
     the SVG is preserveAspectRatio="none" — an in-chart <text> would be
     stretched horizontally by whatever width the block happens to be, and
     that width is content-driven in the corner layout and near
     full-bleed in the stacked one.

     Ends pushed apart: how far it moved reads against the chart's
     vertical extent, how long over reads against its horizontal one, so
     each label sits on the axis it describes. */
  .spark-scale {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 1px;
    font-size: var(--ha-font-size-xs, 10px);
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.6);
    white-space: nowrap;
  }

  .readout-at {
    font-size: var(--ha-font-size-xs, 10px);
    color: rgba(255, 255, 255, 0.6);
  }

  /* --- controls ---------------------------------------------------- */

  /* A pill over the frame instead of a bar under it. Removing the row
     from the flow is most of the height this card saves, and the
     controls belong to the picture anyway. Same dark scrim as the other
     stage overlays so it stays legible over any frame. */
  .controls {
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px 6px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(2px);
    color: #fff;
    /* Smaller than the 48px default so the pill stays slim, still well
       over the 24px WCAG 2.5.8 minimum target. */
    --mdc-icon-button-size: 40px;
    --mdc-icon-size: 20px;
  }

  /* The one control people reach for without looking, so it carries the
     extra weight. Size is the whole signal — no accent colour, which
     would compete with the LIVE badge for the eye. */
  .controls .play {
    --mdc-icon-button-size: 46px;
    --mdc-icon-size: 26px;
  }

  /* Divides transport from the controls that are not transport. A hairline
     rather than a gap: the gap alone reads as a rendering accident at this
     size, and the eye needs the group boundary to be deliberate. */
  .sep {
    width: 1px;
    height: 18px;
    margin: 0 5px;
    background: rgba(255, 255, 255, 0.28);
  }

  .speed {
    min-width: 40px;
    padding: 6px 8px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: inherit;
    font: inherit;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  .speed:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  .speed:focus-visible {
    outline: 2px solid var(--wtl-accent);
    outline-offset: 2px;
  }

  /* --- scrubber ---------------------------------------------------- */

  /* Dates, bar and clock times as one block. The bands are in normal
     flow and the marks live inside the track, so all three are keyed off
     the same percentage and cannot drift apart. */
  /* The top margin is load-bearing: the date band is the first thing
     under the frame, and with no gap the labels read as part of the
     picture rather than as the timeline's heading. */
  .timeline {
    margin: 12px 12px 8px;
  }

  .band {
    position: relative;
    height: 12px;
  }

  .band.dates {
    margin-bottom: 1px;
  }

  .band.times {
    margin-top: 1px;
  }

  .track {
    position: relative;
    height: 40px; /* WCAG 2.5.8 target size, kept even though the bar is thin */
  }

  /* Behind the bar, not beside it. Paint order is DOM order — the marks
     render before the rail — because a z-index here would re-enter the
     stacking competition .layers exists to contain. */
  /* Night behind the scrubber, in the same faint-band language the charts
     use — learned once, read in both places. First child of .track, so
     paint order puts it under the marks, the rail and the fill without
     anyone reaching for z-index.

     Deliberately not a curve of solar elevation. A sine would be prettier
     and would say less: the scrubber is a control, and what it owes the
     viewer is which stretches of the archive are dark frames not worth
     scrubbing to. Elevation is not that, and a ripple through a bar that
     already carries day ticks, gap runs and a fill would read as texture
     rather than as information. */
  .nights {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  /* currentColor, not a fixed tone: unlike the overlay bands this sits on
     the card surface, which follows the Home Assistant theme and may be
     light. Tying it to the text colour means night darkens a light theme
     and lifts a dark one, which is the only direction that works on
     each. Fainter than the chart's for the same reason — there is no
     black scrim here to compete with. */
  .night {
    position: absolute;
    top: 0;
    bottom: 0;
    background: currentColor;
    opacity: 0.07;
  }

  /* The stretch of the timeline an export would cover. The same idiom
     as the night bands — a tinted span behind the bar, placed by DOM
     order rather than z-index — but in the accent colour and far
     stronger: night is context, this is a selection the user made and
     has to be able to see while dragging the playhead to its other end. */
  .export-band {
    position: absolute;
    top: 50%;
    height: 20px;
    /* A one-frame selection still has to be findable on the bar. */
    min-width: 3px;
    transform: translateY(-50%);
    border-radius: 3px;
    background: var(--wtl-accent);
    opacity: 0.25;
    pointer-events: none;
  }

  .marks {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  /* Centred on the rail so each mark reads as a tick the bar runs
     through, showing equally above and below it.

     The marks carry their own colour, deliberately not the rail's. Both
     were --wtl-divider, which is the token for "barely there" — so the
     scale dissolved into the bar it sits behind and read as hidden
     rather than quiet.

     Weight is graded rather than uniform, because the hierarchy is the
     information: minor ticks say the scale is continuous, day boundaries
     are what you actually navigate by, month starts are the rarest and
     strongest. Only 6px of a minor tick clears the 6px rail, so the
     contrast has to do the work the length cannot. */
  .mark {
    position: absolute;
    top: 50%;
    width: 1px;
    height: 18px;
    transform: translate(-50%, -50%);
    background: var(--wtl-muted);
    opacity: 0.5;
  }

  .mark.day {
    height: 26px;
    background: var(--wtl-text);
    opacity: 0.85;
  }

  .mark.month {
    height: 34px;
    width: 2px;
    background: var(--wtl-text);
    opacity: 1;
  }

  .rail,
  .fill,
  .gap-run {
    position: absolute;
    top: 50%;
    height: 6px;
    transform: translateY(-50%);
    border-radius: 3px;
    pointer-events: none;
  }

  .rail {
    left: 0;
    right: 0;
    background: var(--wtl-divider);
  }

  .fill {
    left: 0;
    background: var(--wtl-accent);
    opacity: 0.65;
  }

  .gap-run {
    background: repeating-linear-gradient(
      45deg,
      var(--wtl-gap) 0 3px,
      transparent 3px 6px
    );
    opacity: 0.8;
  }

  input[type="range"] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background: transparent;
    appearance: none;
    cursor: pointer;
  }

  input[type="range"]:focus-visible {
    outline: 2px solid var(--wtl-accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid var(--wtl-surface);
    border-radius: 50%;
    background: var(--wtl-accent);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: 2px solid var(--wtl-surface);
    border-radius: 50%;
    background: var(--wtl-accent);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  /* --- ruler labels ------------------------------------------------ */

  /* Two bands, dates above the bar and clock times below, so the label
     families never have to be thinned against each other — each only
     collides with its own kind. Dates go on top because a day boundary
     is the coarser unit: the eye reads them as headings over the scale.

     line-height is pinned rather than inherited. The bands are fixed
     height, so a label's box height has to be known here; inheriting
     HA's 1.5 made the date box 17px tall in a 12px band and it spilled
     into the marks below. */
  .lab {
    position: absolute;
    left: 0;
    transform: translateX(-50%);
    font-size: var(--ha-font-size-xs, 10px);
    line-height: 1;
    color: var(--wtl-muted);
    white-space: nowrap;
    pointer-events: none;
  }

  .lab.time {
    top: 0;
    /* Clock digits must not shuffle the label's centre as they change. */
    font-variant-numeric: tabular-nums;
    opacity: 0.7;
  }

  /* Slightly stronger than the clock row: it is the heading, and it
     appears far less often, so it can afford the weight without turning
     the timeline into noise. */
  .lab.date {
    bottom: 0;
    font-weight: 500;
    color: var(--wtl-text);
  }

  /* --- video export ------------------------------------------------ */

  /* Under the timeline, in normal flow. Deliberately not a button on the
     control pill: the pill's width is what the narrow-layout breakpoints
     above are derived from, and export is a once-in-a-while action that
     does not belong among the transport controls anyway.

     Every control here is a native element. Home Assistant's own
     (ha-button, ha-switch, ha-select) are loaded lazily by whichever
     core panel needs them first, so in a card they may or may not be
     registered — and an unregistered custom element renders as nothing
     at all, with no error. */
  .export {
    margin: 0 12px 10px;
    font-size: var(--ha-font-size-s, 12px);
  }

  .export button,
  .export-download {
    font: inherit;
    cursor: pointer;
  }

  .export button:focus-visible,
  .export-download:focus-visible,
  .export-check input:focus-visible {
    outline: 2px solid var(--wtl-accent);
    outline-offset: 2px;
  }

  /* Quiet until wanted, like the fold control on the readings. */
  .export-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 28px;
    padding: 4px 8px;
    margin-left: -8px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: var(--wtl-muted);
    --mdc-icon-size: 16px;
  }

  .export-toggle:hover,
  .export-toggle[aria-expanded="true"] {
    color: var(--wtl-text);
  }

  .export-panel {
    display: grid;
    gap: 12px;
    margin-top: 4px;
    padding: 12px;
    border: 1px solid var(--wtl-divider);
    border-radius: 8px;
    color: var(--wtl-text);
  }

  /* From and To side by side while there is room, stacked when not. */
  .export-ends {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 10px 16px;
  }

  .export-end {
    display: grid;
    gap: 4px;
    justify-items: start;
  }

  .export-label {
    color: var(--wtl-muted);
  }

  /* Digits must not shift width as the range is moved. */
  .export-stamp {
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--ha-font-weight-medium, 500);
    font-variant-numeric: tabular-nums;
  }

  .export-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 8px;
  }

  .export-chip {
    min-height: 28px;
    padding: 4px 10px;
    border: 1px solid var(--wtl-divider);
    border-radius: 999px;
    background: none;
    color: inherit;
    font-variant-numeric: tabular-nums;
  }

  .export-chip:hover {
    border-color: var(--wtl-muted);
  }

  /* The chosen frame rate. Border and tint, not colour alone, so it
     still reads as selected in forced-colours and to anyone who cannot
     tell the accent from the divider. */
  .export-chip[aria-pressed="true"] {
    border-color: var(--wtl-accent);
    border-width: 2px;
    padding: 3px 9px;
    font-weight: var(--ha-font-weight-medium, 500);
  }

  .export-check {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 28px;
    cursor: pointer;
  }

  .export-check input {
    width: 16px;
    height: 16px;
    margin: 0;
    accent-color: var(--wtl-accent);
  }

  .export-summary {
    color: var(--wtl-muted);
    font-variant-numeric: tabular-nums;
  }

  .export-go,
  .export-download {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 36px;
    padding: 6px 18px;
    border: 0;
    border-radius: 999px;
    background: var(--wtl-accent);
    color: var(--text-primary-color, #fff);
    font-weight: var(--ha-font-weight-medium, 500);
    text-decoration: none;
    --mdc-icon-size: 18px;
  }

  /* While an export runs the form is locked, and has to look it:
     a control that ignores a press without saying why reads as a
     broken card. */
  .export-go:disabled,
  .export-chip:disabled {
    opacity: 0.45;
    cursor: default;
  }

  .export-chip:disabled:hover {
    border-color: var(--wtl-divider);
  }

  .export-status {
    display: grid;
    gap: 8px;
    justify-items: start;
  }

  .export-status .detail {
    color: var(--wtl-muted);
    overflow-wrap: anywhere;
  }

  .export-error {
    color: var(--wtl-gap);
  }

  .export-progress {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--wtl-divider);
    overflow: hidden;
  }

  .export-progress span {
    display: block;
    height: 100%;
    background: var(--wtl-accent);
  }

  /* --- editor ------------------------------------------------------ */

  .ent-section {
    padding: 8px 0 4px;
  }

  .ent-section h4 {
    margin: 8px 0 2px;
    font-weight: var(--ha-font-weight-medium, 500);
  }

  .ent-hint {
    margin: 0 0 12px;
    color: var(--wtl-muted);
    font-size: var(--ha-font-size-s, 12px);
  }

  /* The heading applies to the whole readings block, not to any one row,
     so it sits above them at full width. ha-form is block-level already;
     the wrapper carries only the spacing. */
  .ent-title {
    display: block;
    margin-bottom: 4px;
  }

  .ent-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    padding: 12px 0;
    border-top: 1px solid var(--wtl-divider);
  }

  /* The row is a two-column grid and ha-form is a direct child, so
     without this it lands in the narrow auto column beside the entity
     picker instead of under it. */
  .ent-row ha-form {
    grid-column: 1 / -1;
  }

  .ent-controls {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .ent-actions {
    display: flex;
    align-items: start;
  }

  .swatch {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: var(--ha-font-size-s, 12px);
    color: var(--wtl-muted);
  }

  .swatch input[type="color"] {
    width: 44px;
    height: 32px;
    padding: 0;
    border: 1px solid var(--wtl-divider);
    border-radius: 6px;
    background: none;
    cursor: pointer;
  }

  /* --- version banner ---------------------------------------------- */

  .banner {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 12px;
    background: var(--warning-color, #ffa726);
    color: #000;
    font-size: var(--ha-font-size-s, 12px);
  }

  .banner button {
    margin-left: auto;
    border: 0;
    border-radius: 4px;
    padding: 4px 8px;
    font: inherit;
    cursor: pointer;
  }

  /* --- responsive -------------------------------------------------- */

  /* Two blocks run out of room sooner than one, so the pair gets its own
     breakpoint rather than inheriting the number below.

     Re-derived rather than reused: the pill is centred at ~212px, so its
     left edge sits at W/2 - 106. The left-hand block starts 8px in and a
     three-sensor block runs ~230px, putting its right edge at ~238. Those
     meet at W ≈ 688 — the single block's 620 would let the pair overlap
     the pill for most of a phone's width.

     Stacked rather than side by side, because below this width there is
     no arrangement of two blocks along the bottom edge that clears the
     centred pill at all. */
  @container (max-width: 700px) {
    /* The wrapper becomes a box only here. Every declaration in this
       block is scoped to .pair, which is what keeps a single block on
       exactly the layout it had before the second one existed. */
    .readouts.pair {
      position: absolute;
      top: 8px;
      left: 8px;
      right: 8px;
      display: flex;
      /* Reversed against DOM order so the right-hand block sits on top.
         It is the block that was there first, and the one a single-block
         card would have shown on its own. */
      flex-direction: column-reverse;
      align-items: center;
      gap: 8px;
    }

    /* Back into normal flow so the column can stack them. The corner pins
       are inert on a static box, but the centring transform below is not
       — left unset it would drag both blocks half their width off centre. */
    .readouts.pair .readout {
      position: static;
      transform: none;
      max-width: 100%;
    }

  }

  /* Breakpoint set by the collision, not by a round number.

     The control pill is centred and the readout is right-aligned, so the
     two close on each other as the card narrows. The pill is ~212px, and
     a three-sensor readout runs ~230px, which puts the meeting point just
     past 600px — hence 620px, with a little margin because the readout's
     width follows its content. Below that the readout moves to the top,
     where nothing else is competing for the space. */
  @container (max-width: 620px) {
    /* Cleared explicitly: the base rule pins the bottom-right corner, and
       an unset side would leave the box anchored to both. */
    .readout {
      right: auto;
      bottom: auto;
      /* Same top edge as the timestamp and the badge, so the three
         overlays read as one row across the top of the frame instead of
         three boxes at unrelated heights. Kept in step with .stamp and
         .badge by a test rather than by memory. */
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      max-width: calc(100% - 16px);
    }

    /* A card configured with only the left block still gets one centred
       block up here. Without this its edge pin outranks the centring
       above — more specific — and it would sit at left: 8px while the
       transform pulled it half its own width off the frame. */
    .readout.left {
      left: 50%;
    }

  }

  /* prefers-reduced-motion is handled entirely in TypeScript, not here.

     The frame fade's transition is an inline style, and inline beats a
     stylesheet rule regardless of the media query, so a rule in this
     file would look correct and do nothing. fadeDurationMs() returns 0
     instead, and startAutoplayIfRequested() refuses to start playback,
     both via prefersReducedMotion(). */

  @media (forced-colors: active) {
    .fill,
    .gap-run,
    .export-band,
    .export-progress span {
      forced-color-adjust: none;
    }
  }
`;var be={no_frames:"No frames archived yet.",first_soon:"The first one appears at the next capture.",frame_failed:"This frame could not be loaded.",index_failed:"Could not load the timeline."},xe={live:"LIVE",gap:"NO IMAGE"},ye={play:"Play",pause:"Pause",previous:"Previous frame",next:"Next frame",speed:"Playback speed {v}x",now:"Jump to now"},we={label:"Timeline position"},ve={range:"Range {v}",flat:"No change"},_e={no_camera:"You need to pick a camera in the card configuration."},$e="This card was updated to {v}. Reload to pick up the new version.",ke="Reload",Se={camera_entity:"Camera",title:"Title",show_dayticks:"Show day markers",show_graph:"Show graphs",show_sun:"Mark night",playback:"Playback",autoplay:"Play automatically",speed:"Speed",graph_hours:"Graph window",overlay_right:"Overlay readings (right)",overlay_right_hint:"Values shown over the image are read at the moment you scrub to, not the current ones.",overlay_left:"Overlay readings (left)",overlay_left_hint:"A second block on the other side of the picture. Leave it empty for one block on the right.",add_entity:"Add entity",entity:"Entity",name:"Label",unit:"Unit",decimals:"Decimals",color:"Colour",graph:"Graph",move_up:"Move up",move_down:"Move down",remove:"Remove",helper:{camera_entity:"Only cameras created by this integration have an archive to scrub.",graph_hours:"How much history the sparkline shows around the playhead.",autoplay:"Ignored when your system asks for reduced motion.",deflicker:"Evens out cloud-driven brightness jumps during playback. 0 turns it off.",overlay_title:"Shown above the readings. Leave empty for no heading.",overlay_title_left:"Shown above the readings. Leave empty for no heading.",show_icon:"Uses the entity's own icon from Home Assistant.",show_sun:"Shades the hours between sunset and sunrise on the graphs and the scrubber, using your Home Assistant location. Hidden when the bands get too fine to read.",show_export:"Shows an export button under the timeline. The video is rendered by Home Assistant and saved to the media folder."},deflicker:"Smooth brightness",show_icon:"Show icon",overlay_title:"Heading",overlay_title_left:"Heading",show_export:"Offer video export"},Ee={show_camera:"Show camera details",show_entity:"Show details for {v}",hide_readings:"Hide readings",show_readings:"Show readings"},Ae={empty:be,badge:xe,controls:ye,track:we,spark:ve,error:_e,version_update:$e,version_reload:ke,editor:Se,actions:Ee,export:{open:"Export video",close:"Close export",from:"From",to:"To",start_here:"Start at this frame",end_here:"End at this frame",preset_hours:"Last {v} h",preset_days:"Last {v} d",preset_all:"Everything",fps:"Frames per second",timestamp:"Date and time",readings:"Sensor readings",summary:"{frames} frames, {length} of video",summary_empty:"No frames in this range.",start:"Export",cancel:"Cancel",preparing:"Preparing…",running:"Encoding frame {done} of {total}",done:"Video ready",saved:"Saved in Media as {v}",download:"Download",cancelled:"Export cancelled.",band:"Range selected for export",error:{export_running:"An export is already running for this camera.",export_no_frames:"There are no frames in that range.",export_bad_range:"The end of the range is before its start.",export_cancelled:"Export cancelled.",export_low_disk:"There is not enough free space in the media folder.",export_ffmpeg_missing:"ffmpeg was not found on this Home Assistant, so the video could not be encoded.",export_ffmpeg_failed:"ffmpeg could not encode the video. The Home Assistant log has the details.",export_failed:"The export failed. The Home Assistant log has the details.",entry_not_loaded:"This camera is not loaded right now. Try again once it has started.",unknown:"The export could not be started."}}},Me={no_frames:"Noch keine Bilder gespeichert.",first_soon:"Das erste erscheint bei der nächsten Aufnahme.",frame_failed:"Dieses Bild konnte nicht geladen werden.",index_failed:"Die Zeitleiste konnte nicht geladen werden."},Te={live:"LIVE",gap:"KEIN BILD"},Ce={play:"Abspielen",pause:"Pause",previous:"Vorheriges Bild",next:"Nächstes Bild",speed:"Wiedergabegeschwindigkeit {v}x",now:"Zur Gegenwart springen"},Pe={label:"Position auf der Zeitleiste"},ze={range:"Spanne {v}",flat:"Unverändert"},Re={no_camera:"Bitte wähle in der Kartenkonfiguration eine Kamera aus."},Oe="Diese Karte wurde auf {v} aktualisiert. Lade neu, um die neue Version zu verwenden.",De="Neu laden",Fe={camera_entity:"Kamera",title:"Titel",show_dayticks:"Tagesmarkierungen anzeigen",show_graph:"Diagramme anzeigen",show_sun:"Nacht markieren",playback:"Wiedergabe",autoplay:"Automatisch abspielen",speed:"Geschwindigkeit",graph_hours:"Diagramm-Zeitraum",overlay_right:"Eingeblendete Messwerte (rechts)",overlay_right_hint:"Die Werte über dem Bild gehören zu dem Zeitpunkt, zu dem du scrollst – nicht zur Gegenwart.",overlay_left:"Eingeblendete Messwerte (links)",overlay_left_hint:"Ein zweiter Block auf der anderen Seite des Bildes. Leer lassen, dann bleibt es bei einem Block rechts.",add_entity:"Entität hinzufügen",entity:"Entität",name:"Bezeichnung",unit:"Einheit",decimals:"Nachkommastellen",color:"Farbe",graph:"Diagramm",move_up:"Nach oben",move_down:"Nach unten",remove:"Entfernen",helper:{camera_entity:"Nur Kameras dieser Integration haben ein Archiv zum Durchblättern.",graph_hours:"Wie viel Verlauf die Sparkline rund um die Position zeigt.",autoplay:"Wird ignoriert, wenn dein System reduzierte Bewegung anfordert.",deflicker:"Gleicht wolkenbedingte Helligkeitssprünge bei der Wiedergabe aus. 0 schaltet es ab.",overlay_title:"Wird über den Messwerten angezeigt. Leer lassen für keine Überschrift.",overlay_title_left:"Wird über den Messwerten angezeigt. Leer lassen für keine Überschrift.",show_icon:"Verwendet das Symbol der Entität aus Home Assistant.",show_sun:"Hinterlegt die Stunden zwischen Sonnenuntergang und Sonnenaufgang in den Diagrammen und in der Zeitleiste, basierend auf deinem Home-Assistant-Standort. Wird ausgeblendet, sobald die Streifen zu fein werden.",show_export:"Zeigt unter der Zeitleiste eine Export-Schaltfläche. Das Video wird von Home Assistant gerendert und im Medienordner gespeichert."},deflicker:"Helligkeit glätten",show_icon:"Symbol anzeigen",overlay_title:"Überschrift",overlay_title_left:"Überschrift",show_export:"Videoexport anbieten"},Ne={show_camera:"Kameradetails anzeigen",show_entity:"Details für {v} anzeigen",hide_readings:"Messwerte ausblenden",show_readings:"Messwerte einblenden"},He={empty:Me,badge:Te,controls:Ce,track:Pe,spark:ze,error:Re,version_update:Oe,version_reload:De,editor:Fe,actions:Ne,export:{open:"Video exportieren",close:"Export schließen",from:"Von",to:"Bis",start_here:"Bei diesem Bild beginnen",end_here:"Bei diesem Bild enden",preset_hours:"Letzte {v} h",preset_days:"Letzte {v} T",preset_all:"Alles",fps:"Bilder pro Sekunde",timestamp:"Datum und Uhrzeit",readings:"Sensorwerte",summary:"{frames} Bilder, {length} Video",summary_empty:"Keine Bilder in diesem Zeitraum.",start:"Exportieren",cancel:"Abbrechen",preparing:"Wird vorbereitet…",running:"Bild {done} von {total} wird kodiert",done:"Video fertig",saved:"In Medien gespeichert als {v}",download:"Herunterladen",cancelled:"Export abgebrochen.",band:"Für den Export gewählter Zeitraum",error:{export_running:"Für diese Kamera läuft bereits ein Export.",export_no_frames:"In diesem Zeitraum gibt es keine Bilder.",export_bad_range:"Das Ende des Zeitraums liegt vor seinem Anfang.",export_cancelled:"Export abgebrochen.",export_low_disk:"Im Medienordner ist nicht genug Speicherplatz frei.",export_ffmpeg_missing:"ffmpeg wurde auf diesem Home Assistant nicht gefunden, daher konnte das Video nicht kodiert werden.",export_ffmpeg_failed:"ffmpeg konnte das Video nicht kodieren. Details stehen im Home-Assistant-Protokoll.",export_failed:"Der Export ist fehlgeschlagen. Details stehen im Home-Assistant-Protokoll.",entry_not_loaded:"Diese Kamera ist gerade nicht geladen. Versuche es erneut, sobald sie gestartet ist.",unknown:"Der Export konnte nicht gestartet werden."}}};const Ue={en:Object.freeze({__proto__:null,actions:Ee,badge:xe,controls:ye,default:Ae,editor:Se,empty:be,error:_e,export:{open:"Export video",close:"Close export",from:"From",to:"To",start_here:"Start at this frame",end_here:"End at this frame",preset_hours:"Last {v} h",preset_days:"Last {v} d",preset_all:"Everything",fps:"Frames per second",timestamp:"Date and time",readings:"Sensor readings",summary:"{frames} frames, {length} of video",summary_empty:"No frames in this range.",start:"Export",cancel:"Cancel",preparing:"Preparing…",running:"Encoding frame {done} of {total}",done:"Video ready",saved:"Saved in Media as {v}",download:"Download",cancelled:"Export cancelled.",band:"Range selected for export",error:{export_running:"An export is already running for this camera.",export_no_frames:"There are no frames in that range.",export_bad_range:"The end of the range is before its start.",export_cancelled:"Export cancelled.",export_low_disk:"There is not enough free space in the media folder.",export_ffmpeg_missing:"ffmpeg was not found on this Home Assistant, so the video could not be encoded.",export_ffmpeg_failed:"ffmpeg could not encode the video. The Home Assistant log has the details.",export_failed:"The export failed. The Home Assistant log has the details.",entry_not_loaded:"This camera is not loaded right now. Try again once it has started.",unknown:"The export could not be started."}},spark:ve,track:we,version_reload:ke,version_update:$e}),de:Object.freeze({__proto__:null,actions:Ne,badge:Te,controls:Ce,default:He,editor:Fe,empty:Me,error:Re,export:{open:"Video exportieren",close:"Export schließen",from:"Von",to:"Bis",start_here:"Bei diesem Bild beginnen",end_here:"Bei diesem Bild enden",preset_hours:"Letzte {v} h",preset_days:"Letzte {v} T",preset_all:"Alles",fps:"Bilder pro Sekunde",timestamp:"Datum und Uhrzeit",readings:"Sensorwerte",summary:"{frames} Bilder, {length} Video",summary_empty:"Keine Bilder in diesem Zeitraum.",start:"Exportieren",cancel:"Abbrechen",preparing:"Wird vorbereitet…",running:"Bild {done} von {total} wird kodiert",done:"Video fertig",saved:"In Medien gespeichert als {v}",download:"Herunterladen",cancelled:"Export abgebrochen.",band:"Für den Export gewählter Zeitraum",error:{export_running:"Für diese Kamera läuft bereits ein Export.",export_no_frames:"In diesem Zeitraum gibt es keine Bilder.",export_bad_range:"Das Ende des Zeitraums liegt vor seinem Anfang.",export_cancelled:"Export abgebrochen.",export_low_disk:"Im Medienordner ist nicht genug Speicherplatz frei.",export_ffmpeg_missing:"ffmpeg wurde auf diesem Home Assistant nicht gefunden, daher konnte das Video nicht kodiert werden.",export_ffmpeg_failed:"ffmpeg konnte das Video nicht kodieren. Details stehen im Home-Assistant-Protokoll.",export_failed:"Der Export ist fehlgeschlagen. Details stehen im Home-Assistant-Protokoll.",entry_not_loaded:"Diese Kamera ist gerade nicht geladen. Versuche es erneut, sobald sie gestartet ist.",unknown:"Der Export konnte nicht gestartet werden."}},spark:ze,track:Pe,version_reload:De,version_update:Oe})};function Le(e,t){const i=e.split(".").reduce((e,t)=>{if(e&&"object"==typeof e&&t in e)return e[t]},t);return"string"==typeof i?i:void 0}function Be(e,t=void 0,i="",n=""){const s=(t??"en").toLowerCase().split(/[-_]/)[0]??"en",o=Ue.en??{};let r=Le(e,Ue[s]??Ue.en??{});return void 0===r&&(r=Le(e,o)),void 0===r&&(r=e),""!==i&&""!==n&&(r=r.replace(i,n)),r}var Ie;const We=[1,2,4,8,16,32,64],je=[{name:"overlay_title",selector:{text:{}}}],Ve=[{name:"overlay_title_left",selector:{text:{}}}],qe=[{type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:4,mode:"box"}}},{name:"graph_hours",selector:{number:{min:1,max:8760,mode:"box",unit_of_measurement:"h"}}}]}];let Ze=class extends he{constructor(){super(...arguments),this.computeLabel=e=>this.t(`editor.${e.name}`),this.computeHelper=e=>{const t=this.t(`editor.helper.${e.name}`);return t.startsWith("editor.")?void 0:t}}static{Ie=this}static{this.styles=fe}setConfig(e){this.config=e}get uiLanguage(){return this.hass?.locale?.language??this.hass?.language??"en"}t(e){return Be(e,this.uiLanguage)}get schema(){return[{name:"camera_entity",required:!0,selector:{entity:{filter:{domain:"camera",integration:"webcam_timelapse"}}}},{name:"title",selector:{text:{}}},{type:"grid",schema:[{name:"show_dayticks",selector:{boolean:{}}},{name:"show_graph",selector:{boolean:{}}},{name:"show_sun",selector:{boolean:{}}},{name:"show_export",selector:{boolean:{}}}]},{type:"expandable",name:"playback",icon:"mdi:play-speed",flatten:!0,schema:[{name:"autoplay",selector:{boolean:{}}},{name:"speed",selector:{select:{mode:"dropdown",options:We.map(e=>({value:e,label:`${e}x`}))}}},{name:"deflicker",selector:{number:{min:0,max:100,step:5,mode:"slider"}}},{name:"graph_hours",selector:{number:{min:1,max:336,mode:"slider",unit_of_measurement:"h"}}}]}]}onFormChange(e){e.stopPropagation(),this.emit({...this.config,...e.detail.value})}emit(e){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0}))}static{this.ENTITY_KEY={right:"entities",left:"entities_left"}}rows(e){return this.config?.[Ie.ENTITY_KEY[e]]??[]}updateRows(e,t){this.emit({...this.config,[Ie.ENTITY_KEY[e]]:t})}addRow(e){this.updateRows(e,[...this.rows(e),{entity:""}])}removeRow(e,t){this.updateRows(e,this.rows(e).filter((e,i)=>i!==t))}moveRow(e,t,i){const n=[...this.rows(e)],s=t+i;s<0||s>=n.length||([n[t],n[s]]=[n[s],n[t]],this.updateRows(e,n))}patchRow(e,t,i){const n=this.rows(e).map((e,n)=>n===t?{...e,...i}:e);this.updateRows(e,n)}renderRow(e,t,i){const n=t.name||t.entity||this.t("editor.entity");return W`
      <div class="ent-row" role="group" aria-label=${n}>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${t.entity}
          allow-custom-entity
          @value-changed=${t=>{t.stopPropagation(),this.patchRow(e,i,{entity:t.detail.value})}}
        ></ha-entity-picker>

        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${qe}
          .computeLabel=${this.computeLabel}
          @value-changed=${t=>{t.stopPropagation(),this.patchRow(e,i,t.detail.value)}}
        ></ha-form>

        <div class="ent-controls">
          <!-- The one sanctioned native control: HA ships no colour
               selector. Both @input and @change are wired — @input gives
               a live preview while dragging, @change is what fires on
               some platforms when the picker closes. -->
          <label class="swatch">
            <span>${this.t("editor.color")}</span>
            <input
              type="color"
              .value=${t.color??"#3d7ea6"}
              @input=${t=>this.patchRow(e,i,{color:t.target.value})}
              @change=${t=>this.patchRow(e,i,{color:t.target.value})}
            />
          </label>

          <ha-formfield .label=${this.t("editor.show_icon")}>
            <ha-switch
              .checked=${t.show_icon??!1}
              @change=${t=>this.patchRow(e,i,{show_icon:t.target.checked})}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield .label=${this.t("editor.graph")}>
            <ha-switch
              .checked=${t.graph??!1}
              @change=${t=>this.patchRow(e,i,{graph:t.target.checked})}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="ent-actions">
          <ha-icon-button
            .label=${this.t("editor.move_up")}
            .disabled=${0===i}
            @click=${()=>this.moveRow(e,i,-1)}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            .label=${this.t("editor.move_down")}
            .disabled=${i===this.rows(e).length-1}
            @click=${()=>this.moveRow(e,i,1)}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            .label=${this.t("editor.remove")}
            @click=${()=>this.removeRow(e,i)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}render(){return this.hass&&this.config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${this.schema}
        .computeLabel=${this.computeLabel}
        .computeHelper=${this.computeHelper}
        @value-changed=${this.onFormChange}
      ></ha-form>

      ${this.renderSection("right",je)}
      ${this.renderSection("left",Ve)}
    `:W`${q}`}renderSection(e,t){const i=this.t("editor.overlay_"+e),n=this.t("editor.overlay_"+e+"_hint");return W`
      <div class="ent-section">
        <h4>${i}</h4>
        <p class="ent-hint">${n}</p>

        <div class="ent-title">
          <ha-form
            .hass=${this.hass}
            .data=${this.config}
            .schema=${t}
            .computeLabel=${this.computeLabel}
            .computeHelper=${this.computeHelper}
            @value-changed=${this.onFormChange}
          ></ha-form>
        </div>

        ${this.rows(e).map((t,i)=>this.renderRow(e,t,i))}
        <ha-button @click=${()=>this.addRow(e)}>
          <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
          ${this.t("editor.add_entity")}
        </ha-button>
      </div>
    `}};e([ue({attribute:!1})],Ze.prototype,"hass",void 0),e([me()],Ze.prototype,"config",void 0),Ze=Ie=e([de("webcam-timelapse-card-editor")],Ze);class Ge{constructor(e){this.task=e,this.running=!1,this.queued=!1,this.waiters=[]}request(){return new Promise(e=>{this.waiters.push(e),this.running?this.queued=!0:this.drain()})}get busy(){return this.running}async drain(){this.running=!0;try{do{this.queued=!1;const e=this.waiters;this.waiters=[];try{await this.task()}catch{}for(const t of e)t()}while(this.queued)}finally{this.running=!1}}}const Ke="webcam-timelapse-card",Ye={radius:6,maxGain:1.5};function Je(e,t=.15){if(0===e.length)return 0;const i=[...e].sort((e,t)=>e-t),n=Math.floor(i.length*t),s=i.length-2*n>=3?i.slice(n,i.length-n):i;return s.reduce((e,t)=>e+t,0)/s.length}const Xe={base:"",ext:".webp",step:600,t0:null,count:0,gaps:[],retention_days:0,online:!0,newest_slot:null};function Qe(e,t){return null===e.t0||t<0||t>=e.count?null:e.t0+t*e.step}function et(e,t){const i=Qe(e,t);return null===i?null:`${e.base}${i}${e.ext}`}function tt(e,t,i=1){for(let n=t;n>=0&&n<e.length;n+=i)if(e[n])return n;return null}function it(e){return null!==e.t0&&e.count>0}class nt{constructor(e){this.size=e,this.cursor=0,this.slots=new Array(e).fill(null)}prefetch(e){const t=new Image;t.decoding="async",t.fetchPriority="low",t.src=e,this.slots[this.cursor]=t,this.cursor=(this.cursor+1)%this.size}clear(){this.slots.fill(null),this.cursor=0}}function st(e){return Math.min(Math.max(Math.round(4*e),4),16)}const ot=1e3/33;function rt(e,t,i){const n=tt(e,t+Math.max(1,i));if(null!==n)return n;const s=tt(e,e.length-1,-1);return null!==s&&s>t?s:null}function at(e){return e.currentSrc!==e.requested?"pending":e.complete?e.naturalWidth>0?"ready":"failed":"pending"}function ht(e){const t=e?.trim();return t||void 0}function lt(e){const t=[],i=e?.entities_left??[];i.length>0&&t.push({side:"left",title:ht(e?.overlay_title_left),entities:i});const n=e?.entities??[];return n.length>0&&t.push({side:"right",title:ht(e?.overlay_title),entities:n}),t}function dt(e){return lt(e).flatMap(e=>e.entities)}const ct=[12,24,30,60],pt=[24,72,168];function ut(e){return null===e.t0||0===e.count?null:{start:0,end:e.count-1}}function mt(e,t){const i=Math.max(0,t-1),n=e=>Math.min(Math.max(Math.round(e),0),i),s=n(e.start),o=n(e.end);return s<=o?{start:s,end:o}:{start:o,end:s}}function gt(e){if(!Number.isFinite(e)||e<=0)return"0 s";if(e<60)return e<10?`${(Math.round(10*e)/10).toString()} s`:`${Math.round(e)} s`;const t=Math.round(e),i=e=>String(e).padStart(2,"0"),n=Math.floor(t/60);return n<60?`${n}:${i(t%60)} min`:`${Math.floor(n/60)}:${i(n%60)}:${i(t%60)} h`}function ft(e){const t=/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/.exec(e.trim());return t?`#${t.slice(1,4).map(e=>Math.min(255,Number(e)).toString(16).padStart(2,"0")).join("")}`:e}function bt(e,t){if(0===dt(e).length)return null;const i=e=>(e??[]).map(e=>e.color?{...e,color:ft(t(e.color))}:e);return{entities:i(e.entities),entities_left:i(e.entities_left),overlay_title:e.overlay_title??"",overlay_title_left:e.overlay_title_left??"",graph_hours:e.graph_hours??24,show_graph:!1!==e.show_graph,show_sun:!0===e.show_sun,accent_color:ft(t("var(--wtl-accent)"))}}function xt(e,t,i,n,s,o){const r=function(e,t){const i=Qe(e,t.start),n=Qe(e,t.end);return null===i||null===n?null:{start:i,end:n}}(t,i);return null===r?null:{entity_id:e.camera_entity,start:r.start,end:r.end,fps:n.fps,deflicker:Math.min(100,Math.max(0,Math.round(e.deflicker??0))),timestamp:n.timestamp,overlay:n.readings?bt(e,o):null,language:s}}const yt=new Map;function wt(e,t){const i=`${e}|${JSON.stringify(t)}`;let n=yt.get(i);return void 0===n&&(n=new Intl.DateTimeFormat(e,t),yt.set(i,n)),n}function vt(e,t){return wt("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(1e3*e))}function _t(e,t){const i=wt("en-GB",{timeZone:t,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date(1e3*e));let n=0,s=0,o=0;for(const e of i)"hour"===e.type?n=Number(e.value):"minute"===e.type?s=Number(e.value):"second"===e.type&&(o=Number(e.value));return 24===n&&(n=0),3600*n+60*s+o}function $t(e,t,i,n){const s={timeZone:t,day:"2-digit",month:"2-digit"};return"long"===n&&(s.weekday="long"),"short"===n&&(s.weekday="short"),wt(i,s).format(new Date(1e3*e))}function kt(e,t,i,n){if(null===e.t0||0===e.count)return[];const s=function(e){return e>=560?"long":e>=380?"short":"date"}(n),o="long"===s?110:"short"===s?78:58,r=[];let a=vt(e.t0,t);for(let i=1;i<e.count;i++){const n=Qe(e,i);if(null===n)continue;const s=vt(n,t);s!==a&&(r.push({position:i,slot:n,date:s}),a=s)}const h=function(e,t,i){const n=Math.max(1,Math.floor(t/i));return Math.max(1,Math.ceil(e/n))}(r.length,n,o),l=Math.max(1,e.count-1);return r.map((e,n)=>{const o=e.date.endsWith("-01"),r=o||n%h===0;return{position:e.position,left:e.position/l*100,label:r?$t(e.slot,t,i,s):"",isMonthStart:o}})}const St=[600,900,1800,3600,7200,10800,21600,43200];function Et(e,t,i,n){if(null===e.t0||0===e.count)return[];const s=e.t0,o=Math.max(1,e.count-1),r=s+o*e.step,a=function(e,t,i){if(e<=0)return null;const n=e/Math.max(2,Math.floor(i/9));for(const e of St)if(e>=n&&e>=t)return e;return null}(r-s,e.step,n);if(null===a)return[];const h=a/(r-s)*n,l=Math.max(1,Math.ceil(46/h)),d=Math.min(43200,a*l),c=[],p=_t(s,t)%a;let u=0===p?s:s+(a-p),m=-1/0;for(let h=0;u<=r&&h<4096;h++){const r=_t(u,t),h=r%a;if(0===h){const a=Math.round((u-s)/e.step),h=a/o*100,l=h/100*n;let p="";r%d===0&&l-m>=46&&(p=Mt(u,t,i),m=l),c.push({position:a,left:h,label:p})}u+=a-h}return c}function At(e,t,i){return wt(i,{timeZone:t,weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(1e3*e))}function Mt(e,t,i){return wt(i,{timeZone:t,hour:"2-digit",minute:"2-digit"}).format(new Date(1e3*e))}const Tt=new Set(["unknown","unavailable","none",""]),Ct=new Map,Pt=new Map;function zt(e){if("number"==typeof e.lu)return Math.round(1e3*e.lu);const t=e.lu??e.last_updated??e.last_changed;return t?new Date(t).getTime():0}function Rt(e,t){const i=e.a??e.attributes,n=i?.[t];if("string"!=typeof n&&"number"!=typeof n)return null;const s=new Date(n).getTime();return Number.isFinite(s)&&s>0?s:null}function Ot(e){if(!Number.isFinite(e)||e<=0)return 0;const t=e*(1+1e-9),i=Math.pow(10,Math.floor(Math.log10(t))),n=t/i;return(n>=5?5:n>=2?2:1)*i}const Dt=new WeakMap;function Ft(e,t=54e5){if(e.length<3)return t;const i=[];for(let t=1;t<e.length;t++)i.push(e[t].at-e[t-1].at);i.sort((e,t)=>e-t);const n=i[i.length>>1]??t;return Math.max(2*n,t)}function Nt(){try{window.caches?.keys?.().then(e=>{e.forEach(e=>window.caches?.delete?.(e))})}catch{}window.location.reload()}function Ht(e,t){if(!e)return q;const i=t("version_update").replace("{v}",e),n=t("version_reload");return W`
    <div class="banner" role="alert" aria-live="assertive">
      <span>${i}</span>
      <button
        type="button"
        aria-label=${n}
        @click=${Nt}
      >
        ${n}
      </button>
    </div>
  `}function Ut(e){const{points:t,at:i,hours:n,color:s,label:o,quantum:r=0,nights:a=[]}=e;if(0===t.length)return null;const h=36e5*n/2,l=i-h,d=i+h,c=d-l||1;let p=1/0,u=-1/0;for(const e of t)e.value<p&&(p=e.value),e.value>u&&(u=e.value);const m=u-p,g=(p+u)/2,f=Math.max(4*r,1e-9*Math.abs(g)),b=Math.max(m,f)||1;let x=g-b/2,y=g+b/2;if(m>0){const e=function(e){if(!Number.isFinite(e)||e<=0)return 1;const t=Math.pow(10,Math.floor(Math.log10(e))),i=e/t;return(i>5?10:i>2?5:i>1?2:1)*t}(b/4);x=Math.floor(x/e)*e,y=Math.ceil(y/e)*e,y>x||(x=g-b/2,y=g+b/2)}const w=y-x||1,v=e=>3+(e-l)/c*234,_=e=>41-(e-x)/w*38,$=[];t.forEach((e,t)=>{const i=v(e.at),n=_(e.value);0===t?$.push(`M ${i.toFixed(1)} ${n.toFixed(1)}`):$.push(`H ${i.toFixed(1)}`,`V ${n.toFixed(1)}`)});const k=t[t.length-1];$.push(`H ${v(d).toFixed(1)}`);const S=a.map(e=>({left:3+234*e.left,width:234*e.width})),E=v(i);let A=k;for(let e=t.length-1;e>=0;e--)if(t[e].at<=i){A=t[e];break}return j`
    <svg
      class="spark"
      viewBox="0 0 ${240} ${44}"
      preserveAspectRatio="none"
      role="img"
      aria-label=${o}
    >
      ${S.map(e=>j`<rect
          class="spark-night"
          x=${e.left.toFixed(1)}
          y="0"
          width=${e.width.toFixed(1)}
          height=${44}
        />`)}
      <path
        d=${$.join(" ")}
        fill="none"
        stroke=${s}
        stroke-width="1.5"
        stroke-linejoin="round"
        vector-effect="non-scaling-stroke"
      />
      <line
        x1=${E.toFixed(1)}
        y1="0"
        x2=${E.toFixed(1)}
        y2=${44}
        stroke="currentColor"
        stroke-width="1"
        opacity="0.5"
        vector-effect="non-scaling-stroke"
      />
      <path
        d="M ${E.toFixed(1)} ${_(A.value).toFixed(1)} L ${E.toFixed(1)} ${_(A.value).toFixed(1)}"
        stroke=${s}
        stroke-width="5"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  `}const Lt=864e5,Bt=2440587.5,It=2451545,Wt=Math.PI/180;function jt(e,t,i){const n=2451545.0009-i/360+e,s=Vt(n),o=(357.5291+.98560028*(n-It))%360,r=(o+(1.9148*Math.sin(o*Wt)+.02*Math.sin(2*o*Wt)+3e-4*Math.sin(3*o*Wt))+180+102.9372)%360,a=n+.0053*Math.sin(o*Wt)-.0069*Math.sin(2*r*Wt),h=Math.sin(r*Wt)*Math.sin(23.4397*Wt),l=Math.cos(Math.asin(h)),d=(Math.sin(-.833*Wt)-Math.sin(t*Wt)*h)/(Math.cos(t*Wt)*l);if(!Number.isFinite(d)||Math.abs(d)>1)return{noon:s,rise:null,set:null,polarNight:d>1};const c=Math.acos(d)/Wt;return{noon:s,rise:Vt(a-c/360),set:Vt(a+c/360),polarNight:!1}}function Vt(e){return(e-Bt)*Lt}function qt(e,t){return Math.round(e/Lt+Bt-It-9e-4+t/360)}function Zt(e,t,i,n){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=e||!Number.isFinite(i)||!Number.isFinite(n)||Math.abs(i)>90)return[];const s=qt(e,n)-1,o=qt(t,n)+1;if(o-s>800)return[];const r=[];for(let e=s;e<=o;e++){const t=jt(e,i,n);if(null===t.set){t.polarNight&&Yt(r,t.noon-432e5,t.noon+432e5);continue}const s=jt(e+1,i,n);Yt(r,t.set,s.rise??s.noon-432e5)}return function(e,t,i){const n=[];for(const s of e){const e=Math.max(s.from,t),o=Math.min(s.to,i);o>e&&n.push({from:e,to:o})}return n}(r,e,t)}const Gt=4/234;function Kt(e,t,i,n){const s=t-e;if(!(s>0))return[];const o=Zt(e,t,i,n).map(t=>({left:(t.from-e)/s,width:(t.to-t.from)/s}));return o.reduce((e,t)=>Math.max(e,t.width),0)>=Gt?o:[]}function Yt(e,t,i){if(i<=t)return;const n=e[e.length-1];n&&t<=n.to?n.to=Math.max(n.to,i):e.push({from:t,to:i})}function Jt(){return"undefined"!=typeof window&&"function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Xt=[1,2,4,8,16,32,64];let Qt=class extends he{constructor(){super(...arguments),this.index=Xe,this.position=0,this.playing=!1,this.speed=1,this.trackWidth=600,this.versionMismatch=null,this.history=new Map,this.folded=new Set,this.exportOpen=!1,this.exportRange=null,this.exportFps=24,this.exportStamp=!0,this.exportReadings=!0,this.exportStatus=null,this.exportSubscription=0,this.present=new Uint8Array(0),this.ring=new nt(st(1)),this.prefetchedThrough=-1,this.useLayerA=!0,this.frameGeneration=0,this.swaps=new Ge(()=>this.performSwap()),this.gains=new Float32Array(0),this.versionChecked=!1,this.autoplayPending=!0,this.playCounter=0,this.lastScrubAt=0,this.visible=!0,this.onScreen=!0,this.onVisibilityChange=()=>{this.visible="visible"===document.visibilityState,this.reconcilePlayback(),this.visible&&this.refreshIndex()},this.resolveColor=e=>{const t=document.createElement("span");t.style.display="none",t.style.color=e,this.renderRoot.appendChild(t);const i=getComputedStyle(t).color;return t.remove(),i||e}}static{this.styles=fe}setConfig(e){if(!e?.camera_entity)throw new Error(Be("error.no_camera",this.hass?.locale?.language));this.config={autoplay:!1,speed:32,show_dayticks:!0,show_graph:!0,show_sun:!1,graph_hours:24,deflicker:50,show_export:!0,...e,entities:(e.entities??[]).filter(e=>e?.entity),entities_left:(e.entities_left??[]).filter(e=>e?.entity)},this.speed=Xt.includes(this.config.speed)?this.config.speed:32,this.ring=new nt(st(this.speed))}static getConfigElement(){return document.createElement("webcam-timelapse-card-editor")}static getStubConfig(e){return{camera_entity:Object.keys(e.states).find(t=>t.startsWith("camera.")&&"webcam_timelapse"===e.entities?.[t]?.platform)??""}}getCardSize(){return 8}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6,min_rows:6}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.onVisibilityChange),this.intersectionObserver=new IntersectionObserver(e=>{this.onScreen=e.some(e=>e.isIntersecting),this.reconcilePlayback()}),this.intersectionObserver.observe(this),this.resizeObserver=new ResizeObserver(e=>{const t=e[0]?.contentRect.width;t&&(this.trackWidth=t-24)}),this.resizeObserver.observe(this),this.exportOpen&&this.subscribeExport()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.intersectionObserver?.disconnect(),this.resizeObserver?.disconnect(),this.stopPlayback(),this.indexTimer&&window.clearTimeout(this.indexTimer),this.scrubSettle&&window.clearTimeout(this.scrubSettle),this.ring.clear(),this.unsubscribeExport()}willUpdate(e){e.has("hass")&&this.hass&&this.index===Xe&&(this.refreshIndex(),this.refreshHistory()),e.has("hass")&&this.hass&&!this.versionChecked&&(this.versionChecked=!0,async function(e,t,i){if(!e?.callWS)return null;try{const n=await e.callWS({type:t});if(n?.version&&n.version!==i)return n.version}catch{}return null}(this.hass,"webcam_timelapse/card_version","0.6.1").then(e=>{this.versionMismatch=e}))}reconcilePlayback(){this.playing&&this.visible&&this.onScreen?this.startPlayback():this.stopPlayback()}async refreshIndex(){if(this.hass?.callWS&&this.config){try{const e=await this.hass.callWS({type:"webcam_timelapse/index",entity_id:this.config.camera_entity}),t=this.position>=this.index.count-1;this.index=e,this.present=function(e){const t=new Uint8Array(e.count).fill(1);for(const[i,n]of e.gaps){const s=Math.max(0,i),o=Math.min(e.count,i+n);for(let e=s;e<o;e++)t[e]=0}return t}(e),(t||this.position>=e.count)&&(this.position=Math.max(0,e.count-1)),await this.updateComplete,this.startAutoplayIfRequested()||this.swapInFrame(),this.refreshLuma(),this.indexError=void 0}catch(e){this.indexError=e instanceof Error?e.message:"Could not load the timeline."}this.scheduleIndexRefresh()}}async refreshLuma(){const e=function(e){const t=Math.min(Math.max(e,0),100);return 0===t?0:Math.max(1,Math.round(t/100*12))}(this.config?.deflicker??0);if(this.hass?.callWS&&0!==e&&this.config){try{const t=await this.hass.callWS({type:"webcam_timelapse/luma",entity_id:this.config.camera_entity});this.gains=function(e,t=Ye){const i=new Float32Array(e.length).fill(1),{radius:n,maxGain:s}=t;if(n<1||0===e.length)return i;const o=1/s;for(let t=0;t<e.length;t++){const r=e[t];if(null==r||r<8)continue;const a=Math.max(0,t-n),h=Math.min(e.length-1,t+n),l=[];for(let t=a;t<=h;t++){const i=e[t];null!=i&&i>=8&&l.push(i)}if(l.length<3)continue;const d=Je(l);i[t]=Math.min(Math.max(d/r,o),s)}return i}(t.luma,{...Ye,radius:e})}catch{this.gains=new Float32Array(0)}this.requestUpdate()}else this.gains=new Float32Array(0)}async refreshHistory(){const e=dt(this.config);if(!this.hass||0===e.length)return;const t={};for(const i of e)i.time_attribute&&(t[i.entity]=i.time_attribute);const i=Math.max(this.config?.graph_hours??24,...e.map(e=>e.graph_hours??0));this.history=await async function(e,t,i){const n=e?.callWS?.bind(e);if(!n||0===t.length)return new Map;const s=i.timeAttributes??{},o=`${t.slice().sort().join(",")}|${i.days}`,r=Pt.get(o);if(r)return r;const a=new Date,h=new Date(a.getTime()-864e5*i.days),l=Object.keys(s).length>0,d=(async()=>{try{const e=await n({type:"history/history_during_period",start_time:h.toISOString(),end_time:a.toISOString(),entity_ids:t,minimal_response:!l,no_attributes:!l,significant_changes_only:!0}),i=new Map;for(const n of t){const t=s[n],o=(e?.[n]??[]).map(e=>{const i=String(e.s??e.state??"").trim(),n=Tt.has(i.toLowerCase())?Number.NaN:parseFloat(i);return{at:(t?Rt(e,t):null)??zt(e),value:n}}).filter(e=>Number.isFinite(e.value)&&e.at>0).sort((e,t)=>e.at-t.at);i.set(n,o),Ct.set(n,o)}return i}catch{return new Map(t.map(e=>[e,Ct.get(e)??[]]))}finally{Pt.delete(o)}})();return Pt.set(o,d),d}(this.hass,e.map(e=>e.entity),{days:(this.index.retention_days||14)+1+Math.ceil(i/48),timeAttributes:t})}scheduleIndexRefresh(){this.indexTimer&&window.clearTimeout(this.indexTimer);const e=1e3*this.index.step+15e3*Math.random();this.indexTimer=window.setTimeout(()=>{this.refreshIndex()},e)}get cadence(){return function(e){const t=2*Math.max(e,0);if(t<=0)return{stride:1,frameDelay:500};const i=Math.max(1,Math.round(t/ot));return{stride:i,frameDelay:Math.max(1e3*i/t,33)}}(this.speed)}get frameDelay(){return this.cadence.frameDelay}get fadeDuration(){return e=this.speed,t=this.frameDelay,(i={playing:this.playing,reducedMotion:Jt()}).reducedMotion?0:i.playing?e>4?0:Math.min(120,Math.round(t/2)):120;var e,t,i}async runPlayback(e){let t=!1;for(;this.playToken===e&&this.playing;){if(t){const e=rt(this.present,this.position,this.cadence.stride);if(null===e){this.playing=!1;break}this.position=e}t=!0;const i=performance.now();if(await this.swapInFrame(),this.prefetchAhead(),this.playToken!==e)return;const n=this.frameDelay-(performance.now()-i);n>0&&await new Promise(e=>window.setTimeout(e,n))}}startPlayback(){if(void 0!==this.playToken)return;const e=++this.playCounter;this.playToken=e,this.runPlayback(e).finally(()=>{this.playToken===e&&(this.playToken=void 0)})}stopPlayback(){this.playToken=void 0}startAutoplayIfRequested(){return!(!this.autoplayPending||!it(this.index))&&(this.autoplayPending=!1,!(!(e={configured:!0===this.config?.autoplay,reducedMotion:Jt(),alreadyPlaying:this.playing}).configured||e.reducedMotion||e.alreadyPlaying)&&(this.togglePlay(),!0));var e}togglePlay(){if(!this.playing&&this.atLive){const e=tt(this.present,0);null!==e&&(this.position=e)}this.playing=!this.playing,this.reconcilePlayback()}cycleSpeed(){const e=Xt[(Xt.indexOf(this.speed)+1)%Xt.length];this.speed=e??1,this.ring=new nt(st(this.speed)),this.prefetchedThrough=-1}goTo(e){this.position=Math.min(Math.max(e,0),Math.max(0,this.index.count-1)),this.swapInFrame(),this.prefetchAhead()}swapInFrame(){return this.swaps.request()}async performSwap(){const e=this.position,t=this.frameSources(e);if(0===t.length)return;const i=++this.frameGeneration,n=this.useLayerA?this.layerB:this.layerA;if(!n)return;let s=!1;for(const o of t){const t=new URL(o,document.baseURI).href;n.src=o;try{await n.decode()}catch{}let r=at({currentSrc:n.currentSrc,requested:t,complete:n.complete,naturalWidth:n.naturalWidth});if("pending"!==r||this.playing||(await this.awaitLoad(n),r=at({currentSrc:n.currentSrc,requested:t,complete:n.complete,naturalWidth:n.naturalWidth})),"failed"!==r){if("pending"!==r){if(i!==this.frameGeneration)return;return this.revealFrame(n,this.useLayerA?this.layerA:this.layerB),this.useLayerA=!this.useLayerA,this.loadedPosition=e,this.frameError=void 0,void this.requestUpdate()}s=!0}}i===this.frameGeneration&&(this.playing||s||(this.frameError=t[0],this.requestUpdate()))}awaitLoad(e){return new Promise(t=>{let i;const n=()=>{void 0!==i&&window.clearTimeout(i),e.removeEventListener("load",n),e.removeEventListener("error",n),t()};e.addEventListener("load",n),e.addEventListener("error",n),i=window.setTimeout(n,1500)})}revealFrame(e,t){const i=this.fadeDuration;if(t&&(t.style.transition="none",t.style.opacity="1",t.style.zIndex="1"),e.style.zIndex="2",0===i)return e.style.transition="none",void(e.style.opacity="1");e.style.transition="none",e.style.opacity="0",e.offsetWidth,e.style.transition=`opacity ${i}ms linear`,e.style.opacity="1"}frameSources(e){const t=[],i=function(e){if(!e)return;const t=e.trim();return t.startsWith("/")||t.startsWith("https://")?t:void 0}(this.hass?.states[this.config.camera_entity]?.attributes.entity_picture);e>=this.index.count-1&&i&&t.push(i);const n=et(this.index,e);return n&&t.push(n),t}prefetchAhead(){const e=function(e,t,i,n,s){const o=Math.max(1,n);let r=s>t+i*o?t:Math.max(s,t);const a=[];for(let n=1;n<=i;n++){const i=t+n*o;if(i<=r)continue;const s=tt(e,i);if(null===s)break;s>r&&(a.push(s),r=s)}return a}(this.present,this.position,st(this.speed),this.cadence.stride,this.prefetchedThrough);for(const t of e){const e=et(this.index,t);e&&this.ring.prefetch(e),this.prefetchedThrough=t}}onScrub(e){const t=Number(e.target.value);this.position=t,this.pendingPosition=t;const i=performance.now();i-this.lastScrubAt>=80&&(this.lastScrubAt=i,this.loadPendingPosition()),this.scrubSettle&&window.clearTimeout(this.scrubSettle),this.scrubSettle=window.setTimeout(()=>{this.scrubSettle=void 0,this.loadPendingPosition()},80)}loadPendingPosition(){const e=this.pendingPosition;void 0!==e&&e!==this.loadedPosition&&this.goTo(e)}onScrubCommit(e){this.scrubSettle&&window.clearTimeout(this.scrubSettle),this.scrubSettle=void 0,this.pendingPosition=Number(e.target.value),this.loadPendingPosition()}jumpToNow(){this.playing=!1,this.stopPlayback(),this.goTo(this.index.count-1)}stepBy(e){const t=tt(this.present,this.position+e,e);null!==t&&this.goTo(t)}get exportSelection(){const e=ut(this.index);return null===e?null:null===this.exportRange?e:mt(this.exportRange,this.index.count)}get exportRunning(){return"running"===this.exportStatus?.state}toggleExport(){this.exportOpen=!this.exportOpen,this.exportError=void 0,this.exportOpen?this.subscribeExport():this.unsubscribeExport()}async subscribeExport(){this.unsubscribeExport();const e=this.hass?.connection;if(!e||!this.config)return;const t=++this.exportSubscription;try{const i=await e.subscribeMessage(e=>{t===this.exportSubscription&&this.onExportStatus(e)},{type:"webcam_timelapse/export/subscribe",entity_id:this.config.camera_entity});if(t!==this.exportSubscription)return void i();this.exportUnsubscribe=i}catch(e){t===this.exportSubscription&&(this.exportError=this.exportErrorKey(e))}}unsubscribeExport(){this.exportSubscription++;const e=this.exportUnsubscribe;this.exportUnsubscribe=void 0,e&&Promise.resolve(e()).catch(()=>{})}onExportStatus(e){if(this.exportStatus=e,"done"!==e.state||!e.result)return this.exportUrl=void 0,void(this.exportUrlFor=void 0);this.resolveExportUrl(e.result.media_content_id)}async resolveExportUrl(e){if(this.exportUrlFor!==e&&this.hass?.callWS){this.exportUrlFor=e,this.exportUrl=void 0;try{const t=await this.hass.callWS({type:"media_source/resolve_media",media_content_id:e});if(this.exportUrlFor!==e)return;this.exportUrl=this.hass.hassUrl?.(t.url)??t.url}catch{}}}exportErrorKey(e){return("object"==typeof e&&null!==e&&"code"in e?String(e.code):"")||"unknown"}async startExport(){const e=this.exportSelection;if(!this.hass?.callWS||!this.config||null===e)return;const t=xt(this.config,this.index,e,{fps:this.exportFps,timestamp:this.exportStamp,readings:this.exportReadings},this.language,this.resolveColor);if(null!==t){this.exportError=void 0;try{this.exportStatus=await this.hass.callWS({type:"webcam_timelapse/export/start",...t})}catch(e){this.exportError=this.exportErrorKey(e)}}}async cancelExport(){if(this.hass?.callWS&&this.config)try{await this.hass.callWS({type:"webcam_timelapse/export/cancel",entity_id:this.config.camera_entity})}catch(e){this.exportError=this.exportErrorKey(e)}}markExportStart(){const e=this.exportSelection;e&&(this.exportRange=function(e,t,i){const n=mt({start:t,end:t},i).start;return{start:n,end:Math.max(e.end,n)}}(e,this.position,this.index.count))}markExportEnd(){const e=this.exportSelection;e&&(this.exportRange=function(e,t,i){const n=mt({start:t,end:t},i).end;return{start:Math.min(e.start,n),end:n}}(e,this.position,this.index.count))}presetExport(e){this.exportRange=null===e?null:function(e,t){const i=ut(e);if(null===i)return null;const n=Math.round(3600*t/e.step);return{start:Math.max(0,i.end-n),end:i.end}}(this.index,e)}exportErrorText(e,t){const i=this.t(`export.error.${e}`);return i.startsWith("export.error.")?t||this.t("export.error.unknown"):i}get timeZone(){return this.hass?.config?.time_zone??Intl.DateTimeFormat().resolvedOptions().timeZone}get language(){return this.hass?.locale?.language??this.hass?.language??"en"}t(e,t){return void 0===t?Be(e,this.language):Be(e,this.language,"{v}",t)}get atLive(){return this.position>=this.index.count-1}get onGap(){return this.present.length>0&&!this.present[this.position]}render(){if(!this.config||!this.hass)return W`<ha-card></ha-card>`;const e=null===this.index.t0?null:this.index.t0+this.position*this.index.step;return W`
      <ha-card .header=${this.config.title??q}>
        ${Ht(this.versionMismatch,e=>this.t(e))}
        ${this.renderStage(e)}
        ${it(this.index)?this.renderTimeline(e):q}
        ${it(this.index)&&!1!==this.config.show_export?this.renderExport():q}
      </ha-card>
    `}renderStage(e){if(!it(this.index))return W`
        <div class="stage">
          <div class="empty">
            ${this.indexError?W`
                  <div>${this.t("empty.index_failed")}</div>
                  <div class="detail">${this.indexError}</div>
                `:W`
                  <div>${this.t("empty.no_frames")}</div>
                  <div>${this.t("empty.first_soon")}</div>
                `}
          </div>
        </div>
      `;const t=this.gains[this.position]??1,i=[];1!==t&&i.push(`brightness(${t.toFixed(3)})`),this.onGap&&i.push("grayscale(0.5)","brightness(0.5)");const n=i.length>0?i.join(" "):"none";return W`
      <div
        class="stage"
        style="--wtl-frame-filter:${n}"
        @click=${this.onStageClick}
      >
        <div
          class="layers"
          role="button"
          tabindex="0"
          aria-label=${this.t("actions.show_camera")}
          @keydown=${e=>this.onActivateKey(e,this.config.camera_entity)}
        >
          <img class="layer a" alt="" decoding="async" fetchpriority="high" />
          <img class="layer b" alt="" decoding="async" fetchpriority="high" />
        </div>
        ${this.frameError?W`<div class="empty">
              <div>${this.t("empty.frame_failed")}</div>
              <div class="detail">${this.frameError}</div>
            </div>`:q}
        ${null!==e?W`<div class="stamp">
              <time datetime=${new Date(1e3*e).toISOString()}>
                ${At(e,this.timeZone,this.language)}
              </time>
            </div>`:q}
        ${null!==e?this.renderReadouts(e):q}
        ${this.onGap?W`<div class="badge gap">${this.t("badge.gap")}</div>`:this.atLive?W`<div class="badge live">${this.t("badge.live")}</div>`:q}
        ${this.renderControls()}
      </div>
    `}renderReadouts(e){const t=lt(this.config);return 0===t.length?q:W`<div class="readouts ${t.length>1?"pair":""}">
      ${t.map(t=>this.renderReadout(e,t))}
    </div>`}renderReadout(e,t){const i="readout "+("left"===t.side?"left":"");if(this.folded.has(t.side))return W`<div class="${i} folded">
        ${this.renderFoldToggle(t.side,!0)}
      </div>`;const n=t.entities,s=1e3*e,o=n.map(e=>{const t=this.history.get(e.entity)??[],i=function(e){const t=Dt.get(e);if(t)return t;const i=[];for(let t=1;t<e.length;t++){const n=Math.abs(e[t].value-e[t-1].value);n>0&&i.push(n)}i.sort((e,t)=>e-t);const n=i[Math.floor(.1*i.length)],s={quantum:void 0===n?0:Ot(n),staleAfter:Ft(e)};return Dt.set(e,s),s}(t),n=function(e,t,i){if(0===e.length)return null;let n=0,s=e.length-1,o=-1;for(;n<=s;){const i=n+s>>1;e[i].at<=t?(o=i,n=i+1):s=i-1}if(-1===o)return null;const r=e[o];return{value:r.value,at:r.at,stale:t-r.at>i}}(t,s,i.staleAfter),o=e.name??this.hass?.states[e.entity]?.attributes.friendly_name??e.entity,r=e.unit??this.hass?.states[e.entity]?.attributes.unit_of_measurement??"",a=e.color??"var(--wtl-accent)",h=null===n?"—":`${n.value.toFixed(e.decimals??1)}${r?` ${r}`:""}`,l=e.graph_hours??this.config?.graph_hours??24,d=!0===e.graph&&!1!==this.config?.show_graph,c=d?function(e,t,i){const n=36e5*i/2,s=t-n,o=t+n,r=e.filter(e=>e.at>=s&&e.at<=o);if(r[0]?.at===s)return r;let a;for(const t of e){if(t.at>=s)break;a=t}return a?[{at:s,value:a.value},...r]:r}(t,s,l):[],p=d&&!0===this.config?.show_sun?this.nightsAround(s,l):[],u=d?Ut({points:c,at:s,hours:l,color:a,label:`${o} history`,quantum:i.quantum,nights:p}):null,m=null===u?0:function(e){if(0===e.length)return 0;let t=1/0,i=-1/0;for(const n of e)n.value<t&&(t=n.value),n.value>i&&(i=n.value);return i-t}(c),g=null===u?q:W`<div class="spark-scale">
            <span
              >${0===m?this.t("spark.flat"):this.t("spark.range",`${function(e){if(!Number.isFinite(e)||e<=0)return"0";if(e>=100)return Math.round(e).toString();const t=e.toPrecision(2);return t.includes(".")?t.replace(/0+$/,"").replace(/\.$/,""):t}(m)}${r?` ${r}`:""}`)}</span
            >
            <span>${f=l,!Number.isFinite(f)||f<=0?"":f<1?`${Math.round(60*f)} min`:f<48?`${Math.round(f)} h`:`${Math.round(f/24)} d`}</span>
          </div>`;var f;const b=this.hass?.states[e.entity],x=e.show_icon&&b?W`<ha-state-icon
              class="readout-icon"
              style="color:${a}"
              .hass=${this.hass}
              .stateObj=${b}
            ></ha-state-icon>`:q;return W`
        <div
          class="readout-row ${n?.stale?"stale":""}"
          role="button"
          tabindex="0"
          aria-label=${this.t("actions.show_entity",o)}
          @click=${()=>this.fireMoreInfo(e.entity)}
          @keydown=${t=>this.onActivateKey(t,e.entity)}
        >
          ${x}
          <span class="readout-name" style="color:${a}">${o}</span>
          <span class="readout-value">${h}</span>
          ${null!==n?W`<span class="readout-at"
                >${Mt(Math.round(n.at/1e3),this.timeZone,this.language)}</span
              >`:q}
        </div>
        ${u?W`<div class="spark-wrap">${u}${g}</div>`:q}
      `});return W`<div class=${i}>
      <div class="readout-head">
        ${t.title?W`<div class="readout-title">${t.title}</div>`:q}
        ${this.renderFoldToggle(t.side,!1)}
      </div>
      ${o}
    </div>`}nightsAround(e,t){const i=36e5*t/2;return this.nightsBetween(e-i,e+i)}nightsBetween(e,t){const i=this.hass?.config?.latitude,n=this.hass?.config?.longitude;if(void 0===i||void 0===n)return[];const s=`${e}|${t}|${i}|${n}`;return this.nightCache?.key!==s&&(this.nightCache={key:s,bands:Kt(e,t,i,n)}),this.nightCache.bands}renderFoldToggle(e,t){const i=this.t(t?"actions.show_readings":"actions.hide_readings");return W`<ha-icon-button
      class="readout-fold"
      .label=${i}
      aria-expanded=${t?"false":"true"}
      @click=${()=>this.toggleFold(e)}
    >
      <ha-icon icon=${t?"mdi:eye-outline":"mdi:eye-off-outline"}></ha-icon>
    </ha-icon-button>`}toggleFold(e){const t=new Set(this.folded);t.delete(e)||t.add(e),this.folded=t}fireMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}onActivateKey(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.fireMoreInfo(t))}onStageClick(e){const t=e.composedPath(),i=t.indexOf(e.currentTarget);(-1===i?t:t.slice(0,i)).some(e=>e instanceof HTMLElement&&(e.classList.contains("controls")||e.classList.contains("readout-row")||e.classList.contains("readout-fold")))||this.config&&this.fireMoreInfo(this.config.camera_entity)}renderControls(){return W`
      <div class="controls">
        <ha-icon-button .label=${this.t("controls.previous")} @click=${()=>this.stepBy(-1)}>
          <ha-icon icon="mdi:skip-previous"></ha-icon>
        </ha-icon-button>
        <ha-icon-button
          class="play"
          .label=${this.playing?this.t("controls.pause"):this.t("controls.play")}
          @click=${this.togglePlay}
        >
          <ha-icon .icon=${this.playing?"mdi:pause":"mdi:play"}></ha-icon>
        </ha-icon-button>
        <ha-icon-button .label=${this.t("controls.next")} @click=${()=>this.stepBy(1)}>
          <ha-icon icon="mdi:skip-next"></ha-icon>
        </ha-icon-button>

        <span class="sep" aria-hidden="true"></span>

        <button
          class="speed"
          @click=${this.cycleSpeed}
          aria-label=${this.t("controls.speed",String(this.speed))}
        >
          ${this.speed}×
        </button>
        <ha-icon-button .label=${this.t("controls.now")} @click=${this.jumpToNow}>
          <ha-icon icon="mdi:update"></ha-icon>
        </ha-icon-button>
      </div>
    `}renderTimeline(e){const t=Math.max(1,this.index.count-1),i=this.position/t*100,n=!1!==this.config?.show_dayticks,{days:s,times:o}=n?this.rulerFor():{days:[],times:[]},r=!0===this.config?.show_sun&&null!==this.index.t0?this.nightsBetween(1e3*this.index.t0,1e3*(this.index.t0+t*this.index.step)):[];return W`
      <div class="timeline">
        ${n?W`<div class="band dates" aria-hidden="true">
              ${s.map(e=>e.label?W`<span class="lab date" style="left:${e.left}%"
                      >${e.label}</span
                    >`:q)}
            </div>`:q}

        <div class="track">
          ${r.length>0?W`<div class="nights" aria-hidden="true">
                ${r.map(e=>W`<span
                      class="night"
                      style="left:${(100*e.left).toFixed(3)}%;width:${(100*e.width).toFixed(3)}%"
                    ></span>`)}
              </div>`:q}
          ${this.renderExportBand()}
          ${n?W`<div class="marks" aria-hidden="true">
                ${o.map(e=>W`<span class="mark" style="left:${e.left}%"></span>`)}
                ${s.map(e=>W`<span
                      class="mark ${e.isMonthStart?"month":"day"}"
                      style="left:${e.left}%"
                    ></span>`)}
              </div>`:q}
          <div class="rail"></div>
        <div class="fill" style="width:${i}%"></div>
        ${this.index.gaps.map(([e,i])=>W`<div
            class="gap-run"
            style="left:${e/t*100}%;width:${i/t*100}%"
          ></div>`)}
        <input
          type="range"
          min="0"
          max=${t}
          step="1"
          .value=${String(this.position)}
          aria-label=${this.t("track.label")}
          aria-valuetext=${null!==e?At(e,this.timeZone,this.language):""}
          @input=${this.onScrub}
          @change=${this.onScrubCommit}
          />
        </div>

        ${n?W`<div class="band times" aria-hidden="true">
              ${o.map(e=>e.label?W`<span class="lab time" style="left:${e.left}%"
                      >${e.label}</span
                    >`:q)}
            </div>`:q}
      </div>
    `}renderExportBand(){const e=this.exportOpen?this.exportSelection:null;if(null===e)return q;const t=function(e,t){const i=Math.max(1,t-1);return{left:e.start/i*100,width:(e.end-e.start)/i*100}}(e,this.index.count);return W`<div
      class="export-band"
      role="img"
      aria-label=${this.t("export.band")}
      style="left:${t.left.toFixed(3)}%;width:${t.width.toFixed(3)}%"
    ></div>`}renderExport(){return W`
      <div class="export">
        <button
          class="export-toggle"
          aria-expanded=${this.exportOpen?"true":"false"}
          @click=${this.toggleExport}
        >
          <ha-icon icon="mdi:movie-open-outline"></ha-icon>
          ${this.t(this.exportOpen?"export.close":"export.open")}
        </button>
        ${this.exportOpen?this.renderExportPanel():q}
      </div>
    `}renderExportPanel(){const e=this.exportSelection;if(null===e)return q;const t=e=>At(this.index.t0+e*this.index.step,this.timeZone,this.language),i=function(e,t){let i=0;const n=Math.min(t.end,e.length-1);for(let s=Math.max(0,t.start);s<=n;s++)e[s]&&i++;return i}(this.present,e),n=this.exportRunning,s=dt(this.config).length>0,o=pt.filter(e=>function(e,t){return e.count*e.step>3600*t}(this.index,e));return W`
      <div class="export-panel">
        <div class="export-ends">
          <div class="export-end">
            <span class="export-label">${this.t("export.from")}</span>
            <span class="export-stamp">${t(e.start)}</span>
            <button
              class="export-chip"
              ?disabled=${n}
              @click=${this.markExportStart}
            >
              ${this.t("export.start_here")}
            </button>
          </div>
          <div class="export-end">
            <span class="export-label">${this.t("export.to")}</span>
            <span class="export-stamp">${t(e.end)}</span>
            <button
              class="export-chip"
              ?disabled=${n}
              @click=${this.markExportEnd}
            >
              ${this.t("export.end_here")}
            </button>
          </div>
        </div>

        ${o.length>0?W`<div class="export-row">
              ${o.map(e=>W`<button
                    class="export-chip"
                    ?disabled=${n}
                    @click=${()=>this.presetExport(e)}
                  >
                    ${e<48?this.t("export.preset_hours",String(e)):this.t("export.preset_days",String(e/24))}
                  </button>`)}
              <button
                class="export-chip"
                ?disabled=${n}
                @click=${()=>this.presetExport(null)}
              >
                ${this.t("export.preset_all")}
              </button>
            </div>`:q}

        <div class="export-row" role="group" aria-label=${this.t("export.fps")}>
          <span class="export-label">${this.t("export.fps")}</span>
          ${ct.map(e=>W`<button
                class="export-chip"
                aria-pressed=${this.exportFps===e?"true":"false"}
                ?disabled=${n}
                @click=${()=>{this.exportFps=e}}
              >
                ${e}
              </button>`)}
        </div>

        <div class="export-row">
          <label class="export-check">
            <input
              type="checkbox"
              .checked=${this.exportStamp}
              ?disabled=${n}
              @change=${e=>{this.exportStamp=e.target.checked}}
            />
            ${this.t("export.timestamp")}
          </label>
          ${s?W`<label class="export-check">
                <input
                  type="checkbox"
                  .checked=${this.exportReadings}
                  ?disabled=${n}
                  @change=${e=>{this.exportReadings=e.target.checked}}
                />
                ${this.t("export.readings")}
              </label>`:q}
        </div>

        <div class="export-summary">
          ${0===i?this.t("export.summary_empty"):this.t("export.summary").replace("{frames}",String(i)).replace("{length}",gt(i/this.exportFps))}
        </div>

        ${n?q:W`<div class="export-row">
              <button
                class="export-go"
                ?disabled=${0===i}
                @click=${this.startExport}
              >
                <ha-icon icon="mdi:movie-open-outline"></ha-icon>
                ${this.t("export.start")}
              </button>
            </div>`}
        ${this.renderExportStatus()}
      </div>
    `}renderExportStatus(){if(this.exportError)return W`<div class="export-status" role="alert">
        <span class="export-error">${this.exportErrorText(this.exportError)}</span>
      </div>`;const e=this.exportStatus;if(!e||"idle"===e.state)return q;if("running"===e.state){const t=function(e){return!e||e.total<=0?0:Math.min(1,Math.max(0,e.done/e.total))}(e);return W`<div class="export-status" role="status">
        <span>
          ${e.total>0?this.t("export.running").replace("{done}",String(e.done)).replace("{total}",String(e.total)):this.t("export.preparing")}
        </span>
        <div
          class="export-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow=${Math.round(100*t)}
        >
          <span style="width:${(100*t).toFixed(1)}%"></span>
        </div>
        <button class="export-chip" @click=${this.cancelExport}>
          ${this.t("export.cancel")}
        </button>
      </div>`}if("done"===e.state&&e.result){const t=e.result;return W`<div class="export-status" role="status">
        <span>
          ${this.t("export.done")} · ${gt(t.duration)} ·
          ${function(e){if(!Number.isFinite(e)||e<=0)return"0 MB";const t=e/1e6;return t>=1e3?`${(t/1e3).toFixed(1)} GB`:t>=10?`${Math.round(t)} MB`:`${t.toFixed(1)} MB`}(t.size_bytes)}
        </span>
        <span class="detail">${this.t("export.saved",t.file_name)}</span>
        ${this.exportUrl?W`<a
              class="export-download"
              href=${this.exportUrl}
              download=${t.file_name}
              target="_blank"
              rel="noopener"
            >
              <ha-icon icon="mdi:download"></ha-icon>
              ${this.t("export.download")}
            </a>`:q}
      </div>`}return"cancelled"===e.state?W`<div class="export-status" role="status">
        <span class="detail">${this.t("export.cancelled")}</span>
      </div>`:W`<div class="export-status" role="alert">
      <span class="export-error"
        >${this.exportErrorText(e.error??"unknown",e.message)}</span
      >
    </div>`}rulerFor(){const e=[this.index.t0,this.index.count,this.index.step,Math.round(this.trackWidth),this.timeZone,this.language].join("|");return this.rulerCache?.key!==e&&(this.rulerCache={key:e,days:kt(this.index,this.timeZone,this.language,this.trackWidth),times:Et(this.index,this.timeZone,this.language,this.trackWidth)}),this.rulerCache}};e([ue({attribute:!1})],Qt.prototype,"hass",void 0),e([me()],Qt.prototype,"config",void 0),e([me()],Qt.prototype,"index",void 0),e([me()],Qt.prototype,"position",void 0),e([me()],Qt.prototype,"playing",void 0),e([me()],Qt.prototype,"speed",void 0),e([me()],Qt.prototype,"trackWidth",void 0),e([me()],Qt.prototype,"versionMismatch",void 0),e([me()],Qt.prototype,"indexError",void 0),e([me()],Qt.prototype,"frameError",void 0),e([me()],Qt.prototype,"history",void 0),e([me()],Qt.prototype,"folded",void 0),e([me()],Qt.prototype,"exportOpen",void 0),e([me()],Qt.prototype,"exportRange",void 0),e([me()],Qt.prototype,"exportFps",void 0),e([me()],Qt.prototype,"exportStamp",void 0),e([me()],Qt.prototype,"exportReadings",void 0),e([me()],Qt.prototype,"exportStatus",void 0),e([me()],Qt.prototype,"exportError",void 0),e([me()],Qt.prototype,"exportUrl",void 0),e([ge("img.layer.a")],Qt.prototype,"layerA",void 0),e([ge("img.layer.b")],Qt.prototype,"layerB",void 0),Qt=e([de(Ke)],Qt);const ei=window;ei.customCards=ei.customCards??[],ei.customCards.push({type:Ke,name:"Webcam Timelapse",description:"Scrub and play back an archived still-image webcam.",preview:!0,documentationURL:"https://github.com/rolandzeiner/webcam-timelapse",getEntitySuggestion:(e,t)=>t.startsWith("camera.")?"webcam_timelapse"!==e.entities?.[t]?.platform?null:{config:{type:`custom:${Ke}`,camera_entity:t}}:null});export{Qt as WebcamTimelapseCard};
