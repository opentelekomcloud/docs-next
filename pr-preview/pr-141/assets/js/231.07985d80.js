"use strict";
exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 60231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_alert_unknown: () => (/* binding */ AlertUnknown)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertUnknown = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2 2v17a3 3 0 003 3h14a3 3 0 003-3V2H2zm10 15.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1.75-5.5c-.5.43-.935.835-.935 1.46v.33H11.07v-.6c0-1.03.61-1.525 1.205-2 .5-.395.945-.77.945-1.395A1.045 1.045 0 0012.1 8.66a1.145 1.145 0 00-1.165 1.16H9.12a2.84 2.84 0 013-2.8c1.695 0 2.925 1.125 2.925 2.67-.02 1.17-.695 1.775-1.295 2.31z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22 2v17a3 3 0 01-2.824 2.995L19 22H5a3 3 0 01-2.995-2.824L2 19V2h20zm-1.5 1.5h-17V19c0 .778.596 1.42 1.356 1.493L5 20.5h14c.778 0 1.42-.596 1.493-1.356L20.5 19V3.5zM12 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm.1-7.98c1.696 0 2.927 1.123 2.927 2.67 0 1.023-.519 1.616-1.049 2.108l-.462.42c-.346.323-.636.654-.69 1.095l-.01.151v.332H11.07v-.602c0-.823.392-1.305.852-1.711l.234-.198.357-.294c.388-.33.707-.675.707-1.196 0-.699-.428-1.134-1.118-1.134-.612 0-1.02.367-1.146 1.015l-.023.143H9.12c.084-1.412 1.026-2.799 2.98-2.799z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AlertUnknown.style = iconCss;




/***/ })

};
;