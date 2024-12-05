"use strict";
exports.id = 298;
exports.ids = [298];
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

/***/ 40298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_icon_action_menu: () => (/* binding */ ActionMenu),
/* harmony export */   scale_telekom_header: () => (/* binding */ TelekomHeader),
/* harmony export */   scale_telekom_mega_menu: () => (/* binding */ TelekomMegaMenu),
/* harmony export */   scale_telekom_mega_menu_column: () => (/* binding */ TelekomMegaMenuColumn),
/* harmony export */   scale_telekom_mobile_menu: () => (/* binding */ TelekomMobileMenu),
/* harmony export */   scale_telekom_mobile_menu_item: () => (/* binding */ TelekomMobileMenuItem),
/* harmony export */   scale_telekom_nav_list: () => (/* binding */ TelekomNavList)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMenu = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14.335 16.055a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h9.585zM19.25 10.5a1.25 1.25 0 01.128 2.494L19.25 13H4.75a1.25 1.25 0 01-.128-2.494l.128-.006h14.5zm0-5.5a1.25 1.25 0 01.128 2.494l-.128.006H4.75a1.25 1.25 0 01-.128-2.494L4.75 5h14.5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14.75 16.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L14.75 18H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h10.5zm5-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743l-.099.007H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 11h15.5zm0-5.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L19.75 7H4.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L4.25 5.5h15.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionMenu.style = iconCss;

