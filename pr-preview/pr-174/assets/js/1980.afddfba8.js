"use strict";
exports.id = 1980;
exports.ids = [1980];
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

/***/ 71980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_chip: () => (/* binding */ Chip)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




const chipCss = ":host{--height:32px;--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--font-weight:var(--telekom-typography-font-weight-bold);--color-focus:var(--telekom-color-functional-focus-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--box-shadow:0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);--background-standard-selected:var(--telekom-color-ui-extra-strong);--color-standard-selected:var(\n    --telekom-color-text-and-icon-inverted-standard\n  )}.chip{box-sizing:border-box;border:var(--telekom-spacing-composition-space-01) solid transparent;display:inline-flex;outline:none;padding:0 var(--telekom-spacing-composition-space-05);text-align:center;align-items:center;white-space:nowrap;border-radius:1rem;border-color:rgba(255, 255, 255, 0.14);height:var(--height);vertical-align:baseline;justify-content:center;cursor:default;color:var(--telekom-color-text-and-icon-standard);background:var(--telekom-color-text-and-icon-inverted-standard);border:1px solid var(--telekom-color-ui-border-standard)}.chip.chip--selected.chip--type-dynamic{padding-right:var(--telekom-spacing-composition-space-03)}.chip.chip--selected.chip--type-dynamic button{border:none;cursor:pointer;padding:0;height:24px;width:24px;outline:none;background:transparent;border-radius:var(--telekom-radius-circle);display:flex;justify-content:center;align-items:center;background-color:transparent}.chip.chip--selected.chip--type-dynamic.chip--variant-standard button:hover{background:var(--telekom-color-ui-state-fill-hovered-inverted)}.chip.chip--selected.chip--type-dynamic.chip--variant-standard button:active{background:var(--telekom-color-ui-state-fill-pressed-inverted)}.chip.chip--selected.chip--type-dynamic button:focus{justify-content:center;outline:var(--focus-outline)}.chip.chip--selected.chip--type-dynamic.chip--variant-standard scale-icon-action-close{padding:0;color:var(--telekom-color-text-and-icon-inverted-standard)}.chip:not(.chip--disabled):not(.chip--type-dynamic):focus,.chip.chip--type-dynamic:not(.chip--selected):focus{outline:var(--telekom-spacing-composition-space-02) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}.chip:not(.chip--disabled):not(.chip--type-dynamic):hover,.chip.chip--type-dynamic:not(.chip--selected):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered),\n      var(--telekom-color-ui-state-fill-hovered)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip:not(.chip--disabled):not(.chip--type-dynamic):active,.chip.chip--type-dynamic:not(.chip--selected):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed),\n      var(--telekom-color-ui-state-fill-pressed)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip--selected{background:var(--background-standard-selected);color:var(--color-standard-selected)}.chip--selected:not(.chip--disabled):not(.chip--type-dynamic):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered-inverted),\n      var(--telekom-color-ui-state-fill-hovered-inverted)\n    ),\n    var(--background-standard-selected)}.chip--selected:not(.chip--disabled):not(.chip--type-dynamic):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed-inverted),\n      var(--telekom-color-ui-state-fill-pressed-inverted)\n    ),\n    var(--background-standard-selected)}.chip-label{padding:0 var(--telekom-spacing-composition-space-03) 0\n    var(--telekom-spacing-composition-space-03);font-weight:var(--telekom-typography-font-weight-bold);font-size:1rem;line-height:100%}.chip--selected .chip-label{padding-right:var(--telekom-spacing-composition-space-04)}.chip--type-dynamic.chip--selected .chip-label{padding-right:var(--telekom-spacing-composition-space-03)}.chip slot[name='chip-icon']::slotted(*){padding-right:var(--telekom-spacing-composition-space-03);padding-top:var(--telekom-spacing-composition-space-03)}.chip.chip--disabled:not(.chip--type-dynamic){color:var(--telekom-color-text-and-icon-disabled);border:1px solid var(--telekom-color-ui-border-disabled)}.chip--selected:not(.chip--variant-outlined):not(.chip--type-dynamic).chip--disabled{background:var(--telekom-color-ui-disabled);color:var(--telekom-color-text-and-icon-disabled);border:none}.chip--variant-outlined.chip--selected.chip--disabled:not(.chip--type-dynamic){background-color:var(--telekom-color-text-and-icon-inverted-standard);color:var(--telekom-color-text-and-icon-disabled);border:1px solid var(--telekom-color-ui-border-disabled)}.chip.chip--variant-outline.chip--selected:not(.chip.chip--disabled):not(.chip--type-dynamic):hover{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-hovered),\n      var(--telekom-color-ui-state-fill-hovered)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip.chip--variant-outline.chip--selected:not(.chip.chip--disabled):not(.chip--type-dynamic):active{background:linear-gradient(\n      var(--telekom-color-ui-state-fill-pressed),\n      var(--telekom-color-ui-state-fill-pressed)\n    ),\n    var(--telekom-color-text-and-icon-inverted-standard)}.chip.chip--variant-outline.chip--selected{color:var(--telekom-color-text-and-icon-primary-standard);background:var(--telekom-color-text-and-icon-inverted-standard);border:1px solid var(--telekom-color-text-and-icon-primary-standard)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline scale-icon-action-close{padding:0;color:var(--telekom-color-text-and-icon-primary-standard)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:hover{background:var(--telekom-color-ui-state-fill-hovered)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:hover scale-icon-action-close{color:var(--telekom-color-text-and-icon-primary-hovered)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:active{background:var(telekom-color-ui-state-fill-pressed)}.chip.chip--selected.chip--type-dynamic.chip--variant-outline button:active scale-icon-action-close{color:var(--telekom-color-text-and-icon-primary-pressed)}";

