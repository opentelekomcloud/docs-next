"use strict";
exports.id = 5118;
exports.ids = [5118];
exports.modules = {

/***/ 25118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_available_keychain: () => (/* binding */ ContentAvailableKeychain)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentAvailableKeychain = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.883 12.822a.749.749 0 00-1.06 0l-3.218 3.217-1.341-1.34a.749.749 0 10-1.06 1.06l2.4 2.401 4.279-4.279a.749.749 0 000-1.06zM8.436 5.995a.96.96 0 101.92-.002.96.96 0 00-1.92.002zm7.667.183V19.89a2.875 2.875 0 01-2.875 2.874H5.562a2.875 2.875 0 01-2.875-2.875V6.18l6.708-4.976 6.708 4.975zm5.848 12.544l-4.38 1.671c.02-.166.031-.333.031-.504V5.423l-.606-.45-4.458-3.306 6.078 1.704 4.698 12.302a2.362 2.362 0 01-1.364 3.048z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M7.264 14.698a.75.75 0 10-1.061 1.061l2.4 2.402 4.28-4.279a.75.75 0 00-1.06-1.06l-3.22 3.216-1.34-1.34zm1.173-8.704a.959.959 0 101.917 0 .959.959 0 00-1.917 0zm6.166 13.896c0 .757-.618 1.374-1.375 1.374H5.562a1.376 1.376 0 01-1.375-1.375V6.933L9.393 3.07l5.208 3.863V19.89zM2.687 6.177V19.89a2.875 2.875 0 002.875 2.875h7.666a2.875 2.875 0 002.875-2.875V6.18l-6.71-4.976-6.707 4.975zm20.627 9.495l-4.7-12.301-6.078-1.704 3.377 2.505 1.57.44 4.428 11.596a.863.863 0 01-.497 1.113l-3.813 1.455v1.113c0 .171-.013.34-.032.505l4.38-1.672a2.36 2.36 0 001.363-3.049z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentAvailableKeychain.style = iconCss;




/***/ })

};
;