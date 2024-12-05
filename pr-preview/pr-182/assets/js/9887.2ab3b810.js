"use strict";
exports.id = 9887;
exports.ids = [9887];
exports.modules = {

/***/ 19887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_service_maintanance: () => (/* binding */ ServiceMaintanance)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceMaintanance = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.09 6.715l-4.5 2.36-1.285-1-.105-1.64 4.5-2.36c-2.03-2.5-5.43-3.42-8.18-2S8.63 6.68 9.43 9.725L2.325 16.83a3.5 3.5 0 004.95 4.95l6.885-6.89a6.205 6.205 0 004.89-.33c2.755-1.44 3.95-4.745 3.04-7.845z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.1 6.7l-4.5 2.35-1.3-1-.1-1.65 4.5-2.35c-1.35-1.7-3.35-2.65-5.35-2.65-.95 0-1.9.2-2.8.7-1.6.85-2.65 2.3-3.1 3.95-.3 1.15-.3 2.45 0 3.7l-7.1 7.1C1 18.2 1 20.45 2.35 21.8s3.6 1.35 4.95 0l6.9-6.9c1.6.55 3.35.5 4.9-.35 2.7-1.45 3.9-4.75 3-7.85zm-3.75 6.55c-2.05 1.1-3.9.15-4.6-.05L6.2 20.7c-.8.8-2.05.8-2.85 0-.8-.8-.8-2.05 0-2.85l7.7-7.7c-.2-.75-.65-1.95-.3-3.5.3-1.4 1.15-2.6 2.4-3.25.65-.35 1.35-.5 2.1-.5.95 0 1.95.3 2.8.85l-3.45 1.8.2 3.3 2.55 2.05 3.45-1.8c0 1.7-.9 3.35-2.45 4.15z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ServiceMaintanance.style = iconCss;




/***/ })

};
;