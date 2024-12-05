"use strict";
exports.id = 9113;
exports.ids = [9113];
exports.modules = {

/***/ 79113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_flight_mode: () => (/* binding */ CommunicationFlightMode)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationFlightMode = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.239 23.262a1.428 1.428 0 01-1.262-.773l-2.231-4.353-4.327-2.185a1.422 1.422 0 01.805-2.679l5.085.59 3.197-3.498-8.233-5.328a1.546 1.546 0 01-.25-2.403 1.536 1.536 0 011.455-.409c1.546.371 9.064 2.176 11.869 2.93l.207-.188c3.729-3.4 5.981-5.449 7.403-4.035.199.198.435.553.422 1.117-.045 1.966-3.469 5.408-4.576 6.47.759 2.802 2.538 10.11 2.943 11.933a1.548 1.548 0 01-.5 1.51l-.039.034a1.544 1.544 0 01-1.239.363 1.55 1.55 0 01-1.085-.698l-5.327-8.315-3.519 3.228.617 5.095c.053.437-.096.866-.407 1.177a1.43 1.43 0 01-1.008.417z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M13.857 11.033l6.289 9.817.569.58-.492-.567.041-.036a.051.051 0 00.018-.05c-.426-1.92-2.38-9.932-3.044-12.293l-.125-.447.345-.313c2.551-2.304 4.596-5.143 4.419-5.764-.608-.15-3.333 2.31-5.312 4.114l-.819.746-.4-.11C12.971 6.045 4.752 4.071 3.128 3.682l-.049.014.008.08 9.722 6.291-4.91 5.37-5.406-.625 4.365 2.203 2.255 4.402-.657-5.429 5.401-4.956zm-4.618 12.23a1.428 1.428 0 01-1.262-.773l-2.231-4.354-4.327-2.185a1.422 1.422 0 01.805-2.679l5.085.59 3.197-3.498-8.233-5.328a1.546 1.546 0 01-.25-2.403 1.536 1.536 0 011.455-.409c1.546.371 9.064 2.176 11.869 2.93l.207-.188c3.729-3.4 5.981-5.449 7.403-4.035.199.198.435.553.422 1.117-.045 1.966-3.469 5.408-4.576 6.47.759 2.802 2.538 10.11 2.943 11.933a1.548 1.548 0 01-.5 1.51l-.039.034a1.544 1.544 0 01-1.239.363 1.55 1.55 0 01-1.085-.698l-5.327-8.315-3.519 3.228.617 5.095c.053.437-.096.866-.407 1.177a1.43 1.43 0 01-1.008.417z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationFlightMode.style = iconCss;




/***/ })

};
;