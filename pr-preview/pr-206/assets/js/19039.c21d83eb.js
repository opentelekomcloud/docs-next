/*! For license information please see 19039.c21d83eb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[19039],{88114:(e,t,s)=>{s.d(t,{c:()=>n});var r,i,a,n=(r=function(e){!function(){var t={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)&&i.length){var n=s.apply(null,i);n&&e.push(n)}else if("object"===a)for(var l in i)t.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()},r(a={path:i,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},a.exports),a.exports)},41420:(e,t,s)=>{s.r(t),s.d(t,{scale_carousel:()=>n});var r=s(90936),i=s(88114),a=s(94200);const n=class{constructor(e){(0,r.r)(this,e),this.vertical=!1,this.slidesArray=[],this.value=0,this.handleSlideChange=e=>{const t=this.value;"prev"===e&&(this.value=0===t?-100*(this.slidesArray.length-1):t+100),"next"===e&&(t===-100*(this.slidesArray.length-1)?this.value=0:this.value=t-100)},this.setActiveSlide=e=>{this.value=-100*e},this.setTransformValue=()=>this.vertical?`translateY(${this.value}%)`:`translateX(${this.value}%)`,this.setActiveCssClass=e=>Math.abs(this.value)/100===e?"carousel__indicator--active":""}connectedCallback(){(0,a.s)({source:this.hostElement,type:"warn"})}componentWillLoad(){if(0===this.slidesArray.length){const e=this.hostElement.children;for(let t=0;t<e.length;t++)if(""===e[t].slot)for(let s=0;s<e[t].children.length;s++){const r=e[t].children[s];this.slidesArray.push(r)}}}render(){return(0,r.h)(r.a,null,this.styles&&(0,r.h)("style",null,this.styles),(0,r.h)("div",{class:this.getCssClassMap()},(0,r.h)("div",{class:"carousel__container"},(0,r.h)("div",{class:"carousel__arrow carousel__arrow--left",onClick:()=>this.handleSlideChange("prev")},(0,r.h)("slot",{name:"arrow-left"})),this.slidesArray.map((e=>(0,r.h)("div",{class:"carousel__slide",style:{transform:this.setTransformValue()}},(0,r.h)("div",{innerHTML:e.outerHTML})))),(0,r.h)("div",{class:"carousel__arrow carousel__arrow--right",onClick:()=>this.handleSlideChange("next")},(0,r.h)("slot",{name:"arrow-right"}))),(0,r.h)("ul",{class:"carousel__indicators"},Array.from(Array(this.slidesArray.length).keys()).map((e=>(0,r.h)("li",{key:e,class:`carousel__indicator ${this.setActiveCssClass(e)}`,onClick:()=>this.setActiveSlide(e)}))))))}getCssClassMap(){return(0,i.c)("carousel",this.vertical&&"carousel--vertical")}get hostElement(){return(0,r.g)(this)}};n.style=".carousel{width:400px;height:300px;position:relative}.carousel__container{width:100%;height:100%;margin:0;display:flex;padding:0;overflow:hidden;position:relative;box-sizing:border-box;align-items:center}.carousel__slide{height:100%;position:relative;min-width:100%;transition:all 0.3s ease-in-out}.carousel__arrow{top:50%;color:#fff;width:24px;border:none;cursor:pointer;height:24px;display:flex;outline:none;z-index:99;position:absolute;transform:translateY(-50%);background:rgba(31, 45, 61, 0.11);align-items:center;border-radius:50%;justify-content:center}.carousel__arrow--left{left:12px}.carousel__arrow--right{right:12px}.carousel__indicators{left:50%;bottom:12px;margin:0;display:inline-flex;padding:0;z-index:2;position:absolute;transform:translateX(-50%);list-style:none}.carousel__indicator{width:30px;border:none;cursor:pointer;height:4px;margin:0 6px;display:block;opacity:0.5;outline:none;padding:0;background:#fff;transition:0.3s}.carousel__indicator--active{opacity:1}.carousel--vertical .carousel__container{flex-direction:column}.carousel--vertical .carousel__arrow{display:none}.carousel--vertical .carousel__indicators{top:50%;left:unset;right:12px;bottom:0;display:flex;transform:translateY(-50%);flex-direction:column}.carousel--vertical .carousel__indicator{width:4px;height:30px;margin:6px 0}"},94200:(e,t,s)=>{s.d(t,{s:()=>a});const r={beta:"\u03b2",WIP:"\ud83d\udee0 WIP",deprecated:"\ud83d\ude35 Deprecation notice",warning:"Warning"},i={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function a({tag:e="WIP",extraMessage:t=null,message:s=null,source:a=null,type:n="info"}){(0,console[n])(`%c scale \u2013 ${r[e]} `,"background: #E20074; color: #FFF; border-radius: 4px",`\n\n${s||i[e]} ${t?"\n"+t:""}\n    `,null!==a?"\nsource:":"","object"==typeof a?a:`${a}`,null!==a?"\n\n":"")}}}]);