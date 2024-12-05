"use strict";
exports.id = 8461;
exports.ids = [8461];
exports.modules = {

/***/ 78461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_birthday: () => (/* binding */ ContentBirthday)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentBirthday = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.978 4.394c.45-.45.534-1.149.204-1.694L12 .75 10.818 2.7a1.383 1.383 0 002.16 1.694m5.25 0c.45-.45.534-1.149.204-1.694L17.25.75 16.068 2.7a1.383 1.383 0 002.16 1.694m-10.501 0c.45-.45.534-1.149.205-1.693L6.75.75 5.569 2.7a1.382 1.382 0 002.159 1.694m10.798 13.522a5.552 5.552 0 01-3.262-1.044A5.555 5.555 0 0112 17.916a5.552 5.552 0 01-3.262-1.044 5.555 5.555 0 01-3.263 1.044A5.567 5.567 0 012 16.704V22.5h20v-5.794a5.575 5.575 0 01-3.475 1.21m-13.049-1.5a3.938 3.938 0 002.715-1.067l.547-.515.548.515a3.938 3.938 0 002.715 1.067 3.94 3.94 0 002.715-1.067l.547-.515.548.515a3.938 3.938 0 002.715 1.067c1.481 0 2.824-.819 3.474-2.091V12.5a3 3 0 00-3-3h-1V6h-1.5v3.5h-3.75V6h-1.5v3.5H7.5V6H6v3.5H5a3 3 0 00-3 3v1.823c.65 1.273 1.993 2.093 3.476 2.093", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18.228 4.394c.45-.45.535-1.15.204-1.694L17.251.75 16.068 2.7a1.383 1.383 0 002.16 1.694zm-12.455 0a1.38 1.38 0 002.159-1.693L6.751.75 5.568 2.7a1.383 1.383 0 00.205 1.694zm7.205 0c.45-.45.535-1.15.204-1.694L12.001.75 10.818 2.7a1.383 1.383 0 002.16 1.694zm7.523 11.264a3.702 3.702 0 01-4.843-.308l-.525-.515-.525.515A3.706 3.706 0 0112 16.417c-.98 0-1.906-.379-2.607-1.067l-.526-.516-.525.516a3.702 3.702 0 01-4.843.308V12.5c0-.827.674-1.5 1.5-1.5h14c.827 0 1.5.673 1.5 1.5v3.158h.002zm0 5.342h-17v-3.594a5.192 5.192 0 005.368-.533 5.185 5.185 0 003.132 1.044 5.192 5.192 0 003.133-1.044 5.187 5.187 0 005.367.533V21zm-1.5-11.5h-1V6h-1.5v3.5h-3.75V6h-1.5v3.5h-3.75V6h-1.5v3.5h-1a3 3 0 00-3 3v10h20v-10a3 3 0 00-3-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentBirthday.style = iconCss;




/***/ })

};
;