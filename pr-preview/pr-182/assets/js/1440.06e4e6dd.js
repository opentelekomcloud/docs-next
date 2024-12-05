"use strict";
exports.id = 1440;
exports.ids = [1440];
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

/***/ 51440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const cardCss = ":host{--background:var(--telekom-color-background-surface);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-large);--box-shadow:var(--telekom-shadow-raised-standard);--box-shadow-hover:var(--telekom-shadow-raised-hover);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard);--box-shadow-active:var(--telekom-shadow-raised-pressed);--spacing-body:var(--telekom-spacing-composition-space-08);--spacing-body-slotted:0;--spacing-body-slotted-interactive:0;--font-body-slotted:var(--telekom-text-style-body)}.card-border{border:1px solid transparent}.card{width:100%;overflow:hidden;box-sizing:border-box;background:var(--background);transition:var(--transition);border-radius:var(--radius);box-shadow:var(--box-shadow)}.card__body{padding:var(--spacing-body)}.card__body ::slotted(*){margin:var(--spacing-body-slotted)}.card--interactive{color:inherit;cursor:pointer;display:block;outline:none;text-decoration:none}.card--interactive:hover{box-shadow:var(--box-shadow-hover)}.card--interactive:focus{box-shadow:var(--telekom-shadow-raised-hover), var(--box-shadow-focus)}.card--interactive:active{border:none;box-shadow:var(--box-shadow-active)}.card--interactive .card__body ::slotted(*){margin:var(--spacing-body-slotted-interactive)}.card__body ::slotted(*){font:var(--font-body-slotted)}";

const Card = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Link card */
    this.to = '';
    /** (optional) Label of the card */
    this.label = '';
    /** (optional) Link card target */
    this.target = '_self';
    /** (optional) Link card rel */
    this.rel = '';
  }
  render() {
    const Tag = !!this.to ? 'a' : 'div';
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "card-border", part: "border" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({ class: this.getCssClassMap(), part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', !!this.to && 'interactive') }, (!this.to ? { role: 'group' } : {}), (!!this.to ? { href: this.to } : {}), (!!this.target ? { target: this.target } : {}), (!!this.rel ? { rel: this.rel } : {}), (!!this.label ? { ['aria-label']: this.label } : {})), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "card__body", part: "body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('card', !!this.to && 'card--interactive');
  }
};
Card.style = cardCss;




/***/ })

};
;