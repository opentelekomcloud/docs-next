"use strict";
exports.id = 2765;
exports.ids = [2765];
exports.modules = {

/***/ 62765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_tariffs: () => (/* binding */ ContentTariffs)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentTariffs = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M21.061 2.836l-8.62-1.274L2.346 11.657a2.988 2.988 0 000 4.232l5.643 5.662a2.993 2.993 0 004.256 0l10.075-10.11-1.259-8.605zm-6.343 10.52l-1.087-1.087a1.043 1.043 0 00-.078-1.43c-.46-.46-1.01-.49-1.734-.034l1.112 1.112-.764.764-1.2-1.2-.191.19-.196.202 1.2 1.2-.764.759-1.112-1.097c-.446.715-.422 1.263.039 1.724.38.4 1.006.436 1.43.083l1.087 1.087a2.586 2.586 0 01-3.497-.19c-1.023-1.024-1.033-2.386-.117-3.762l-.49-.466.764-.764.382.382.196-.2.191-.191-.377-.382.774-.75.49.465c1.38-.92 2.733-.92 3.766.113a2.581 2.581 0 01.176 3.473zm3.502-6.283a.98.98 0 11-1.36-1.411.98.98 0 011.36 1.41z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.45 1.55l8.75 1.3 1.3 8.75-10.3 10.3c-.6.6-1.4.9-2.15.9a3.071 3.071 0 01-1.982-.744L7.9 21.9l-5.75-5.75c-1.154-1.106-1.198-2.951-.133-4.158l.133-.142 10.3-10.3zm.5 1.6L3.2 12.9a1.572 1.572 0 00-.105 2.083l.105.117 5.75 5.75c.3.3.7.45 1.1.45.35 0 .7-.115.983-.345l.117-.105 9.8-9.7L19.9 4.2l-6.95-1.05zm-2.2 6.75c1.342-.91 2.637-.948 3.667.018l.133.132c.957.909 1.09 2.23.312 3.392l-.112.158-1.1-1.1c.35-.55.3-1.05-.1-1.45-.42-.467-.927-.498-1.603-.134L11.8 11l1.15 1.15-.8.8-1.2-1.2-.4.4 1.2 1.2-.8.8L9.8 13c-.45.7-.4 1.3.05 1.75.37.37.824.44 1.324.174l.126-.074 1.1 1.1c-1.2.85-2.6.75-3.55-.2-.957-1.004-1.044-2.329-.218-3.667l.118-.183-.5-.5.8-.8.4.4.4-.4-.4-.4.8-.8.5.5zm6.85-4.5c.257 0 .478.073.63.22l.07.08c.4.4.4 1.05 0 1.45-.2.2-.45.3-.7.3-.25 0-.5-.1-.7-.3-.4-.4-.4-1.05 0-1.45.2-.2.45-.3.7-.3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentTariffs.style = iconCss;




/***/ })

};
;