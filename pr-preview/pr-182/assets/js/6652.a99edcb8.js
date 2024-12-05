"use strict";
exports.id = 6652;
exports.ids = [6652];
exports.modules = {

/***/ 16652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_moon_thunder_rain: () => (/* binding */ WeatherMoonThunderRain)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherMoonThunderRain = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.598 19.171a.138.138 0 01.23.077v.046l-.47 3a1.201 1.201 0 01-1.372 1c-.953-.149-1.336-1.291-.713-1.984l.087-.088 2.238-2.05zM8.81 15.2l-2.562 3.6h2.487l-5.047 4.078c-.127.103-.294-.029-.252-.166l.022-.046L5.263 20H3.351l2.661-4.8H8.81zm4.066-1.385a.12.12 0 01.197.062l.001.045-.521 3.333a1.3 1.3 0 01-1.487 1.085c-1.035-.161-1.449-1.403-.769-2.154l.09-.091 2.489-2.28zM10.22 5.962A5.577 5.577 0 0115.463 9.6a4.246 4.246 0 012.258 3.743 4.24 4.24 0 01-3.908 4.22l.024-.109.522-3.332a1.42 1.42 0 00-2.24-1.365l-.118.095L10.86 13.9H5.247l-1.952 3.52a3.878 3.878 0 01-2.774-3.712c0-1.392.75-2.669 1.942-3.355a3.486 3.486 0 014.261-3.158 5.575 5.575 0 013.496-1.233zM18.297.486a5.383 5.383 0 012.621-.03 4.55 4.55 0 003.058 8.515 5.374 5.374 0 01-2.934 1.969 5.37 5.37 0 01-2.685.015 5.421 5.421 0 00-1.938-2.184 6.749 6.749 0 00-2.137-2.676A5.404 5.404 0 0118.297.486z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.598 19.171a.138.138 0 01.23.077v.046l-.47 3a1.201 1.201 0 01-1.372 1c-.953-.149-1.336-1.29-.713-1.985l.087-.087 2.238-2.05zM8.81 15.2l-2.562 3.6h2.487l-5.047 4.078c-.127.103-.295-.029-.253-.166l.022-.046L5.263 20H3.35l2.661-4.8H8.81zm4.065-1.385a.12.12 0 01.198.062l.001.045-.522 3.333a1.301 1.301 0 01-1.354 1.099l-.132-.014-.126-.026c-.942-.238-1.295-1.408-.643-2.128l.09-.091 2.488-2.28zM10.1 5.981a5.577 5.577 0 015.242 3.639 4.245 4.245 0 012.258 3.744 4.239 4.239 0 01-3.897 4.218l.035-.141.171-1.093a3.04 3.04 0 002.491-2.984 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.1 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166a2.677 2.677 0 00-1.585 2.44c0 1.319.96 2.417 2.218 2.633l.166.024-.614 1.106A3.877 3.877 0 01.4 13.727c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.1 5.981zM18.176.505a5.38 5.38 0 012.622-.03 4.548 4.548 0 003.057 8.515 5.376 5.376 0 01-2.934 1.969 5.37 5.37 0 01-2.685.015 5.42 5.42 0 00-1.938-2.184 6.748 6.748 0 00-2.137-2.676A5.403 5.403 0 0118.176.505z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherMoonThunderRain.style = iconCss;




/***/ })

};
;