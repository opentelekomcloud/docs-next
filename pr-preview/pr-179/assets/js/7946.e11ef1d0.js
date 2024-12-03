"use strict";
exports.id = 7946;
exports.ids = [7946];
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

/***/ 57946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_alert: () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);




const alertCss = ".alert{box-sizing:border-box;background:#eee;color:#333;width:100%;padding:1rem;text-align:left;position:relative;display:flex;justify-content:space-between}.alert__body{display:flex}.alert__headline{font-size:var(--type-size-3, 1rem);color:white;margin:0}.alert__icon{display:flex;align-items:center;justify-content:center;background:none;height:24px;width:24px;margin:0 0.5rem 0 0;border-radius:var(--telekom-radius-standard)}.alert__close{height:16px;opacity:0.5;cursor:pointer}.alert__close:hover{opacity:1}.alert--variant-primary{background:blue;color:#fff}.alert--variant-secondary{background:#eee;color:#333}.alert--variant-variant-warning{background:orange;color:#fff}.alert--variant-danger{background:red;color:#fff}.alert--variant-success{background:green;color:#fff}.alert--variant-info{background:lightblue;color:#fff}";

const Alert = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Alert size */
    this.size = '';
    /** (optional) Alert variant */
    this.variant = '';
    /** (optional) Alert timeout */
    this.timeout = false;
    /** (optional) Alert icon */
    this.icon = '';
    this.defaultTimeout = 2000;
    this.close = () => {
      this.opened = false;
    };
    this.onCloseAlertWithTimeout = () => {
      if (this.timeout !== false) {
        if (typeof this.timeout === 'number') {
          setTimeout(this.close, this.timeout);
        }
        else {
          setTimeout(this.close, this.defaultTimeout);
        }
      }
      else {
        return null;
      }
    };
  }
  componentWillLoad() {
    this.hasSlotClose = !!this.hostElement.querySelector('[slot="close"]');
  }
  connectedCallback() {
    (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({ source: this.hostElement, type: 'warn' });
  }
  /** Alert method: open() */
  async open() {
    this.opened = true;
  }
  render() {
    this.onCloseAlertWithTimeout();
    if (!this.opened) {
      return null;
    }
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert__body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert__icon" }, this.icon), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert__content" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert__headline" }, this.headline), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "alert__close", onClick: this.close }, this.hasSlotClose ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert__close-icon" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "close" }))) : ('x')))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('alert', this.size && `alert--size-${this.size}`, this.variant && `alert--variant-${this.variant}`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Alert.style = alertCss;




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




/***/ })

};
;