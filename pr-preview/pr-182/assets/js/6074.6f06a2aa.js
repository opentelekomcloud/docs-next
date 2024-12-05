"use strict";
exports.id = 6074;
exports.ids = [6074];
exports.modules = {

/***/ 16074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_heavy_snow: () => (/* binding */ WeatherHeavySnow)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherHeavySnow = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.35 17.807l1.299.75L8.816 20h1.683v1.5H8.781l.868 1.503-1.3.75-.85-1.473-.85 1.473-1.3-.75.869-1.503H4.499V20h1.684l-.833-1.443 1.299-.75.85 1.473.85-1.473zm6.5-4.5l1.298.75-.833 1.443H17V17h-1.72l.868 1.503-1.299.75L14 17.78l-.85 1.473-1.3-.75.868-1.503H11v-1.5h1.683l-.832-1.443 1.298-.75L14 14.78l.85-1.473zM13.51.547a7.596 7.596 0 017.15 5.02 5.805 5.805 0 013.088 5.127c0 3.015-2.302 5.49-5.229 5.757l-.22.016v-2.089a1 1 0 00-.402-.802l-.099-.065-3.302-1.903a1.001 1.001 0 00-.877-.06l-.119.058-3.298 1.889a.999.999 0 00-.496.75l-.007.117v2.11l-4.479-.004C2.455 16.32.25 14.017.25 11.198A5.299 5.299 0 012.916 6.6c.14-2.49 2.196-4.47 4.704-4.47.37 0 .737.045 1.1.133A7.558 7.558 0 0113.51.547z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.35 17.807l1.3.75L8.816 20H10.5v1.5H8.781l.868 1.503-1.298.75L7.5 22.28l-.85 1.473-1.3-.75.869-1.503H4.5V20h1.684l-.833-1.443 1.298-.75.851 1.474.85-1.474zm6.5-4.5l1.3.75-.833 1.443H17V17h-1.719l.868 1.503-1.299.75L14 17.78l-.85 1.473-1.3-.75.87-1.503H11v-1.5h1.684l-.833-1.443 1.298-.75L14 14.78l.85-1.473zM13.512.565a7.596 7.596 0 017.149 5.019 5.803 5.803 0 013.089 5.127c0 2.945-2.196 5.379-5.026 5.739l-.224.024v-1.507c2.108-.251 3.75-2.063 3.75-4.256a4.3 4.3 0 00-2.314-3.813l-.195-.095-.303-.138-.101-.317c-.816-2.563-3.157-4.284-5.825-4.284-1.42 0-2.79.5-3.888 1.415l-.216.188-.328.301-.422-.146a3.178 3.178 0 00-1.036-.176 3.21 3.21 0 00-2.806 1.665 3.382 3.382 0 00-.405 1.84l.031.4-.466.209a3.791 3.791 0 00-2.226 3.456c0 2.02 1.579 3.677 3.557 3.78L5.5 15h4v1.5h-4c-2.895 0-5.25-2.37-5.25-5.284a5.299 5.299 0 012.667-4.598c.14-2.49 2.197-4.472 4.705-4.472.369 0 .736.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherHeavySnow.style = iconCss;




/***/ })

};
;