const telekomHeaderCss = ":host{--shadow:0px 2px 9px rgba(0, 0, 0, 0.15);--background:var(--telekom-color-background-surface);--background-logo:var(--telekom-color-primary-standard);--transition-common-scrolled:height var(--telekom-motion-duration-immediate)\n      var(--telekom-motion-easing-standard),\n    width var(--telekom-motion-duration-immediate),\n    margin var(--telekom-motion-duration-immediate);--font-size-app-name:var(--telekom-typography-font-size-body);--line-height-app-name:var(--telekom-typography-line-spacing-tight);--font-weight-app-name:var(--telekom-typography-font-weight-extra-bold);--_height:60px;--_base-height:60px;--_height-logo-svg:36px;--_height-bottom-bar:60px;--_height-top-bar:0;--_display-bottom-app-name:none;--_display-top-app-name:none;--_display-main-nav:none;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_max-width-container:none;--_spacing-x-container:var(--telekom-spacing-composition-space-06);--_column-gap-container:var(--telekom-spacing-composition-space-10);--_grid-template-columns-container:auto;--_grid-column-body:auto;--_spacing-left-body:0;--_spacing-right-top-app-name:var(--telekom-spacing-composition-space-10);--_spacing-right-bottom-app-name:var(--telekom-spacing-composition-space-10);--_left-logo:0;--_justify-content-bottom-body:end;--_animation-name:toggle;--scl-telekom-header-height:var(--_height)}@media screen and (min-width: 640px){:host{--_display-bottom-app-name:block;--_spacing-left-body:74px}}@media screen and (min-width: 1040px){:host,:host([scrolled-back]){--_height:84px;--_base-height:84px;--_height-logo-svg:44px;--_height-top-bar:30px;--_height-bottom-bar:54px;--_display-main-nav:block;--_display-meta-nav:block;--_display-meta-nav-external:block;--_display-lang-switcher:block;--_display-top-app-name:block;--_display-bottom-app-name:none;--_grid-template-columns-container:repeat(16, minmax(0, 1fr));--_grid-column-body:3 / span 14;--_spacing-left-body:0;--_spacing-right-bottom-app-name:52px;--_spacing-x-container:var(--telekom-spacing-composition-space-08);--_justify-content-bottom-body:space-between;--scl-telekom-header-height:var(--_height)}:host([type='slim']){--_animation-name:none;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-07\n    )}:host([type='slim'][scrolled]){--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-07\n    )}:host([type='slim']),:host([scrolled]){--_height:72px;--_height-logo-svg:40px;--_height-top-bar:0;--_height-bottom-bar:72px;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_display-top-app-name:none;--_display-bottom-app-name:block;--_spacing-left-body:var(--telekom-spacing-composition-space-06);--scl-telekom-header-height:var(--_height)}:host([scrolled]){--_spacing-left-body:0}:host([type='slim']),:host([scrolled][app-name]){--_grid-column-body:2 / span 15}}@media screen and (min-width: 1296px){:host,:host([scrolled-back]){--_height:96px;--_base-height:96px;--_height-logo-svg:48px;--_height-top-bar:30px;--_height-bottom-bar:66px;--scl-telekom-header-height:var(--_height)}:host([type='slim']){--_height:84px;--_base-height:84px;--_height-logo-svg:44px;--_height-top-bar:0;--_height-bottom-bar:84px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-14\n    );--_spacing-left-body:4px}:host([type='slim'][scrolled]){--_height:72px;--_height-logo-svg:40px;--_height-top-bar:0;--_height-bottom-bar:72px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-15\n    );--_spacing-left-body:0}}@media screen and (min-width: 1680px){:host,:host([scrolled-back]){--_height:120px;--_base-height:120px;--_height-logo-svg:60px;--_height-top-bar:30px;--_height-bottom-bar:90px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-12\n    );--_left-logo:var(--_spacing-x-container);--scl-telekom-header-height:var(--_height)}:host{--_max-width-container:var(--scl-grid-max-width, 1504px)}:host([type='slim']){--_height:96px;--_base-height:96px;--_height-logo-svg:48px;--_height-top-bar:0;--_height-bottom-bar:96px;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_display-top-app-name:none;--_display-bottom-app-name:block;--_spacing-left-body:24px;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-14\n    );--scl-telekom-header-height:var(--_height);--scl-telekom-header-bottom-spacing:36px}:host([type='slim'][scrolled]){--_height:72px;--_height-logo-svg:40px;--_height-top-bar:0;--_height-bottom-bar:72px;--_display-meta-nav:none;--_display-meta-nav-external:none;--_display-lang-switcher:none;--_display-top-app-name:none;--_display-bottom-app-name:block;--_spacing-right-bottom-app-name:var(\n      --telekom-spacing-composition-space-12\n    );--scl-telekom-header-height:var(--_height)}}:host([type='subtle']){--shadow:none;--background:transparent}slot[name='logo']{position:absolute;top:0;left:var(--_left-logo);display:flex;align-items:center;justify-content:center;height:var(--_height);width:var(--_height);background:var(--background-logo);transition:var(--transition-common-scrolled)}[part~='meta-nav-external']{display:var(--_display-meta-nav-external);flex:1}[part~='meta-nav']{display:var(--_display-meta-nav);}[part~='lang-switcher']{display:var(--_display-lang-switcher);}slot[name='main-nav']{display:var(--_display-main-nav);flex:1}slot[name='functions']{display:block;}@media screen and (min-width: 1040px){slot[name='main-nav'],slot[name='functions']{padding-top:var(--telekom-spacing-composition-space-06)}}@media screen and (min-width: 1296px){slot[name='main-nav'],slot[name='functions']{padding-top:var(--telekom-spacing-composition-space-07)}}@media screen and (min-width: 1680px){slot[name='main-nav'],slot[name='functions']{padding-top:var(--telekom-spacing-composition-space-10)}:host([scrolled]) slot[name='functions'],:host([scrolled]) slot[name='main-nav']{padding-top:var(--telekom-spacing-composition-space-02)}}[part~='base']{height:var(--_base-height);width:100%;transition:var(--transition-common-scrolled)}[part~='fixed-wrapper']{position:fixed;z-index:99;width:100%;height:var(--_height);background-color:var(--background);box-shadow:var(--shadow);transition:var(--transition-common-scrolled)}[part~='container']{box-sizing:content-box;display:grid;grid-template-columns:var(--_grid-template-columns-container);column-gap:var(--_column-gap-container);position:relative;max-width:var(--_max-width-container);margin-left:auto;margin-right:auto;padding-left:var(--_spacing-x-container);padding-right:var(--_spacing-x-container);transition:var(--transition-common-scrolled)}[part~='app-logo']{height:var(--_height);width:var(--_height);display:flex;align-items:center;justify-content:center;transition:var(--transition-common-scrolled)}:host::part(logo-svg){height:var(--_height-logo-svg);transition:var(--transition-common-scrolled);margin-top:4px}:host::part(logo){height:calc(var(--_height) - 6px);width:calc(var(--_height) - 6px);display:flex;align-items:center;justify-content:center;transition:var(--transition-common-scrolled)}[part~='body']{display:block;grid-column:var(--_grid-column-body);flex:1;margin-left:var(--_spacing-left-body);transition:var(--transition-common-scrolled)}[part~='top-bar']{height:var(--_height-top-bar);display:flex;align-items:end;width:100%;transition:var(--transition-common-scrolled)}[part~='top-app-name']{display:var(--_display-top-app-name);margin-right:var(--_spacing-right-top-app-name)}[part~='top-body']{display:inline-flex;flex:1;transition:var(--transition-common-scrolled)}[part~='bottom-bar']{display:flex;justify-content:space-between;align-items:center;transition:var(--transition-common-scrolled)}[part~='bottom-app-name']{display:var(--_display-bottom-app-name);margin-right:var(--_spacing-right-bottom-app-name);animation-duration:var(--telekom-motion-duration-animation);min-width:108px}@media screen and (min-width: 1040px){:host([scrolled]) [part~='bottom-app-name']{animation-name:var(--_animation-name);animation-timing-function:var(--telekom-motion-easing-enter)}:host([scrolled-back]) [part~=' bottom-app-name']{animation-name:var(--_animation-name);animation-direction:reverse;animation-timing-function:var(--telekom-motion-easing-exit)}}[part~='bottom-body'],[part~='main-nav']{justify-content:var(--_justify-content-bottom-body);height:var(--_height-bottom-bar);display:inline-flex;flex:1;transition:var(--transition-common-scrolled)}[part~='app-name-text']{font-size:var(--font-size-app-name);font-weight:var(--font-weight-app-name);line-height:var(--line-height-app-name);color:var(--telekom-color-text-and-icon-primary-standard);letter-spacing:0.02em;text-decoration:none}@media screen and (min-width: 1040px){:host{--font-size-app-name:var(--telekom-typography-font-size-small)}}[part~='app-name-text']:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}[part~='app-name-text']:active{color:var(--telekom-color-text-and-icon-primary-pressed)}@keyframes toggle{from{opacity:0;transform:translate3d(\n      var(--translate-x),\n      var(--translate-y),\n      var(--translate-z)\n    )}}";

