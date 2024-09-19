"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 50274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_alert_compliance: () => (/* binding */ AlertCompliance)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertCompliance = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.97 14H8a.75.75 0 110-1.5h4.06a7.865 7.865 0 011.89-1.5H8a.75.75 0 110-1.5h8a.74.74 0 01.725.575A7.535 7.535 0 0121 10.72V1H3v19a3 3 0 003 3h6.06a7.725 7.725 0 01-1.09-9zM8 6.5h8A.75.75 0 1116 8H8a.75.75 0 010-1.5zm12.895 9.035a.745.745 0 00-1.06 0L17 18.355l-1.41-1.41A.75.75 0 0014.545 18L17 20.5l3.88-3.88a.755.755 0 00.015-1.085zM17.75 11.5a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zm0 11a4.75 4.75 0 110-9.5 4.75 4.75 0 010 9.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.75 11.5c3.45 0 6.25 2.8 6.25 6.25S21.2 24 17.75 24s-6.25-2.8-6.25-6.25 2.8-6.25 6.25-6.25zM21 1v9.72a7.65 7.65 0 00-1.188-.436l-.312-.079V2.5h-15V20c0 .776.598 1.42 1.356 1.493L6 21.5h4.97c.24.436.525.843.844 1.222l.246.278H6a3.003 3.003 0 01-2.995-2.824L3 20V1h18zm-.105 14.535a.744.744 0 00-.975-.073l-.085.073-2.82 2.82-1.41-1.41a.745.745 0 00-1.06 0 .744.744 0 00-.073.975l.073.085 2.47 2.47 3.88-3.88a.754.754 0 000-1.06zM12.06 12.5c-.336.364-.64.757-.902 1.178L10.97 14H8a.749.749 0 01-.102-1.493L8 12.5h4.06zm3.94-3a.74.74 0 01.725.575 7.655 7.655 0 00-2.491.772L13.95 11H8a.749.749 0 01-.102-1.493L8 9.5h8zm0-3a.749.749 0 01.102 1.493L16 8H8a.749.749 0 01-.102-1.493L8 6.5h8z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AlertCompliance.style = iconCss;




/***/ })

};
;