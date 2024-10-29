"use strict";
exports.id = 8495;
exports.ids = [8495];
exports.modules = {

/***/ 88495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_process_processing: () => (/* binding */ ProcessProcessing)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ProcessProcessing = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M1.5 13.215l6.11 2.68-2 1.32a8.255 8.255 0 004.269 2.757l.316.078v.01a1.25 1.25 0 01-.545 2.44 10.765 10.765 0 01-5.927-3.636l-.223-.279-2 1.305v-6.675zm19.394-.404A1.255 1.255 0 0122.5 14.35a10.765 10.765 0 01-3.636 5.927l-.279.223 1.305 2h-6.675l2.685-6.11 1.32 2a8.24 8.24 0 002.835-4.585c.073-.462.396-.845.839-.994zM10.785 1.5l-2.68 6.11-1.32-2a8.24 8.24 0 00-2.835 4.585 1.255 1.255 0 01-1.495.945A1.245 1.245 0 011.5 9.65a10.745 10.745 0 013.636-5.927l.279-.223-1.305-2h6.675zm2.359.37a1.255 1.255 0 011.206-.37 10.78 10.78 0 015.927 3.636l.223.279 2-1.305v6.675l-6.11-2.68 2-1.32a8.24 8.24 0 00-4.269-2.758l-.316-.077a1.255 1.255 0 01-.661-2.08z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M20.55 13.9c.1-.4.5-.65.9-.55.4.1.65.5.5.9-.523 2.233-1.722 4.194-3.427 5.628l-.273.222 1.6 2.4H13.2l2.7-6.15 1.6 2.45c1.5-1.25 2.6-2.95 3.05-4.9zM1.5 13.2l6.15 2.7-2.45 1.6c1.25 1.5 2.95 2.6 4.9 3.05.4.1.65.5.55.85-.1.4-.5.65-.9.55-2.233-.523-4.194-1.722-5.628-3.427L3.9 18.25l-2.4 1.6V13.2zM13.35 2.55c.1-.4.5-.65.9-.55 2.19.476 4.2 1.723 5.595 3.44l.205.26 2.45-1.55v6.65l-6.15-2.7 2.45-1.6c-1.25-1.5-2.95-2.6-4.9-3.05-.4-.1-.65-.5-.55-.9zM10.8 1.5L8.1 7.65 6.5 5.2C5 6.45 3.9 8.15 3.45 10.1A.745.745 0 112 9.75c.476-2.19 1.723-4.2 3.44-5.595l.26-.205L4.1 1.5h6.7z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ProcessProcessing.style = iconCss;




/***/ })

};
;