"use strict";
exports.id = 1412;
exports.ids = [1412];
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

/***/ 61412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_telekom_footer: () => (/* binding */ TelekomFooter),
/* harmony export */   scale_telekom_footer_content: () => (/* binding */ TelekomFooterContent)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const telekomFooterCss = ".scale-telekom-footer{--font-size:var(--telekom-typography-font-size-caption);--font-color:var(--telekom-color-text-and-icon-white-standard);--font-large:var(--telekom-text-style-ui);--background-footer:var(--telekom-color-ui-black);--background-footer-minimal:var(--telekom-color-background-canvas);--_nav-items-bottom-margin:var(--telekom-spacing-composition-space-08);--_nav-items-spacing:var(--telekom-spacing-composition-space-05)}.scale-telekom-footer :where(ul),.scale-telekom-footer[type='minimal'] :where(ul){display:flex;flex-wrap:wrap;align-items:flex-start;flex-direction:column;gap:var(--_nav-items-spacing);padding:0;margin:0;width:100%;color:var(--font-color);list-style:none}.scale-telekom-footer[type='minimal'] scale-telekom-footer-content{--background-footer:var(--background-footer-minimal);--_font-color:var(--telekom-color-text-and-icon-additional);--_display-logo:none;--_navigation-container-padding:var(--telekom-spacing-composition-space-06) 0\n    var(--telekom-spacing-composition-space-06) 0;--_nav-items-bottom-margin:0}.scale-telekom-footer :where(a,span),.scale-telekom-footer[type='minimal'] :where(a,span){display:flex;justify-content:center;font-size:var(--font-size);color:var(--font-color);line-height:140%;text-decoration:none;border:1px solid rgba(0, 0, 0, 0);border-radius:2px}.scale-telekom-footer[type='minimal'] :where(a,span){color:var(--telekom-color-text-and-icon-standard)}.scale-telekom-footer[type='minimal'] :where(ul){margin-bottom:0}.scale-telekom-footer[type='minimal'] a:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}.scale-telekom-footer[type='minimal'] a:active{color:var(--telekom-color-text-and-icon-primary-pressed)}.scale-telekom-footer :where(a:hover){border-radius:0;border-bottom:1px solid var(--font-color)}.scale-telekom-footer :where(a:active){color:var(--telekom-color-text-and-icon-white-additional);border-bottom:1px solid var(--telekom-color-text-and-icon-white-additional)}.scale-telekom-footer[type='minimal'] :where(a:focus-visible){outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:1px}.scale-telekom-footer:not([type='minimal']) :where(a:focus-visible){outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-on-dark-background);outline-offset:1px}.scale-telekom-footer:not([type='minimal']) scale-telekom-footer-extended-navigation-column :where(a:focus-visible){outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:1px}@media screen and (min-width: 640px){.scale-telekom-footer :where(ul),.scale-telekom-footer[type='minimal'] :where(ul){display:flex;flex-direction:row;align-items:center;list-style:none;column-gap:var(--_nav-items-spacing);row-gap:var(--telekom-spacing-composition-space-03)}}@media screen and (min-width: 1040px){.scale-telekom-footer :where(ul),.scale-telekom-footer[type='minimal'] :where(ul){--_nav-items-spacing:var(--telekom-spacing-composition-space-08);row-gap:var(--telekom-spacing-composition-space-04)}.scale-telekom-footer :where(a,span){font:var(--font-large)}}@media screen and (min-width: 1296px){.scale-telekom-footer :where(ul),.scale-telekom-footer[type='minimal'] :where(ul){--_nav-items-spacing:var(--telekom-spacing-composition-space-14)}}";

const TelekomFooter = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.type = 'standard';
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('scale-telekom-footer', {
      // slim: this.type === 'minimal',
      }) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TelekomFooter.style = telekomFooterCss;

