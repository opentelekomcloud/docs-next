"use strict";
exports.id = 3414;
exports.ids = [3414];
exports.modules = {

/***/ 33414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_switch_users: () => (/* binding */ UserFileSwitchUsers)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileSwitchUsers = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18 18.65v1.85h2.75c.4 0 .75.35.75.75a.772.772 0 01-.651.743L20.75 22H18v1.85l-4-2.6 4-2.6zM7.1 15.5l2.9 2.9 2.85-2.9h2c-.3.45-.45 1.05-.3 1.7.089.489.375.899.719 1.23l.131.12L13.15 20H.6l.15-.8a4.402 4.402 0 014.136-3.695L5.1 15.5h2zm12.4-1.35l4 2.6-4 2.6V17.5h-2.75c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L16.75 16h2.75v-1.85zM10 2.25c3.2 0 5.55 2.35 5.55 5.55 0 3.1-2.25 6.45-5.55 6.45S4.45 10.9 4.45 7.8c0-3.2 2.35-5.55 5.55-5.55z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18 18.65v1.85h2.75c.4 0 .75.35.75.75a.772.772 0 01-.651.743L20.75 22H18v1.85l-4-2.6 4-2.6zM7.1 15.5l2.9 2.9 2.85-2.9h2c-.3.45-.45 1.05-.3 1.7.089.489.375.899.719 1.23l.131.12L13.15 20H.6l.15-.8a4.402 4.402 0 014.136-3.695L5.1 15.5h2zm12.4-1.35l4 2.6-4 2.6V17.5h-2.75c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L16.75 16h2.75v-1.85zM10 2.25c3.2 0 5.55 2.35 5.55 5.55 0 3.1-2.25 6.45-5.55 6.45S4.45 10.9 4.45 7.8c0-3.2 2.35-5.55 5.55-5.55zm0 1.5c-2.35 0-4.05 1.7-4.05 4.05 0 2.4 1.65 4.95 4.05 4.95s4.05-2.55 4.05-4.95c0-2.35-1.7-4.05-4.05-4.05z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileSwitchUsers.style = iconCss;




/***/ })

};
;