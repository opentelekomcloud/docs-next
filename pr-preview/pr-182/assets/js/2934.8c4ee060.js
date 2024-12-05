"use strict";
exports.id = 2934;
exports.ids = [2934];
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

/***/ 12934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_list: () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const listCss = ":host{--spacing-left:0;--spacing-left-nested:var(--telekom-spacing-composition-space-04)}.list{padding-left:var(--spacing-left)}.list--nested{margin-top:0;margin-bottom:0;padding-left:var(--spacing-left-nested)}";

const List = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.isNested = false;
    /** (optional) Make the list ordered (ol) */
    this.ordered = false;
  }
  orderedChanged(newValue) {
    this.propagatePropsToChildren(newValue);
  }
  componentDidLoad() {
    this.propagatePropsToChildren(this.ordered);
  }
  connectedCallback() {
    this.isNested = this.el.closest('scale-list-item') != null;
    if (this.isNested) {
      this.el.setAttribute('slot', 'nested');
    }
    else {
      this.el.removeAttribute('slot');
    }
  }
  propagatePropsToChildren(ordered) {
    const items = Array.from(this.el.children).filter((child) => child.matches('scale-list-item'));
    items.forEach((item, index) => {
      item.ordered = ordered;
      item.index = index + 1;
    });
  }
  render() {
    const Tag = this.ordered ? 'ol' : 'ul';
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, { class: this.getCssClassMap(), part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.ordered && 'ordered', this.isNested && 'nested') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('list', this.ordered && 'list--type-ordered', this.isNested && 'list--nested');
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "ordered": ["orderedChanged"]
  }; }
};
List.style = listCss;




/***/ })

};
;