const TelekomHeader = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.type = '';
    this.metaNavAriaLabel = 'Meta navigation';
    this.metaNavExternalAriaLabel = 'External meta navigation';
    this.langSwitcherAriaLabel = 'Language switcher';
    this.mainNavAriaLabel = 'Main navigation';
    this.scrolledBack = false;
    this.pageYOffset = 0;
  }
  onScroll() {
    // 48px is the height of the header, set scrolled when the user scrolls past it
    // todo: calculate this value dynamically (for slim header, smaller viewports, etc)
    this.scrolled = window.pageYOffset > 48;
    this.scrolledBack =
      this.pageYOffset !== window.pageYOffset && window.pageYOffset <= 0;
    this.pageYOffset = pageYOffset;
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { scrolled: this.type !== 'subtle' && this.scrolled, "scrolled-back": this.type !== 'subtle' && this.scrolledBack }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.type, {
        scrolled: this.type !== 'subtle' && this.scrolled,
        'scrolled-back': this.type !== 'subtle' && this.scrolledBack,
      }) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "fixed-wrapper" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "logo" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-logo", { part: "app-logo", variant: "white", href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, focusable: this.logoHref ? true : false })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "top-bar" }, this.appName ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "top-app-name" }, this.appNameLink ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { part: "app-name-text", onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "app-name-text" }, this.appName)))) : null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "top-body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { part: "meta-nav-external", "aria-label": this.metaNavExternalAriaLabel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "meta-nav-external" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { part: "meta-nav", "aria-label": this.metaNavAriaLabel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "meta-nav" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { part: "lang-switcher", "aria-label": this.langSwitcherAriaLabel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "lang-switcher" })))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "bottom-bar" }, this.appName ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "bottom-app-name" }, this.appNameLink ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { part: "app-name-text", onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "app-name-text" }, this.appName)))) : null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "bottom-body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { part: "main-nav", "aria-label": this.mainNavAriaLabel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "main-nav" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "functions" })))))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TelekomHeader.style = telekomHeaderCss;

