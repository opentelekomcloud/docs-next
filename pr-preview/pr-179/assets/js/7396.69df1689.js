"use strict";
exports.id = 7396;
exports.ids = [7396];
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

/***/ 27396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);





const inputCss = ".input{position:relative}.input .input__helper-text,.input .input__counter{font-weight:var(--telekom-typography-font-weight-bold)}.input .input__input,.input .input__select{width:100%;height:var(--telekom-spacing-composition-space-14);margin:0;display:flex;outline:none;padding:var(--telekom-spacing-composition-space-05)\n    var(--telekom-spacing-composition-space-05);z-index:1;box-sizing:border-box;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-family:inherit;font-size:var(--telekom-typography-font-size-body);border-radius:var(--telekom-radius-standard);border:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-border-standard)}.input .input__textarea{width:100%;margin:0;resize:vertical;display:flex;outline:none;padding:var(--telekom-spacing-composition-space-05)\n    var(--telekom-spacing-composition-space-05);z-index:1;box-sizing:border-box;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-family:inherit;font-size:var(--telekom-typography-font-size-body);border-radius:var(--telekom-radius-standard);border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard)}.input .input__select{appearance:none;-webkit-appearance:none}.input .input__select-wrapper{position:relative}.input .input__counter{display:flex;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));margin-left:auto;padding-right:var(--telekom-spacing-composition-space-05);justify-content:flex-end;font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);color:var(--telekom-color-text-and-icon-standard)}.input .input__helper-text{transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));padding-left:var(--telekom-spacing-composition-space-05);font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);color:var(--telekom-color-text-and-icon-functional-informational)}.input .input__meta{display:flex;justify-content:space-between;margin-top:var(--telekom-spacing-composition-space-03)}.input:not(.input--disabled):hover .input__select-wrapper{--icon-color:var(--telekom-color-text-and-icon-primary-hovered, #f90984)}.input:not(.input--disabled):active .input__select-wrapper{--icon-color:var(--telekom-color-text-and-icon-primary-pressed, #cb0068)}.input:not(.input--disabled) .input__input:hover,.input:not(.input--disabled) .input__input:focus,.input:not(.input--disabled) .input__select:hover,.input:not(.input--disabled) .input__select:focus,.input:not(.input--disabled) .input__textarea:hover,.input:not(.input--disabled) .input__textarea:focus{border-color:var(--telekom-color-ui-border-hovered)}.input:not(.input--disabled) .input__input:focus,.input:not(.input--disabled) .input__select:focus,.input:not(.input--disabled) .input__textarea:focus{box-shadow:0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-focus-standard)}.input:not(.input--disabled) .input__input:focus::placeholder,.input:not(.input--disabled) .input__select:focus::placeholder,.input:not(.input--disabled) .input__textarea:focus::placeholder{color:var(--telekom-color-text-and-icon-additional);transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard))}.input .input__select-wrapper scale-icon{top:50%;right:var(--telekom-spacing-composition-space-05);position:absolute;transform:translateY(-50%);pointer-events:none}.input .input__input::placeholder,.input .input__select::placeholder,.input .input__textarea::placeholder,.input ::placeholder{color:transparent;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard))}.input--variant-static .input__label{color:var(--telekom-color-text-and-icon-additional);display:flex;font-weight:var(--telekom-typography-font-weight-medium)}.input--variant-animated .input__input,.input--variant-animated .input__select{padding:var(--telekom-spacing-composition-space-05)\n    var(--telekom-spacing-composition-space-05) 0\n    calc(var(--telekom-spacing-composition-space-05) - 1px)}.input--variant-animated .input__textarea{padding-top:var(--telekom-spacing-composition-space-08)}.input--variant-animated .input__label{top:0;left:0;color:var(--telekom-color-text-and-icon-additional);display:flex;z-index:var(--scl-z-index-10);position:absolute;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));pointer-events:none;font-size:var(--telekom-typography-font-size-body);transform:translate(\n    var(--telekom-spacing-composition-space-05),\n    calc(\n      (\n          var(--telekom-spacing-composition-space-14) -\n            var(--telekom-typography-font-size-body)\n        ) / 2\n    )\n  );font-weight:var(--telekom-typography-font-weight-medium)}.input--variant-animated.input--has-focus .input__label,.input--variant-animated.animated .input__label{color:var(--telekom-color-text-and-icon-additional);transform:translate(\n    var(--telekom-spacing-composition-space-05),\n    var(--telekom-spacing-composition-space-04)\n  );transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-size:var(--telekom-typography-font-size-badge);font-weight:var(--telekom-typography-font-weight-bold)}.input--status-error .input__input,.input--status-error .input__textarea,.input--status-error .input__select{border:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard)}.input--status-error .input__helper-text{color:var(--telekom-color-text-and-icon-functional-danger)}.input--status-error .input__counter{color:var(--telekom-color-text-and-icon-functional-danger)}.input--size-small .input__input{height:var(--telekom-spacing-composition-space-12)}.input--size-small .input__select{height:var(--telekom-spacing-composition-space-12)}.input--size-small .input__label{top:0;left:0;color:var(--telekom-color-text-and-icon-additional);display:flex;z-index:var(--scl-z-index-10);position:absolute;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));pointer-events:none;font-size:var(--telekom-typography-font-size-body);transform:translate(\n    var(--telekom-spacing-composition-space-05),\n    calc(\n      (\n          var(--telekom-spacing-composition-space-12) -\n            var(--telekom-typography-font-size-body)\n        ) / 2\n    )\n  );font-weight:var(--telekom-typography-font-weight-medium)}.input--size-small.input--has-focus .input__label,.input--size-small.animated .input__label{color:var(--telekom-color-text-and-icon-additional);transform:translate(\n    var(--telekom-spacing-composition-space-05),\n    var(--telekom-spacing-composition-space-03)\n  );transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-size:var(--telekom-typography-font-size-badge);font-weight:var(--telekom-typography-font-weight-medium)}.input--transparent .input__input,.input--transparent .input__textarea,.input--transparent.input--type-radio .input__radio,.input--transparent .input__select{background-color:transparent}.input--type-checkbox{display:flex;flex-wrap:wrap;align-items:center}.input--type-checkbox input{width:0;height:0;opacity:0;position:absolute}.input--type-checkbox .input__meta{width:100%}.input--type-checkbox .input__helper-text{padding-left:var(--telekom-spacing-composition-space-10)}.input--type-checkbox label{color:var(--telekom-color-text-and-icon-standard);font-weight:var(--telekom-typography-font-weight-medium)}.input--type-checkbox .input__checkbox-container{width:var(--telekom-spacing-composition-space-06);height:var(--telekom-spacing-composition-space-06);display:flex;position:relative;align-items:center;margin-right:var(--telekom-spacing-composition-space-04)}.input--type-checkbox input:disabled~label{color:var(--telekom-color-ui-disabled)}.input--type-checkbox input:checked:disabled~label{color:var(--telekom-color-ui-disabled)}.input--type-checkbox input:checked:disabled~.input__checkbox-container .input__checkbox-placeholder{background:var(--telekom-color-ui-disabled)}.input--type-checkbox input:checked:disabled~.input__checkbox-container scale-icon{--icon-color:var(--telekom-color-text-and-icon-disabled)}.input--type-checkbox input:checked:not([disabled]):hover~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container:hover .input__checkbox-placeholder{box-shadow:none;border-color:var(--telekom-color-primary-hovered, #f90984);background:var(--telekom-color-primary-hovered, #f90984)}.input--type-checkbox input:checked:not([disabled]):active~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container:active .input__checkbox-placeholder{border-color:var(--telekom-color-primary-pressed, #cb0068);background:var(--telekom-color-primary-pressed, #cb0068)}.input--type-checkbox input:checked:not([disabled]):active~.input__checkbox-container scale-icon,.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container:active scale-icon{--icon-color:var(--telekom-color-text-and-icon-standard)}.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container .input__checkbox-placeholder{border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-primary-standard, #e20074);background:var(--telekom-color-primary-standard, #e20074)}.input--type-checkbox input:disabled~.input__checkbox-container .input__checkbox-placeholder{border-color:var(--telekom-color-ui-disabled)}.input--type-checkbox input:focus~.input__checkbox-container .input__checkbox-placeholder{box-shadow:0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-focus-standard)}.input--type-checkbox input:not([disabled]):hover~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:not([disabled])~.input__checkbox-container:hover .input__checkbox-placeholder{box-shadow:none;border-color:var(--telekom-color-primary-hovered, #f90984)}.input--type-checkbox input:not([disabled]):hover~.input__checkbox-container~label,.input--type-checkbox input:not([disabled])~.input__checkbox-container:hover~label{color:var(--telekom-color-text-and-icon-primary-hovered, #f90984)}.input--type-checkbox input:not([disabled]):active~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:not([disabled])~.input__checkbox-container:active .input__checkbox-placeholder{border-color:var(--telekom-color-primary-pressed, #cb0068);background:var(--telekom-color-primary-pressed, #cb0068)}.input--type-checkbox input:not([disabled]):active~.input__checkbox-container scale-icon,.input--type-checkbox input:not([disabled])~.input__checkbox-container:active scale-icon{--icon-color:var(--telekom-color-text-and-icon-primary-pressed, #cb0068)}.input--type-checkbox input:not([disabled]):active~.input__checkbox-container~label,.input--type-checkbox input:not([disabled])~.input__checkbox-container:active~label{color:var(--telekom-color-text-and-icon-primary-pressed, #cb0068)}.input--type-checkbox .input__checkbox-container .input__checkbox-placeholder{width:var(--telekom-spacing-composition-space-06);height:var(--telekom-spacing-composition-space-06);margin:0;box-sizing:border-box;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));border-radius:var(--telekom-radius-standard);border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-text-and-icon-standard);background:var(--telekom-color-background-surface)}.input--type-checkbox .input__checkbox-container scale-icon{top:calc(0.5 * var(--telekom-spacing-composition-space-05));left:calc(0.5 * var(--telekom-spacing-composition-space-05));width:var(--telekom-spacing-composition-space-05);height:var(--telekom-spacing-composition-space-05);position:absolute;user-select:none;--icon-color:var(--telekom-color-text-and-icon-inverted-standard)}.input--type-checkbox .input__checkbox-container~label{transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard))}.input--type-checkbox.input--status-error .input__checkbox-container .input__checkbox-placeholder{border:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard)}.input--type-radio{display:flex;flex-wrap:wrap;align-items:center}.input--type-radio .input__meta{width:100%}.input--type-radio .input__helper-text{margin-top:var(--telekom-spacing-composition-space-03);padding-left:var(--telekom-spacing-composition-space-08)}.input--type-radio label{color:var(--telekom-color-text-and-icon-standard);transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-weight:var(--telekom-typography-font-weight-medium)}.input--type-radio input{width:var(--telekom-spacing-composition-space-06);height:var(--telekom-spacing-composition-space-06);transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));border-radius:var(--telekom-radius-circle);-webkit-appearance:none;background-color:#fff;border:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-border-standard);margin:0 var(--telekom-spacing-composition-space-04) 0 0}.input--type-radio input:focus{outline:none;box-shadow:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard)}.input--type-radio:hover input:not(:checked):not([disabled]){box-shadow:none;border-color:var(--telekom-color-text-and-icon-primary-hovered)}.input--type-radio:hover input:not(:checked):not([disabled])~label{color:var(--telekom-color-text-and-icon-primary-hovered)}.input--type-radio input:active{border:var(--telekom-spacing-composition-space-04) solid\n    var(--telekom-color-primary-pressed)}.input--type-radio input:not(:checked):not([disabled]):active~label{color:var(--telekom-color-text-and-icon-primary-pressed)}.input--type-radio input:disabled{border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-disabled)}.input--type-radio input:disabled~label{color:var(--telekom-color-text-and-icon-disabled)}.input--type-radio.input--status-error input{border:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard)}.input--type-radio input:checked{border:calc(0.5 * var(--telekom-spacing-composition-space-05)) solid\n    var(--telekom-color-primary-standard)}.input--type-radio input:checked:active{border:calc(0.5 * var(--telekom-spacing-composition-space-05)) solid\n    var(--telekom-color-primary-pressed, #cb0068)}.input--type-radio input:checked:disabled{background:var(--telekom-color-ui-disabled);border:calc(0.5 * var(--telekom-spacing-composition-space-05)) solid\n    var(--telekom-color-ui-border-disabled)}.input--type-radio input:checked:disabled~label{color:var(--telekom-color-text-and-icon-disabled)}.input__textarea-label-safety-background{top:var(--telekom-spacing-composition-space-02);left:var(--telekom-spacing-composition-space-02);right:var(--telekom-spacing-composition-space-02);position:absolute;pointer-events:none;border-radius:var(--telekom-radius-standard);height:var(--telekom-spacing-composition-space-08);background-color:var(--telekom-color-background-surface, #ffffff)}.input--disabled .input__textarea-label-safety-background{background-color:transparent}.input--disabled label,.input--disabled .input__label,.input--disabled input,.input--disabled .input__input,.input--disabled .input__checkbox-container,.input--disabled .input__radio,.input--disabled .input__select,.input--disabled .input__textarea,.input--disabled .input__helper-text{cursor:not-allowed;border-color:var(--telekom-color-ui-disabled);color:var(--telekom-color-text-and-icon-disabled);background:var(--telekom-color-ui-disabled)}.input--disabled .input__select-wrapper{--icon-color:var(--telekom-color-text-and-icon-disabled)}.input--disabled.animated label.input__label{color:var(--telekom-color-text-and-icon-disabled)}";

