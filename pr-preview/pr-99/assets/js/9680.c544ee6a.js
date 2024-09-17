"use strict";
exports.id = 9680;
exports.ids = [9680];
exports.modules = {

/***/ 77299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_home_reduced_wifi: () => (/* binding */ HomeReducedWifi)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeReducedWifi = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18.25 4.25a.75.75 0 10-1.5 0V13h-3.175l3.925 6 3.925-6H18.25V4.25zm-3.3 7.25h.3v-2a11 11 0 00-11.825 3.61l1.41 1.46A8.97 8.97 0 0114.95 11.5zm.3-4.6V4.845a15.5 15.5 0 00-14.965 5L1.68 11.3a13.475 13.475 0 0113.57-4.4zM12 18a2 2 0 100 4 2 2 0 000-4zm1.62-2.19l-1.3-2-.21-.31H12a6.5 6.5 0 00-5.405 2.895l1.435 1.5a4.47 4.47 0 015.59-2.075v-.01zm6.13-9.225V8.95a13.5 13.5 0 012.57 2.35l1.395-1.445a15.61 15.61 0 00-3.965-3.27z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 18a2 2 0 110 4 2 2 0 010-4zm5.5-14.5a.75.75 0 01.744.648l.006.102V13h3.177L17.5 19l-3.927-6h3.177V4.25a.75.75 0 01.75-.75zm-5.388 10.007l1.508 2.303a4.478 4.478 0 00-5.486 1.888l-.105.185-1.436-1.49a6.465 6.465 0 015.241-2.885l.278-.001zM12 9c.99 0 1.95.133 2.862.38l.389.112v2.12a8.97 8.97 0 00-10.236 2.73l-.18.228-1.408-1.459A10.977 10.977 0 0112 9zm0-4.5c.956 0 1.891.09 2.799.256l.452.09v2.053a13.463 13.463 0 00-13.342 4.137l-.229.264L.287 9.855A15.459 15.459 0 0112 4.5zm7.75 2.082a15.625 15.625 0 013.65 2.923l.313.35-1.393 1.444a13.588 13.588 0 00-2.216-2.091l-.354-.258V6.582z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
HomeReducedWifi.style = iconCss;




/***/ })

};
;