"use strict";
exports.id = 7760;
exports.ids = [7760];
exports.modules = {

/***/ 77760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_device_mobile_equipment: () => (/* binding */ DeviceMobileEquipment)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceMobileEquipment = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18.83 6.5c.728 0 1.368.484 1.565 1.185l.29 1.03a2.915 2.915 0 011.815 2.7V13.5h1V16h-1v2.585a2.915 2.915 0 01-1.815 2.7l-.29 1.03A1.625 1.625 0 0118.83 23.5h-4.16a1.625 1.625 0 01-1.565-1.185l-.29-1.03a2.915 2.915 0 01-1.815-2.7v-7.17c0-1.185.717-2.253 1.815-2.7l.29-1.03A1.625 1.625 0 0114.67 6.5zM10.9.5A3.105 3.105 0 0114 3.58v1.5a3.13 3.13 0 00-2.34 2.2l-.115.415a4.41 4.41 0 00-2.045 3.72v7.17A4.36 4.36 0 0010.225 21H4.6a3.105 3.105 0 01-3.1-3.1V3.6A3.105 3.105 0 014.6.5zm8.685 9.5h-5.67c-.781 0-1.415.634-1.415 1.415v7.17c0 .781.634 1.415 1.415 1.415h5.67c.781 0 1.415-.634 1.415-1.415v-7.17c0-.781-.634-1.415-1.415-1.415zM7.75 16a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0 .5a.75.75 0 110 1.5.75.75 0 010-1.5zM9.5 2.25H6v1h3.5v-1z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M18.83 6.5c.681 0 1.284.422 1.52 1.048l.045.137.29 1.03a2.918 2.918 0 011.808 2.498l.007.202V13.5h1V16h-1v2.585a2.92 2.92 0 01-1.636 2.622l-.174.078-.29 1.03a1.633 1.633 0 01-1.421 1.179l-.144.006H14.67a1.624 1.624 0 01-1.52-1.048l-.045-.137-.29-1.03a2.918 2.918 0 01-1.808-2.498L11 18.585v-7.17a2.92 2.92 0 011.636-2.622l.174-.078.29-1.03a1.633 1.633 0 011.421-1.179l.144-.006h4.165zM10.9.5a3.103 3.103 0 013.095 2.924L14 3.6v1.485c-.499.11-.955.337-1.34.66l-.16.145V3.6c0-.831-.642-1.52-1.455-1.593L10.9 2H9.5v1.5H6V2H4.6c-.831 0-1.52.642-1.593 1.455L3 3.6v14.3c0 .831.642 1.52 1.455 1.593l.145.007h5c.096.454.261.88.484 1.27l.141.23H4.6a3.103 3.103 0 01-3.095-2.924L1.5 17.9V3.6A3.103 3.103 0 014.424.505L4.6.5h6.3zm8.685 9.5h-5.67c-.734 0-1.34.562-1.409 1.279l-.006.136v7.17c0 .734.562 1.34 1.279 1.409l.136.006h5.67c.734 0 1.34-.562 1.409-1.279l.006-.136v-7.17c0-.734-.562-1.34-1.279-1.409L19.585 10zM7.75 16a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DeviceMobileEquipment.style = iconCss;




/***/ })

};
;