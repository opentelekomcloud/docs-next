"use strict";
exports.id = 6071;
exports.ids = [6071];
exports.modules = {

/***/ 66071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_thumbs_down: () => (/* binding */ ActionThumbsDown)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionThumbsDown = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M13.03 2l3.225.005c1.215 0 2.315.455 2.94 1.22.36.44.55.97.555 1.53.97.745 1.43 1.935 1.185 3.06.825.86 1.09 1.985.72 3.055.505.79.58 1.8.175 2.735a3.088 3.088 0 01-2.87 1.895h-3.625a.251.251 0 00-.25.285l.525 4.01c.155 1.19-.505 2.26-1.605 2.6-.225.07-.45.105-.675.105-.835 0-1.6-.475-2.025-1.31-.37-.735-.555-1.135-1.32-2.86-1.055-2.395-2.09-4.125-3.485-4.655V15.5H2V4h2.555c2.87 0 3.43-.62 3.615-.67.71-.4 2.385-1.33 4.845-1.33h.015zM5 5.5H3.5V14H5V5.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21.655 10.87c.37-1.07.105-2.195-.72-3.055.245-1.125-.215-2.315-1.185-3.06a2.427 2.427 0 00-.555-1.53c-.625-.765-1.725-1.22-2.94-1.22L13.03 2h-.015c-2.46 0-4.135.93-4.845 1.33-.185.05-.745.67-3.615.67H2v11.5h4.5v-1.825c1.395.53 2.43 2.26 3.485 4.655.765 1.725.95 2.125 1.32 2.86.425.835 1.19 1.31 2.025 1.31.225 0 .45-.035.675-.105 1.1-.34 1.76-1.41 1.605-2.6l-.525-4.01a.251.251 0 01.25-.285h3.625a3.088 3.088 0 002.87-1.895c.405-.935.33-1.945-.175-2.735zm-1.205 2.14c-.205.48-.705.99-1.49.99h-3.625c-.51 0-.99.22-1.32.605-.335.385-.48.89-.41 1.385l.525 4c.075.57-.255.88-.56.975-.14.04-.62.14-.92-.455-.36-.71-.53-1.075-1.285-2.79-1.095-2.46-2.455-5.07-4.865-5.61V5.4c1.555-.2 2.325-.73 2.4-.76.665-.37 2.045-1.145 4.115-1.145h.01l3.225.005c.76 0 1.445.26 1.785.675.325.395.215.705.085 1.35.555.305.945.475 1.215 1.02.335.67.095 1.1-.18 1.735.54.425.97.715 1.12 1.31.135.525-.045.84-.4 1.515.22.225 1.04.835.575 1.905z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionThumbsDown.style = iconCss;




/***/ })

};
;