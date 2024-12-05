"use strict";
exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 20992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_pin: () => (/* binding */ ActionPin)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionPin = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M13.065 6.11L18 11.06l-3.5 3.5a7 7 0 01-1.6 6.555l-.19.2-.355.355-4.42-4.42-5.83 5.815a.755.755 0 01-1.135-.971L1.04 22l5.835-5.81-4.42-4.42.355-.355a7 7 0 016.486-1.871l.269.066 3.5-3.5zm1.536-4.646a2.25 2.25 0 012.048.465l.126.116L22.08 7.35a2.245 2.245 0 01.134 3.034l-.134.146-.146.134a2.25 2.25 0 01-2.893 0l-.146-.134-5.3-5.3a2.25 2.25 0 011.006-3.766z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.08 7.35l-5.305-5.305a2.242 2.242 0 00-3.18 0c-.88.88-.88 2.305 0 3.18l.175.175-4.205 4.205a6.988 6.988 0 00-1.815-.24c-1.79 0-3.575.68-4.94 2.045l-.355.355 4.42 4.42L1.04 22.02a.745.745 0 000 1.06c.145.145.34.22.53.22s.385-.075.53-.22l5.835-5.83 4.42 4.42.355-.355a6.984 6.984 0 001.805-6.755l4.205-4.205.175.175a2.242 2.242 0 003.18 0 2.24 2.24 0 00.005-3.18zm-9.235 6.76l.225.835a5.535 5.535 0 01-.775 4.535l-7.65-7.65a5.446 5.446 0 013.11-.96c.485 0 .965.065 1.43.185l.835.225 4.815-4.815 2.83 2.83-4.82 4.815zm8.175-4.64a.752.752 0 01-1.06 0l-5.305-5.305a.754.754 0 010-1.06.752.752 0 011.06 0L21.02 8.41a.752.752 0 010 1.06z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionPin.style = iconCss;




/***/ })

};
;