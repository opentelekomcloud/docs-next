"use strict";
exports.id = 2219;
exports.ids = [2219];
exports.modules = {

/***/ 2219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_hour_glass: () => (/* binding */ ContentHourGlass)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentHourGlass = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M13.493 9.332c-.396.444-.698.77-.924 1.008a.78.78 0 01-1.13.006 44.54 44.54 0 01-.929-1.011L8.119 6.662c1.207.219 2.556.38 3.923.38 1.366 0 2.633-.161 3.84-.38l-2.389 2.67zm3.626 9.388a1.5 1.5 0 01.382 1v.78h-11v-.78c0-.37.135-.725.381-1 1.214-1.356 3.4-3.048 5.119-3.048 1.718 0 3.862 1.645 5.118 3.048zm2.235-11.438a4.496 4.496 0 001.147-3.001V.5h-17v3.78c0 1.107.407 2.176 1.146 3l3.626 4.053a1 1 0 010 1.333l-3.626 4.052a4.499 4.499 0 00-1.146 3v.781a3 3 0 003 3h11a3 3 0 003-3v-.78a4.496 4.496 0 00-1.147-3l-3.625-4.053a1 1 0 010-1.334l3.625-4.052z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.042 7.041c-1.367 0-2.715-.161-3.922-.378l2.39 2.671c.395.441.7.77.929 1.011a.778.778 0 001.13-.005c.226-.238.527-.565.924-1.009l2.389-2.669c-1.207.218-2.473.379-3.84.379zm-5.16 11.678a1.5 1.5 0 00-.381 1v.781h11v-.781a1.5 1.5 0 00-.382-1c-1.255-1.403-3.4-3.048-5.118-3.048-1.72 0-3.905 1.692-5.118 3.048zm7.73-5.052l3.625 4.052a3 3 0 01.764 2v.781c0 .827-.674 1.5-1.5 1.5h-11c-.828 0-1.5-.673-1.5-1.5v-.781c0-.739.27-1.449.763-2l3.626-4.052c.85-.951.85-2.384 0-3.334L5.764 6.281a2.995 2.995 0 01-.764-2V2h14v2.281a3 3 0 01-.764 2l-3.626 4.052c-.85.95-.85 2.384.002 3.334zm4.742-6.386a4.496 4.496 0 001.147-3V.5h-17v3.781c0 1.106.408 2.175 1.146 3l3.626 4.052c.339.379.339.954 0 1.334l-3.626 4.052a4.5 4.5 0 00-1.146 3v.781a3 3 0 003 3h11a3 3 0 003-3v-.781a4.497 4.497 0 00-1.147-3l-3.625-4.052a1.002 1.002 0 010-1.334l3.625-4.052z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentHourGlass.style = iconCss;




/***/ })

};
;