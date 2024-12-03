"use strict";
exports.id = 6436;
exports.ids = [6436];
exports.modules = {

/***/ 26436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_2fa_google_auth: () => (/* binding */ Content2FaGoogleAuth)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const Content2FaGoogleAuth = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { "fill-rule": "evenodd" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.501 10h1V9h-1v1zm-.5.5h2v-2h-2v2z" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M16 9v1.5h-1.5V12H13v-1.5h1.5V9H13V7.5h3V9zm0 5v1.5h-3V14h1.5v-1.5H16V14zm-3.998 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM8 15.5V14h1.5v-1.5h3V14H11v1.5H8zm0-4h4v-4H8v4zm2-8h4V2h-4v1.5zm6-3H8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z" })))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.001 10.5h2v-2h-2v2zm-1 1h4v-4h-4v4zm3 2.5h1.5v-1.5h-3V14h-1.5v1.5h3V14zm3.5 0h-1.5v1.5h3v-3h-1.5V14zm-1.5-2h1.5v-1.5h-1.5V12zm0-4.5V9h1.5v1.5h1.5v-3h-3zm-3.5 2.5h1V9h-1v1zm2.5 8.5a1.25 1.25 0 10-.002 2.498 1.25 1.25 0 00.002-2.498zm5.5 2c0 .827-.674 1.5-1.5 1.5h-8c-.827 0-1.5-.673-1.5-1.5v-17c0-.827.673-1.5 1.5-1.5h2v1.5h4V2h2c.826 0 1.5.673 1.5 1.5v17zm-1.5-20h-8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Content2FaGoogleAuth.style = iconCss;




/***/ })

};
;