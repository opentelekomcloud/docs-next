"use strict";
exports.id = 1802;
exports.ids = [1802];
exports.modules = {

/***/ 41802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_t_product_telekom_shop_b: () => (/* binding */ TProductTelekomShopB)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProductTelekomShopB = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21 1.5V5h.75c.902 0 1.67.722 1.744 1.609l.006.141V9H22v13.5H2V9H.5V6.75c0-.903.722-1.67 1.609-1.744L2.25 5H3V1.5h18zM15.12 11v2.55h-.446v-.075c0-1.2-.67-1.95-1.935-1.95h-.074v5.4c0 .75.297 1.05 1.041 1.05h.224v.525h-3.87v-.525h.224c.744 0 1.041-.3 1.041-1.05v-5.4h-.074c-1.265 0-1.935.75-1.935 1.95v.075H8.87V11h6.25zm0 3.333V16h-1.667v-1.667h1.667zm-4.583 0V16H8.87v-1.667h1.667zM19.5 3v2h-15V3h15z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21 1.5V5h.75c.902 0 1.67.722 1.744 1.609l.006.141V9H22v13.5H2V9H.5V6.75c0-.903.722-1.67 1.609-1.744L2.25 5H3V1.5h18zM20.5 9h-17v12h17V9zm-5.38 2v2.55h-.446v-.075c0-1.2-.67-1.95-1.935-1.95h-.074v5.4c0 .75.297 1.05 1.041 1.05h.224v.525h-3.87v-.525h.224c.744 0 1.041-.3 1.041-1.05v-5.4h-.074c-1.265 0-1.935.75-1.935 1.95v.075H8.87V11h6.25zm0 3.333V16h-1.667v-1.667h1.667zm-4.583 0V16H8.87v-1.667h1.667zM19.5 3v2h-15V3h15z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TProductTelekomShopB.style = iconCss;




/***/ })

};
;