"use strict";
exports.id = 4800;
exports.ids = [4800];
exports.modules = {

/***/ 88114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classnames)
/* harmony export */ });
function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});




/***/ }),

/***/ 44800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_radio_button: () => (/* binding */ RadioButton)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);





const radioButtonCss = "scale-radio-button{--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:var(--telekom-color-ui-disabled);--color-error:var(--telekom-color-text-and-icon-functional-danger);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--color-focus:var(--telekom-color-functional-focus-standard);--color-text:var(--telekom-color-text-and-icon-standard);--transition-helper-text:var(--transition);--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--spacing-left-helper-text:calc(\n    var(--width-control) + var(--telekom-spacing-composition-space-04)\n  );--spacing-top-helper-text:var(--telekom-spacing-composition-space-03);--color-helper-text-error:var(\n    --telekom-color-text-and-icon-functional-danger\n  );--transition-label:var(--transition);--font-weight-label:var(--telekom-typography-font-weight-medium);--color-label:var(--color-text);--spacing-label:var(--telekom-spacing-composition-space-04);--width-control:var(--telekom-spacing-composition-space-07);--height-control:var(--telekom-spacing-composition-space-07);--transition-control:var(--transition);--background-color-control:var(--telekom-color-ui-base);--border-control:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--border-control-checked:calc(\n      0.25 * var(--telekom-spacing-composition-space-05)\n    )\n    solid var(--telekom-color-background-canvas);--border-control-checked-disabled:calc(\n      0.5 * var(--telekom-spacing-composition-space-05)\n    )\n    solid var(--telekom-color-ui-border-disabled);--background-control-checked-disabled:none;--border-control-active:var(--telekom-spacing-composition-space-04) solid\n    var(--telekom-color-primary-pressed);--border-control-disabled:0 0 0 var(--telekom-spacing-composition-space-01)\n    var(--telekom-color-ui-border-disabled);--border-control-error:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard);--box-shadow-control-focus:0 0 0 var(--telekom-spacing-composition-space-03)\n    var(--color-focus)}.radio-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;width:fit-content}.radio-button .radio-button__meta{width:100%;display:flex;padding-left:var(--spacing-left-helper-text)}.radio-button .radio-button__helper-text{transition:var(--transition-helper-text);font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-composition-space-03)}.radio-button--status-error .radio-button__helper-text{color:var(--color-helper-text-error)}.radio-button--status-error scale-icon-alert-error{color:var(--color-helper-text-error)}.radio-button label{color:var(--color-label);transition:var(--transition-label);font-weight:var(--font-weight-label);cursor:pointer;line-height:var(--telekom-typography-line-spacing-standard);padding-left:var(--spacing-label)}.radio-button input{width:var(--width-control);height:var(--height-control);transition:var(--transition-control);border-radius:50%;-webkit-appearance:none;background-color:var(--telekom-color-ui-state-fill-standard);border:var(--border-control);margin:0;cursor:pointer}.radio-button input:not(:checked):not([disabled]):hover{box-shadow:none;border-color:var(--telekom-color-ui-border-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.radio-button input:not(:checked):not([disabled]):hover~label{color:var(--color-primary-hover)}.radio-button input:not(:checked):not([disabled]):active{border-color:var(--telekom-color-ui-border-pressed);background-color:var(--telekom-color-ui-state-fill-pressed)}.radio-button input:not(:checked):not([disabled]):active~label{color:var(--color-primary-active)}.radio-button input:disabled{box-shadow:var(--border-control-disabled)}.radio-button input:disabled~label{color:var(--color-disabled)}.radio-button.radio-button--status-error input{border:var(--border-control-error)}.radio-button.radio-button--status-error:hover input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-hovered)}.radio-button.radio-button--status-error:active input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-pressed)}.radio-button input:checked{border:var(--border-control-checked);background-color:var(--telekom-color-primary-standard);box-shadow:0 0 0 var(--telekom-spacing-composition-space-01)\n    var(--telekom-color-text-and-icon-primary-standard)}.radio-button input:checked:disabled{background-color:var(--background-disabled);border:var(--border-control-checked);box-shadow:var(--border-control-disabled)}.radio-button input:checked:disabled~label{color:var(--color-disabled);border:var(--border-control-disabled)}.radio-button--disabled,.radio-button--disabled label,.radio-button--disabled .radio-button__label,.radio-button--disabled input,.radio-button--disabled .radio-button__helper-text{cursor:not-allowed;border-color:var(--color-disabled);color:var(--color-disabled);background:var(--telekom-color-ui-state-fill-standard)}.radio-button--disabled scale-icon-alert-information,.radio-button--disabled scale-icon-alert-error{color:var(--color-disabled)}.radio-button input:focus{outline:2px solid var(--color-focus);outline-offset:2px}";

const RadioButton = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    /** (optional) Input name */
    this.name = '';
    /** (optional) Input label */
    this.label = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input checked */
    this.checked = false;
    /** (optional) Input value */
    this.value = '';
    this.internalId = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.g)();
    this.handleCheckedChange = (event) => {
      if (!this.disabled) {
        this.checked = event.target.checked;
        // I don't think this is ever going to be `false` but well...
        if (this.checked) {
          this.uncheckSiblings();
        }
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', {
          value: this.value == null ? this.value : this.value.toString(),
        });
      }
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + this.internalId;
    }
  }
  componentDidRender() {
    if (this.status !== '') {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  // We manually set `checked` to false on sibling <scale-radio-button> elements,
  // otherwise they stayed `checked` after being clicked once, forever.
  uncheckSiblings() {
    this.getSiblingRadios().forEach((radio) => {
      radio.checked = false;
    });
  }
  getSiblingRadios() {
    return Array.from(document.querySelectorAll(`scale-radio-button[name="${this.name}"]`)).filter((radio) => radio.inputId !== this.inputId);
  }
  renderHelperIcon() {
    if (this.helperText && !this.invalid) {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-information", { size: 11 }));
    }
    if (this.invalid) {
      return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-error", { size: 11 });
    }
  }
  render() {
    const ariaInvalidAttr = this.status === 'error' || this.invalid ? { 'aria-invalid': 'true' } : {};
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({ type: "radio", name: this.name, id: this.inputId, onChange: this.handleCheckedChange, value: this.value, checked: this.checked, disabled: this.disabled }, ariaInvalidAttr, (this.helperText ? ariaDescribedByAttr : {}))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: this.inputId }, this.label), !!this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "radio-button__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, this.renderHelperIcon(), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "radio-button__helper-text" }, this.helperText))))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('radio-button', this.checked && `radio-button--checked`, this.disabled && `radio-button--disabled`, this.status && `radio-button--status-${this.status}`, this.invalid && `radio-button--status-error`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
RadioButton.style = radioButtonCss;




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