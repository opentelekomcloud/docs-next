"use strict";
exports.id = 8614;
exports.ids = [8614];
exports.modules = {

/***/ 68614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_sms: () => (/* binding */ CommunicationSms)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationSms = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.5 3.5V16a3 3 0 01-2.824 2.995L19.5 19h-7l-3.512 3.513a1.717 1.717 0 01-1.226.516c-.853 0-1.676-.63-1.756-1.598L6 21.275V19H4.5a3 3 0 01-2.995-2.824L1.5 16V3.5h21zm-5.198 4.871c-.929 0-1.642.615-1.642 1.567 0 .575.281 1.116.965 1.363l.153.048.577.165c.39.104.6.261.6.591 0 .324-.217.563-.645.563-.337 0-.596-.134-.71-.466l-.032-.119h-1.005c.09.99.704 1.538 1.747 1.538.937 0 1.68-.57 1.68-1.575 0-.68-.398-1.207-1.061-1.434l-.146-.044-.578-.157c-.278-.075-.51-.203-.51-.54 0-.338.262-.548.607-.548.352 0 .557.152.644.456l.024.107h.989c-.096-.922-.644-1.515-1.657-1.515zm-10.17 0c-.929 0-1.642.615-1.642 1.567 0 .575.281 1.116.965 1.363l.153.048.577.165c.39.104.6.261.6.591 0 .324-.217.563-.645.563-.337 0-.596-.134-.71-.466l-.032-.119H5.393c.09.99.704 1.538 1.747 1.538.938 0 1.68-.57 1.68-1.575 0-.68-.398-1.207-1.061-1.434l-.146-.044-.578-.157c-.278-.075-.51-.203-.51-.54 0-.338.263-.548.607-.548.352 0 .557.152.644.456l.024.107h.989c-.096-.922-.644-1.515-1.657-1.515zm3.556.12h-.931v5.01h1.013v-2.827h.045l1.223 2.204h.322l1.23-2.204h.045v2.827h1.013v-5.01h-.938l-1.485 2.775h-.045l-1.492-2.775z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.5 3.5h-21V16a3 3 0 003 3H6v2.275c0 1.055.863 1.753 1.763 1.753.43 0 .868-.159 1.224-.515L12.5 19h7a3 3 0 003-3V3.5zM21 5v11c0 .827-.673 1.5-1.5 1.5h-7.621l-3.952 3.952c-.054.054-.103.076-.164.076-.003 0-.263-.007-.263-.253V17.5h-3c-.827 0-1.5-.673-1.5-1.5V5h18zm-5.734 7.083h1.005c.09.42.367.585.742.585.428 0 .645-.239.645-.563 0-.33-.21-.487-.6-.591l-.577-.165c-.795-.218-1.118-.795-1.118-1.411 0-.952.713-1.567 1.643-1.567 1.012 0 1.56.593 1.657 1.515h-.99c-.067-.375-.277-.563-.667-.563-.345 0-.608.21-.608.548 0 .337.233.465.51.54l.578.157c.75.196 1.207.75 1.207 1.478 0 1.005-.742 1.575-1.68 1.575-1.042 0-1.657-.548-1.747-1.538zm-.765-3.592v5.01h-1.013v-2.827h-.045l-1.23 2.204h-.322l-1.223-2.204h-.044v2.827H9.611v-5.01h.93l1.493 2.775h.045l1.484-2.775h.938zm-9.105 3.592h1.005c.09.42.368.585.743.585.427 0 .645-.239.645-.563 0-.33-.21-.487-.601-.591l-.577-.165c-.795-.218-1.117-.795-1.117-1.411 0-.952.712-1.567 1.642-1.567 1.012 0 1.56.593 1.657 1.515h-.989c-.068-.375-.278-.563-.668-.563-.345 0-.607.21-.607.548 0 .337.232.465.51.54l.577.157c.75.196 1.208.75 1.208 1.478 0 1.005-.743 1.575-1.68 1.575-1.043 0-1.658-.548-1.748-1.538z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationSms.style = iconCss;




/***/ })

};
;