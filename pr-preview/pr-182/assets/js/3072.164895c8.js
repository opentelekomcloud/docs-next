"use strict";
exports.id = 3072;
exports.ids = [3072];
exports.modules = {

/***/ 93072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_moon_sleet: () => (/* binding */ WeatherMoonSleet)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherMoonSleet = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.199 19.171a.138.138 0 01.23.077v.046l-.47 3a1.201 1.201 0 01-1.372 1c-.954-.149-1.337-1.29-.713-1.985l.087-.088 2.238-2.05zm-3.72-3.348l1.039.6-.68 1.178h1.36v1.2h-1.36l.68 1.179-1.04.6-.68-1.179-.68 1.179-1.04-.6.68-1.179h-1.36v-1.2h1.36l-.68-1.178 1.04-.6.68 1.178.68-1.178zm5.997-2.008a.12.12 0 01.197.062l.002.044-.522 3.334a1.301 1.301 0 01-1.487 1.085c-1.034-.162-1.448-1.403-.769-2.154l.091-.091 2.488-2.28zm-3.37-7.865a5.56 5.56 0 015.234 3.674 4.25 4.25 0 012.26 3.753c0 2.013-1.403 3.7-3.276 4.128l.015-.065.521-3.333a1.32 1.32 0 00-2.083-1.269l-.108.089-2.491 2.283a2.35 2.35 0 00-.268.292l-.114.158-2.498-1.443a1 1 0 00-.88-.06l-.12.06-2.7 1.554a1 1 0 00-.493.749l-.007.118v.79A3.862 3.862 0 01.4 13.746c0-1.4.755-2.684 1.952-3.366.102-1.822 1.607-3.273 3.443-3.273.27 0 .54.033.805.098a5.53 5.53 0 013.506-1.255zM18.178.505a5.37 5.37 0 012.621-.03 4.548 4.548 0 003.057 8.515 5.377 5.377 0 01-2.933 1.969 5.37 5.37 0 01-2.685.015A5.424 5.424 0 0016.3 8.79a6.749 6.749 0 00-2.137-2.676A5.403 5.403 0 0118.177.505z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.198 19.171a.138.138 0 01.23.077v.046l-.47 3a1.201 1.201 0 01-1.372 1c-.953-.149-1.336-1.29-.713-1.985l.087-.087 2.238-2.05zm-3.718-3.35l1.04.6-.68 1.179H9.2v1.2H7.84l.68 1.178-1.04.6L6.8 19.4l-.68 1.178-1.04-.6.68-1.178H4.4v-1.2h1.36l-.68-1.178 1.04-.6L6.8 17l.68-1.178zm5.995-2.006a.12.12 0 01.198.062l.001.045-.522 3.333a1.301 1.301 0 01-1.354 1.099l-.132-.014-.126-.026c-.942-.238-1.295-1.408-.643-2.128l.09-.091 2.488-2.28zM10.1 5.981a5.577 5.577 0 015.242 3.639 4.245 4.245 0 012.258 3.744 4.24 4.24 0 01-3.273 4.12l.011-.043.2-1.278a3.04 3.04 0 001.862-2.8 3.044 3.044 0 00-1.613-2.68l-.178-.087-.243-.11-.082-.253A4.381 4.381 0 0010.1 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166a2.677 2.677 0 00-1.585 2.44c0 1.028.584 1.921 1.437 2.368l.163.079v1.272a3.877 3.877 0 01-2.8-3.719c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.1 5.981zM18.176.505a5.38 5.38 0 012.622-.03 4.548 4.548 0 003.057 8.515 5.376 5.376 0 01-2.934 1.969 5.37 5.37 0 01-2.685.015 5.42 5.42 0 00-1.938-2.184 6.748 6.748 0 00-2.137-2.676A5.403 5.403 0 0118.176.505z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherMoonSleet.style = iconCss;




/***/ })

};
;