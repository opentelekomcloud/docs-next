"use strict";
exports.id = 4130;
exports.ids = [4130];
exports.modules = {

/***/ 34130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_checkbox: () => (/* binding */ Checkbox),
/* harmony export */   scale_icon_action_minus: () => (/* binding */ ActionMinus)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94200);




const checkboxCss = ":host,scale-checkbox{--spacing-x:var(--telekom-spacing-composition-space-04);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-text:var(--telekom-color-text-and-icon-standard);--color-error:var(--telekom-color-functional-danger-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-standard:var(--telekom-color-background-surface);--background-disabled:none;--color-primary:var(--telekom-color-primary-standard);--color-focus:var(--telekom-color-functional-focus-standard);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--width-control:var(--telekom-spacing-composition-space-07);--height-control:var(--telekom-spacing-composition-space-07);--transition-control:var(--transition);--spacing-control:var(--telekom-spacing-composition-space-02);--spacing-left-control:var(--telekom-spacing-composition-space-03);--radius-control:var(--telekom-radius-small);--border-width-control:var(--telekom-line-weight-standard);--transition-helper-text:var(--transition);--spacing-left-helper-text:calc(var(--width-control) + var(--spacing-x));--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--font-weight-label:var(--telekom-typography-font-weight-medium);--transition-label:var(--transition);--color-icon-checked-disabled:var(--telekom-color-text-and-icon-disabled);--color-icon-checked-active:var(\n    --telekom-color-text-and-icon-white-standard\n  );--width-icon:var(--telekom-spacing-composition-space-06);--height-icon:var(--telekom-spacing-composition-space-06);--stroke-width:var(--stroke-width-checkbox, 0.5px)}scale-checkbox{position:relative;display:flex;width:fit-content;flex-direction:column;color:var(--color-text)}scale-checkbox [part='icon'],scale-checkbox [part='checkbox'],scale-checkbox [part='label'],scale-checkbox [part='helper-text']{transition:var(--transition)}scale-checkbox [part='input'],scale-checkbox.hideLabel [part='label']{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}scale-checkbox [part='checkbox']{box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:center;align-items:center;width:var(--width-control);height:var(--height-control);border-radius:var(--radius-control);border:var(--border-width-control) solid\n    var(--telekom-color-ui-border-standard)}scale-checkbox [part='label']{font-weight:var(--font-weight-label);margin-left:var(--spacing-x)}scale-checkbox [part='icon']{width:var(--width-icon);height:var(--height-icon);color:var(--color-icon-checked-active)}scale-checkbox [part='icon'] svg{width:100%;height:100%}scale-checkbox [part='icon'] svg rect,scale-checkbox [part='icon'] svg path{stroke:currentColor;stroke-width:var(--stroke-width)}scale-checkbox [part='container']{align-items:center;display:flex;line-height:var(--telekom-typography-line-spacing-standard)}scale-checkbox [part='helper-text']{font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text);padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x) +\n      calc(var(--border-width-control) * 2)\n  );display:flex;align-items:center}scale-checkbox.indeterminate [part='checkbox']{background:var(--telekom-color-primary-standard);border:none;color:var(--color-icon-checked-active)}scale-checkbox.indeterminate [part='icon']{color:var(--color-icon-checked-active)}scale-checkbox.checked [part='checkbox']{background:var(--telekom-color-primary-standard);border-color:var(--telekom-color-primary-standard);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:hover [part='checkbox']{background:var(--telekom-color-ui-state-fill-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox.checked [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed);color:var(--color-icon-checked-active)}scale-checkbox [part='input']:focus~[part='container'] [part='checkbox']{outline:var(--telekom-spacing-composition-space-02) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}scale-checkbox [part='container']:hover{color:var(--color-primary-hover);cursor:pointer}scale-checkbox.checked [part='container']:hover [part='checkbox'],scale-checkbox.indeterminate [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-primary-hovered)}scale-checkbox.checked [part='input']:active~[part='container'],scale-checkbox.checked [part='container']:active{color:var(--color-primary-active)}scale-checkbox [part='input']:active~[part='container'] [part='checkbox'],scale-checkbox.checked [part='container']:active [part='checkbox'],scale-checkbox.indeterminate [part='container']:active [part='checkbox']{background:var(--telekom-color-primary-pressed);border-color:var(--telekom-color-primary-pressed)}scale-checkbox:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-composition-space-03)}scale-checkbox.error [part='helper-text']{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='helper-text'] scale-icon-alert-error{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--color-error);border:none}scale-checkbox.error [part='input']:focus~[part='container'] [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--color-error)}scale-checkbox.error [part='checkbox']:hover{background-color:var(--telekom-color-ui-state-fill-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='checkbox']:active{background-color:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.error:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.checked.error [part='container']:hover [part='checkbox']{background-color:var(--telekom-color-primary-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='helper-text']{padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x)\n  )}scale-checkbox.disabled{cursor:not-allowed}scale-checkbox.disabled [part='container'],scale-checkbox.disabled [part='helper-text']{color:var(--color-disabled);pointer-events:none}scale-checkbox.disabled [part='checkbox']{background:var(--telekom-color-ui-solid-fill-disabled);border-color:var(--telekom-color-ui-border-disabled)}scale-checkbox.checked.disabled [part='checkbox']{background-color:var(--telekom-color-ui-disabled);border-color:transparent}scale-checkbox.checked.disabled [part='icon']{color:var(--color-icon-checked-disabled);background-color:var(--telekom-color-ui-disabled)}scale-checkbox.disabled [part='helper-text'] scale-icon-alert-information,scale-checkbox.disabled.error [part='helper-text'] scale-icon-alert-error{color:var(--color-disabled)}";

