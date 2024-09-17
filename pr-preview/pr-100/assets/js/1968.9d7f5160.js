"use strict";
exports.id = 1968;
exports.ids = [1968];
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

/***/ 81968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_collapsible: () => (/* binding */ Collapsible)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




const collapsibleCss = ":host{--spacing-y:var(--telekom-spacing-composition-space-06);--font:var(--telekom-text-style-heading-5);--border-width-button:var(--telekom-spacing-composition-space-02);--radius-button:var(--telekom-radius-small);--spacing-left-button:0;--spacing-left-button-text:var(--telekom-spacing-composition-space-04);--color-button-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-button-active:var(--telekom-color-text-and-icon-primary-pressed);--background-button-hover:none;--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--spacing-right-content:var(--telekom-spacing-composition-space-14);--spacing-left-content:34px;--spacing-top-content:var(--telekom-spacing-composition-space-06);--spacing-bottom-content:var(--telekom-spacing-composition-space-08)}.collapsible{position:relative;margin:var(--spacing-y) 0}.collapsible--expanded:before{top:0;left:0;right:0;width:100%;border:var(--telekom-spacing-composition-space-01) solid transparent;content:'';display:block;position:absolute;pointer-events:none;bottom:calc(-1 * var(--spacing-y))}.collapsible__heading{margin:0}.collapsible__button{color:currentColor;width:100%;display:flex;text-align:left;align-items:center;padding-top:0;border-color:transparent;border-style:solid;padding-right:0;padding-bottom:0;background-color:transparent;font:var(--font);border-width:var(--border-width-button);border-radius:var(--radius-button);padding-left:var(--spacing-left-button);font-family:inherit;word-spacing:inherit;letter-spacing:inherit}.collapsible__button-text{margin-left:var(--spacing-left-button-text)}.collapsible__button:hover{cursor:pointer;color:var(--color-button-hover);background-color:var(--background-button-hover)}.collapsible__button:active{color:var(--color-button-active);background-color:transparent}.collapsible__button:focus{outline:var(--focus-outline)}.collapsible__icon{flex-shrink:0}.collapsible__icon-right{margin-left:auto}.collapsible__button[aria-expanded='true'] .collapsible__icon{}.collapsible__content{padding-right:var(--spacing-right-content);padding-left:var(--spacing-left-content);margin-top:var(--spacing-top-content);margin-bottom:var(--spacing-bottom-content)}::slotted(*:not([slot='heading'])){font:var(--telekom-text-style-body)}";

const DEFAULT_ICON_SIZE = 24;
let i = 0;
const Collapsible = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleExpand = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-expand", 7);
    this.scaleExpandLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleExpand", 7);
    /** Default aria-level for heading */
    this.headingLevel = 2;
    this.iconLocation = 'left';
    this.handleClick = () => {
      this.expanded = !this.expanded;
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleExpand', { expanded: this.expanded });
    };
  }
  componentWillLoad() {
    const j = i++;
    this.headingId = 'collapsable-heading-' + j;
    this.panelId = 'collapsable-panel-' + j;
  }
  componentDidLoad() {
    this.setHeadingFromLightDOM();
  }
  /**
   * @deprecated Safe to remove in 4.0
   * @see https://github.com/telekom/scale/pull/319
   */
  setHeadingFromLightDOM() {
    const lightHeading = this.hostElement.querySelector(':first-child');
    if (lightHeading == null) {
      return;
    }
    // Only proceed if the element is not a heading and has no `slot` attribute
    const isHeading = lightHeading.tagName.charAt(0).toUpperCase() === 'H';
    const hasSlotAttr = lightHeading.hasAttribute('slot');
    if (isHeading && !hasSlotAttr) {
      this.headingElement.innerHTML = lightHeading.innerHTML;
      lightHeading.style.display = 'none';
    }
  }
  render() {
    const IconTag = this.expanded
      ? 'scale-icon-navigation-collapse-down'
      : 'scale-icon-navigation-right';
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap(), part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.expanded && 'expanded') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", { "aria-level": this.headingLevel, class: "collapsible__heading", part: "heading" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { id: this.headingId, class: "collapsible__button", part: "button", onClick: this.handleClick, "aria-expanded": this.expanded ? 'true' : 'false', "aria-controls": this.panelId }, this.iconLocation === 'left' ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(IconTag, { size: DEFAULT_ICON_SIZE, decorative: true, class: "collapsible__icon", part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('icon', this.expanded && 'expanded') })) : null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { ref: (el) => (this.headingElement = el), class: "collapsible__button-text", part: "button-text" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "heading" })), this.iconLocation === 'right' ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(IconTag, { size: DEFAULT_ICON_SIZE, decorative: true, class: "collapsible__icon collapsible__icon-right", part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('icon', this.expanded && 'expanded') })) : null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: this.panelId, role: "region", "aria-labelledby": this.headingId, hidden: !this.expanded, class: "collapsible__content", part: "content" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('collapsible', this.expanded && 'collapsible--expanded');
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Collapsible.style = collapsibleCss;




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