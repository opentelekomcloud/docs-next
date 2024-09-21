"use strict";
exports.id = 5790;
exports.ids = [5790];
exports.modules = {

/***/ 95790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_remote_controller: () => (/* binding */ DeviceRemoteController)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceRemoteController = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.255 5.985l7.78 7.785-8.13 8.13a5.46 5.46 0 01-3.89 1.61 5.46 5.46 0 01-3.89-1.61 5.508 5.508 0 01-.174-7.598l.174-.182 8.13-8.135zm-2.68 9.025c.39-.39 1.025-.39 1.415 0 .39.39.39 1.025 0 1.415-.39.39-1.025.39-1.415 0a1.002 1.002 0 010-1.415zm2.44-2.44c.39-.39 1.025-.39 1.415 0 .39.39.39 1.025 0 1.415-.39.39-1.025.39-1.415 0a1.002 1.002 0 010-1.415zm3.045-8.145a6.54 6.54 0 016.53 6.3l.005.235h-1.5a5.043 5.043 0 00-4.817-5.03l-.218-.005v-1.5zm0-3.43c5.397 0 9.808 4.32 9.956 9.682l.004.278h-1.5c0-4.58-3.658-8.322-8.206-8.456l-.254-.004v-1.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.255 5.985l7.78 7.785-8.13 8.13a5.46 5.46 0 01-3.89 1.61 5.46 5.46 0 01-3.89-1.61 5.508 5.508 0 01-.174-7.598l.174-.182 8.13-8.135zM10.25 8.11l-7.07 7.07a4.002 4.002 0 000 5.655 3.974 3.974 0 002.83 1.17c.994 0 1.931-.358 2.664-1.013l.166-.157 7.065-7.07L10.25 8.11zm-2.675 6.9c.39-.39 1.025-.39 1.415 0 .39.39.39 1.025 0 1.415-.39.39-1.025.39-1.415 0a1.002 1.002 0 010-1.415zm2.44-2.44c.39-.39 1.025-.39 1.415 0 .39.39.39 1.025 0 1.415-.39.39-1.025.39-1.415 0a1.002 1.002 0 010-1.415zm3.045-8.145a6.54 6.54 0 016.53 6.3l.005.235h-1.5a5.043 5.043 0 00-4.817-5.03l-.218-.005v-1.5zm0-3.43c5.397 0 9.808 4.32 9.956 9.682l.004.278h-1.5c0-4.58-3.658-8.322-8.206-8.456l-.254-.004v-1.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceRemoteController.style = iconCss;




/***/ })

};
;