const Checkbox = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    /** (optional) Input label */
    this.label = '';
    /** (optional) Hides the specified label visually */
    this.hideLabel = false;
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input disabled */
    this.disabled = false;
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) indeterminate */
    this.indeterminate = false;
    /** (optional) Input value */
    this.value = '';
    this.internalId = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    this.handleChange = (ev) => {
      if (this.indeterminate) {
        this.indeterminate = false;
        this.checked = true;
        ev.target.checked = true;
      }
      else {
        this.checked = ev.target.checked;
      }
      const { checked, indeterminate, value, disabled } = this;
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleChange', { checked, indeterminate, value, disabled });
    };
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
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckbox" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  connectedCallback() {
    if (!this.inputId) {
      this.inputId = 'input-checkbox-' + this.internalId;
    }
  }
  /* Accessibility: rendering the icon *only* when checked, otherwise is always visible in HCM */
  renderIcon() {
    if (this.indeterminate) {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-minus", { part: "icon", decorative: true }));
    }
    if (this.checked) {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-checkmark", { part: "icon", decorative: true }));
    }
  }
  renderHelperIcon() {
    if (this.helperText && !this.invalid) {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-information", { size: 11 }));
    }
    if (this.invalid) {
      return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-error", { size: 11 });
    }
  }
  renderHelperText(text) {
    if (this.helperText && this.helperText !== '') {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "helper-text", id: text.id, "aria-live": "polite", "aria-relevant": "additions removals" }, this.renderHelperIcon(), text.content));
    }
  }
  render() {
    const helperText = {
      id: this.helperText ? `helper-message-${this.internalId}` : null,
      content: this.helperText,
    };
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: {
        checked: this.checked,
        indeterminate: this.indeterminate,
        disabled: this.disabled,
        error: this.status === 'error' || this.invalid,
        hideLabel: this.hideLabel,
      } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "checkbox", part: "input", name: this.name || null, id: this.inputId, value: this.value, checked: this.checked, indeterminate: this.indeterminate, "aria-label": this.ariaLabelCheckbox, "aria-checked": this.indeterminate ? 'mixed' : false, "aria-invalid": this.status === 'error' || this.invalid ? 'true' : null, "aria-describedBy": helperText.id, disabled: this.disabled, required: this.required, onChange: this.handleChange }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { part: "container", htmlFor: this.inputId }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "checkbox" }, this.renderIcon()), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "label" }, this.label || (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))), this.renderHelperText(helperText)));
  }
  get host() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Checkbox.style = checkboxCss;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMinus = class {
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
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19.5 10.75h-15a1.25 1.25 0 000 2.5h15a1.25 1.25 0 100-2.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M19.5 12.75h-15a.75.75 0 110-1.5h15a.75.75 0 110 1.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionMinus.style = iconCss;




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




/***/ }),

