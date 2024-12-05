"use strict";
exports.id = 9114;
exports.ids = [9114];
exports.modules = {

/***/ 39114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_dongle: () => (/* binding */ DeviceDongle)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDongle = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { "fill-rule": "evenodd" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.501 15.5h4.5v-7h-4.5v7zm-7.275 1.142l-1.12-.995a5.466 5.466 0 000-7.295l1.12-.994A6.964 6.964 0 0112.001 12a6.964 6.964 0 01-1.775 4.642zm-2.24-1.99l-1.125-.999A2.48 2.48 0 007.501 12c0-.636-.247-1.212-.64-1.653l1.125-.999A3.977 3.977 0 019.001 12a3.977 3.977 0 01-1.015 2.652zM5.001 13a1 1 0 110-2 1 1 0 010 2zm12.5-6V5h-14a3 3 0 00-3 3v8a3 3 0 003 3h14v-2h6V7h-6z" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19.001 11h1.5V9.5h-1.5zm0 3.5h1.5V13h-1.5z" })))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M7.986 14.652a3.976 3.976 0 000-5.304l-1.125 1c.393.44.639 1.016.639 1.652a2.48 2.48 0 01-.639 1.653l1.125 1zm2.239 1.99a6.959 6.959 0 000-9.284l-1.119.994A5.475 5.475 0 0110.5 12c0 1.4-.53 2.675-1.394 3.647l1.119.995zM5 13a1 1 0 100-2 1 1 0 000 2zm14 1.5h1.5V13H19v1.5zm0-3.5h1.5V9.5H19V11zm-1.5 4.5H22v-7h-4.5v7zm-1.5 2H3.5c-.827 0-1.5-.674-1.5-1.5V8c0-.827.673-1.5 1.5-1.5H16v11zM17.5 7V5h-14a3 3 0 00-3 3v8a3 3 0 003 3h14v-2h6V7h-6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceDongle.style = iconCss;




/***/ })

};
;