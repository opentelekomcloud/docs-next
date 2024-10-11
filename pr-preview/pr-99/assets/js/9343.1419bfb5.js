/*! For license information please see 9343.1419bfb5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[9343],{88114:(e,t,o)=>{o.d(t,{c:()=>n});var i,s,r,n=(i=function(e){!function(){var t={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)&&s.length){var n=o.apply(null,s);n&&e.push(n)}else if("object"===r)for(var a in s)t.call(s,a)&&s[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o}()},i(r={path:s,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports)},86962:(e,t,o)=>{o.r(t),o.d(t,{scale_logo:()=>n,scale_logo_svg:()=>c});var i=o(90936),s=o(88114),r=o(94200);const n=class{constructor(e){(0,i.r)(this,e),this.variant="magenta",this.transparent=!1,this.size=38,this.href="javascript:void(0);",this.focusable=!0,this.scrollIntoViewOnFocus=!1,this.logoTitle="Telekom Logo",this.logoAriaHidden=!1}componentDidRender(){this.accessibilityTitle&&(0,r.s)({tag:"deprecated",message:'Property "accessibilityTitle" is deprecated. Please use the "logoTitle" property!',type:"warn",source:this.hostElement}),this.language&&(0,r.s)({tag:"deprecated",message:'Property "language" is deprecated. Localized brand claim is not shown anymore.',type:"warn",source:this.hostElement})}render(){return(0,i.h)(i.a,{exportparts:"logo-svg"},(0,i.h)("style",null,this.size?`:host { --logo-size: ${this.size}px; }`:"",this.styles),(0,i.h)("a",{href:this.href,part:this.getCssClassMap(),tabindex:!1===this.focusable?"-1":"0",onFocus:()=>{!0===this.scrollIntoViewOnFocus&&window.scrollTo({top:0})},title:this.logoHideTitle?void 0:this.logoTitle,"aria-describedby":this.logoAriaDescribedBy,"aria-hidden":this.logoAriaHidden},(0,i.h)("scale-logo-svg",{part:"icon",color:this.variant,logoTitle:this.logoTitle,logoHideTitle:this.logoHideTitle})))}getCssClassMap(){return(0,s.c)("logo",this.variant&&`variant-${this.variant}`,this.transparent&&"transparent")}get hostElement(){return(0,i.g)(this)}};n.style=":host{--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--background-magenta:var(--telekom-color-background-canvas);--background-white:var(--telekom-color-primary-standard)}[part~='logo']{display:inline-flex;height:var(--logo-size);position:relative}[part~='logo']:focus,[part~='logo']:focus-visible{outline:var(--focus-outline);outline-offset:2px;border-radius:2px}[part~='variant-magenta']{background-color:var(--background-magenta)}[part~='variant-white']{background-color:var(--background-white)}[part~='transparent']{background-color:transparent}[part~='icon'] svg{height:var(--logo-size)}[part~='icon']:focus-visible{outline:none}[part~='icon'] svg:focus{outline:none}";let a=0;const l={magenta:"#e20074",white:"#ffffff"},c=class{constructor(e){(0,i.r)(this,e),this.color="magenta",this.innerRole="img",this.focusable=!0,this.getTitle=(e,t)=>{if(!this.logoHideTitle)return this.logoTitle?(0,i.h)("title",{id:`logo-title-${a}`},this.logoTitle):(0,i.h)("title",{id:`logo-title-${a}`},`${e} ${"link"===this.innerRole?t:""}`)}}componentWillLoad(){a++}componentDidRender(){this.accessibilityTitle&&(0,r.s)({tag:"deprecated",message:'Property "accessibilityTitle" is deprecated. Please use the "logoTitle" property!',type:"warn",source:this.hostElement})}getColor(){return this.color,l[this.color]}render(){return(0,i.h)(i.a,null,(0,i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 38",part:"logo-svg",fill:this.getColor(),role:"link"===this.innerRole?null:"img","aria-labelledby":`logo-title-${a}`},this.getTitle("Telekom Logo","- Go to Start Page"),(0,i.h)("path",{d:"M7.6 25.1H0v-7.6h7.6v7.6ZM0 0v12.9h2.3v-.4c0-6.1 3.4-9.9 9.9-9.9h.4V30c0 3.8-1.5 5.3-5.3 5.3H6.1V38h19.8v-2.7h-1.1c-3.8 0-5.3-1.5-5.3-5.3V2.7h.4c6.5 0 9.9 3.8 9.9 9.9v.4h2.3V0H0Zm24.3 25.1h7.6v-7.6h-7.6v7.6Z"})))}get hostElement(){return(0,i.g)(this)}}},94200:(e,t,o)=>{o.d(t,{s:()=>r});const i={beta:"\u03b2",WIP:"\ud83d\udee0 WIP",deprecated:"\ud83d\ude35 Deprecation notice",warning:"Warning"},s={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function r({tag:e="WIP",extraMessage:t=null,message:o=null,source:r=null,type:n="info"}){(0,console[n])(`%c scale \u2013 ${i[e]} `,"background: #E20074; color: #FFF; border-radius: 4px",`\n\n${o||s[e]} ${t?"\n"+t:""}\n    `,null!==r?"\nsource:":"","object"==typeof r?r:`${r}`,null!==r?"\n\n":"")}}}]);