"use strict";
exports.id = 6520;
exports.ids = [6520];
exports.modules = {

/***/ 36520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_app_shell: () => (/* binding */ Shell)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


const appShellCss = ":host{--background:var(--telekom-color-background-canvas, #fff);--spacing-x:var(--telekom-spacing-composition-space-08);--min-height:100vh}.sr-only{position:absolute;left:-10000px;overflow:hidden}.shell{display:flex;min-height:var(--min-height);flex-direction:column}.shell .content{box-sizing:border-box;align-self:center;width:100%;background:var(--background);padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}@media (min-width: 1552px){.shell .content{max-width:var(--header-max-width)}}";

const Shell = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.portalName = '';
    this.claimLang = 'de';
    this.mainNavigation = [];
    this.iconNavigation = [];
    this.userNavigation = [];
    this.sectorNavigation = [];
    this.addonNavigation = [];
    this.activeRouteId = '';
    this.activeSectorId = '';
    this.sticky = false;
    this.scrolled = false;
  }
  componentWillLoad() {
    this.hasSlotHeader = !!this.hostElement.querySelector('[slot="header"]');
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "base", class: "shell" }, this.hasSlotHeader ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "header" })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-app-header", { logoClick: this.logoClick, logoAriaDescribedBy: this.logoAriaDescribedBy, logoHref: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, portalName: this.portalName, mainNavigation: this.mainNavigation, iconNavigation: this.iconNavigation, userNavigation: this.userNavigation, sectorNavigation: this.sectorNavigation, addonNavigation: this.addonNavigation, activeRouteId: this.activeRouteId, activeSectorId: this.activeSectorId, claimLang: this.claimLang, sticky: this.sticky, userMenuAriaLabel: this.userMenuAriaLabel })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("main", { class: "content" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "footer" }))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Shell.style = appShellCss;




/***/ })

};
;