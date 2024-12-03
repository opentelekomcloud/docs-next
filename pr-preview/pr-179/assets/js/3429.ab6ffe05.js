"use strict";
exports.id = 3429;
exports.ids = [3429];
exports.modules = {

/***/ 33429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_home_power_socket: () => (/* binding */ HomePowerSocket)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomePowerSocket = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 19a7 7 0 110-14 7 7 0 010 14zM2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2zm12.5 11.25a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5zm-5 0a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5zm3.25-6.693V8.5h-1.5V6.557C8.573 6.925 6.5 9.223 6.5 12c0 2.777 2.072 5.075 4.75 5.443V15.5h1.5v1.943c2.678-.368 4.75-2.666 4.75-5.443 0-2.777-2.072-5.075-4.75-5.443z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14.5 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-5 0a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.75-6.693V8.5h1.5V6.557c2.678.368 4.75 2.666 4.75 5.443 0 2.777-2.072 5.075-4.75 5.443V15.5h-1.5v1.943C8.573 17.075 6.5 14.777 6.5 12c0-2.777 2.072-5.075 4.75-5.443zM12 19a7 7 0 100-14 7 7 0 000 14zm8.5 0c0 .827-.672 1.5-1.5 1.5H5c-.827 0-1.5-.673-1.5-1.5V3.5h17V19zM2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
HomePowerSocket.style = iconCss;




/***/ })

};
;