const telekomMegaMenuCss = ".scale-telekom-mega-menu{--spacing-y:var(--telekom-spacing-composition-space-18);--column-gap:var(--telekom-spacing-composition-space-10);--max-width-container:var(--scl-grid-max-width, 1504px);--spacing-x:var(--telekom-spacing-composition-space-08);--grid-template-columns:repeat(16, minmax(0, 1fr));display:block;padding-left:var(--spacing-x);padding-right:var(--spacing-x);margin-left:auto;margin-right:auto;max-width:var(--max-width-container)}.scale-telekom-mega-menu-container{box-sizing:border-box;display:grid;grid-template-columns:var(--grid-template-columns);grid-column:auto;column-gap:var(--column-gap);padding-top:var(--spacing-y);padding-bottom:var(--spacing-y);font-size:var(--telekom-typography-font-size-body);line-height:var(--telekom-typography-line-spacing-standard)}.scale-telekom-mega-menu :where(ul,ol){list-style:none;margin:0;padding:0}.scale-telekom-mega-menu :where(a){display:inline-block;color:var(--telekom-color-text-and-icon-standard);text-decoration:none}.scale-telekom-mega-menu :where(ul a){width:100%}.scale-telekom-mega-menu .scale-icon{width:20px;height:20px}.scale-telekom-mega-menu :where(a):hover{color:var(--telekom-color-text-and-icon-primary-hovered)}.scale-telekom-mega-menu :where(a):active{color:var(--telekom-color-text-and-icon-primary-pressed)}.scale-telekom-mega-menu :where(a):focus-visible{outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:1px;border-radius:var(--telekom-radius-small)}.scale-telekom-mega-menu :where(li+li){margin-top:var(--telekom-spacing-composition-space-07)}@media screen and (min-width: 1040px){.scale-telekom-mega-menu{--spacing-x:var(--telekom-spacing-composition-space-08)}}.scale-telekom-mega-menu[children-too-many] scale-telekom-mega-menu-column:first-child{grid-column:2 / span 3}@media screen and (min-width: 1680px){.scale-telekom-mega-menu[children-too-many] scale-telekom-mega-menu-column:first-child{grid-column:1 / span 3}}";

