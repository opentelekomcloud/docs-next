"use strict";
exports.id = 3537;
exports.ids = [3537];
exports.modules = {

/***/ 13537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_home_preferred_wifi: () => (/* binding */ HomePreferredWifi)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomePreferredWifi = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.006 18a2 2 0 11-.001 4.001A2 2 0 0112.006 18zm-1.08-4.4c.15.684.394 1.33.722 1.926a4.494 4.494 0 00-3.501 2.162l-.11.195-1.438-1.49a6.494 6.494 0 014.327-2.792zm.517-4.584a7.157 7.157 0 00-.612 2.063 8.985 8.985 0 00-5.801 3.25l-.19.242-1.407-1.46a10.98 10.98 0 018.01-4.095zm6.505.247a.254.254 0 01.234.15l.59 1.441 1.563.115a.255.255 0 01.132.453l-1.193 1.008.373 1.517a.257.257 0 01-.099.267.258.258 0 01-.283.011l-1.324-.823-1.322.823a.257.257 0 01-.383-.278l.373-1.517-1.193-1.008a.257.257 0 01-.079-.275.252.252 0 01.225-.175l1.564-.115.59-1.443a.256.256 0 01.232-.15zM12.006 4.5c1.47 0 2.89.205 4.235.587a7.158 7.158 0 00-2.92 1.48 13.47 13.47 0 00-11.405 4.468l-.23.264L.293 9.854A15.464 15.464 0 0112.006 4.5zm5.938 1.875a5.687 5.687 0 11-.001 11.375 5.687 5.687 0 010-11.375z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.006 18a2 2 0 11-.001 4.001A2 2 0 0112.006 18zm-1.08-4.4c.15.684.394 1.33.722 1.926a4.494 4.494 0 00-3.501 2.162l-.11.195-1.438-1.49a6.494 6.494 0 014.327-2.792zm.517-4.584a7.157 7.157 0 00-.612 2.063 8.985 8.985 0 00-5.801 3.25l-.19.242-1.407-1.46a10.98 10.98 0 018.01-4.095zm6.505.247a.254.254 0 01.234.15l.59 1.441 1.563.115a.255.255 0 01.132.453l-1.193 1.008.373 1.517a.257.257 0 01-.099.267.258.258 0 01-.283.011l-1.324-.823-1.322.823a.257.257 0 01-.383-.278l.373-1.517-1.193-1.008a.257.257 0 01-.079-.275.252.252 0 01.225-.175l1.564-.115.59-1.443a.256.256 0 01.232-.15zM12.006 4.5c1.47 0 2.89.205 4.235.587a7.158 7.158 0 00-2.92 1.48 13.47 13.47 0 00-11.405 4.468l-.23.264L.293 9.854A15.464 15.464 0 0112.006 4.5zm5.938 1.875a5.687 5.687 0 11-.001 11.375 5.687 5.687 0 010-11.375zm0 1.5a4.192 4.192 0 00-4.187 4.187 4.192 4.192 0 004.187 4.188 4.192 4.192 0 004.187-4.188 4.192 4.192 0 00-4.187-4.187z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
HomePreferredWifi.style = iconCss;




/***/ })

};
;