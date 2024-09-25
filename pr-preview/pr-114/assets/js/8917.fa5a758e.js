"use strict";
exports.id = 8917;
exports.ids = [8917];
exports.modules = {

/***/ 48917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_device_ethernet: () => (/* binding */ DeviceDeviceEthernet)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDeviceEthernet = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18 3v6.5h-3l-5-1.511V7H6.75a3.254 3.254 0 00-3.25 3.25c0 1.73 1.36 3.15 3.066 3.245l.184.005H14c2.206 0 4 1.794 4 4a4.005 4.005 0 01-3.8 3.995l-.2.005H3.75a.75.75 0 01-.102-1.493L3.75 20H14c1.379 0 2.5-1.122 2.5-2.5a2.503 2.503 0 00-2.336-2.495L14 15H6.75A4.756 4.756 0 012 10.25a4.756 4.756 0 014.533-4.745L6.75 5.5H10v-.989L15 3h3zm4 1v4.5h-2.5V4H22z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18 3v6.5h-3l-5-1.511V7H6.75a3.254 3.254 0 00-3.25 3.25c0 1.73 1.36 3.15 3.066 3.245l.184.005H14c2.206 0 4 1.794 4 4a4.005 4.005 0 01-3.8 3.995l-.2.005H3.75a.75.75 0 01-.102-1.493L3.75 20H14c1.379 0 2.5-1.122 2.5-2.5a2.503 2.503 0 00-2.336-2.495L14 15H6.75A4.756 4.756 0 012 10.25a4.756 4.756 0 014.533-4.745L6.75 5.5H10v-.989L15 3h3zm4 1v4.5h-2.5V4H22z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceDeviceEthernet.style = iconCss;




/***/ })

};
;