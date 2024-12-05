"use strict";
exports.id = 1270;
exports.ids = [1270];
exports.modules = {

/***/ 21270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_file_collection: () => (/* binding */ UserFileFileCollection)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileFileCollection = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M15.55.46V4a2.33 2.33 0 002.145 2.328l.185.007h3.62v8.875a2.245 2.245 0 01-2.052 2.242l-.198.008h-.75v.79a2.245 2.245 0 01-2.052 2.242l-.198.008h-.75v.75a2.245 2.245 0 01-2.052 2.242l-.198.008h-9a2.245 2.245 0 01-2.242-2.052L2 21.25V6.5h3v-3h3V.46h7.55zM5 8H3.5v13.25c0 .38.282.693.648.743L4.25 22h9a.75.75 0 00.743-.648L14 21.25v-.75H7.25a2.245 2.245 0 01-2.242-2.052L5 18.25V8zm3-3H6.5v13.25c0 .38.282.693.648.743L7.25 19h9a.75.75 0 00.743-.648L17 18.25v-.79h-6.75a2.245 2.245 0 01-2.242-2.052L8 15.21V5zM16.625.46L21.5 5.335h-3.545a1.33 1.33 0 01-1.322-1.185L16.625 4V.46z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.75.5H8v3H5v3H2v14.75a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-.75h.75a2.25 2.25 0 002.25-2.25v-.75h.75a2.25 2.25 0 002.25-2.25V4.363L17.75.5zM14 21.25a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V8H5v10.25a2.25 2.25 0 002.25 2.25H14v.75zm3-3a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V5H8v10.25a2.25 2.25 0 002.25 2.25H17v.75zM19.25 16h-9a.75.75 0 01-.75-.75V2H16v2.17c0 .734.595 1.33 1.33 1.33H20v9.75a.75.75 0 01-.75.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileFileCollection.style = iconCss;




/***/ })

};
;