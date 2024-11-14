"use strict";
exports.id = 5301;
exports.ids = [5301];
exports.modules = {

/***/ 15301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_interview: () => (/* binding */ ContentInterview)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentInterview = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8 12l1.08 1.055-4.825 5.155a1.085 1.085 0 001.44 1.62l.095-.085 5.15-4.805L12 16l-5.185 4.84a2.57 2.57 0 01-1.765.695 2.59 2.59 0 01-1.02-.222l-.19-.093-2.135 2.135-1.06-1.06 2.135-2.11a2.575 2.575 0 01.252-2.853l.128-.147L8 12zm4.915-8L20 11.085l-5.745 5.73-7.07-7.07L12.915 4zm.635 5.39l-1.08 1.08 1.06 1.06 1.08-1.08-1.06-1.06zm3.968-7.765a4 4 0 013.807 1.05 4 4 0 01-1.449 6.61l-.211.07-5-5a4 4 0 012.853-2.73z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18.5 1.5a4.002 4.002 0 012.825 6.83 3.985 3.985 0 01-2.59 1.163L18.5 9.5h-.105l1.59 1.59-5.73 5.73-1.52-1.52-5.925 5.54a2.569 2.569 0 01-1.765.695c-.35 0-.693-.08-1.018-.222l-.192-.093L1.7 23.355l-1.06-1.06 2.135-2.135a2.578 2.578 0 01.255-2.826l.13-.149 5.545-5.92-1.52-1.52 5.73-5.735 1.59 1.59a3.97 3.97 0 011.165-2.93A3.998 3.998 0 0118.5 1.5zM9.765 12.325L4.26 18.21c-.4.43-.39 1.095.025 1.51a1.074 1.074 0 001.4.113l.105-.088 5.89-5.505-1.915-1.915zm3.15-6.19l-3.61 3.61 4.95 4.95 3.61-3.61-4.95-4.95zm.635 2.195l2.12 2.12-1.06 1.06-.53-.53-1.06 1.065-1.065-1.065 1.065-1.06-.535-.53 1.065-1.06z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentInterview.style = iconCss;




/***/ })

};
;