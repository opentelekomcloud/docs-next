"use strict";
exports.id = 7852;
exports.ids = [7852];
exports.modules = {

/***/ 47852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_service_vpn: () => (/* binding */ ServiceVpn)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceVpn = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.002.98l9.5 2.172v7.998c0 5.588-3.684 10.573-8.997 12.232l-.503.148-.206-.059c-5.372-1.535-9.154-6.447-9.29-12.011l-.004-.31V3.152l9.5-2.171zM15.58 9h-1.026v5h1.01v-3.129h.045L17.405 14h1.018V9H17.42v3.144h-.045L15.579 9zm-3.476 0h-1.856v5h1.01v-1.684h.846c.972 0 1.654-.591 1.654-1.654S13.075 9 12.103 9zM6.391 9h-1.04l1.631 5h1.011l1.631-5h-1.04l-1.077 3.383h-.045L6.392 9zm5.644.935c.382 0 .674.255.674.726 0 .426-.245.675-.58.714l-.094.005h-.778V9.935h.778z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 .98L2.5 3.153v7.998c0 5.691 3.822 10.758 9.294 12.321l.206.059.206-.059c5.472-1.564 9.294-6.63 9.294-12.321V3.152L12 .981zm8 10.17c0 4.953-3.279 9.37-8 10.818-4.721-1.448-8-5.865-8-10.818V4.348l8-1.829 8 1.829v6.802zM7.504 12.383h-.045L6.389 9H5.348l1.631 5H7.99l1.631-5h-1.04l-1.077 3.383zm8.056-1.511h.045L17.402 14h1.018V9h-1.003v3.144h-.045L15.576 9H14.55v5h1.01v-3.129zM10.244 14h1.01v-1.684h.846c.973 0 1.654-.591 1.654-1.654S13.073 9 12.1 9h-1.856v5zm1.01-4.065h.779c.381 0 .673.255.673.726 0 .465-.292.719-.673.719h-.779V9.935z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ServiceVpn.style = iconCss;




/***/ })

};
;