"use strict";
exports.id = 9023;
exports.ids = [9023];
exports.modules = {

/***/ 19023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_device_mesh: () => (/* binding */ DeviceDeviceMesh)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDeviceMesh = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.004 1.5c5.798 0 10.5 4.701 10.5 10.5a10.46 10.46 0 01-2.982 7.32l-.224.223 2.155 1.099a.749.749 0 01-.57 1.382l-.112-.047-2.733-1.393a10.44 10.44 0 01-6.034 1.916c-2.117 0-4.082-.632-5.73-1.71l-.305-.206-2.733 1.393a.75.75 0 01-.77-1.284l.089-.051 2.154-1.1A10.462 10.462 0 011.504 12c0-5.799 4.7-10.5 10.5-10.5zm0 12.5a1 1 0 100 2 1 1 0 000-2zm0-3a3.995 3.995 0 00-3.353 1.827l-.114.186 1.168 1.007a2.502 2.502 0 012.299-1.52c.97 0 1.811.555 2.225 1.365l.073.155 1.168-1.007A3.999 3.999 0 0012.004 11zm0-3a6.991 6.991 0 00-5.607 2.818l-.156.217 1.146.987A5.496 5.496 0 0112.003 9.5c1.85 0 3.488.921 4.485 2.327l.131.195 1.146-.987A6.995 6.995 0 0012.004 8z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 14a1 1 0 100 2 1 1 0 000-2zm9.449 6.642l-2.155-1.099A10.462 10.462 0 0022.5 12c0-5.799-4.701-10.5-10.5-10.5S1.5 6.201 1.5 12c0 2.963 1.232 5.634 3.205 7.543l-2.154 1.099a.75.75 0 10.682 1.335l2.732-1.393A10.437 10.437 0 0012 22.5a10.44 10.44 0 006.035-1.916l2.732 1.393a.75.75 0 10.682-1.335zM12 21c-4.963 0-9-4.038-9-9 0-4.963 4.037-9 9-9 4.962 0 9 4.037 9 9 0 4.962-4.038 9-9 9zm0-10a3.999 3.999 0 00-3.466 2.013L9.7 14.02A2.502 2.502 0 0112 12.5c1.03 0 1.916.627 2.299 1.52l1.168-1.007A3.999 3.999 0 0012 11zm0-3a6.996 6.996 0 00-5.763 3.035l1.146.987A5.496 5.496 0 0112 9.5a5.496 5.496 0 014.617 2.522l1.145-.987A6.995 6.995 0 0012 8z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceDeviceMesh.style = iconCss;




/***/ })

};
;