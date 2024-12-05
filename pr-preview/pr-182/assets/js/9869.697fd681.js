"use strict";
exports.id = 9869;
exports.ids = [9869];
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

/***/ 99869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_segment: () => (/* binding */ Segment)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




const segmentCss = ":host{--background-color-selected:var(--telekom-color-ui-base);--button-radius:6px;--padding-top-bottom:var(--telekom-spacing-composition-space-03);--height:28px;--font:var(--telekom-text-style-caption-bold);--label-disabled:var(--telekom-color-text-and-icon-disabled);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color:var(--telekom-color-text-and-icon-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-medium:var(--telekom-text-style-ui-bold);--height-medium:36px;--font-large:var(--telekom-text-style-ui-bold);--height-large:40px;--background-color-hover:var(--telekom-color-ui-state-fill-hovered);--background-color-active:var(--telekom-color-ui-state-fill-pressed);display:flex;align-items:center;justify-content:center;flex:1}.segment{box-sizing:border-box;position:relative;border:0;height:100%;width:100%;border-radius:var(--button-radius);padding-top:var(--padding-top-bottom);padding-bottom:var(--padding-top-bottom);transition:var(--transition);background-color:transparent;padding:0}.segment--mask{box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:100%;border-radius:var(--button-radius);background-color:transparent;font:var(--font);transition:var(--transition);white-space:nowrap;color:var(--color);line-height:1}button.segment--small.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-04);padding-right:var(--telekom-spacing-composition-space-05)}button.segment--icon-only.segment--small .segment--mask{padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-06)}button.segment--small .segment--mask{padding-left:0.625rem;padding-right:0.625rem}.segment--small{height:var(--height)}.segment--medium{height:var(--height-medium)}button.segment--medium.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-05);padding-right:var(--telekom-spacing-composition-space-06)}button.segment--medium .segment--mask{font:var(--font-medium);padding-left:0.875rem;padding-right:0.875rem}.segment--large{height:var(--height-large)}button.segment--large.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-07)}button.segment--large .segment--mask{font:var(--font-large);padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-07)}.segment--selected{background-color:var(--background-color-selected);box-shadow:var(--telekom-shadow-raised-standard)}.segment--selected .segment--mask{color:var(--color-selected)}.segment--disabled.segment--selected .segment--mask{color:var(--label-disabled)}.segment--disabled:not(.segment--selected) .segment--mask{color:var(--label-disabled);background-color:transparent}.segment--left-sibling-selected{border-radius:0 var(--button-radius) var(--button-radius) 0;margin-left:0;clip-path:inset(-2.75rem -2.75rem -2.75rem 0);backface-visibility:hidden;overflow:hidden}.segment--right-sibling-selected{border-radius:var(--button-radius) 0 0 var(--button-radius);clip-path:inset(-2.75rem 0 -2.75rem -2.75rem);margin-right:0;backface-visibility:hidden;overflow:hidden;position:relative}.segment--left-right-sibling-selected{clip-path:inset(-2.75rem 0 -2.75rem 0);border-radius:0;margin-left:0;margin-right:0;backface-visibility:hidden}.segment:not(.segment--disabled):hover .segment--mask{background-color:var(--background-color-hover)}.segment:not(.segment--disabled):active .segment--mask{background-color:var(--background-color-active)}.segment:focus{box-shadow:var(--telekom-shadow-raised-standard);outline:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:var(--telekom-spacing-composition-space-01);z-index:40;position:relative}.segment:not(.segment--selected):focus{outline-offset:0}.segment--left-right-sibling-selected:focus,.segment--right-sibling-selected:focus,.segment--left-sibling-selected:focus{clip-path:none}.segment:not(.segment--icon-only) scale-icon-action-checkmark,.segment scale-icon-action-close{margin-right:var(--telekom-spacing-composition-space-03)}.segment:not(.segment--selected) scale-icon-action-checkmark{visibility:hidden !important}.segment scale-icon-action-checkmark{vertical-align:middle}.segment--selected:not(.segment--icon-only) .icon-container{display:none !important}.segment .success-icon-container{display:none}.segment--selected .success-icon-container{display:flex;justify-content:center;align-items:center}.icon-container{height:100%;display:flex;justify-content:center;align-items:center}.segment--selected .icon-container{color:var(--color-selected)}";

