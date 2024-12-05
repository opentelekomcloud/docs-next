"use strict";
exports.id = 4574;
exports.ids = [4574];
exports.modules = {

/***/ 64574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_home_unable_to_connect_to_router: () => (/* binding */ HomeUnableToConnectToRouter)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeUnableToConnectToRouter = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.742 11.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zm0 1.5a4.756 4.756 0 00-4.75 4.75 4.756 4.756 0 004.75 4.75c2.62 0 4.75-2.131 4.75-4.75 0-2.62-2.13-4.75-4.75-4.75zM6.8 6l5.2 4.48L17.2 6h2.3a3 3 0 012.994 2.824L22.5 9v2.646A7.694 7.694 0 0017.742 10c-4.273 0-7.75 3.477-7.75 7.75 0 1.457.407 2.819 1.11 3.984l.168.266H4.5a3 3 0 01-2.995-2.824L1.5 19V9a3 3 0 012.823-2.995L4.5 6h2.302zm8.413 9.22a.75.75 0 01.976-.073l.084.073 1.47 1.469 1.47-1.47a.75.75 0 011.133.977l-.073.084-1.47 1.47 1.47 1.47a.749.749 0 01-.967 1.14l-.094-.08-1.47-1.468-1.469 1.468a.746.746 0 01-1.06 0 .749.749 0 01-.073-.976l.072-.084 1.47-1.47-1.47-1.47a.749.749 0 010-1.06zM12 6.5a1 1 0 110 2 1 1 0 010-2zm0-3c1.482 0 2.777.812 3.466 2.013L14.3 6.52A2.502 2.502 0 0012 5c-1.03 0-1.915.627-2.298 1.52L8.534 5.513A4.002 4.002 0 0111.998 3.5zm0-3a6.99 6.99 0 015.607 2.818l.155.217-1.146.986A5.496 5.496 0 0012 2c-1.85 0-3.486.921-4.484 2.326l-.132.195-1.144-.986A6.993 6.993 0 0111.998.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.75 11.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zM6.8 6l1.741 1.5H4.5c-.778 0-1.42.596-1.493 1.356L3 9v10c0 .778.596 1.42 1.356 1.493l.144.007h6.011c.162.424.356.83.584 1.215l.178.285H4.5a3 3 0 01-2.995-2.824L1.5 19V9a3 3 0 012.824-2.995L4.5 6h2.3zm8.42 9.22a.749.749 0 000 1.06l1.47 1.47-1.47 1.47a.749.749 0 101.061 1.06l1.469-1.47 1.47 1.47a.746.746 0 001.061 0 .749.749 0 000-1.06l-1.47-1.47 1.47-1.47a.749.749 0 10-1.061-1.06l-1.47 1.469-1.469-1.47a.75.75 0 00-1.061 0zM19.5 6a3 3 0 012.995 2.824L22.5 9v2.636a7.61 7.61 0 00-1.182-.758L21 10.722V9c0-.778-.596-1.42-1.356-1.493L19.5 7.5h-4.042L17.2 6h2.3zm-7.5.5a1 1 0 011 1 .931.931 0 01-.015.15L12 8.5l-.985-.85A.931.931 0 0111 7.5a1 1 0 011-1zm0-3c1.404 0 2.64.729 3.352 1.827l.114.186-1.168 1.007A2.5 2.5 0 0012 5a2.5 2.5 0 00-2.226 1.365l-.072.155-1.168-1.007A3.997 3.997 0 0112 3.5zm0-3a6.99 6.99 0 015.606 2.818l.156.217-1.145.986A5.498 5.498 0 0012 2c-1.85 0-3.488.921-4.485 2.326l-.132.195-1.145-.986A6.993 6.993 0 0112 .5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
HomeUnableToConnectToRouter.style = iconCss;




/***/ })

};
;