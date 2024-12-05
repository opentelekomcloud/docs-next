"use strict";
exports.id = 5442;
exports.ids = [5442];
exports.modules = {

/***/ 25442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_shopping_cart: () => (/* binding */ ActionShoppingCart)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionShoppingCart = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.5 20a2 2 0 110 4 2 2 0 010-4zm15 0a2 2 0 110 4 2 2 0 010-4zM.06.455A.755.755 0 01.949.027l.096.033 2.27.975a2.984 2.984 0 011.42 1.275l.1.19h18.24l-.895 9.41a2.986 2.986 0 01-2.612 2.693l-.183.017-13.145.85.065.67c.07.727.637 1.286 1.35 1.353l.145.007h13.45a.749.749 0 01.102 1.493L21.25 19H7.8a2.98 2.98 0 01-2.964-2.538l-.021-.177L3.63 3.655a1.51 1.51 0 00-.771-1.175l-.134-.065-2.27-.975A.75.75 0 01.06.455z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.5 20a2 2 0 110 4 2 2 0 010-4zm15 0a2 2 0 110 4 2 2 0 010-4zM.06.455A.755.755 0 01.949.027l.096.033 2.27.975a2.984 2.984 0 011.42 1.275l.1.19h18.24l-.895 9.41a2.986 2.986 0 01-2.612 2.693l-.183.017-13.145.85.065.67c.07.727.637 1.286 1.35 1.353l.145.007h13.45a.749.749 0 01.102 1.493L21.25 19H7.8a2.98 2.98 0 01-2.964-2.538l-.021-.177L3.63 3.655a1.51 1.51 0 00-.771-1.175l-.134-.065-2.27-.975A.75.75 0 01.06.455zM21.43 4H5.17l.935 9.975 13.185-.85a1.495 1.495 0 001.376-1.22l.019-.135L21.43 4z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionShoppingCart.style = iconCss;




/***/ })

};
;