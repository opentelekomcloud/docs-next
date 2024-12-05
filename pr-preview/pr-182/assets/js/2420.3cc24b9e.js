"use strict";
exports.id = 2420;
exports.ids = [2420];
exports.modules = {

/***/ 82420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_home_light_bulb: () => (/* binding */ HomeLightBulb)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeLightBulb = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M15.5 19.006v2.27l-1.534.557A1.995 1.995 0 0112 23.5a1.994 1.994 0 01-1.933-1.512l-.033-.155-1.534-.557v-2.27h7zM11.748 5.505a6.46 6.46 0 014.76 1.811A6.448 6.448 0 0118.5 12a6.47 6.47 0 01-.558 2.639c-.301.679-.658 1.155-1.004 1.575l-.435.52a4.737 4.737 0 00-.402.55l-.12.202H8.037a4.914 4.914 0 00-.447-.646l-.502-.593c-.39-.465-.795-1.006-1.123-1.828a6.503 6.503 0 01-.464-2.515c.05-3.399 2.851-6.27 6.248-6.399zM3.25 11.25a.75.75 0 01.102 1.493l-.102.007h-2a.75.75 0 01-.102-1.493l.102-.007h2zm19.5 0a.75.75 0 01.102 1.493l-.102.007h-2a.75.75 0 01-.102-1.493l.102-.007h2zM3.869 3.868a.751.751 0 01.975-.072l.084.072 1.415 1.414a.75.75 0 01-.967 1.14l-.094-.079L3.87 4.929a.75.75 0 010-1.061zm15.203 0a.749.749 0 011.133.977l-.072.085-1.415 1.413a.751.751 0 01-1.134-.977l.073-.083 1.415-1.415zM12 .5a.75.75 0 01.743.648l.007.102v2a.75.75 0 01-1.493.102l-.007-.102v-2A.75.75 0 0112 .5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14.865 16.419a5.757 5.757 0 00-.51 1.081H9.666a5.591 5.591 0 00-.506-1.067c-.638-1.037-1.177-1.144-1.739-2.416A4.988 4.988 0 017 11.926c.037-2.614 2.192-4.823 4.803-4.922a4.928 4.928 0 013.663 1.394A4.959 4.959 0 0117 12c0 .653-.125 1.29-.364 1.88-.544 1.341-1.13 1.484-1.771 2.539M11.748 5.505c-3.396.129-6.198 3-6.247 6.4a6.502 6.502 0 00.462 2.514c.476 1.187 1.11 1.789 1.625 2.421.516.633.912 1.296.912 2.605v1.83l1.534.558A1.995 1.995 0 0012 23.5c.99 0 1.807-.722 1.966-1.667l1.534-.557v-1.687c0-1.344.373-2.048.866-2.683.492-.635 1.103-1.2 1.577-2.266A6.486 6.486 0 0018.5 12a6.447 6.447 0 00-1.992-4.684 6.456 6.456 0 00-4.76-1.811M22.75 11.25h-2a.75.75 0 100 1.5h2a.75.75 0 100-1.5m-2.618-7.381a.75.75 0 00-1.06 0l-1.415 1.413a.75.75 0 101.061 1.061l1.415-1.413a.75.75 0 00-.001-1.061M12 4a.75.75 0 00.75-.75v-2a.75.75 0 10-1.5 0v2c0 .414.336.75.75.75m-8.75 7.25h-2a.75.75 0 100 1.5h2a.75.75 0 100-1.5m3.093-4.907a.75.75 0 000-1.061L4.928 3.868a.75.75 0 00-1.06 1.061l1.414 1.414a.75.75 0 001.061 0", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
HomeLightBulb.style = iconCss;




/***/ })

};
;