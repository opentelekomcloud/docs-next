"use strict";
exports.id = 5821;
exports.ids = [5821];
exports.modules = {

/***/ 65821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_navigation_map: () => (/* binding */ NavigationMap)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const NavigationMap = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.345 12L9.6 17.615a2.77 2.77 0 004.696.167l.104-.167L17.66 12H21l1.84 6.14a3 3 0 01-2.668 3.853L19.97 22H4.03a3 3 0 01-2.921-3.665l.051-.195L3 12h3.345zM12 1c1.481 0 2.906.554 3.995 1.548l.2.192.18.187a5.925 5.925 0 01.885 6.756l-.125.227-4.03 6.955c-.287.496-.87.74-1.425.595l-.138-.045-.132-.06-.075-.045-.09-.064-.155-.131a1.395 1.395 0 01-.136-.162l-.059-.088-4.03-6.955a5.925 5.925 0 01.76-6.983l.18-.187.2-.192A5.925 5.925 0 0112 1zm0 3.6a2.185 2.185 0 100 4.37 2.185 2.185 0 000-4.37z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.342 12l.87 1.5H4.116l-1.521 5.069c-.138.459-.053.943.233 1.326.255.342.63.554 1.046.597l.158.008h15.936c.479 0 .918-.22 1.203-.605.254-.341.35-.761.27-1.172l-.037-.154-1.52-5.069h-3.096l.87-1.5H21l1.841 6.138a3 3 0 01-2.697 3.857l-.176.005H4.032a3 3 0 01-2.92-3.692l.046-.17L3 12h3.342zm1.647-9.44a5.936 5.936 0 018.022 0l.186.178.179.187a5.936 5.936 0 01.883 6.76l-.125.227-4.031 6.952c-.468.808-1.6.846-2.131.116l-.075-.116-4.032-6.952a5.935 5.935 0 01.759-6.987l.179-.187.186-.178zM12 4.6a2.186 2.186 0 10.001 4.373A2.186 2.186 0 0012 4.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
NavigationMap.style = iconCss;




/***/ })

};
;