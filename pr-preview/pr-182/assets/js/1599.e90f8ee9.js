"use strict";
exports.id = 1599;
exports.ids = [1599];
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

/***/ 31599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_toggle_button: () => (/* binding */ ToggleButton)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);





const toggleButtonCss = ":host{--width:auto;--spacing-x:var(--telekom-spacing-composition-space-08);--spacing-x-icon-only:var(--telekom-spacing-composition-space-04);--min-height:var(--telekom-spacing-composition-space-08);--height-xs:var(--telekom-spacing-composition-space-08);--height-small:var(--telekom-spacing-composition-space-10);--height-regular:var(--telekom-spacing-composition-space-12);--height-large:var(--telekom-spacing-composition-space-14);--radius:var(--telekom-radius-small);--transition:all var(--telekom-motion-duration-transition)\n      var(--telekom-motion-easing-standard),\n    border-radius var(--telekom-motion-duration-instant);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard);--font-weight:var(--telekom-typography-font-weight-bold);--font-size-large:var(--telekom-typography-font-size-body);--font-size-small:var(--telekom-typography-font-size-caption);--font-size-xs:var(--telekom-typography-font-size-small);--line-height:var(--telekom-spacing-composition-space-04);--spacing-icon-x:var(--telekom-spacing-composition-space-04);--vertical-align:middle;--border-color:var(--telekom-color-ui-border-standard);--border-color-disabled:var(--telekom-color-ui-border-disabled);--color-disabled:var(--telekom-color-text-and-icon-disabled);--font-size-small:var(--telekom-typography-font-size-small);--line-height-small:var(--telekom-typography-line-spacing-standard);--min-height-small:var(--telekom-spacing-composition-space-10);--radius-primary:var(--radius);--background-primary:var(--telekom-color-ui-subtle);--background-primary-disabled:var(--telekom-color-ui-disabled);--color-primary:var(--telekom-color-ui-extra-strong);--color-primary-hover:var(--telekom-color-primary-hovered);--color-primary-active:var(--telekom-color-primary-pressed);--background-secondary:transparent;--color-secondary:var(--telekom-color-text-and-icon-standard);--background-secondary-hover:var(--telekom-color-ui-state-fill-hovered);--background-secondary-active:var(--telekom-color-ui-state-fill-pressed);--background-secondary-disabled:none;--border-secondary:var(--telekom-color-ui-border-standard);--border-secondary-hover:var(--telekom-color-ui-border-hovered);--border-secondary-active:var(--telekom-color-ui-border-pressed);--border-secondary-focus:var(--telekom-color-functional-focus-standard);--color-selected:var(--telekom-color-text-and-icon-white-standard);--background-selected-light:var(--telekom-color-primary-standard);--background-selected-hover-light:var(--telekom-color-primary-hovered);--background-selected-active-light:var(--telekom-color-primary-pressed);--background-selected-dark:var(--telekom-color-ui-extra-strong);--background-selected-hover-dark:var(--telekom-color-ui-strong);--background-selected-active-dark:var(--telekom-color-ui-strong);--color-high-contrast:var(--telekom-color-text-and-icon-white-standard)}.toggle-button{box-sizing:border-box;display:inline-flex;align-items:center;position:relative;border:0;outline:none;cursor:pointer;user-select:none;font-family:inherit;word-spacing:inherit;letter-spacing:inherit;justify-content:center;text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);min-height:var(--min-height);width:var(--width);padding-left:var(--spacing-x);padding-right:var(--spacing-x);vertical-align:var(--vertical-align);transition:var(--transition);margin:0;color:var(--color-primary)}.toggle-button--primary{background:var(--background-primary)}.toggle-button--secondary{color:var(--color-secondary);background:var(--background-secondary)}.toggle-button--icon-before ::slotted(*){margin-right:var(--spacing-icon-x);pointer-events:none}.toggle-button--icon-after ::slotted(*){margin-left:var(--spacing-icon-x);pointer-events:none}.toggle-button--icon-only ::slotted(*){pointer-events:none}.toggle-button--xs{height:var(--height-xs);font-size:var(--font-size-xs)}.toggle-button--small{height:var(--height-small);font-size:var(--font-size-small)}.toggle-button--regular{height:var(--height-regular);font-size:var(--font-size-large)}.toggle-button--large{height:var(--height-large);font-size:var(--font-size-large)}.toggle-button:not(.button--disabled):focus{box-shadow:var(--box-shadow-focus)}.toggle-button:not(.button--disabled):hover{color:var(--color-secondary-hover);background-color:var(--background-secondary-hover)}.toggle-button:not(.button--disabled):active{color:var(--color-secondary-active);background-color:var(--background-secondary-active)}.toggle-button:disabled{color:var(--color-disabled);pointer-events:none;border:1px solid var(--border-color-disabled)}.toggle-button:disabled.toggle-button--primary{background:var(--background-primary-disabled)}.toggle-button--selected.toggle-button--color{color:var(--color-selected);background:var(--background-selected-light)}.toggle-button--selected:not(.button--disabled).toggle-button--color:hover{color:var(--color-selected);background:var(--background-selected-hover-light)}.toggle-button--selected:not(.button--disabled).toggle-button--color:active{color:var(--color-selected);background:var(--background-selected-active-light)}.toggle-button--selected.toggle-button--monochrome{color:var(--telekom-color-text-and-icon-inverted-standard);background:var(--background-selected-dark)}.toggle-button--selected:not(.button--disabled).toggle-button--monochrome:hover{color:var(--color-selected);background:var(--background-selected-hover-dark)}.toggle-button--selected:not(.button--disabled).toggle-button--monochrome:active{color:var(--color-selected);background:var(--background-selected-active-dark)}.toggle-button--border{border:1px solid var(--border-color)}.toggle-button--left,.toggle-button--left:disabled{border-right:0;border-radius:var(--radius-primary) 0 0 var(--radius-primary)}.toggle-button--right,.toggle-button--right:disabled{border-left:0;border-radius:0 var(--radius-primary) var(--radius-primary) 0}.toggle-button--both,.toggle-button--both:disabled{border-radius:var(--radius-primary)}.toggle-button--all,.toggle-button--all:disabled{border-radius:var(--radius-primary)}.toggle-button--neither,.toggle-button--neither:disabled{border-right:0;border-left:0;border-radius:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){.toggle-button{color:var(--color-high-contrast)}}";

