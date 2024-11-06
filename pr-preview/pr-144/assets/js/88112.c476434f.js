/*! For license information please see 88112.c476434f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[88112],{88114:(t,n,e)=>{e.d(n,{c:()=>r});var o,i,a,r=(o=function(t){!function(){var n={}.hasOwnProperty;function e(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i)&&i.length){var r=e.apply(null,i);r&&t.push(r)}else if("object"===a)for(var s in i)n.call(i,s)&&i[s]&&t.push(s)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e}()},o(a={path:i,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},a.exports),a.exports)},88112:(t,n,e)=>{e.r(n),e.d(n,{scale_notification_banner:()=>s});var o=e(90936),i=e(88114),a=e(94200),r=e(91779);const s=class{constructor(t){(0,o.r)(this,t),this.scaleClose=(0,o.c)(this,"scale-close",7),this.variant="informational",this.dismissible=!1,this.autoHide=!1,this.autoHideDuration=3e3,this.closeButtonLabel="close",this.closeButtonTitle="close",this.close=()=>{this.opened=!1,(0,r.e)(this,"scaleClose")}}componentWillLoad(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]"),this.hasSlotLink=!!this.hostElement.querySelector("[slot=link]")}componentDidUpdate(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]"),this.hasSlotLink=!!this.hostElement.querySelector("[slot=link]")}connectedCallback(){(0,a.s)({source:this.hostElement,type:"warn"}),!0===this.autoHide&&setTimeout(this.close,this.autoHideDuration)}async open(){this.opened=!0}handleIcons(){if(this.variant)switch(this.variant){case"success":return(0,o.h)("scale-icon-action-success",{class:"notification-banner__icon-success",color:"#187431","accessibility-title":"success","aria-hidden":"true"});case"informational":return(0,o.h)("scale-icon-alert-information",{class:"notification-banner__icon-information","accessibility-title":"information","aria-hidden":"true"});case"error":return(0,o.h)("scale-icon-alert-error",{class:"notification-banner__icon-error","accessibility-title":"error","aria-hidden":"true"});case"warning":return(0,o.h)("scale-icon-alert-warning",{class:"notification-banner__icon-information",color:"#AE461C","aria-hidden":"true"})}}render(){return this.opened?(0,o.h)(o.a,null,(0,o.h)("div",{role:"alert",style:{display:""+(this.opened?"":"none")},part:this.getBasePartMap(),class:this.getCssClassMap(),tabindex:"0"},(0,o.h)("div",{part:"container",class:"notification-banner__container"},this.handleIcons(),(0,o.h)("div",{part:"heading",class:"notification-banner__heading"},(0,o.h)("slot",null),this.dismissible&&(0,o.h)("button",{part:"button-dismissable",type:"button",class:"notification-banner__button-close",onClick:()=>this.close(),tabindex:0,"aria-label":this.closeButtonLabel,title:this.closeButtonTitle,onKeyDown:t=>{"Enter"===t.key&&this.close()}},(0,o.h)("scale-icon-action-circle-close",null)),this.hasSlotText&&(0,o.h)("div",{part:"text",class:"notification-banner__text"},(0,o.h)("slot",{name:"text"})),this.hasSlotLink&&(0,o.h)("scale-link",{href:this.href,class:"notification-banner__link",role:"link"},(0,o.h)("slot",{name:"link"})))))):null}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){const n="notification-banner",e="basePart"===t?"":`${n}--`;return(0,i.c)(n,this.variant&&`${e}variant-${this.variant}`,this.hasSlotText&&`${e}has-text`,!this.hasSlotText&&`${e}has-no-text`,this.hasSlotLink&&`${e}has-link`,!this.hasSlotLink&&`${e}has-no-link`)}get hostElement(){return(0,o.g)(this)}};s.style=":host{--width:100%;--radius:var(--telekom-radius-standard);--background-error:var(--telekom-color-functional-danger-subtle);--background-warning:var(--telekom-color-functional-warning-subtle);--background-informational:var(\n    --telekom-color-functional-informational-subtle\n  );--background-success:var(--telekom-color-functional-success-subtle)}.notification-banner{border-radius:var(--radius);width:var(--width);position:relative;box-shadow:var(--telekom-shadow-overlay);min-height:48px}.notification-banner--variant-error{background-color:var(--background-error)}.notification-banner--variant-warning{background-color:var(--background-warning)}.notification-banner--variant-informational{background-color:var(--background-informational)}.notification-banner--variant-success{background-color:var(--background-success)}.notification-banner__heading{margin:14px 48px 14px 48px;padding:13px 0 13px 0;font-weight:var(--telekom-typography-font-weight-bold);line-height:22px}.notification-banner__text ::slotted(*){margin:-10px 0px -25px 0px;line-height:16px;padding:13px 0 15px 0}.notification-banner--has-no-link .notification-banner__text ::slotted(*){margin:-10px 0px -14px 0px;line-height:16px;padding-bottom:15px}.notification-banner--has-no-text .notification-banner__link ::slotted(*){margin:0;padding:0px 0px 0px 16px}.notification-banner--has-text .notification-banner__link ::slotted(*){margin:20px 0 0 0;padding-bottom:2px;line-height:20px}::slotted(*){font-weight:var(--telekom-typography-font-weight-regular)}.notification-banner__button-close{position:absolute;top:8px;right:13.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-banner__button-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%;color:var(--telekom-color-text-and-icon-standard)}.notification-banner__button-close:hover svg{background-color:white;color:var(--telekom-color-text-and-icon-primary-hovered)}.notification-banner__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-success)}.notification-banner__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-danger)}.notification-banner__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-informational)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-banner__button-close svg{color:hsl(0, 0%, 100%)}.notification-banner{border:1px solid hsl(0, 0%, 100%)}.notification-banner__heading{margin:0px 48px 0px 48px}}"},94200:(t,n,e)=>{e.d(n,{s:()=>a});const o={beta:"\u03b2",WIP:"\ud83d\udee0 WIP",deprecated:"\ud83d\ude35 Deprecation notice",warning:"Warning"},i={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function a({tag:t="WIP",extraMessage:n=null,message:e=null,source:a=null,type:r="info"}){(0,console[r])(`%c scale \u2013 ${o[t]} `,"background: #E20074; color: #FFF; border-radius: 4px",`\n\n${e||i[t]} ${n?"\n"+n:""}\n    `,null!==a?"\nsource:":"","object"==typeof a?a:`${a}`,null!==a?"\n\n":"")}},91779:(t,n,e)=>{e.d(n,{a:()=>h,b:()=>r,c:()=>i,e:()=>a,g:()=>l,h:()=>o,i:()=>s});const o=t=>!!t.shadowRoot&&!!t.attachShadow,i=t=>{let n=document.styleSheets[0];if(!n){const t=document.createElement("style");document.head.appendChild(t),n=document.styleSheets[0],document.head.removeChild(t)}return function(){try{return/^:/.test(t)||(t=":"+t),n.insertRule("html"+t+"{}",0),n.deleteRule(0),!0}catch(e){return!1}}()};function a(t,n,e){const o=n+"Legacy",i=[];return void 0!==t[o]&&i.push(t[o].emit(e)),i.push(t[n].emit(e)),i}function r(t,n){let e=t.target;const o=null!=e.shadowRoot,i=o?t.composedPath():[];do{if(e===n)return!1;e=o?i.shift():e.parentNode}while(e);return!0}const s=t=>null!=t&&1===t.nodeType&&"SCALE-ICON"===t.nodeName.toUpperCase().substring(0,10);let c=0;function l(){return c++}const h=t=>Promise.all(t.getAnimations({subtree:!0}).map((t=>t.finished)))}}]);