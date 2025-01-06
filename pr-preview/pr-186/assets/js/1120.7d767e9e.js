"use strict";
exports.id = 1120;
exports.ids = [1120];
exports.modules = {

/***/ 51120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_download_from_cloud: () => (/* binding */ ActionDownloadFromCloud)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionDownloadFromCloud = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 9.995a.75.75 0 01.743.648l.007.102v5.25h3.67L12 22.745l-2.25-3.44-2.17-3.31h3.67v-5.25a.75.75 0 01.75-.75zm-3.28-4.62A7.6 7.6 0 0120.65 8.65a5.745 5.745 0 013.1 5.095c0 2.915-2.165 5.485-5 5.695l-.359.02-.717.019-1.411.015h-.343l1.775-2.68 1.5-2.32H14.25v-3.75a2.25 2.25 0 00-4.495-.154l-.005.155v3.75H4.805l3.275 5-1.476-.01-1.042-.017-.648-.023a8.398 8.398 0 01-.164-.01c-2.56-.19-4.5-2.55-4.5-5.19a5.25 5.25 0 012.675-4.57 4.685 4.685 0 015.795-4.3z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 10a.75.75 0 01.743.648l.007.102V16h3.669L12 22.75 7.582 16h3.668v-5.25A.75.75 0 0112 10zm1.511-6.326a7.593 7.593 0 017.149 4.982 5.76 5.76 0 013.09 5.093c0 3.097-2.46 5.63-5.53 5.746L18 19.5h-2.08l.98-1.5H18a4.255 4.255 0 004.25-4.25c0-2.023-1.227-3.112-2.06-3.626l-.216-.126a5.097 5.097 0 00-.099-.053l-.173-.087-.251-.112a.071.071 0 01-.012-.006l-.049-.15-.085-.265-.083-.23-.11-.267a6.099 6.099 0 00-5.601-3.654 6.082 6.082 0 00-3.975 1.478l-.457.411-.084-.027-.333-.117a3.205 3.205 0 00-3.41.87 3.177 3.177 0 00-.84 2.113v.213l.009.182.023.294c0 .011 0 .02-.002.027l-.087.04-.194.082-.177.082-.206.106-.227.133c-.784.486-1.801 1.44-1.801 3.189a3.754 3.754 0 003.551 3.745L5.5 18h1.598l.982 1.5H5.5a5.256 5.256 0 01-5.25-5.25c0-1.9 1.032-3.643 2.667-4.568a4.718 4.718 0 014.704-4.438c.37 0 .738.045 1.101.133a7.593 7.593 0 014.79-1.703z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionDownloadFromCloud.style = iconCss;




/***/ })

};
;