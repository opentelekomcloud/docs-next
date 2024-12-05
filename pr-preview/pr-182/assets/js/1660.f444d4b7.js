"use strict";
exports.id = 1660;
exports.ids = [1660];
exports.modules = {

/***/ 81660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_random: () => (/* binding */ ActionRandom)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionRandom = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2.674 4.163A6.147 6.147 0 017.45 6.451l.161.21 6.858 9.257c.65.867 1.648 1.4 2.722 1.463l.216.007h.715v-2.302l5.388 3.526-5.388 3.527v-2.302h-.715a6.147 6.147 0 01-4.775-2.288l-.162-.21-6.857-9.257A3.678 3.678 0 002.89 6.619l-.216-.007h-.98A1.224 1.224 0 011.57 4.17l.126-.007h.98zm5.246 8.66l1.528 2.057-1.837 2.478a6.147 6.147 0 01-4.658 2.473l-.264.006h-.98a1.224 1.224 0 01-.125-2.443l.125-.006h.98a3.684 3.684 0 002.804-1.3l.135-.17 2.292-3.095zM18.122 1.86l5.388 3.527-5.388 3.526V6.612h-.73a3.681 3.681 0 00-2.803 1.3l-.135.17-2.253 3.095-1.528-2.057 1.836-2.478a6.147 6.147 0 014.636-2.472l.262-.007h.715V1.861z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2.23 4.5c1.729 0 3.376.79 4.466 2.125l.159.205 7 9.45a4.28 4.28 0 003.18 1.713l.235.007H18v-2.85l5.5 3.6-5.5 3.6V19.5h-.735a5.768 5.768 0 01-4.461-2.125l-.159-.205-7-9.45a4.28 4.28 0 00-3.18-1.713L2.23 6h-.98a.749.749 0 01-.102-1.493L1.25 4.5h.98zm5.65 8.76l.935 1.26-1.965 2.65a5.768 5.768 0 01-4.361 2.324l-.259.006h-.98a.749.749 0 01-.102-1.493L1.25 18h.98c1.261 0 2.47-.571 3.27-1.535l.145-.185 2.235-3.02zM18 1.65l5.5 3.6-5.5 3.6V6h-.73a4.277 4.277 0 00-3.269 1.535l-.146.185-2.235 3.02-.935-1.26 1.965-2.65a5.768 5.768 0 014.361-2.324l.259-.006H18V1.65z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionRandom.style = iconCss;




/***/ })

};
;