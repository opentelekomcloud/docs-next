"use strict";
exports.id = 9517;
exports.ids = [9517];
exports.modules = {

/***/ 79517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_user_file_woman: () => (/* binding */ UserFileWoman)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileWoman = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.905 17.5L12 20.595l3.095-3.095h2.265a4.73 4.73 0 014.645 3.757l.04.213.175 1.03H1.78l.175-1.03a4.73 4.73 0 014.468-3.966l.217-.004h2.265zM11.5 2a4.92 4.92 0 013.695 1.55 2.47 2.47 0 012.24 1.4c.394.77.493 1.417.527 2.087l.014.405.015.633c.03.874.133 1.885.704 3.285a18.8 18.8 0 001.205 2.39c-.143.091-.39.19-.714.29l-.348.1a14.42 14.42 0 01-.604.144l-.448.09c-.154.03-.313.058-.477.085l-.5.075-.256.035-.523.06c-.176.017-.353.033-.53.046A5.29 5.29 0 0112 16a5.26 5.26 0 01-3.475-1.33l-.254-.02-.506-.05a10.045 10.045 0 01-.25-.029l-.49-.065-.24-.037-.462-.079-.437-.085-.406-.09-.368-.093-.325-.095c-.302-.095-.532-.19-.662-.277a18.8 18.8 0 001.2-2.39c.53-1.3.645-2.267.686-3.126l.03-.906c.026-.663.083-1.308.359-2.058C7.09 3.395 8.685 2 11.5 2zm2.75 4.415c-2.345 2.11-4.585 2.965-6.75 2.71.06 2.62 1.895 5.375 4.5 5.375s4.375-2.65 4.5-5.225a8.94 8.94 0 01-2.25-2.86z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8.905 17.5L12 20.595l3.095-3.095h2.266a4.734 4.734 0 014.644 3.749l.042.22.172 1.031H1.781l.172-1.031a4.734 4.734 0 014.461-3.964l.224-.005h2.267zm2.6-15.5c1.766 0 2.942.78 3.675 1.551 1.044.054 1.785.507 2.242 1.399.471.922.53 1.613.54 2.352l.005.685c.008.476.038.998.168 1.627.21 1.016.683 2.31 1.748 4.136-.166.107-.474.225-.88.341l-.371.098-.202.049-.431.093c-.3.06-.62.117-.953.167l-.51.07c-.345.044-.698.08-1.053.106-.95.816-2.131 1.326-3.479 1.326-1.348 0-2.53-.511-3.48-1.329-.265-.02-.53-.044-.792-.074l-.517-.065a20.5 20.5 0 01-.978-.16l-.449-.09-.413-.095-.191-.049-.348-.099c-.324-.099-.57-.198-.71-.289 1.083-1.858 1.542-3.155 1.743-4.186a9.143 9.143 0 00.157-1.52l.02-.802c.022-.614.084-1.225.358-1.971C7.092 3.395 8.692 2 11.504 2zm2.745 4.416c-2.343 2.11-4.585 2.966-6.74 2.71.055 2.619 1.845 5.374 4.495 5.374 2.598 0 4.368-2.65 4.487-5.224-.733-.648-1.705-1.66-2.242-2.86z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
UserFileWoman.style = iconCss;




/***/ })

};
;