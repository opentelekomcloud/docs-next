"use strict";
exports.id = 3588;
exports.ids = [3588];
exports.modules = {

/***/ 73588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_service_one_time_password: () => (/* binding */ ServiceOneTimePassword)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceOneTimePassword = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18.248 9.5a6.25 6.25 0 110 12.498 6.25 6.25 0 010-12.499zm0 1.5a4.755 4.755 0 00-4.75 4.749c0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75-2.131-4.75-4.75-4.75zm-.052.5a.75.75 0 01.742.637l.008.101.04 2.763 2.01-.002a.75.75 0 01.105 1.493l-.102.007-3.49.004-.063-4.243a.75.75 0 01.637-.752l.113-.009zM22.498 4v5.272A7.71 7.71 0 0018.248 8a7.74 7.74 0 00-6.912 4.26l-.116.24H4a3.003 3.003 0 01-2.995-2.825L1 9.5V4h21.498zm-10.25 3a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM8.75 7a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-3.5 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.235 9.176a5.882 5.882 0 110 11.765 5.882 5.882 0 010-11.765zm-.049 1.883h-.01a.706.706 0 00-.69.62l-.006.096.06 3.993 3.284-.003a.706.706 0 00.095-1.406l-.096-.006-1.893.002-.038-2.6a.706.706 0 00-.706-.696zM21.236 4v4.959a7.27 7.27 0 00-1.412-.722V5.412H2.412v3.764c0 .779.633 1.412 1.412 1.412h7.648a7.294 7.294 0 00-.86 1.412H3.824A2.826 2.826 0 011 9.176V4h20.235zM5 6.824a1.176 1.176 0 110 2.352 1.176 1.176 0 010-2.352zm3.294 0a1.176 1.176 0 110 2.352 1.176 1.176 0 010-2.352zm3.294 0a1.176 1.176 0 110 2.352 1.176 1.176 0 010-2.352z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ServiceOneTimePassword.style = iconCss;




/***/ })

};
;