"use strict";
exports.id = 9129;
exports.ids = [9129];
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

/***/ 99129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_tab_header: () => (/* binding */ TabHeader)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);





const tabHeaderCss = ":host{outline:none;--font:var(--telekom-text-style-ui-bold);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--spacing-right-slotted:var(--telekom-spacing-composition-space-04);--color-disabled:var(--telekom-color-text-and-icon-disabled);--radius:var(--telekom-radius-standard);--font-size-large:var(--telekom-typography-font-size-callout)}.tab-header{color:var(--color);cursor:pointer;display:inline-flex;outline:none;position:relative;box-sizing:border-box;align-items:center;height:var(--tab-height);font:var(--font);border-radius:var(--tab-radius);padding-right:var(--tab-spacing-horizontal);padding-left:var(--tab-spacing-horizontal);padding-top:var(--tab-spacing-vertical);padding-bottom:var(--tab-spacing-vertical)}.tab-header--disabled{cursor:auto;color:var(--color-disabled)}.tab-header--disabled:after{cursor:auto;background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header--disabled:active{color:var(--color-disabled)}.tab-header--disabled:hover{color:var(--color-disabled) !important}.tab-header--disabled:hover:after{background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header:after{left:0;right:0;width:100%;bottom:0;content:'';display:block;position:absolute;height:var(--tab-border-size);background-color:var(--tab-border-color)}.tab-header:before{left:0;right:0;width:100%;bottom:0;height:0;content:'';display:block;position:absolute;border-top:1px solid transparent}.tab-header:hover{color:var(--color-hover)}.tab-header:hover:after{background-color:var(--color-hover)}.tab-header:active{color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header ::slotted(*){margin-right:var(--spacing-right-slotted)}.tab-header--has-focus{border-radius:var(--tab-radius);outline:var(--focus-outline);z-index:1}.tab-header--has-focus.tab-header--selected:after{border-radius:0 0 3px 3px;width:98%;margin-left:1%}.tab-header--selected{color:var(--color-selected)}.tab-header--selected:after{height:var(--tab-border-size-selected);background-color:var(--color-selected)}.tab-header--selected:before{border-top:var(--tab-border-size-selected) solid transparent}.tab-header--large{font-size:var(--font-size-large);height:var(--tab-height-large)}";

const PER_SPEC_ICON_SIZE = 20;
let i = 0;
const TabHeader = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleSelect = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-select", 7);
    this.generatedId = i++;
    /** True for a disabled Tabnavigation */
    this.disabled = false;
    /** True for smaller height and font size */
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) size  */
    this.size = 'small';
    this.hasFocus = false;
  }
  handleClick(event) {
    event.stopPropagation();
    if (this.disabled) {
      return;
    }
    this.scaleSelect.emit();
  }
  selectedChanged(newValue) {
    if (!this.hostElement.isConnected) {
      return;
    }
    if (!this.disabled) {
      if (newValue === true && this.tabsHaveFocus()) {
        // Having focus on the host element, and not on inner elements,
        // is required because screen readers.
        this.hostElement.focus();
      }
      this.updateSlottedIcon();
    }
  }
  disabledChanged() {
    if (this.disabled) {
      this.selected = false;
    }
  }
  componentDidLoad() {
    this.setChildrenIconSize();
  }
  componentDidRender() {
    if (this.small !== false) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrites.',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  /**
   * Whether current focused element is within parent `scale-tab-nav`.
   * Only if `true`, we imperatively focus the selected element.
   * @returns boolean
   */
  tabsHaveFocus() {
    const tabs = this.hostElement.closest('.scale-tab-nav');
    if (!tabs) {
      return false;
    }
    return tabs.contains(document.activeElement);
  }
  /**
   * Find slotted icons, and if any, add the `selected` attribute accordingly.
   */
  updateSlottedIcon() {
    const icons = Array.from(this.hostElement.childNodes).filter(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.i);
    const action = this.selected ? 'setAttribute' : 'removeAttribute';
    icons.forEach((child) => child[action]('selected', ''));
  }
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize() {
    const icons = Array.from(this.hostElement.childNodes).filter(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.i);
    icons.forEach((icon) => {
      // This is meh people might actually want 24
      if (icon.size !== PER_SPEC_ICON_SIZE) {
        icon.size = PER_SPEC_ICON_SIZE;
      }
    });
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { id: `scale-tab-header-${this.generatedId}`, role: this.disabled ? false : 'tab', "aria-selected": this.selected ? 'true' : 'false', tabindex: this.disabled ? false : this.selected ? '0' : '-1', onFocus: () => (this.hasFocus = true), onBlur: () => (this.hasFocus = false) }, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: this.getBasePartMap(), class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tab-header';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(component, this.selected && `${prefix}selected`, this.size === 'large' && `${prefix}large`, this.hasFocus && `${prefix}has-focus`, this.disabled && `${prefix}disabled`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "selected": ["selectedChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
TabHeader.style = tabHeaderCss;




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