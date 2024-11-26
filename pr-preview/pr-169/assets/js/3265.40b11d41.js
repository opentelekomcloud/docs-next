"use strict";
exports.id = 3265;
exports.ids = [3265];
exports.modules = {

/***/ 23265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_moon_thunder_snow: () => (/* binding */ WeatherMoonThunderSnow)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherMoonThunderSnow = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.41 15.2l-2.562 3.6h2.487L3.29 22.878c-.128.103-.296-.029-.254-.166l.023-.046L4.863 20H2.951l2.662-4.8H8.41zm3.471-.178l1.04.6-.681 1.178h1.36V18h-1.36l.68 1.179-1.039.6-.68-1.179-.68 1.179-1.04-.6.68-1.179h-1.36v-1.2h1.36l-.68-1.178 1.04-.6.68 1.178.68-1.178zM10.107 5.98a5.56 5.56 0 015.233 3.674 4.25 4.25 0 012.26 3.753 4.239 4.239 0 01-2.606 3.913l-.193.075V15.9a.998.998 0 00-.401-.801l-.099-.065-2.6-1.504a1 1 0 00-.882-.059l-.12.06-.779.45L4.906 14l-1.902 3.431A3.864 3.864 0 01.4 13.777c0-1.4.755-2.683 1.952-3.365.102-1.822 1.607-3.273 3.443-3.273.27 0 .54.033.805.098a5.53 5.53 0 013.506-1.256zm8.07-5.476a5.377 5.377 0 012.621-.03 4.548 4.548 0 003.057 8.515 5.377 5.377 0 01-2.933 1.969 5.37 5.37 0 01-2.685.015A5.421 5.421 0 0016.3 8.79a6.749 6.749 0 00-2.137-2.676A5.404 5.404 0 0118.177.505z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.41 15.2l-2.562 3.6h2.487l-5.047 4.078c-.127.103-.295-.029-.253-.166l.022-.046L4.863 20H2.95l2.661-4.8H8.41zm3.47-.178l1.04.6-.68 1.178h1.36V18h-1.36l.68 1.178-1.04.6-.68-1.178-.68 1.178-1.04-.6.68-1.178H8.8v-1.2h1.36l-.68-1.178 1.04-.6.68 1.178.68-1.178zm-1.78-9.04a5.577 5.577 0 015.242 3.638 4.245 4.245 0 012.258 3.744 4.238 4.238 0 01-2.607 3.905l-.193.075v-1.306a3.039 3.039 0 001.6-2.674 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.1 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166a2.677 2.677 0 00-1.585 2.44c0 1.19.781 2.197 1.857 2.542l.164.047-.595 1.074A3.876 3.876 0 01.4 13.727c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.1 5.981zM18.176.504a5.38 5.38 0 012.622-.03 4.548 4.548 0 003.057 8.515 5.376 5.376 0 01-2.934 1.969 5.37 5.37 0 01-2.685.015 5.42 5.42 0 00-1.938-2.184 6.748 6.748 0 00-2.137-2.676A5.403 5.403 0 0118.176.505z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherMoonThunderSnow.style = iconCss;




/***/ })

};
;