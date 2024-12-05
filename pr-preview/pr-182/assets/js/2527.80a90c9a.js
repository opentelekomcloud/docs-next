"use strict";
exports.id = 2527;
exports.ids = [2527];
exports.modules = {

/***/ 52527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_screen_rotate: () => (/* binding */ DeviceScreenRotate)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceScreenRotate = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.153 12.678l.102.007a.76.76 0 01.665.85 11.075 11.075 0 01-4.637 7.505l-.283.19L19.125 23h-5.31l2.13-4.855L17.155 20a9.575 9.575 0 004.255-6.675.75.75 0 01.743-.647zM15.258 1.5a3 3 0 011.977.744l.145.136 4.24 4.24a3 3 0 01.136 4.1l-.136.145L10.865 21.62a3 3 0 01-4.1.136l-.145-.136-4.24-4.24a3 3 0 01-.136-4.1l.136-.145L13.135 2.38a3 3 0 012.123-.88zM8.12 15.85a1.255 1.255 0 00-1.77 0 1.26 1.26 0 000 1.77 1.255 1.255 0 001.668.09l.102-.09.015.015a1.26 1.26 0 00-.015-1.785zm-.87.15a.75.75 0 11-.001 1.5.75.75 0 01.001-1.5zm2.935-15l-2.13 4.88-1.21-1.855a9.575 9.575 0 00-4.255 6.65.745.745 0 01-.64.639l-.1.006-.105-.005a.76.76 0 01-.64-.85A11.075 11.075 0 015.742 2.95l.283-.19L4.875 1h5.31z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.153 12.678l.102.007c.41.06.695.44.645.845-.425 3.046-2.15 5.78-4.65 7.513l-.27.182 1.15 1.76-5.31-.01 2.13-4.86 1.21 1.855c2.285-1.485 3.87-3.92 4.25-6.645a.75.75 0 01.743-.647zM15.255 1.5c.7 0 1.4.244 1.957.724l.163.151L21.62 6.62a3.002 3.002 0 01.135 4.105l-.135.145-10.755 10.755a2.996 2.996 0 01-4.076.152l-.164-.152L2.38 17.38a3.006 3.006 0 01-.135-4.101l.135-.144L13.135 2.38a2.987 2.987 0 012.12-.88zm0 1.5c-.35 0-.68.119-.949.34l-.111.1L3.44 14.195a1.5 1.5 0 00-.103 2.006l.103.114 4.245 4.245c.285.285.66.44 1.06.44.35 0 .68-.119.949-.34l.111-.1L20.56 9.805a1.501 1.501 0 00.103-2.007l-.103-.113-4.245-4.245a1.486 1.486 0 00-1.06-.44zM4.875 1.01l5.305.015-2.13 4.86L6.84 4.03c-2.285 1.485-3.87 3.92-4.25 6.645a.744.744 0 01-.74.645l-.053-.001-.052-.009a.75.75 0 01-.64-.845c.425-3.046 2.15-5.78 4.65-7.513l.27-.182-1.15-1.76z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceScreenRotate.style = iconCss;




/***/ })

};
;