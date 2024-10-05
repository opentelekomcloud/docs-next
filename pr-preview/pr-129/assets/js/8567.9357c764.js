"use strict";
exports.id = 8567;
exports.ids = [8567];
exports.modules = {

/***/ 28567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_news: () => (/* binding */ ContentNews)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentNews = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.5 3v15.5a3 3 0 01-3 3h-15a3 3 0 01-3-3V3h21zm-4.75 13h-4a.75.75 0 000 1.5h4a.75.75 0 100-1.5zM11 11H5.5v6.5H11V11zm6.75 2.5h-4a.75.75 0 100 1.5h4a.75.75 0 100-1.5zm0-2.5h-4a.75.75 0 000 1.5h4a.75.75 0 100-1.5zm.75-4h-13v2h13V7z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.5 3v15.5a3.01 3.01 0 01-2.824 2.995l-.176.005h-15a3.01 3.01 0 01-2.995-2.824L1.5 18.5V3h21zM21 4.5H3v14c0 .8.576 1.423 1.352 1.493L4.5 20h15c.8 0 1.423-.576 1.493-1.352L21 18.5v-14zM17.75 16c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-4c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L13.75 16h4zM11 11v6.5H5.5V11H11zm6.75 2.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L17.75 15h-4c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h4zm0-2.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007h-4c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L13.75 11h4zm.75-4v2h-13V7h13z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentNews.style = iconCss;




/***/ })

};
;