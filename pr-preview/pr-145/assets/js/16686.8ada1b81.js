/*! For license information please see 16686.8ada1b81.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[16686],{88114:(e,t,n)=>{n.d(t,{c:()=>o});var i,a,r,o=(i=function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=n.apply(null,a);o&&e.push(o)}else if("object"===r)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()},i(r={path:a,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports)},16686:(e,t,n)=>{n.r(t),n.d(t,{scale_accordion:()=>r});var i=n(90936),a=n(88114);const r=class{constructor(e){(0,i.r)(this,e),this.dependent=!1,this.expanded=!1,this.headingLevel=null,this.iconLocation="left"}collapsibleHandler(e){e.stopPropagation();const{expanded:t}=e.detail;this.dependent&&!1!==t&&this.getCollapsibleChildren().forEach((t=>{t!==e.target&&t.hasAttribute("expanded")&&(t.expanded=!1)}))}headingLevelChanged(e){this.propagatePropsToChildren(e,this.iconLocation)}iconLocationChanged(e){this.propagatePropsToChildren(this.headingLevel,e)}connectedCallback(){this.dependent||this.getCollapsibleChildren().forEach((e=>{e.expanded=this.expanded}))}componentDidLoad(){null===this.headingLevel&&"left"===this.iconLocation||this.propagatePropsToChildren(this.headingLevel,this.iconLocation)}getCollapsibleChildren(){return Array.from(this.el.children).filter((e=>"SCALE-COLLAPSIBLE"===e.tagName))}propagatePropsToChildren(e,t){this.getCollapsibleChildren().forEach((n=>{n.headingLevel=e,n.iconLocation=t}))}render(){return(0,i.h)(i.a,null,this.styles&&(0,i.h)("style",null,this.styles),(0,i.h)("div",{class:this.getCssClassMap(),part:"base"},(0,i.h)("slot",null)))}getCssClassMap(){return(0,a.c)("accordion")}get el(){return(0,i.g)(this)}static get watchers(){return{headingLevel:["headingLevelChanged"],iconLocation:["iconLocationChanged"]}}}}}]);