/*! For license information please see 4492.0d45b2c4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs_next=self.webpackChunkdocs_next||[]).push([[4492],{88114:(e,t,s)=>{s.d(t,{c:()=>o});var i,r,n,o=(i=function(e){!function(){var t={}.hasOwnProperty;function s(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var o=s.apply(null,r);o&&e.push(o)}else if("object"===n)for(var a in r)t.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()},i(n={path:r,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports)},4492:(e,t,s)=>{s.r(t),s.d(t,{scale_list_item:()=>n});var i=s(90936),r=s(88114);const n=class{constructor(e){(0,i.r)(this,e),this.ordered=!1,this.marker=!0,this.hasNestedChild=!1,this.isNested=!1,this.handleSlotChange=({target:e})=>{this.hasNestedChild=e.assignedNodes().length>0,this.isNested=this.isNestedCheck()},this.isNestedCheck=()=>null!=this.el.closest('scale-list[slot="nested"]')}componentWillLoad(){this.isNested=this.isNestedCheck()}connectedCallback(){this.el.hasAttribute("role")||this.el.setAttribute("role","listitem")}render(){return(0,i.h)(i.a,null,this.styles&&(0,i.h)("style",null,this.styles),(0,i.h)("div",{class:this.getCssClassMap(),"data-index":this.index,part:(0,r.c)("base",this.ordered?"ordered":"unordered",this.isNested&&"nested",!this.marker&&"no-marker")},(0,i.h)("slot",null),(0,i.h)("div",{class:"list-item__nested-list",part:"nested-list",hidden:!this.hasNestedChild},(0,i.h)("slot",{name:"nested",onSlotchange:this.handleSlotChange}))))}getCssClassMap(){const e=this.ordered?"ordered":"unordered";return(0,r.c)("list-item",this.isNested&&"list-item--nested",`list-item--${e}`,!this.marker&&"list-item--no-marker")}get el(){return(0,i.g)(this)}};n.style=":host(scale-list-item){--display:block;--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing-left:calc(0.5ch + var(--telekom-spacing-composition-space-07));--spacing-left-nested:calc(\n    0.5ch + var(--telekom-spacing-composition-space-06)\n  );--font-marker-ordered:var(--telekom-text-style-body);--font-marker-ordered-nested:var(--telekom-text-style-small-bold);--line-height-marker-ordered-nested:var(\n    --telekom-typography-line-spacing-standard\n  );--spacing-top-marker-ordered-nested:calc(\n    var(--telekom-spacing-composition-space-06) -\n      var(--telekom-spacing-composition-space-05)\n  );--spacing-right-no-marker:var(--telekom-spacing-composition-space-04);display:var(--display)}.list-item{position:relative;font-size:var(--font-size);line-height:var(--line-height);padding-left:var(--spacing-left);margin-top:var(--telekom-spacing-composition-space-03)}.list-item--nested{padding-left:var(--spacing-left-nested)}.list-item:before{content:'';top:0;left:0;position:absolute}.list-item--unordered:before{top:0.5em;border:var(--telekom-spacing-composition-space-01) solid currentColor;display:block;transform:scale(0.66);background:currentColor;box-sizing:border-box;border-radius:50%;width:var(--telekom-spacing-composition-space-04);height:var(--telekom-spacing-composition-space-04)}.list-item--nested.list-item--unordered:before{border:var(--telekom-spacing-composition-space-01) solid currentColor;background:transparent}.list-item--ordered:before{content:attr(data-index) '.';font:var(--font-marker-ordered);font-variant-numeric:tabular-nums}.list-item--nested.list-item--ordered:before{font:var(--telekom-text-style-small-bold);font-variant-numeric:tabular-nums;line-height:var(--line-height-marker-ordered-nested);padding-top:var(--spacing-top-marker-ordered-nested)}.list-item--no-marker{display:inline-flex;align-items:center;padding-left:0}.list-item--no-marker:before{display:none}.list-item--no-marker>::slotted(*){margin-right:var(--spacing-right-no-marker)}"}}]);