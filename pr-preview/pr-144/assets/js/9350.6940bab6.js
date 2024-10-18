"use strict";
exports.id = 9350;
exports.ids = [9350];
exports.modules = {

/***/ 89350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_alert_network_disrupted: () => (/* binding */ AlertNetworkDisrupted)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertNetworkDisrupted = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1a2.01 2.01 0 011.664.865l.095.15 5.738 9.939c.757 1.31-.134 2.937-1.61 3.04l-.149.006h-4.987v2.5H22v3.175A1.745 1.745 0 0121.25 24a1.75 1.75 0 01-1.75-1.75c0-.643.35-1.201.867-1.505l.133-.07V19h-7.75v1.675A1.745 1.745 0 0112 24a1.75 1.75 0 01-1.75-1.75c0-.643.35-1.201.867-1.505l.133-.07V19H3.5v1.675A1.745 1.745 0 012.75 24 1.75 1.75 0 011 22.25c0-.643.35-1.201.867-1.505l.133-.07V17.5h9.25V15H6.263c-1.513 0-2.477-1.585-1.83-2.914l.071-.133 5.738-9.938A2.012 2.012 0 0112 1zm0 9.5a.98.98 0 100 1.961.98.98 0 000-1.961zm.75-5h-1.5v4h1.5v-4z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1c.631 0 1.263.288 1.664.865l.095.15 5.738 9.939c.756 1.31-.134 2.937-1.61 3.04l-.149.006H12.75v2.5H22v3.169a1.75 1.75 0 11-1.5 0V19h-7.75v1.669c.55.261.943.801.994 1.437l.006.144a1.75 1.75 0 11-2.5-1.582V19H3.5v1.669a1.75 1.75 0 11-1.5 0V17.5h9.25V15H6.263c-1.514 0-2.478-1.585-1.83-2.914l.07-.133 5.738-9.938A2.012 2.012 0 0112 1zm0 1.5a.514.514 0 00-.398.178l-.062.087-5.737 9.939a.513.513 0 000 .53c.049.085.156.22.353.256l.107.01h11.475a.514.514 0 00.46-.265.514.514 0 00.04-.446l-.04-.085-5.738-9.939A.514.514 0 0012 2.5zm0 8a.98.98 0 110 1.961.98.98 0 010-1.961zm.75-5v4h-1.5v-4h1.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AlertNetworkDisrupted.style = iconCss;




/***/ })

};
;