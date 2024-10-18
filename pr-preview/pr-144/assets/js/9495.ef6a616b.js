"use strict";
exports.id = 9495;
exports.ids = [9495];
exports.modules = {

/***/ 49495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_home_slow_wifi: () => (/* binding */ HomeSlowWifi)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeSlowWifi = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 17a2 2 0 110 4 2 2 0 010-4zm-1.08-4.4c.15.683.394 1.33.723 1.925a4.495 4.495 0 00-3.503 2.163l-.11.195-1.437-1.49A6.495 6.495 0 0110.92 12.6zm7.018-7.225a5.694 5.694 0 015.687 5.688 5.694 5.694 0 01-5.688 5.687 5.694 5.694 0 01-5.687-5.688 5.694 5.694 0 015.688-5.687zm-6.501 2.641a7.124 7.124 0 00-.611 2.063 8.985 8.985 0 00-5.802 3.25l-.19.241-1.407-1.459a10.976 10.976 0 018.01-4.095zm7 .244v2.703h2.17v1h-3.17V8.26h1zM12 3.5c1.469 0 2.89.205 4.235.587a7.17 7.17 0 00-2.921 1.48 13.463 13.463 0 00-11.405 4.469l-.229.264L.287 8.855A15.459 15.459 0 0112 3.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 17a2 2 0 110 4 2 2 0 010-4zm-1.08-4.4c.15.683.394 1.33.723 1.925a4.495 4.495 0 00-3.503 2.163l-.11.195-1.437-1.49A6.495 6.495 0 0110.92 12.6zm7.018-7.225a5.694 5.694 0 015.687 5.688 5.694 5.694 0 01-5.688 5.687 5.694 5.694 0 01-5.687-5.688 5.694 5.694 0 015.688-5.687zm0 1.5a4.192 4.192 0 00-4.188 4.188 4.192 4.192 0 004.188 4.187 4.192 4.192 0 004.187-4.188 4.192 4.192 0 00-4.188-4.187zm-6.501 1.141a7.124 7.124 0 00-.611 2.063 8.985 8.985 0 00-5.802 3.25l-.19.241-1.407-1.459a10.976 10.976 0 018.01-4.095zm7 .244v2.703h2.17v1h-3.17V8.26h1zM12 3.5c1.469 0 2.89.205 4.235.587a7.17 7.17 0 00-2.921 1.48 13.463 13.463 0 00-11.405 4.469l-.229.264L.287 8.855A15.459 15.459 0 0112 3.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
HomeSlowWifi.style = iconCss;




/***/ })

};
;