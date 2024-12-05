"use strict";
exports.id = 6745;
exports.ids = [6745];
exports.modules = {

/***/ 46745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_loyalty_earned: () => (/* binding */ CommunicationLoyaltyEarned)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationLoyaltyEarned = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M16.92 11.992c-.058.08-.108.164-.173.24l-4.251 4.972c-.375.439-.921.69-1.501.69a1.965 1.965 0 01-1.497-.69l-4.252-4.972a3.81 3.81 0 01-.254-4.61 3.797 3.797 0 013.14-1.664c1.487 0 2.419.843 2.52.939l.345.325.343-.325c.102-.096 1.035-.94 2.52-.94 1.21 0 2.338.58 3.054 1.552a2.248 2.248 0 00-2.163 2.24c0 1.214.966 2.199 2.169 2.243M23 10.5h-2.25v2.25a.75.75 0 11-1.5 0V10.5H17A.75.75 0 1117 9h2.25V6.75a.75.75 0 011.5 0V9H23a.75.75 0 010 1.5M1 4h1.5v1.5a.75.75 0 101.5 0V4h1.5a.75.75 0 100-1.5H4V1a.75.75 0 00-1.5 0v1.5H1A.75.75 0 001 4m6.5 14.5H5V16a.75.75 0 00-1.5 0v2.5H1A.75.75 0 001 20h2.5v2.5a.75.75 0 101.5 0V20h2.5a.75.75 0 100-1.5", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M15.917 11.71l-4.178 4.886a.967.967 0 01-1.476 0l-4.251-4.97a2.802 2.802 0 01-.187-3.399A2.77 2.77 0 018.138 7c.331 0 .663.058.978.172 1.143.42 1.459 1.23 1.885 2.074.406-.805.708-1.59 1.778-2.032A2.848 2.848 0 0113.864 7a2.77 2.77 0 011.98.828A2.237 2.237 0 0117 7.5h.483c-.024-.038-.041-.08-.066-.117A4.294 4.294 0 0013.864 5.5c-.573 0-1.131.11-1.658.328a4.161 4.161 0 00-1.204.748 4.116 4.116 0 00-1.371-.812A4.332 4.332 0 008.138 5.5a4.294 4.294 0 00-3.554 1.883 4.312 4.312 0 00.288 5.216l4.25 4.973a2.47 2.47 0 003.756 0l4.25-4.973c.163-.19.305-.39.429-.599H17c-.395 0-.761-.112-1.084-.29M23 9h-2.25V6.75a.75.75 0 10-1.5 0V9H17a.75.75 0 100 1.5h2.25v2.25a.75.75 0 001.5 0V10.5H23A.75.75 0 0023 9M1 4h1.5v1.5a.75.75 0 001.5 0V4h1.5a.75.75 0 000-1.5H4V1a.75.75 0 10-1.5 0v1.5H1A.75.75 0 101 4m6.5 14.5H5V16a.75.75 0 10-1.5 0v2.5H1A.75.75 0 001 20h2.5v2.5a.75.75 0 101.5 0V20h2.5a.75.75 0 100-1.5", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationLoyaltyEarned.style = iconCss;




/***/ })

};
;