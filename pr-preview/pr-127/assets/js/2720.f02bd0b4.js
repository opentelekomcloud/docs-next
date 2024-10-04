"use strict";
exports.id = 2720;
exports.ids = [2720];
exports.modules = {

/***/ 2720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_iban: () => (/* binding */ ContentIban)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentIban = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M20.5 3.5h-17a3 3 0 00-3 3V8h23V6.5a3 3 0 00-3-3zm-15.996 14h1.011v-5h-1.01v5zm2.124 0h1.863c1.086 0 1.543-.622 1.543-1.385 0-.524-.24-.921-.659-1.115v-.03c.382-.224.613-.629.613-1.144 0-.719-.433-1.326-1.459-1.326h-1.9v5zm3.818 0h1.026l.321-.966h1.721l.33.966h1.026l-1.707-5h-1.01l-1.707 5zm5.075 0h1.01v-3.129h.047l1.796 3.129h1.017v-5H18.39v3.144h-.047L16.548 12.5h-1.026v5zM.502 11h23v6.5a3 3 0 01-3 3h-17a3 3 0 01-3-3V11zm8.486 5.003c0-.36-.219-.592-.616-.592h-.733v1.197h.733c.397 0 .615-.224.615-.605zm3.69-1.961h-.046l-.523 1.549h1.093l-.524-1.549zm-4.283.509h-.756v-1.16h.756c.33 0 .547.224.547.576 0 .344-.209.584-.547.584z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M16.532 14.371h.045l1.797 3.128h1.017v-5h-1.003v3.144h-.045L16.547 12.5h-1.025v5h1.01v-3.128zm-3.9-.33h.045l.524 1.55h-1.093l.524-1.55zm-.839 2.493h1.722l.329.966h1.026l-1.706-5h-1.011l-1.706 5h1.026l.32-.965zm-4.154.075V15.41h.733c.396 0 .614.232.614.591 0 .381-.218.606-.614.606h-.733zm0-3.218h.756c.329 0 .547.223.547.575 0 .345-.21.585-.547.585h-.756v-1.16zm2.395 2.724c0-.525-.24-.92-.658-1.116v-.029c.381-.225.613-.629.613-1.145 0-.719-.434-1.325-1.46-1.325H6.628v5h1.864c1.085 0 1.542-.622 1.542-1.385zM4.506 17.5h1.01v-5h-1.01v5zM22.001 8h-20V6.5c0-.827.672-1.5 1.5-1.5h17c.827 0 1.5.673 1.5 1.5V8zm0 9.5c0 .827-.673 1.5-1.5 1.5h-17c-.828 0-1.5-.673-1.5-1.5V11h20v6.5zm-1.5-14h-17a3 3 0 00-3 3v11a3 3 0 003 3h17a3 3 0 003-3v-11a3 3 0 00-3-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentIban.style = iconCss;




/***/ })

};
;