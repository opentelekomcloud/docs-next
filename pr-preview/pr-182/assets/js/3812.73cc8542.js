"use strict";
exports.id = 3812;
exports.ids = [3812];
exports.modules = {

/***/ 33812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_t_product_seamless_connectivity: () => (/* binding */ TProductSeamlessConnectivity)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProductSeamlessConnectivity = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21.005 5.102a4.195 4.195 0 00-4.651.922l-.927.926-8.64 8.64-.921.922a2.227 2.227 0 01-3.807-1.574V9.043a2.203 2.203 0 011.378-2.059c.277-.114.574-.173.873-.173.586 0 1.148.237 1.556.658l3.724 3.725 1.44-1.44-3.724-3.725a4.205 4.205 0 00-4.656-.922A4.196 4.196 0 000 9.043v5.914a4.21 4.21 0 002.635 3.945 4.214 4.214 0 004.656-.926l.922-.926 8.64-8.64.921-.922A2.227 2.227 0 0121.6 9.043v5.914a2.227 2.227 0 01-3.806 1.574l-3.725-3.725-1.44 1.44 3.73 3.73a4.214 4.214 0 002.99 1.262 4.32 4.32 0 001.66-.336 4.21 4.21 0 002.636-3.945V9.043a4.195 4.195 0 00-2.64-3.94z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21.45 5.1c-1.6-.65-3.3-.3-4.5.9L6 16.95c-.9.9-2.1.9-2.85.55-.8-.3-1.65-1.1-1.65-2.4V8.9c0-1.3.85-2.1 1.65-2.45.9-.4 2.05-.25 2.85.55l3.9 3.9 1.05-1.05L7.05 6c-1.2-1.2-2.95-1.55-4.5-.9C1 5.75 0 7.2 0 8.9v6.15c0 1.7 1 3.15 2.55 3.8 1.55.65 3.3.3 4.5-.9L18 7.05c.9-.9 2.1-.9 2.85-.55.8.35 1.65 1.15 1.65 2.45v6.15c0 1.3-.85 2.1-1.65 2.45-.8.35-1.95.35-2.85-.55l-3.9-3.9-1.05 1.05 3.9 3.9c1.2 1.2 2.95 1.55 4.5.9C23 18.3 24 16.85 24 15.15V8.9c0-1.7-1-3.15-2.55-3.8z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TProductSeamlessConnectivity.style = iconCss;




/***/ })

};
;