"use strict";
exports.id = 5342;
exports.ids = [5342];
exports.modules = {

/***/ 95342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_rss: () => (/* binding */ ContentRss)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentRss = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zM7.22 18.5a1.725 1.725 0 110-3.45 1.725 1.725 0 010 3.45zm6.085-.5H11.76c.11-.408.167-.828.17-1.25A4.755 4.755 0 007.18 12a4.6 4.6 0 00-1.18.155v-1.54a6.13 6.13 0 011.18-.115 6.26 6.26 0 016.125 7.5zm4.545 0h-1.5a9.37 9.37 0 00.095-1.25A9.26 9.26 0 007.18 7.5 9.23 9.23 0 006 7.585v-1.5c.391-.051.785-.08 1.18-.085 5.935.006 10.744 4.815 10.75 10.75a10.29 10.29 0 01-.08 1.25z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19 2a3.003 3.003 0 012.995 2.824L22 5v14a3.003 3.003 0 01-2.824 2.995L19 22H5a3.003 3.003 0 01-2.995-2.824L2 19V5a3.003 3.003 0 012.824-2.995L5 2h14zm0 1.5H5c-.776 0-1.42.598-1.493 1.356L3.5 5v14c0 .776.598 1.42 1.356 1.493L5 20.5h14c.776 0 1.42-.598 1.493-1.356L20.5 19V5c0-.776-.598-1.42-1.356-1.493L19 3.5zM7.22 15.06a1.72 1.72 0 110 3.44 1.72 1.72 0 010-3.44zm-.04-4.56a6.259 6.259 0 016.178 7.194l-.053.306H11.76c.105-.4.17-.815.17-1.25 0-2.62-2.13-4.75-4.75-4.75-.328 0-.643.038-.95.102l-.23.053v-1.54c.38-.075.775-.115 1.18-.115zm0-4.5c5.93 0 10.75 4.82 10.75 10.75 0 .283-.013.562-.037.838L17.85 18h-1.515c.055-.41.095-.825.095-1.25 0-5.1-4.15-9.25-9.25-9.25a8.19 8.19 0 00-.79.04L6 7.586V6.07c.39-.045.78-.07 1.18-.07z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentRss.style = iconCss;




/***/ })

};
;