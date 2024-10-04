"use strict";
exports.id = 828;
exports.ids = [828];
exports.modules = {

/***/ 60828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_auto_login: () => (/* binding */ ActionAutoLogin)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionAutoLogin = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 .75c.65 0 1.257.388 1.54.964l.06.136 1.5 3.65 3.9.25c.75.05 1.35.5 1.55 1.2.185.646.028 1.335-.43 1.791L20 8.85l-3 2.55.95 3.8c.2.7-.05 1.45-.65 1.85a1.827 1.827 0 01-1.809.125l-.141-.075-2.6-1.6v7.2c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-7.2l-2.6 1.6c-.6.4-1.35.35-1.95-.05a1.862 1.862 0 01-.678-1.689l.028-.161.95-3.8-3-2.55c-.55-.5-.8-1.2-.55-1.9a1.773 1.773 0 011.402-1.183L5 5.75l3.9-.25 1.5-3.65c.25-.65.9-1.1 1.6-1.1zm8.427 10.954l2.473.804-.463 1.426-2.473-.803.463-1.427zm-16.88-.019l.464 1.427-2.473.803-.463-1.426 2.473-.804zM5.99.213l1.528 2.104-1.214.881-1.528-2.103L5.99.213zM17.998.205l1.214.882-1.529 2.103-1.213-.882L17.998.205z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 .75c.65 0 1.257.388 1.54.964l.06.136 1.5 3.65 3.9.25c.75.05 1.35.5 1.55 1.2.185.646.028 1.335-.43 1.791L20 8.85l-3 2.55.95 3.8c.2.7-.05 1.45-.65 1.85a1.827 1.827 0 01-1.809.125l-.141-.075-2.6-1.6v7.2c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651l-.007-.099v-7.2l-2.6 1.6c-.6.4-1.35.35-1.95-.05a1.862 1.862 0 01-.678-1.689l.028-.161.95-3.8-3-2.55c-.55-.5-.8-1.2-.55-1.9a1.773 1.773 0 011.402-1.183L5 5.75l3.9-.25 1.5-3.65c.25-.65.9-1.1 1.6-1.1zm0 1.55h-.1c-.066.003-.128.017-.171.087l-.029.063-1.85 4.5L5 7.3c-.15 0-.2.1-.2.15 0 .04 0 .112.051.19l.049.06 3.7 3.15-1.15 4.7c-.05.1.05.2.1.25a.236.236 0 00.247.038l.053-.038L12 13.25l4.1 2.55c.125.083.215.063.27.024l.08-.07c.033-.032.059-.075.031-.146l-.031-.058-1.15-4.7L19 7.7c.107-.071.112-.143.106-.196L19.1 7.45c0-.042-.035-.118-.133-.142L18.9 7.3l-4.85-.35-1.85-4.5c-.042-.125-.118-.146-.2-.15zm8.427 9.404l2.473.804-.463 1.426-2.473-.803.463-1.427zm-16.88-.019l.464 1.427-2.473.803-.463-1.426 2.473-.804zM5.99.213l1.528 2.104-1.214.881-1.528-2.103L5.99.213zM17.998.205l1.214.882-1.529 2.103-1.213-.882L17.998.205z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionAutoLogin.style = iconCss;




/***/ })

};
;