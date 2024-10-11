"use strict";
exports.id = 1454;
exports.ids = [1454];
exports.modules = {

/***/ 61454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_international_sms: () => (/* binding */ ContentInternationalSms)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentInternationalSms = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M9.551 5.388c.163 0 .327.017.49.029l.245.01v6.818c0 .365.137.714.38.982l.11.11v.069h.088a1.41 1.41 0 00.891.309 1.47 1.47 0 00.743-.22l.129-.09h.176v-.127l2.116-2.116c.146.59.251 1.188.317 1.79l.04.454h.8a6.573 6.573 0 00-.761-2.187l-.17-.287.156-.156h2.528A9.076 9.076 0 119.55 5.388zM8.327 15.492H6.284c.1 1.429.53 2.815 1.254 4.05.175.281.38.542.61.778l.179.173v-5zm4.496 0h-2.047v5.001c.932-.858 1.754-2.556 2.012-4.68l.035-.32zm-8.998 0h-.798a6.563 6.563 0 001.415 3.15 12.965 12.965 0 01-.577-2.692l-.04-.458zm12.25 0h-.798a12.965 12.965 0 01-.617 3.15 6.563 6.563 0 001.358-2.836l.057-.314zM4.442 10.256a6.563 6.563 0 00-1.358 2.836l-.057.314h.798c.075-1.072.282-2.13.617-3.15zm3.885-1.851c-.933.858-1.755 2.556-2.013 4.68l-.035.32h2.048v-5zM24 0v9.306h-9.306l-2.939 2.939V0H24zm-9.666 3.063l-.13.003a1.102 1.102 0 00-1.122 1.117.98.98 0 00.694.997l.11.027.416.122c.28.073.431.176.431.411 0 .236-.176.407-.49.407a.49.49 0 01-.51-.338l-.019-.083h-.759a1.127 1.127 0 001.25 1.102A1.107 1.107 0 0015.418 5.7a1.078 1.078 0 00-.758-1.024l-.114-.029-.411-.112c-.201-.054-.368-.147-.368-.397a.392.392 0 01.436-.397.44.44 0 01.475.319l.015.088h.7a1.097 1.097 0 00-1.06-1.086zm6.966.02a1.19 1.19 0 00-1.17 1.1.98.98 0 00.69.997l.109.027.416.122c.28.073.431.176.431.411 0 .236-.176.407-.49.407a.49.49 0 01-.505-.338l-.019-.083h-.724a1.127 1.127 0 001.114 1.108l.15-.006A1.107 1.107 0 0022.53 5.7a1.073 1.073 0 00-.776-1.026l-.116-.027-.416-.112c-.201-.054-.367-.147-.367-.397a.392.392 0 01.435-.397.431.431 0 01.477.318l.013.089h.72a1.19 1.19 0 00-1.2-1.067zm-4.647.061h-.656v3.6h.725V4.712h.034l.877 1.587h.235l.881-1.587h.035v2.032h.705l.005-3.6h-.666L17.76 5.138h-.034l-1.073-1.994z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M7.1 5.75a9.51 9.51 0 011.647-.222l.328-.01.286.002.429.017.21.013V14h3.65l-.15-1.35 1.25-1.25c.167.667.299 1.403.367 2.15l.033.45H17a7.452 7.452 0 00-.789-2.696L16.05 11h1.65c.5 1.15.8 2.4.8 3.75 0 5.1-4.15 9.25-9.25 9.25S0 19.85 0 14.75c0-4.35 3-8 7.1-9zm6.5 9.75H10v6.85c1.794-.582 3.306-3.326 3.578-6.547l.022-.303zm-5.1 0H4.9c.194 3.248 1.657 6.074 3.433 6.79l.167.06V15.5zm-5.1 0H1.55c.2 2.4 1.6 4.5 3.55 5.75-.89-1.406-1.518-3.252-1.675-5.331L3.4 15.5zm13.55 0H15.1c-.15 2.25-.75 4.25-1.7 5.75 1.872-1.2 3.237-3.183 3.52-5.463l.03-.287zM8.5 7.15c-1.794.582-3.306 3.326-3.578 6.547L4.9 14h3.6V7.15zm-3.4 1.1c-1.872 1.2-3.237 3.183-3.52 5.463L1.55 14H3.4c.15-2.25.75-4.25 1.7-5.75zM24 0v9.5h-9.5l-3 3V0H24zm-9.9 3.2c-.7 0-1.2.45-1.2 1.15 0 .415.17.83.669 1.01l.131.04.4.1c.3.05.45.15.45.4 0 .2-.2.4-.5.4-.267 0-.454-.119-.528-.356L13.5 5.85h-.8c.1.7.55 1.1 1.3 1.1.7 0 1.25-.4 1.2-1.1 0-.458-.294-.833-.767-1.007L14.3 4.8l-.4-.1c-.2-.05-.35-.15-.35-.4s.2-.4.45-.4c.262 0 .41.115.476.311l.024.089h.8c-.05-.65-.45-1.1-1.2-1.1zm7.2 0c-.7 0-1.2.45-1.2 1.15 0 .415.17.83.669 1.01l.131.04.4.1c.3.05.45.15.45.4 0 .2-.2.4-.5.4-.267 0-.454-.119-.528-.356L20.7 5.85h-.75c.1.7.55 1.1 1.3 1.1.7 0 1.25-.4 1.2-1.1 0-.458-.294-.833-.767-1.007L21.55 4.8l-.4-.1c-.2-.05-.35-.15-.35-.4s.2-.4.45-.4c.262 0 .41.115.476.311l.024.089h.75c-.05-.65-.45-1.1-1.2-1.1zm-4.8 0h-.7v3.65h.75V4.8h.05l.9 1.6h.2l.9-1.6h.05v2.1h.8V3.2h-.7l-1.1 2.05h-.05L16.5 3.2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentInternationalSms.style = iconCss;




/***/ })

};
;