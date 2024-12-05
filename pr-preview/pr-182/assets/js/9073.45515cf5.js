"use strict";
exports.id = 9073;
exports.ids = [9073];
exports.modules = {

/***/ 9073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_todo_list: () => (/* binding */ ContentTodoList)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentTodoList = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M3.938 3.507a4.058 4.058 0 00-.034.29l-.006.15v3.46h10.836v-3.46c0-.1-.008-.199-.02-.295l-.02-.145h3.438v7.171c-.105-.005-.209-.016-.315-.016-3.438 0-6.314 2.428-7.017 5.66l-.047.237H8.751a.754.754 0 00-.735.735c0 .36.288.677.638.728l.097.007h1.89a7.167 7.167 0 002.587 5.338l.213.171H3.438a2.947 2.947 0 01-2.933-2.766L.5 20.6V3.507h3.438zm13.879 8.655a5.687 5.687 0 11.002 11.374 5.687 5.687 0 01-.002-11.374zm2.952 3.716a.693.693 0 00-.926-.071l-.082.071-2.688 2.688-1.344-1.344a.696.696 0 00-1.008 0 .693.693 0 00-.071.926l.071.082 2.352 2.4 3.744-3.744c.288-.288.24-.72-.048-1.008zm-15.002.651a.75.75 0 100 1.5.75.75 0 000-1.5zm0-5.987a.75.75 0 100 1.5.75.75 0 000-1.5zm7.467.01H8.751a.753.753 0 00-.735.734c0 .36.288.678.638.729l.097.007h4.483a.754.754 0 00.735-.736.757.757 0 00-.638-.727l-.097-.007zM7.846 1.988c0-.882.833-1.617 1.763-1.469.641.136 1.11.7 1.17 1.372l.006.145v.442h.98a1.44 1.44 0 011.462 1.324l.007.145v1.96H5.398v-1.96a1.44 1.44 0 011.324-1.462l.145-.007h.979v-.49z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M20.805 16.857l-3.744 3.744-2.352-2.4a.696.696 0 010-1.008.696.696 0 011.008 0l1.344 1.344 2.688-2.688a.696.696 0 011.008 0c.288.288.336.72.048 1.008zm-3-4.724a5.687 5.687 0 000 11.375 5.688 5.688 0 100-11.375zM5.755 18a.75.75 0 100-1.5.75.75 0 000 1.5zm0-5.987a.75.75 0 100-1.5.75.75 0 000 1.5zM12 22.041H3.426a1.444 1.444 0 01-1.47-1.47V4.948h1.96v-.98c0-.147 0-.342.049-.49H.488v17.093a2.947 2.947 0 002.938 2.938H13.43A7.236 7.236 0 0112 22.041zm1.222-18.123c0-.832-.637-1.469-1.47-1.469h-.98v-.442c0-.734-.488-1.37-1.175-1.517-.93-.148-1.763.587-1.763 1.47v.49h-.98c-.832 0-1.468.636-1.468 1.468v1.96h7.836v-1.96zm1.47 1.03h1.959v5.787c.377-.062.76-.102 1.154-.102.106 0 .21.011.315.016V3.48h-3.478c.05.147.05.342.05.49v.98zM8.739 16.53a.754.754 0 00-.735.735c0 .392.343.735.735.735h1.888c-.002-.06-.01-.119-.01-.179 0-.442.047-.87.123-1.29H8.739zm0-6.007a.753.753 0 00-.735.734c0 .393.343.736.735.736h4.483a.754.754 0 00.735-.736.753.753 0 00-.735-.734H8.739z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentTodoList.style = iconCss;




/***/ })

};
;