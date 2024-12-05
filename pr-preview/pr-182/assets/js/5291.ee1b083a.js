"use strict";
exports.id = 5291;
exports.ids = [5291];
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

/***/ 65291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_slider: () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);





const sliderCss = ":host{--width:368px;--height-track:6px;--background-track:var(--telekom-color-ui-faint);--radius-track:var(--telekom-radius-pill);--spacing-track:var(--telekom-spacing-composition-space-07) 0\n    var(--telekom-spacing-composition-space-06);--spacing-x-inner-track:10px;--background-bar:var(--telekom-color-primary-standard);--radius-thumb:var(--telekom-radius-circle);--size-thumb:24px;--border-color-thumb:rgba(0, 0, 0, 0.05);--background-thumb:var(--telekom-color-ui-white);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--color-focus:var(--telekom-color-functional-focus-standard);--spacing-x-step-marks:8px;--color-step-mark:var(--telekom-color-text-and-icon-additional);--radius-step-mark:var(--telekom-radius-circle);--size-step-mark:4px;--font-label:var(--telekom-text-style-ui);--font-helper-text:var(--telekom-text-style-small-bold);--color-helper-text:var(--telekom-color-text-and-icon-additional)}[part~='base']{width:var(--width)}[part='label-wrapper']{display:flex;justify-content:space-between;align-items:flex-start}[part='label']{font:var(--font-label)}[part='value-text']{font:var(--font-label);font-variant-numeric:tabular-nums}[part='track-wrapper']{display:flex;position:relative;align-items:center}[part='track']{position:relative;box-sizing:border-box;display:flex;align-items:center;margin:var(--spacing-track);width:100%;height:var(--height-track);background:var(--background-track);border-radius:var(--radius-track);border:1px solid transparent}[part='inner-track']{position:absolute;display:flex;align-items:center;left:var(--spacing-x-inner-track);width:calc(100% - var(--spacing-x-inner-track) * 2);height:100%}[part='bar']{height:100%;position:absolute;z-index:1;border-radius:var(--radius-track);background-color:var(--background-bar);border:1px solid transparent}[part~='thumb-wrapper']{position:absolute;z-index:3;display:flex;align-items:center;justify-content:center;width:32px;height:32px;margin-left:-16px;background-color:transparent}[part~='thumb']{--_border:0 0 0 var(--telekom-spacing-composition-space-01)\n    var(--border-color-thumb);width:var(--size-thumb);height:var(--size-thumb);box-sizing:border-box;border-radius:var(--radius-thumb);background-color:var(--background-thumb);box-shadow:var(--_border), var(--shadow-thumb);border:1px solid transparent}[part~='thumb']:focus{outline:var(--telekom-line-weight-highlight) solid var(--color-focus);outline-offset:1px}[part='step-marks']{width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;padding:0 var(--spacing-x-step-marks)}[part='step-mark']{width:var(--size-step-mark);height:var(--size-step-mark);background:var(--color-step-mark);border-radius:var(--telekom-radius-circle)}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='step-mark']{border:2px solid}}[part='meta']{display:flex;justify-content:space-between}[part='helper-text']{font:var(--font-helper-text);color:var(--color-helper-text)}[part~='disabled'] [part='label-wrapper'],[part~='disabled'] [part='helper-text']{color:var(--telekom-color-text-and-icon-disabled)}[part~='disabled'] [part='bar']{background-color:var(--telekom-color-ui-border-disabled)}[part~='disabled'] [part~='thumb-wrapper']{display:none}[part~='thumb-wrapper']:hover{cursor:grab}[part~='thumb-wrapper']:active{cursor:grabbing}[part~='disabled'] [part='track-wrapper']{cursor:not-allowed}:host-context([data-platform='ios']){--height-track:4px;--size-thumb:26px;--size-step-mark:2px}:host([platform='ios']){--height-track:4px;--size-thumb:26px;--size-step-mark:2px}:host-context([data-platform='android']){--background-thumb:var(--telekom-color-primary-standard)}:host([platform='android']){--background-thumb:var(--telekom-color-primary-standard)}:host-context([data-platform='android']) [part~='thumb']{box-shadow:var(--_border), var(--telekom-shadow-raised-standard)}:host([platform='android']) [part~='thumb']{box-shadow:var(--_border), var(--telekom-shadow-raised-standard)}";

