"use strict";
exports.id = 5290;
exports.ids = [5290];
exports.modules = {

/***/ 15290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_cloud_security: () => (/* binding */ ContentCloudSecurity)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentCloudSecurity = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 9.326a3.623 3.623 0 013.62 3.62V14H17v5.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 017 19.5V14h1.38v-1.055A3.623 3.623 0 0112 9.326zm1.512-7.152a7.595 7.595 0 017.148 4.982 5.759 5.759 0 013.09 5.094 5.754 5.754 0 01-5.256 5.725v-5.342h-1.44A5.072 5.072 0 0012 7.875a5.072 5.072 0 00-5.054 4.758h-1.44V18A5.257 5.257 0 01.25 12.75c0-1.9 1.032-3.643 2.668-4.568a4.717 4.717 0 014.704-4.438c.369 0 .738.045 1.1.133a7.592 7.592 0 014.79-1.703zM12 10.826c-1.168 0-2.12.95-2.12 2.12V14h4.24v-1.055A2.122 2.122 0 0012 10.826z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 9.325a3.624 3.624 0 013.62 3.62V14H17v5.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 017 19.5V14h1.38v-1.055A3.624 3.624 0 0112 9.325zm1.512-7.15a7.595 7.595 0 017.148 4.981 5.759 5.759 0 013.09 5.094c0 3.004-2.317 5.472-5.256 5.724v-1.506a4.255 4.255 0 003.756-4.218 4.257 4.257 0 00-2.507-3.872l-.304-.138-.101-.317a6.1 6.1 0 00-5.826-4.249 6.101 6.101 0 00-4.105 1.591l-.328.298-.42-.143a3.188 3.188 0 00-1.037-.176 3.216 3.216 0 00-3.213 3.213l.033.661-.468.21A3.755 3.755 0 001.75 12.75a3.754 3.754 0 003.55 3.745l.206.005V18A5.258 5.258 0 01.25 12.75c0-1.9 1.032-3.643 2.667-4.568a4.718 4.718 0 014.705-4.438c.369 0 .738.045 1.1.133a7.592 7.592 0 014.79-1.703zM12 10.824a2.122 2.122 0 00-2.12 2.12V14h4.24v-1.055c0-1.169-.951-2.12-2.12-2.12z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentCloudSecurity.style = iconCss;




/***/ })

};
;