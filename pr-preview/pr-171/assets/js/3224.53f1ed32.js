"use strict";
exports.id = 3224;
exports.ids = [3224];
exports.modules = {

/***/ 13224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_disabled_microphone: () => (/* binding */ ActionDisabledMicrophone)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionDisabledMicrophone = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.25 9.5a.75.75 0 01.743.648L6 10.25V12a6 6 0 008.097 5.622l.243-.097 1.125 1.12a7.5 7.5 0 01-2.36.77l-.355.045v4.04h-1.5v-4.04a7.5 7.5 0 01-6.746-7.21L4.5 12v-1.75a.75.75 0 01.75-.75zM2.863 2.863a.75.75 0 01.949-.092l.093.074 17.25 17.25a.745.745 0 010 1.06.75.75 0 01-.976.073l-.084-.073-17.25-17.25a.75.75 0 01.018-1.042zM7.5 10.68l5.66 5.665A4.67 4.67 0 0112 16.5a4.5 4.5 0 01-4.495-4.288L7.5 12v-1.32zM18.75 9.5a.75.75 0 01.743.648l.007.102V12a7.435 7.435 0 01-.731 3.171l-.149.294-1.12-1.125a6 6 0 00.49-2.038L18 12v-1.75a.75.75 0 01.75-.75zM12.104.539l.212.01a4.5 4.5 0 014.177 4.239L16.5 5v7a4.67 4.67 0 01-.089.874l-.066.286L7.55 4.37A4.5 4.5 0 0112.104.539z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.25 9.5c.367 0 .691.294.743.651L6 10.25V12c0 3.3 2.7 6 6 6 .744 0 1.41-.115 2.069-.378l.281-.122 1.1 1.15c-.7.35-1.515.623-2.344.753l-.356.047v4.05h-1.5v-4.05c-3.72-.343-6.624-3.415-6.746-7.202L4.5 12v-1.75c0-.4.35-.75.75-.75zm-2.4-6.65a.722.722 0 01.965-.074l.085.074L21.15 20.1c.3.3.3.75 0 1.05a.722.722 0 01-.965.074l-.085-.074L2.85 3.9c-.3-.3-.3-.75 0-1.05zM7.5 10.7L9 12.2a3.012 3.012 0 002.621 2.783L11.8 15l1.35 1.35c-.35.1-.75.15-1.15.15a4.48 4.48 0 01-4.495-4.287L7.5 12v-1.3zm11.25-1.2c.367 0 .691.294.743.651l.007.099V12c0 1.146-.252 2.25-.756 3.196l-.144.254-1.1-1.1a5.26 5.26 0 00.493-2.036L18 12v-1.75c0-.4.35-.75.75-.75zM12 .5a4.48 4.48 0 014.495 4.287L16.5 5v7c0 .32-.032.64-.096.934l-.054.216L15 11.8V5c0-1.65-1.35-3-3-3a3.01 3.01 0 00-2.995 2.824L9 5v.8L7.55 4.35C7.85 2.2 9.75.5 12 .5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionDisabledMicrophone.style = iconCss;




/***/ })

};
;