"use strict";
exports.id = 2936;
exports.ids = [2936];
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

/***/ 92936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_loading_spinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const loadingSpinnerCss = ":host{display:inline-flex;--size-outer-small:24px;--size-outer-large:48px;--size-inner-small:24px;--size-inner-large:48px;--line-height-size-small:24px;--line-height-size-large:48px;--font:var(--telekom-text-style-ui-bold);--color-circle-primary:var(--telekom-color-primary-standard);--color-circle-primary-inner:var(--telekom-color-ui-subtle);--color-text-primary:var(--telekom-color-text-and-icon-additional);--color-circle-white:var(--telekom-color-ui-base);--color-circle-white-inner:var(--telekom-color-ui-regular);--color-text-white:var(--telekom-color-text-and-icon-white-standard);--spacing-vertical:var(--telekom-spacing-composition-space-05);--spacing-horizontal:var(--telekom-spacing-composition-space-06)}.sr-only{position:absolute;left:-10000px;overflow:hidden}.spinner{display:inline-flex;align-items:center}.spinner.spinner--alignment-vertical{flex-direction:column}.spinner .spinner__text{font:var(--telekom-text-style-ui-bold);color:var(--color-text-primary)}.spinner.spinner--variant-white .spinner__text{color:var(--color-text-white)}.spinner.spinner--alignment-horizontal .spinner__text{display:flex;align-self:center;margin-left:var(--spacing-horizontal)}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__text{line-height:var(--line-height-size-small)}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__text{line-height:var(--line-height-size-large)}.spinner.spinner--alignment-vertical .spinner__text{margin-top:var(--spacing-vertical)}.spinner.spinner--alignment-vertical.spinner--size-small .spinner__container{height:var(--size-inner-small);width:var(--size-inner-small)}.spinner.spinner--alignment-vertical.spinner--size-large .spinner__container{height:var(--size-outer-large);width:var(--size-outer-large)}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__container{height:var(--size-inner-small);width:var(--size-inner-small);text-align:left}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__container{height:var(--size-outer-large);width:var(--size-outer-large);text-align:left}.spinner .spinner__container{align-items:center;display:inline-flex}.spinner .spinner__container .spinner__circle{animation:rotate 2s linear infinite;z-index:2;position:absolute;width:var(--size-inner-small);height:var(--size-inner-small)}.spinner .spinner__container .spinner__circle-background{animation:rotate 2s linear infinite;position:absolute;width:var(--size-outer-small);height:var(--size-outer-small)}.spinner.spinner--size-large .spinner__container .spinner__circle-background{width:var(--size-outer-large);height:var(--size-outer-large)}.spinner.spinner--size-large .spinner__container .spinner__circle{width:var(--size-inner-large);height:var(--size-inner-large)}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-white-inner)}.spinner .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-primary-inner)}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}.spinner .spinner__container .spinner__circle .path{animation:dash 1.5s ease-in-out infinite;stroke:var(--color-circle-primary)}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}@media screen and (forced-colors: active), (-ms-high-contrast: active){.spinner .spinner__container .spinner__circle-background .path{stroke:none}.spinner .spinner__container .spinner__circle .path{stroke:white}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:none}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}}";

let i = 0;
const LoadingSpinner = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    // todo the variant white should be renamed for dark mode
    this.variant = 'primary';
    this.alignment = 'horizontal';
    this.size = 'small';
  }
  componentWillLoad() {
    i++;
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "container", class: "spinner__container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "spinner__circle", viewBox: "0 0 50 50", "aria-hidden": "true" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { class: "path", cx: "25", cy: "25", r: "22.5", fill: "none", "stroke-width": "4" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: "spinner__circle-background", viewBox: "0 0 50 50", "aria-hidden": "true" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { class: "path", cx: "25", cy: "25", r: "22.5", fill: "none", "stroke-width": "4" }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sr-only", "aria-live": "polite", id: `spinner-label-${i}` }, this.accessibilityTitle
      ? this.accessibilityTitle
      : this.text || 'Loading'), this.text ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "text", class: "spinner__text", "aria-hidden": "true" }, this.text)) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null)))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const name = 'spinner';
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(name, this.alignment && `${prefix}alignment-${this.alignment}`, this.variant && `${prefix}variant-${this.variant}`, this.size && `${prefix}size-${this.size}`, this.text && `${prefix}text`);
  }
};
LoadingSpinner.style = loadingSpinnerCss;




/***/ })

};
;