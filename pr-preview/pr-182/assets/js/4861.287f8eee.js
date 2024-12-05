"use strict";
exports.id = 4861;
exports.ids = [4861];
exports.modules = {

/***/ 54861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_id_card: () => (/* binding */ UserFileIdCard)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileIdCard = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M.5 3.5v14a3 3 0 003 3h17a3 3 0 003-3v-14H.5zm7.755 4.47a2 2 0 012.08 2.095c0 1.265-.875 2.5-2.08 2.5s-2.085-1.225-2.085-2.5A2 2 0 018.255 7.97zM4.5 15.47l.13-.72a1.665 1.665 0 011.64-1.365h.815L8.25 14.55l1.16-1.165h.815a1.665 1.665 0 011.64 1.365l.135.72H4.5zM19.25 14h-5a.75.75 0 110-1.5h5a.75.75 0 110 1.5zm0-3h-5a.75.75 0 110-1.5h5a.75.75 0 110 1.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M23.5 3.5v14a3.01 3.01 0 01-2.824 2.995l-.176.005h-17a3.01 3.01 0 01-2.995-2.824L.5 17.5v-14h23zM22 5H2v12.5c0 .8.576 1.423 1.352 1.493L3.5 19h17c.8 0 1.423-.576 1.493-1.352L22 17.5V5zM7.15 13.5l1.15 1.1 1.1-1.1h.75c.703 0 1.318.483 1.516 1.162l.034.138.1.7H4.7l.15-.7c.14-.703.72-1.23 1.41-1.294l.14-.006h.75zm12.1-1c.4 0 .75.35.75.75a.772.772 0 01-.651.743L19.25 14h-5c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h5zm-11-4.45c1.15 0 2.1.85 2.1 2.1s-.9 2.5-2.1 2.5c-1.2 0-2.1-1.25-2.1-2.5s.95-2.1 2.1-2.1zm11 1.45c.4 0 .75.35.75.75a.772.772 0 01-.651.743L19.25 11h-5c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileIdCard.style = iconCss;




/***/ })

};
;