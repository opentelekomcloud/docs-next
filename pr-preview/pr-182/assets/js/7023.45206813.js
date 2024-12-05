"use strict";
exports.id = 7023;
exports.ids = [7023];
exports.modules = {

/***/ 57023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_twitching_closed_state: () => (/* binding */ DeviceTwitchingClosedState)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceTwitchingClosedState = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.532 15.169a.75.75 0 111.436.43 12.812 12.812 0 01-5.043 6.891.75.75 0 11-.844-1.239 11.312 11.312 0 004.451-6.082zM5.01 10.51V15a4.504 4.504 0 004.286 4.495l.211.005h3.483l-2.121 2.123a2.993 2.993 0 01-4.074.152l-.164-.152-4.242-4.245a3.008 3.008 0 01-.135-4.102l.135-.143 2.62-2.623zm13.116 7.173a.749.749 0 111.127.989 9.582 9.582 0 01-3.921 2.68.749.749 0 11-.512-1.41 8.068 8.068 0 003.306-2.26zm-6.12-13.44a4.004 4.004 0 013.993 3.8l.005.2v1.244H17.5V15a3 3 0 01-2.822 2.995l-.176.005H9.506a2.999 2.999 0 01-2.993-2.824L6.508 15V9.487h1.5V8.243c0-2.205 1.793-4 3.997-4zm0 7.757a1.249 1.249 0 00-.857 2.153l.108.091V15.5h1.5v-1.256a1.245 1.245 0 00-.75-2.244zm3.25-10.502c.7 0 1.399.243 1.956.723l.162.152 4.243 4.245a3.003 3.003 0 01.135 4.105l-.135.145L19 13.485V7.987h-1.504a5.504 5.504 0 00-4.548-5.157l-.23-.035.418-.417a2.984 2.984 0 012.119-.88zm-3.25 4.245A2.502 2.502 0 009.512 8.08l-.005.164v1.244h4.997V8.243c0-1.378-1.121-2.5-2.499-2.5zM5.085 1.51a.75.75 0 11.845 1.24 11.304 11.304 0 00-4.45 6.082.75.75 0 01-1.437-.43A12.81 12.81 0 015.086 1.51zM8.68 2.648a.75.75 0 11.513 1.41 8.063 8.063 0 00-3.307 2.26.75.75 0 01-1.127-.99 9.58 9.58 0 013.921-2.68z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M22.532 15.169a.748.748 0 111.436.43 12.815 12.815 0 01-5.043 6.891.749.749 0 11-.844-1.239 11.313 11.313 0 004.451-6.082zM5.01 10.51v2.12l-1.562 1.563a1.5 1.5 0 00-.103 2.006l.103.114 4.242 4.245c.285.285.66.44 1.06.44.35 0 .68-.119.948-.34l.11-.1 1.058-1.058h2.123l-2.12 2.123a2.993 2.993 0 01-4.074.152l-.164-.152-4.242-4.245a3.008 3.008 0 01-.135-4.102l.135-.143 2.62-2.623zm13.116 7.173a.751.751 0 011.127.989 9.58 9.58 0 01-3.922 2.68.748.748 0 01-.96-.45.75.75 0 01.449-.96 8.068 8.068 0 003.306-2.26zm-6.12-13.44a4.004 4.004 0 013.993 3.8l.005.2v1.244H17.5V15a3 3 0 01-2.822 2.995l-.176.005H9.506a2.999 2.999 0 01-2.993-2.824L6.508 15V9.487h1.5V8.243c0-2.205 1.793-4 3.997-4zm3.996 6.744H8.007V15a1.5 1.5 0 001.354 1.493l.145.007h4.996a1.5 1.5 0 001.492-1.356l.007-.144v-4.013zM12.005 12c.69 0 1.25.56 1.25 1.25 0 .357-.152.676-.392.903l-.108.091V15.5h-1.5v-1.256a1.243 1.243 0 01-.499-.994c0-.69.56-1.25 1.25-1.25zm3.25-10.502c.699 0 1.398.243 1.955.724l.163.15 4.242 4.246a3.003 3.003 0 01.135 4.105l-.135.145-2.616 2.617V11.36l1.557-1.557a1.502 1.502 0 00.102-2.007l-.102-.113-4.242-4.245a1.485 1.485 0 00-1.938-.15 5.424 5.424 0 00-1.367-.447l-.29-.046.417-.417a2.984 2.984 0 012.118-.88zm-3.25 4.245A2.502 2.502 0 009.512 8.08l-.005.164v1.244h4.997V8.243c0-1.378-1.121-2.5-2.499-2.5zM5.086 1.51a.749.749 0 11.844 1.24 11.306 11.306 0 00-4.451 6.082.75.75 0 11-1.436-.43A12.814 12.814 0 015.086 1.51zm3.595 1.138a.749.749 0 11.511 1.41 8.068 8.068 0 00-3.306 2.26.749.749 0 11-1.127-.99 9.574 9.574 0 013.922-2.68z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceTwitchingClosedState.style = iconCss;




/***/ })

};
;