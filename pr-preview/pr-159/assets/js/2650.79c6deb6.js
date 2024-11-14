"use strict";
exports.id = 2650;
exports.ids = [2650];
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

/***/ 72650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_sidebar_nav_item: () => (/* binding */ SidebarNavItem)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const sidebarNavItemCss = ":host{--border-bottom-color:var(--telekom-color-ui-faint);--border-left-color-third-nesting:var(--telekom-color-ui-strong);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--background-color-before-active:var(--color-primary);--font-bold:var(--telekom-text-style-ui-bold);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard)}.sidebar-nav-item{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--border-bottom-color)}.sidebar-nav-item--active{position:relative;color:var(--color-primary)}.sidebar-nav-item--active::before{content:'';display:block;position:absolute;top:0;left:var(--left-current-border, 0);width:0;height:100%;background-color:var(--background-color-before-active);border-left:2px solid transparent}.sidebar-nav-item:hover.sidebar-nav-item--active::before{background-color:var(--color-hover)}.sidebar-nav-item:active.sidebar-nav-item--active::before{background-color:var(--color-active)}.sidebar-nav-item--condensed.sidebar-nav-item--active::before{left:-1px}:host([nesting-level='1']) .sidebar-nav-item,.sidebar-nav-item--bold{font:var(--font-bold)}:host([nesting-level='3']) .sidebar-nav-item{border-left-color:var(--border-left-color-third-nesting);border-left-style:solid;border-left-width:0.0625rem}::slotted(a){color:currentColor;display:flex;align-items:center;padding-top:1rem;padding-right:1rem;padding-bottom:1rem;padding-left:var(--spacing-indent);border-radius:var(--telekom-radius-small);text-decoration:none;outline:none;min-height:20px}:host([nesting-level='2']) ::slotted(a){padding-left:calc(var(--spacing-indent) + 0.75rem)}::slotted(a:hover){color:var(--color-hover)}::slotted(a:focus){box-shadow:var(--box-shadow-focus)}::slotted(a:active){color:var(--color-active)}.sidebar-nav-item--condensed{border-bottom-width:0}.sidebar-nav-item--condensed ::slotted(a){padding-top:0.5rem;padding-left:0.75rem;padding-right:0.5rem;padding-bottom:0.5rem}";

const SR_ACTIVE_TEXT = ' Zurzeit aktiv';
const isActive = (current) => {
  try {
    return !!JSON.parse(current);
  }
  catch (e) {
    if (typeof current === 'string') {
      return true;
    }
    return !!current;
  }
};
const getScreenReaderText = (current) => {
  let text;
  try {
    text = JSON.parse(current);
  }
  catch (e) {
    text = current;
  }
  return typeof text === 'string' && text.length > 0
    ? ` ${text}`
    : SR_ACTIVE_TEXT;
};
const SidebarNavItem = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Used normally for third level items, remove the bottom border */
    this.condensed = false;
    /** Bold text */
    this.bold = false;
    /** Text gets the active color */
    this.active = false;
    /**
     * Mark the child link as "current" with `aria-current=page`.
     * Provide the text hint if needed, default is: "Zurzeit aktiv"
     */
    this.current = null;
  }
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }
  currentChanged(newValue) {
    this.handleAriaCurrentInSlottedA(newValue);
    this.syncActiveToCurrent(newValue);
  }
  componentDidLoad() {
    this.handleAriaCurrentInSlottedA(this.current);
    if (this.current) {
      this.syncActiveToCurrent(this.current);
    }
  }
  /**
   * If an item is `current`, it should be `active` as well
   */
  syncActiveToCurrent(newValue) {
    this.active = isActive(newValue);
  }
  /**
   * When `current` is set, this will:
   * - set the aria-current=page attribute on the link
   * - append a text-only hint for screen readers
   * so we end up with something like this:
   * <a href="..." aria-current="page">
   *    Example<span style="...visible to SR only..."> Active link</span>
   * </a>
   * @param current this.current
   */
  handleAriaCurrentInSlottedA(current) {
    const a = this.el.querySelector('a');
    if (this.srOnlyElement != null) {
      a.removeChild(this.srOnlyElement);
      this.srOnlyElement = null;
    }
    if (a != null) {
      a.removeAttribute('aria-current');
    }
    if (isActive(current) && a != null) {
      this.srOnlyElement = this.createScreenReaderOnlySpan();
      a.appendChild(this.srOnlyElement);
      a.setAttribute('aria-current', 'page');
    }
  }
  createScreenReaderOnlySpan() {
    const text = getScreenReaderText(this.current);
    const span = document.createElement('span');
    // .sr-only but inline
    Object.assign(span.style, {
      position: 'absolute',
      left: '-10000px',
      overflow: 'hidden',
    });
    span.textContent = text;
    return span;
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { part: this.getBasePartMap(), class: this.getCssClassMap(), role: "listitem" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav-item';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(component, this.bold && `${prefix}bold`, this.condensed && `${prefix}condensed`, this.active && `${prefix}active`);
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "nestingLevel": ["nestingLevelChanged"],
    "current": ["currentChanged"]
  }; }
};
SidebarNavItem.style = sidebarNavItemCss;




/***/ })

};
;