const TelekomMegaMenu = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** :) */
    this.childrenTooMany = false;
  }
  connectedCallback() {
    if (this.hostElement.children.length > 4) {
      this.childrenTooMany = true;
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: "scale-telekom-mega-menu", "children-too-many": this.childrenTooMany }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "scale-telekom-mega-menu-container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TelekomMegaMenu.style = telekomMegaMenuCss;

const telekomMegaMenuColumnCss = ":host{--spacing-x-icon:1ch;grid-column:auto / span 3}:host(:first-child){grid-column:3 / span 3}[part~='base']{display:flex;flex-direction:column}[part~='icon']{transform:translateY(-0.125ch)}@media screen and (min-width: 1296px){[part~='base']{flex-direction:row}[part~='icon'] ::slotted(*){padding-right:var(--spacing-x-icon)}}[part~='heading']{display:flex;align-items:flex-start;height:calc(var(--telekom-typography-line-spacing-standard) * 2rem);font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-tight)}[part~='heading-has-link'] [part~='heading']:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}[part~='heading-has-link'] [part~='heading']:active{color:var(--telekom-color-text-and-icon-primary-pressed)}[part~='icon-arrow-right']{margin-top:0.5ch;margin-left:0.5ch}";

const TelekomMegaMenuColumn = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.headingLevel = 2;
    this.headingHasLink = false;
  }
  connectedCallback() {
    if (this.hostElement.querySelector('a[slot="heading"]')) {
      this.headingHasLink = true;
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)({
        base: true,
        'heading-has-link': this.headingHasLink,
      }) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "icon", "aria-hidden": "true" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "icon" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "heading", role: "heading", "aria-level": this.headingLevel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "heading" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-right", { part: "icon-arrow-right", size: 11, selected: true })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TelekomMegaMenuColumn.style = telekomMegaMenuColumnCss;

const telekomMobileMenuCss = ":host{--spacing:var(--telekom-spacing-composition-space-06);--background:var(--telekom-color-background-surface);--max-width:572px;--spacing-close-button:var(--telekom-spacing-composition-space-04);--radius-close-button:var(--telekom-radius-standard);--transition-close-button:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--box-shadow-close-button-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-primary-hovered);--color-active:var(--telekom-color-primary-pressed)}:host::part(base){margin:0 auto;background:var(--background);display:flex;justify-content:center;flex-direction:column;max-width:var(--max-width)}:host::part(back-button){display:flex;align-items:center;border:none;background:transparent;color:var(--color);font:var(--telekom-text-style-lead-text);width:100%;height:72px;cursor:pointer;padding:0}scale-icon-navigation-left{margin-right:12px}:host::part(nav){padding:var(--spacing) 0;max-width:var(--max-width);width:100%}:host::part(links-top){display:flex}[part~='app-name']>*{font-size:var(--font-size-app-name);font-weight:var(--font-weight-app-name);line-height:var(--line-height-app-name);color:var(--telekom-color-text-and-icon-primary-standard);letter-spacing:0.02em;text-decoration:none}[part~='app-name']>*:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}[part~='app-name']>*:active{color:var(--telekom-color-text-and-icon-primary-pressed)}";

function elementDepth(el) {
  let depth = 0;
  while (null !== el.parentElement) {
    el = el.parentElement;
    depth++;
  }
  return depth;
}
const TelekomMobileMenu = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleCloseNavFlyout = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close-nav-flyout", 7);
    this.backButtonTitle = 'Back';
    this.setLevelAttributeForAllItems = () => {
      const offset = Math.min(...Array.from(this.menuItems).map((x) => elementDepth(x)));
      Array.from(this.menuItems).forEach((item) => {
        const level = elementDepth(item) - offset;
        item.setAttribute('level', String(level));
      });
    };
    this.back = () => {
      Array.from(this.openItems).forEach((element) => {
        if (element.getAttribute('level') === String(+this.currentLevel - 1)) {
          element.setAttribute('active', '');
          // @ts-ignore
          element.open = false;
          return element.removeAttribute('open');
        }
      });
      this.currentLevel = String(+this.currentLevel - 1);
      Array.from(this.menuItems).forEach((element) => {
        element.setAttribute('current-level', this.currentLevel);
      });
    };
  }
  handleSetMenuItemActive(e) {
    this.menuItems.forEach((element) => element.removeAttribute('active'));
    e.target.setAttribute('active', '');
    if (e.target.parentElement.tagName === 'SCALE-TELEKOM-MOBILE-MENU-ITEM') {
      e.target.parentElement.setAttribute('active', '');
    }
  }
  handleSetMenuItemOpen(e) {
    e.target.setAttribute('open', '');
    this.currentLevel = String(+e.target.getAttribute('level') + 1);
    Array.from(this.menuItems).forEach((element) => {
      element.setAttribute('current-level', this.currentLevel);
    });
  }
  connectedCallback() {
    this.setLevelAttributeForAllItems();
    this.currentLevel = this.activeItem
      ? String(+this.activeItem.getAttribute('level'))
      : '0';
    Array.from(this.menuItems).forEach((element) => {
      element.setAttribute('current-level', this.currentLevel);
    });
  }
  componentWillRender() { }
  get menuItems() {
    return this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item');
  }
  get activeItem() {
    return Array.from(this.menuItems).find((element) => 
    // @ts-ignore
    element.hasAttribute('active') || element.active);
  }
  get openItems() {
    return Array.from(this.menuItems).filter((element) => 
    // @ts-ignore
    element.hasAttribute('open') || element.open);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { part: "nav" }, +this.currentLevel > 0 ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { part: "back-button", onClick: () => {
        this.back();
      } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-left", { size: 20 }), this.backButtonTitle)) : null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TelekomMobileMenu.style = telekomMobileMenuCss;

const telekomMobileMenuItemCss = ":host{--height:72px;--max-width:572px;--font-bold:var(--telekom-text-style-heading-5);--font-thin:var(--telekom-text-style-lead-text);--color:var(--telekom-color-text-and-icon-standard);--color-active:var(--telekom-color-primary-standard);--border-color:var(--telekom-color-ui-faint);--_box-shadow-active:none;--_spacing-level:0px;--_font:var(--font-thin);--_color:var(--color);position:relative}:host::part(level-0){--_spacing-level:0px;--_font:var(--font-bold)}:host::part(level-0 active){--_spacing-level:0px}:host::part(level-0 open){--_spacing-level:36px}:host::part(level-1),:host::part(level-2),:host::part(level-3),:host::part(level-4){--_spacing-level:36px}:host::part(level-1 current-level-2),:host::part(level-2 current-level-3),:host::part(level-3 current-level-4){--_font:var(--font-bold)}:host::part(active),:host::part(level-0 current-level-0 active),:host::part(level-1 current-level-1 active),:host::part(level-2 current-level-2 active),:host::part(level-3 current-level-3 active){--_color:var(--color-active);--_box-shadow-active:2px 0px 0px 0px var(--color-active) inset}:host::part(level-0 current-level-1),:host::part(level-1 current-level-2),:host::part(level-2 current-level-3),:host::part(level-3 current-level-4){--_color:var(--color)}:host::part(active-indicator){box-shadow:var(--_box-shadow-active);min-height:28px;min-width:2px}:host::part(base){font:var(--_font);max-width:var(--max-width)}::slotted(a){position:relative;display:flex;align-items:center;height:var(--height);width:calc(100% - var(--_spacing-level));max-width:572px;padding-left:var(--_spacing-level);color:var(--_color);text-decoration:none}:host::part(header){height:var(--height);border-style:solid;border-width:0 0 1px 0;border-color:var(--border-color);display:flex;width:100%;align-items:center;justify-content:flex-end;border-style:solid;border-width:0 0 1px 0;border-color:var(--border-color)}:host::part(hidden){display:none}:host::part(icon-right-container){display:flex;align-items:center;position:absolute}";

const TelekomMobileMenuItem = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleSetMenuItemActive = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-set-menu-item-active", 7);
    this.scaleSetMenuItemOpen = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-set-menu-item-open", 7);
    this.scaleCloseNavFlyout = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close-nav-flyout", 7);
    this.open = false;
    this.active = false;
    this.level = '0';
    this.currentLevel = '0';
    this.handleClick = (e) => {
      e.stopImmediatePropagation();
      const hasLink = !(e.target.getAttribute('href') || '').includes('javascript:void(0)');
      const hasLinkNoChildren = hasLink && !this.children.length;
      if (hasLinkNoChildren) {
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleCloseNavFlyout', e);
        return (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleSetMenuItemActive', e.detail);
      }
      const hasLinkAndChildrenAndOpen = hasLink && this.children.length && this.open;
      if (hasLinkAndChildrenAndOpen) {
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleCloseNavFlyout', e);
        return (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleSetMenuItemActive', e.detail);
      }
      // EITHER hos link and children - ready to expand children without firing the link click
      // OR no link but has children
      e.preventDefault();
      this.toggleChildrenVisibility(true);
      return (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleSetMenuItemOpen', e.detail);
    };
  }
  openChanged(newValue) {
    this.toggleChildrenVisibility(newValue);
  }
  toggleChildrenVisibility(show) {
    this.children.forEach((element) => {
      show && element.getAttribute('level') === String(+this.level + 1)
        ? element.removeAttribute('hidden')
        : element.setAttribute('hidden', '');
    });
  }
  get children() {
    return this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item');
  }
  get openChildren() {
    return Array.from(this.hostElement.querySelectorAll('scale-telekom-mobile-menu-item')).filter((element) => element.hasAttribute('open') || element.open);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { onClick: this.handleClick }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', `level-${this.level}`, `current-level-${this.currentLevel}`, {
        open: this.open,
        active: this.active,
        hidden: !this.open && this.level !== this.currentLevel,
      }) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('header', {
        hidden: !!this.openChildren.length,
      }) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "icon-right-container" }, !!this.children.length && !this.open && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-right", { size: 20, color: this.active
        ? 'var(--telekom-color-primary-standard)'
        : 'var(--telekom-color-text-and-icon-standard)' })))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "children" }))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "open": ["openChanged"]
  }; }
};
TelekomMobileMenuItem.style = telekomMobileMenuItemCss;

