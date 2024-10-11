"use strict";
exports.id = 8039;
exports.ids = [8039];
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

/***/ 48039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_breadcrumb: () => (/* binding */ Breadcrumb)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const breadcrumbCss = ":host{--spacing-left:calc(-1 * var(--telekom-spacing-composition-space-04));--font-size-list-item:var(--telekom-typography-font-size-caption);--color-separator:var(--telekom-color-text-and-icon-additional);--spacing-y-item:var(--telekom-spacing-composition-space-03);--spacing-x-item:var(--telekom-spacing-composition-space-04);--color-link:var(--telekom-color-text-and-icon-additional);--radius-link:var(--telekom-radius-standard);--color-link-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-link-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--font-current:var(--telekom-text-style-caption-bold);--color-current:var(--telekom-color-text-and-icon-standard)}.breadcrumb{margin-left:var(--spacing-left)}.breadcrumb__list{display:flex;list-style:none;margin-top:0;padding-left:0;margin-bottom:0}.breadcrumb__list-item{display:inline-flex;font-size:var(--font-size-list-item);align-items:center}.breadcrumb__separator{display:flex;color:var(--color-separator)}.breadcrumb__item,.breadcrumb__link{padding:var(--spacing-y-item) var(--spacing-x-item)}.breadcrumb__link{text-decoration:none;color:var(--color-link);border-radius:var(--radius-link)}.breadcrumb__link:hover{color:var(--color-link-hover)}.breadcrumb__link:active{color:var(--color-link-active)}.breadcrumb__link:focus{outline:var(--focus-outline)}.breadcrumb__current{font:var(--font-current);color:var(--color-current)}";

const Breadcrumb = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.linksArray = [];
    this.separatorSlot = null;
  }
  componentWillLoad() {
    if (this.linksArray.length === 0) {
      this.setLinksArray();
    }
    this.separatorSlot = this.hostElement.querySelector('[slot="separator"]');
  }
  componentDidLoad() {
    const observer = new MutationObserver(() => {
      this.setLinksArray();
    });
    observer.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true,
    });
    this.mo = observer;
  }
  disconnectedCallback() {
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  setLinksArray() {
    this.linksArray = Array.from(this.hostElement.children).filter((element) => element.slot === '');
  }
  render() {
    const isLast = (index) => index === this.linksArray.length - 1;
    // Set aria-current="page" to the last item if it's a link
    const getCurrentAttr = (index) => isLast(index) === true ? { 'aria-current': 'page' } : undefined;
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { "aria-label": "Breadcrumb", class: this.getCssClassMap(), part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ol", { class: "breadcrumb__list", part: "list" }, this.linksArray.map((element, index) => {
      const separator = this.separatorSlot != null ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "breadcrumb__separator", part: "separator", innerHTML: this.separatorSlot.innerHTML })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "breadcrumb__separator", part: "separator" }, this.separator || ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-right", { size: 12 }))));
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "breadcrumb__list-item", part: "list-item" }, element.href || element.tagName === 'SCALE-LINK' ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", Object.assign({ href: element.href, class: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(isLast(index) && 'breadcrumb__current', 'breadcrumb__link'), part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(isLast(index) && 'current', 'link') }, getCurrentAttr(index)), element.textContent)) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(isLast(index) && 'breadcrumb__current', 'breadcrumb__item'), part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(isLast(index) && 'current', 'item') }, element.textContent)), isLast(index) ? null : separator));
    })))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('breadcrumb');
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Breadcrumb.style = breadcrumbCss;




/***/ })

};
;