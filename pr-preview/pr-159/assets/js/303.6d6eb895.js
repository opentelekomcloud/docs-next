"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 70303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_prepaid_activate: () => (/* binding */ ContentPrepaidActivate)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentPrepaidActivate = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.5 11a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zM19 0v9.645a8.205 8.205 0 00-1.5-.145 7.94 7.94 0 00-2.57.43 2.5 2.5 0 00-2.257-1.924L12.5 8h-5a2.5 2.5 0 00-2.495 2.336L5 10.5v5a2.5 2.5 0 002.336 2.495L7.5 18h2.025a7.96 7.96 0 001.18 3.723l.18.277H4a3 3 0 01-2.995-2.824L1 19V6.5L7.5 0H19zm.655 15.215a.751.751 0 011.138.976l-.073.084-4 4-2.55-2.545a.751.751 0 01.98-1.133l.085.073 1.5 1.5 2.95-2.95-.03-.005zM12.5 9.5a1 1 0 01.993.883l.007.117v.08a8 8 0 00-3.889 5.635l-.041.285H7.5a1 1 0 01-.993-.883L6.5 15.5v-5a1 1 0 01.883-.993L7.5 9.5h5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.75 11.5c3.45 0 6.25 2.8 6.25 6.25S21.2 24 17.75 24s-6.25-2.8-6.25-6.25 2.8-6.25 6.25-6.25zM19 0v10.1c-.3-.037-.6-.075-.921-.091L17.75 10h-.25V1.5H8.1L2.5 7.1V19c0 .8.576 1.423 1.352 1.493L4 20.5h6.5c.16.44.352.848.576 1.224l.174.276H4a3.01 3.01 0 01-2.995-2.824L1 19V6.5L7.5 0H19zm1.85 15.55a.722.722 0 00-.965-.074l-.085.074-2.8 2.8-1.4-1.4c-.3-.3-.75-.3-1.05 0a.722.722 0 00-.074.965l.074.085L17 20.5l3.9-3.9c.3-.3.25-.75-.05-1.05zM12.5 8a2.473 2.473 0 012.495 2.333L15 10.5l-.324.126a6.996 6.996 0 00-.9.45l-.276.174v-.75c0-.51-.388-.935-.884-.993L12.5 9.5h-5c-.51 0-.935.388-.993.884L6.5 10.5v5c0 .51.388.935.884.993l.116.007h2.6c-.037.3-.075.6-.091.921L10 17.75V18H7.5a2.473 2.473 0 01-2.495-2.333L5 15.5v-5a2.473 2.473 0 012.333-2.495L7.5 8h5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentPrepaidActivate.style = iconCss;




/***/ })

};
;