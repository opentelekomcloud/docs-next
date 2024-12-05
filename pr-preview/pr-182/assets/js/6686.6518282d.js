"use strict";
exports.id = 6686;
exports.ids = [6686];
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

/***/ 16686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_accordion: () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);



const Accordion = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** If `true`, only one scale-collapsible within the accordion can be open at a time */
    this.dependent = false;
    /** If `true`, scale-collapsibles within the accordion will all be open initially, unless this is dependant */
    this.expanded = false;
    /** Heading level for scale-collapsible descendants */
    this.headingLevel = null;
    this.iconLocation = 'left';
  }
  /**
   * Handle `dependent`
   */
  collapsibleHandler(event) {
    event.stopPropagation();
    const { expanded } = event.detail;
    if (!this.dependent || expanded === false) {
      return;
    }
    this.getCollapsibleChildren().forEach((child) => {
      if (child !== event.target && child.hasAttribute('expanded')) {
        child.expanded = false;
      }
    });
  }
  headingLevelChanged(newValue) {
    this.propagatePropsToChildren(newValue, this.iconLocation);
  }
  iconLocationChanged(newValue) {
    this.propagatePropsToChildren(this.headingLevel, newValue);
  }
  connectedCallback() {
    /**
     * Handle `expanded`
     */
    if (!this.dependent) {
      this.getCollapsibleChildren().forEach((child) => {
        child.expanded = this.expanded;
      });
    }
  }
  componentDidLoad() {
    if (this.headingLevel !== null || this.iconLocation !== 'left') {
      this.propagatePropsToChildren(this.headingLevel, this.iconLocation);
    }
  }
  getCollapsibleChildren() {
    return Array.from(this.el.children).filter((el) => el.tagName === 'SCALE-COLLAPSIBLE');
  }
  propagatePropsToChildren(headingLevel, iconLocation) {
    this.getCollapsibleChildren().forEach((item) => {
      item.headingLevel = headingLevel;
      item.iconLocation = iconLocation;
    });
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap(), part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('accordion');
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "headingLevel": ["headingLevelChanged"],
    "iconLocation": ["iconLocationChanged"]
  }; }
};




/***/ })

};
;