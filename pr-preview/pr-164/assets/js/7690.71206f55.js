"use strict";
exports.id = 7690;
exports.ids = [7690];
exports.modules = {

/***/ 47690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_face_mask: () => (/* binding */ ContentFaceMask)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentFaceMask = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 4.75c3.257 0 5 2.25 8.499 2.25.162 0 .318-.004.466-.004.954 0 1.805.026 2.407.62.563.556.628 1.368.628 1.968 0 6.48-5.093 6.224-5.21 6.28-.925 1.348-2.31 2.325-4.376 3.111a6.791 6.791 0 01-4.828 0c-2.066-.786-3.451-1.763-4.376-3.112-.101-.048-5.21.229-5.21-6.279 0-.6.065-1.412.629-1.968.602-.594 1.422-.62 2.407-.62.148 0 .303.004.465.004C7.001 7 8.744 4.75 12 4.75zm-3.671 8.415a.75.75 0 00.336 1.006l.013.006.066.03c.317.144 1.546.643 3.256.643 1.954 0 3.28-.652 3.336-.679a.749.749 0 00.335-1.002.752.752 0 00-1.003-.341c-.011.005-1.087.522-2.668.522-1.581 0-2.656-.517-2.664-.521a.751.751 0 00-1.007.335zM3.514 8.5c-.989 0-1.56-.028-1.811.192-.17.148-.203.392-.203.892 0 2.645.966 4.204 2.87 4.651-.554-1.494-.793-3.36-.856-5.735zm17.566 0h-.594c-.062 2.374-.301 4.241-.856 5.735 1.904-.447 2.87-2.006 2.87-4.651 0-.542-.033-.789-.239-.928-.204-.138-.586-.156-1.181-.157zM12 9.25c-1.822 0-3.846.501-3.932.522a.75.75 0 00.364 1.455c.019-.005 1.934-.478 3.568-.478 1.78 0 3.517.5 3.75.5a.75.75 0 00.182-1.477c-.026-.006-.236-.058-.567-.127l-.27-.054C14.319 9.44 13.12 9.25 12 9.25z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 4.75c3.257 0 5 2.25 8.499 2.25.162 0 .318-.004.466-.004.954 0 1.805.026 2.407.62.563.556.628 1.368.628 1.968 0 6.48-5.093 6.224-5.21 6.28-.925 1.348-2.31 2.325-4.376 3.111a6.791 6.791 0 01-4.828 0c-2.067-.786-3.451-1.763-4.377-3.112C5.11 15.816 0 16.093 0 9.585c0-.6.065-1.412.628-1.968.602-.594 1.423-.62 2.407-.62.148 0 .304.004.466.004C7.001 7 8.743 4.75 12 4.75zm0 1.5c-1.284 0-2.305.448-3.486.968-1.016.446-2.132.937-3.499 1.16.14 5.841 1.276 7.739 5.105 9.195a5.27 5.27 0 001.88.345c.647 0 1.28-.116 1.88-.345 3.829-1.456 4.965-3.354 5.104-9.195-1.366-.223-2.483-.714-3.498-1.16-1.181-.52-2.202-.968-3.486-.968zm-3.671 6.915a.751.751 0 011.006-.336c.008.004 1.084.521 2.665.521s2.657-.517 2.668-.522a.749.749 0 01.668 1.343c-.056.027-1.382.679-3.336.679-1.71 0-2.939-.499-3.256-.642l-.066-.03-.014-.008a.75.75 0 01-.335-1.005zM3.514 8.5c-.989 0-1.56-.028-1.811.192-.17.148-.203.392-.203.892 0 2.645.966 4.204 2.87 4.651-.555-1.494-.794-3.36-.856-5.735zm17.566 0h-.594c-.063 2.374-.302 4.241-.856 5.735 1.904-.447 2.87-2.006 2.87-4.651 0-.542-.033-.789-.239-.928-.204-.138-.586-.156-1.181-.157zM12 9.25c1.12 0 2.319.19 3.095.34l.27.055c.33.069.54.12.567.127a.75.75 0 01-.181 1.477c-.234 0-1.97-.5-3.751-.5-1.633 0-3.55.473-3.569.478a.75.75 0 01-.363-1.455c.085-.021 2.11-.522 3.932-.522z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentFaceMask.style = iconCss;




/***/ })

};
;