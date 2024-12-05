"use strict";
exports.id = 9094;
exports.ids = [9094];
exports.modules = {

/***/ 19094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_code_scanner: () => (/* binding */ ContentCodeScanner)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentCodeScanner = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2 21.5h9v-9H2v9zM3.5 14h6v6h-6v-6zM5 18.5h3v-3H5v3zM2 11h9V2H2v9zm1.5-7.5h6v6h-6v-6zM5 8h3V5H5v3zm12 11.25v2.25h4.5V17h-2.25v2.25H17zM12.5 2v9h9V2h-9zM20 9.5h-6v-6h6v6zM18.5 5h-3v3h3V5zM17 12.5h-2.25v2.25H12.5V17h2.25v2.25H17V17h2.25v-2.25H17V12.5zm-4.5 9h2.25v-2.25H12.5v2.25zm6.75-6.75h2.25V12.5h-2.25v2.25z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2 21.5h9v-9H2v9zM3.5 14h6v6h-6v-6zM5 18.5h3v-3H5v3zM2 11h9V2H2v9zm1.5-7.5h6v6h-6v-6zM5 8h3V5H5v3zm12 11.25v2.25h4.5V17h-2.25v2.25H17zM12.5 2v9h9V2h-9zM20 9.5h-6v-6h6v6zM18.5 5h-3v3h3V5zM17 12.5h-2.25v2.25H12.5V17h2.25v2.25H17V17h2.25v-2.25H17V12.5zm-4.5 9h2.25v-2.25H12.5v2.25zm6.75-6.75h2.25V12.5h-2.25v2.25z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentCodeScanner.style = iconCss;




/***/ })

};
;