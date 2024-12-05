"use strict";
exports.id = 1167;
exports.ids = [1167];
exports.modules = {

/***/ 61167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_add_card: () => (/* binding */ ActionAddCard)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionAddCard = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.5 10a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zm0 1.75a.75.75 0 01.743.648l.007.102v1.75H20a.75.75 0 01.102 1.493L20 17.25h-1.75V19a.75.75 0 01-1.493.102L16.75 19v-1.75H15a.75.75 0 01-.102-1.493L15 15.75h1.75V14a.75.75 0 01.75-.75zM21 7.5v1.815a8 8 0 00-3.5-.815 8 8 0 00-7.671 5.75l-.069.25H4a3 3 0 01-2.995-2.824L1 11.5v-4h20zM18 1a3 3 0 012.995 2.824L21 4v1H1V4a3 3 0 012.824-2.995L4 1h14z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.5 10c3.6 0 6.5 2.9 6.5 6.5S21.1 23 17.5 23 11 20.1 11 16.5s2.9-6.5 6.5-6.5zm0 3.25a.772.772 0 00-.743.651L16.75 14v1.75H15c-.4 0-.75.35-.75.75 0 .367.294.691.651.743l.099.007h1.75V19c0 .4.35.75.75.75a.772.772 0 00.743-.651L18.25 19v-1.75H20c.4 0 .75-.35.75-.75a.772.772 0 00-.651-.743L20 15.75h-1.75V14c0-.4-.35-.75-.75-.75zM18 1a3.01 3.01 0 012.995 2.824L21 4v5.3c-.4-.2-.8-.336-1.2-.46l-.3-.09V7.5h-17v4c0 .8.576 1.423 1.352 1.493L4 13h6.3c-.2.4-.336.8-.46 1.2l-.09.3H4a3.01 3.01 0 01-2.995-2.824L1 11.5V4a3.01 3.01 0 012.824-2.995L4 1h14zm0 1.5H4c-.8 0-1.423.576-1.493 1.352L2.5 4v1h17V4c0-.8-.576-1.423-1.352-1.493L18 2.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionAddCard.style = iconCss;




/***/ })

};
;