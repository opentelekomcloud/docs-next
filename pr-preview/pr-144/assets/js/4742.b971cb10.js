"use strict";
exports.id = 4742;
exports.ids = [4742];
exports.modules = {

/***/ 94742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_language: () => (/* binding */ ContentLanguage)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentLanguage = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M1.5 1.5v15a3 3 0 003 3H6v2.275A1.755 1.755 0 009 23l3.5-3.5h7a3 3 0 003-3v-15h-21zM12 5c.795 0 2 2 2.095 5h-4.19c.12-3 1.3-5 2.095-5zm-1.89.34A9.81 9.81 0 008.905 10h-2.38a5.5 5.5 0 013.585-4.66zM6.525 11h2.38a9.81 9.81 0 001.205 4.66A5.5 5.5 0 016.525 11zM12 16c-.795 0-1.975-1.975-2.095-5h4.19c-.095 3.025-1.3 5-2.095 5zm1.89-.34A9.81 9.81 0 0015.095 11H17.5a5.5 5.5 0 01-3.61 4.66zM15.095 10a9.81 9.81 0 00-1.205-4.66A5.5 5.5 0 0117.5 10h-2.405z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.5 1.5v15a3 3 0 01-2.824 2.995l-.176.005h-7l-3.513 3.512a1.715 1.715 0 01-1.225.517c-.854 0-1.676-.63-1.756-1.598L6 21.775V19.5H4.5a3 3 0 01-2.995-2.824L1.5 16.5v-15h21zM21 3H3v13.5c0 .778.596 1.42 1.356 1.493L4.5 18h3v3.775c0 .184.205.32.373.22l.053-.043L11.88 18h7.62c.778 0 1.42-.596 1.493-1.356L21 16.5V3zm-6.903 8c-.12 3.024-1.3 5-2.097 5-.77 0-1.901-1.85-2.082-4.71L9.903 11h4.194zm3.378 0a5.497 5.497 0 01-3.587 4.66c.638-1.025 1.081-2.556 1.191-4.307l.018-.353h2.378zm-8.572 0c.07 1.898.528 3.568 1.209 4.66a5.501 5.501 0 01-3.56-4.422L6.525 11h2.378zM12 5c.77 0 1.901 1.85 2.082 4.71l.015.29H9.903c.12-3.025 1.3-5 2.097-5zm1.888.34a5.5 5.5 0 013.56 4.422l.027.238h-2.379c-.069-1.898-.527-3.568-1.208-4.66zm-3.776 0c-.638 1.025-1.081 2.556-1.191 4.307L8.903 10H6.525a5.497 5.497 0 013.587-4.66z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentLanguage.style = iconCss;




/***/ })

};
;