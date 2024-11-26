"use strict";
exports.id = 8112;
exports.ids = [8112];
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

/***/ 88112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_notification_banner: () => (/* binding */ NotificationBanner)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);





const notificationBannerCss = ":host{--width:100%;--radius:var(--telekom-radius-standard);--background-error:var(--telekom-color-functional-danger-subtle);--background-warning:var(--telekom-color-functional-warning-subtle);--background-informational:var(\n    --telekom-color-functional-informational-subtle\n  );--background-success:var(--telekom-color-functional-success-subtle)}.notification-banner{border-radius:var(--radius);width:var(--width);position:relative;box-shadow:var(--telekom-shadow-overlay);min-height:48px}.notification-banner--variant-error{background-color:var(--background-error)}.notification-banner--variant-warning{background-color:var(--background-warning)}.notification-banner--variant-informational{background-color:var(--background-informational)}.notification-banner--variant-success{background-color:var(--background-success)}.notification-banner__heading{margin:14px 48px 14px 48px;padding:13px 0 13px 0;font-weight:var(--telekom-typography-font-weight-bold);line-height:22px}.notification-banner__text ::slotted(*){margin:-10px 0px -25px 0px;line-height:16px;padding:13px 0 15px 0}.notification-banner--has-no-link .notification-banner__text ::slotted(*){margin:-10px 0px -14px 0px;line-height:16px;padding-bottom:15px}.notification-banner--has-no-text .notification-banner__link ::slotted(*){margin:0;padding:0px 0px 0px 16px}.notification-banner--has-text .notification-banner__link ::slotted(*){margin:20px 0 0 0;padding-bottom:2px;line-height:20px}::slotted(*){font-weight:var(--telekom-typography-font-weight-regular)}.notification-banner__button-close{position:absolute;top:8px;right:13.5px;color:#191919;border:none;cursor:pointer;margin:0;padding:0;background:transparent}.notification-banner__button-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%;color:var(--telekom-color-text-and-icon-standard)}.notification-banner__button-close:hover svg{background-color:white;color:var(--telekom-color-text-and-icon-primary-hovered)}.notification-banner__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-success)}.notification-banner__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-danger)}.notification-banner__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-informational)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-banner__button-close svg{color:hsl(0, 0%, 100%)}.notification-banner{border:1px solid hsl(0, 0%, 100%)}.notification-banner__heading{margin:0px 48px 0px 48px}}";

const NotificationBanner = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close", 7);
    this.variant = 'informational';
    this.dismissible = false;
    this.autoHide = false;
    this.autoHideDuration = 3000;
    /** (optional) Label for close button */
    this.closeButtonLabel = 'close';
    /** (optional) Title for close button */
    this.closeButtonTitle = 'close';
    this.close = () => {
      this.opened = false;
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleClose');
    };
  }
  componentWillLoad() {
    this.hasSlotText = !!this.hostElement.querySelector('[slot=text]');
    this.hasSlotLink = !!this.hostElement.querySelector('[slot=link]');
  }
  componentDidUpdate() {
    this.hasSlotText = !!this.hostElement.querySelector('[slot=text]');
    this.hasSlotLink = !!this.hostElement.querySelector('[slot=link]');
  }
  connectedCallback() {
    (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({ source: this.hostElement, type: 'warn' });
    if (this.autoHide === true) {
      setTimeout(this.close, this.autoHideDuration);
    }
  }
  async open() {
    this.opened = true;
  }
  handleIcons() {
    if (this.variant) {
      switch (this.variant) {
        case 'success':
          return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-success", { class: "notification-banner__icon-success", color: "#187431", "accessibility-title": "success", "aria-hidden": "true" }));
        case 'informational':
          return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-information", { class: "notification-banner__icon-information", "accessibility-title": "information", "aria-hidden": "true" }));
        case 'error':
          return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-error", { class: "notification-banner__icon-error", "accessibility-title": "error", "aria-hidden": "true" }));
        case 'warning':
          return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-warning", { class: "notification-banner__icon-information", color: "#AE461C", "aria-hidden": "true" }));
      }
    }
    return;
  }
  render() {
    if (!this.opened) {
      return null;
    }
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { role: "alert", style: { display: `${this.opened ? '' : 'none'}` }, part: this.getBasePartMap(), class: this.getCssClassMap(), tabindex: "0" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "container", class: "notification-banner__container" }, this.handleIcons(), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "heading", class: "notification-banner__heading" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), this.dismissible && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { part: "button-dismissable", type: "button", class: "notification-banner__button-close", onClick: () => this.close(), tabindex: 0, "aria-label": this.closeButtonLabel, title: this.closeButtonTitle, onKeyDown: (e) => {
        if (e.key === 'Enter') {
          this.close();
        }
      } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-circle-close", null))), this.hasSlotText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "text", class: "notification-banner__text" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "text" }))), this.hasSlotLink && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-link", { href: this.href, class: "notification-banner__link", role: "link" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "link" }))))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const name = 'notification-banner';
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(name, this.variant && `${prefix}variant-${this.variant}`, this.hasSlotText && `${prefix}has-text`, !this.hasSlotText && `${prefix}has-no-text`, this.hasSlotLink && `${prefix}has-link`, !this.hasSlotLink && `${prefix}has-no-link`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
NotificationBanner.style = notificationBannerCss;




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