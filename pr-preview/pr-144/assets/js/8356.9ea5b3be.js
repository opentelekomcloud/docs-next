"use strict";
exports.id = 8356;
exports.ids = [8356];
exports.modules = {

/***/ 58356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_alert_traffic_disruption: () => (/* binding */ AlertTrafficDisruption)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertTrafficDisruption = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.75 11.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zm0 1.5A4.756 4.756 0 0013 17.75a4.756 4.756 0 004.75 4.75 4.756 4.756 0 004.75-4.75A4.756 4.756 0 0017.75 13zm0 6.173a1 1 0 11.001 1.998 1 1 0 01-.001-1.998zM9.25 2c4.695 0 8.564 3.501 9.16 8.033a7.992 7.992 0 00-.66-.033c-.461 0-.911.048-1.351.126a7.247 7.247 0 00-3.023-4.83c.667 1.28 1.123 2.829 1.29 4.527l.035.427h1.132a7.752 7.752 0 00-3.309 1.784l-.226.216H10.25v3.582A7.733 7.733 0 0010 17.75c0 .935.176 1.828.48 2.658a9.223 9.223 0 01-1.23.092 9.25 9.25 0 010-18.5zm-1 10.25H5.808c.196 2.434 1.091 4.574 2.284 5.685l.158.14V12.25zM18.5 14v4H17v-4h1.5zM3.8 12.25H2.078a7.249 7.249 0 003.039 4.948c-.72-1.383-1.191-3.087-1.317-4.948zm4.45-7.825c-1.218 1.02-2.156 3.102-2.413 5.51l-.03.315H8.25V4.425zm2 0v5.825h2.443c-.206-2.54-1.172-4.76-2.443-5.825zm-5.128.873A7.25 7.25 0 002.124 9.96l-.046.29H3.8c.127-1.863.6-3.567 1.322-4.952z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.75 11.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zm0 7.673a1 1 0 10-.001 2 1 1 0 000-2zM9.25 2c4.695 0 8.564 3.501 9.16 8.033a7.992 7.992 0 00-.66-.033c-.29 0-.576.02-.857.05a7.753 7.753 0 00-3.468-5.319c.948 1.5 1.566 3.507 1.685 5.74a7.75 7.75 0 00-2.294 1.313l-.25.216H10v6.867l.085-.034a7.61 7.61 0 00.394 1.576 9.22 9.22 0 01-1.23.091 9.25 9.25 0 010-18.5zM8.5 12H4.887c.196 3.263 1.65 6.068 3.444 6.804l.169.063V12zm10 2H17v4h1.5v-4zM3.389 12H1.538a7.755 7.755 0 003.537 5.77c-.952-1.507-1.572-3.526-1.686-5.77zm1.686-7.269a7.758 7.758 0 00-3.504 5.48l-.033.29h1.85c.115-2.245.735-4.265 1.687-5.77zM8.5 3.632c-1.814.605-3.317 3.33-3.591 6.563l-.022.305H8.5V3.632zm1.5 0V10.5h3.613C13.41 7.134 11.87 4.256 10 3.632z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AlertTrafficDisruption.style = iconCss;




/***/ })

};
;