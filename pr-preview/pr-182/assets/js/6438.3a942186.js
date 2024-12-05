"use strict";
exports.id = 6438;
exports.ids = [6438];
exports.modules = {

/***/ 26438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_weather_heavy_sleet: () => (/* binding */ WeatherHeavySleet)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherHeavySleet = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14.747 18.404a.174.174 0 01.289.103v.052l-.588 3.748a1.502 1.502 0 01-1.716 1.252c-1.199-.188-1.675-1.632-.876-2.498l.094-.093 2.797-2.564zM9.85 14.218l1.3.75-.886 1.532H12V18h-1.667l.816 1.413-1.299.75L9 18.69l-.85 1.473-1.3-.75L7.666 18H6v-1.5h1.735l-.885-1.532 1.3-.75L9 15.69l.85-1.472zm7.744-2.508a.15.15 0 01.249.083v.05l-.653 4.166a1.626 1.626 0 01-1.858 1.356c-1.3-.203-1.817-1.771-.946-2.708l.098-.098 3.11-2.85zM13.51.547a7.596 7.596 0 017.15 5.02 5.805 5.805 0 013.088 5.127c0 3.05-2.357 5.55-5.332 5.767l.031-.124.027-.127.652-4.167a1.45 1.45 0 00-2.29-1.391l-.12.098-3.11 2.85a2.9 2.9 0 00-.574.726l-.104.202L9.5 12.54a1 1 0 00-.88-.06l-.12.058-3.297 1.893a1.001 1.001 0 00-.495.75l-.007.117v1.116a5.275 5.275 0 01-4.45-5.216A5.299 5.299 0 012.915 6.6c.14-2.49 2.197-4.471 4.705-4.471.369 0 .737.045 1.1.133A7.558 7.558 0 0113.51.547z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14.748 18.404a.173.173 0 01.288.103l-.001.051-.587 3.749a1.502 1.502 0 01-1.716 1.252c-1.199-.188-1.676-1.632-.876-2.498l.094-.093 2.798-2.564zM9.85 14.217l1.298.75-.884 1.533H12V18h-1.666l.816 1.413-1.3.75L9 18.69l-.85 1.473-1.3-.75L7.668 18H6v-1.5h1.736l-.885-1.533 1.298-.75L9 15.69l.85-1.473zm7.743-2.508a.15.15 0 01.248.084v.05l-.651 4.166a1.626 1.626 0 01-1.859 1.357c-1.3-.204-1.817-1.772-.946-2.71l.099-.097 3.109-2.85zM13.511.566a7.596 7.596 0 017.15 5.019 5.805 5.805 0 013.089 5.127c0 2.982-2.252 5.443-5.134 5.754l.03-.11.026-.114.21-1.335a4.285 4.285 0 003.368-4.195A4.3 4.3 0 0019.937 6.9l-.196-.096-.303-.138-.101-.317c-.816-2.562-3.157-4.284-5.825-4.284-1.42 0-2.79.501-3.887 1.415l-.216.188-.329.302-.421-.146a3.178 3.178 0 00-1.037-.176A3.206 3.206 0 004.918 5.14c-.465.728-.52 1.42-.506 1.912l.03.498-.466.209a3.791 3.791 0 00-2.226 3.456A3.784 3.784 0 004.312 14.8l.188.058V16.4a5.282 5.282 0 01-4.25-5.185 5.299 5.299 0 012.667-4.598c.14-2.49 2.197-4.472 4.705-4.472.369 0 .736.045 1.1.134a7.558 7.558 0 014.79-1.715z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
WeatherHeavySleet.style = iconCss;




/***/ })

};
;