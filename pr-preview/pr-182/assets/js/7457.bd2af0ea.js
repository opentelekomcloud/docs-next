"use strict";
exports.id = 7457;
exports.ids = [7457];
exports.modules = {

/***/ 27457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_phone_number: () => (/* binding */ CommunicationPhoneNumber)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationPhoneNumber = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M16.05 13.3l-1.7 1.7c-.25.25-.7.3-1 .05-.55-.45-1.4-1.15-2.3-2.05-.9-.9-1.6-1.75-2.05-2.3a.76.76 0 01.05-1l1.7-1.7L7.4 2c-1.1.1-3.45.35-4.7 2.25C1.55 6.1 2.2 8.35 2.4 9c.85 2.35 2.65 5 5.1 7.5 2.5 2.5 5.15 4.3 7.45 5.1.35.1 1.25.4 2.25.4.8 0 1.7-.15 2.5-.65 1.9-1.2 2.15-3.55 2.25-4.7l-5.9-3.35z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M16.05 13.3l-1.7 1.7c-.25.25-.7.3-1 .05-.55-.45-1.4-1.15-2.3-2.05-.9-.9-1.6-1.75-2.05-2.3a.76.76 0 01.05-1l1.7-1.7L7.4 2c-1.1.1-3.45.35-4.7 2.25C1.55 6.1 2.2 8.35 2.4 9c.85 2.35 2.65 5 5.1 7.5 2.5 2.5 5.15 4.3 7.45 5.1.35.1 1.25.4 2.25.4.8 0 1.7-.15 2.5-.65 1.9-1.2 2.15-3.55 2.25-4.7l-5.9-3.35zm2.9 6.7c-1.25.8-3 .3-3.45.15-2.1-.7-4.55-2.4-6.9-4.75-2.3-2.3-4-4.75-4.7-6.9-.15-.5-.65-2.2.15-3.45C4.5 4.3 5.4 3.8 6.65 3.6l2.3 4.05-.95.9c-.8.8-.9 2.1-.15 3 .5.6 1.25 1.5 2.15 2.45.95.95 1.85 1.7 2.45 2.15.9.7 2.2.65 3-.15l.9-.9 4.05 2.3c-.25 1.25-.7 2.15-1.45 2.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationPhoneNumber.style = iconCss;




/***/ })

};
;