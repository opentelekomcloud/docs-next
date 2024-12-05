"use strict";
exports.id = 5746;
exports.ids = [5746];
exports.modules = {

/***/ 45746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_eu: () => (/* binding */ ContentEu)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentEu = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 3C5.65 3 .5 7.03.5 12s5.15 9 11.5 9 11.5-4.03 11.5-9S18.35 3 12 3zm-1.205 6.935h-2.58v1.41h2.5v1.25h-2.5v1.5h2.58v1.25h-3.93v-6.66h3.93v1.25zm6.2 3c.005 1.66-.89 2.565-2.47 2.565s-2.5-.92-2.5-2.59V8.685h1.34v4.06c0 1.04.32 1.5 1.14 1.5.82 0 1.14-.44 1.14-1.5v-4.06H17l-.005 4.25z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 3c6.35 0 11.5 4.05 11.5 9s-5.15 9-11.5 9S.5 16.95.5 12 5.65 3 12 3zm0 1.5C6.5 4.5 2 7.85 2 12s4.5 7.5 10 7.5 10-3.35 10-7.5-4.5-7.5-10-7.5zm1.35 4.2v4.05c0 1.05.35 1.5 1.15 1.5.8 0 1.15-.45 1.15-1.5l-.007-2.476-.016-1.164-.014-.329a.54.54 0 00-.008-.072L15.6 8.7h1.35v4.25c0 1.7-.85 2.6-2.45 2.6-1.536 0-2.427-.83-2.496-2.4l-.004-.2V8.7h1.35zm-2.55 0v1.25H8.2v1.4h2.5v1.25H8.2v1.5h2.6v1.25H6.85V8.7h3.95z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentEu.style = iconCss;




/***/ })

};
;