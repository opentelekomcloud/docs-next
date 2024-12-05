"use strict";
exports.id = 2672;
exports.ids = [2672];
exports.modules = {

/***/ 72672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_callout: () => (/* binding */ Callout)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94200);



const calloutCss = ":host{--position:absolute;--background:var(--telekom-color-ui-extra-strong);--color:var(--telekom-color-text-and-icon-inverted-standard);--spacing:var(--telekom-spacing-composition-space-10);--min-width:6rem;--aspect-ratio:1 / 1;--rotation:0deg;--font-small:var(--telekom-text-style-body-bold);--font-medium:var(--telekom-text-style-body-bold);--font-large:var(--telekom-text-style-heading-1);box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;text-align:center;border-radius:50%;position:var(--position);background:var(--background);color:var(--color);min-width:var(--min-width);aspect-ratio:var(--aspect-ratio);min-height:var(--min-width);transform:rotateZ(var(--rotation, 0deg))}[part='base']{box-sizing:border-box;padding:var(--spacing);font:var(--font-medium)}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='base']{border:1px solid}}:host([variant='primary']){--background:var(--telekom-color-primary-standard);--color:var(--telekom-color-text-and-icon-white-standard)}:host([variant='black']){--background:var(--telekom-color-ui-black, #000000);--color:var(--telekom-color-text-and-icon-white-standard)}:host([variant='white']){--background:var(--telekom-color-ui-white, #ffffff);--color:var(--telekom-color-text-and-icon-black-standard)}:host([variant='blue']){--background:var(--telekom-color-additional-cyan-100);--color:var(--telekom-color-text-and-icon-black-standard)}::slotted(*){display:block}::slotted(.scl-callout-text-small){font:var(--font-small)}::slotted(.scl-callout-text-large){font:var(--font-large)}";

/**
 * Adds the `px` suffix to a string number
 * but leaves other units untouched.
 * 1  -> 1px
 * 5% -> 5%
 */
const numToPx = (val) => (Number.isNaN(Number(val)) ? val : val + 'px');
const Callout = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Degree of rotation */
    this.rotation = 0;
  }
  connectedCallback() {
    (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__.s)({ source: this.hostElement, tag: 'beta' });
    this.syncPropsToCSS();
  }
  rotationChanged() {
    this.syncPropsToCSS();
  }
  syncPropsToCSS() {
    this.hostElement.style.setProperty('--rotation', `${this.rotation}deg`);
    if (this.top != null ||
      this.right != null ||
      this.bottom != null ||
      this.left != null) {
      Object.assign(this.hostElement.style, {
        top: numToPx(this.top),
        right: numToPx(this.right),
        bottom: numToPx(this.bottom),
        left: numToPx(this.left),
      });
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "rotation": ["rotationChanged"],
    "top": ["rotationChanged"],
    "right": ["rotationChanged"],
    "bottom": ["rotationChanged"],
    "left": ["rotationChanged"]
  }; }
};
Callout.style = calloutCss;




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