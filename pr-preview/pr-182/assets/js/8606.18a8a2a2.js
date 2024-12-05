"use strict";
exports.id = 8606;
exports.ids = [8606];
exports.modules = {

/***/ 36225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_achievement: () => (/* binding */ ContentAchievement)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentAchievement = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19 3V1.5H5V3H1.5v5.5a5 5 0 004.145 4.92 7 7 0 004.855 3.915A2.75 2.75 0 017.75 20H7v2.5h10V20h-.75a2.75 2.75 0 01-2.75-2.665 7 7 0 004.85-3.915A5 5 0 0022.5 8.5V3H19zM3 8.5v-4h2v6c.003.406.04.81.11 1.21A3.5 3.5 0 013 8.5zm11.08 3.405L12 10.615l-2.08 1.29.58-2.38-1.87-1.58 2.44-.18L12 5.5l.925 2.265 2.44.18-1.865 1.58.58 2.38zM21 8.5a3.5 3.5 0 01-2.11 3.21c.07-.4.107-.804.11-1.21v-6h2v4z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19 1.5V3h3.5v5.5c0 2.45-1.8 4.5-4.15 4.9-.9 1.95-2.7 3.45-4.85 3.9a2.756 2.756 0 002.578 2.645l.172.005H17v2.5H7v-2.5h.75c1.5 0 2.7-1.15 2.75-2.65-2.15-.45-3.95-1.95-4.85-3.9-2.277-.388-4.037-2.323-4.145-4.672L1.5 8.5V3H5V1.5h14zM17.5 3h-11v7.5c0 3.05 2.45 5.5 5.5 5.5a5.483 5.483 0 005.496-5.278l.004-.222V3zM12 5.5l.9 2.25 2.45.2-1.85 1.6.6 2.35-2.1-1.3-2.1 1.3.6-2.35-1.85-1.6 2.45-.2.9-2.25zm-7-1v6l.009.3c.016.3.053.6.091.9C3.85 11.15 3 9.95 3 8.5v-4h2zm16 0v4l-.006.216c-.08 1.352-.907 2.462-2.094 2.984.05-.4.1-.8.1-1.2v-6h2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentAchievement.style = iconCss;




/***/ })

};
;