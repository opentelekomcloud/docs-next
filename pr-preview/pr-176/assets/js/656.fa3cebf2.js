"use strict";
exports.id = 656;
exports.ids = [656];
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

/***/ 48275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_table: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);




const tableCss = "scale-table{--radius:var(--telekom-radius-standard) var(--telekom-radius-standard) 0 0;--background:var(--telekom-color-ui-state-fill-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--font-size:var(--telekom-typography-font-size-small);--font-weight:var(--telekom-typography-font-weight-bold);--spacing-tbody-td:var(--telekom-spacing-composition-space-06)\n    var(--telekom-spacing-composition-space-04);--border-bottom-tbody-td:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-faint);--background-tbody:var(--telekom-color-ui-state-fill-standard);--background-tbody-tr-hover:var(--telekom-color-ui-state-fill-hovered);--background-tfoot:var(--telekom-color-ui-state-fill-standard);--border-bottom-tfoot-td:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-extra-strong);--spacing-th-sortable:0 0 0 0;--background-th-sortable-hover:var(--telekom-color-ui-subtle);--background-th-sortable-active:var(--telekom-color-ui-faint);--box-shadow-th-sortable-focus:inset 0 0 0\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-focus-standard);--background-tr-striped:var(--telekom-color-ui-subtle);--padding:var(--telekom-spacing-composition-space-00)\n    var(--telekom-spacing-composition-space-04)}.table{display:block;overflow:auto;border-radius:var(--radius);background:var(--background);color:var(--color)}.table table{width:100%;white-space:nowrap;border-spacing:0;border-collapse:collapse}.table th{padding:var(--padding);text-align:left;line-height:32px;color:var(--color);font-size:var(--font-size);background:var(--telekom-color-background-surface-subtle)}.table td{padding:var(--padding)}.table tbody tr td{padding:8px}.table tbody td{border-bottom:var(--border-bottom-tbody-td)}.table thead tr th:last-of-type,.table tbody tr td:last-of-type,.table tfoot tr td:last-of-type{padding-right:12px}.table tfoot{background:var(--background-tfoot)}.table tbody{background:var(--background-tbody)}.table tfoot tr td{padding:8px;font-weight:var(--font-weight);border-bottom:var(--border-bottom-tfoot-td)}.table .scale-sort-indicator-icon{display:none !important}.table tbody tr:hover{background:var(--background-tbody-tr-hover)}.table th:focus{outline:none}.table--size-default tbody tr td{padding:var(--spacing-tbody-td)}.table--sortable th{cursor:pointer;padding:var(--spacing-th-sortable);padding-right:0}.table--sortable th:hover{padding:var(--spacing-th-sortable);background:var(--background-th-sortable-hover)}.table--sortable th:active{background:var(--background-th-sortable-active)}.table--sortable th:focus{box-shadow:var(--box-shadow-th-sortable-focus);border-radius:var(--radius)}.table--sortable th .scale-sort-indicator-icon{display:inline-flex !important}.table--sortable th[aria-disabled]{padding:var(--padding);pointer-events:none}.table--sortable th:not([aria-sort]){padding:var(--padding);padding-right:var(--telekom-spacing-composition-space-07)}.table--sortable th[aria-sort='none']{padding:var(--padding);padding-right:var(--telekom-spacing-composition-space-05)}.table--sortable th[aria-sort='ascending'] .scale-sort-indicator .up{color:var(--color)}.table--sortable th:hover .scale-sort-indicator .up{color:var(--color-hover)}.table--sortable th:hover[aria-sort='ascending'] .scale-sort-indicator-icon.up{color:var(--color-hover)}.table--sortable th:active[aria-sort='ascending'] .scale-sort-indicator-icon.up{color:var(--color-active)}.table--sortable th[aria-sort='ascending'] .scale-sort-indicator{color:transparent}.table--sortable th:hover[aria-sort='ascending'] .scale-sort-indicator{color:transparent}.table--sortable th:active[aria-sort='ascending'] .scale-sort-indicator{color:transparent}.table--sortable th[aria-sort='descending'] .scale-sort-indicator-icon.up{color:transparent}.table--sortable th:hover[aria-sort='descending'] .scale-sort-indicator-icon.up{color:transparent}.table--sortable th:active[aria-sort='descending'] .scale-sort-indicator-icon.up{color:transparent}.table--sortable th[aria-sort='descending'] .scale-sort-indicator-icon{color:var(--color)}.table--sortable th:hover[aria-sort='descending'] .scale-sort-indicator-icon{color:var(--color-hover)}.table--sortable th:active[aria-sort='descending'] .scale-sort-indicator-icon{color:var(--color-active)}.table--sortable th .scale-sort-indicator{width:16px;height:16px;margin:0 0 0 4px;display:inline-block;position:relative}.table--sortable th .scale-sort-indicator-icon{top:4px;left:0;width:16px;height:16px;position:absolute}.table--sortable th .scale-sort-indicator{color:transparent}.table--sortable th[aria-sort='none']:hover{padding:0 0 0 0}.table--sortable th[aria-sort='none'] .scale-sort-indicator{display:none}.table--sortable th:not([aria-sort]):hover{padding:0 8px 0 0}.table--sortable th:not([aria-sort]) .scale-sort-indicator{display:none}.table--sortable th:hover .scale-sort-indicator{display:inline-block}.table--striped table tr:nth-child(even){background:var(--background-tr-striped)}";

const Table = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Display sort arrows on/off */
    this.showSort = false;
    /** (optional) Striped Table */
    this.striped = false;
    /** object of the slots in use */
    this.slots = {};
  }
  addSortIndicator(el) {
    el.insertAdjacentHTML('afterbegin', `
        <span class="scale-sort-indicator" aria-hidden="true">
          <scale-icon-content-sort-indicator-up class="scale-sort-indicator-icon up" size="16"></scale-icon-content-sort-indicator-up>
          <scale-icon-content-sort-indicator-down class="scale-sort-indicator-icon down" size="16"></scale-icon-content-sort-indicator-down>
        </span>`);
  }
  componentWillLoad() {
    if (this.showSort) {
      this.hostElement.querySelectorAll('th').forEach((th) => {
        this.addSortIndicator(th);
      });
    }
  }
  componentWillUpdate() {
    this.hostElement.querySelectorAll('th').forEach((th) => {
      // only cols that are NOT added dynamically have children (the sorting icon), added on componentWillLoad
      if (th.children.length === 0) {
        // this may not be needed
        th.classList.add('dynamically-added');
        if (this.showSort) {
          this.addSortIndicator(th);
        }
      }
    });
  }
  componentDidLoad() {
    const table = this.hostElement;
    const progressbar = table.querySelectorAll('scale-progress-bar');
    if (progressbar) {
      progressbar.forEach((el) => {
        el.showStatus = false;
      });
    }
    this.mutationObserver = new MutationObserver(() => {
      this.forceUpdate = String(Date.now());
    });
    this.mutationObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
    });
  }
  componentDidRender() {
    if (this.size) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrites for a small version!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: this.getCssClassMap() }, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('table', this.showSort && 'table--sortable', this.striped && 'table--striped');
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Table.style = tableCss;




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