"use strict";
exports.id = 8625;
exports.ids = [8625];
exports.modules = {

/***/ 88625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_service_devices_service: () => (/* binding */ ServiceDevicesService)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceDevicesService = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.6 14.25c.864-.364 1.81-.48 2.764-.385l.286.035 4.6.75c.6.1 1.1.4 1.45.9.15.25.3.5.35.8l.644-.112.75-.142 3.179-.634.327-.062c.95-.2 1.85.25 2.3 1.1.25.5.35 1.15.15 1.7a2.176 2.176 0 01-.972 1.16l-.178.09-6.55 3.1c-1.05.5-2.15.75-3.3.75-.48 0-.96-.032-1.44-.122l-.36-.078-3.05-.75a18.17 18.17 0 00-2.372-.367L4.7 21.95.5 21.7v-5l6.1-2.45zM10.85 0h2.35l.3 1.6c.046.418.48.62.823.447L14.4 2l1.35-.9 1.65 1.65-.95 1.35a.617.617 0 00.311.87l.089.03 1.7.35V7.7L16.9 8a.566.566 0 00-.447.823l.847 1.427-1.65 1.65-1.35-.95a.617.617 0 00-.87.311l-.03.089-.3 1.65h-2.35l-.3-1.65a.566.566 0 00-.823-.447l-.077.047-1.35.95-1.65-1.65.95-1.35c.23-.323.078-.774-.261-.92l-.089-.03-1.65-.3V5.3L7.1 5a.566.566 0 00.447-.823L7.5 4.1l-.9-1.35L8.25 1.1l1.35.95a.617.617 0 00.87-.311l.03-.089.35-1.65zM12 4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.6 14.25c.864-.364 1.81-.48 2.764-.385l.286.035 4.6.75c.6.1 1.1.4 1.45.9.15.25.3.5.35.8l.644-.112.75-.142 3.179-.634.327-.062c.95-.2 1.85.25 2.3 1.1.25.5.35 1.15.15 1.7a2.176 2.176 0 01-.972 1.16l-.178.09-6.55 3.1c-1.05.5-2.15.75-3.3.75-.48 0-.96-.032-1.44-.122l-.36-.078-3.05-.75a18.17 18.17 0 00-2.372-.367L4.7 21.95.5 21.7v-5l6.1-2.45zm2.8 1.15c-.667-.089-1.373-.06-2.013.16l-.237.09L2 17.7v2.55l2.75.2c.875.042 1.75.153 2.625.333l.525.117 3.05.75a6.468 6.468 0 003.828-.328l.272-.122 6.55-3.1c.35-.15.5-.6.3-.95-.1-.2-.4-.35-.65-.3l-.456.1-.784.163-1.729.343-1.803.354-.543.11-.135.03c-.37.6-.994.987-1.717 1.043L13.9 19H8.55v-1.5h5.35c.35 0 .6-.25.65-.55.092-.32-.11-.684-.453-.78L14 16.15l-4.6-.75zM10.85 0h2.35l.3 1.6c.046.418.48.62.823.447L14.4 2l1.35-.9 1.65 1.65-.95 1.35a.617.617 0 00.311.87l.089.03 1.7.35V7.7L16.9 8a.566.566 0 00-.447.823l.847 1.427-1.65 1.65-1.35-.95a.617.617 0 00-.87.311l-.03.089-.3 1.65h-2.35l-.3-1.65a.566.566 0 00-.823-.447l-.077.047-1.35.95-1.65-1.65.95-1.35c.23-.323.078-.774-.261-.92l-.089-.03-1.65-.3V5.3L7.1 5a.566.566 0 00.447-.823L7.5 4.1l-.9-1.35L8.25 1.1l1.35.95a.617.617 0 00.87-.311l.03-.089.35-1.65zM12 4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ServiceDevicesService.style = iconCss;




/***/ })

};
;