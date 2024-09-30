"use strict";
exports.id = 3074;
exports.ids = [3074];
exports.modules = {

/***/ 93074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_zoom_in: () => (/* binding */ ActionZoomIn)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionZoomIn = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21.385 19.615l-4.92-4.915a8 8 0 10-1.765 1.765l4.915 4.92c.49.487 1.28.487 1.77 0a1.26 1.26 0 000-1.77zM10.75 13a.75.75 0 11-1.5 0v-2.25H7a.75.75 0 110-1.5h2.25V7a.75.75 0 011.5 0v2.25H13a.75.75 0 110 1.5h-2.25V13z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10 2c4.42 0 8 3.58 8 8 0 1.65-.505 3.177-1.36 4.445l-.175.25 4.92 4.92c.485.49.485 1.28.005 1.77a1.245 1.245 0 01-.885.365c-.274 0-.549-.088-.776-.268l-.109-.097-4.92-4.92A7.961 7.961 0 0110 18c-4.42 0-8-3.58-8-8s3.58-8 8-8zm0 1.5A6.506 6.506 0 003.5 10c0 3.585 2.915 6.5 6.5 6.5s6.5-2.915 6.5-6.5-2.915-6.5-6.5-6.5zm0 2.75c.38 0 .694.281.743.648L10.75 7v2.25H13a.749.749 0 01.102 1.493L13 10.75h-2.25V13a.749.749 0 01-1.493.102L9.25 13v-2.25H7a.749.749 0 01-.102-1.493L7 9.25h2.25V7c0-.415.335-.75.75-.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionZoomIn.style = iconCss;




/***/ })

};
;