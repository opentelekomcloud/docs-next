"use strict";
exports.id = 6053;
exports.ids = [6053];
exports.modules = {

/***/ 6053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_loop: () => (/* binding */ ActionLoop)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionLoop = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.265 6.612h5.211v2.302l5.388-3.526-5.388-3.527v2.302H8.285A7.998 7.998 0 00.28 11.29a7.807 7.807 0 001.582 5.451 1.22 1.22 0 001.66.28c.269-.188.446-.48.49-.804a1.234 1.234 0 00-.24-.98A5.358 5.358 0 012.702 12a5.554 5.554 0 015.564-5.388zm13.886.647a1.224 1.224 0 00-1.656-.27 1.176 1.176 0 00-.49.804 1.24 1.24 0 00.24.98A5.358 5.358 0 0121.313 12a5.554 5.554 0 01-5.564 5.388h-5.211v-2.302L5.15 18.612l5.388 3.527v-2.302h5.191a7.998 7.998 0 008.004-7.127 7.807 7.807 0 00-1.583-5.45z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M20.945 7.3a.747.747 0 011.015.165 7.442 7.442 0 011.51 5.215c-.343 3.817-3.611 6.695-7.42 6.816l-.25.004h-5.3v2.85L5 18.75l5.5-3.6V18h5.32c3.295 0 6.175-2.695 6.18-5.99 0-1.36-.45-2.62-1.215-3.625-.265-.35-.2-.84.16-1.085zM13.5 1.65l5.5 3.6-5.5 3.6V6H8.18C4.885 6 2.005 8.695 2 11.99c0 1.36.45 2.62 1.215 3.625.265.35.2.84-.16 1.085a.747.747 0 01-1.015-.165A7.45 7.45 0 01.53 11.32c.343-3.817 3.611-6.695 7.42-6.816L8.2 4.5h5.3V1.65z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionLoop.style = iconCss;




/***/ })

};
;