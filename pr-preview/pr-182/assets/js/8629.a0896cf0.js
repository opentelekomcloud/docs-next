"use strict";
exports.id = 8629;
exports.ids = [8629];
exports.modules = {

/***/ 68629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_digital_banking: () => (/* binding */ ContentDigitalBanking)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentDigitalBanking = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.98 8.555l.045-.055H1v4a3 3 0 003 3h3.04a9.08 9.08 0 011-3.46 2.195 2.195 0 01-.62-.335 2.245 2.245 0 01-.44-3.15zm7.11-4.23A11 11 0 0121 5.36V5a3 3 0 00-3-3H4a3 3 0 00-3 3v1h8.75a11.525 11.525 0 014.34-1.675zm9.23 10.945a8 8 0 01-3.25-2.115c-1-.945-2.055-1.925-3.81-1.955a4.86 4.86 0 00-3.55 1.425 5.06 5.06 0 00-1.5 3.63c0 3.735 5 6.69 6.77 7.435a.75.75 0 00.58-1.385c-1.83-.775-5.85-3.37-5.85-6.05a3.57 3.57 0 011.04-2.56 3.34 3.34 0 012.475-1c1.175 0 1.86.66 2.81 1.55a9.31 9.31 0 003.83 2.45.75.75 0 10.445-1.43l.01.005zm-.455 2.88c-2.755-.935-3.805-2.055-4.565-2.87-.59-.625-1.14-1.215-2.135-1.28a2.1 2.1 0 00-2.16 1.545c-.755 2.645 4.04 5.56 6.825 6.38a.76.76 0 00.21.03.75.75 0 00.21-1.455c-2.935-.865-6.14-3.36-5.805-4.5a.61.61 0 01.62-.5c.37.025.585.22 1.14.81.82.875 2.045 2.19 5.18 3.26a.75.75 0 00.48-1.42zm-13.5-7.78a8.185 8.185 0 015.215-3.085 8 8 0 015.71 1.13.751.751 0 10.81-1.265 9.455 9.455 0 00-6.765-1.345 9.7 9.7 0 00-6.16 3.655.755.755 0 00.14 1.04.775.775 0 001.055-.13h-.005zm3.675 11.395c-1.135-.89-3.045-2.79-3.045-5.5a6.29 6.29 0 016.255-6.33c2.185 0 3.77 1.25 5.5 3.125a.75.75 0 101.11-1c-1.715-1.88-3.7-3.615-6.595-3.615a7.79 7.79 0 00-7.765 7.81c0 2.5 1.285 4.865 3.625 6.69.13.105.293.161.46.16a.75.75 0 00.46-1.34h-.005z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M16.1 11.2c1.417 0 2.789.624 3.821 1.747l.389.439.214.228c.586.598 1.306 1.126 2.826 1.686.35.15.55.6.5.9-.15.4-.55.6-.95.45-2.15-.8-3.1-1.65-3.85-2.6-.8-.9-1.85-1.4-2.9-1.4-.8 0-1.55.3-2.15.8-1.45 1.25-1.65 3.3-.45 4.95.55.75 1.45 1.65 2.4 2.4.75.6 1.65 1.15 2.55 1.6.4.2.55.65.35 1-.2.4-.65.55-1 .35-1.05-.5-2-1.1-2.85-1.75-1.05-.8-2.05-1.8-2.7-2.7-1.7-2.35-1.4-5.2.7-6.95.85-.75 1.95-1.15 3.1-1.15zM16 8.55c1.65 0 3.2.5 4.55 1.45.49.35.915.744 1.264 1.1l.28.293.53.58.076.077c.3.3.3.75 0 1.05-.3.3-.75.3-1.05 0l-.408-.478a8.647 8.647 0 00-1.328-1.269L19.7 11.2c-1.05-.8-2.35-1.2-3.65-1.2-1.4 0-2.8.5-3.9 1.45-2.6 2.15-2.95 5.8-.95 8.6.45.6 1.05 1.25 1.7 1.9.3.25.35.75.05 1.05-.3.3-.75.35-1.05.05-.75-.7-1.4-1.45-1.9-2.15-2.5-3.45-2-7.95 1.1-10.55 1.35-1.15 3.1-1.8 4.9-1.8zm-1.25 5.9c.95-.85 2.3-.65 3.25.45.45.55.8.95 1.4 1.4l.216.157.249.17c.223.147.485.306.798.473l.4.203c.495.241 1.098.494 1.837.747.4.15.65.7.5 1.05-.15.35-.55.6-.95.45-1.55-.5-2.8-1.1-3.85-1.9a10.39 10.39 0 01-1.593-1.538l-.257-.312c-.25-.35-.75-.45-1.1-.1-.3.25-.35.7-.1 1 .6.75 1.2 1.35 2 2 .85.65 1.9 1.25 2.9 1.65l.194.08.512.19c.06.024.124.05.194.08.35.1.5.45.4.85-.15.4-.55.6-.95.5-1.35-.4-2.9-1.25-4.15-2.2-.85-.65-1.65-1.5-2.15-2.15-.85-1.15-.75-2.4.25-3.25zM18 2a3.01 3.01 0 012.995 2.824L21 5v.25c-.5-.2-1.05-.4-1.55-.55-.093-.607-.622-1.126-1.302-1.193L18 3.5H4c-.8 0-1.423.576-1.493 1.352L2.5 5v1h7.35c-.4.28-.8.528-1.174.82l-.276.23a9.698 9.698 0 00-1.221 1.18l-.229.27H2.5v4c0 .8.576 1.423 1.352 1.493L4 14h3.2c-.12.4-.176.8-.22 1.2l-.03.3H4a3.01 3.01 0 01-2.995-2.824L1 12.5V5a3.01 3.01 0 012.824-2.995L4 2h14zm-1.95 3.7c1.75 0 3.5.45 5.05 1.3.35.2.5.65.3 1-.183.32-.577.474-.91.343L20.4 8.3c-1.35-.7-2.85-1.1-4.35-1.1-2.1 0-4.1.75-5.7 2.1-.4.35-.75.7-1.1 1.1a.668.668 0 01-.922.118l-.078-.068c-.35-.25-.35-.75-.1-1.05.35-.45.8-.85 1.25-1.25 1.85-1.6 4.2-2.45 6.65-2.45z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentDigitalBanking.style = iconCss;




/***/ })

};
;