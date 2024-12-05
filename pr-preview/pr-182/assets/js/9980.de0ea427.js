"use strict";
exports.id = 9980;
exports.ids = [9980];
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

/***/ 19980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_chart_stack_card: () => (/* binding */ ChartStackCard)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);




const chartStackCardCss = ":host{--scl-chart-stack-card-color:var(--telekom-color-additional-blue-600)}.chart-stack-card{color:var(--color-text);--scl-chart-stack-card-color:var(--telekom-color-additional-blue-600)}.chart-stack-card .header{height:var(--telekom-spacing-composition-space-08);font-size:var(--telekom-typography-font-size-headline-3);font-weight:var(--telekom-typography-font-weight-extra-bold);line-height:var(--telekom-typography-line-spacing-tight);margin-bottom:var(--telekom-spacing-composition-space-08)}.chart-stack-card .bar{display:flex;justify-content:space-between;margin-bottom:var(--telekom-spacing-composition-space-06)}.chart-stack-card .bar__item{background-color:var(--scl-chart-stack-card-color);height:var(--telekom-spacing-composition-space-10);flex:1}.chart-stack-card .bar__item:first-of-type{border-top-left-radius:var(--telekom-radius-small);border-bottom-left-radius:var(--telekom-radius-small)}.chart-stack-card .bar__item:last-of-type{border-top-right-radius:var(--telekom-radius-small);border-bottom-right-radius:var(--telekom-radius-small)}.chart-stack-card .legend{display:flex;flex-direction:column;height:calc(var(--telekom-spacing-composition-space-06) * 10)}.chart-stack-card .spacer{padding:0 var(--telekom-spacing-composition-space-04)}.chart-stack-card .legend .legend__row__item{display:flex;line-height:var(--telekom-typography-line-spacing-standard)}.chart-stack-card .legend .legend__row{display:flex;justify-content:space-between}.chart-stack-card .legend .legend__row:last-child{padding-bottom:var(--telekom-spacing-composition-space-10)}.chart-stack-card .legend .legend__item{height:10px;width:10px;background-color:var(--scl-chart-stack-card-color);border-radius:100%;align-self:center;margin-right:var(--telekom-spacing-composition-space-03)}.chart-stack-card .legend .legend__label{font-weight:var(--type-weight-bold);font-size:var(--telekom-spacing-composition-space-06);line-height:200%}";

const ChartStackCard = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.readData = (data) => {
      try {
        return Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
      }
      catch (error) {
        return Array.isArray(data) ? data : [];
      }
    };
  }
  getOpacity(item, index) {
    return JSON.stringify(index === 0 ? 1 : +item.percentage / 100);
  }
  getCardStyle() {
    return `
      .card:after {
          content: '';
          display: block;
          background: linear-gradient(0deg, white, rgba(255,255,255, 0));
          height: 2rem;
          margin-top: -2rem;
          position: relative;
        }

      .card__body: {
        padding-bottom: 0 !important;
      }
  `;
  }
  connectedCallback() {
    (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({ source: this.hostElement, type: 'warn' });
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-card", { styles: this.getCardStyle() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, this.heading), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "bar" }, this.readData(this.data)
      .sort((a, b) => b.percentage - a.percentage)
      .map((item, index) => {
      if (+item.percentage > 0) {
        return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "bar__item", style: {
            opacity: this.getOpacity(item, index),
            flex: JSON.stringify(+item.percentage),
          } }));
      }
    })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "legend" }, this.readData(this.data)
      .sort((a, b) => b.percentage - a.percentage)
      .map((item, index) => ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "legend__row" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "legend__row__item" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "legend__item", style: {
        opacity: this.getOpacity(item, index),
      } }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "legend__label spacer" }, item.type)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "legend__row__item" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "spacer" }, item.value), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "spacer" }, item.percentage, "%"))))))))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('chart-stack-card');
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ChartStackCard.style = chartStackCardCss;




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