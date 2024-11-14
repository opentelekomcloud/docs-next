"use strict";
exports.id = 1728;
exports.ids = [1728];
exports.modules = {

/***/ 91728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_tab_panel: () => (/* binding */ TabPanel)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94200);



const tabPanelCss = ":host{--spacing-top:var(--telekom-spacing-composition-space-08)}.tab-panel{margin-top:var(--spacing-top)}";

let i = 0;
const TabPanel = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.generatedId = i++;
    /** True for smaller height and font size */
    /** @deprecated - no more size difference */
    this.small = false;
    /** (optional) size  */
    /** @deprecated  - no more size difference */
    this.size = 'small';
    /** (optional) adds tab-index="0" to the panel, set to false to exclude the tab-panel from the tab sequence, e.g. if the first element in the panel is a focusable button */
    this.tabbablePanel = true;
  }
  componentDidRender() {
    if (this.small !== false) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__.s)({
        tag: 'deprecated',
        message: 'Property "small" is deprecated.',
        type: 'warn',
        source: this.el,
      });
    }
  }
  setTabIndex() {
    if (this.tabbablePanel === true) {
      return { tabindex: '0' };
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, Object.assign({ id: `scale-tab-panel-${this.generatedId}`, role: "tabpanel" }, this.setTabIndex()), this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "tab-panel", class: "tab-panel" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TabPanel.style = tabPanelCss;




/***/ }),

/***/ 94200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ statusNote)
/* harmony export */ });
/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const tagTypes = {
  beta: 'β',
  WIP: '🛠 WIP',
  deprecated: '😵 Deprecation notice',
  warning: 'Warning',
};
const defaultMessages = {
  beta: 'This component is currently in beta status. Some things may be refactored. Watch the change log for now.',
  WIP: "This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",
  deprecated: 'This component is deprecated.',
};
function statusNote({ tag = 'WIP', extraMessage = null, message = null, source = null, type = 'info', }) {
  // tslint:disable-next-line
  const dipatchMessage = console[type];
  dipatchMessage(`%c scale – ${tagTypes[tag]} `, 'background: #E20074; color: #FFF; border-radius: 4px', `\n\n${message ? message : defaultMessages[tag]} ${extraMessage ? '\n' + extraMessage : ''}
    `, source !== null ? '\nsource:' : '', 
  // typeof source === 'object' ? '\n' : `\nsource: ${source}`,
  typeof source === 'object' ? source : `${source}`, source !== null ? '\n\n' : '');
}




/***/ })

};
;