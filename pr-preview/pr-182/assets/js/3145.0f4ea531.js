"use strict";
exports.id = 3145;
exports.ids = [3145];
exports.modules = {

/***/ 33145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_rain: () => (/* binding */ WeatherRain)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherRain = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.959 17.134a.177.177 0 01.294.105l-.001.053-.599 3.828A1.534 1.534 0 019.9 22.398c-1.224-.19-1.711-1.666-.895-2.55l.096-.095 2.857-2.619zm-1.563-5.199c.11-.1.277-.028.294.105v.053l-.662 4.233a1.676 1.676 0 01-1.917 1.397c-1.341-.21-1.874-1.827-.976-2.793l.102-.1 3.159-2.895zm6.168-1.63a.177.177 0 01.294.105l-.001.053-.77 4.919a1.92 1.92 0 01-2.194 1.6c-1.539-.24-2.148-2.1-1.11-3.205l.11-.108 3.67-3.364zm-3.05-9.74a7.596 7.596 0 017.149 5.019 5.805 5.805 0 013.089 5.127c0 3.118-2.46 5.668-5.53 5.785l-.22.004-.928-.001a3.41 3.41 0 00.25-.675l.048-.241.77-4.92a1.475 1.475 0 00-2.336-1.416l-.122.1-3.67 3.364-.124.12.084-.537a1.478 1.478 0 00-2.334-1.418l-.121.1-3.16 2.895a2.948 2.948 0 00-.958 2.421l.022.193h-.2c-2.765-.146-4.971-2.45-4.971-5.27a5.299 5.299 0 012.667-4.598c.14-2.489 2.196-4.471 4.704-4.471.37 0 .737.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.957 17.134a.177.177 0 01.294.105l-.001.053-.599 3.828a1.534 1.534 0 01-1.752 1.278c-1.225-.19-1.712-1.666-.896-2.55l.097-.095 2.857-2.619zm-1.563-5.199c.11-.1.277-.028.294.105v.053l-.663 4.233a1.676 1.676 0 01-1.916 1.397c-1.341-.21-1.874-1.827-.976-2.793l.102-.1 3.159-2.895zm6.167-1.63c.11-.1.277-.028.295.105l-.001.053-.77 4.919a1.92 1.92 0 01-2.194 1.6c-1.539-.24-2.148-2.1-1.11-3.205l.11-.108 3.67-3.364zm-3.05-9.74a7.596 7.596 0 017.15 5.019 5.805 5.805 0 013.089 5.127c0 3.118-2.46 5.668-5.53 5.785L18 16.5h-.695c.093-.207.167-.426.218-.655l.044-.232.096-.613H18c2.343 0 4.25-1.924 4.25-4.289A4.3 4.3 0 0019.936 6.9l-.195-.096-.303-.138-.101-.317c-.816-2.562-3.157-4.284-5.825-4.284A6.07 6.07 0 009.624 3.48l-.216.188-.328.302-.422-.146a3.178 3.178 0 00-1.036-.176A3.214 3.214 0 004.747 5.44c-.313.631-.345 1.15-.33 1.634l.025.476-.466.209a3.791 3.791 0 00-2.226 3.456c0 2.046 1.619 3.714 3.631 3.777a3.14 3.14 0 00-.16 1.492C2.456 16.34.25 14.035.25 11.215a5.299 5.299 0 012.667-4.598c.14-2.489 2.197-4.471 4.705-4.471.369 0 .736.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherRain.style = iconCss;




/***/ })

};
;