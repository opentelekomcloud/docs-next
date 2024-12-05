"use strict";
exports.id = 4248;
exports.ids = [4248];
exports.modules = {

/***/ 74248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_alert_legal: () => (/* binding */ AlertLegal)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertLegal = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M23.72 14.865L20.525 2H13v-.75a1 1 0 10-2 0V2H3.5L.28 14.865.25 15v.12c0 1.26.965 3.645 4.625 3.645s4.625-2.4 4.625-3.66V15L6.71 3.75H11V19.5H8.5A2.5 2.5 0 006 22h12a2.5 2.5 0 00-2.5-2.5H13V3.75h4.29l-2.76 11.115a1 1 0 00-.03.24c0 1.26.965 3.645 4.625 3.645s4.625-2.385 4.625-3.645a1 1 0 00-.03-.24zM7.445 15h-5.14l2.57-10.345L7.445 15zm9.11 0l2.57-10.345L21.695 15h-5.14z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M23.48 14.925L20.27 2h-7.52v-.75a.749.749 0 10-1.5 0V2H3.73L.52 14.925a.736.736 0 00-.02.18c0 1.175.915 3.395 4.375 3.395s4.375-2.22 4.375-3.395c0-.06-.005-.12-.02-.18L6.39 3.5h4.86v16H8.5c-.345 0-.675.07-.975.195-.6.255-1.075.73-1.33 1.33-.125.3-.195.63-.195.975h12c0-.345-.07-.675-.195-.975a2.508 2.508 0 00-1.33-1.33c-.3-.125-.63-.195-.975-.195h-2.75v-16h4.86l-2.835 11.425a.736.736 0 00-.02.18c0 1.175.915 3.395 4.375 3.395s4.37-2.22 4.37-3.395c0-.06-.005-.12-.02-.18zM4.875 3.62L7.7 15H2.05L4.875 3.62zM16.3 15l2.825-11.38L21.95 15H16.3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AlertLegal.style = iconCss;




/***/ })

};
;