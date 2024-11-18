"use strict";
exports.id = 4931;
exports.ids = [4931];
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

/***/ 4931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_button: () => (/* binding */ Button),
/* harmony export */   scale_icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




const buttonCss = ":host{--width:auto;--spacing-x-right:var(--telekom-spacing-composition-space-07);--spacing-x-left:var(--telekom-spacing-composition-space-07);--spacing-x-icon-only:var(--telekom-spacing-composition-space-05);--min-height:var(--telekom-spacing-composition-space-13);--min-width:var(--telekom-spacing-composition-space-13);--radius:var(--telekom-radius-standard);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-focus:var(--telekom-color-functional-focus-standard);--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-tight);--spacing-icon-x:var(--telekom-spacing-composition-space-04);--vertical-align:middle;--font-size-small:var(--telekom-typography-font-size-caption);--line-height-small:1.125rem;--min-height-small:var(--telekom-spacing-composition-space-10);--spacing-x-right-small:var(--telekom-spacing-composition-space-06);--spacing-x-left-small:var(--telekom-spacing-composition-space-06);--spacing-x-icon-only-small:var(--telekom-spacing-composition-space-00);--spacing-icon-x-small:var(--telekom-spacing-composition-space-03);--radius-primary:var(--radius);--background-primary:var(--telekom-color-primary-standard);--background-primary-hover:var(--telekom-color-primary-hovered);--background-primary-active:var(--telekom-color-primary-pressed);--background-primary-disabled:var(--telekom-color-ui-disabled);--color-primary:var(--telekom-color-text-and-icon-white-standard);--color-primary-disabled:var(--telekom-color-text-and-icon-disabled);--radius-secondary:var(--radius);--border-width-secondary:var(--telekom-spacing-composition-space-01);--background-secondary:transparent;--color-secondary:var(--telekom-color-text-and-icon-standard);--color-secondary-hover:var(--telekom-color-text-and-icon-standard);--color-secondary-active:var(--telekom-color-text-and-icon-standard);--color-secondary-disabled:var(--telekom-color-text-and-icon-disabled);--background-secondary:var(--telekom-color-ui-state-fill-standard);--background-secondary-hover:var(--telekom-color-ui-state-fill-hovered);--background-secondary-active:var(--telekom-color-ui-state-fill-pressed);--background-secondary-disabled:none;--border-secondary:var(--telekom-color-ui-border-standard);--border-secondary-hover:var(--telekom-color-ui-border-hovered);--border-secondary-active:var(--telekom-color-ui-border-pressed);--border-secondary-focus:var(--telekom-color-functional-focus-standard);--border-secondary-white:var(--telekom-color-ui-white);--color-secondary-white:var(--telekom-color-ui-white);--background-secondary-white-hover:var(\n    --telekom-color-ui-state-fill-hovered-inverted\n  );--background-secondary-white-active:var(\n    --telekom-color-ui-state-fill-pressed-inverted\n  );--secondary-white-opacity:0.5;--radius-ghost:var(--radius);--border-width-ghost:var(--telekom-spacing-composition-space-01);--spacing-x-ghost:var(--telekom-spacing-composition-space-04);--color-ghost:var(--telekom-color-text-and-icon-link-standard);--color-ghost-hover:var(--telekom-color-text-and-icon-link-hovered);--color-ghost-active:var(--telekom-color-text-and-icon-link-active);--color-ghost-disabled:var(--telekom-color-text-and-icon-disabled);--background-ghost-hover:var(--telekom-color-ui-state-fill-hovered);--background-ghost-active:var(--telekom-color-ui-state-fill-pressed);display:inline-block}.button{box-sizing:border-box;display:inline-flex;align-items:center;position:relative;border:0;outline:none;cursor:pointer;user-select:none;font-family:inherit;word-spacing:inherit;letter-spacing:inherit;justify-content:center;text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);min-height:var(--min-height);min-width:var(--min-width);width:var(--width);padding-left:var(--spacing-x-left);padding-right:var(--spacing-x-right);vertical-align:var(--vertical-align);transition:var(--transition)}.button.button--size-small{font-size:var(--font-size-small);line-height:var(--line-height-small);min-height:var(--min-height-small);padding-left:var(--spacing-x-left-small);padding-right:var(--spacing-x-right-small)}.button:not(.button--disabled):focus{outline:var(--telekom-line-weight-highlight) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}.button.button--icon-before:not(.button--icon-only) ::slotted(*){margin-right:var(--spacing-icon-x);margin-left:calc(var(--spacing-icon-x-small) * -1);margin-top:var(--spacing-icon-x);margin-bottom:var(--spacing-icon-x)}.button.button--icon-before:not(.button--icon-only).button--size-small ::slotted(*){margin-right:var(--spacing-icon-x-small);margin-left:calc(var(--spacing-icon-x) * -0.5)}.button.button--icon-after:not(.button--icon-only) ::slotted(*){margin-left:var(--spacing-icon-x);margin-right:calc(var(--spacing-icon-x-small) * -1);margin-top:var(--spacing-icon-x);margin-bottom:var(--spacing-icon-x)}.button.button--icon-after:not(.button--icon-only).button--size-small ::slotted(*){margin-left:var(--spacing-icon-x-small);margin-right:calc(var(--spacing-icon-x) * -0.5)}.button:after{top:0;left:0;width:100%;border:var(--telekom-spacing-composition-space-01) solid transparent;height:100%;content:'';display:block;position:absolute;box-sizing:border-box;pointer-events:none;border-radius:var(--radius)}.button--icon-only{padding-left:var(--spacing-x-icon-only);padding-right:var(--spacing-x-icon-only)}.button--icon-only.button--variant-secondary{padding-left:calc(var(--spacing-x-icon-only) - 1px);padding-right:calc(var(--spacing-x-icon-only) - 1px)}.button--icon-only.button--size-small{padding-left:var(--spacing-x-icon-only-small);padding-right:var(--spacing-x-icon-only-small);min-width:32px}.button--icon-only.button--size-small.button--variant-secondary{padding-left:calc(var(--spacing-x-icon-only-small) - 1px);padding-right:calc(var(--spacing-x-icon-only-small) - 1px)}.button--disabled{cursor:not-allowed}.button--variant-primary{text-align:center;border-radius:var(--radius);background:var(--background-primary);color:var(--color-primary)}.button--variant-primary:not(.button--disabled):hover{background:var(--background-primary-hover)}.button--variant-primary:not(.button--disabled):active{background:var(--background-primary-active)}.button--disabled.button--variant-primary{background:var(--background-primary-disabled);color:var(--color-primary-disabled)}.button--variant-secondary{background:var(--background-secondary);text-align:center;border-radius:var(--radius-secondary);border:var(--border-width-secondary) solid currentColor;color:var(--color-secondary);background-color:var(--background-secondary);border-color:var(--border-secondary)}.button--variant-secondary:not(.button--disabled):hover{color:var(--color-secondary-hover);background-color:var(--background-secondary-hover);border-color:var(--border-secondary-hover)}.button--variant-secondary:not(.button--disabled):active{color:var(--color-secondary-active);background-color:var(--background-secondary-active);border-color:var(--border-secondary-active)}.button--disabled.button--variant-secondary{color:var(--color-secondary-disabled);background-color:var(--background-secondary-disabled)}.button--variant-ghost{background:transparent;text-align:center;border-radius:var(--radius-ghost);border:var(--border-width-ghost) solid transparent;color:var(--color-ghost);padding-left:var(--spacing-x-ghost);padding-right:var(--spacing-x-ghost)}.button--variant-ghost:not(.button--disabled):hover{color:var(--color-ghost-hover);background-color:var(--background-ghost-hover)}.button--variant-ghost:not(.button--disabled):active{color:var(--color-ghost-active);background-color:var(--background-ghost-active)}.button--disabled.button--variant-ghost{color:var(--color-ghost-disabled)}.button--variant-secondary-white{background:var(--background-secondary);text-align:center;border-radius:var(--radius-secondary);border:var(--border-width-secondary) solid currentColor;color:var(--color-secondary-white);background-color:var(--background-secondary);border-color:var(--border-secondary-white)}.button--variant-secondary-white:not(.button--disabled):hover{background-color:var(--background-secondary-white-hover)}.button--variant-secondary-white:not(.button--disabled):active{background-color:var(--background-secondary-white-active)}.button--disabled.button--variant-secondary-white{opacity:var(--secondary-white-opacity)}";

