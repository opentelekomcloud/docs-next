"use strict";
exports.id = 4492;
exports.ids = [4492];
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

/***/ 4492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_list_item: () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const listItemCss = ":host(scale-list-item){--display:block;--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing-left:calc(0.5ch + var(--telekom-spacing-composition-space-07));--spacing-left-nested:calc(\n    0.5ch + var(--telekom-spacing-composition-space-06)\n  );--font-marker-ordered:var(--telekom-text-style-body);--font-marker-ordered-nested:var(--telekom-text-style-small-bold);--line-height-marker-ordered-nested:var(\n    --telekom-typography-line-spacing-standard\n  );--spacing-top-marker-ordered-nested:calc(\n    var(--telekom-spacing-composition-space-06) -\n      var(--telekom-spacing-composition-space-05)\n  );--spacing-right-no-marker:var(--telekom-spacing-composition-space-04);display:var(--display)}.list-item{position:relative;font-size:var(--font-size);line-height:var(--line-height);padding-left:var(--spacing-left);margin-top:var(--telekom-spacing-composition-space-03)}.list-item--nested{padding-left:var(--spacing-left-nested)}.list-item:before{content:'';top:0;left:0;position:absolute}.list-item--unordered:before{top:0.5em;border:var(--telekom-spacing-composition-space-01) solid currentColor;display:block;transform:scale(0.66);background:currentColor;box-sizing:border-box;border-radius:50%;width:var(--telekom-spacing-composition-space-04);height:var(--telekom-spacing-composition-space-04)}.list-item--nested.list-item--unordered:before{border:var(--telekom-spacing-composition-space-01) solid currentColor;background:transparent}.list-item--ordered:before{content:attr(data-index) '.';font:var(--font-marker-ordered);font-variant-numeric:tabular-nums}.list-item--nested.list-item--ordered:before{font:var(--telekom-text-style-small-bold);font-variant-numeric:tabular-nums;line-height:var(--line-height-marker-ordered-nested);padding-top:var(--spacing-top-marker-ordered-nested)}.list-item--no-marker{display:inline-flex;align-items:center;padding-left:0}.list-item--no-marker:before{display:none}.list-item--no-marker>::slotted(*){margin-right:var(--spacing-right-no-marker)}";

const ListItem = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Whether this is a child of an ordered scale-list, gets set automatically by its parent */
    this.ordered = false;
    /** If `false`, no marker or left padding will be visible */
    this.marker = true;
    this.hasNestedChild = false;
    this.isNested = false;
    this.handleSlotChange = ({ target }) => {
      this.hasNestedChild =
        target.assignedNodes().length > 0;
      this.isNested = this.isNestedCheck();
    };
    this.isNestedCheck = () => {
      return this.el.closest('scale-list[slot="nested"]') != null;
    };
  }
  componentWillLoad() {
    this.isNested = this.isNestedCheck();
  }
  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'listitem');
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap(), "data-index": this.index, part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.ordered ? 'ordered' : 'unordered', this.isNested && 'nested', !this.marker && 'no-marker') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "list-item__nested-list", part: "nested-list", hidden: !this.hasNestedChild }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "nested", onSlotchange: this.handleSlotChange })))));
  }
  getCssClassMap() {
    const orderType = this.ordered ? 'ordered' : 'unordered';
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('list-item', this.isNested && 'list-item--nested', `list-item--${orderType}`, !this.marker && 'list-item--no-marker');
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ListItem.style = listItemCss;




/***/ })

};
;