"use strict";
exports.id = 139;
exports.ids = [139];
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

/***/ 30139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_dropdown: () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);





const dropdownCss = "scale-dropdown{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-composition-space-13);--spacing-x:var(--telekom-spacing-composition-space-05);--spacing-dropdown:18px var(--telekom-spacing-composition-space-12) 5px\n    calc(var(--spacing-x) - 1px);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--border-danger:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard);--border-success:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-success-standard);--border-warning:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-warning-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--color:var(--telekom-color-text-and-icon-standard);--background-color:var(--telekom-color-ui-state-fill-standard);--margin-bottom-helper-text:var(--telekom-spacing-composition-space-03);--transition-input:var(--transition);--font-size-input:var(--telekom-typography-font-size-body);--spacing-y-meta:var(--telekom-spacing-composition-space-03);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:var(--telekom-spacing-composition-space-07);--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-small);--font-weight-label-focus:var(--telekom-typography-font-weight-bold)}.dropdown{position:relative}.dropdown .input__dropdown{width:100%;height:var(--height);margin:0;display:flex;outline:none;padding:var(--spacing-dropdown);z-index:1;box-sizing:border-box;transition:var(--transition-input);font-family:inherit;font-size:var(--font-size-input);border-radius:var(--radius);border:var(--border);white-space:nowrap;line-height:var(--font-size-input);text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-color);color:var(--color)}.dropdown--hide-label .input__dropdown{padding:5px var(--telekom-spacing-composition-space-12) 5px\n    calc(var(--spacing-x) - 1px)}.dropdown--hide-label .input__label{visibility:hidden}.dropdown .input__dropdown-wrapper{position:relative}.dropdown.dropdown--helper-text .input__dropdown-wrapper{margin-bottom:var(--margin-bottom-helper-text)}.dropdown .input__meta{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}.dropdown.dropdown--disabled .input__dropdown-wrapper .input__dropdown-icon{color:var(--color-disabled)}.dropdown:not(.dropdown--disabled):hover .input__dropdown-icon{color:var(--color-icon-hover)}.dropdown:not(.dropdown--disabled):active .input__dropdown-icon{color:var(--color-icon-active)}.dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{border-color:var(--border-color-hover);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{border-color:var(--telekom-color-functional-danger-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-warning .input__dropdown:hover{border-color:var(--telekom-color-functional-warning-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-success .input__dropdown:hover{border-color:var(--telekom-color-functional-success-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:focus{border-color:var(--border-color-focus)}.dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:focus{border-color:var(--telekom-color-functional-danger-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-warning .input__dropdown:focus{border-color:var(--telekom-color-functional-warning-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-success .input__dropdown:focus{border-color:var(--telekom-color-functional-success-hovered)}.dropdown:not(.dropdown--disabled) .input__dropdown:focus{outline:var(--focus-outline);outline-offset:1px}.dropdown .input__dropdown-wrapper .input__dropdown-icon{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}.input__label{top:-2px;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);transform:translate(\n    var(--spacing-x),\n    calc(\n      (var(--telekom-spacing-composition-space-14) - var(--font-size-label)) / 2\n    )\n  );font-weight:var(--font-weight-label)}.animated .input__label{transform:translate(\n    var(--spacing-x),\n    var(--telekom-spacing-composition-space-04)\n  );font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus);line-height:var(--telekom-typography-font-size-small)}.dropdown--variant-danger .input__dropdown{border:var(--border-danger)}.dropdown--variant-warning .input__dropdown{border:var(--border-warning)}.dropdown--variant-success .input__dropdown{border:var(--border-success)}.dropdown--transparent .input__dropdown{background-color:transparent}.dropdown--disabled label,.dropdown--disabled .input__label,.dropdown--disabled input,.dropdown--disabled .input__dropdown{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[data-mode='light'] .dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{background-color:var(--telekom-color-ui-state-fill-hovered)}[data-mode='light'] .dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{background-color:var(--telekom-color-ui-state-fill-hovered)}[data-mode='dark'] .dropdown .input__dropdown{background-color:var(--telekom-color-background-canvas)}[data-mode='dark'] .dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{background-color:#1b1b1b}[data-mode='dark'] .dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{background-color:#1b1b1b}[data-mode='dark'] .dropdown--disabled .input__dropdown{background-color:var(--telekom-color-background-canvas)}@media (prefers-color-scheme: dark){.dropdown .input__dropdown{background-color:var(--telekom-color-background-canvas)}.dropdown:not(.dropdown--disabled):not(.dropdown--status-error) .input__dropdown:hover{background-color:#1b1b1b}.dropdown:not(.dropdown--disabled).dropdown--status-error .input__dropdown:hover{background-color:#1b1b1b}.dropdown--disabled .input__dropdown{background-color:var(--telekom-color-background-canvas)}}";

