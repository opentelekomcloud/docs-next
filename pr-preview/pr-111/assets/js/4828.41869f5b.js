"use strict";
exports.id = 4828;
exports.ids = [4828];
exports.modules = {

/***/ 54828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_shop: () => (/* binding */ ContentShop)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentShop = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1a4.48 4.48 0 014.495 4.287l.005.213V7h4.45l.9 12.8c.05.8-.25 1.65-.8 2.25-.504.55-1.218.89-1.989.943L18.85 23H5.15c-.85 0-1.65-.35-2.2-.95a3.049 3.049 0 01-.805-2.039l.005-.211.9-12.8H7.5V5.5C7.5 3 9.5 1 12 1zM8.25 9.75a1 1 0 110 2 1 1 0 010-2zm7.5 0a1 1 0 110 2 1 1 0 010-2zM12 2.5a3.01 3.01 0 00-2.995 2.824L9 5.5V7h6V5.5c0-1.65-1.35-3-3-3z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1a4.48 4.48 0 014.495 4.287l.005.213V7h4.45l.9 12.8c.05.8-.25 1.65-.8 2.25-.504.55-1.218.89-1.989.943L18.85 23H5.15c-.85 0-1.65-.35-2.2-.95a3.049 3.049 0 01-.805-2.039l.005-.211.9-12.8H7.5V5.5C7.5 3 9.5 1 12 1zm7.55 7.5H4.45l-.8 11.35c-.05.45.1.8.4 1.15.262.306.602.46.95.493l.15.007h13.7c.4 0 .8-.2 1.1-.5.214-.257.355-.588.391-.929l.009-.171-.8-11.4zM8.25 9.75a1 1 0 110 2 1 1 0 010-2zm7.5 0a1 1 0 110 2 1 1 0 010-2zM12 2.5a3.01 3.01 0 00-2.995 2.824L9 5.5V7h6V5.5c0-1.65-1.35-3-3-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentShop.style = iconCss;




/***/ })

};
;