const telekomNavListCss = ".scale-telekom-nav-list{--width:100%;--height:100%;--spacing-x-start:0;--flex-direction:row;--_spacing-x-slotted:var(--_spacing-x-slotted-main-nav, 24px);--_spacing-x-slotted-meta-nav-external:var(\n    --telekom-spacing-composition-space-07\n  );--_spacing-x-slotted-meta-nav:var(--telekom-spacing-composition-space-07);--_spacing-x-slotted-lang-switcher:var(\n    --telekom-spacing-composition-space-04\n  );--_spacing-x-slotted-main-nav:var(--telekom-spacing-composition-space-10);--_spacing-x-slotted-functions:var(--telekom-spacing-composition-space-08);display:flex;align-items:stretch;flex-direction:var(--flex-direction);width:var(--width);height:var(--height);margin-inline-start:var(--spacing-x-start)}.scale-telekom-nav-list[debug]{border:1px dotted gold}@media screen and (min-width: 1296px){.scale-telekom-nav-list{--_spacing-x-slotted-main-nav:var(--telekom-spacing-composition-space-14);--_spacing-x-slotted-meta-nav:var(--telekom-spacing-composition-space-07);--_spacing-x-slotted-meta-nav-external:var(\n      --telekom-spacing-composition-space-07\n    )}.scale-telekom-nav-list[debug]{border:1px dotted cyan}}@media screen and (min-width: 1680px){.scale-telekom-nav-list{--_spacing-x-slotted-main-nav:var(--telekom-spacing-composition-space-16)}.scale-telekom-nav-list[debug]{border:1px dotted magenta}}.scale-telekom-nav-list[variant='meta-nav-external']{--_spacing-x-slotted:var(--_spacing-x-slotted-meta-nav-external)}.scale-telekom-nav-list[variant='meta-nav']{--_spacing-x-slotted:var(--_spacing-x-slotted-meta-nav)}.scale-telekom-nav-list[variant='lang-switcher']{--_spacing-x-slotted:var(--telekom-spacing-composition-space-08)}@media screen and (min-width: 1040px){.scale-telekom-nav-list[variant='lang-switcher']{--_spacing-x-slotted:var(--telekom-spacing-composition-space-04)}}.scale-telekom-nav-list[variant='main-nav']{--_spacing-x-slotted:var(--_spacing-x-slotted-main-nav)}.scale-telekom-nav-list[variant='functions']{--_spacing-x-slotted:var(--_spacing-x-slotted-functions)}.scale-telekom-nav-list[alignment='left']{justify-content:flex-start}.scale-telekom-nav-list[alignment='right']{justify-content:flex-end}.scale-telekom-nav-list[alignment='center']{justify-content:center}.scale-telekom-nav-list[alignment='left']:not([variant='main-nav'])>.scale-telekom-nav-item button,.scale-telekom-nav-list[alignment='left']:not([variant='main-nav'])>.scale-telekom-nav-item a{margin-inline-end:var(--_spacing-x-slotted)}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item{position:relative;left:calc(-1 * var(--telekom-spacing-composition-space-06));margin-inline-end:0}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item button,.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item a{padding-inline-start:var(--telekom-spacing-composition-space-06)}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item button,.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item a{padding-inline-end:calc(\n    var(--_spacing-x-slotted) - var(--telekom-spacing-composition-space-06)\n  )}.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item button::after,.scale-telekom-nav-list[variant='main-nav']>.scale-telekom-nav-item a::after{margin-inline-start:var(--telekom-spacing-composition-space-06);width:calc(100% - var(--_spacing-x-slotted))}.scale-telekom-nav-list[alignment='right']:not([variant='main-nav'])>*:not(:first-child){margin-inline-start:var(--_spacing-x-slotted)}.scale-telekom-nav-list[slot='mobile-meta-nav'],.scale-telekom-nav-list[slot='mobile-meta-nav-external']{--flex-direction:column}";