const Slider = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    this.scaleInput = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-input", 7);
    this.scaleInputLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleInput", 7);
    /** (optional) the value of the slider */
    this.value = 0;
    /** (optional) multi-thumb */
    this.range = false;
    /** (optional) when `range` is true, the "from" value */
    this.valueFrom = 0;
    /** (optional) when `range` is true, the "to" value */
    this.valueTo = 0;
    /** t(optional) he minimal value of the slider */
    this.min = 0;
    /** (optional) the maximal value of the slider */
    this.max = 100;
    /** (optional) the step size to increase or decrease when dragging slider */
    this.step = 1;
    /** (optional) show a mark for each step */
    this.showStepMarks = false;
    /** (optional) slider display value */
    this.showValue = true;
    /** (optional) slider value unit */
    this.unit = '';
    /** (optional) unit position */
    this.unitPosition = 'after';
    /** (optional) number of decimal places */
    this.decimals = 0;
    /** (optional) disabled  */
    this.disabled = false;
    /** (optional) Aria label for range slider */
    this.innerAriaValueText = '$from to $to';
    // The actual position in % of the slider thumb
    this.position = 0;
    this.positionFrom = 25;
    this.positionTo = 75;
    // Don't know how to make TypeScript handle `this[offsetKey]`
    // private offsetLeft: number;
    // private offsetLeftFrom: number;
    // private offsetLeftTo: number;
    this.activeRangeThumb = null;
    this.internalId = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.g)();
    this.lastThumbZIndex = 3;
    this.onButtonDown = (event) => {
      if (this.disabled) {
        return;
      }
      this.setActiveRangeThumbFromEvent(event);
      this.onDragStart();
      this.addGlobalListeners(event);
    };
    this.onKeyDown = (event) => {
      let steps = 0;
      this.setActiveRangeThumbFromEvent(event);
      if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
        steps = event.key === 'ArrowRight' ? this.step : -this.step;
      }
      if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        steps = event.key === 'ArrowUp' ? this.step * 10 : -this.step * 10;
      }
      const valueKey = this.getKeyFor('value');
      this.setValue(this[valueKey] + steps, valueKey);
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', this.range ? [this.valueFrom, this.valueTo] : this.value);
    };
    this.onDragStart = () => {
      const offsetKey = this.getKeyFor('offsetLeft');
      this.dragging = true;
      this[offsetKey] = this.sliderTrack.getBoundingClientRect().left;
    };
    this.onDragging = (event) => {
      if (!this.dragging) {
        return;
      }
      const valueKey = this.getKeyFor('value');
      const offsetLeftKey = this.getKeyFor('offsetLeft');
      const offsetLeft = this[offsetLeftKey];
      const currentX = this.handleTouchEvent(event).clientX;
      const position = ((currentX - offsetLeft) / this.sliderTrack.offsetWidth) * 100;
      const nextValue = (position * (this.max - this.min)) / 100 + this.min;
      // https://stackoverflow.com/q/14627566
      const roundedNextValue = Math.ceil(nextValue / this.step) * this.step;
      this.setValue(roundedNextValue, valueKey);
    };
    this.onDragEnd = () => {
      this.dragging = false;
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleChange', this.range ? [this.valueFrom, this.valueTo] : this.value);
      this.removeGlobalListeners();
    };
    this.setValue = (nextValue, valueKey = 'value') => {
      this[valueKey] = this.clamp(nextValue);
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleInput', this.range ? [this.valueFrom, this.valueTo] : this.value);
    };
    this.setActiveRangeThumbFromEvent = (event) => {
      if (!this.range) {
        this.activeRangeThumb = null;
        return;
      }
      const part = event.target.part;
      this.activeRangeThumb = part.contains('from') ? 'From' : 'To';
    };
    this.setPosition = (thumb) => {
      const valueKey = this.getKeyFor('value', thumb);
      const positionKey = this.getKeyFor('position', thumb);
      const clampedValue = this.clamp(this[valueKey]);
      // https://stackoverflow.com/a/25835683
      // ((input - min) * 100) / (max - min)
      this[positionKey] =
        ((clampedValue - this.min) * 100) / (this.max - this.min);
    };
    /**
     * Utility function
     * e.g. 'value' -> 'valueFrom' if `activeRangeThumb='From'`
     * @param propName
     * @returns {string} The prop name with the range suffix if needed
     */
    this.getKeyFor = (propName, thumb) => {
      var _a;
      if (this.range) {
        return `${propName}${(_a = this.activeRangeThumb) !== null && _a !== void 0 ? _a : thumb}`;
      }
      return propName;
    };
    this.getTextValue = () => {
      var _a, _b, _c, _d;
      if (this.range) {
        const from = (_a = this.valueFrom) === null || _a === void 0 ? void 0 : _a.toFixed(this.decimals);
        const to = (_b = this.valueTo) === null || _b === void 0 ? void 0 : _b.toFixed(this.decimals);
        return this.unitPosition === 'before'
          ? `${this.unit}${from} - ${this.unit}${to}`
          : `${from}${this.unit} - ${to}${this.unit}`;
      }
      return this.unitPosition === 'before'
        ? `${this.unit}${(_c = this.value) === null || _c === void 0 ? void 0 : _c.toFixed(this.decimals)}`
        : `${(_d = this.value) === null || _d === void 0 ? void 0 : _d.toFixed(this.decimals)}${this.unit}`;
    };
    this.getNumberOfSteps = () => {
      const n = (this.max - this.min) / this.step + 1;
      return [...Array(n).keys()];
    };
    this.clamp = (val) => {
      let min = this.min;
      let max = this.max;
      // Take into account the other thumb, when `range=true`
      if (this.range) {
        if (this.activeRangeThumb === 'From') {
          max = Math.min(this.valueTo, this.max);
        }
        else if (this.activeRangeThumb === 'To') {
          min = Math.max(this.valueFrom, this.min);
        }
      }
      // Regular generic clamp
      return Math.min(Math.max(val, min), max);
    };
    this.onDragging = this.onDragging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  handleValueChange() {
    this.setPosition();
  }
  componentWillLoad() {
    if (this.sliderId == null) {
      this.sliderId = 'slider-' + this.internalId;
    }
    // Set initial position
    if (this.range) {
      this.setPosition('From');
      this.setPosition('To');
    }
    else {
      this.setPosition();
    }
  }
  disconnectedCallback() {
    this.removeGlobalListeners();
  }
  componentDidLoad() {
    if (this.customColor !== undefined) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: `Property "customColor" is deprecated. 
          Please use css variable "--background-bar" to set the slider-bar color;
          e.g. <scale-slider value="20" style="--background-bar: green"></scale-slider>`,
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.thumbLarge !== undefined) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: `Property "thumbLarge" is deprecated.`,
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.trackSmall !== undefined) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: `Property "trackSmall" is deprecated.`,
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  handleTouchEvent(event) {
    return event.type.indexOf('touch') === 0 ? event.touches[0] : event;
  }
  addGlobalListeners(e) {
    this.lastThumbZIndex = this.lastThumbZIndex + 1;
    e.target.parentNode.style.zIndex = this.lastThumbZIndex.toString();
    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('mouseup', this.onDragEnd);
    window.addEventListener('touchmove', this.onDragging);
    window.addEventListener('touchend', this.onDragEnd);
  }
  removeGlobalListeners() {
    window.removeEventListener('mousemove', this.onDragging);
    window.removeEventListener('mouseup', this.onDragEnd);
    window.removeEventListener('touchmove', this.onDragging);
    window.removeEventListener('touchend', this.onDragEnd);
  }
  getRangeAriaValueText() {
    const filledText = this.innerAriaValueText
      .replace(/\$from/g, `${this.valueFrom}`)
      .replace(/\$to/g, `${this.valueTo}`);
    return filledText;
  }
  render() {
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.disabled && 'disabled') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "label-wrapper" }, !!this.label && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { part: "label", id: `${this.sliderId}-label`, htmlFor: this.sliderId }, this.label)), this.showValue && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "value-text" }, this.getTextValue()))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "track-wrapper" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "track", ref: (el) => (this.sliderTrack = el) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "bar", style: {
        left: (this.range ? this.positionFrom : 0) + '%',
        width: `${this.range
          ? this.positionTo - this.positionFrom
          : this.position}%`,
      } }), this.showStepMarks && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "step-marks" }, this.getNumberOfSteps().map(() => ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "step-mark" }))))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "inner-track" }, this.range ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "thumb-wrapper from", style: { left: `${this.positionFrom}%` }, onMouseDown: this.onButtonDown, onTouchStart: this.onButtonDown }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({ part: "thumb from", tabindex: "0", role: "slider", id: this.sliderId + '-from', "aria-valuemin": this.min, "aria-valuenow": `${this.valueFrom} to ${this.valueTo}`, "aria-valuemax": this.max, "aria-valuetext": `${this.valueFrom} to ${this.valueTo}`, "aria-labelledby": `${this.sliderId}-label`, "aria-orientation": "horizontal", "aria-disabled": this.disabled }, (this.helperText ? ariaDescribedByAttr : {}), { onKeyDown: this.onKeyDown }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "thumb-wrapper to", style: { left: `${this.positionTo}%` }, onMouseDown: this.onButtonDown, onTouchStart: this.onButtonDown }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({ part: "thumb to", tabindex: "0", role: "slider", id: this.sliderId + '-to', "aria-valuemin": this.min, "aria-valuenow": this.value, "aria-valuemax": this.max, "aria-valuetext": this.getRangeAriaValueText(), "aria-labelledby": `${this.sliderId}-label`, "aria-orientation": "horizontal", "aria-disabled": this.disabled }, (this.helperText ? ariaDescribedByAttr : {}), { onKeyDown: this.onKeyDown }))))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "thumb-wrapper", style: { left: `${this.position}%` }, onMouseDown: this.onButtonDown, onTouchStart: this.onButtonDown }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({ part: "thumb", tabindex: "0", role: "slider", id: this.sliderId, "aria-valuemin": this.min, "aria-valuenow": this.value, "aria-valuemax": this.max, "aria-valuetext": `${this.value}`, "aria-labelledby": `${this.sliderId}-label`, "aria-orientation": "horizontal", "aria-disabled": this.disabled }, (this.helperText ? ariaDescribedByAttr : {}), { onKeyDown: this.onKeyDown }))))))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "hidden", value: this.getTextValue(), name: this.name }), this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "helper-text" }, this.helperText))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "value": ["handleValueChange"],
    "valueFrom": ["handleValueChange"],
    "valueTo": ["handleValueChange"]
  }; }
};
Slider.style = sliderCss;




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