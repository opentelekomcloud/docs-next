"use strict";
exports.id = 8647;
exports.ids = [8647];
exports.modules = {

/***/ 98647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_phone_with_mobile_plan: () => (/* binding */ DevicePhoneWithMobilePlan)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DevicePhoneWithMobilePlan = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.001 21a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm3.114-13.5v2.556h-.447v-.075c0-1.203-.671-1.955-1.94-1.955h-.074v5.414c0 .751.298 1.052 1.044 1.052h.224v.527h-3.879v-.527h.224c.746 0 1.044-.3 1.044-1.052V8.026h-.074c-1.268 0-1.94.752-1.94 1.955v.075H8.85V7.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67zM14 2v1.5h-4V2h4zm2-1.5H8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { "fill-rule": "evenodd" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.001 18.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm5.5 2c0 .826-.673 1.5-1.5 1.5h-8c-.827 0-1.5-.674-1.5-1.5v-17c0-.826.673-1.5 1.5-1.5h2v1.5h4V2h2c.827 0 1.5.674 1.5 1.5v17zm-1.5-20h-8a3 3 0 00-3 3v17a3 3 0 003 3h8a3 3 0 003-3v-17a3 3 0 00-3-3z" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M15.115 7.5v2.556h-.447v-.075c0-1.203-.671-1.955-1.94-1.955h-.074v5.414c0 .751.298 1.052 1.044 1.052h.224v.527h-3.879v-.527h.224c.746 0 1.044-.3 1.044-1.052V8.026h-.074c-1.268 0-1.94.752-1.94 1.955v.075H8.85V7.5h6.265zm0 3.342v1.67h-1.67v-1.67h1.67zm-4.594 0v1.67H8.85v-1.67h1.67z" }))))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DevicePhoneWithMobilePlan.style = iconCss;




/***/ })

};
;