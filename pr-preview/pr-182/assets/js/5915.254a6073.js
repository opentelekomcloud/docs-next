"use strict";
exports.id = 5915;
exports.ids = [5915];
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

/***/ 35915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_tab_nav: () => (/* binding */ TabNav)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);




const tabNavCss = ":host{--tab-height:3rem;--tab-spacing-horizontal:var(--telekom-spacing-composition-space-05);--tab-spacing-vertical:var(--telekom-spacing-composition-space-06);--tab-radius:var(--telekom-radius-small);--tab-border-size:var(--telekom-line-weight-standard);--tab-border-size-selected:var(--telekom-line-weight-highlight);--tab-border-size-selected:3px;--tab-border-color:var(--telekom-color-ui-subtle);--tab-height-large:3.25rem;--tab-spacing-horizontal-large:var(--telekom-spacing-composition-space-06);--tab-spacing-vertical-large:0.875rem}";

/**
 * @see https://github.com/GoogleChromeLabs/howto-components/blob/master/elements/howto-tabs/howto-tabs.js
 */
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
const TabNav = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** True for smaller height and font size in tab headers. */
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) size  */
    this.size = 'small';
  }
  handleSelect(event) {
    const nextTab = event.target;
    // Act only if it's a direct child
    if (this.getAllEnabledTabs().includes(nextTab) && !nextTab.disabled) {
      this.selectTab(nextTab);
    }
  }
  handleKeydown(event) {
    const target = event.target;
    let nextTab;
    if (target.getAttribute('role') !== 'tab') {
      return;
    }
    // Do not handle modifier shortcuts typically used by assistive technology
    if (event.altKey) {
      return;
    }
    switch (event.key) {
      case ARROW_LEFT:
        nextTab = this.getPreviousTab();
        break;
      case ARROW_RIGHT:
        nextTab = this.getNextTab();
        break;
      case HOME:
        nextTab = this.getFirstTab();
        break;
      case END:
        nextTab = this.getLastTab();
        break;
      default:
        return;
    }
    event.preventDefault();
    this.selectTab(nextTab);
  }
  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'tablist');
    }
  }
  componentDidRender() {
    Promise.all([
      customElements.whenDefined('scale-tab-header'),
      customElements.whenDefined('scale-tab-panel'),
    ]).then(() => {
      this.linkPanels();
      this.propagateSizeToTabs();
    });
    if (this.small !== false) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.el,
      });
    }
  }
  getAllTabs() {
    return Array.from(this.el.querySelectorAll('scale-tab-header'));
  }
  getAllEnabledTabs() {
    return Array.from(this.el.querySelectorAll('scale-tab-header:not([disabled]), scale-tab-header[disabled="false"]'));
  }
  getAllPanels() {
    return Array.from(this.el.querySelectorAll('scale-tab-panel'));
  }
  getPreviousTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) - 1;
    return tabs[(index + tabs.length) % tabs.length];
  }
  getNextTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) + 1;
    return tabs[index % tabs.length];
  }
  getFirstTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[0];
  }
  getLastTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[tabs.length - 1];
  }
  linkPanels() {
    const tabs = this.getAllTabs();
    const selectedTab = tabs.find((x) => x.selected) || tabs.filter((x) => !x.disabled)[0];
    tabs.forEach((tab) => {
      const panel = tab.nextElementSibling;
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    });
    this.selectTab(selectedTab);
  }
  reset() {
    const tabs = this.getAllEnabledTabs();
    const panels = this.getAllPanels();
    tabs.forEach((tab) => (tab.selected = false));
    panels.forEach((panel) => (panel.hidden = true));
  }
  findPanelForTab(tab) {
    const panelId = tab.getAttribute('aria-controls');
    return this.el.querySelector(`#${panelId}`);
  }
  selectTab(nextTab) {
    const nextPanel = this.findPanelForTab(nextTab);
    this.reset();
    nextPanel.hidden = false;
    nextTab.selected = true;
  }
  /**
   * Sets or removes the `large` prop in `scale-tab-header` and `scale-tab-panel` children.
   */
  propagateSizeToTabs() {
    const action = this.size === 'large' ? 'setAttribute' : 'removeAttribute';
    const tabs = this.getAllTabs();
    const panels = this.getAllPanels();
    [...tabs, ...panels].forEach((child) => child[action]('size', 'large'));
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: "scale-tab-nav" }, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "tab" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "panel" }))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tab-nav';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(component, `${prefix}`);
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TabNav.style = tabNavCss;




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