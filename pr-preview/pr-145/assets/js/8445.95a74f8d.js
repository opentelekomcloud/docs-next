"use strict";
exports.id = 8445;
exports.ids = [8445];
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

/***/ 18445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_notification: () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




const notificationCss = ":host{--width:100%;--width-toast:25rem;--radius:var(--telekom-radius-standard);--spacing-y:var(--telekom-spacing-composition-space-06);--spacing-y-inner:var(--telekom-spacing-composition-space-04);--spacing-x-aside:var(--telekom-spacing-composition-space-14);--duration-in:var(--telekom-motion-duration-transition);--duration-out:var(--telekom-motion-duration-transition);--easing-in:var(--telekom-motion-easing-enter);--easing-out:var(--telekom-motion-easing-exit);--translate-x:0;--translate-y:0;--translate-z:0;display:contents}[part~='base']{position:relative;display:none;box-sizing:border-box;border-radius:var(--radius);padding-right:var(--spacing-x-aside);width:var(--width);background:var(--_background-subtle);box-shadow:var(--_shadow);animation-duration:var(--duration)}[part~='base'][part~='open']{display:flex}@keyframes toggle{from{opacity:0;transform:translate3d(\n      var(--translate-x),\n      var(--translate-y),\n      var(--translate-z)\n    )}}[part~='in']{animation-name:toggle;animation-duration:var(--duration-in);animation-timing-function:var(--easing-in)}[part~='out']{animation-name:toggle;animation-direction:reverse;animation-duration:var(--duration-out);animation-timing-function:var(--easing-out)}[part~='variant-informational']{--_background-subtle:var(--telekom-color-functional-informational-subtle);--_background-accent:var(--telekom-color-functional-informational-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-informational)}[part~='variant-warning']{--_background-subtle:var(--telekom-color-functional-warning-subtle);--_background-accent:var(--telekom-color-functional-warning-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-warning)}[part~='variant-success']{--_background-subtle:var(--telekom-color-functional-success-subtle);--_background-accent:var(--telekom-color-functional-success-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-success)}[part~='variant-danger']{--_background-subtle:var(--telekom-color-functional-danger-subtle);--_background-accent:var(--telekom-color-functional-danger-standard);--_color-accent:var(--telekom-color-text-and-icon-functional-danger)}[part~='type-banner']{--_shadow:var(--telekom-shadow-floating-standard)}[part~='type-toast']{--translate-x:var(--telekom-spacing-composition-space-05);--_shadow:var(--telekom-shadow-top);width:var(--width-toast)}[part='icon']{display:flex;flex-shrink:0;justify-content:center;align-items:flex-start;width:var(--spacing-x-aside);padding-top:var(--spacing-y);padding-bottom:var(--spacing-y);border-top-left-radius:var(--radius);border-bottom-left-radius:var(--radius);color:var(--_color-accent)}[part~='type-toast'] [part='icon']{background:var(--_background-accent);color:var(--telekom-color-text-and-icon-white-standard);align-items:center}[part~='type-toast'][part~='variant-warning'] [part='icon']{color:var(--telekom-color-text-and-icon-black-standard)}[part='body']{margin-top:var(--spacing-y);margin-bottom:var(--spacing-y)}[part~='type-toast'] [part='body']{padding-left:var(--spacing-y)}[part='heading'],[part='heading'] ::slotted(*){font:var(--telekom-text-style-heading-6);line-height:var(--telekom-typography-line-spacing-tight);margin:0}[part='text']{margin-top:var(--spacing-y-inner)}::slotted(*){font:var(--telekom-text-style-body)}::slotted(p){margin:0;margin-top:var(--spacing-y-inner)}[part='close-button']{--color-ghost:var(--telekom-text-and-icon-standard);position:absolute;right:var(--telekom-spacing-composition-space-03);top:var(--telekom-spacing-composition-space-03)}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part~='base']{border:1px solid white}[part='close-button']{--color-ghost:white}}";

