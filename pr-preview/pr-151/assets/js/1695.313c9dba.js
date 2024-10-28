"use strict";
exports.id = 1695;
exports.ids = [1695];
exports.modules = {

/***/ 11695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_person_walking: () => (/* binding */ ContentPersonWalking)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentPersonWalking = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.512 5.71c1.372-.454 5.098-.372 5.847 1.452.11.27.217.547.32.823l.354.953.21.535c.165.398.328.734.463.872.042.043.1.098.172.16l.247.213.632.514.667.523.291.223a.926.926 0 01-1.119 1.473l-.835-.647-.47-.377-.308-.253-.279-.238a5.982 5.982 0 01-.32-.297c-.396-.404-.693-1.043-.989-1.804l-.198-.524-.271-.726-.176-.453-.46 5.588 2.666 2.76c.254.264.457.564.605.896l1.989 4.99a.921.921 0 01-1.613.863l-.058-.095-2.553-4.878-4.277-3.524a3.123 3.123 0 01-1.136-2.492l.012-.206.383-4.116c-.655.51-1.226 1.256-1.412 1.599a.994.994 0 00-.053.125l-.064.192-.073.25-.124.461-.133.535-.134.575-.18.826a.926.926 0 01-1.812-.376l.175-.811.114-.496.126-.516.133-.505c.135-.49.275-.917.4-1.145l.117-.199a5.95 5.95 0 01.166-.25l.212-.292c.585-.768 1.573-1.793 2.746-2.181zm-.624 9.988l.101.098.104.095 2.173 1.79-.162.608a3.114 3.114 0 01-.45.974l-.13.173-3.21 3.801a.924.924 0 01-1.534-1.005l.06-.105 2.847-4.252.201-2.177zM12.25 0a2.125 2.125 0 110 4.25 2.125 2.125 0 010-4.25z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.512 5.71c1.372-.454 5.098-.372 5.847 1.452.11.27.217.547.32.823l.354.953.21.535c.165.398.328.734.463.872.042.043.1.098.172.16l.247.213.632.514.667.523.291.223a.926.926 0 01-1.119 1.473l-.835-.647-.47-.377-.308-.253-.279-.238a5.982 5.982 0 01-.32-.297c-.396-.404-.693-1.043-.989-1.804l-.198-.524-.271-.726-.176-.453-.46 5.588 2.666 2.76c.254.264.457.564.605.896l1.989 4.99a.921.921 0 01-1.613.863l-.058-.095-2.553-4.878-4.277-3.524a3.123 3.123 0 01-1.136-2.492l.012-.206.383-4.116c-.655.51-1.226 1.256-1.412 1.599a.994.994 0 00-.053.125l-.064.192-.073.25-.124.461-.133.535-.134.575-.18.826a.926.926 0 01-1.812-.376l.175-.811.114-.496.126-.516.133-.505c.135-.49.275-.917.4-1.145l.117-.199a5.95 5.95 0 01.166-.25l.212-.292c.585-.768 1.573-1.793 2.746-2.181zm-.624 9.988l.101.098.104.095 2.173 1.79-.162.608a3.114 3.114 0 01-.45.974l-.13.173-3.21 3.801a.924.924 0 01-1.534-1.005l.06-.105 2.847-4.252.201-2.177zM12.25 0a2.125 2.125 0 110 4.25 2.125 2.125 0 010-4.25z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentPersonWalking.style = iconCss;




/***/ })

};
;