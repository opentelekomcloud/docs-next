"use strict";
exports.id = 8924;
exports.ids = [8924];
exports.modules = {

/***/ 68924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_recipient: () => (/* binding */ CommunicationRecipient)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationRecipient = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19.885 15.476l-.085.074-2.8 2.8-1.4-1.4c-.3-.3-.75-.3-1.05 0a.722.722 0 00-.075.965l.075.085L17 20.5l3.9-3.9c.3-.3.25-.75-.05-1.05a.723.723 0 00-.965-.074M17.75 22.5A4.756 4.756 0 0113 17.75 4.756 4.756 0 0117.75 13a4.756 4.756 0 014.75 4.75 4.756 4.756 0 01-4.75 4.75m0-11c-3.45 0-6.25 2.8-6.25 6.25S14.3 24 17.75 24 24 21.2 24 17.75s-2.8-6.25-6.25-6.25m0-1.5c.421 0 .831.043 1.233.108.003 0 .015-.008.017-.008V5.87l-7.3 6.23c-.65.55-1.4.8-2.2.8a3.315 3.315 0 01-2.021-.657L7.3 12.1 0 5.87v8.68l.005.16C.088 15.988 1.156 17 2.5 17h7.538c.378-3.922 3.691-7 7.712-7m-7.185 1.056l.135-.106L19 3.932V3H0v.923l8.25 7.027c.656.563 1.62.598 2.315.106", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.75 11.5c3.45 0 6.25 2.8 6.25 6.25S21.2 24 17.75 24s-6.25-2.8-6.25-6.25 2.8-6.25 6.25-6.25zm3.1 4.05a.722.722 0 00-.965-.074l-.085.074-2.8 2.8-1.4-1.4c-.3-.3-.75-.3-1.05 0a.722.722 0 00-.074.965l.074.085L17 20.5l3.9-3.9c.3-.3.25-.75-.05-1.05zM19 3v7.1c-.3-.037-.6-.075-.921-.091L17.75 10h-.25V7.15l-5.8 4.95c-.65.55-1.4.8-2.2.8a3.317 3.317 0 01-2.02-.657L7.3 12.1 1.5 7.15v7.4c0 .464.388.885.884.943l.116.007h7.85c-.112.375-.197.75-.253 1.125L10.05 17H2.5C1.156 17 .088 15.986.005 14.71L0 14.55V3h19zm-1.5 1.5h-16v.7l6.75 5.75c.656.563 1.62.598 2.315.105l.135-.105 6.8-5.75v-.7z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationRecipient.style = iconCss;




/***/ })

};
;