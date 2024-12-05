"use strict";
exports.id = 6159;
exports.ids = [6159];
exports.modules = {

/***/ 28540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_landing_mobile_contact_client: () => (/* binding */ CommunicationLandingMobileContactClient)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationLandingMobileContactClient = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M20 1a3 3 0 012.996 2.824L23 4v12a3 3 0 01-2.824 2.995L20 19h-5a2.998 2.998 0 01-2.73-1.761l.23.011a6.706 6.706 0 004.773-1.977 6.76 6.76 0 000-9.546A6.706 6.706 0 0012.5 3.75c-.164 0-.327.013-.49.023a2.998 2.998 0 012.815-2.768L15.001 1h5zm-1 1.5h-3V4h3V2.5zM5.639 6.09l.275.053.487.102.991 5.121-1.677.843a.343.343 0 00-.164.427l.065.171.155.394.09.219.206.474c.074.164.153.335.237.51l.13.264c.224.444.452.853.66 1.204l.238.39c.075.12.144.23.207.326a.344.344 0 00.372.148l.068-.025 1.676-.844 3.52 3.85-.207.452c-.633 1.378-1.509 2.217-2.605 2.491a3.162 3.162 0 01-.774.094c-.987 0-1.862-.435-2.375-.759l-.21-.14-.154-.11C5 20.34 3.636 18.11 2.82 16.485c-.818-1.624-1.797-4.047-1.82-6.371l.002-.164.01-.214c.004-.078.012-.164.022-.255l.04-.29c.124-.758.45-1.758 1.286-2.443.764-.626 1.775-.86 3.01-.698l.268.04zm10.045 1.228a4.5 4.5 0 11-6.366 6.364 4.5 4.5 0 016.366-6.364zm-3.182.606a.539.539 0 00-.533.452l-.007.088V9.96h-1.497a.54.54 0 00-.088 1.073l.088.007h1.497v1.496a.539.539 0 001.073.088l.007-.088V11.04h1.496a.538.538 0 00.54-.54.54.54 0 00-.453-.533l-.087-.007H13.04V8.464a.54.54 0 00-.54-.54z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.638 6.09l.275.053.487.102.991 5.121-1.677.843a.343.343 0 00-.164.427l.065.171.155.394.09.219.206.474c.074.164.153.335.237.51l.13.264c.224.444.452.853.66 1.204l.238.39c.075.12.144.23.207.326a.344.344 0 00.372.148l.068-.025 1.676-.844 3.52 3.85-.207.452c-.633 1.378-1.509 2.217-2.605 2.491a3.162 3.162 0 01-.774.094c-.987 0-1.862-.435-2.375-.759l-.21-.14-.154-.11C5 20.34 3.636 18.11 2.82 16.485c-.818-1.624-1.797-4.047-1.82-6.371l.002-.164.01-.214c.004-.078.012-.164.022-.255l.04-.29c.124-.758.45-1.758 1.286-2.443.764-.626 1.775-.86 3.01-.698l.268.04zm-.99 1.41c-.558 0-1.006.136-1.338.408-.508.417-.699 1.106-.77 1.609l-.027.253-.011.2-.002.13c.016 1.588.605 3.616 1.658 5.712 1.055 2.095 2.332 3.778 3.597 4.737l.098.071.153.102c.417.264 1.226.674 1.992.483.475-.12.898-.464 1.263-1.03l.12-.196-2.067-2.26-.662.332a1.841 1.841 0 01-2.373-.647 22.014 22.014 0 01-1.186-2.062 21.789 21.789 0 01-.948-2.183 1.84 1.84 0 01.76-2.214l.136-.076.661-.333L5.12 7.53a4.145 4.145 0 00-.472-.029zM20.001 1a3 3 0 012.995 2.824L23 4v12a3 3 0 01-2.824 2.995L20 19h-5a3 3 0 01-2.96-2.522c.153.011.305.022.46.022.36 0 .714-.036 1.06-.098a1.5 1.5 0 001.304 1.092L15 17.5h5c.778 0 1.42-.596 1.493-1.356L21.5 16V4c0-.778-.596-1.42-1.356-1.493L20 2.5h-1V4h-3V2.5h-1c-.78 0-1.42.596-1.493 1.356L13.5 4v.589a6.045 6.045 0 00-1-.089l-.251.007-.25.017V4a3 3 0 012.825-2.995L15 1h5zm-4.318 6.318a4.5 4.5 0 11-6.366 6.364 4.5 4.5 0 016.366-6.364zm-3.182.606a.539.539 0 00-.533.452l-.007.088V9.96h-1.497a.54.54 0 00-.088 1.073l.088.007h1.497v1.496a.539.539 0 001.073.088l.007-.088V11.04h1.496a.538.538 0 00.54-.54.54.54 0 00-.453-.533l-.087-.007H13.04V8.464a.54.54 0 00-.54-.54z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationLandingMobileContactClient.style = iconCss;




/***/ })

};
;