"use strict";
exports.id = 3873;
exports.ids = [3873];
exports.modules = {

/***/ 43873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_waiting: () => (/* binding */ ContentWaiting)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentWaiting = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1.005c.444 0 .75.35.75.745 0 .402-.329.75-.75.75-5.239 0-9.5 4.261-9.5 9.5 0 5.238 4.261 9.5 9.5 9.5 5.238 0 9.5-4.262 9.5-9.5 0-.2.08-.39.22-.53.276-.28.78-.28 1.06 0 .14.14.22.335.22.53 0 6.066-4.934 11-11 11S1 18.066 1 12 5.934 1.005 12 1.005zm0 2.98a.75.75 0 01.743.649l.007.101v6.516l4.852.005a.75.75 0 01.1 1.493l-.103.006-6.349-.006V4.735a.75.75 0 01.75-.75zm9.71 4.635a.75.75 0 01.384 1.45.745.745 0 01-.915-.53.747.747 0 01.531-.92zM20.5 6.225a.746.746 0 011.025.275.744.744 0 01-.27 1.02.743.743 0 01-1.025-.27.745.745 0 01.27-1.025zM18.715 4.22a.76.76 0 011.065 0c.29.295.29.77 0 1.06-.15.15-.34.22-.53.22a.838.838 0 01-.51-.194.699.699 0 01-.239-.482.759.759 0 01.214-.604zm-2.24-1.475a.751.751 0 011.3.755.744.744 0 01-1.025.27.755.755 0 01-.275-1.025zm-2.546-.84a.751.751 0 011.45.385.755.755 0 01-.38.474.754.754 0 01-.938-.208.749.749 0 01-.132-.651z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 1.005c.444 0 .75.35.75.745 0 .402-.329.75-.75.75-5.239 0-9.5 4.261-9.5 9.5 0 5.238 4.261 9.5 9.5 9.5 5.238 0 9.5-4.262 9.5-9.5 0-.2.08-.39.22-.53.276-.28.78-.28 1.06 0 .14.14.22.335.22.53 0 6.066-4.934 11-11 11S1 18.066 1 12 5.934 1.005 12 1.005zm0 2.98a.75.75 0 01.743.649l.007.101v6.516l4.852.005a.75.75 0 01.1 1.493l-.103.006-6.349-.006V4.735a.75.75 0 01.75-.75zm9.71 4.635a.75.75 0 01.384 1.45.745.745 0 01-.915-.53.747.747 0 01.531-.92zM20.5 6.225a.746.746 0 011.025.275.744.744 0 01-.27 1.02.743.743 0 01-1.025-.27.745.745 0 01.27-1.025zM18.715 4.22a.76.76 0 011.065 0c.29.295.29.77 0 1.06-.15.15-.34.22-.53.22a.838.838 0 01-.51-.194.699.699 0 01-.239-.482.759.759 0 01.214-.604zm-2.24-1.475a.751.751 0 011.3.755.744.744 0 01-1.025.27.755.755 0 01-.275-1.025zm-2.546-.84a.751.751 0 011.45.385.755.755 0 01-.38.474.754.754 0 01-.938-.208.749.749 0 01-.132-.651z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentWaiting.style = iconCss;




/***/ })

};
;