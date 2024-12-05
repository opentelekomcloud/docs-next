"use strict";
exports.id = 4421;
exports.ids = [4421];
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

/***/ 84421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_segmented_button: () => (/* binding */ SegmentedButton)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




const segmentedButtonCss = ":host{--background-color:var(--telekom-color-ui-faint);--radius:var(--telekom-radius-standard);--height:32px;--height-medium:40px;--height-large:44px;display:flex;flex-direction:column}.segmented-button{background-color:var(--background-color);border:0;border-radius:var(--radius);padding:0 var(--telekom-spacing-composition-space-02);width:fit-content;height:var(--height);display:inline-grid}.segmented-button--full-width{width:100%}.segmented-button--medium{height:var(--height-medium);padding:0 var(--telekom-spacing-composition-space-02)}.segmented-button--large{height:var(--height-large);padding:0 var(--telekom-spacing-composition-space-02)}.segmented-button--label{font-size:var(--telekom-typography-font-size-body);font-weight:var(--telekom-typography-font-weight-bold);margin-bottom:var(--telekom-spacing-composition-space-04)}.segmented-button--helper-text{margin-top:var(--telekom-spacing-composition-space-04)}";

const CHECKMARK_WIDTH_SMALL = 14;
const CHECKMARK_WIDTH_MEDIUM = 18 + 12;
const CHECKMARK_WIDTH_LARGE = 20 + 18;
const SegmentedButton = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    /** segment position within button */
    this.position = 0;
    this.slottedSegments = 0;
    /** state */
    this.status = [];
    /** (optional) The size of the button */
    this.size = 'small';
    /** (optional) Allow more than one button to be selected */
    this.multiSelect = false;
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) If `true`, expand to container width */
    this.fullWidth = false;
    /** (optional) If `true`, show error message */
    this.invalid = false;
    /** (optional) If `true`, show error message */
    this.helperText = 'Please select an option';
    /** (optional) aria-label attribute needed for icon-only buttons */
    this.ariaLabelTranslation = `segment button with $slottedSegments`;
    this.showHelperText = false;
    this.getAdjacentSiblings = (tempState, i) => {
      let adjacentSiblings = '';
      if (i !== 0 && tempState[i].selected && tempState[i - 1].selected) {
        adjacentSiblings = 'left';
      }
      if (i !== tempState.length - 1 &&
        tempState[i].selected &&
        tempState[i + 1].selected) {
        adjacentSiblings = `${adjacentSiblings ? adjacentSiblings + ' right' : 'right'}`;
      }
      return adjacentSiblings;
    };
  }
  scaleClickHandler(ev) {
    let tempState;
    if (!this.multiSelect) {
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
    this.setState(tempState);
  }
  handlePropsChange() {
    this.propagatePropsToChildren();
  }
  /**
   * Keep props, needed in children buttons, in sync
   */
  propagatePropsToChildren() {
    this.getAllSegments().forEach((segment) => {
      segment.setAttribute('size', this.size);
      segment.setAttribute('selected-index', this.selectedIndex.toString());
      if (this.disabled) {
        segment.setAttribute('disabled', 'disabled');
      }
    });
  }
  componentDidLoad() {
    const tempState = [];
    const segments = this.getAllSegments();
    this.slottedSegments = segments.length;
    const longestButtonWidth = this.getLongestButtonWidth();
    segments.forEach((segment) => {
      this.position++;
      tempState.push({
        id: segment.getAttribute('segment-id') || segment.segmentId,
        selected: segment.hasAttribute('selected') || segment.selected,
      });
      segment.setAttribute('position', this.position.toString());
      segment.setAttribute('aria-description-translation', '$position $selected');
    });
    if (!this.fullWidth) {
      this.container.style.gridTemplateColumns = `repeat(${this.hostElement.children.length}, ${Math.ceil(longestButtonWidth)}px)`;
    }
    else {
      this.container.style.display = 'flex';
    }
    this.selectedIndex = this.getSelectedIndex();
    this.propagatePropsToChildren();
    this.position = 0;
    this.status = tempState;
    this.setState(tempState);
  }
  componentWillUpdate() {
    this.selectedIndex = this.getSelectedIndex();
    this.showHelperText = false;
    if (this.invalid &&
      this.status.filter((e) => e.selected === true).length <= 0) {
      this.showHelperText = true;
    }
  }
  getSelectedIndex() {
    if (this.multiSelect) {
      // in multi-select having no selected segments is allowed
      return -1;
    }
    else {
      const allSegments = this.getAllSegments();
      const selectedIndex = allSegments.findIndex((el) => el.selected === true);
      return selectedIndex;
    }
  }
  // all segmented buttons should have the same width, based on the largest one
  getLongestButtonWidth() {
    let tempWidth = 0;
    Array.from(this.hostElement.children).forEach((child) => {
      const selected = child.hasAttribute('selected');
      const iconOnly = child.hasAttribute('icon-only');
      const checkmark = this.size === 'small'
        ? CHECKMARK_WIDTH_SMALL
        : this.size === 'medium'
          ? CHECKMARK_WIDTH_MEDIUM
          : CHECKMARK_WIDTH_LARGE;
      if (selected || iconOnly) {
        tempWidth =
          child.getBoundingClientRect().width > tempWidth
            ? child.getBoundingClientRect().width
            : tempWidth;
      }
      else {
        tempWidth =
          child.getBoundingClientRect().width + checkmark > tempWidth
            ? child.getBoundingClientRect().width + checkmark
            : tempWidth;
      }
    });
    return tempWidth;
  }
  setState(tempState) {
    const segments = Array.from(this.hostElement.querySelectorAll('scale-segment'));
    segments.forEach((segment, i) => {
      segment.setAttribute('adjacent-siblings', this.getAdjacentSiblings(tempState, i));
      segment.setAttribute('selected', tempState[i].selected ? 'true' : 'false');
    });
    this.status = tempState;
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleChange', this.status);
  }
  getAllSegments() {
    return Array.from(this.hostElement.querySelectorAll('scale-segment'));
  }
  getAriaLabelTranslation() {
    const filledText = this.ariaLabelTranslation.replace(/\$slottedSegments/g, `${this.slottedSegments}`);
    return filledText;
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), this.label && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "segmented-button--label" }, " ", this.label, " ")), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap(), part: this.getBasePartMap(), "aria-label": this.getAriaLabelTranslation(), role: "group", ref: (el) => (this.container = el) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), this.showHelperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-helper-text", { class: "segmented-button--helper-text", helperText: this.helperText, variant: 'danger' }))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'segmented-button--';
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('segmented-button', this.size && `${prefix}${this.size}`, this.fullWidth && `${prefix}full-width`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "disabled": ["handlePropsChange"],
    "size": ["handlePropsChange"],
    "selectedIndex": ["handlePropsChange"]
  }; }
};
SegmentedButton.style = segmentedButtonCss;




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