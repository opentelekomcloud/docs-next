"use strict";
exports.id = 6516;
exports.ids = [6516];
exports.modules = {

/***/ 76516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_clipboard: () => (/* binding */ ContentClipboard)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentClipboard = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.545 3.5c-.018.11-.031.221-.038.333L6.5 4v3.5h11V4a3.384 3.384 0 00-.022-.334l-.023-.166H21v17a3 3 0 01-2.824 2.995L18 23.5H6a3 3 0 01-2.995-2.824L3 20.5v-17h3.545zM16 16.5H8a.75.75 0 00-.102 1.493L8 18h8a.75.75 0 00.102-1.493L16 16.5zm0-3.5H8a.75.75 0 00-.102 1.493L8 14.5h8a.75.75 0 00.102-1.493L16 13zm0-3.5H8a.75.75 0 00-.102 1.493L8 11h8a.75.75 0 00.102-1.493L16 9.5zm-4-9a1.5 1.5 0 011.493 1.356L13.5 2v.5h1a1.5 1.5 0 011.493 1.356L16 4v2H8V4a1.5 1.5 0 011.356-1.493L9.5 2.5h1V2A1.5 1.5 0 0112 .5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.55 3.453c-.037.11-.047.247-.05.37V4.92h-2v15.647c0 .783.576 1.392 1.352 1.46l.148.007h12c.8 0 1.423-.563 1.493-1.322l.007-.145V4.92h-2v-.977c0-.11 0-.248-.021-.372l-.029-.117H21v17.113c0 1.556-1.255 2.84-2.824 2.929L18 23.5H6c-1.591 0-2.903-1.228-2.995-2.762L3 20.566V3.453h3.55zM16 16.166c.4 0 .75.342.75.733 0 .359-.294.676-.651.726l-.099.007H8c-.4 0-.75-.342-.75-.733 0-.359.294-.676.651-.726L8 16.166h8zm0-3.423c.4 0 .75.342.75.733 0 .359-.294.676-.651.727L16 14.21H8c-.4 0-.75-.343-.75-.734 0-.358.294-.676.651-.726L8 12.743h8zm0-3.423c.4 0 .75.342.75.734 0 .358-.294.676-.651.726l-.099.007H8c-.4 0-.75-.342-.75-.733 0-.359.294-.677.651-.727L8 9.32h8zm-5.5-7.334c0-.88.85-1.614 1.8-1.467a1.53 1.53 0 011.193 1.37l.007.146v.44h1c.8 0 1.423.563 1.493 1.322l.007.145v1.955H8V3.942c0-.783.576-1.392 1.352-1.46l.148-.007h1v-.49z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentClipboard.style = iconCss;




/***/ })

};
;