"use strict";
exports.id = 2769;
exports.ids = [2769];
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

/***/ 72769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_telekom_footer_extended_navigation_column: () => (/* binding */ TelekomFooterExtendedNavigationColumn)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const telekomFooterExtendedNavigationColumnCss = "[part~='telekom-footer-extended-navigation-column']{--heading-color:var(--telekom-color-text-and-icon-standard);--heading-weight:var(--telekom-typography-font-weight-bold);--link-color:var(--telekom-color-text-and-icon-standard)}[part~='links-hidden']{display:none}[part~='links-expanded']{display:block}[part~='telekom-footer-extended-navigation-column-links']{font-size:var(--telekom-typography-font-size-body);line-height:140%}[part~='heading'],[part~='heading-button']{font-family:var(--telekom-typography-font-family-sans);font-size:var(--telekom-typography-font-size-body);line-height:140%;margin:0;color:var(--heading-color);font-weight:var(--heading-weight);background:none;border:none}[part~='heading-button']{display:flex;padding:0;width:100%;cursor:pointer;align-items:center;justify-content:space-between}[part~='heading']{display:none}[part~='heading-container'] h2{margin-block-start:0;margin-block-end:0}[part~='heading-container'] button{padding-top:20px;padding-bottom:20px}scale-divider{--spacing:0}@media screen and (min-width: 640px){[part~='heading-with-button']{display:none}[part~='heading']{display:block}[part~='telekom-footer-extended-navigation-column-links']{display:block}scale-divider{display:none}}[part~='expanded'] scale-icon-navigation-collapse-down{transform:rotate(0.5turn)}";

const TelekomFooterExtendedNavigationColumn = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Set to `true` to expand */
    this.expanded = false;
    // Optional heading level - default h2
    this.headingLevel = '2';
    this.handleClick = () => {
      this.expanded = !this.expanded;
      // emitEvent(this, 'scaleExpand', { expanded: this.expanded });
    };
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('telekom-footer-extended-navigation-column', {
        expanded: this.expanded,
      }) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "heading-container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { role: "heading", "aria-level": this.headingLevel, part: "heading-with-button" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: this.handleClick, part: "heading-button" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, " ", this.heading), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-collapse-down", { selected: true, size: 16 }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "heading", role: "heading", "aria-level": this.headingLevel }, this.heading)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('telekom-footer-extended-navigation-column-links', this.expanded ? 'links-expanded' : 'links-hidden') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TelekomFooterExtendedNavigationColumn.style = telekomFooterExtendedNavigationColumnCss;




/***/ })

};
;