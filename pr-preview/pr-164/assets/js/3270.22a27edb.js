"use strict";
exports.id = 3270;
exports.ids = [3270];
exports.modules = {

/***/ 83270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_handshake: () => (/* binding */ UserFileHandshake)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileHandshake = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M23.424 7.2c0-.366-.48-.624-.864-.528l-2.4.672c-.48.096-1.008 0-1.44-.336l-1.344-1.056a4.26 4.26 0 00-2.592-.912c-.912 0-1.776.288-2.544.864-1.2-1.008-3.024-1.104-4.32-.24L6.336 6.72c-.768.48-1.68.672-2.592.48l-2.4-.48a.79.79 0 00-.864.576.79.79 0 00.576.864l2.4.48c.336.048.624.096.96.096.96 0 1.92-.288 2.736-.816l1.536-1.056c.72-.48 1.68-.48 2.352 0L8.304 9.168c-.912.816-1.008 2.208-.192 3.072a2.12 2.12 0 002.736.384L14.4 10.56c.336-.192.72-.096.96.192 0 0 2.496 3.264 3.072 4.032.528.72.288 1.536-.144 1.776-.288.192-1.008.144-1.008.144s-.096.864-.528 1.104c-.384.24-1.248 0-1.248 0s-.24.672-.528.864c-.48.336-1.344-.048-1.344-.048s-.336.576-.528.72c-.24.144-.576.192-.912.048.528-1.104.384-2.352-.432-3.024a1.826 1.826 0 00-.816-.384c-.144-.24-.288-.384-.48-.576-.24-.192-.48-.288-.768-.384-.144-.24-.288-.48-.528-.672-.192-.144-.384-.24-.576-.336-.144-.288-.336-.576-.576-.768-1.008-.816-2.496-.48-3.552.672l-3.024-.912c-.384-.144-.768.096-.912.48-.144.384.096.768.48.912l2.784.912c-.336 1.008-.096 2.016.624 2.592.192.144.384.24.576.336.144.288.336.576.576.768.24.192.48.288.768.384.144.24.288.48.528.672.24.192.528.336.816.384.144.24.288.384.48.576.384.288.816.432 1.296.432.624 0 1.344-.288 1.92-.768.432.24.864.336 1.296.336.432 0 .912-.144 1.296-.384.144-.096.24-.192.384-.288.528.048 1.056-.048 1.536-.384.192-.144.384-.288.528-.48a2.38 2.38 0 001.248-.384c.384-.24.624-.576.816-.96.24-.048.48-.144.672-.288.576-.384.96-1.008 1.056-1.776.048-.24 0-.48 0-.72l2.684-.803c.384-.096.532-.449.532-.98V7.2z", id: "a" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("use", { xlinkHref: "#a", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.608 13.008l-3.024.912-3.12-4.08a2.16 2.16 0 00-2.832-.528l-3.504 2.112a.68.68 0 01-.912-.144c-.288-.288-.24-.768.048-1.056l3.6-3.12a2.853 2.853 0 011.824-.672c.624 0 1.248.192 1.728.576l1.344 1.056c.768.576 1.728.816 2.64.576l2.496-.576a.716.716 0 10-.336-1.392l-2.4.672c-.48.096-1.008 0-1.44-.336l-1.344-1.056a4.26 4.26 0 00-2.592-.912c-.912 0-1.776.288-2.544.864-1.2-1.008-3.024-1.104-4.32-.24L6.336 6.72c-.768.48-1.68.672-2.592.48l-2.4-.48a.79.79 0 00-.864.576.79.79 0 00.576.864l2.4.48c.336.048.624.096.96.096.96 0 1.92-.288 2.736-.816l1.536-1.056c.72-.48 1.68-.48 2.352 0L8.304 9.168c-.912.816-1.008 2.208-.192 3.072a2.12 2.12 0 002.736.384L14.4 10.56c.336-.192.72-.096.96.192 0 0 2.496 3.264 3.072 4.032.528.72.288 1.536-.144 1.776-.288.192-1.008.144-1.008.144s-.096.864-.528 1.104c-.384.24-1.248 0-1.248 0s-.24.672-.528.864c-.48.336-1.344-.048-1.344-.048s-.336.576-.528.72c-.24.144-.576.192-.912.048.528-1.104.384-2.352-.432-3.024a1.826 1.826 0 00-.816-.384c-.144-.24-.288-.384-.48-.576-.24-.192-.48-.288-.768-.384-.144-.24-.288-.48-.528-.672-.192-.144-.384-.24-.576-.336-.144-.288-.336-.576-.576-.768-1.008-.816-2.496-.48-3.552.672l-3.024-.912c-.384-.144-.768.096-.912.48-.144.384.096.768.48.912l2.784.912c-.336 1.008-.096 2.016.624 2.592.192.144.384.24.576.336.144.288.336.576.576.768.24.192.48.288.768.384.144.24.288.48.528.672.24.192.528.336.816.384.144.24.288.384.48.576.384.288.816.432 1.296.432.624 0 1.344-.288 1.92-.768.432.24.864.336 1.296.336.432 0 .912-.144 1.296-.384.144-.096.24-.192.384-.288.528.048 1.056-.048 1.536-.384.192-.144.384-.288.528-.48a2.38 2.38 0 001.248-.384c.384-.24.624-.576.816-.96.24-.048.48-.144.672-.288.576-.384.96-1.008 1.056-1.776.048-.24 0-.48 0-.72l2.928-.864c.384-.096.576-.528.48-.912-.24-.48-.624-.672-1.008-.576zm-11.952 6.24c-.528.672-1.296.816-1.632.576-.24-.192-.336-.864-.336-.864s-.672.144-.96-.096c-.288-.24-.336-.912-.336-.912s-.672.144-.96-.096c-.288-.24-.288-.912-.288-.912s-.576.048-.864-.144c-.336-.288-.336-1.056.24-1.728.528-.672 1.296-.864 1.632-.576.336.288.288.912.288.912s.624-.048.864.192c.288.288.288.912.288.912s.624-.144.96.096c.336.24.336.864.336.864s.624-.144.96.096c.336.24.336 1.008-.192 1.68z", id: "a" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("use", { xlinkHref: "#a", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileHandshake.style = iconCss;




/***/ })

};
;