const isDirectChild = (parent, child) => [...parent.children].includes(child);
const TelekomNavList = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.role = 'menu';
    this.alignment = 'left';
    this.variant = 'main-nav';
  }
  handleScaleExpanded(event) {
    if (event.detail.expanded) {
      this.closeExpandedFlyoutSiblings(event.target);
    }
  }
  closeExpandedFlyoutSiblings(target) {
    const siblingItems = [...this.hostElement.children].filter((x) => !x.contains(target));
    siblingItems.forEach((item) => {
      const flyout = item.querySelector('scale-telekom-nav-flyout');
      if (isDirectChild(item, flyout) && flyout.expanded) {
        flyout.expanded = false;
      }
    });
  }
  connectedCallback() {
    [...this.hostElement.children].forEach((el) => {
      el.setAttribute('variant', this.variant);
    });
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: "scale-telekom-nav-list" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TelekomNavList.style = telekomNavListCss;




/***/ }),

/***/ 91779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ animationsFinished),
/* harmony export */   b: () => (/* binding */ isClickOutside),
/* harmony export */   c: () => (/* binding */ isPseudoClassSupported),
/* harmony export */   e: () => (/* binding */ emitEvent),
/* harmony export */   g: () => (/* binding */ generateUniqueId),
/* harmony export */   h: () => (/* binding */ hasShadowDom),
/* harmony export */   i: () => (/* binding */ isScaleIcon)
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
const hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
// eg isPseudoClassSupported(':focus-visible') // true for chrome, false for safari
const isPseudoClassSupported = (pseudoClass) => {
  // Get the document stylesheet1
  let ss = document.styleSheets[0];
  // Create a stylesheet if one doesn't exist
  if (!ss) {
    const el = document.createElement('style');
    document.head.appendChild(el);
    ss = document.styleSheets[0];
    document.head.removeChild(el);
  }
  // Test the pseudo-class by trying to style with it
  function testPseudo() {
    try {
      if (!/^:/.test(pseudoClass)) {
        pseudoClass = ':' + pseudoClass;
      }
      ss.insertRule('html' + pseudoClass + '{}', 0);
      ss.deleteRule(0);
      return true;
    }
    catch (e) {
      return false;
    }
  }
  // Run the test
  return testPseudo();
};
/**
 * Call `emit` on component events twice.
 * One for the legacy camel-cased event, one for the new kebab-cased.
 * e.g. for the event `scaleChange` it will do `instance.scaleChange.emit()` and `instance.scaleChangeLegacy.emit()`.
 * It expects both `scaleChange` and `scaleChangeLegacy` event-decorated properties to exist on the component.
 *
 * @param instance {ComponentInterface} - The component instance, aka `this`
 * @param eventKey {string} - The event property, e.g. `scaleChange`
 * @param detail {any} - The custom event `detail`
 * @returns {CustomEvent[]} - The events emitted
 */
