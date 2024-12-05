"use strict";
exports.id = 1384;
exports.ids = [1384];
exports.modules = {

/***/ 1384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_thunder_rain: () => (/* binding */ WeatherThunderRain)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherThunderRain = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14.01 18.465a.173.173 0 01.287.102v.052l-.587 3.748a1.502 1.502 0 01-1.716 1.252c-1.199-.188-1.676-1.632-.876-2.498l.094-.093 2.797-2.563zM11.773 13.5L8.569 18h3.111l-6.308 5.097c-.161.13-.373-.04-.315-.213l.026-.052 2.26-3.337H4.95L8.277 13.5h3.497zm5.082-1.731a.15.15 0 01.248.083v.05l-.652 4.167a1.626 1.626 0 01-1.858 1.355c-1.3-.203-1.817-1.771-.946-2.708l.098-.098 3.11-2.85zM13.523.565a7.596 7.596 0 017.15 5.019 5.805 5.805 0 013.089 5.127c0 3.118-2.461 5.668-5.53 5.785l-.22.004h-.329l.03-.114.024-.116.652-4.166a1.45 1.45 0 00-2.29-1.392l-.12.098-1.518 1.39h-6.95L5.14 16.477a5.27 5.27 0 01-4.877-5.26A5.299 5.299 0 012.93 6.619c.14-2.49 2.196-4.472 4.704-4.472.37 0 .737.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M13.998 18.465a.173.173 0 01.288.102l-.001.052-.587 3.748a1.502 1.502 0 01-1.716 1.252c-1.199-.188-1.676-1.632-.876-2.498l.094-.093 2.798-2.563zM11.761 13.5L8.557 18h3.111L5.36 23.098c-.16.13-.373-.04-.315-.213l.027-.052 2.26-3.337H4.939L8.264 13.5h3.497zm5.082-1.731a.15.15 0 01.248.083v.05l-.651 4.167a1.626 1.626 0 01-1.859 1.355c-1.3-.203-1.817-1.771-.946-2.708l.099-.098 3.109-2.85zM13.511.565a7.596 7.596 0 017.15 5.019 5.805 5.805 0 013.089 5.128c0 3.118-2.46 5.667-5.53 5.784l-.22.005h-.127l.026-.1.023-.099.205-1.308c2.284-.069 4.123-1.961 4.123-4.282a4.3 4.3 0 00-2.314-3.813l-.195-.095-.303-.138-.101-.318c-.816-2.561-3.157-4.283-5.825-4.283-1.42 0-2.79.5-3.888 1.415l-.216.188-.328.301-.354-.122c-.34-.115-.66-.2-1.105-.2a3.22 3.22 0 00-3.034 2.176 3.259 3.259 0 00-.176 1.154l.014.307.017.267-.398.179a3.8 3.8 0 00-.807.471 3.798 3.798 0 00-1.487 3.014c0 2.022 1.579 3.678 3.557 3.78L5.5 15h.218l-.811 1.464C2.291 16.166.25 13.927.25 11.216a5.299 5.299 0 012.667-4.598c.14-2.49 2.197-4.472 4.705-4.472.369 0 .736.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherThunderRain.style = iconCss;




/***/ })

};
;