const Chip = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    this.scaleClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close", 7);
    this.scaleCloseLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleClose", 7);
    /** (optional) */
    this.variant = 'standard';
    /** (optional) */
    this.type = 'persistent';
    /** (optional) */
    this.selected = false;
    /** (optional) chip aria-role */
    this.ariaRoleTitle = 'switch';
    /** @deprecated (optional) chip aria-checked - should be derived from selected state attribute */
    this.ariaCheckedState = false;
    /** (optional) chip disabled */
    this.disabled = false;
    /** (optional) Dismiss label */
    this.dismissText = 'dismiss';
    this.handleClose = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled && this.type !== 'dynamic') {
        return;
      }
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleClose', event);
    };
    this.handleClick = (event) => {
      if (this.type !== 'dynamic') {
        this.selected = !this.selected;
      }
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled && this.type !== 'dynamic') {
        return;
      }
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleChange', event);
    };
  }
  componentDidRender() {
    // handle no setted icon size attribute
    const defaultIconSize = 24;
    const iconSlot = this.hostElement.querySelector('[slot="chip-icon"]');
    if (iconSlot !== null) {
      if (iconSlot.children[0].getAttribute('size') === String(defaultIconSize)) {
        iconSlot.children[0].setAttribute('size', String(16));
      }
      if (this.selected) {
        iconSlot.children[0].setAttribute('selected', String(true));
      }
      else {
        iconSlot.children[0].setAttribute('selected', String(false));
      }
    }
  }
  disconnectedCallback() { }
  getIcon() {
    if (this.type === 'dynamic' && this.selected) {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { part: "button-dismissable", disabled: this.disabled, "aria-label": this.dismissText, onClick: !this.disabled ? this.handleClose : null }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-close", { "accessibility-title": "close", size: 16, selected: true })));
    }
    else if (this.type === 'persistent' && this.selected) {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-checkmark", { "accessibility-title": "success", size: 16, selected: true }));
    }
    else if (this.type === 'persistent') {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-checkmark", { "accessibility-title": "success", size: 16 }));
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), this.type === 'dynamic' && this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { role: this.ariaRoleTitle, tabindex: this.selected ? '0' : '-1', part: this.getBasePartMap(), class: this.getCssClassMap(), "aria-checked": this.selected.toString(), onClick: !this.disabled || this.type === 'dynamic'
        ? this.handleClick
        : null }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chip-icon" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "chip-label" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), this.selected ? this.getIcon() : null)) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { role: this.ariaRoleTitle, "aria-checked": this.selected.toString(), tabindex: this.selected ? '0' : '-1', part: this.getBasePartMap(), class: this.getCssClassMap(), onClick: !this.disabled || this.type === 'dynamic'
        ? this.handleClick
        : null }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chip-icon" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "chip-label" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), this.selected ? this.getIcon() : null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'chip';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(mode === 'basePart' ? 'base' : component, !!this.selected && `${prefix}selected`, !!this.disabled && `${prefix}disabled`, this.type && `${prefix}type-${this.type}`, this.variant && `${prefix}variant-${this.variant}`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Chip.style = chipCss;




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