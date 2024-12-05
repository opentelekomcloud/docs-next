"use strict";
exports.id = 9666;
exports.ids = [9666];
exports.modules = {

/***/ 29666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_bussines_users: () => (/* binding */ UserFileBussinesUsers)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileBussinesUsers = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.285 15.695a.884.884 0 011.354-.09l.076.09.975 1.345a2.42 2.42 0 01-.814.737l-.151.073.545 1.81 2.875-4.16h1.215a4.737 4.737 0 014.643 3.75l.042.22.17 1.03H1.78l.175-1.03a4.737 4.737 0 014.46-3.965l.225-.005h1.215l2.875 4.16.545-1.81a2.308 2.308 0 01-.842-.652l-.123-.158.975-1.345zM12 1c3.475 0 6 2.525 6 6 0 3.38-2.41 7-6 7s-6-3.62-6-7c0-3.475 2.525-6 6-6z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.285 15.695a.884.884 0 011.354-.09l.076.09.975 1.345a2.42 2.42 0 01-.814.737l-.151.073.545 1.81 2.875-4.16h1.215a4.737 4.737 0 014.643 3.75l.042.22.17 1.03H1.78l.175-1.03a4.737 4.737 0 014.46-3.965l.225-.005h1.215l2.875 4.16.545-1.81a2.308 2.308 0 01-.842-.652l-.123-.158.975-1.345zM12 1c3.475 0 6 2.525 6 6 0 3.38-2.41 7-6 7s-6-3.62-6-7c0-3.475 2.525-6 6-6zm0 1.5C9.395 2.5 7.5 4.395 7.5 7c0 2.655 1.81 5.5 4.5 5.5s4.5-2.845 4.5-5.5c0-2.605-1.895-4.5-4.5-4.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileBussinesUsers.style = iconCss;




/***/ })

};
;