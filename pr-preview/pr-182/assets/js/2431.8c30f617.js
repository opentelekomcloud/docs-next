"use strict";
exports.id = 2431;
exports.ids = [2431];
exports.modules = {

/***/ 52431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_t_product_voice: () => (/* binding */ TProductVoice)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProductVoice = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21.15 15.6c0 3.25-1.35 5.6-3.8 6.65-1.5.65-3.5.55-5.4-.1.4-.2.8-.35 1.15-.6 1.5-.9 2.7-2 3.6-3.15.65-.25 1.25-.55 1.85-.9.95-.55 1.85-1.2 2.6-1.9zM2.7 13c.45.9 1.05 1.8 1.75 2.6 1.05 1.25 2.3 2.1 3.6 2.7 1.25.6 2.8 1.05 4.4 1.05.4 0 .75-.05 1.15-.1-.4.35-.85.65-1.3.95-1.9 1.2-4.15 1.6-6.2 1.05-1.55-.4-2.8-1.3-3.5-2.55-.85-1.55-.8-3.7.1-5.7zm14-9.7c2.4 0 4.5.95 5.55 2.75 1.714 3.086-.218 7.419-4.293 9.85l-.257.15C13.45 18.5 8.55 17.9 6.75 14.8c-.65-1.2-.8-2.6-.4-4.1.65-2.3 2.5-4.55 4.95-5.9 1.8-1 3.65-1.5 5.4-1.5zm-4.75 5.3c-1.85 0-3.4 1.55-3.4 3.4 0 1.85 1.5 3.4 3.4 3.4 1.85 0 3.4-1.55 3.4-3.4 0-1.85-1.5-3.4-3.4-3.4zM4.8 3.15c2.1-1.9 5.2-2.2 8-.95-.85.3-1.65.65-2.45 1.1-2.9 1.65-5 4.2-5.75 6.95-.2.8-.3 1.6-.3 2.45-2-3.45-1.9-7.35.5-9.55z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.8 2.7c-1.55 0-2.9.5-4 1.5-2.1 1.9-2.2 5.35-.45 8.3v-.3c0-.6.1-1.2.25-1.8.65-2.4 2.5-4.65 5.05-6.1.7-.4 1.45-.7 2.15-.95l-.3-.1c-.5-.2-1.05-.35-1.6-.45l-.35-.05c-.25 0-.5-.05-.75-.05m2.15 5.9c1.9 0 3.4 1.55 3.4 3.4 0 1.85-1.55 3.4-3.4 3.4-1.9 0-3.4-1.55-3.4-3.4 0-1.85 1.5-3.4 3.4-3.4m4.15-4.25c-1.5 0-3.15.45-4.7 1.3C9.25 6.9 7.6 8.8 7.05 10.8c-.35 1.3-.25 2.55.35 3.55 1.55 2.7 5.85 3.2 9.55 1.1 3.7-2.05 5.5-6 3.95-8.75-.9-1.55-2.7-2.35-4.8-2.35m-12.35 8.4c-.15.3-.25.6-.35.95-.45 1.5-.35 2.95.25 4 .6 1.1 1.7 1.85 3.05 2.25 1.8.45 3.8.1 5.45-.95.4-.25.8-.55 1.15-.8-.35.05-.7.05-1 .05-1.35 0-2.65-.3-3.75-.85-1.2-.5-2.3-1.3-3.25-2.4-.6-.7-1.1-1.45-1.55-2.25M20 15.1l-.3.25c-.6.5-1.25 1-2 1.4-.55.3-1.05.55-1.6.75-.8 1-1.85 1.95-3.15 2.75-.3.2-.65.35-1 .5 1.7.6 3.4.65 4.7.1C18.8 20 19.95 17.9 20 15.1M4.8 3.1C6.35 1.65 8.5 1 10.75 1.25c1.5.15 2.95.75 4.2 1.65 3.1-.35 5.95.75 7.3 3.1 1.25 2.25.8 5.1-.85 7.5.55 4.15-.95 7.45-4.15 8.8-.8.35-1.7.5-2.65.5-1.25 0-2.6-.3-3.9-.85-.3-.15-.6-.3-.85-.45-.5.1-1 .15-1.5.15-.65 0-1.35-.1-1.95-.25-1.8-.45-3.2-1.5-4-2.95-.85-1.45-.95-3.3-.4-5.2.25-.85.6-1.6 1.05-2.35C2.2 8 2.75 5 4.8 3.1", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TProductVoice.style = iconCss;




/***/ })

};
;