var iconSizes;
(function (iconSizes) {
  iconSizes["xs"] = "12";
  iconSizes["small"] = "16";
  iconSizes["regular"] = "22";
  iconSizes["large"] = "24";
})(iconSizes || (iconSizes = {}));
let i = 0;
const ToggleButton = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleClick = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-click", 7);
    this.scaleClickLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleClick", 7);
    /** (optional) The size of the button */
    this.size = 'regular';
    /** (optional) Button background */
    this.background = 'white';
    /** @deprecated - variant should replace colorScheme */
    this.colorScheme = 'color';
    /** (optional) background variant of a selected toggle-button */
    this.variant = 'color';
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) If `true`, the button is selected */
    this.selected = false;
    /** (optional) Button type */
    this.iconOnly = false;
    /** (optional) Icon position related to the label */
    this.iconPosition = 'before';
    /** (optional) set the border-radius left, right or both */
    this.radius = null;
    /** (optional) translation of 'selected */
    this.ariaLangSelected = 'selected';
    /** (optional) translation of 'deselected */
    this.ariaLangDeselected = 'deselected';
    /** a11y text for getting meaningful value. `$buttonNumber` and `$selected` are template variables and will be replaces by their corresponding properties.  */
    this.ariaDescriptionTranslation = '$selected';
    this.hasScaleIcon = false;
    this.handleClick = (event) => {
      event.preventDefault();
      this.selected = !this.selected;
      this.handleIconShape();
      this.scaleClick.emit({ id: this.toggleButtonId, selected: this.selected });
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleClick', {
        id: this.toggleButtonId,
        selected: this.selected,
      });
    };
    this.handleIconShape = () => {
      if (this.hasScaleIcon) {
        Array.from(this.hostElement.children).forEach((node) => {
          if (node.nodeName.substr(0, 10) === 'SCALE-ICON') {
            if (this.selected) {
              node.setAttribute('selected', 'true');
            }
            else {
              node.removeAttribute('selected');
            }
          }
        });
      }
    };
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  connectedCallback() {
    this.setIconPositionProp();
    this.handleIconShape();
  }
  componentDidLoad() {
    this.handleIconSize();
  }
  componentDidRender() {
    this.handleIconSize();
    if (this.hostElement.hasAttribute('aria-label')) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelToggleButton" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  componentWillLoad() {
    if (this.toggleButtonId == null) {
      this.toggleButtonId = 'toggle-button-' + i++;
    }
  }
  getAriaDescriptionTranslation() {
    const replaceSelected = this.selected
      ? this.ariaLangSelected
      : this.ariaLangDeselected;
    const filledText = this.ariaDescriptionTranslation
      .replace(/\$position/g, `${this.position}`)
      .replace(/\$selected/g, `${replaceSelected}`);
    return filledText;
  }
  handleIconSize() {
    Array.from(this.hostElement.children).forEach((child) => {
      if (child.tagName.substr(0, 10) === 'SCALE-ICON') {
        child.setAttribute('size', iconSizes[this.size]);
      }
    });
  }
  /**
   * Detect whether a child node is a scale icon and contains text.
   * If so, we set `iconPosition` to `after`, if the icon comes after the text.
   */
  setIconPositionProp() {
    const nodes = Array.from(this.hostElement.childNodes).filter((node) => {
      if (node.nodeName.substr(0, 10) === 'SCALE-ICON') {
        this.hasScaleIcon = true;
      }
      // ignore empty text nodes, which are probably due to formatting
      return !(node.nodeType === 3 && node.nodeValue.trim() === '');
    });
    if (!this.iconOnly &&
      nodes &&
      nodes.length &&
      nodes[nodes.length - 1] &&
      nodes[nodes.length - 1].nodeName.substr(0, 10) === 'SCALE-ICON') {
      this.iconPosition = 'after';
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), id: this.toggleButtonId, onClick: this.handleClick, disabled: this.disabled, type: "button", "aria-label": this.ariaLabelToggleButton, "aria-pressed": this.selected, part: this.getBasePartMap(), "aria-description": this.getAriaDescriptionTranslation() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'toggle-button--';
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('toggle-button', this.size && `${prefix}${this.size}`, this.background &&
      `${prefix}${this.background === 'grey' ? 'primary' : 'secondary'}`, !this.iconOnly &&
      this.iconPosition &&
      `toggle-button--icon-${this.iconPosition}`, this.iconOnly && `${prefix}icon-only`, !this.disabled && this.selected && `${prefix}selected`, this.radius && `${prefix}${this.radius}`, this.colorScheme && `${prefix}${this.colorScheme}`, this.variant && `${prefix}${this.variant}`, !this.hideBorder && `${prefix}border`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ToggleButton.style = toggleButtonCss;




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