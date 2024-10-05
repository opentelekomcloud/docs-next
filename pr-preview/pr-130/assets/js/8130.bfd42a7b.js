"use strict";
exports.id = 8130;
exports.ids = [8130];
exports.modules = {

/***/ 8130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_alert_antivirus_protection: () => (/* binding */ AlertAntivirusProtection)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertAntivirusProtection = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 .98l9.5 2.172v7.998c0 5.587-3.684 10.572-8.997 12.233l-.297.089-.206.058-.206-.058c-5.373-1.537-9.155-6.448-9.29-12.013l-.004-.31V3.153L12 .98zm4.176 7.47c-2.311 1.916-5.76 1.972-8.138.17l-.213-.17-.638.772a7.34 7.34 0 002.004 1.175l.309.114v.989H7v1h2.5v1l.012.115a7.4 7.4 0 00-2.059 1.082l-.266.21.638.77a6.345 6.345 0 011.933-1.091A2.491 2.491 0 0012 16c.99 0 1.838-.58 2.243-1.414a6.37 6.37 0 011.679.892l.254.2.637-.771a7.321 7.321 0 00-2.325-1.292l.012-.115v-1H17v-1h-2.5v-.99a7.389 7.389 0 002.048-1.08l.265-.208-.637-.771zM12 6.5a1.75 1.75 0 00-1.75 1.75c0 .146.023.287.058.423a5.696 5.696 0 003.385 0c.034-.137.057-.277.057-.423A1.75 1.75 0 0012 6.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 .98l9.5 2.171v7.998c0 5.589-3.684 10.575-8.997 12.234l-.297.088-.206.058-.206-.058c-5.373-1.534-9.154-6.447-9.29-12.012l-.004-.31V3.151L12 .981zm0 1.54L4 4.346v6.802c0 4.954 3.28 9.371 8 10.82 4.627-1.42 7.868-5.69 7.996-10.523l.004-.297V4.347L12 2.52zm4.175 5.93l.638.771a7.37 7.37 0 01-2.313 1.29v.99H17v1h-2.5v1l-.012.113a7.365 7.365 0 012.325 1.293l-.638.771a6.327 6.327 0 00-1.933-1.093A2.492 2.492 0 0112 16c-.99 0-1.838-.58-2.243-1.415a6.35 6.35 0 00-1.933 1.093l-.637-.77a7.35 7.35 0 012.324-1.294l-.01-.114v-1H7v-1h2.5v-.989a7.348 7.348 0 01-2.314-1.29l.637-.77c2.381 1.971 5.97 1.971 8.351 0zM12 6.5c.966 0 1.75.783 1.75 1.75 0 .145-.023.285-.057.421a5.715 5.715 0 01-3.386 0 1.73 1.73 0 01-.057-.42c0-.968.783-1.75 1.75-1.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AlertAntivirusProtection.style = iconCss;




/***/ })

};
;