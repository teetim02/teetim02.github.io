"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{7487:(y,f,i)=>{i.d(f,{c:()=>r});var u=i(773),l=i(4081),a=i(405);const r=(n,t)=>{let e,o;const v=(c,m,w)=>{if(typeof document>"u")return;const p=document.elementFromPoint(c,m);p&&t(p)?p!==e&&(s(),d(p,w)):s()},d=(c,m)=>{e=c,o||(o=e);const w=e;(0,u.w)(()=>w.classList.add("ion-activated")),m()},s=(c=!1)=>{if(!e)return;const m=e;(0,u.w)(()=>m.classList.remove("ion-activated")),c&&o!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>v(c.currentX,c.currentY,l.a),onMove:c=>v(c.currentX,c.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),o=void 0}})}},8438:(y,f,i)=>{i.d(f,{g:()=>l});var u=i(8476);const l=()=>{if(void 0!==u.w)return u.w.Capacitor}},5572:(y,f,i)=>{i.d(f,{c:()=>u,i:()=>l});const u=(a,r,n)=>"function"==typeof n?n(a,r):"string"==typeof n?a[n]===r[n]:Array.isArray(r)?r.includes(a):a===r,l=(a,r,n)=>void 0!==a&&(Array.isArray(a)?a.some(t=>u(t,r,n)):u(a,r,n))},3351:(y,f,i)=>{i.d(f,{g:()=>u});const u=(t,e,o,v,d)=>a(t[1],e[1],o[1],v[1],d).map(s=>l(t[0],e[0],o[0],v[0],s)),l=(t,e,o,v,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*o*d+3*o+v*d))-t*Math.pow(d-1,3),a=(t,e,o,v,d)=>n((v-=d)-3*(o-=d)+3*(e-=d)-(t-=d),3*o-6*e+3*t,3*e-3*t,t).filter(c=>c>=0&&c<=1),n=(t,e,o,v)=>{if(0===t)return((t,e,o)=>{const v=e*e-4*t*o;return v<0?[]:[(-e+Math.sqrt(v))/(2*t),(-e-Math.sqrt(v))/(2*t)]})(e,o,v);const d=(3*(o/=t)-(e/=t)*e)/3,s=(2*e*e*e-9*e*o+27*(v/=t))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const c=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===c)return[Math.pow(s/2,.5)-e/3];if(c>0)return[Math.pow(-s/2+Math.sqrt(c),1/3)-Math.pow(s/2+Math.sqrt(c),1/3)-e/3];const m=Math.sqrt(Math.pow(-d/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),p=2*Math.pow(m,1/3);return[p*Math.cos(w/3)-e/3,p*Math.cos((w+2*Math.PI)/3)-e/3,p*Math.cos((w+4*Math.PI)/3)-e/3]}},5083:(y,f,i)=>{i.d(f,{i:()=>u});const u=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,f,i)=>{i.r(f),i.d(f,{startFocusVisible:()=>r});const u="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let t=[],e=!0;const o=n?n.shadowRoot:document,v=n||document.body,d=M=>{t.forEach(_=>_.classList.remove(u)),M.forEach(_=>_.classList.add(u)),t=M},s=()=>{e=!1,d([])},c=M=>{e=a.includes(M.key),e||d([])},m=M=>{if(e&&void 0!==M.composedPath){const _=M.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));d(_)}},w=()=>{o.activeElement===v&&d([])};return o.addEventListener("keydown",c),o.addEventListener("focusin",m),o.addEventListener("focusout",w),o.addEventListener("touchstart",s,{passive:!0}),o.addEventListener("mousedown",s),{destroy:()=>{o.removeEventListener("keydown",c),o.removeEventListener("focusin",m),o.removeEventListener("focusout",w),o.removeEventListener("touchstart",s),o.removeEventListener("mousedown",s)},setFocus:d}}},8281:(y,f,i)=>{i.d(f,{c:()=>l});var u=i(5638);const l=t=>{const e=t;let o;return{hasLegacyControl:()=>{if(void 0===o){const d=void 0!==e.label||a(e),s=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,c=(0,u.h)(e);o=!0===e.legacy||!d&&!s&&null!==c}return o}}},a=t=>!!(r.includes(t.tagName)&&null!==t.querySelector('[slot="label"]')||n.includes(t.tagName)&&""!==t.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(y,f,i)=>{i.d(f,{I:()=>l,a:()=>e,b:()=>o,c:()=>t,d:()=>d,h:()=>v});var u=i(8438),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=window.TapticEngine;if(s)return s;const c=(0,u.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,u.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,u.g)(),impact(s){const c=this.getEngine();if(!c)return;const m=this.isCapacitor()?s.style:s.style.toLowerCase();c.impact({style:m})},notification(s){const c=this.getEngine();if(!c)return;const m=this.isCapacitor()?s.type:s.type.toLowerCase();c.notification({type:m})},selection(){const s=this.isCapacitor()?l.Light:"light";this.impact({style:s})},selectionStart(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionStart():s.gestureSelectionStart())},selectionChanged(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionChanged():s.gestureSelectionChanged())},selectionEnd(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionEnd():s.gestureSelectionEnd())}},n=()=>r.available(),t=()=>{n()&&r.selection()},e=()=>{n()&&r.selectionStart()},o=()=>{n()&&r.selectionChanged()},v=()=>{n()&&r.selectionEnd()},d=s=>{n()&&r.impact(s)}},2885:(y,f,i)=>{i.d(f,{I:()=>t,a:()=>d,b:()=>n,c:()=>m,d:()=>p,f:()=>s,g:()=>v,i:()=>o,p:()=>w,r:()=>M,s:()=>c});var u=i(467),l=i(5638),a=i(4929);const n="ion-content",t=".ion-content-scroll-host",e=`${n}, ${t}`,o=_=>"ION-CONTENT"===_.tagName,v=function(){var _=(0,u.A)(function*(h){return o(h)?(yield new Promise(E=>(0,l.c)(h,E)),h.getScrollElement()):h});return function(E){return _.apply(this,arguments)}}(),d=_=>_.querySelector(t)||_.querySelector(e),s=_=>_.closest(e),c=(_,h)=>o(_)?_.scrollToTop(h):Promise.resolve(_.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),m=(_,h,E,O)=>o(_)?_.scrollByPoint(h,E,O):Promise.resolve(_.scrollBy({top:E,left:h,behavior:O>0?"smooth":"auto"})),w=_=>(0,a.b)(_,n),p=_=>{if(o(_)){const E=_.scrollY;return _.scrollY=!1,E}return _.style.setProperty("overflow","hidden"),!0},M=(_,h)=>{o(_)?_.scrollY=h:_.style.removeProperty("overflow")}},6726:(y,f,i)=>{i.d(f,{a:()=>u,b:()=>m,c:()=>e,d:()=>w,e:()=>D,f:()=>t,g:()=>p,h:()=>a,i:()=>l,j:()=>O,k:()=>C,l:()=>o,m:()=>s,n:()=>M,o:()=>d,p:()=>n,q:()=>r,r:()=>E,s:()=>g,t:()=>c,u:()=>_,v:()=>h,w:()=>v});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(y,f,i)=>{i.d(f,{c:()=>r,g:()=>n});var u=i(8476),l=i(5638),a=i(4929);const r=(e,o,v)=>{let d,s;if(void 0!==u.w&&"MutationObserver"in u.w){const p=Array.isArray(o)?o:[o];d=new MutationObserver(M=>{for(const _ of M)for(const h of _.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&p.includes(h.slot))return v(),void(0,l.r)(()=>c(h))}),d.observe(e,{childList:!0})}const c=p=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(_=>{v();for(const h of _)for(const E of h.removedNodes)E.nodeType===Node.ELEMENT_NODE&&E.slot===o&&w()}),s.observe(null!==(M=p.parentElement)&&void 0!==M?M:p,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),w()}}},n=(e,o,v)=>{const d=null==e?0:e.toString().length,s=t(d,o);if(void 0===v)return s;try{return v(d,o)}catch(c){return(0,a.a)("Exception in provided `counterFormatter`.",c),s}},t=(e,o)=>`${e} / ${o}`},1622:(y,f,i)=>{i.r(f),i.d(f,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>_,keyboardDidOpen:()=>p,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>w,setKeyboardOpen:()=>m,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var u=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},o={},v=!1;const d=()=>{e={},o={},v=!1},s=g=>{if(u.K.getEngine())c(g);else{if(!g.visualViewport)return;o=C(g.visualViewport),g.visualViewport.onresize=()=>{O(g),p()||M(g)?m(g):_(g)&&w(g)}}},c=g=>{g.addEventListener("keyboardDidShow",D=>m(g,D)),g.addEventListener("keyboardDidHide",()=>w(g))},m=(g,D)=>{h(g,D),v=!0},w=g=>{E(g),v=!1},p=()=>!v&&e.width===o.width&&(e.height-o.height)*o.scale>150,M=g=>v&&!_(g),_=g=>v&&o.height===g.innerHeight,h=(g,D)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-o.height}});g.dispatchEvent(L)},E=g=>{const D=new CustomEvent(n);g.dispatchEvent(D)},O=g=>{e=Object.assign({},o),o=C(g.visualViewport)},C=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(y,f,i)=>{i.d(f,{K:()=>r,a:()=>a});var u=i(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),a=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(a||{});const r={getEngine(){const n=(0,u.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(t=>{if(t.code!==l.Unimplemented)throw t}):Promise.resolve(void 0)}}},4731:(y,f,i)=>{i.d(f,{c:()=>t});var u=i(467),l=i(8476),a=i(4379);const r=e=>{if(void 0===l.d||e===a.a.None||void 0===e)return null;const o=l.d.querySelector("ion-app");return null!=o?o:l.d.body},n=e=>{const o=r(e);return null===o?0:o.clientHeight},t=function(){var e=(0,u.A)(function*(o){let v,d,s,c;const m=function(){var h=(0,u.A)(function*(){const E=yield a.K.getResizeMode(),O=void 0===E?void 0:E.mode;v=()=>{void 0===c&&(c=n(O)),s=!0,w(s,O)},d=()=>{s=!1,w(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",v),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return h.apply(this,arguments)}}(),w=(h,E)=>{o&&o(h,p(E))},p=h=>{if(0===c||c===n(h))return;const E=r(h);return null!==E?new Promise(O=>{const g=new ResizeObserver(()=>{E.clientHeight===c&&(g.disconnect(),O())});g.observe(E)}):void 0};return yield m(),{init:m,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",v),null==l.w||l.w.removeEventListener("keyboardWillHide",d),v=d=void 0},isKeyboardVisible:()=>s}});return function(v){return e.apply(this,arguments)}}()},7838:(y,f,i)=>{i.d(f,{c:()=>l});var u=i(467);const l=()=>{let a;return{lock:function(){var n=(0,u.A)(function*(){const t=a;let e;return a=new Promise(o=>e=o),void 0!==t&&(yield t),e});return function(){return n.apply(this,arguments)}}()}}},2172:(y,f,i)=>{i.d(f,{c:()=>a});var u=i(8476),l=i(5638);const a=(r,n,t)=>{let e;const o=()=>!(void 0===n()||void 0!==r.label||null===t()),d=()=>{const c=n();if(void 0===c)return;if(!o())return void c.style.removeProperty("width");const m=t().scrollWidth;if(0===m&&null===c.offsetParent&&void 0!==u.w&&"IntersectionObserver"in u.w){if(void 0!==e)return;const w=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(d(),w.disconnect(),e=void 0)},{threshold:.01,root:r});w.observe(c)}else c.style.setProperty("width",.75*m+"px")};return{calculateNotchWidth:()=>{o()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(y,f,i)=>{i.d(f,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(a,r,n)=>{const t=a*r/n-a+"ms",e=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(a,r,n)=>{const t=r/n,e=a*t-a+"ms",o=2*Math.PI*t;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/n-a+"ms"}})}}},6492:(y,f,i)=>{i.r(f),i.d(f,{createSwipeBackGesture:()=>n});var u=i(5638),l=i(5083),a=i(405);i(8221);const n=(t,e,o,v,d)=>{const s=t.ownerDocument.defaultView;let c=(0,l.i)(t);const w=E=>c?-E.deltaX:E.deltaX;return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:E=>(c=(0,l.i)(t),(E=>{const{startX:C}=E;return c?C>=s.innerWidth-50:C<=50})(E)&&e()),onStart:o,onMove:E=>{const C=w(E)/s.innerWidth;v(C)},onEnd:E=>{const O=w(E),C=s.innerWidth,g=O/C,D=(E=>c?-E.velocityX:E.velocityX)(E),L=D>=0&&(D>.2||O>C/2),S=(L?1-g:g)*C;let T=0;if(S>5){const b=S/Math.abs(D);T=Math.min(b,540)}d(L,g<=0?.01:(0,u.l)(0,g,.9999),T)}})}},2935:(y,f,i)=>{i.d(f,{w:()=>u});const u=(r,n,t)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(o=>{t(l(o,n))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,n)=>{let t;return r.forEach(e=>{for(let o=0;o<e.addedNodes.length;o++)t=a(e.addedNodes[o],n)||t}),t},a=(r,n)=>{if(1!==r.nodeType)return;const t=r;return(t.tagName===n.toUpperCase()?[t]:Array.from(t.querySelectorAll(n))).find(o=>o.value===t.value)}},1307:(y,f,i)=>{i.d(f,{S:()=>n});var u=i(177),l=i(4341),a=i(4488),r=i(4438);let n=(()=>{var t;class e{}return(t=e).\u0275fac=function(v){return new(v||t)},t.\u0275mod=r.$C({type:t}),t.\u0275inj=r.G2t({imports:[u.MD,l.YN,a.bv]}),e})()},9721:(y,f,i)=>{i.d(f,{T:()=>a});var u=i(4438),l=i(7291);let a=(()=>{var r;class n{constructor(e){this.storageService=e,this.customEntities=[],this.currFightEntities=[],this.customEntities=this.storageService.onReadPlayerEntities()}resetFight(){this.currFightEntities=[]}}return(r=n).\u0275fac=function(e){return new(e||r)(u.KVO(l.n))},r.\u0275prov=u.jDH({token:r,factory:r.\u0275fac,providedIn:"root"}),n})()},7291:(y,f,i)=>{i.d(f,{n:()=>l});var u=i(4438);let l=(()=>{var a;class r{constructor(){}onReadPlayerEntities(){return JSON.parse(localStorage.getItem("PLAYER_ENTITIES"))}onSavePlayerEntities(t){localStorage.setItem("PLAYER_ENTITIES",JSON.stringify(t))}onSaveMobTemplate(t){let e=JSON.parse(localStorage.getItem("MOB_TEMPLATES"));e||(e=[]),t.CHECKED=!1,e.push(t),localStorage.setItem("MOB_TEMPLATES",JSON.stringify(e))}onReadMobTemplates(){return JSON.parse(localStorage.getItem("MOB_TEMPLATES"))}}return(a=r).\u0275fac=function(t){return new(t||a)},a.\u0275prov=u.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()}}]);