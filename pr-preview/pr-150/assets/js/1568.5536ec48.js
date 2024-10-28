"use strict";
exports.id = 1568;
exports.ids = [1568];
exports.modules = {

/***/ 1568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_communication_loyalty_lost: () => (/* binding */ CommunicationLoyaltyLost)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationLoyaltyLost = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M7.436 14.782l-1.898 1.625 2.589 3.029 1.899-1.626-2.59-3.028zm4.9 4.946l-.036.042a.391.391 0 01-.3.126.383.383 0 01-.294-.121l-.384-.456-1.905 1.623.386.454a2.888 2.888 0 004.396 0l.362-.422-1.9-1.621-.325.375zm7.548-8.928c-.11.195-.241.383-.39.557l-1.664 1.946 1.898 1.625 1.666-1.947c.252-.295.477-.616.667-.953l.247-.435-2.18-1.23-.244.437zm-15.377.556a3.547 3.547 0 01-.404-.581l-.242-.438-2.188 1.21.243.439c.197.354.43.689.692.995l1.639 1.917 1.9-1.625-1.64-1.917zm9.443 6.485l1.9 1.624 2.589-3.028-1.9-1.625-2.59 3.029zM10.447 7.728c.007.009.7.827 1.07 2.208l.484 1.796.483-1.797c.37-1.381 1.064-2.198 1.07-2.205l.403-.465L12 6.174l-1.952 1.09.398.464zm9.28-.607c.317.464.518 1.003.583 1.558l.057.497 2.484-.29-.06-.497a5.988 5.988 0 00-.997-2.674 6.151 6.151 0 00-.548-.694l-.338-.368-1.843 1.69.339.369c.115.125.224.263.324.409zm-4.24-1.261a3.6 3.6 0 012.04-.203l.49.096.479-2.453-.491-.096a6.03 6.03 0 00-3.474.347h-.001l-.196.084-.457.206 1.029 2.27.58-.251zm-8.983-.207a3.565 3.565 0 012.165.273l.456.21L10.16 3.86l-.454-.208a6.059 6.059 0 00-.467-.191 6.037 6.037 0 00-3.198-.265l-.49.092.46 2.457.492-.092zM3.696 8.65a3.509 3.509 0 01.579-1.531v-.001c.102-.15.217-.295.342-.43l.34-.365-1.83-1.704-.34.366A6.008 6.008 0 001.215 8.34l-.061.496 2.482.31.06-.496z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12.678 20.095c-.343.401-1.016.4-1.355.001l-.06-.07-1.142.972.061.072a2.39 2.39 0 003.637 0l.035-.04-1.14-.976-.036.041zm1.976-2.31l1.14.974 1.94-2.268-1.14-.975-1.94 2.268zm-8.52-14.1l.277 1.474a4.086 4.086 0 012.466.311l.621-1.365a5.581 5.581 0 00-3.364-.42zm13.74 7.994l-1.34 1.567 1.14.975 1.34-1.567c.23-.27.437-.565.612-.874l-1.307-.737a4.055 4.055 0 01-.445.636zM14.721 4.01a6.213 6.213 0 00-.182.08l.62 1.365.136-.059a4.066 4.066 0 012.326-.23l.287-1.473a5.586 5.586 0 00-3.187.317zM3.665 11.016l-1.313.726c.18.324.394.631.635.914l1.315 1.536 1.14-.975-1.315-1.537a4.044 4.044 0 01-.462-.664zm17.14-2.396l1.49-.173a5.496 5.496 0 00-1.418-3.089l-1.106 1.014a3.998 3.998 0 011.034 2.248zM12 9.805h.001c.41-1.524 1.174-2.404 1.174-2.404L12 6.745l-1.176.656s.767.88 1.176 2.403v.001zM3.861 6.838a3.93 3.93 0 01.39-.49L3.152 5.326A5.519 5.519 0 001.71 8.402l1.49.188a3.988 3.988 0 01.662-1.75zm2.38 9.624l1.94 2.268 1.14-.975-1.94-2.269-1.14.976z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CommunicationLoyaltyLost.style = iconCss;




/***/ })

};
;