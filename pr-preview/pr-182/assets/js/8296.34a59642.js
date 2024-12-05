"use strict";
exports.id = 8296;
exports.ids = [8296];
exports.modules = {

/***/ 65915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_twitching_open_state: () => (/* binding */ DeviceTwitchingOpenState)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceTwitchingOpenState = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.532 15.168a.75.75 0 111.436.43 12.814 12.814 0 01-5.043 6.892.748.748 0 01-1.041-.198.75.75 0 01.197-1.041 11.309 11.309 0 004.451-6.083zM5.01 10.51V15a4.504 4.504 0 004.286 4.495l.21.005h3.484l-2.121 2.122a2.993 2.993 0 01-4.074.153l-.164-.153-4.242-4.245a3.008 3.008 0 01-.135-4.1l.135-.145 2.62-2.622zm13.116 7.172a.749.749 0 111.127.99 9.58 9.58 0 01-3.921 2.68.75.75 0 11-.512-1.41 8.063 8.063 0 003.306-2.26zm-6.12-13.439a4 4 0 013.623 2.315l.082.188-1.355.678a2.493 2.493 0 00-2.35-1.68 2.503 2.503 0 00-2.493 2.335l-.005.164v1.243H17.5V15a3 3 0 01-2.822 2.995l-.176.005H9.506a2.999 2.999 0 01-2.993-2.824L6.508 15V9.486h1.5V8.243c0-2.206 1.793-4 3.997-4zm0 7.757c-.69 0-1.248.56-1.248 1.25 0 .362.156.686.403.914l.096.08V15.5h1.5v-1.256A1.246 1.246 0 0012.006 12zm3.25-10.503c.7 0 1.399.244 1.956.724l.162.151 4.242 4.245a3.003 3.003 0 01.136 4.105l-.136.145L19 13.485V7.986h-1.504a5.505 5.505 0 00-4.548-5.156l-.23-.035.418-.418a2.984 2.984 0 012.119-.88zm-10.17.013a.75.75 0 01.845 1.239A11.307 11.307 0 001.48 8.83.75.75 0 11.043 8.4a12.809 12.809 0 015.043-6.89zM8.68 2.647a.75.75 0 01.513 1.41 8.068 8.068 0 00-3.307 2.26.748.748 0 01-1.058.07.75.75 0 01-.069-1.059 9.582 9.582 0 013.921-2.68z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M5.009 10.51v2.12l-1.562 1.562a1.5 1.5 0 00-.102 2.007l.102.113 4.243 4.245c.284.285.66.44 1.059.44.35 0 .68-.118.948-.339l.111-.1 1.057-1.058h2.124l-2.121 2.122a2.993 2.993 0 01-4.074.153l-.164-.153-4.242-4.245a3.008 3.008 0 01-.135-4.1l.135-.145 2.62-2.622zm13.116 7.172a.749.749 0 111.127.99 9.58 9.58 0 01-3.921 2.68.75.75 0 11-.512-1.41 8.063 8.063 0 003.306-2.26zm-6.12-13.439a4 4 0 013.623 2.315l.082.188-1.355.678a2.493 2.493 0 00-2.35-1.68 2.503 2.503 0 00-2.493 2.335l-.005.164v1.243H17.5V15a3 3 0 01-2.822 2.995l-.176.005H9.506a2.999 2.999 0 01-2.993-2.824L6.508 15V9.486h1.5V8.243c0-2.206 1.793-4 3.997-4zm3.997 6.743H8.007V15c0 .778.596 1.42 1.355 1.493l.144.007h4.997c.777 0 1.419-.596 1.492-1.356l.007-.144v-4.014zM12.006 12c.69 0 1.249.56 1.249 1.25 0 .362-.156.686-.403.914l-.097.08V15.5h-1.499v-1.256a1.244 1.244 0 01-.5-.994c0-.69.56-1.25 1.25-1.25zm3.249-10.503c.7 0 1.399.244 1.956.724l.162.151 4.242 4.245a3.003 3.003 0 01.136 4.105l-.136.145L19 13.485V11.36l1.556-1.558a1.502 1.502 0 00.103-2.007l-.103-.113-4.242-4.245a1.485 1.485 0 00-1.937-.15 5.456 5.456 0 00-1.367-.446l-.291-.046.417-.418a2.984 2.984 0 012.119-.88zm7.277 13.671a.75.75 0 111.436.43 12.814 12.814 0 01-5.043 6.892.748.748 0 01-1.041-.198.75.75 0 01.197-1.041 11.309 11.309 0 004.451-6.083zM5.086 1.51a.75.75 0 01.844 1.239A11.307 11.307 0 001.48 8.83.75.75 0 11.043 8.4a12.809 12.809 0 015.043-6.89zM9.64 3.097a.75.75 0 01-.448.96 8.068 8.068 0 00-3.307 2.26.748.748 0 01-1.058.07.75.75 0 01-.069-1.059 9.582 9.582 0 013.921-2.68c.39-.142.82.059.96.449z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceTwitchingOpenState.style = iconCss;




/***/ })

};
;