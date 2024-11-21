/*! For license information please see 72650.efbc65b4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[72650],{88114:(e,t,r)=>{r.d(t,{c:()=>i});var o,n,a,i=(o=function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()},o(a={path:n,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},a.exports),a.exports)},72650:(e,t,r)=>{r.r(t),r.d(t,{scale_sidebar_nav_item:()=>i});var o=r(90936),n=r(88114);const a=e=>{try{return!!JSON.parse(e)}catch(t){return"string"==typeof e||!!e}},i=class{constructor(e){(0,o.r)(this,e),this.condensed=!1,this.bold=!1,this.active=!1,this.current=null}nestingLevelChanged(e){1===e&&(this.bold=!0)}currentChanged(e){this.handleAriaCurrentInSlottedA(e),this.syncActiveToCurrent(e)}componentDidLoad(){this.handleAriaCurrentInSlottedA(this.current),this.current&&this.syncActiveToCurrent(this.current)}syncActiveToCurrent(e){this.active=a(e)}handleAriaCurrentInSlottedA(e){const t=this.el.querySelector("a");null!=this.srOnlyElement&&(t.removeChild(this.srOnlyElement),this.srOnlyElement=null),null!=t&&t.removeAttribute("aria-current"),a(e)&&null!=t&&(this.srOnlyElement=this.createScreenReaderOnlySpan(),t.appendChild(this.srOnlyElement),t.setAttribute("aria-current","page"))}createScreenReaderOnlySpan(){const e=(e=>{let t;try{t=JSON.parse(e)}catch(r){t=e}return"string"==typeof t&&t.length>0?` ${t}`:" Zurzeit aktiv"})(this.current),t=document.createElement("span");return Object.assign(t.style,{position:"absolute",left:"-10000px",overflow:"hidden"}),t.textContent=e,t}render(){return(0,o.h)(o.a,null,this.styles&&(0,o.h)("style",null,this.styles),(0,o.h)("li",{part:this.getBasePartMap(),class:this.getCssClassMap(),role:"listitem"},(0,o.h)("slot",null)))}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(e){const t="sidebar-nav-item",r="basePart"===e?"":`${t}--`;return(0,n.c)(t,this.bold&&`${r}bold`,this.condensed&&`${r}condensed`,this.active&&`${r}active`)}get el(){return(0,o.g)(this)}static get watchers(){return{nestingLevel:["nestingLevelChanged"],current:["currentChanged"]}}};i.style=":host{--border-bottom-color:var(--telekom-color-ui-faint);--border-left-color-third-nesting:var(--telekom-color-ui-strong);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--background-color-before-active:var(--color-primary);--font-bold:var(--telekom-text-style-ui-bold);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard)}.sidebar-nav-item{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--border-bottom-color)}.sidebar-nav-item--active{position:relative;color:var(--color-primary)}.sidebar-nav-item--active::before{content:'';display:block;position:absolute;top:0;left:var(--left-current-border, 0);width:0;height:100%;background-color:var(--background-color-before-active);border-left:2px solid transparent}.sidebar-nav-item:hover.sidebar-nav-item--active::before{background-color:var(--color-hover)}.sidebar-nav-item:active.sidebar-nav-item--active::before{background-color:var(--color-active)}.sidebar-nav-item--condensed.sidebar-nav-item--active::before{left:-1px}:host([nesting-level='1']) .sidebar-nav-item,.sidebar-nav-item--bold{font:var(--font-bold)}:host([nesting-level='3']) .sidebar-nav-item{border-left-color:var(--border-left-color-third-nesting);border-left-style:solid;border-left-width:0.0625rem}::slotted(a){color:currentColor;display:flex;align-items:center;padding-top:1rem;padding-right:1rem;padding-bottom:1rem;padding-left:var(--spacing-indent);border-radius:var(--telekom-radius-small);text-decoration:none;outline:none;min-height:20px}:host([nesting-level='2']) ::slotted(a){padding-left:calc(var(--spacing-indent) + 0.75rem)}::slotted(a:hover){color:var(--color-hover)}::slotted(a:focus){box-shadow:var(--box-shadow-focus)}::slotted(a:active){color:var(--color-active)}.sidebar-nav-item--condensed{border-bottom-width:0}.sidebar-nav-item--condensed ::slotted(a){padding-top:0.5rem;padding-left:0.75rem;padding-right:0.5rem;padding-bottom:0.5rem}"}}]);