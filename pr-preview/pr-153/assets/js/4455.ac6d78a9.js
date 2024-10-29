"use strict";
exports.id = 4455;
exports.ids = [4455];
exports.modules = {

/***/ 74455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_families: () => (/* binding */ UserFileFamilies)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileFamilies = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.25 16.5l2.85 2.75 2.75-2.75h1.6c1.883 0 3.532 1.305 3.914 3.15l.036.2.1.65H6.6l.1-.65c.29-1.883 1.884-3.253 3.75-3.345l.2-.005h1.6zm-5.4 0c-.375.375-.68.785-.946 1.23L5.75 18H4.5c-.897 0-1.66.58-1.87 1.445l-.03.155-.15.9H.95l.2-1.15c.24-1.589 1.594-2.76 3.168-2.845L4.5 16.5h2.35zm8.2-11.75C18 4.75 20.1 6.9 20.1 9.8c0 2.8-2.05 5.85-5.05 5.85C12 15.65 10 12.6 10 9.8c0-2.95 2.1-5.05 5.05-5.05zm-7 1.15c.55 0 1.05.1 1.5.25-.25.4-.5.85-.65 1.35-.25-.05-.55-.1-.85-.1-1.7 0-2.85 1.2-2.85 2.85 0 1.7 1.15 3.5 2.85 3.5.5 0 .9-.15 1.3-.4.25.45.5.85.8 1.25-.6.4-1.3.65-2.1.65-2.6 0-4.35-2.6-4.35-5 0-2.5 1.9-4.35 4.35-4.35z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.25 16.5l2.85 2.75 2.75-2.75h1.6c1.883 0 3.532 1.305 3.914 3.15l.036.2.1.65H6.6l.1-.65c.29-1.883 1.884-3.253 3.75-3.345l.2-.005h1.6zm-5.4 0c-.375.375-.68.785-.946 1.23L5.75 18H4.5c-.897 0-1.66.58-1.87 1.445l-.03.155-.15.9H.95l.2-1.15c.24-1.589 1.594-2.76 3.168-2.845L4.5 16.5h2.35zm8.2-11.75C18 4.75 20.1 6.9 20.1 9.8c0 2.8-2.05 5.85-5.05 5.85C12 15.65 10 12.6 10 9.8c0-2.95 2.1-5.05 5.05-5.05zm-7 1.15c.55 0 1.05.1 1.5.25-.25.4-.5.85-.65 1.35-.25-.05-.55-.1-.85-.1-1.7 0-2.85 1.2-2.85 2.85 0 1.7 1.15 3.5 2.85 3.5.5 0 .9-.15 1.3-.4.25.45.5.85.8 1.25-.6.4-1.3.65-2.1.65-2.6 0-4.35-2.6-4.35-5 0-2.5 1.9-4.35 4.35-4.35zm7 .35c-2.1 0-3.55 1.45-3.55 3.55 0 2.1 1.45 4.35 3.55 4.35 2.15 0 3.55-2.25 3.55-4.35 0-2.1-1.45-3.55-3.55-3.55z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileFamilies.style = iconCss;




/***/ })

};
;