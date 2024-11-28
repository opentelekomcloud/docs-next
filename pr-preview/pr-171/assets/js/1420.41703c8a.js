"use strict";
exports.id = 1420;
exports.ids = [1420];
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

/***/ 41420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_carousel: () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);




const carouselCss = ".carousel{width:400px;height:300px;position:relative}.carousel__container{width:100%;height:100%;margin:0;display:flex;padding:0;overflow:hidden;position:relative;box-sizing:border-box;align-items:center}.carousel__slide{height:100%;position:relative;min-width:100%;transition:all 0.3s ease-in-out}.carousel__arrow{top:50%;color:#fff;width:24px;border:none;cursor:pointer;height:24px;display:flex;outline:none;z-index:99;position:absolute;transform:translateY(-50%);background:rgba(31, 45, 61, 0.11);align-items:center;border-radius:50%;justify-content:center}.carousel__arrow--left{left:12px}.carousel__arrow--right{right:12px}.carousel__indicators{left:50%;bottom:12px;margin:0;display:inline-flex;padding:0;z-index:2;position:absolute;transform:translateX(-50%);list-style:none}.carousel__indicator{width:30px;border:none;cursor:pointer;height:4px;margin:0 6px;display:block;opacity:0.5;outline:none;padding:0;background:#fff;transition:0.3s}.carousel__indicator--active{opacity:1}.carousel--vertical .carousel__container{flex-direction:column}.carousel--vertical .carousel__arrow{display:none}.carousel--vertical .carousel__indicators{top:50%;left:unset;right:12px;bottom:0;display:flex;transform:translateY(-50%);flex-direction:column}.carousel--vertical .carousel__indicator{width:4px;height:30px;margin:6px 0}";

const Carousel = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) carousel display direction */
    this.vertical = false;
    this.slidesArray = [];
    this.value = 0;
    this.handleSlideChange = (direction) => {
      const val = this.value;
      if (direction === 'prev') {
        val === 0
          ? (this.value = -100 * (this.slidesArray.length - 1))
          : (this.value = val + 100);
      }
      if (direction === 'next') {
        val === -100 * (this.slidesArray.length - 1)
          ? (this.value = 0)
          : (this.value = val - 100);
      }
    };
    this.setActiveSlide = (index) => {
      this.value = -100 * index;
    };
    this.setTransformValue = () => {
      if (!!this.vertical) {
        return `translateY(${this.value}%)`;
      }
      return `translateX(${this.value}%)`;
    };
    this.setActiveCssClass = (index) => {
      if (Math.abs(this.value) / 100 === index) {
        return 'carousel__indicator--active';
      }
      return '';
    };
  }
  connectedCallback() {
    (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({ source: this.hostElement, type: 'warn' });
  }
  componentWillLoad() {
    if (this.slidesArray.length === 0) {
      const children = this.hostElement.children;
      // tslint:disable-next-line: prefer-for-of
      for (let childIndex = 0; childIndex < children.length; childIndex++) {
        if (children[childIndex].slot === '') {
          // tslint:disable-next-line: prefer-for-of
          for (let slideIndex = 0; slideIndex < children[childIndex].children.length; slideIndex++) {
            const element = children[childIndex].children[slideIndex];
            this.slidesArray.push(element);
          }
        }
      }
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "carousel__container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "carousel__arrow carousel__arrow--left", onClick: () => this.handleSlideChange('prev') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "arrow-left" })), this.slidesArray.map((element) => ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "carousel__slide", style: { transform: this.setTransformValue() } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { innerHTML: element.outerHTML })))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "carousel__arrow carousel__arrow--right", onClick: () => this.handleSlideChange('next') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "arrow-right" }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "carousel__indicators" }, Array.from(Array(this.slidesArray.length).keys()).map((index) => ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: index, class: `carousel__indicator ${this.setActiveCssClass(index)}`, onClick: () => this.setActiveSlide(index) })))))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('carousel', this.vertical && `carousel--vertical`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
Carousel.style = carouselCss;




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