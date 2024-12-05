"use strict";
exports.id = 9343;
exports.ids = [9343];
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

/***/ 86962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_logo: () => (/* binding */ Logo),
/* harmony export */   scale_logo_svg: () => (/* binding */ LogoSvg)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);




const logoCss = ":host{--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--background-magenta:var(--telekom-color-background-canvas);--background-white:var(--telekom-color-primary-standard)}[part~='logo']{display:inline-flex;height:var(--logo-size);position:relative}[part~='logo']:focus,[part~='logo']:focus-visible{outline:var(--focus-outline);outline-offset:2px;border-radius:2px}[part~='variant-magenta']{background-color:var(--background-magenta)}[part~='variant-white']{background-color:var(--background-white)}[part~='transparent']{background-color:transparent}[part~='icon'] svg{height:var(--logo-size)}[part~='icon']:focus-visible{outline:none}[part~='icon'] svg:focus{outline:none}";

const Logo = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Variant/color of the logo text and logo */
    this.variant = 'magenta';
    /** (optional) Set transparent background */
    this.transparent = false;
    /** (optional) The height in pixels */
    this.size = 38;
    /** (optional) Set a link */
    this.href = 'javascript:void(0);';
    this.focusable = true;
    this.scrollIntoViewOnFocus = false;
    /** (optional) set logo specific title */
    this.logoTitle = 'Telekom Logo';
    /** FIXME this is also probably not working properly, see below (it needs a string value) */
    this.logoAriaHidden = false;
  }
  componentDidRender() {
    if (this.accessibilityTitle) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "accessibilityTitle" is deprecated. Please use the "logoTitle" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.language) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "language" is deprecated. Localized brand claim is not shown anymore.',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { exportparts: "logo-svg" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.size ? `:host { --logo-size: ${this.size}px; }` : '', this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: this.href, part: this.getCssClassMap(), tabindex: this.focusable === false ? '-1' : '0', onFocus: () => {
        if (this.scrollIntoViewOnFocus === true) {
          window.scrollTo({ top: 0 });
        }
      }, title: this.logoHideTitle ? undefined : this.logoTitle, "aria-describedby": this.logoAriaDescribedBy, "aria-hidden": this.logoAriaHidden }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-logo-svg", { part: "icon", color: this.variant, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle }))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(`logo`, this.variant && `variant-${this.variant}`, this.transparent && `transparent`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Logo.style = logoCss;

let i = 0;
const colors = {
  magenta: '#e20074',
  white: '#ffffff',
};
const LogoSvg = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Sets the icon color via the `fill` attribute */
    this.color = 'magenta';
    this.innerRole = 'img';
    this.focusable = true;
    this.getTitle = (title, linkAddition) => {
      if (!this.logoHideTitle) {
        return this.logoTitle ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", { id: `logo-title-${i}` }, this.logoTitle)) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", { id: `logo-title-${i}` }, `${title} ${this.innerRole === 'link' ? linkAddition : ''}`));
      }
    };
  }
  componentWillLoad() {
    i++;
  }
  componentDidRender() {
    if (this.accessibilityTitle) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "accessibilityTitle" is deprecated. Please use the "logoTitle" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  getColor() {
    return this.color === 'magenta' || 'white'
      ? colors[this.color]
      : 0;
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 38", part: "logo-svg", fill: this.getColor(), role: this.innerRole === 'link' ? null : 'img', "aria-labelledby": `logo-title-${i}` }, this.getTitle('Telekom Logo', '- Go to Start Page'), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M7.6 25.1H0v-7.6h7.6v7.6ZM0 0v12.9h2.3v-.4c0-6.1 3.4-9.9 9.9-9.9h.4V30c0 3.8-1.5 5.3-5.3 5.3H6.1V38h19.8v-2.7h-1.1c-3.8 0-5.3-1.5-5.3-5.3V2.7h.4c6.5 0 9.9 3.8 9.9 9.9v.4h2.3V0H0Zm24.3 25.1h7.6v-7.6h-7.6v7.6Z" }))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};




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