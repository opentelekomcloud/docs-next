"use strict";
exports.id = 6895;
exports.ids = [6895];
exports.modules = {

/***/ 46895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_telekom_footer_data_back_compat: () => (/* binding */ TelekomFooterDataBackCompat)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


// import { findRootNode, findSelected } from '../../../utils/menu-utils';
// import { renderIcon } from '../../../utils/render-icon';
const readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  }
  catch (error) {
    parsedData = data;
  }
  return parsedData;
};
const TelekomFooterDataBackCompat = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.type = 'standard';
    this.footerNavigation = [];
    this.copyright = '© Deutsche Telekom AG';
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-footer", { type: this.type }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-footer-content", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { slot: "notice" }, " ", this.copyright, " "), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { slot: "navigation" }, readData(this.footerNavigation).map(({ name, id, href = 'javascript:void(0);', target = '_self', }) => {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: href, id: id, target: target }, name)));
    })))));
  }
};




/***/ })

};
;