const Dropdown = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleInput = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-input", 7);
    this.scaleInputLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleInput", 7);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    this.scaleFocus = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-focus", 7);
    this.scaleFocusLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleFocus", 7);
    this.scaleBlur = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-blur", 7);
    this.scaleBlurLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleBlur", 7);
    this.scaleKeyDown = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-keydown", 7);
    this.scaleKeyDownLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleKeydown", 7);
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
    /** (optional) Variant */
    this.variant = 'informational';
    /** (optional) Input value */
    this.value = '';
    /** (optional) Makes type `select` behave as a controlled component in React */
    this.controlled = false;
    /** (optional) to avoid displaying the label */
    this.hideLabelVisually = false;
    this.internalId = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.g)();
    // Handle change on <select> independently
    // so we can allow "controlled" (React) behavior,
    // in which only the `value` changing does update
    // the actual <select> value, not the user's input.
    this.handleSelectChange = (event) => {
      const target = event.target;
      if (this.controlled) {
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', { value: target.value });
        this.selectElement.value = String(this.value);
        this.forceUpdate = String(Date.now());
      }
      else {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleInput = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleInput', event);
    };
    this.handleChange = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleFocus = () => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleFocus');
    };
    this.handleBlur = () => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleBlur');
    };
    this.handleKeyDown = (event) => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleKeyDown', event);
    };
  }
  componentWillLoad() {
    this.hasSlotIcon = !!this.hostElement.querySelector('[slot="icon"]');
    if (this.inputId == null) {
      this.inputId = 'input-dropdown-' + this.internalId;
    }
  }
  componentDidLoad() {
    // Keep this.value up-to-date for type="select".
    // This is important also for React, where `value` is used to control the element state.
    const select = this.selectElement;
    const selectedValue = select.selectedIndex > -1
      ? select.options[select.selectedIndex].value
      : null;
    // If we have a `value` passed, set it on the <select> element
    // Otherwise, if we have an <option selected>, set its value on `value`
    if (this.value) {
      select.value = String(this.value);
    }
    else if (selectedValue) {
      this.value = selectedValue;
    }
    // This is a workaroud to prevent a bug in Stencil:
    // when using slots without Shadow DOM (possible only with Stencil)
    // sometimes an update in the Light DOM does not trigger a re-render
    // thus causing unexpected results.
    // https://gitlab.com/scale-ds/scale-telekom/-/issues/16
    if (this.selectElement) {
      this.mutationObserver = new MutationObserver(() => {
        this.forceUpdate = String(Date.now());
      });
      this.mutationObserver.observe(this.hostElement, {
        childList: true,
        subtree: true,
      });
    }
  }
  componentDidUpdate() {
    this.hasSlotIcon = !!this.hostElement.querySelector('[slot="icon"]');
  }
  componentDidRender() {
    // When type `select` and `controlled` is true,
    // make sure the <select> is always in sync with the value.
    const value = this.value == null ? '' : this.value.toString();
    if (this.controlled && this.selectElement.value.toString() !== value) {
      this.selectElement.value = value;
    }
    if (this.status !== '') {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.size) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', {
      value: this.value == null ? this.value : this.value.toString(),
    });
  }
  render() {
    const ariaInvalidAttr = this.status === 'error' || this.invalid ? { 'aria-invalid': 'true' } : {};
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: "input__label", htmlFor: this.inputId }, this.label), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__dropdown-wrapper" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", Object.assign({ ref: (el) => (this.selectElement = el), class: "input__dropdown",
      // @ts-ignore
      value: this.value, onChange: this.handleSelectChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, disabled: this.disabled, required: this.required, multiple: this.multiple, id: this.inputId, name: this.name, size: this.visibleSize }, ariaInvalidAttr, (this.helperText ? ariaDescribedByAttr : {})), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__dropdown-icon" }, this.hasSlotIcon ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "icon" })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-collapse-down", { size: 20, decorative: true })))), this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant })))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('dropdown', this.disabled && `dropdown--disabled`, this.transparent && 'dropdown--transparent', this.status && `dropdown--status-${this.status}`, this.helperText && 'dropdown--helper-text', this.variant &&
      `dropdown--variant-${this.invalid ? 'danger' : this.variant}`, this.value != null && this.value !== '' && 'animated', this.hideLabelVisually && 'dropdown--hide-label');
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Dropdown.style = dropdownCss;




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