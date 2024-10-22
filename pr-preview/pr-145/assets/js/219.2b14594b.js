"use strict";
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_alert_security: () => (/* binding */ AlertSecurity)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertSecurity = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1l9.5 2.1v8c0 3.05-1.1 5.95-3 8.2-1.807 2.218-3.884 3.289-5.51 3.877l-.414.144-.39.123L12 23.5l-.267-.07-.23-.067-.412-.133c-.1-.035-.206-.073-.316-.115l-.346-.136A12.802 12.802 0 015.85 19.75a12.774 12.774 0 01-3.344-8.226L2.5 11.15v-8L12 1zm3.3 7.95c.3-.3.75-.3 1.05 0 .273.273.298.67.074.965L16.35 10l-5.05 5.05-3.15-3.15c-.3-.3-.3-.75 0-1.05a.722.722 0 01.965-.074l.085.074 2.15 2.05 3.95-3.95z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1l9.5 2.1v8c0 3.05-1.1 5.95-3 8.2-1.807 2.218-3.884 3.289-5.51 3.877l-.414.144-.39.123L12 23.5l-.267-.07-.23-.067-.412-.133c-.1-.035-.206-.073-.316-.115l-.346-.136A12.802 12.802 0 015.85 19.75a12.774 12.774 0 01-3.344-8.226L2.5 11.15v-8L12 1zm0 1.5L4 4.35v6.8c0 4.95 3.3 9.35 8 10.8 4.606-1.421 7.867-5.675 7.996-10.504L20 11.15v-6.8L12 2.5zm3.3 6.45c.3-.3.75-.3 1.05 0 .273.273.298.67.074.965L16.35 10l-5.05 5.05-3.15-3.15c-.3-.3-.3-.75 0-1.05a.722.722 0 01.965-.074l.085.074 2.15 2.05 3.95-3.95z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AlertSecurity.style = iconCss;




/***/ })

};
;