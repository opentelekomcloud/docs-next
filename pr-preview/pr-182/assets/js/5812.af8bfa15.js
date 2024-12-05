"use strict";
exports.id = 5812;
exports.ids = [5812];
exports.modules = {

/***/ 95812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_country: () => (/* binding */ ContentCountry)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentCountry = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5 23a.75.75 0 11-1.5 0V3.325A1.745 1.745 0 014.25 0 1.745 1.745 0 015 3.325zM6.502 3.433c3.416-.71 5.513.352 7.401 1.313 3.397 1.728 4.94 1.922 9.597.042v11.423c0 1.46-.816 3.741-4.75 3.909-2.07.088-3.628-.57-5.527-1.537l-.367-.186c-1.736-.872-3.48-1.611-6.355-.927z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M13.903 4.746C11.753 3.652 9.332 2.427 5 3.836v-.511A1.745 1.745 0 004.25 0a1.745 1.745 0 00-.75 3.325V23A.75.75 0 105 23v-5.076c4.037-1.459 6.076-.433 8.223.66 1.899.965 3.457 1.624 5.527 1.535 3.934-.167 4.75-2.448 4.75-3.908V4.788c-4.657 1.88-6.2 1.686-9.597-.042zM22 16.211c0 2.199-2.359 2.378-3.393 2.404-1.915.05-3.278-.644-4.704-1.369-1.46-.742-3.043-1.548-5.263-1.548-1.052 0-2.247.18-3.64.634V5.418c4.042-1.462 6.075-.427 8.223.665 2.235 1.136 4.54 2.31 8.777.893v9.235z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentCountry.style = iconCss;




/***/ })

};
;