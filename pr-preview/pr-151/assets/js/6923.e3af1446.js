"use strict";
exports.id = 6923;
exports.ids = [6923];
exports.modules = {

/***/ 99304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_t_product_2fa_telekom_app: () => (/* binding */ TProduct2FaTelekomApp)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProduct2FaTelekomApp = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M15.115 7.5v2.556h-.447v-.075c0-1.203-.671-1.955-1.94-1.955h-.074v5.414c0 .751.298 1.052 1.044 1.052h.224v.527h-3.879v-.527h.224c.746 0 1.044-.3 1.044-1.052V8.026h-.074c-1.268 0-1.94.752-1.94 1.955v.075H8.85V7.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67zM12.002 21a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-2-17.5h4V2h-4v1.5zm6-3h-8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 18.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.115-11v2.556h-.447v-.075c0-1.146-.609-1.882-1.762-1.95l-.177-.005h-.075v5.414c0 .705.262 1.013.91 1.049l.134.003h.224v.527h-3.879v-.527h.224c.7 0 1.005-.264 1.04-.917l.004-.135V8.026h-.074c-1.208 0-1.874.682-1.935 1.786l-.004.17v.074H8.85V7.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67zM17.5 20.5c0 .827-.674 1.5-1.5 1.5H8c-.827 0-1.5-.673-1.5-1.5v-17C6.5 2.673 7.172 2 8 2h2v1.5h4V2h2c.826 0 1.5.673 1.5 1.5v17zM16 .5H8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TProduct2FaTelekomApp.style = iconCss;




/***/ })

};
;