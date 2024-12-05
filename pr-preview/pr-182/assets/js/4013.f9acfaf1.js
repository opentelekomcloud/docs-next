"use strict";
exports.id = 4013;
exports.ids = [4013];
exports.modules = {

/***/ 24013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_girl: () => (/* binding */ UserFileGirl)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileGirl = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.561 19.006L12 21.447l2.44-2.44h1.674c1.017 0 1.948.395 2.636 1.052.732.697.99 1.413 1.144 2.234l.037.208H4.068c.165-.99.455-1.835 1.347-2.591a3.807 3.807 0 012.239-.896l.232-.007h1.675zM20.576 4.5c.962 2.544-1.409 4.275-3.567 3.954.413.8.643 1.729.643 2.745 0 3.18-2.27 6.585-5.651 6.585-3.38 0-5.652-3.405-5.652-6.585 0-1.016.23-1.946.644-2.745-2.16.321-4.53-1.409-3.569-3.954l.065.06.112.09a2.2 2.2 0 001.238.451 2.1 2.1 0 00.598-.076l.414-.117c.412-.115.83-.185 1.39.119.64.347.935 1.217 1.065 1.795.97-.805 2.244-1.274 3.695-1.274 1.45 0 2.724.469 3.694 1.274.13-.578.424-1.448 1.064-1.795.498-.27.884-.245 1.253-.156l.552.154a2.1 2.1 0 00.598.076 2.2 2.2 0 001.238-.45l.112-.09.064-.06zM12 8.804l-.106.221c-.508.993-1.658 2.415-4.027 2.61.183 2.321 1.796 4.648 4.133 4.648 2.336 0 3.95-2.327 4.133-4.648-2.551-.21-3.688-1.843-4.133-2.83z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.561 19.006L12 21.447l2.44-2.44h1.674c1.017 0 1.948.395 2.636 1.052.732.697.99 1.413 1.144 2.234l.037.208H4.068c.165-.99.455-1.835 1.347-2.591a3.807 3.807 0 012.239-.896l.232-.007h1.675zM20.576 4.5c.962 2.544-1.409 4.275-3.567 3.954.413.8.643 1.729.643 2.745 0 3.18-2.27 6.585-5.651 6.585-3.38 0-5.652-3.405-5.652-6.585 0-1.016.23-1.946.644-2.745-2.16.321-4.53-1.409-3.569-3.954l.065.06.112.09a2.2 2.2 0 001.238.451 2.1 2.1 0 00.598-.076l.414-.117c.412-.115.83-.185 1.39.119.64.347.935 1.217 1.065 1.795.97-.805 2.244-1.274 3.695-1.274 1.45 0 2.724.469 3.694 1.274.13-.578.424-1.448 1.064-1.795.498-.27.884-.245 1.253-.156l.552.154a2.1 2.1 0 00.598.076 2.2 2.2 0 001.238-.45l.112-.09.064-.06zM12 8.804l-.106.221c-.508.993-1.658 2.415-4.027 2.61.183 2.321 1.796 4.648 4.133 4.648 2.336 0 3.95-2.327 4.133-4.648-2.551-.21-3.688-1.843-4.133-2.83z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileGirl.style = iconCss;




/***/ })

};
;