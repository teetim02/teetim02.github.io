"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[964],{964:(R,d,i)=>{i.r(d),i.d(d,{ion_ripple_effect:()=>u});var b=i(467),n=i(773),h=i(8886);const u=class{constructor(t){(0,n.r)(this,t),this.type="bounded"}addRipple(t,_){var a=this;return(0,b.A)(function*(){return new Promise(g=>{(0,n.e)(()=>{const r=a.el.getBoundingClientRect(),o=r.width,s=r.height,A=Math.sqrt(o*o+s*s),p=Math.max(s,o),E=a.unbounded?p:A+k,c=Math.floor(p*v),I=E/c;let f=t-r.left,m=_-r.top;a.unbounded&&(f=.5*o,m=.5*s);const C=f-.5*c,D=m-.5*c,O=.5*o-f,P=.5*s-m;(0,n.w)(()=>{const l=document.createElement("div");l.classList.add("ripple-effect");const e=l.style;e.top=D+"px",e.left=C+"px",e.width=e.height=c+"px",e.setProperty("--final-scale",`${I}`),e.setProperty("--translate-end",`${O}px, ${P}px`),(a.el.shadowRoot||a.el).appendChild(l),setTimeout(()=>{g(()=>{w(l)})},325)})})})})()}get unbounded(){return"unbounded"===this.type}render(){const t=(0,h.b)(this);return(0,n.h)(n.H,{key:"9f2578664e5ff8a0a7e27cd90b2339bd430e72b8",role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return(0,n.f)(this)}},w=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},k=10,v=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);