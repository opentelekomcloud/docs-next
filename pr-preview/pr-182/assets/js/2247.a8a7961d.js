"use strict";
exports.id = 2247;
exports.ids = [2247];
exports.modules = {

/***/ 62247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_happy_person: () => (/* binding */ CommunicationHappyPerson)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationHappyPerson = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.75 4.75a2.126 2.126 0 100-4.252 2.126 2.126 0 00.002 4.252m7.44-1.426a.925.925 0 00-1.301.138c-.68.838-1.576 1.854-1.828 2.028-1.951 1.341-7.306.664-8.816-.75-.238-.263-1.007-1.756-1.576-2.985a.926.926 0 00-1.679.779c.517 1.116 1.46 3.06 1.977 3.543.609.571 1.55 1.045 2.65 1.39-.086 1.056-.274 3.4-.377 5.04-.111 1.778-.19 4.755-.218 5.953-.012.5.192.983.558 1.324l3.652 3.392a.95.95 0 001.368-1.313l-3.024-3.541.287-3.477 3.36 1.339-.657 4.149a.95.95 0 001.86.379l1.337-5.346a.951.951 0 00-.495-1.079l-3.523-1.774.51-4.441c1.492-.063 2.885-.392 3.854-1.057.597-.411 1.849-1.933 2.218-2.389a.926.926 0 00-.137-1.302", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.75 4.75a2.126 2.126 0 100-4.252 2.126 2.126 0 00.002 4.252m7.44-1.426a.925.925 0 00-1.301.138c-.68.838-1.576 1.854-1.828 2.028-1.951 1.341-7.306.664-8.816-.75-.238-.263-1.007-1.756-1.576-2.985a.926.926 0 00-1.679.779c.517 1.116 1.46 3.06 1.977 3.543.609.571 1.55 1.045 2.65 1.39-.086 1.056-.274 3.4-.377 5.04-.111 1.778-.19 4.755-.218 5.953-.012.5.192.983.558 1.324l3.652 3.392a.95.95 0 001.368-1.313l-3.024-3.541.287-3.477 3.36 1.339-.657 4.149a.95.95 0 001.86.379l1.337-5.346a.951.951 0 00-.495-1.079l-3.523-1.774.51-4.441c1.492-.063 2.885-.392 3.854-1.057.597-.411 1.849-1.933 2.218-2.389a.926.926 0 00-.137-1.302", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationHappyPerson.style = iconCss;




/***/ })

};
;