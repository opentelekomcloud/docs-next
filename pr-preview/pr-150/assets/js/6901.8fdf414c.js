"use strict";
exports.id = 6901;
exports.ids = [6901];
exports.modules = {

/***/ 56901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_checkbox_group: () => (/* binding */ CheckboxGroup)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94200);



const checkboxGroupCss = ":host,.checkbox-group{--spacing-left-container:var(--telekom-spacing-composition-space-10);--spacing-left-checkbox:var(--telekom-spacing-composition-space-04);--spacing-top-slotted-item:var(--telekom-spacing-composition-space-05)}.checkbox-group{display:inline-flex;flex-direction:column;position:relative}.checkbox-group [part='fieldset']{display:flex;flex-direction:column;border:0;padding:0;margin:0;margin-left:var(--spacing-left-container)}.checkbox-group [part='parent-checkbox']{line-height:var(--telekom-typography-line-spacing-standard);--font-weight-label:var(--telekom-typography-font-weight-bold)}.checkbox-group legend{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.checkbox-group scale-checkbox{margin-top:var(--spacing-top-slotted-item)}";

const CheckboxGroup = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Input label */
    this.label = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input value */
    this.value = '';
    this.selectText = 'Select all';
    this.unselectText = 'Unselect all';
  }
  handleCheckboxChange(ev) {
    const el = ev.composedPath()[0];
    const { tagName, checked } = el;
    // make sure the event belongs to a scale checkbox
    if (tagName.toLowerCase() === 'scale-checkbox') {
      if (el !== this.groupNode) {
        this.updateParentCheckboxState();
      }
      else {
        this.updateChildrenCheckboxStates(checked);
        this.updateParentCheckboxState();
      }
    }
  }
  componentDidRender() {
    if (this.status !== '') {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__.s)({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.host.hasAttribute('aria-label')) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__.s)({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckboxGroup" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  componentDidLoad() {
    this.updateParentCheckboxState();
    const fieldset = this.host.querySelector('fieldset');
    const mo = new MutationObserver(() => {
      this.updateParentCheckboxState();
    });
    mo.observe(fieldset, {
      childList: true,
    });
    this.observer = mo;
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  getChildNodes() {
    return Array.from(this.host.querySelector('fieldset').querySelectorAll('scale-checkbox'));
  }
  updateChildrenCheckboxStates(checked) {
    const childNodes = this.getChildNodes().filter((node) => !node.disabled);
    childNodes.forEach((node) => {
      if (checked !== undefined) {
        node.checked = checked;
        node.indeterminate = false;
      }
    });
  }
  updateParentCheckboxState() {
    const childNodes = this.getChildNodes();
    const checked = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.checked);
    const indeterminate = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.indeterminate);
    const disabled = childNodes === null || childNodes === void 0 ? void 0 : childNodes.map((childNode) => childNode.disabled);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const someIndeterminate = indeterminate.some(Boolean);
    const allDisabled = disabled.every(Boolean);
    this.checked = allChecked || someChecked;
    this.indeterminate = someIndeterminate || (someChecked && !allChecked);
    this.disabled = allDisabled;
    this.actionText = allChecked ? this.unselectText : this.selectText;
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: "checkbox-group" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-checkbox", { ref: (el) => (this.groupNode = el), name: this.name, label: this.label, ariaLabelCheckbox: `${this.ariaLabelCheckboxGroup || this.label} - ${this.actionText}`, helperText: this.helperText, status: this.status, invalid: this.invalid, value: this.value, inputId: this.inputId, checked: this.checked, indeterminate: this.indeterminate, disabled: this.disabled, part: "parent-checkbox" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("fieldset", { part: "fieldset" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("legend", null, this.ariaLabelCheckboxGroup || this.label), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  get host() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
CheckboxGroup.style = checkboxGroupCss;




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