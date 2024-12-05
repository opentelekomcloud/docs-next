"use strict";
exports.id = 9140;
exports.ids = [9140];
exports.modules = {

/***/ 19140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_support_chat: () => (/* binding */ ContentSupportChat)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentSupportChat = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.002 1c5.798 0 10.5 4.701 10.5 10.5S17.8 22 12.002 22c-1.078 0-2.113-.17-3.09-.474l-.365-.12-2.292 1.3a1.74 1.74 0 01-.863.234c-1.034 0-1.94-.952-1.72-2.08l.033-.142.583-2.11A10.452 10.452 0 011.502 11.5c0-5.799 4.701-10.5 10.5-10.5zm0 13.498a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm.1-7.98c-1.882 0-2.824 1.286-2.967 2.642l-.013.156h1.813c.09-.737.511-1.158 1.167-1.158.69 0 1.12.435 1.12 1.135 0 .52-.32.866-.708 1.195l-.475.391c-.472.398-.902.851-.96 1.627l-.008.184v.604h1.748v-.333c0-.466.255-.812.586-1.138l.23-.215.345-.313c.53-.492 1.048-1.085 1.048-2.108 0-1.546-1.23-2.67-2.926-2.67z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1C6.201 1 1.5 5.701 1.5 11.5c0 2.745 1.063 5.236 2.787 7.108l-.583 2.11c-.328 1.189.61 2.222 1.687 2.222.285 0 .58-.073.863-.234l2.292-1.3C9.63 21.786 10.788 22 12 22c5.799 0 10.5-4.701 10.5-10.5S17.799 1 12 1zm0 19.5c-.994 0-1.99-.172-2.96-.51l-.642-.223-2.884 1.635a.249.249 0 01-.244.003.244.244 0 01-.12-.287l.805-2.914-.565-.613A8.971 8.971 0 013 11.5c0-4.963 4.037-9 9-9 4.962 0 9 4.037 9 9 0 4.962-4.038 9-9 9zm.101-13.982c-1.955 0-2.896 1.387-2.98 2.798h1.812c.09-.737.512-1.158 1.168-1.158.69 0 1.119.435 1.119 1.135 0 .624-.46.997-.947 1.392-.591.481-1.203.978-1.203 2.005v.604h1.747v-.333c0-.622.454-1.029.935-1.461.598-.537 1.275-1.144 1.275-2.313 0-1.546-1.23-2.67-2.926-2.67zM12 14.498a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentSupportChat.style = iconCss;




/***/ })

};
;