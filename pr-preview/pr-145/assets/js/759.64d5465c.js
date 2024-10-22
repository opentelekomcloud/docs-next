"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 90759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_man: () => (/* binding */ UserFileMan)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileMan = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.905 17.5L12 20.595l3.095-3.095h2.265a4.73 4.73 0 014.645 3.757l.04.213.175 1.03H1.78l.175-1.03a4.73 4.73 0 014.468-3.966l.217-.004h2.265zM11.5 2a4.96 4.96 0 014.07 2c1.72.252 2.388 1.705 2.428 4.705L18 9l-.003.22C17.895 12.537 15.512 16 12 16s-5.895-3.464-5.997-6.78L6 8.95l.001-.193c.003-.194.009-.388.019-.583l.026-.39C6.284 4.861 7.529 2 11.5 2zm3.115 4.195l-.117.169-.112.147-.15.182-.184.21C13.34 7.68 11.969 8.836 10 9c.109-.492.14-.998.095-1.5a7.37 7.37 0 01-2.281 1.28l-.314.1V9c0 2.655 1.81 5.5 4.5 5.5 2.62 0 4.404-2.697 4.496-5.29L16.5 9v-.205a8.275 8.275 0 01-1.885-2.6z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.905 17.5L12 20.595l3.095-3.095h2.266a4.734 4.734 0 014.644 3.749l.042.22.172 1.031H1.781l.172-1.031a4.734 4.734 0 014.461-3.964l.224-.005h2.267zM11.5 2c2.127 0 3.396 1.128 4.068 2.014 1.723.24 2.393 1.691 2.434 4.667l.002.292-.006-.009L18 9c0 3.38-2.411 7-6 7-3.26 0-5.548-2.986-5.94-6.067-.117-.917-.051-2.172.1-3.087C6.583 4.279 7.957 2 11.5 2zm3.094 4.204l-.075.11-.093.127-.13.166-.078.095-.184.21c-.708.776-2.077 1.933-4.054 2.097l.036-.174.033-.19.034-.233c.036-.291.058-.634.011-.896l-.153.123-.227.167-.2.137-.234.15a8.116 8.116 0 01-.13.079l-.282.158c-.394.212-.86.417-1.363.55-.062 2.726 1.79 5.62 4.495 5.62 2.746 0 4.598-2.975 4.491-5.706-.61-.574-1.389-1.457-1.897-2.59z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileMan.style = iconCss;




/***/ })

};
;