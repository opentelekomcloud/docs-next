"use strict";
exports.id = 1803;
exports.ids = [1803];
exports.modules = {

/***/ 31803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_half_rating: () => (/* binding */ ContentHalfRating)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentHalfRating = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M11.997 1.501c.652 0 1.237.362 1.53.934l.062.136 2.064 5.062 5.452.398c.7.052 1.293.516 1.51 1.184.2.616.04 1.28-.408 1.735l-.118.11-4.175 3.527 1.304 5.308a1.715 1.715 0 01-.659 1.802 1.712 1.712 0 01-1.777.149l-.14-.079-4.645-2.881-4.646 2.881a1.716 1.716 0 01-2.604-1.725l.03-.146 1.304-5.309-4.176-3.527a1.714 1.714 0 01-.526-1.845 1.712 1.712 0 011.362-1.166l.148-.018 5.452-.399 2.064-5.061c.265-.65.89-1.07 1.592-1.07zm0 1.5a.205.205 0 00-.171.079l-.033.058L9.378 9.06l-6.38.468a.206.206 0 00-.193.151.206.206 0 00.023.186l.045.049 4.886 4.127-1.527 6.212c-.029.119.03.19.084.23.044.032.107.06.184.037l.06-.028 5.436-3.372V3.002z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.613 9.215a1.713 1.713 0 00-1.51-1.184l-5.451-.399-2.064-5.061a1.713 1.713 0 00-1.592-1.07c-.703 0-1.327.42-1.593 1.07L8.34 7.633l-5.452.398c-.7.052-1.292.516-1.51 1.184a1.712 1.712 0 00.526 1.845l4.176 3.527-1.304 5.308a1.715 1.715 0 00.658 1.802c.568.413 1.321.44 1.918.07l4.644-2.881 4.646 2.881a1.716 1.716 0 002.575-1.871l-1.305-5.309 4.176-3.527a1.714 1.714 0 00.526-1.845zm-1.494.699l-4.886 4.127 1.527 6.212c.03.119-.03.19-.084.23a.203.203 0 01-.244.009l-5.436-3.372V3.002c.067 0 .156.024.203.137l2.416 5.922 6.38.468a.206.206 0 01.192.151.206.206 0 01-.068.235z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentHalfRating.style = iconCss;




/***/ })

};
;