"use strict";
exports.id = 3612;
exports.ids = [3612];
exports.modules = {

/***/ 93612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_voucher: () => (/* binding */ ContentVoucher)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentVoucher = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M4.5 3v2H6V3h3v2h1.5V3h3v2H15V3h3v2h1.5V3H23v3.5h-2V8h2v3h-2v1.5h2v3h-2V17h2v.5a3 3 0 01-2.824 2.995L20 20.5h-.5v-2H18v2h-3v-2h-1.5v2h-3v-2H9v2H6v-2H4.5v2H4a3 3 0 01-2.995-2.824L1 17.5V17h2v-1.5H1v-3h2V11H1V8h2V6.5H1V3h3.5zm10.295 8.945a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm.77-4.635H13.93l-5.635 9h1.64l5.63-9zm-.755 5.905a1 1 0 010 1.945.975.975 0 01-.116-1.93l.116-.015zM9.085 7.15a2.25 2.25 0 00-.03 4.5 2.235 2.235 0 002.27-2.245 2.25 2.25 0 00-2.24-2.255zm-.03 1.28a.92.92 0 01.919.849l.001.126a.915.915 0 11-1.826.113l.001-.113a.92.92 0 01.905-.975z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2.5 17v.5c0 .8.576 1.423 1.352 1.493L4 19h.5v1.5H4a3.01 3.01 0 01-2.995-2.824L1 17.5V17h1.5zM18 19v1.5h-3V19h3zm5-2v.5a3.01 3.01 0 01-2.824 2.995L20 20.5h-.5V19h.5c.8 0 1.423-.576 1.493-1.352l.007-.148V17H23zm-9.5 2v1.5h-3V19h3zM9 19v1.5H6V19h3zm5.95-7.1c1.3 0 2.35 1 2.35 2.3 0 1.3-1.05 2.35-2.35 2.35S12.6 15.5 12.6 14.2s1.05-2.3 2.35-2.3zM15.8 7l-5.9 9.5H8.15L14.1 7h1.7zM2.5 12.5v3H1v-3h1.5zm20.5 0v3h-1.5v-3H23zm-8.05.7c-.55 0-.95.45-.95 1s.4 1 .95 1c.55 0 .95-.4.95-1 0-.55-.4-1-.95-1zm-5.9-6.25c1.3 0 2.35 1.05 2.35 2.35s-1.05 2.3-2.35 2.3-2.35-1-2.35-2.3c0-1.3 1.05-2.35 2.35-2.35zM2.5 8v3H1V8h1.5zM23 8v3h-1.5V8H23zM9 8.25c-.5 0-.9.45-.95 1 0 .55.4 1 .95 1 .55 0 .95-.45.95-1s-.4-1-.95-1zM23 3v3.5h-1.5v-2h-2V3H23zM4.5 3v1.5h-2v2H1V3h3.5zM18 3v1.5h-3V3h3zM9 3v1.5H6V3h3zm4.5 0v1.5h-3V3h3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentVoucher.style = iconCss;




/***/ })

};
;