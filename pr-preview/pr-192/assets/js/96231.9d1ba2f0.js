/*! For license information please see 96231.9d1ba2f0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[96231],{96231:(t,a,e)=>{e.r(a),e.d(a,{scale_rating_stars:()=>l});var r=e(90936),s=e(91779),i=e(94200);const o={small:16,large:24};let n=0;const l=class{constructor(t){(0,r.r)(this,t),this.scaleChange=(0,r.c)(this,"scale-change",7),this.scaleChangeLegacy=(0,r.c)(this,"scaleChange",7),this.ratingStarId="scale-rating-star-"+n++,this.starSize="large",this.size="large",this.minRating=0,this.maxRating=5,this.max=5,this.rating=0,this.readonly=!1,this.disabled=!1,this.ariaLabelTranslation="$rating out of $max stars",this.label="Rating",this.hideLabel=!1,this.handleInput=t=>{const a=t.composedPath()[0],e=Number(a.value);switch(!0){case e<this.minRating:a.value=this.minRating.toString();break;case e>this.max:a.value=this.max.toString()}this.rating=Number(a.value),(0,s.e)(this,"scaleChange",{value:this.rating})},this.handleStarClick=t=>{const a=t.composedPath()[0],e=Number(a.dataset.value);this.host.shadowRoot.querySelector("input").focus(),1===e&&1===this.rating&&0===this.minRating?this.rating=this.minRating:this.rating=e,(0,s.e)(this,"scaleChange",{value:this.rating})}}componentWillRender(){5!==this.maxRating&&(this.max=this.maxRating,(0,i.s)({tag:"deprecated",message:'Property "maxRating" is deprecated. Please use the "max" property!',type:"warn",source:this.host})),0!==this.minRating&&(0,i.s)({tag:"deprecated",message:'Property "minRating" is deprecated and will be deleted upon the next release',type:"warn",source:this.host}),"large"!==this.starSize&&(this.size=this.starSize,(0,i.s)({tag:"deprecated",message:'Property "starSize" is deprecated. Please use the "size" property!',type:"warn",source:this.host})),this.rating=Math.round(this.rating)}getRatingText(){return this.ariaLabelTranslation.replace(/\$rating/g,`${this.rating}`).replace(/\$maxRating/g,`${this.max}`).replace(/\$max/g,`${this.max}`)}renderStar(t,a=!1,e){const s=o[this.size],i=e%1==0,n=Math.ceil(e)===t;return(0,r.h)("div",{part:"star","data-value":t,"data-selected":a,"data-half":n&&!i,onMouseUp:!this.readonly&&this.handleStarClick,style:{zIndex:1===t?"5":"auto"}},(0,r.h)("scale-icon-action-favorite",{size:s,part:"placeholder-star"}),(0,r.h)("div",{class:"icon-clip"},(0,r.h)("scale-icon-action-favorite",{size:s,selected:!0,part:"selected-star"})))}renderRating(){const t=[],a=Math.ceil(this.rating),e=this.max;for(let r=1;r<=e;r++){const e=a>=r;t.push(this.renderStar(r,e,this.rating))}return t}render(){return(0,r.h)(r.a,{class:{hideLabel:this.hideLabel,disabled:this.disabled,readonly:this.readonly}},(0,r.h)("div",{part:"container"},(0,r.h)("label",{id:`${this.ratingStarId}-label`,part:"label",htmlFor:this.ratingStarId},this.label),(0,r.h)("div",{part:"content"},(0,r.h)("div",{part:"wrapper","aria-valuetext":this.getRatingText(),"aria-orientation":"horizontal","aria-describedby":!!this.infoText&&`${this.ratingStarId}-infotext`},(0,r.h)("input",{disabled:this.disabled,readonly:this.readonly,part:"range-slider",type:this.readonly?"number":"range",id:this.ratingStarId,min:0,max:this.max+1,value:this.rating,step:"1","aria-labelledby":`${this.ratingStarId}-label`,"aria-readonly":!!this.readonly&&"true","aria-valuemin":this.minRating,"aria-valuemax":this.max,"aria-valuenow":this.rating,"aria-valuetext":this.getRatingText(),onInput:!this.readonly&&this.handleInput}),this.renderRating()),this.infoText&&(0,r.h)("div",{part:"infotext",id:`${this.ratingStarId}-infotext`},this.infoText))))}get host(){return(0,r.g)(this)}};l.style=":host{--stars-color:var(--telekom-color-text-and-icon-primary-standard);--stars-hover-color:var(--telekom-color-text-and-icon-primary-hovered);--stars-active-color:var(--telekom-color-text-and-icon-primary-pressed);--stars-inactive-color:transparent;--stars-placeholder-color:var(--telekom-color-ui-border-standard);--stars-placeholder-hover-color:var(--telekom-color-ui-border-hovered);--stars-disabled-color:var(--telekom-color-text-and-icon-disabled);--stars-spacing:var(--telekom-spacing-composition-space-02);--stars-transition:color var(--telekom-motion-duration-immediate);--stars-size:24px;--label-font:var(--telekom-text-style-ui);--infotext-font:var(--telekom-text-style-body);--infotext-font-small:var(--telekom-text-style-body);--infotext-color:var(--telekom-color-text-and-icon-additional);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard)}[star-size='small'],[size='small']{--stars-size:16px}[part='container']{display:inline-flex;flex-direction:column;position:relative}[part='range-slider']{position:absolute;border:0;margin:0;left:calc(-1 * var(--stars-size));bottom:0;z-index:2;width:calc(100% + var(--stars-size) * 2);opacity:0;height:var(--stars-size)}@media (hover: hover){[part='range-slider']{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}}input[type='range']::-webkit-slider-thumb{-webkit-appearance:none;border:0;height:var(--stars-size);width:var(--stars-size);border-radius:50%;background:#ffffff;cursor:pointer;margin-left:0px;margin-top:0}[part='content']{display:flex;align-items:center}[part='wrapper']{display:inline-flex;border-radius:var(--telekom-spacing-composition-space-03);margin-left:calc(-1 * var(--stars-spacing))}[part='wrapper']:hover [part='star'] [part='selected-star']{opacity:1}[part='star']>*{pointer-events:none}[part='label']{font:var(--label-font);margin-bottom:var(--telekom-spacing-composition-space-04);white-space:nowrap}[part='infotext']{margin-left:var(--telekom-spacing-composition-space-04);display:flex;align-items:center;font:var(--infotext-font);color:var(--infotext-color);white-space:nowrap}:host([size='small']) [part='infotext']{font:var(--infotext-font-small)}[part='star']{--decimal-width:100%;display:inline-flex;position:relative;color:var(--stars-color);cursor:pointer;padding:0 var(--stars-spacing)}[part='placeholder-star']{display:inline-flex;color:var(--stars-placeholder-color);transition:var(--stars-transition)}[part='selected-star']{color:var(--stars-inactive-color);margin-left:0px;position:relative;transition:var(--stars-transition)}.icon-clip{overflow:hidden;position:absolute;width:var(--decimal-width);height:100%}[part='star'][data-half]{--decimal-width:calc(50% - var(--stars-spacing))}[part='star'][data-selected]{--stars-placeholder-color:transparent}[part='star'][data-half]{--stars-placeholder-color:currentColor}[part='star'][data-selected] [part='selected-star']{color:var(--stars-color)}@media (hover: hover){[part='wrapper']:hover{--stars-color:var(--stars-hover-color);--stars-placeholder-color:transparent}[part='wrapper']:hover [part='star']{--decimal-width:100%}[part='wrapper']:hover [part='star'][data-half]{--stars-placeholder-color:transparent}[part='wrapper']:hover [part='selected-star']{color:var(--stars-color)}[part='star']:hover~[part='star'] [part='selected-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{color:var(--stars-placeholder-hover-color)}}[part='wrapper']:active{--stars-color:var(--stars-active-color)}:host(:focus-within) [part='wrapper'],[part='wrapper']:focus{outline:var(--focus-outline)}:host(.readonly) [part='wrapper']{--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.disabled) [part='label'],:host(.disabled) [part='infotext']{color:var(--stars-disabled-color)}:host(.disabled) [part='wrapper']{--stars-color:var(--stars-disabled-color);--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.hideLabel) [part='label']{visibility:hidden;height:0;margin-bottom:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='star'][data-selected] [part='placeholder-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='wrapper']:hover [part='placeholder-star']{color:var(--stars-inactive-color)}}"},94200:(t,a,e)=>{e.d(a,{s:()=>i});const r={beta:"\u03b2",WIP:"\ud83d\udee0 WIP",deprecated:"\ud83d\ude35 Deprecation notice",warning:"Warning"},s={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function i({tag:t="WIP",extraMessage:a=null,message:e=null,source:i=null,type:o="info"}){(0,console[o])(`%c scale \u2013 ${r[t]} `,"background: #E20074; color: #FFF; border-radius: 4px",`\n\n${e||s[t]} ${a?"\n"+a:""}\n    `,null!==i?"\nsource:":"","object"==typeof i?i:`${i}`,null!==i?"\n\n":"")}},91779:(t,a,e)=>{e.d(a,{a:()=>d,b:()=>o,c:()=>s,e:()=>i,g:()=>c,h:()=>r,i:()=>n});const r=t=>!!t.shadowRoot&&!!t.attachShadow,s=t=>{let a=document.styleSheets[0];if(!a){const t=document.createElement("style");document.head.appendChild(t),a=document.styleSheets[0],document.head.removeChild(t)}return function(){try{return/^:/.test(t)||(t=":"+t),a.insertRule("html"+t+"{}",0),a.deleteRule(0),!0}catch(e){return!1}}()};function i(t,a,e){const r=a+"Legacy",s=[];return void 0!==t[r]&&s.push(t[r].emit(e)),s.push(t[a].emit(e)),s}function o(t,a){let e=t.target;const r=null!=e.shadowRoot,s=r?t.composedPath():[];do{if(e===a)return!1;e=r?s.shift():e.parentNode}while(e);return!0}const n=t=>null!=t&&1===t.nodeType&&"SCALE-ICON"===t.nodeName.toUpperCase().substring(0,10);let l=0;function c(){return l++}const d=t=>Promise.all(t.getAnimations({subtree:!0}).map((t=>t.finished)))}}]);