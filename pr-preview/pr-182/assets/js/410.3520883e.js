"use strict";
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 40410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_mobile_services: () => (/* binding */ DeviceMobileServices)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceMobileServices = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.5.5a3 3 0 012.995 2.824l.005.176v1l-.165.855-.18 1-.845-.585-.685-.5-2.26 2.26-.59.595.475.685.57.855L9 10v4l.83.2 1 .185-1.055 1.53 2.85 2.85.685-.5.845-.585.18 1 .165.82v1a3 3 0 01-2.824 2.995l-.176.005h-8a3 3 0 01-2.995-2.824L.5 20.5v-17A3 3 0 013.324.505L3.5.5h8zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zM17.685 5.5L18 7.135a.595.595 0 00.816.41L18.9 7.5l1.375-.93 1.67 1.67L21 9.605a.59.59 0 00.279.867l.091.028 1.635.32v2.38l-1.635.3a.59.59 0 00-.415.81l.045.085.935 1.38-1.67 1.67L18.9 16.5a.595.595 0 00-.871.279L18 16.87l-.315 1.63H15.32l-.295-1.615a.595.595 0 00-.833-.434l-.087.049-1.38.93-1.67-1.67.945-1.365a.59.59 0 00-.268-.908l-.097-.027-1.63-.3V10.8l1.63-.3a.59.59 0 00.41-.811L12 9.605l-.93-1.365 1.67-1.67 1.365.94a.59.59 0 00.894-.284l.026-.096.295-1.63h2.365zM16.5 10a2 2 0 100 4 2 2 0 000-4zm-7-7.75h-4v1h4v-1z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.5.5a3.01 3.01 0 012.995 2.824l.005.176v.75c-.4.12-.8.24-1.2.411L13 4.8V3.5c0-.8-.576-1.423-1.352-1.493L11.5 2h-2v1.5h-4V2h-2c-.8 0-1.423.576-1.493 1.352L2 3.5v17c0 .8.576 1.423 1.352 1.493L3.5 22h8c.8 0 1.423-.576 1.493-1.352L13 20.5v-1.3c.4.2.8.336 1.2.46l.3.09v.75a3.01 3.01 0 01-2.824 2.995l-.176.005h-8a3.01 3.01 0 01-2.995-2.824L.5 20.5v-17A3.01 3.01 0 013.324.505L3.5.5h8zm-4 18a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm7.85-13h2.35l.3 1.6c.046.418.48.62.823.447L18.9 7.5l1.35-.9 1.65 1.65-.95 1.35a.617.617 0 00.311.87l.089.03 1.65.35v2.35l-1.65.3c-.371.046-.57.48-.397.823L21 14.4l.85 1.3-1.65 1.65-1.35-.95a.617.617 0 00-.87.311l-.03.089-.3 1.65H15.3L15 16.8a.566.566 0 00-.823-.447l-.077.047-1.35.95-1.65-1.65.95-1.35a.617.617 0 00-.311-.87l-.089-.03-1.65-.3V10.8l1.65-.3a.566.566 0 00.447-.823L12.05 9.6l-.95-1.35 1.65-1.65 1.35.95a.617.617 0 00.87-.311L15 7.15l.35-1.65zM16.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceMobileServices.style = iconCss;




/***/ })

};
;