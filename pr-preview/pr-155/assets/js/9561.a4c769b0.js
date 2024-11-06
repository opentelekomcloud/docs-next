"use strict";
exports.id = 9561;
exports.ids = [9561];
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

/***/ 39561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_sidebar_nav_collapsible: () => (/* binding */ SidebarNavCollapsible)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const sidebarNavCollapsibleCss = ":host{--opacity-chevron:1;--border-bottom-color:var(--telekom-color-ui-faint);--border-left-color-third-nesting:var(--telekom-color-ui-strong);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--background-color-before-active:var(--color-primary);--font-weight-bold:var(--telekom-typography-font-weight-bold);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard)}.sidebar-nav-collapsible{margin:0;border-bottom-color:var(--border-bottom-color);border-bottom-style:solid;border-bottom-width:0}.sidebar-nav-collapsible--condensed{border-bottom-width:1px}.sidebar-nav-collapsible__wrapper{border-bottom-color:var(--border-bottom-color);border-bottom-style:solid;border-bottom-width:1px}.sidebar-nav-collapsible--condensed .sidebar-nav-collapsible__wrapper{border-bottom-width:0}.sidebar-nav-collapsible__button{color:currentColor;width:100%;display:flex;box-sizing:border-box;text-align:left;align-items:center;padding-top:1rem;padding-right:calc(0.5 * var(--spacing-indent));padding-bottom:1rem;padding-left:var(--spacing-indent);justify-content:space-between;text-decoration:none;font-family:inherit;border-radius:var(--telekom-radius-small)}.sidebar-nav-collapsible__button:hover{color:var(--color-hover)}.sidebar-nav-collapsible__button:active{color:var(--color-active)}.sidebar-nav-collapsible__button:focus{outline:none;box-shadow:var(--box-shadow-focus)}.sidebar-nav-collapsible--active .sidebar-nav-collapsible__button{position:relative;color:var(--color-primary)}.sidebar-nav-collapsible--active .sidebar-nav-collapsible__button::before{content:'';display:block;position:absolute;top:0;left:var(--left-current-border, 0);width:0;height:100%;background-color:var(--color-primary);border-left:2px solid transparent}.sidebar-nav-collapsible--active:hover .sidebar-nav-collapsible__button::before{background-color:var(--color-hover)}.sidebar-nav-collapsible--active:active .sidebar-nav-collapsible__button::before{background-color:var(--color-active)}:host([nesting-level='1']) .sidebar-nav-collapsible__button,.sidebar-nav-collapsible--bold .sidebar-nav-collapsible__button{font-weight:var(--font-weight-bold)}:host([nesting-level='2']) .sidebar-nav-collapsible__button{padding-left:calc(var(--spacing-indent) + 0.75rem)}.sidebar-nav-collapsible__icon{transition:opacity 150ms}[aria-expanded='true'] .sidebar-nav-collapsible__icon{transform:rotate(0.5turn)}@media (hover: hover){[aria-expanded='false'] .sidebar-nav-collapsible__icon{opacity:var(--opacity-chevron, 1)}.sidebar-nav-collapsible__button:hover .sidebar-nav-collapsible__icon{opacity:1}.sidebar-nav-collapsible__button:focus .sidebar-nav-collapsible__icon{opacity:1}}.sidebar-nav-collapsible__list{list-style:none;padding-left:0;margin-top:0;margin-bottom:0;border-bottom-width:1px;}.sidebar-nav-collapsible--condensed .sidebar-nav-collapsible__list{margin-top:1em;margin-left:var(--spacing-indent);margin-bottom:2em}";

const SidebarNavCollapsible = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** The parent wrapper */
    this.tag = 'li';
    /** The URL where the link should point to */
    this.href = '#';
    /** Label and icon get the active color */
    this.active = false;
    /** Bold label and icon */
    this.bold = false;
    /** Used normally for third level items */
    this.condensed = false;
    this.handleClick = (event) => {
      event.preventDefault();
      this.expanded = !this.expanded;
    };
    /**
     * Simulate a <button> allowing using the Space key for toggling the menu.
     */
    this.handleKeydown = (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey) {
        return;
      }
      if (event.defaultPrevented) {
        return;
      }
      if (event.code === 'Space') {
        this.expanded = !this.expanded;
      }
    };
  }
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }
  render() {
    const Tag = this.tag;
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, { part: this.getBasePartMap(), class: this.getCssClassMap(), role: "listitem" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sidebar-nav-collapsible__wrapper", part: "wrapper" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: this.href, class: "sidebar-nav-collapsible__button", onClick: this.handleClick, onKeyDown: this.handleKeydown, role: "button", "aria-expanded": this.expanded ? 'true' : 'false', part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('button', this.active && 'button-active') }, this.label, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-collapse-down", { class: "sidebar-nav-collapsible__icon", selected: this.bold, size: 20, part: "icon" }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { hidden: !this.expanded, class: "sidebar-nav-collapsible__list", part: "list" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav-collapsible';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(component, this.condensed && `${prefix}condensed`, this.active && `${prefix}active`);
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "nestingLevel": ["nestingLevelChanged"]
  }; }
};
SidebarNavCollapsible.style = sidebarNavCollapsibleCss;




/***/ })

};
;