const ICON_SIZE = 20;
const iconVariantNameMap = {
  informational: 'scale-icon-alert-information',
  warning: 'scale-icon-alert-warning',
  success: 'scale-icon-action-success',
  danger: 'scale-icon-alert-error',
};
const Notification = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleOpen = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-open", 7);
    this.scaleBeforeClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-before-close", 7);
    this.scaleClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close", 7);
    /** (optional) Type */
    this.type = 'inline';
    /** (optional) Variant */
    this.variant = 'informational';
    /** (optional) Show the close button */
    this.dismissible = false;
    /** @deprecated - ariaRole should replace innerAriaLive */
    this.innerAriaLive = 'assertive';
    /** (optional) string prepended to the heading */
    this.innerRole = 'alert';
    /** (optional) Label for close button */
    this.closeButtonLabel = 'Close';
    /** (optional) `title` for close button */
    this.closeButtonTitle = 'Close';
    /** Default aria-level for heading */
    this.headingLevel = 2;
    /** (optional) string prepended to the heading */
    this.ariaHeading = 'Information';
    /** What actually triggers opening/closing the notification */
    this.isOpen = this.opened || false;
    this.hasTextSlot = false;
    this.lastCloseEventTrigger = null;
    this.open = () => {
      this.isOpen = true;
      this.animationState = 'in';
      requestAnimationFrame(async () => {
        await (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.hostElement.shadowRoot);
        this.animationState = undefined;
        this.scaleOpen.emit();
        if (this.delay !== undefined) {
          setTimeout(this.timeout, this.delay);
        }
      });
    };
    this.close = () => {
      const event = this.scaleBeforeClose.emit({
        trigger: this.lastCloseEventTrigger,
      });
      this.lastCloseEventTrigger = null;
      const prevented = event.defaultPrevented;
      if (prevented) {
        this.opened = true;
        return;
      }
      this.animationState = 'out';
      requestAnimationFrame(async () => {
        await (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.hostElement.shadowRoot);
        this.animationState = undefined;
        this.isOpen = false;
        this.scaleClose.emit();
      });
    };
    this.timeout = () => {
      this.lastCloseEventTrigger = 'TIMEOUT';
      this.opened = false;
    };
  }
  connectedCallback() {
    if (this.hostElement.hasAttribute('opened')) {
      if (this.innerAriaLive === 'polite' || this.innerRole === 'status') {
        this.innerRole = 'status';
      }
      this.isOpen = true;
    }
    if (this.delay !== undefined) {
      setTimeout(this.timeout, this.delay);
    }
    this.hasTextSlot = this.hostElement.querySelector('[slot="text"]') != null;
    // this.hasActionSlot =
    //   this.hostElement.querySelector('[slot="action"]') != null;
  }
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
      this.lastCloseEventTrigger = 'ATTRIBUTE';
    }
    else if (this.isOpen) {
      this.close();
    }
  }
  render() {
    const IconTag = iconVariantNameMap[this.variant];
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.animationState, `type-${this.type}`, `variant-${this.variant}`, this.isOpen && 'open'), role: this.innerRole }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "icon", "aria-hidden": "true" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "icon" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(IconTag, { size: ICON_SIZE, selected: this.type === 'toast' }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "heading", role: "heading", "aria-level": this.headingLevel, "aria-label": `${this.ariaHeading} ${this.heading}` }, this.heading ? (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.heading) : null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "heading" })), this.hasTextSlot && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "text" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "text" })))), this.dismissible && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-button", { part: "close-button", variant: "ghost", onClick: () => {
        this.lastCloseEventTrigger = 'CLOSE_BUTTON';
        this.opened = false;
      } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "close-icon" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-circle-close", { "aria-label": this.closeButtonLabel, accessibilityTitle: this.closeButtonTitle, decorative: true, size: ICON_SIZE })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "opened": ["openedChanged"]
  }; }
};
Notification.style = notificationCss;




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