"use strict";
exports.id = 1684;
exports.ids = [1684];
exports.modules = {

/***/ 31684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_content_loyalty: () => (/* binding */ ContentLoyalty)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentLoyalty = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M15.153.84c.156 0 .307.02.454.068.554.18.942.693 1.306 1.246l.271.416c.271.416.55.811.896 1.064.35.254.814.4 1.293.53l.48.13c.638.177 1.243.385 1.583.852.336.462.347 1.099.318 1.759l-.024.497c-.022.497-.026.985.109 1.401.13.402.42.785.73 1.17l.312.385c.413.517.782 1.049.782 1.642 0 .594-.37 1.125-.782 1.642l-.312.386c-.31.384-.599.767-.729 1.168-.135.417-.13.905-.109 1.402l.024.497c.029.66.018 1.298-.318 1.76-.34.466-.945.674-1.583.85l-.48.13c-.48.132-.943.277-1.293.531-.289.21-.53.52-.76.858l-.407.622c-.364.553-.752 1.066-1.307 1.247a1.457 1.457 0 01-.452.067c-.394 0-.813-.13-1.24-.288l-.643-.243c-.43-.157-.859-.289-1.269-.289-.41 0-.839.132-1.27.29l-.643.242c-.427.157-.845.288-1.239.288a1.47 1.47 0 01-.453-.067c-.554-.18-.942-.694-1.306-1.247l-.408-.622c-.229-.338-.47-.648-.759-.858-.35-.254-.814-.4-1.293-.53l-.48-.13c-.638-.177-1.244-.385-1.583-.851-.336-.463-.347-1.1-.318-1.76l.024-.497c.022-.497.026-.985-.109-1.401-.13-.402-.42-.785-.73-1.17l-.312-.385C.71 13.125.342 12.593.342 12s.37-1.125.782-1.642l.465-.578c.25-.32.468-.642.577-.976.135-.417.13-.905.108-1.402l-.024-.497c-.028-.66-.018-1.298.318-1.76.34-.466.946-.674 1.583-.85l.48-.13c.48-.132.944-.277 1.293-.531.347-.253.625-.648.896-1.064l.271-.416c.365-.553.752-1.066 1.307-1.246.146-.048.297-.069.453-.069.393 0 .812.132 1.238.29l.644.242c.43.157.859.288 1.269.288.41 0 .839-.13 1.27-.288l.643-.243c.427-.157.846-.288 1.239-.288zm-4.81 7.562a2.461 2.461 0 00-2.896.928 2.467 2.467 0 00.045 2.836l.12.153 3.742 4.376a.854.854 0 001.214.084l.084-.084 3.74-4.376c.724-.845.791-2.07.166-2.99a2.464 2.464 0 00-2.991-.89c-.672.277-1 .709-1.262 1.191l-.152.295-.15.301-.22-.44c-.296-.574-.634-1.09-1.44-1.384z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M23.66 12c0-1.187-1.476-2.126-1.823-3.197-.361-1.109.268-2.734-.404-3.658-.678-.932-2.422-.832-3.355-1.511-.924-.673-1.364-2.366-2.474-2.726a1.455 1.455 0 00-.453-.069c-.982 0-2.127.82-3.152.82-1.024 0-2.168-.82-3.15-.82a1.45 1.45 0 00-.454.069c-1.109.36-1.55 2.053-2.473 2.725-.933.68-2.677.58-3.356 1.513-.672.923-.043 2.548-.403 3.657C1.816 9.874.34 10.813.34 12c0 1.187 1.475 2.126 1.823 3.197.361 1.109-.268 2.733.404 3.658.678.933 2.422.832 3.356 1.511.923.672 1.364 2.366 2.473 2.727.146.047.297.067.453.067.982 0 2.127-.82 3.152-.82 1.024 0 2.168.82 3.151.82.155 0 .307-.02.453-.067 1.11-.361 1.55-2.054 2.473-2.727.934-.678 2.678-.578 3.357-1.511.672-.924.043-2.549.402-3.659.348-1.07 1.823-2.009 1.823-3.196zm-2.134.93c-.413.508-.882 1.083-1.116 1.803-.241.743-.203 1.5-.169 2.168.017.337.045.893-.023 1.071-.148.123-.694.269-1.023.357-.643.173-1.373.369-2 .825-.62.451-1.027 1.081-1.386 1.637-.193.299-.517.799-.657.87-.21 0-.652-.17-1.008-.306-.633-.241-1.35-.515-2.144-.515s-1.511.274-2.143.515c-.348.133-.778.297-1.005.305-.166-.105-.474-.582-.66-.87-.36-.555-.766-1.185-1.387-1.636-.627-.456-1.356-.652-2-.825-.33-.088-.875-.235-1.022-.358-.069-.178-.041-.733-.024-1.07.034-.668.072-1.425-.169-2.168-.234-.72-.702-1.296-1.116-1.804-.23-.283-.615-.755-.635-.925.02-.179.405-.652.635-.934.413-.508.882-1.084 1.116-1.804.241-.742.203-1.5.169-2.168-.017-.336-.045-.892.024-1.07.147-.123.693-.27 1.022-.358.644-.173 1.373-.368 2-.824.62-.452 1.027-1.082 1.386-1.637.188-.289.496-.767.661-.87.211.002.651.17 1.005.305.632.242 1.349.516 2.143.516.794 0 1.511-.274 2.143-.515.348-.132.778-.297 1.005-.304.166.105.474.581.66.87.36.555.767 1.185 1.387 1.636.627.456 1.357.652 2 .824.33.089.875.235 1.023.358.068.178.04.734.023 1.07-.034.668-.072 1.426.169 2.168.234.721.703 1.296 1.116 1.805.23.282.614.755.634.925-.02.178-.404.65-.634.933zm-7.961-4.492c-.941.389-1.207 1.08-1.565 1.788-.376-.743-.652-1.456-1.659-1.824a2.461 2.461 0 00-2.896.928 2.466 2.466 0 00.165 2.99l3.741 4.375a.854.854 0 001.298 0l3.741-4.376c.723-.845.79-2.07.165-2.99a2.464 2.464 0 00-2.99-.89z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentLoyalty.style = iconCss;




/***/ })

};
;