function emitEvent(instance, eventKey, detail) {
  const legacyKey = eventKey + 'Legacy';
  const emitted = [];
  if (typeof instance[legacyKey] !== 'undefined') {
    // Emit legacy camel case event, e.g. `scaleClose`
    emitted.push(instance[legacyKey].emit(detail));
  }
  // Emit now-standard kebab-case event, e.g. `scale-close`
  emitted.push(instance[eventKey].emit(detail));
  // Return both
  return emitted;
}
function isClickOutside(event, host) {
  let target = event.target;
  const hasShadow = target.shadowRoot != null;
  const composedPath = hasShadow ? event.composedPath() : [];
  do {
    if (target === host) {
      return false;
    }
    if (hasShadow) {
      // @ts-ignore
      target = composedPath.shift();
    }
    else {
      target = target.parentNode;
    }
  } while (target);
  return true;
}
const isScaleIcon = (el) => {
  if (el == null || el.nodeType !== 1) {
    return false;
  }
  return el.nodeName.toUpperCase().substring(0, 10) === 'SCALE-ICON';
};
/** Creating global ids for different component helper-texts */
let id = 0;
function generateUniqueId() {
  return id++;
}
/**
 * Useful for waiting for animations to finish before doing something.
 *
 * @param el {HTMLElement | ShadowRoot} - The element to call `getAnimations` on
 * @returns {Promise} - Resolves when all animations are finished
 */
const animationsFinished = (el) => {
  return Promise.all(el.getAnimations({ subtree: true }).map((x) => x.finished));
};




/***/ })

};
;