"use strict";
exports.id = 291;
exports.ids = [291];
exports.modules = {

/***/ 40291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_device_watch: () => (/* binding */ DeviceDeviceWatch)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDeviceWatch = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.19 20.875l-.08.3a2.5 2.5 0 01-2.234 1.82L14.7 23H9.3a2.5 2.5 0 01-2.357-1.657l-.053-.168-.08-.3h10.38zM15.97 3.5a4 4 0 013.995 3.8l.005.2v9a4 4 0 01-3.8 3.995l-.2.005H8.03a4 4 0 01-3.995-3.8l-.005-.2v-9a4 4 0 013.8-3.995l.2-.005h7.94zm5.53 7v3h-1.05v-3h1.05zM14.7.955a2.5 2.5 0 012.357 1.657l.053.168.08.3H6.81l.08-.3A2.5 2.5 0 019.124.96L9.3.956h5.4z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21.5 10.5H20v-3c0-1.75-1.1-3.2-2.65-3.75l-.25-.9C16.8 1.75 15.8 1 14.7 1H9.3c-1.1 0-2.1.75-2.4 1.8l-.25.9C5.1 4.3 4 5.75 4 7.5v9c0 1.75 1.1 3.2 2.65 3.75l.25.9c.3 1.1 1.3 1.8 2.4 1.8h5.4c1.1 0 2.1-.75 2.4-1.8l.25-.9A4.004 4.004 0 0020 16.5v-3h1.5v-3zm-3 6c0 1.4-1.1 2.5-2.5 2.5H8c-1.4 0-2.5-1.1-2.5-2.5v-9C5.5 6.1 6.6 5 8 5h8c1.4 0 2.5 1.1 2.5 2.5v9z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceDeviceWatch.style = iconCss;




/***/ })

};
;