"use strict";
exports.id = 1645;
exports.ids = [1645];
exports.modules = {

/***/ 81645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_thunder_snow: () => (/* binding */ WeatherThunderSnow)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherThunderSnow = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.262 13.5L8.057 18h3.112L4.86 23.098c-.16.13-.373-.04-.314-.213l.026-.052 2.26-3.337H4.44L7.766 13.5h3.496zm4.589-.223l1.299.75-.85 1.474H18v1.495h-1.703l.853 1.478-1.299.75-.85-1.474-.851 1.474-1.299-.75.853-1.479H12V15.5h1.701l-.85-1.473 1.299-.75.85 1.474.851-1.473zM13.514.566a7.596 7.596 0 017.15 5.019 5.805 5.805 0 013.089 5.127c0 2.66-1.792 4.9-4.223 5.576l-.23.059v-2.002a1 1 0 00-.404-.804l-.1-.064-3.303-1.887a1 1 0 00-.868-.06l-.118.057-1.007.566-.085.049H7l-2.343 4.221a5.275 5.275 0 01-4.404-5.207A5.299 5.299 0 012.92 6.618c.14-2.489 2.197-4.471 4.705-4.471.369 0 .736.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.262 13.5H7.765l-3.326 5.995h2.393l-2.26 3.338c-.128.189.111.408.288.265L11.168 18H8.057l3.205-4.5zm4.588-.223l1.3.75-.851 1.474H18v1.495h-1.704l.854 1.478-1.3.75L15 17.75l-.85 1.474-1.3-.75.854-1.479H12V15.5h1.701l-.85-1.473 1.298-.75.851 1.474.85-1.473zM13.512.566a7.596 7.596 0 017.149 5.019 5.804 5.804 0 013.089 5.127 5.789 5.789 0 01-4.023 5.515l-.227.067V14.72a4.292 4.292 0 002.75-4.008 4.3 4.3 0 00-2.314-3.813l-.195-.095-.303-.138-.101-.317c-.816-2.563-3.157-4.284-5.825-4.284-1.42 0-2.79.5-3.888 1.415l-.216.188-.328.301-.422-.146a3.178 3.178 0 00-1.036-.176 3.22 3.22 0 00-3.007 2.1 3.327 3.327 0 00-.2 1.37l.027.435-.466.209a3.791 3.791 0 00-2.226 3.456 3.775 3.775 0 003.283 3.75l.193.02-.78 1.407A5.285 5.285 0 01.25 11.215a5.299 5.299 0 012.667-4.598c.14-2.489 2.197-4.471 4.705-4.471.369 0 .736.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherThunderSnow.style = iconCss;




/***/ })

};
;