const DEFAULT_ICON_SIZE = 24;
const buttonIconSizeMap = {
  small: 16,
  large: 20,
};
const Button = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The size of the button */
    this.size = 'large';
    /** (optional) Button variant */
    this.variant = 'primary';
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) Set to `true` when the button contains only an icon */
    this.iconOnly = false;
    /** (optional) Icon position related to the label */
    this.iconPosition = 'before';
    /** (optional) The target attribute for the <a> tag */
    this.target = '_self';
    /**
     * Hack to make the button behave has expected when inside forms.
     * @see https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/button/button.tsx#L155-L175
     */
    this.handleClick = (ev) => {
      // No need to check for `disabled` because disabled buttons won't emit clicks
      if ((0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.hostElement)) {
        const parentForm = this.hostElement.closest('form');
        if (parentForm) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          if (this.type) {
            fakeButton.type = this.type;
          }
          fakeButton.style.display = 'none';
          parentForm.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
  }
  /**
   * Prevent clicks from being emitted from the host
   * when the component is `disabled`.
   */
  handleHostClick(event) {
    if (this.disabled === true) {
      event.stopImmediatePropagation();
    }
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  componentDidLoad() {
    this.setChildrenIconSize();
  }
  connectedCallback() {
    this.setIconPositionProp();
    this.appendEnterKeySubmitFallback();
  }
  disconnectedCallback() {
    this.cleanUpEnterKeySubmitFallback();
  }
  /**
   * In order for forms to be submitted with the Enter key
   * there has to be a `button` or an `input[type="submit"]` in the form.
   * Browsers do not take the <button> inside the Shadow DOM into account for this matter.
   * So we carefully append an `input[type="submit"]` to overcome this.
   *
   * @see https://stackoverflow.com/a/35235768
   * @see https://github.com/telekom/scale/issues/859
   */
  appendEnterKeySubmitFallback() {
    if ((0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.hostElement)) {
      const parentForm = this.hostElement.closest('form');
      if (parentForm == null) {
        return;
      }
      const hasSubmitInputAlready = parentForm.querySelector('input[type="submit"]') != null;
      if (hasSubmitInputAlready) {
        return;
      }
      this.fallbackSubmitInputElement = document.createElement('input');
      this.fallbackSubmitInputElement.type = 'submit';
      this.fallbackSubmitInputElement.hidden = true;
      parentForm.appendChild(this.fallbackSubmitInputElement);
    }
  }
  cleanUpEnterKeySubmitFallback() {
    if (this.fallbackSubmitInputElement != null) {
      try {
        this.fallbackSubmitInputElement.remove();
        this.fallbackSubmitInputElement = null;
      }
      catch (err) { }
    }
  }
  /**
   * Detect whether the last node is an element (not text).
   * If so, it's probably an icon, so we set `iconPosition` to `after`.
   */
  setIconPositionProp() {
    const nodes = Array.from(this.hostElement.childNodes).filter((node) => {
      // ignore empty text nodes, which are probably due to formatting
      return !(node.nodeType === 3 && node.nodeValue.trim() === '');
    });
    const lastNode = nodes.length > 1 ? nodes[nodes.length - 1] : null;
    if (!this.iconOnly && lastNode && (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.i)(lastNode)) {
      this.iconPosition = 'after';
    }
  }
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize() {
    if (this.size != null && buttonIconSizeMap[this.size] != null) {
      const icons = Array.from(this.hostElement.childNodes).filter(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.i);
      icons.forEach((icon) => {
        if (icon.size === DEFAULT_ICON_SIZE) {
          icon.size = buttonIconSizeMap[this.size];
        }
      });
    }
  }
  render() {
    const basePart = (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.variant && `variant-${this.variant}`, this.iconOnly && 'icon-only', !this.iconOnly && this.iconPosition, this.disabled && 'disabled');
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), this.href ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), href: this.disabled ? null : this.href, download: this.download, target: this.target, rel: this.target === '_blank' ? 'noopener noreferrer' : undefined, part: basePart, tabIndex: this.innerTabindex, role: "link", "aria-disabled": this.disabled ? 'true' : null, "aria-label": this.innerAriaLabel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), onClick: this.handleClick, disabled: this.disabled, type: this.type, part: basePart, tabIndex: this.innerTabindex, name: this.name, value: this.value, "aria-label": this.innerAriaLabel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('button', this.size && `button--size-${this.size}`, this.variant && `button--variant-${this.variant}`, this.iconOnly && `button--icon-only`, !this.iconOnly &&
      this.iconPosition &&
      `button--icon-${this.iconPosition}`, this.disabled && `button--disabled`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Button.style = buttonCss;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const Icon = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /**
     * Will be used for both `width` and `height`, all icons are square.
     * Keep in mind the `viewBox` attribute is set to "0 0 24 24".
     */
    this.size = 24;
    /** The SVG `fill` attribute */
    this.fill = 'var(--icon-color, currentColor)';
    /** The SVG `stroke` attribute */
    this.stroke = 'transparent';
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
    /** (optional) If `true` the svg element will get aria-hidden="true" */
    this.decorative = false;
  }
  render() {
    const pathAttributes = {
      fill: this.fill,
      stroke: this.stroke,
    };
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", class: this.getCssClassMap(), part: "base", width: this.size, height: this.size, viewBox: "0 0 24 24", role: "img" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), this.path ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", Object.assign({ d: this.path }, pathAttributes, { part: "path" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("use", Object.assign({ xlinkHref: `#icon-${this.name}` }, pathAttributes))))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('icon');
  }
};
Icon.style = iconCss;




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