"use strict";
exports.id = 8295;
exports.ids = [8295];
exports.modules = {

/***/ 38295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_add_device: () => (/* binding */ DeviceAddDevice)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceAddDevice = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8 6a3 3 0 012.995 2.824L11 9v3.22a7.97 7.97 0 00-.335 10.155 3 3 0 01-2.468 1.618L8 24H3a3 3 0 01-2.995-2.824L0 21V9a3 3 0 012.824-2.995L3 6h5zm9 5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zM5.5 19.75a1 1 0 100 2 1 1 0 000-2zm11.5-5.5a.75.75 0 01.743.648l.007.102v1.75h1.75a.75.75 0 01.102 1.493l-.102.007h-1.75V20a.75.75 0 01-1.493.102L16.25 20v-1.75H14.5a.75.75 0 01-.102-1.493l.102-.007h1.75V15a.75.75 0 01.75-.75zM17 1a3 3 0 012.995 2.824L20 4v6.085a8 8 0 00-7.252.638l-.248.162V9a4.5 4.5 0 00-4.288-4.495L8 4.5H3.47V4a3 3 0 012.824-2.995L6.47 1H17zM7 7.5H4V9h3V7.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8 6a3.01 3.01 0 012.995 2.824L11 9v3.25a7.284 7.284 0 00-1.378 2.187l-.122.313V9c0-.8-.576-1.423-1.352-1.493L8 7.5H7V9H4V7.5H3c-.8 0-1.423.576-1.493 1.352L1.5 9v12c0 .8.576 1.423 1.352 1.493L3 22.5h5c.8 0 1.423-.576 1.493-1.352L9.5 21v-.75c.25.75.65 1.45 1.15 2.1a2.949 2.949 0 01-2.449 1.643L8 24H3a3.01 3.01 0 01-2.995-2.824L0 21V9a3.01 3.01 0 012.824-2.995L3 6h5zm9 5c3.6 0 6.5 2.9 6.5 6.5S20.6 24 17 24s-6.5-2.9-6.5-6.5S13.4 11 17 11zM5.5 19.75a1 1 0 110 2 1 1 0 010-2zm11.5-5.5a.772.772 0 00-.743.651L16.25 15v1.75H14.5c-.4 0-.75.35-.75.75 0 .367.294.691.651.743l.099.007h1.75V20c0 .4.35.75.75.75a.772.772 0 00.743-.651L17.75 20v-1.75h1.75c.4 0 .75-.35.75-.75a.772.772 0 00-.651-.743l-.099-.007h-1.75V15c0-.4-.35-.75-.75-.75zM17 1a3.01 3.01 0 012.995 2.824L20 4v6.1a8.728 8.728 0 00-1.125-.366L18.5 9.65V4c0-.8-.576-1.423-1.352-1.493L17 2.5H6.5c-.8 0-1.423.576-1.493 1.352L5 4v.5H3.5V4a3.01 3.01 0 012.824-2.995L6.5 1H17z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceAddDevice.style = iconCss;




/***/ })

};
;