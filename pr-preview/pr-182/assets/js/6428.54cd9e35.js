"use strict";
exports.id = 6428;
exports.ids = [6428];
exports.modules = {

/***/ 36428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_tiles_add: () => (/* binding */ ActionTilesAdd)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionTilesAdd = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.5 13.5V22H4a2 2 0 01-1.995-1.85L2 20v-6.5h8.5zm7.25 0a.75.75 0 01.743.648l.007.102V17h2.75a.75.75 0 01.102 1.493l-.102.007H18.5v2.75a.75.75 0 01-1.493.102L17 21.25V18.5h-2.75a.75.75 0 01-.102-1.493L14.25 17H17v-2.75a.75.75 0 01.75-.75zM10.5 2v8.5H2V4a2 2 0 011.85-1.995L4 2h6.5zM20 2a2 2 0 011.995 1.85L22 4v6.5h-8.5V2H20z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M10.5 13.5V22H4c-1.05 0-1.918-.82-1.994-1.851L2 20v-6.5h8.5zm7.25 0c.367 0 .691.294.743.651l.007.099V17h2.75c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H18.5v2.75c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L17 21.25V18.5h-2.75c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L14.25 17H17v-2.75c0-.4.35-.75.75-.75zM9 15H3.5v5c0 .267.158.454.404.493L4 20.5h5V15zm1.5-13v8.5H2V4c0-1.05.82-1.918 1.851-1.994L4 2h6.5zM20 2c1.05 0 1.918.82 1.994 1.851L22 4v6.5h-8.5V2H20zM9 3.5H4c-.267 0-.454.158-.493.404L3.5 4v5H9V3.5zm11 0h-5V9h5.5V4c0-.267-.158-.454-.404-.493L20 3.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionTilesAdd.style = iconCss;




/***/ })

};
;