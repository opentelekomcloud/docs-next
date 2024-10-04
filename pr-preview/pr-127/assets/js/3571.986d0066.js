"use strict";
exports.id = 3571;
exports.ids = [3571];
exports.modules = {

/***/ 23571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_cloudy_thunder_rain: () => (/* binding */ WeatherCloudyThunderRain)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherCloudyThunderRain = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.999 19.171a.138.138 0 01.23.077v.046l-.47 3a1.201 1.201 0 01-1.372 1c-.954-.149-1.337-1.29-.713-1.985l.087-.088 2.238-2.05zM9.21 15.2l-2.562 3.6h2.487L4.09 22.878c-.128.103-.296-.029-.254-.166l.023-.046L5.663 20H3.751l2.662-4.8H9.21zm4.066-1.385a.12.12 0 01.197.062l.002.044-.522 3.334a1.301 1.301 0 01-1.487 1.085c-1.034-.162-1.448-1.403-.769-2.154l.091-.091 2.488-2.28zM10.507 5.95a5.56 5.56 0 015.233 3.674 4.25 4.25 0 012.261 3.753c0 2.195-1.668 4.005-3.795 4.215l.032-.137.52-3.333a1.421 1.421 0 00-2.24-1.365l-.117.096L11.26 13.9H5.647l-1.984 3.579A3.863 3.863 0 01.8 13.746c0-1.4.755-2.684 1.952-3.366.102-1.822 1.608-3.273 3.443-3.273.27 0 .54.033.806.098a5.53 5.53 0 013.505-1.255zm9.24 4.596a.6.6 0 01.765-.069l.083.07.85.848a.6.6 0 01-.775.912l-.074-.064-.849-.848a.6.6 0 010-.849zM16.601 4.4c1.654 0 3 1.345 3 3 0 1.132-.63 2.118-1.558 2.63a5.43 5.43 0 00-1.344-1.24 6.768 6.768 0 00-2.628-2.996 2.997 2.997 0 012.53-1.394zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.098-1.192l.098-.008h1.2zM11.757 2.556a.6.6 0 01.765-.069l.084.07.849.848a.6.6 0 01-.775.912l-.074-.064-.849-.848a.6.6 0 010-.849zm8.84 0a.6.6 0 01.917.766l-.07.083-.848.848a.596.596 0 01-.849 0 .6.6 0 01-.07-.765l.07-.083.85-.849zM16.6.55a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.193.097L16 2.35v-1.2a.6.6 0 01.6-.6z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.998 19.171a.138.138 0 01.23.077v.046l-.47 3a1.201 1.201 0 01-1.372 1c-.953-.149-1.336-1.29-.713-1.985l.087-.087 2.238-2.05zM9.21 15.2l-2.562 3.6h2.487l-5.047 4.078c-.127.103-.295-.029-.253-.166l.022-.046L5.663 20H3.75l2.661-4.8H9.21zm4.065-1.385a.12.12 0 01.198.062l.001.045-.522 3.333a1.301 1.301 0 01-1.354 1.099l-.132-.014-.126-.026c-.942-.238-1.295-1.408-.643-2.128l.09-.091 2.488-2.28zM10.5 5.981a5.577 5.577 0 015.242 3.639A4.246 4.246 0 0118 13.364a4.238 4.238 0 01-3.897 4.218l.035-.141.171-1.093a3.04 3.04 0 002.491-2.984 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.5 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166A2.677 2.677 0 002 13.727c0 1.319.96 2.417 2.218 2.633l.166.024-.614 1.106A3.877 3.877 0 01.8 13.727c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.5 5.981zm9.246 4.565a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.849-.849a.6.6 0 010-.849zM16.6 4.4c1.654 0 3 1.346 3 3 0 1.132-.63 2.118-1.558 2.63a5.44 5.44 0 00-1.344-1.24 6.765 6.765 0 00-2.628-2.996A2.998 2.998 0 0116.6 4.4zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.097-1.192l.097-.008h1.2zm-2.254-4.244a.6.6 0 01.917.766l-.069.083-.849.849a.598.598 0 01-.848 0 .6.6 0 01-.07-.766l.07-.083.849-.849zm-8.84 0a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.848-.849a.6.6 0 010-.849zM16.6.55a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.192.097L16 2.35v-1.2a.6.6 0 01.6-.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherCloudyThunderRain.style = iconCss;




/***/ })

};
;