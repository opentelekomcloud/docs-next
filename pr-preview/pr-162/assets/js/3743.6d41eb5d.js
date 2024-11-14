"use strict";
exports.id = 3743;
exports.ids = [3743];
exports.modules = {

/***/ 53743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_device_router: () => (/* binding */ DeviceDeviceRouter)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDeviceRouter = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19.5 7h-2.3L13 10.635l-1 .865-1-.845L6.8 7H4.5a3 3 0 00-3 3v10a3 3 0 003 3h15a3 3 0 003-3V10a3 3 0 00-3-3zM13 19h-2v-2h2v2zM12 3a5.5 5.5 0 014.615 2.5l1.145-1a7 7 0 00-11.525 0l1.15 1A5.5 5.5 0 0112 3zm2.3 4.5l1.165-1a4 4 0 00-6.93 0l1.165 1a2.5 2.5 0 014.6 0zm-3.3 1a1 1 0 102 0 1 1 0 00-2 0z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.8 7l1.75 1.5H4.5c-.8 0-1.423.576-1.493 1.352L3 10v10c0 .8.576 1.423 1.352 1.493l.148.007h15c.8 0 1.423-.576 1.493-1.352L21 20V10c0-.8-.576-1.423-1.352-1.493L19.5 8.5h-4.05L17.2 7h2.3a3.01 3.01 0 012.995 2.824L22.5 10v10a3.01 3.01 0 01-2.824 2.995L19.5 23h-15a3.01 3.01 0 01-2.995-2.824L1.5 20V10a3.01 3.01 0 012.824-2.995L4.5 7h2.3zM13 17v2h-2v-2h2zm-1-9.5a1 1 0 110 2 1 1 0 010-2zm0-3c1.374 0 2.613.718 3.335 1.814l.115.186-1.15 1C13.9 6.65 13.05 6 12 6c-.984 0-1.793.527-2.22 1.335L9.7 7.5l-1.15-1c.65-1.2 2-2 3.45-2zm0-3a6.985 6.985 0 015.596 2.787l.154.213-1.15 1C15.65 4 13.95 3 12 3a5.357 5.357 0 00-4.472 2.351L7.4 5.55l-1.15-1A6.904 6.904 0 0112 1.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceDeviceRouter.style = iconCss;




/***/ })

};
;