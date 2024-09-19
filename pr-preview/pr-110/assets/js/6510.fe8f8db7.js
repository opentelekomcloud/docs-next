"use strict";
exports.id = 6510;
exports.ids = [6510];
exports.modules = {

/***/ 66510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_mobile_data: () => (/* binding */ DeviceMobileData)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceMobileData = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.5.5a3 3 0 012.995 2.824l.005.176v3.001l-4.906.006-.17.024A1.75 1.75 0 009.75 10h4.194l-8.02 5.25 8.556 5.6a3 3 0 01-2.804 2.645l-.176.005h-8a3 3 0 01-2.995-2.824L.5 20.5v-17A3 3 0 013.324.505L3.5.5h8zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zm7-7.918V14.5h6.25a.75.75 0 01.102 1.493L20.75 16H14.5v3.668L7.75 15.25l6.75-4.418zm1.5-7l6.75 4.418L16 12.668V9H9.75a.75.75 0 01-.102-1.493L9.75 7.5H16V3.832zM9.5 2.25v1h-4v-1h4z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.5.5a3 3 0 012.995 2.824l.005.176V6H13V3.5c0-.778-.596-1.42-1.356-1.493L11.5 2h-2v1.5h-4V2h-2c-.778 0-1.42.596-1.493 1.356L2 3.5v17c0 .778.596 1.42 1.356 1.493L3.5 22h8c.778 0 1.42-.596 1.493-1.356L13 20.48l1.37.896a3.002 3.002 0 01-2.678 2.119l-.192.006h-8a3 3 0 01-2.995-2.824L.5 20.5v-17A3 3 0 013.324.505L3.5.5h8zm-4 18a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm7-7.668V14.5h6.25a.75.75 0 01.102 1.493L20.75 16H14.5v3.668L7.75 15.25l6.75-4.418zm1.5-7l6.75 4.418L16 12.668V9H9.75a.75.75 0 01-.102-1.493L9.75 7.5H16V3.832z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceMobileData.style = iconCss;




/***/ })

};
;