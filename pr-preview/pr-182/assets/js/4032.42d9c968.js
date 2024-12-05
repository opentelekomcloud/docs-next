"use strict";
exports.id = 4032;
exports.ids = [4032];
exports.modules = {

/***/ 34032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_biometric: () => (/* binding */ ContentBiometric)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentBiometric = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.1 9.95c1.1 0 2.25.4 3.3 1.15.28.2.528.432.744.67l.156.18c.311.356.622.711 1.144 1.067l.206.133c.85.6 1.95 1 3.25 1.35.45.15.65.55.55.95-.1.4-.5.65-.9.55-1.5-.4-2.7-.9-3.7-1.55a8.522 8.522 0 01-1.127-.925L15.2 13l-.282-.294c-.09-.093-.18-.18-.273-.255l-.145-.101c-.75-.55-1.6-.85-2.4-.85-.85 0-1.65.3-2.3.85-1.55 1.3-1.75 3.5-.5 5.25.55.75 1.5 1.7 2.45 2.45.7.55 1.5 1.05 2.35 1.5.35.2.5.65.3 1s-.65.5-1 .3c-.95-.45-1.8-1-2.6-1.65-1.1-.8-2.1-1.85-2.75-2.75C6.3 16 6.6 13 8.8 11.15c.95-.75 2.1-1.2 3.3-1.2zm0-2.95c1.45 0 2.9.4 4.25 1.15a7.53 7.53 0 011.527 1.177l.838.835.243.226c.536.476 1.164.86 2.392 1.112.4.1.65.5.65.85-.1.4-.5.7-.9.6-1.76-.368-2.648-1.004-3.351-1.689l-.229-.23-.22-.231c-.5-.5-.95-.95-1.7-1.4-1.1-.6-2.35-.95-3.5-.95-1.55 0-3.05.55-4.25 1.55-2.683 2.293-3.13 6.06-1.153 9.075l.153.225c.394.613.94 1.225 1.574 1.837l.276.263c.3.25.35.75.05 1.05-.3.3-.75.35-1.05.05-.8-.75-1.5-1.55-2.05-2.3C3 16.55 3.5 11.75 6.9 8.9 8.35 7.7 10.2 7 12.1 7zm-1.35 6.5c.95-.85 2.3-.65 3.25.45.45.55.8.95 1.4 1.4 1.35 1 2.8 1.55 4.35 2 .4.15.65.55.55.95-.15.4-.55.6-.95.5l-.94-.295-.432-.146A12.556 12.556 0 0114.6 16.6l-.506-.438c-.113-.1-.228-.205-.352-.324l-.192-.188-.403-.47-.247-.296-.1-.134c-.25-.3-.75-.4-1.1-.1-.3.3-.35.75-.1 1.05.525.656 1.05 1.236 1.709 1.773l.291.227c.93.75 1.95 1.284 2.768 1.645l.391.167.35.138.541.2c.35.15.6.55.45.95-.15.35-.55.6-.95.45l-.234-.08-.29-.107-.338-.131-.185-.076-.398-.17-.43-.198A14.686 14.686 0 0112.65 18.9c-.85-.65-1.65-1.5-2.15-2.15-.85-1.15-.75-2.4.25-3.25zM12.1 4c3.35 0 6.55 1.5 8.85 4.15.25.3.2.8-.1 1.05-.3.25-.8.2-1.05-.1-2-2.3-4.75-3.6-7.65-3.6-2.138 0-4.23.767-5.934 2.087L5.95 7.8c-.6.45-1.1 1-1.55 1.6-.23.275-.668.382-.971.167L3.35 9.5c-.35-.25-.4-.7-.15-1.05.5-.65 1.1-1.3 1.75-1.85C6.95 4.9 9.5 4 12.1 4zm0-3c2.3 0 4.55.55 6.65 1.65.35.2.5.65.3 1-.183.32-.577.474-.91.343l-.09-.043C16.2 3 14.2 2.5 12.15 2.5 10.05 2.5 8 3 6.2 4c-.4.15-.85.05-1.05-.35-.2-.35-.05-.8.3-1C7.5 1.55 9.8 1 12.1 1z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.1 9.95c1.1 0 2.25.4 3.3 1.15.28.2.528.432.744.67l.156.18c.311.356.622.711 1.144 1.067l.206.133c.85.6 1.95 1 3.25 1.35.45.15.65.55.55.95-.1.4-.5.65-.9.55-1.5-.4-2.7-.9-3.7-1.55a8.522 8.522 0 01-1.127-.925L15.2 13l-.282-.294c-.09-.093-.18-.18-.273-.255l-.145-.101c-.75-.55-1.6-.85-2.4-.85-.85 0-1.65.3-2.3.85-1.55 1.3-1.75 3.5-.5 5.25.55.75 1.5 1.7 2.45 2.45.7.55 1.5 1.05 2.35 1.5.35.2.5.65.3 1s-.65.5-1 .3c-.95-.45-1.8-1-2.6-1.65-1.1-.8-2.1-1.85-2.75-2.75C6.3 16 6.6 13 8.8 11.15c.95-.75 2.1-1.2 3.3-1.2zm0-2.95c1.45 0 2.9.4 4.25 1.15a7.53 7.53 0 011.527 1.177l.838.835.243.226c.536.476 1.164.86 2.392 1.112.4.1.65.5.65.85-.1.4-.5.7-.9.6-1.76-.368-2.648-1.004-3.351-1.689l-.229-.23-.22-.231c-.5-.5-.95-.95-1.7-1.4-1.1-.6-2.35-.95-3.5-.95-1.55 0-3.05.55-4.25 1.55-2.683 2.293-3.13 6.06-1.153 9.075l.153.225c.394.613.94 1.225 1.574 1.837l.276.263c.3.25.35.75.05 1.05-.3.3-.75.35-1.05.05-.8-.75-1.5-1.55-2.05-2.3C3 16.55 3.5 11.75 6.9 8.9 8.35 7.7 10.2 7 12.1 7zm-1.35 6.5c.95-.85 2.3-.65 3.25.45.45.55.8.95 1.4 1.4 1.35 1 2.8 1.55 4.35 2 .4.15.65.55.55.95-.15.4-.55.6-.95.5l-.94-.295-.432-.146A12.556 12.556 0 0114.6 16.6l-.506-.438c-.113-.1-.228-.205-.352-.324l-.192-.188-.403-.47-.247-.296-.1-.134c-.25-.3-.75-.4-1.1-.1-.3.3-.35.75-.1 1.05.525.656 1.05 1.236 1.709 1.773l.291.227c.93.75 1.95 1.284 2.768 1.645l.391.167.35.138.541.2c.35.15.6.55.45.95-.15.35-.55.6-.95.45l-.234-.08-.29-.107-.338-.131-.185-.076-.398-.17-.43-.198A14.686 14.686 0 0112.65 18.9c-.85-.65-1.65-1.5-2.15-2.15-.85-1.15-.75-2.4.25-3.25zM12.1 4c3.35 0 6.55 1.5 8.85 4.15.25.3.2.8-.1 1.05-.3.25-.8.2-1.05-.1-2-2.3-4.75-3.6-7.65-3.6-2.138 0-4.23.767-5.934 2.087L5.95 7.8c-.6.45-1.1 1-1.55 1.6-.23.275-.668.382-.971.167L3.35 9.5c-.35-.25-.4-.7-.15-1.05.5-.65 1.1-1.3 1.75-1.85C6.95 4.9 9.5 4 12.1 4zm0-3c2.3 0 4.55.55 6.65 1.65.35.2.5.65.3 1-.183.32-.577.474-.91.343l-.09-.043C16.2 3 14.2 2.5 12.15 2.5 10.05 2.5 8 3 6.2 4c-.4.15-.85.05-1.05-.35-.2-.35-.05-.8.3-1C7.5 1.55 9.8 1 12.1 1z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentBiometric.style = iconCss;




/***/ })

};
;