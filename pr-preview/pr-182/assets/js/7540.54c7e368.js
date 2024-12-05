"use strict";
exports.id = 7540;
exports.ids = [7540];
exports.modules = {

/***/ 27540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_telekom_app_shell: () => (/* binding */ Shell)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const telekomAppShellCss = ":host{--spacing-x:0;--min-height:100vh}[part~='base']{display:flex;min-height:var(--min-height);flex-direction:column}[part~='content']{box-sizing:border-box;align-self:center;width:100%;padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}";

const Shell = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "header" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("main", { part: "content" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "footer" }))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Shell.style = telekomAppShellCss;




/***/ })

};
;