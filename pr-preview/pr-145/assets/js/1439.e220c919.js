"use strict";
exports.id = 1439;
exports.ids = [1439];
exports.modules = {

/***/ 61439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_sustainable: () => (/* binding */ ContentSustainable)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentSustainable = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.935 8.275c-.175-.045-4.37-1.12-7.32 1.415a7.77 7.77 0 00-2.63 6l-1 1.065v-4.46c0-3.5-1.195-7.855-10.5-10.415L.54 1.62v1c0 7.675 1.46 10.81 9.96 13.655v4.945a.75.75 0 101.5 0v-2.28l2.095-2.26a12.5 12.5 0 001.465.1 8.03 8.03 0 004.925-1.5c2.11-1.585 3-3.47 3-6.29v-.57l-.55-.145z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M15.617 9.691c-2.509 2.16-2.653 5.073-2.632 5.981L12 16.735v-4.44c0-2.173-.46-4.672-3.031-6.867C6.159 3.03 1.991 2.021.538 1.622c0 4.916.263 7.938 2.346 10.359 1.49 1.73 3.868 3.04 7.616 4.293v4.944a.75.75 0 101.5 0v-2.277l2.097-2.262c.5.06.992.099 1.463.099 1.942 0 3.621-.503 4.928-1.487 2.847-2.146 3.006-4.52 3.006-6.87-4.493-1.189-6.994.51-7.877 1.27zm-5.117 5c-3.237-1.121-5.266-2.253-6.522-3.768C2.533 9.18 2.11 6.93 2.047 3.607c2.774.855 4.638 1.87 5.891 2.918 2.562 2.144 2.562 4.428 2.562 5.77v2.396zm9.085-.598c-1.265.954-3.015 1.34-5.095 1.13.05-.964.378-2.907 2.106-4.395 1.777-1.53 4.267-1.378 5.381-1.213-.119 1.98-.837 3.306-2.392 4.479z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentSustainable.style = iconCss;




/***/ })

};
;