"use strict";
exports.id = 5562;
exports.ids = [5562];
exports.modules = {

/***/ 55562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_attachment: () => (/* binding */ UserFileAttachment)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileAttachment = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M7 23a6.24 6.24 0 01-4.435-10.64l11.5-11.5a1 1 0 011.4 1.4l-11.5 11.5A4.264 4.264 0 0010 19.785L20.77 9a2.507 2.507 0 10-3.545-3.545L6.44 16.235A.76.76 0 107.5 17.31l7.97-7.955a1 1 0 111.4 1.4L8.915 18.71a2.74 2.74 0 11-3.875-3.875L15.82 4.05a4.5 4.5 0 116.355 6.355L11.39 21.185A6.2 6.2 0 017 23z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M7 22.75c-1.55 0-3.05-.6-4.25-1.75a6.005 6.005 0 010-8.5L14.25 1c.3-.3.75-.3 1.05 0 .3.3.3.75 0 1.05L3.8 13.55a4.496 4.496 0 000 6.35 4.496 4.496 0 006.35 0l10.8-10.8c1.05-1.05 1.05-2.8 0-3.9-.5-.5-1.2-.8-1.95-.8s-1.4.3-1.95.8L6.25 16.05c-.15.2-.25.45-.25.7 0 .25.1.5.3.7.4.4 1.05.4 1.4 0l7.95-7.95c.3-.3.75-.3 1.05 0 .3.3.3.75 0 1.05l-7.95 8c-.45.45-1.1.75-1.75.75-.65 0-1.3-.25-1.75-.75-.5-.5-.75-1.1-.75-1.8s.25-1.25.7-1.75L16 4.2a4.255 4.255 0 016 0 4.255 4.255 0 010 6L11.2 21c-1.15 1.2-2.7 1.75-4.2 1.75z", id: "a" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("use", { xlinkHref: "#a", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileAttachment.style = iconCss;




/***/ })

};
;