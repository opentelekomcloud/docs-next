"use strict";
exports.id = 7319;
exports.ids = [7319];
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

/***/ 21591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ renderIcon)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


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
/**
 * Conditionally render markup for an icon based on data.
 *
 * @param value when a string, will be used as the `name` attribute in a `<scale-icon>`,
 *              when a function it should return a string of HTML
 * @param customContainerClass a custom class for the wrapper of the HTML returned by `value`
 */
const renderIcon = (value, customContainerClass) => {
  if (typeof value === 'function') {
    return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { innerHTML: value(), class: customContainerClass });
  }
  if (typeof value === 'string') {
    return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon", { name: value });
  }
  const Tag = value.tag;
  return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, value.attributes));
};




/***/ }),

/***/ 67319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_app_footer: () => (/* binding */ AppFooter)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21591);




const appFooterCss = ":host{--background:var(--telekom-color-background-surface-highlight);--color:var(--telekom-color-text-and-icon-white-standard);--spacing-top:var(--telekom-spacing-composition-space-10);--spacing-bottom:var(--telekom-spacing-composition-space-08);--spacing-x:var(--telekom-spacing-composition-space-08);--background-container:var(--telekom-color-background-canvas);--radius:var(--telekom-radius-large);--max-width:inherit;--border-top-minimal:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-faint);--color-minimal:var(--telekom-color-text-and-icon-additional);--background-minimal:var(--telekom-color-background-surface);--spacing-angular:var(--telekom-spacing-composition-space-08);--spacing-minimal:var(--telekom-spacing-composition-space-08);--background-mask:var(--telekom-color-background-canvas);--radius-mask:0 0 var(--telekom-radius-large) var(--telekom-radius-large);--font-size-copyright:var(--telekom-typography-font-size-caption);--color-link-standard:var(--telekom-color-text-and-icon-white-standard);--color-link-minimal:var(--telekom-color-text-and-icon-additional);--font-size-navigation-standard:var(--telekom-typography-font-size-caption);--font-family-navigation-standard:var(--telekom-typography-font-family-sans);--font-weight-navigation-standard:var(\n    --telekom-typography-font-weight-extra-bold\n  );--font-weight-navigation-minimal:var(\n    --telekom-typography-font-weight-medium\n  );--spacing-navigation-standard:var(--telekom-spacing-composition-space-04);--color-navigation-standard-hover:var(\n    --telekom-color-text-and-icon-white-standard\n  );--color-navigation-minimal-hover:var(\n    --telekom-color-text-and-icon-primary-hovered\n  );--color-navigation-active-focus:var(\n    --telekom-color-text-and-icon-primary-pressed\n  );--box-shadow-navigation-focus:0 0 0\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-focus-standard);--border-color-standard-hover:var(\n    --telekom-color-text-and-icon-white-standard\n  )}.footer{width:100%;background:var(--background);color:var(--color);padding:var(--spacing-top) var(--spacing-x) var(--spacing-bottom)\n    var(--spacing-x);position:relative;bottom:0;box-sizing:border-box}.footer-container{background:var(--background)}.footer--variant-angular .footer{padding:var(--spacing-angular)}.footer--variant-minimal .footer{border-top:var(--border-top-minimal);color:var(--color-minimal);background:var(--background-minimal);padding:var(--spacing-minimal)}.footer-mask{position:relative;z-index:1;height:var(--radius);background:var(--background-mask);border-radius:var(--radius-mask)}.footer--variant-angular .footer-mask,.footer--variant-minimal .footer-mask{display:none}.footer-copyright{font-size:var(--font-size-copyright)}.footer-navigation a{color:var(--color-link-standard);text-decoration:none}.footer--variant-minimal .footer-navigation a{color:var(--color-link-minimal)}.footer-navigation ul{margin:0;padding:0;list-style:none;font-size:var(--font-size-navigation-standard);font-family:var(--font-family-navigation-standard);font-weight:var(--font-weight-navigation-standard)}.footer--variant-minimal .footer-navigation ul{font-weight:var(--font-weight-navigation-minimal)}.footer-navigation li a{display:flex;align-items:center;padding:var(--spacing-navigation-standard);margin:calc(-1 * var(--spacing-navigation-standard)) 0}.footer-navigation li span{padding:var(--telekom-spacing-composition-space-03) 0}.footer-navigation li a:hover{color:var(--color-navigation-standard-hover)}.footer--variant-minimal .footer-navigation li a:hover{color:var(--color-navigation-minimal-hover)}.footer--variant-minimal .footer-navigation li a:hover span{border-bottom:1px solid transparent;margin-bottom:-1px}.footer--variant-angular .footer-navigation li a:hover span,.footer--variant-standard .footer-navigation li a:hover span{border-bottom:1px solid var(--border-color-standard-hover);margin-bottom:-1px}.footer-navigation li a:active{color:var(--color-navigation-active-focus, #cb0068)}.footer--variant-minimal .footer-navigation li a:active span{border-bottom:1px solid transparent;margin-bottom:-1px}.footer--variant-angular .footer-navigation li a:active span,.footer--variant-standard .footer-navigation li a:active span{border-bottom:1px solid var(--color-navigation-active-focus);margin-bottom:-1px}.footer-navigation li a:active:focus{color:var(--color-navigation-active-focus);box-shadow:none}.footer-navigation li a:focus{outline:none;box-shadow:var(--box-shadow-navigation-focus);border-radius:var(--radius)}.footer-navigation svg{width:auto;height:var(--telekom-spacing-composition-space-06);margin-right:var(--spacing-navigation-standard)}.footer--variant-minimal .footer-copyright{justify-content:flex-start}.footer--variant-minimal .footer-branding{display:none}.footer--variant-minimal .footer-content{grid-template-areas:'copyright navigation navigation'}@media (max-width: 639px){.footer-branding{margin-bottom:var(--spacing-angular)}.footer-copyright{margin-bottom:var(--telekom-spacing-composition-space-06)}.footer-navigation ul{line-height:var(--telekom-spacing-composition-space-10)}.footer-navigation li a{padding:var(--telekom-spacing-composition-space-03);margin:calc(-1 * var(--spacing-navigation-standard))\n      calc(-1 * var(--telekom-spacing-composition-space-03))}}@media (min-width: 640px){.footer-branding{grid-area:branding;width:100%;display:flex;align-items:center;justify-content:flex-start}.footer-copyright{grid-area:copyright;width:100%;display:flex;align-items:center;justify-content:center}.footer-navigation{grid-area:navigation;width:100%;display:flex;align-items:center;justify-content:flex-end}.footer-navigation ul{display:flex;align-items:center}}@media (min-width: 640px) and (max-width: 1295px){.footer-content{display:grid;grid-template-columns:repeat(auto-fit, minmax(0, 1fr));grid-template-areas:'branding ....... .......'\n      'copyright navigation navigation'}.footer-branding{margin-bottom:var(--spacing-angular)}.footer-copyright{justify-content:flex-start}}@media (min-width: 1296px){.footer-content{display:grid;grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);grid-template-areas:'branding copyright navigation'}}@media (min-width: 1552px){.footer-content{margin:0 auto;max-width:var(--max-width)}}scale-logo:focus-visible{outline:none}";

const readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  }
  catch (error) {
    parsedData = data;
  }
  return parsedData;
};
const AppFooter = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.footerNavigation = [];
    this.variant = 'standard';
    this.copyright = '© Deutsche Telekom AG';
  }
  componentWillLoad() {
    this.hasSlotLogo = !!this.hostElement.querySelector('[slot="logo"]');
    this.hasSlotNavigation = !!this.hostElement.querySelector('[slot="navigation"]');
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "footer-mask" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("footer", { class: "footer" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "footer-content" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "footer-branding" }, this.hasSlotLogo ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "logo" })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-logo", { transparent: true, variant: "white", size: 24, href: this.logoHref, logoTitle: this.logoTitle, onClick: this.logoClick, logoAriaDescribedBy: this.logoAriaDescribedBy }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "footer-copyright" }, this.copyright), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { "aria-label": "bottom", class: "footer-navigation" }, this.hasSlotNavigation ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "navigation" })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, readData(this.footerNavigation).map((item) => ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "footer-navigation__item" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "footer-navigation__item-link", href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
      } }, item.icon &&
      (0,_render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_2__.r)({
        tag: `scale-icon-${item.icon}`,
        attributes: {
          class: 'footer-navigation__item-link',
        },
      }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, item.name)))))))))))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('footer-container', this.variant && `footer--variant-${this.variant}`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AppFooter.style = appFooterCss;




/***/ })

};
;