/***/ 91779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ animationsFinished),
/* harmony export */   b: () => (/* binding */ isClickOutside),
/* harmony export */   c: () => (/* binding */ isPseudoClassSupported),
/* harmony export */   e: () => (/* binding */ emitEvent),
/* harmony export */   g: () => (/* binding */ generateUniqueId),
/* harmony export */   h: () => (/* binding */ hasShadowDom),
/* harmony export */   i: () => (/* binding */ isScaleIcon)
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
const hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
// eg isPseudoClassSupported(':focus-visible') // true for chrome, false for safari
const isPseudoClassSupported = (pseudoClass) => {
  // Get the document stylesheet1
  let ss = document.styleSheets[0];
  // Create a stylesheet if one doesn't exist
  if (!ss) {
    const el = document.createElement('style');
    document.head.appendChild(el);
    ss = document.styleSheets[0];
    document.head.removeChild(el);
  }
  // Test the pseudo-class by trying to style with it
  function testPseudo() {
    try {
      if (!/^:/.test(pseudoClass)) {
        pseudoClass = ':' + pseudoClass;
      }
      ss.insertRule('html' + pseudoClass + '{}', 0);
      ss.deleteRule(0);
      return true;
    }
    catch (e) {
      return false;
    }
  }
  // Run the test
  return testPseudo();
};
/**
 * Call `emit` on component events twice.
 * One for the legacy camel-cased event, one for the new kebab-cased.
 * e.g. for the event `scaleChange` it will do `instance.scaleChange.emit()` and `instance.scaleChangeLegacy.emit()`.
 * It expects both `scaleChange` and `scaleChangeLegacy` event-decorated properties to exist on the component.
 *
 * @param instance {ComponentInterface} - The component instance, aka `this`
 * @param eventKey {string} - The event property, e.g. `scaleChange`
 * @param detail {any} - The custom event `detail`
 * @returns {CustomEvent[]} - The events emitted
 */
function emitEvent(instance, eventKey, detail) {
  const legacyKey = eventKey + 'Legacy';
  const emitted = [];
  if (typeof instance[legacyKey] !== 'undefined') {
    // Emit legacy camel case event, e.g. `scaleClose`
    emitted.push(instance[legacyKey].emit(detail));
  }
  // Emit now-standard kebab-case event, e.g. `scale-close`
  emitted.push(instance[eventKey].emit(detail));
  // Return both
  return emitted;
}
function isClickOutside(event, host) {
  let target = event.target;
  const hasShadow = target.shadowRoot != null;
  const composedPath = hasShadow ? event.composedPath() : [];
  do {
    if (target === host) {
      return false;
    }
    if (hasShadow) {
      // @ts-ignore
      target = composedPath.shift();
    }
    else {
      target = target.parentNode;
    }
  } while (target);
  return true;
}
const isScaleIcon = (el) => {
  if (el == null || el.nodeType !== 1) {
    return false;
  }
  return el.nodeName.toUpperCase().substring(0, 10) === 'SCALE-ICON';
};
/** Creating global ids for different component helper-texts */
let id = 0;
function generateUniqueId() {
  return id++;
}
/**
 * Useful for waiting for animations to finish before doing something.
 *
 * @param el {HTMLElement | ShadowRoot} - The element to call `getAnimations` on
 * @returns {Promise} - Resolves when all animations are finished
 */
const animationsFinished = (el) => {
  return Promise.all(el.getAnimations({ subtree: true }).map((x) => x.finished));
};




/***/ })

};
;