"use strict";
exports.id = 2032;
exports.ids = [2032];
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

/***/ 22032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_sidebar_nav: () => (/* binding */ SidebarNav)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);




const sidebarNavCss = ":host{--max-width:15rem;--spacing-indent:var(--telekom-spacing-composition-space-08);--spacing-collapsible:var(--telekom-spacing-composition-space-06);--opacity-chevron:0;--left-current-border:0;--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--color-toggle-button:var(--telekom-color-ui-regular);--border-y-toggle-button:1px solid var(--telekom-color-ui-faint);--radius-toggle-button:var(--telekom-radius-small)}.sidebar-nav--collapsible{--max-width:none;--spacing-indent:0;--opacity-chevron:1;--left-current-border:calc(-1 * var(--spacing-collapsible));padding-right:var(--spacing-collapsible);padding-left:var(--spacing-collapsible)}.sidebar-nav__list{list-style:none;max-width:var(--max-width);padding-left:0;margin-top:0;margin-bottom:0}.sidebar-nav__toggle-button{box-sizing:border-box;appearance:none;border:0;background-color:transparent;color:var(--color-toggle-button);width:100%;display:flex;justify-content:space-between;align-items:center;text-align:left;text-decoration:none;font-family:inherit;font-size:1rem;padding-top:1rem;padding-right:calc(0.5 * var(--spacing-indent));padding-bottom:1rem;padding-left:var(--spacing-indent);border-radius:var(--radius-toggle-button);border-bottom:var(--border-y-toggle-button);border-top:var(--border-y-toggle-button);cursor:pointer}.sidebar-nav__toggle-button:hover{color:var(--color-hover)}.sidebar-nav__toggle-button:active{color:var(--color-active)}.sidebar-nav__toggle-button:focus{outline:var(--focus-outline)}[aria-expanded='true'] .sidebar-nav__icon{transform:rotate(0.5turn)}";

const SidebarNav = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Set to `true` to make the sidebar toggleable (useful for small screens) */
    this.collapsible = false;
    /** Automatically set `collapsible` based on this media query */
    this.collapsibleMediaQuery = '(max-width: 30em)';
    /** Label for toggle button */
    this.collapsibleLabel = 'Menu';
    this.collapsed = true;
    this.handleMediaQueryChange = (event) => {
      this.collapsible = event.matches;
    };
    this.toggle = () => {
      this.collapsed = !this.collapsed;
    };
  }
  componentDidLoad() {
    this.setNestingLevelOnChildren();
    this.setMatchMedia();
  }
  disconnectedCallback() {
    if (this.mq != null) {
      this.mq.removeListener(this.handleMediaQueryChange);
    }
  }
  componentDidRender() {
    if (this.el.hasAttribute('aria-label')) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelSidebarNav" property!',
        type: 'warn',
        source: this.el,
      });
    }
  }
  /**
   * Set `nesting-level` and `condensed` attributes in
   * <scale-sidebar-nav-collapsible> and <scale-sidebar-nav-item> children,
   * so styling different levels "automatically" is possible.
   */
  setNestingLevelOnChildren() {
    function setNestingLevel(el, level = 1) {
      Array.from(el.children).forEach((child) => {
        if (child.tagName.toUpperCase() === 'SCALE-SIDEBAR-NAV-COLLAPSIBLE') {
          setNestingLevel(child, level + 1);
          if (!child.hasAttribute('nesting-level')) {
            child.setAttribute('nesting-level', String(level));
          }
          if (level === 2 && !child.hasAttribute('condensed')) {
            child.setAttribute('condensed', 'true');
          }
        }
        if (child.tagName.toUpperCase() === 'SCALE-SIDEBAR-NAV-ITEM') {
          if (!child.hasAttribute('nesting-level')) {
            child.setAttribute('nesting-level', String(level));
          }
          if (level === 3 && !child.hasAttribute('condensed')) {
            child.setAttribute('condensed', 'true');
          }
        }
      });
    }
    setNestingLevel(this.el);
  }
  setMatchMedia() {
    if (this.collapsibleMediaQuery) {
      this.mq = window.matchMedia(this.collapsibleMediaQuery);
      // Recent versions of Safari throw with `addEventListener`
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
      this.mq.addListener(this.handleMediaQueryChange);
      this.collapsible = this.mq.matches;
    }
  }
  render() {
    const label = this.ariaLabelSidebarNav
      ? { 'aria-label': this.ariaLabelSidebarNav }
      : {};
    const hidden = this.collapsible ? { hidden: this.collapsed } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, this.collapsible === true && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { part: "toggle-button", class: "sidebar-nav__toggle-button", "aria-expanded": this.collapsed ? 'false' : 'true', onClick: this.toggle }, this.collapsibleLabel, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-collapse-down", { part: "icon", class: "sidebar-nav__icon", size: 20 }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", Object.assign({ part: "nav" }, label, hidden), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { part: "list", class: "sidebar-nav__list", role: "list" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(component, this.collapsible && `${prefix}collapsible`);
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
SidebarNav.style = sidebarNavCss;




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