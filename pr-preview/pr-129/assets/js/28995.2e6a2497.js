/*! For license information please see 28995.2e6a2497.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[28995],{88114:(e,t,o)=>{o.d(t,{c:()=>s});var n,a,i,s=(n=function(e){!function(){var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var s=o.apply(null,a);s&&e.push(s)}else if("object"===i)for(var r in a)t.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o}()},n(i={path:a,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports)},28995:(e,t,o)=>{o.r(t),o.d(t,{scale_notification_message:()=>r});var n=o(90936),a=o(88114),i=o(94200),s=o(91779);const r=class{constructor(e){(0,n.r)(this,e),this.scaleClose=(0,n.c)(this,"scale-close",7),this.variant="informational",this.dismissible=!1,this.autoHide=!1,this.autoHideDuration=3e3,this.closeButtonLabel="close",this.closeButtonTitle="close",this.close=()=>{this.opened=!1,(0,s.e)(this,"scaleClose")}}componentWillLoad(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]")}componentDidRender(){!0===this.autoHide&&setTimeout(this.close,this.autoHideDuration)}componentDidUpdate(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]")}connectedCallback(){(0,i.s)({source:this.hostElement,type:"warn"})}async open(){this.opened=!0}handleIcons(){if(this.variant)switch(this.variant){case"success":return(0,n.h)("scale-icon-action-success",{class:"notification-message__icon-success",color:"#187431","aria-hidden":"true"});case"informational":return(0,n.h)("scale-icon-alert-information",{class:"notification-message__icon-information","aria-hidden":"true"});case"error":return(0,n.h)("scale-icon-alert-error",{class:"notification-message__icon-error","aria-hidden":"true"});case"warning":return(0,n.h)("scale-icon-alert-warning",{class:"notification-message__icon-information",color:"#AE461C","aria-hidden":"true"})}}render(){return this.opened?(0,n.h)(n.a,null,(0,n.h)("div",{role:"alert",style:{display:""+(this.opened?"":"none")},part:this.getBasePartMap(),class:this.getCssClassMap(),tabindex:"0"},(0,n.h)("div",{part:"container",class:"notification-message__container"},this.handleIcons(),(0,n.h)("div",{part:"heading",class:"notification-message__heading"},(0,n.h)("slot",null,"\u2003"),this.dismissible&&(0,n.h)("button",{part:"button-dismissable",type:"button",class:"notification-message__icon-close",onClick:()=>this.close(),tabindex:0,"aria-label":this.closeButtonLabel,title:this.closeButtonTitle,onKeyDown:e=>{"Enter"===e.key&&this.close()}},(0,n.h)("scale-icon-action-circle-close",null))),this.hasSlotText&&(0,n.h)("div",{part:"text",class:"notification-message__text"},(0,n.h)("slot",{name:"text"}))))):null}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(e){const t="notification-message",o="basePart"===e?"":`${t}--`;return(0,a.c)(t,this.variant&&`${o}variant-${this.variant}`)}get hostElement(){return(0,n.g)(this)}};r.style=":host{--width:100%;--radius:var(--telekom-radius-standard);--border:var(--telekom-line-weight-standard) solid transparent;--background-error:var(--telekom-color-functional-danger-subtle);--background-warning:var(--telekom-color-functional-warning-subtle);--background-informational:var(\n    --telekom-color-functional-informational-subtle\n  );--background-success:var(--telekom-color-functional-success-subtle)}.notification-message{border:var(--border);border-radius:var(--radius);width:var(--width);position:relative}.notification-message--variant-error{background:var(--background-error)}.notification-message--variant-warning{background-color:var(--background-warning)}.notification-message--variant-informational{background-color:var(--background-informational)}.notification-message--variant-success{background-color:var(--background-success)}.notification-message__heading{margin:14px 48px 14px 48px;font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-standard)}.notification-message__text{margin:8px 48px 15px 48px}::slotted(*){font-weight:var(--telekom-typography-font-weight-regular)}.notification-message__icon-close{position:absolute;top:8px;right:13.5px;border:none;cursor:pointer;margin:0;padding:0;background:transparent;color:var(--telekom-color-text-and-icon-standard)}.notification-message__icon-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%}.notification-message__icon-close:hover svg{background-color:hsl(0, 0%, 100%);color:var(--telekom-color-text-and-icon-primary-hovered)}.notification-message__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-success)}.notification-message__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-danger)}.notification-message__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-informational)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-message__icon-close{color:hsl(0, 0%, 100%)}.notification-message{border:1px solid hsl(0, 0%, 100%)}}"},94200:(e,t,o)=>{o.d(t,{s:()=>i});const n={beta:"\u03b2",WIP:"\ud83d\udee0 WIP",deprecated:"\ud83d\ude35 Deprecation notice",warning:"Warning"},a={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function i({tag:e="WIP",extraMessage:t=null,message:o=null,source:i=null,type:s="info"}){(0,console[s])(`%c scale \u2013 ${n[e]} `,"background: #E20074; color: #FFF; border-radius: 4px",`\n\n${o||a[e]} ${t?"\n"+t:""}\n    `,null!==i?"\nsource:":"","object"==typeof i?i:`${i}`,null!==i?"\n\n":"")}},91779:(e,t,o)=>{o.d(t,{a:()=>d,b:()=>s,c:()=>a,e:()=>i,g:()=>l,h:()=>n,i:()=>r});const n=e=>!!e.shadowRoot&&!!e.attachShadow,a=e=>{let t=document.styleSheets[0];if(!t){const e=document.createElement("style");document.head.appendChild(e),t=document.styleSheets[0],document.head.removeChild(e)}return function(){try{return/^:/.test(e)||(e=":"+e),t.insertRule("html"+e+"{}",0),t.deleteRule(0),!0}catch(o){return!1}}()};function i(e,t,o){const n=t+"Legacy",a=[];return void 0!==e[n]&&a.push(e[n].emit(o)),a.push(e[t].emit(o)),a}function s(e,t){let o=e.target;const n=null!=o.shadowRoot,a=n?e.composedPath():[];do{if(o===t)return!1;o=n?a.shift():o.parentNode}while(o);return!0}const r=e=>null!=e&&1===e.nodeType&&"SCALE-ICON"===e.nodeName.toUpperCase().substring(0,10);let c=0;function l(){return c++}const d=e=>Promise.all(e.getAnimations({subtree:!0}).map((e=>e.finished)))}}]);