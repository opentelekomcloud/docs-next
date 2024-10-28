"use strict";
exports.id = 8910;
exports.ids = [8910];
exports.modules = {

/***/ 68910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_cloudy_rain: () => (/* binding */ WeatherCloudyRain)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherCloudyRain = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.366 18.195a.142.142 0 01.234.08v.046l-.479 3.063a1.227 1.227 0 01-1.402 1.023c-.974-.152-1.364-1.319-.728-2.027l.09-.09 2.285-2.095zm-1.25-4.16a.142.142 0 01.234.08v.047l-.529 3.386a1.342 1.342 0 01-1.533 1.118c-1.069-.167-1.496-1.45-.79-2.224l.09-.09 2.528-2.316zm4.934-1.304a.142.142 0 01.234.08v.046l-.615 3.936a1.537 1.537 0 01-1.756 1.28c-1.226-.191-1.714-1.669-.896-2.554l.096-.096 2.937-2.692zM10.51 5.95a5.56 5.56 0 015.233 3.674 4.25 4.25 0 012.261 3.753c0 2.265-1.775 4.12-3.999 4.231l-.23.005c.052-.13.098-.265.133-.405l.044-.214.616-3.936a1.441 1.441 0 00-2.28-1.382l-.119.098-2.518 2.308a1.443 1.443 0 00-2.294-1.103l-.12.098-2.528 2.316a2.616 2.616 0 00-.846 2.13 3.86 3.86 0 01-3.059-3.777c0-1.4.755-2.684 1.952-3.366C2.86 8.558 4.365 7.107 6.2 7.107c.27 0 .54.033.806.098A5.53 5.53 0 0110.51 5.95zm9.236 4.596a.6.6 0 01.765-.069l.083.07.85.848a.6.6 0 01-.775.912l-.074-.064-.849-.848a.6.6 0 010-.849zM16.601 4.4c1.654 0 3 1.345 3 3 0 1.132-.63 2.118-1.558 2.63a5.43 5.43 0 00-1.344-1.24 6.768 6.768 0 00-2.628-2.996 2.997 2.997 0 012.53-1.394zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.098-1.192l.098-.008h1.2zM11.757 2.556a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.775.912l-.074-.064-.849-.848a.6.6 0 010-.849zm8.84 0a.6.6 0 01.917.766l-.07.083-.848.848a.596.596 0 01-.849 0 .6.6 0 01-.07-.765l.07-.083.85-.849zM16.6.55a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.193.097L16 2.35v-1.2a.6.6 0 01.6-.6z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.365 18.196a.141.141 0 01.235.078v.047l-.48 3.063a1.227 1.227 0 01-1.401 1.023c-.974-.152-1.365-1.319-.728-2.027l.089-.09 2.285-2.094zm-1.25-4.16a.142.142 0 01.235.079v.047l-.53 3.386a1.342 1.342 0 01-1.533 1.118c-1.068-.167-1.495-1.45-.79-2.224l.091-.09 2.527-2.316zm4.934-1.304a.141.141 0 01.235.079v.047l-.616 3.935a1.536 1.536 0 01-1.755 1.28c-1.227-.191-1.715-1.669-.897-2.554l.096-.096 2.937-2.691zm-2.55-6.75a5.577 5.577 0 015.243 3.638A4.246 4.246 0 0118 13.364a4.242 4.242 0 01-4.025 4.23l-.211.006h-.085c.053-.13.098-.266.132-.407l.043-.215.092-.587a3.038 3.038 0 002.854-3.027 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.5 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166A2.677 2.677 0 002 13.727c0 1.296.927 2.379 2.152 2.621-.158.37-.22.776-.187 1.184A3.877 3.877 0 01.8 13.727c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.5 5.981zm9.247 4.564a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.849-.849a.6.6 0 010-.849zM16.6 4.4c1.654 0 3 1.346 3 3 0 1.132-.63 2.118-1.558 2.63a5.44 5.44 0 00-1.344-1.24 6.765 6.765 0 00-2.628-2.996A2.998 2.998 0 0116.6 4.4zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.097-1.192l.097-.008h1.2zm-2.254-4.244a.6.6 0 01.917.766l-.069.083-.849.849a.598.598 0 01-.848 0 .6.6 0 01-.07-.766l.07-.083.849-.849zm-8.84 0a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.848-.849a.6.6 0 010-.849zM16.6.55a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.192.097L16 2.35v-1.2a.6.6 0 01.6-.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherCloudyRain.style = iconCss;




/***/ })

};
;