const SELECT_ICON = 'M20.65 7.4c-.3-.3-.75-.3-1.05 0L12 15 4.4 7.4c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05L12 17.1l8.65-8.65c.3-.25.3-.75 0-1.05z';
const Input = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleInput = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-input", 7);
    this.scaleInputLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleInput", 7);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    this.scaleFocus = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-focus", 7);
    this.scaleFocusLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleFocus", 7);
    this.scaleBlur = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-blur", 7);
    this.scaleBlurLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleBlur", 7);
    this.scaleKeyDown = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-keydown", 7);
    this.scaleKeyDownLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleKeyDown", 7);
    /** (optional) Input type */
    this.type = 'text';
    /** (optional) Input name */
    this.name = '';
    /** (optional) Input label variant */
    this.variant = 'static';
    /** (optional) Input label */
    this.label = '';
    /** (optional) Input size */
    this.size = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input placeHolder */
    this.placeholder = '';
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) Input value */
    this.value = '';
    /** (optional) Makes type `select` behave as a controlled component in React */
    this.controlled = false;
    /** Whether the input element has focus */
    this.hasFocus = false;
    this.internalId = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.g)();
    // Handle checkbox/radio change (click on label)
    this.handleCheckChange = (event) => {
      this.checked = event.target.checked;
    };
    // Handle click on checkbox visual element
    this.handleCheckboxClick = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
      }
    };
    // Handle change on <select> independently
    // so we can allow "controlled" (React) behavior,
    // in which only the `value` changing does update
    // the actual <select> value, not the user's input.
    this.handleSelectChange = (event) => {
      const target = event.target;
      if (this.controlled) {
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', { value: target.value });
        this.selectElement.value = String(this.value);
        this.forceUpdate = String(Date.now());
      }
      else {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleInput = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleInput', event);
    };
    this.handleChange = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleFocus = () => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleFocus');
      this.hasFocus = true;
    };
    this.handleBlur = () => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleBlur');
      this.hasFocus = false;
    };
    this.handleKeyDown = (event) => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleKeyDown', event);
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + this.internalId;
    }
    // Default icon for `select` type
    if (this.type === 'select' && this.icon == null) {
      this.icon = SELECT_ICON;
    }
  }
  componentDidLoad() {
    // tslint:disable-next-line:no-console
    (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
      tag: 'deprecated',
      source: this.el,
      type: 'warn',
      extraMessage: `Please use <${{
        select: 'scale-dropdown',
        checkbox: 'scale-checkbox',
        radio: 'scale-radio-button',
        textarea: 'scale-textarea',
      }[this.type] || 'scale-text-field'}> instead.`,
    });
    // Keep this.value up-to-date for type="select".
    // This is important also for React, where `value` is used to control the element state.
    if (this.type === 'select') {
      const select = this.selectElement;
      const selectedValue = select.selectedIndex > -1
        ? select.options[select.selectedIndex].value
        : null;
      // If we have a `value` passed, set it on the <select> element
      // Otherwise, if we have an <option selected>, set its value on `value`
      if (this.value) {
        select.value = String(this.value);
      }
      else if (selectedValue) {
        this.value = selectedValue;
      }
    }
    // This is a workaroud to prevent a bug in Stencil:
    // when using slots without Shadow DOM (possible only with Stencil)
    // sometimes an update in the Light DOM does not trigger a re-render
    // thus causing unexpected results.
    // https://gitlab.com/scale-ds/scale-telekom/-/issues/16
    if (this.type === 'select' && this.selectElement) {
      this.mutationObserver = new MutationObserver(() => {
        this.forceUpdate = String(Date.now());
      });
      this.mutationObserver.observe(this.el, {
        childList: true,
        subtree: true,
      });
    }
  }
  componentWillUpdate() { }
  componentDidRender() {
    // When type `select` and `controlled` is true,
    // make sure the <select> is always in sync with the value.
    const value = this.value == null ? '' : this.value.toString();
    if (this.type === 'select' &&
      this.controlled &&
      this.selectElement.value.toString() !== value) {
      this.selectElement.value = value;
    }
    if (this.status !== '') {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.el,
      });
    }
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', {
      value: this.value == null ? this.value : this.value.toString(),
    });
  }
  checkedChanged() {
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', { value: this.checked });
  }
  render() {
    const Tag = this.type === 'textarea' ? 'textarea' : 'input';
    const ariaInvalidAttr = this.status === 'error' || this.invalid ? { 'aria-invalid': 'true' } : {};
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    if (this.type === 'checkbox') {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { checked: this.checked }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({ type: "checkbox", name: this.name, id: this.inputId, onChange: this.handleCheckChange, value: this.value, checked: this.checked, disabled: this.disabled }, ariaInvalidAttr, ariaDescribedByAttr)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('input__checkbox-container'), onClick: this.handleCheckboxClick }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('input__checkbox-placeholder') }), !!this.icon && this.checked && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon", { path: this.icon, size: 12 }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: this.inputId }, this.label), !!this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__helper-text" }, this.helperText))))));
    }
    if (this.type === 'radio') {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({ type: "radio", name: this.name, id: this.inputId, onChange: this.handleCheckChange, value: this.value, checked: this.checked, disabled: this.disabled }, ariaInvalidAttr, ariaDescribedByAttr)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: this.inputId }, this.label), !!this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__helper-text" }, this.helperText))))));
    }
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: "input__label", htmlFor: this.inputId }, this.label), this.type === 'select' ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__select-wrapper" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", Object.assign({ ref: (el) => (this.selectElement = el), class: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('input__select'),
      // @ts-ignore
      value: this.value, onChange: this.handleSelectChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, disabled: this.disabled, required: this.required, multiple: this.multiple, id: this.inputId, name: this.name, size: this.visibleSize }, ariaInvalidAttr, ariaDescribedByAttr), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), !!this.icon && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon", { path: this.icon }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({ type: this.type, class: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(`input__${this.type === 'textarea' ? 'textarea' : 'input'}`, this.customResize && this.customResize.id), style: !!this.resize && { resize: this.resize }, value: this.value }, (!!this.name ? { name: this.name } : {}), { required: this.required, minLength: this.minLength, maxLength: this.maxLength, id: this.inputId, onInput: this.handleInput, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, (!!this.placeholder ? { placeholder: this.placeholder } : {}), { disabled: this.disabled }, (!!this.rows ? { rows: this.rows } : {}), (!!this.cols ? { cols: this.cols } : {}), ariaInvalidAttr, ariaDescribedByAttr))), this.type === 'textarea' && this.variant === 'animated' && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "input__textarea-label-safety-background", "aria-hidden": "true" })), (!!this.helperText || !!this.counter) && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, !!this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__helper-text" }, this.helperText)), this.counter && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input__counter" }, !!this.value ? String(this.value).length : 0, " /", ' ', this.maxLength)))))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('input', this.type && `input--type-${this.type}`, this.hasFocus && 'input--has-focus', this.checked && `input--checked`, this.resize && `input--resize-${this.resize}`, this.variant && `input--variant-${this.variant}`, this.disabled && `input--disabled`, this.transparent && 'input--transparent', this.status && `input--status-${this.status}`, this.invalid && `input--status-error`, this.size && `input--size-${this.size}`, this.value != null && this.value !== '' && 'animated');
  }
  get el() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"]
  }; }
};
Input.style = inputCss;




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