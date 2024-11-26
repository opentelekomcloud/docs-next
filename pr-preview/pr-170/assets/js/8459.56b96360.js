"use strict";
exports.id = 8459;
exports.ids = [8459];
exports.modules = {

/***/ 28459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_digital_media: () => (/* binding */ ContentDigitalMedia)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentDigitalMedia = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.355 11.5a8.76 8.76 0 007.598 4.994l.297.006h.25v5.835a1.085 1.085 0 01-1.752.856l-.098-.086L9.55 21H2.355a1.855 1.855 0 01-1.85-1.71L.5 19.145V11.5h4.855zM19.5 10.06l3.995 2.345v1.83l-2.5-.625v6.255c0 1.95-1.378 2.362-2.27 2.353l-.19-.008c-1.35-.11-2.43-1.055-2.415-2.155.015-1.1 1.12-1.92 2.47-1.83.235.015.466.059.69.13l.22.08V10.06zM8.524 2.259a7.245 7.245 0 0111.918 6.324l-.037.272L18 7.445v5.775A7.245 7.245 0 118.524 2.259zM11.5 5.17v5.33l4.615-2.665L11.5 5.17z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.355 11.5c.204.424.44.832.705 1.216l.205.284H2v6.145c0 .17.122.314.284.348l.071.007h7.815L12 21.33V16.4c.41.06.825.1 1.255.105l.25-.015v5.85a1.081 1.081 0 01-1.753.852l-.097-.087L9.55 21H2.355a1.854 1.854 0 01-1.85-1.71L.5 19.145V11.5h4.855zM19.5 10.06l4 2.345v1.83l-2.51-.635v6.255c0 1.955-1.378 2.367-2.27 2.358l-.19-.008c-1.345-.11-2.425-1.055-2.41-2.155.02-1.1 1.12-1.92 2.47-1.83.24.019.474.066.695.134l.215.076v-8.37zM13.25.5a7.249 7.249 0 017.25 7.25c0 .281-.023.56-.057.833l-.038.272-1.42-.835c.005-.09.015-.18.015-.27C19 4.58 16.42 2 13.25 2S7.5 4.58 7.5 7.75s2.58 5.75 5.75 5.75a5.75 5.75 0 004.611-2.32l.139-.195v2.235A7.224 7.224 0 0113.25 15 7.249 7.249 0 016 7.75 7.249 7.249 0 0113.25.5zM11.5 5.17l4.615 2.665L11.5 10.5V5.17z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentDigitalMedia.style = iconCss;




/***/ })

};
;