let i = 0;
const Segment = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleClick = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-click", 7);
    this.scaleClickLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleClick", 7);
    /** (optional) The size of the segment */
    this.size = 'small';
    /** (optional) If `true`, the segment is selected */
    this.selected = false;
    /** (optional) If `true`, the segment is disabled */
    this.disabled = false;
    /** (optional) translation of 'selected */
    this.ariaLangSelected = 'selected';
    /** (optional) translation of 'deselected */
    this.ariaLangDeselected = 'deselected';
    /** a11y text for getting meaningful value. `$buttonNumber` and `$selected` are template variables and will be replaces by their corresponding properties.  */
    this.ariaDescriptionTranslation = '$selected';
    this.handleClick = (event) => {
      if (parseInt(this.selectedIndex, 10) + 1 === this.position) {
        return;
      }
      event.preventDefault();
      this.selected = !this.selected;
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleClick', {
        id: this.segmentId,
        selected: this.selected,
      });
    };
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  componentWillLoad() {
    if (this.segmentId == null) {
      this.segmentId = 'segment-' + i++;
    }
  }
  componentDidUpdate() {
    this.handleIcon();
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
  handleIcon() {
    Array.from(this.hostElement.childNodes).forEach((child) => {
      if (child.nodeType === 1 &&
        child.nodeName.substr(0, 10) === 'SCALE-ICON') {
        const icon = this.hostElement.querySelector(child.nodeName);
        switch (this.size) {
          case 'small':
            icon.setAttribute('size', '14');
            break;
          case 'medium':
            icon.setAttribute('size', '16');
            break;
          case 'large':
            icon.setAttribute('size', '20');
            break;
        }
        icon.style.display = 'inline-flex';
        icon.style.marginRight = '4px';
        this.hasIcon = true;
      }
      if (child.nodeType === 3 && this.hostElement.childNodes.length === 1) {
        this.textOnly = true;
        const span = document.createElement('span');
        child.parentNode.insertBefore(span, child);
        span.appendChild(child);
      }
      if (child.nodeType === 1 &&
        child.nodeName.substr(0, 10) === 'SCALE-ICON' &&
        this.hostElement.childNodes.length === 1) {
        this.iconOnly = true;
        this.hostElement.setAttribute('icon-only', 'true');
        const icon = this.hostElement.querySelector(child.nodeName);
        icon.style.marginRight = '0px';
        this.selected
          ? icon.setAttribute('selected', '')
          : icon.removeAttribute('selected');
      }
    });
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), id: this.segmentId, onClick: this.handleClick, disabled: this.disabled, type: "button", style: { width: this.width }, "aria-label": this.ariaLabelSegment, "aria-pressed": this.selected, part: this.getBasePartMap(), "aria-description": this.getAriaDescriptionTranslation() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "segment--mask" }, !this.iconOnly && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "success-icon-container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-checkmark", { size: this.size === 'small'
        ? 14
        : this.size === 'medium'
          ? 16
          : 20, class: "scale-icon-action-checkmark", "aria-hidden": "true", selected: true }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "icon-container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "segment-icon" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'segment--';
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('segment', this.size && `${prefix}${this.size}`, this.selected && `${prefix}selected`, this.disabled && `${prefix}disabled`, this.adjacentSiblings &&
      `${prefix}${this.adjacentSiblings.replace(/ /g, '-')}-sibling-selected`, this.hasIcon && `${prefix}has-icon`, this.iconOnly && `${prefix}icon-only`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Segment.style = segmentCss;




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