const telekomFooterContentCss = ":host{--_max-width-container:none;--_spacing-x-container:var(--telekom-spacing-composition-space-06);--_nav-items-bottom-margin:var(--telekom-spacing-composition-space-08);--_nav-items-spacing:var(--telekom-spacing-composition-space-05);--_logo-top-margin:var(--telekom-spacing-composition-space-12);--_logo-bottom-margin:var(--telekom-spacing-composition-space-12);--_font-color:var(--telekom-color-text-and-icon-white-standard);--_font-size:var(--telekom-typography-font-size-caption);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--_display-logo:flex;--_navigation-container-padding:0 0 0 0}footer{width:100%;background-color:var(--background-footer);display:flex;justify-content:center;flex-direction:column;padding-bottom:var(--_nav-items-bottom-margin);align-items:center}[part~='base']{height:100%;max-width:var(--_max-width-container);padding-left:var(--_spacing-x-container);padding-right:var(--_spacing-x-container);position:relative;display:flex;flex:1;flex-direction:column;width:-moz-available;width:-webkit-fill-available;width:fill-available}[part~='logo']{display:var(--_display-logo);justify-content:center;height:100%;width:100%;margin-top:var(--_logo-top-margin);margin-bottom:var(--_logo-bottom-margin)}[part~='body']{display:flex;flex-direction:column;width:100%;padding:var(--_navigation-container-padding);margin:0;bottom:0}[part~='notice']{color:var(--_font-color);display:flex;flex:1 0 auto;margin-bottom:var(--telekom-spacing-composition-space-07);font-size:var(--_font-size);line-height:140%;margin-right:var(--telekom-spacing-composition-space-07)}[part~='app-logo']{--logo-size:var(--telekom-spacing-composition-space-11)}.scale-icon{height:16px;width:16px;margin-right:9px}@media screen and (min-width: 640px){:host{--_logo-top-margin:var(--telekom-spacing-composition-space-10);--_logo-bottom-margin:var(--telekom-spacing-composition-space-14);--_nav-items-spacing:var(--telekom-spacing-composition-space-06)}[part~='body']{flex-direction:column}[part~='navigation'] ul{list-style:none;display:flex;flex-direction:row;align-items:center}[part~='notice']{margin-bottom:var(--telekom-spacing-composition-space-04)}}@media screen and (min-width: 1040px){:host{--_logo-top-margin:var(--telekom-spacing-composition-space-14);--_logo-bottom-margin:var(--telekom-spacing-composition-space-18);--_nav-items-spacing:var(--telekom-spacing-composition-space-08);--_slim-padding:var(--telekom-spacing-composition-space-08);--_font-size:var(--telekom-typography-font-size-body);--_spacing-x-container:var(--telekom-spacing-composition-space-08)}[part~='body']{flex-direction:row}:host [part~='app-logo']{--logo-size:var(--telekom-spacing-composition-space-13)}:host [part~='notice']{margin-bottom:0}}@media screen and (min-width: 1296px){:host{--_logo-top-margin:var(--telekom-spacing-composition-space-16);--_logo-bottom-margin:var(--telekom-spacing-composition-space-19);--_nav-items-bottom-margin:var(--telekom-spacing-composition-space-10);--_nav-items-spacing:var(--telekom-spacing-composition-space-14);--_slim-padding:var(--telekom-spacing-composition-space-10)}:host [part~='app-logo']{--logo-size:var(--telekom-spacing-composition-space-14)}}@media screen and (min-width: 1680px){:host{--_max-width-container:var(--scl-grid-max-width, 1504px);--_logo-top-margin:var(--telekom-spacing-composition-space-18);--_logo-bottom-margin:96px}:host [part~='app-logo']{--logo-size:var(--telekom-spacing-composition-space-16)}}";

const TelekomFooterContent = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Logo link */
    this.logoHref = '';
    /** (optional) set logo specific title */
    this.logoTitle = 'Telekom Logo';
    /** (optional) set logo specific title */
    this.logoHideTitle = false;
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "extended-navigation" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "logo" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-logo", { part: "app-logo", variant: "white", style: {
        '--focus-outline': 'var(--telekom-line-weight-highlight) solid var(--telekom-color-functional-focus-on-dark-background)',
      }, transparent: true, href: this.logoHref, logoHideTitle: this.logoHideTitle, logoTitle: this.logoHideTitle ? undefined : this.logoTitle, focusable: this.logoHref ? true : false })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "body" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "notice" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "notice" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "navigation" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "navigation" })))))));
  }
};
TelekomFooterContent.style = telekomFooterContentCss;




/***/ })

};
;