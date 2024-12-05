"use strict";
exports.id = 5948;
exports.ids = [5948];
exports.modules = {

/***/ 45948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_home_smarthome: () => (/* binding */ HomeSmarthome)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeSmarthome = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M.45 12.45L1.5 13.5 12 3l10.5 10.5 1.05-1.05L12 .85.45 12.45zM3.5 13.6V19l.005.175A3.01 3.01 0 006.5 22h11l.175-.005A3.01 3.01 0 0020.5 19v-5.4L12 5.1l-8.5 8.5zm4.7-1.75c0-.746.493-1.35 1.1-1.35.608 0 1.1.604 1.1 1.35 0 .746-.492 1.35-1.1 1.35-.607 0-1.1-.604-1.1-1.35zm4.5 0c0-.27.203-.54.498-.591l.102-.009h1.75c.3 0 .6.3.6.6 0 .27-.203.54-.498.592l-.102.008H13.3c-.3 0-.6-.3-.6-.6zm-1.3 5c1.432 0 2.636-.82 3.221-2.068l.079-.182c.091-.273.429-.463.716-.383l.084.033c.3.1.5.5.35.8-.75 1.8-2.5 3-4.45 3-.7 0-1.35-.15-1.95-.4-.3-.1-.45-.5-.3-.8.091-.273.43-.421.716-.333l.084.033c.434.173.83.31 1.254.31.065 0 .13-.004.196-.01z", id: "a" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("use", { xlinkHref: "#a", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19 12.1l1.5 1.5V19a3.01 3.01 0 01-2.824 2.995L17.5 22h-11a3.01 3.01 0 01-2.995-2.824L3.5 19v-5.4L5 12.1V19c0 .8.576 1.423 1.352 1.493l.148.007h11c.8 0 1.423-.576 1.493-1.352L19 19v-6.9zm-4.38 2.681l.08-.181c.09-.273.43-.463.716-.382l.084.032c.3.1.5.5.35.8-.75 1.8-2.5 3-4.45 3-.7 0-1.35-.15-1.95-.4-.3-.1-.45-.5-.3-.8.09-.273.43-.421.716-.334l.084.034c.5.2.95.35 1.45.3 1.432 0 2.636-.82 3.22-2.069zM12 .85l11.55 11.6-1.05 1.05L12 3 1.5 13.5.45 12.45 12 .85zM9.3 10.5c.608 0 1.1.604 1.1 1.35 0 .746-.492 1.35-1.1 1.35-.608 0-1.1-.604-1.1-1.35 0-.746.492-1.35 1.1-1.35zm5.75.75c.3 0 .6.3.6.6 0 .27-.203.54-.498.591l-.102.009H13.3c-.3 0-.6-.3-.6-.6 0-.27.203-.54.498-.591l.102-.009h1.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
HomeSmarthome.style = iconCss;




/***/ })

};
;