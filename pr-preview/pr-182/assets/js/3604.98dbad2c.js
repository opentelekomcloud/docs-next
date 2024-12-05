"use strict";
exports.id = 3604;
exports.ids = [3604];
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

/***/ 73604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_toggle_group: () => (/* binding */ ToggleGroup)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);





const toggleGroupCss = ":host{--border-color:var(--telekom-color-ui-border-standard);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--border-color);--border-disabled:var(--telekom-spacing-composition-space-01) solid\n    var(--border-color-disabled);--radius:var(--telekom-radius-standard)}.toggle-group--inline{display:inline-flex}.toggle-group--block{display:flex}.toggle-group--block ::slotted(*){flex-grow:1}";

const ToggleGroup = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    /** toggle button position within group */
    this.position = 0;
    /** number of slotted toggle-buttons */
    this.slottedButtons = 0;
    /** state */
    this.status = [];
    /** (optional) The size of the button */
    this.size = 'regular';
    /** (optional) Button Group background */
    this.background = 'white';
    /** (optional) 100% width */
    this.fullWidth = false;
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) If `true`, the group has a border */
    this.hideBorder = false;
    /** (optional) more than one button selected possible */
    this.singleSelect = false;
    /** (optional) aria-label attribute needed for icon-only buttons */
    this.ariaLabelTranslation = `toggle button group with $slottedButtons buttons`;
    /** @deprecated - variant should replace colorScheme */
    this.colorScheme = 'color';
    /** (optional) background variant of a selected toggle-button */
    this.variant = 'color';
  }
  scaleClickHandler(ev) {
    let tempState;
    if (this.singleSelect) {
      if (!ev.detail.selected) {
        tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign({}, obj));
        /* clicked button has now selected state */
      }
      else {
        tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign(Object.assign({}, obj), { selected: false }));
      }
    }
    else {
      tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign({}, obj));
    }
    this.setNewState(tempState);
  }
  handlePropsChange() {
    this.propagatePropsToChildren();
  }
  componentDidLoad() {
    const tempState = [];
    const toggleButtons = this.getAllToggleButtons();
    this.slottedButtons = toggleButtons.length;
    toggleButtons.forEach((toggleButton) => {
      this.position++;
      tempState.push({
        id: toggleButton.getAttribute('toggle-button-id'),
        selected: toggleButton.hasAttribute('selected'),
      });
      toggleButton.setAttribute('position', this.position.toString());
      toggleButton.setAttribute('aria-description-translation', '$position $selected');
    });
    this.propagatePropsToChildren();
    this.position = 0;
    this.status = tempState;
  }
  getAllToggleButtons() {
    return Array.from(this.hostElement.querySelectorAll('scale-toggle-button'));
  }
  /**
   * Keep props, needed in children buttons, in sync
   */
  propagatePropsToChildren() {
    this.getAllToggleButtons().forEach((el) => {
      el.setAttribute('size', this.size);
      el.setAttribute('background', this.background);
      el.setAttribute('disabled', this.disabled && 'disabled');
      /** DEPRECATED */
      // if attribute variant is set it overrides color-scheme
      el.setAttribute('color-scheme', this.variant !== 'color' ? this.variant : this.colorScheme);
      // if attribute color-scheme is set it overrides variant
      el.setAttribute('variant', this.colorScheme !== 'color' ? this.colorScheme : this.variant);
      el.setAttribute('hide-border', this.hideBorder ? 'true' : 'false');
    });
  }
  getAriaLabelTranslation() {
    const filledText = this.ariaLabelTranslation.replace(/\$slottedButtons/g, `${this.slottedButtons}`);
    return filledText;
  }
  componentDidRender() {
    if (this.fullWidth) {
      this.setButtonWidth();
    }
    this.setChildrenCorners();
    if (this.colorScheme !== 'color') {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "colorScheme" is deprecated. Please use the "variant" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  setNewState(tempState) {
    const toggleButtons = Array.from(this.hostElement.querySelectorAll('scale-toggle-button'));
    toggleButtons.forEach((button, i) => {
      button.setAttribute('selected', tempState[i].selected ? 'true' : 'false');
    });
    this.status = tempState;
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', this.status);
  }
  setButtonWidth() {
    Array.from(this.hostElement.children).forEach((child) => {
      const button = child.shadowRoot.querySelector('button');
      button.style.width = '100%';
    });
  }
  setChildrenCorners() {
    const children = Array.from(this.hostElement.children);
    if (children.length === 1) {
      // set four border radius when there is only one child
      children[0].setAttribute('radius', 'all');
    }
    else {
      for (let i = 0; i < children.length; i++) {
        if (i === 0) {
          children[i].setAttribute('radius', 'left');
        }
        if (i > 0 && i < children.length - 1) {
          children[i].setAttribute('radius', 'neither');
        }
        if (i === children.length - 1) {
          children[i].setAttribute('radius', 'right');
        }
      }
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap(), part: this.getBasePartMap(), "aria-label": this.getAriaLabelTranslation(), role: "group" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'toggle-group--';
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('toggle-group', this.fullWidth && `${prefix}block`, !this.fullWidth && `${prefix}inline`, this.disabled && `${prefix}disabled`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "background": ["handlePropsChange"],
    "disabled": ["handlePropsChange"],
    "hideBorder": ["handlePropsChange"],
    "size": ["handlePropsChange"],
    "variant": ["handlePropsChange"]
  }; }
};
ToggleGroup.style = toggleGroupCss;




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