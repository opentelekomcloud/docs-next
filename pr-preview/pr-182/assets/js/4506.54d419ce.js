"use strict";
exports.id = 4506;
exports.ids = [4506];
exports.modules = {

/***/ 64506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_grid: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _valuesTransformation_ce891c3a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98748);



const Grid = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  componentWillLoad() {
    const sizedProps = [
      (0,_valuesTransformation_ce891c3a_js__WEBPACK_IMPORTED_MODULE_1__.c)('columns', this.columns),
      (0,_valuesTransformation_ce891c3a_js__WEBPACK_IMPORTED_MODULE_1__.c)('gutter-y', this.gutterY),
      (0,_valuesTransformation_ce891c3a_js__WEBPACK_IMPORTED_MODULE_1__.c)('gutter-x', this.gutterX),
      (0,_valuesTransformation_ce891c3a_js__WEBPACK_IMPORTED_MODULE_1__.c)('spacing', this.spacing),
    ].filter((sizeProp) => sizeProp);
    const sizableCssStrings = sizedProps.map((sizedProp) => (0,_valuesTransformation_ce891c3a_js__WEBPACK_IMPORTED_MODULE_1__.a)(sizedProp));
    const maxWidthCssStirng = this.maxWidth
      ? `--max-width:${this.maxWidth};`
      : '';
    const styleString = sizableCssStrings.join('') + maxWidthCssStirng;
    this.hostElement.setAttribute('style', styleString);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};




/***/ }),

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ createCssString),
/* harmony export */   c: () => (/* binding */ createBreakpointValuedProp)
/* harmony export */ });
function createCssString(setProp) {
  const values = setProp.breakpointValues;
  if (!isBreakpointValuesEmpty(values)) {
    const filledArray = fillEmptyBreakpointValues(values);
    const valuesObj = transformBreakpointValuesData(filledArray);
    const stringSizesArray = Object.entries(valuesObj).map(([key, value]) => `--${setProp.propName}-${key}:${value}`);
    return stringSizesArray.join(';') + ';';
  }
}
function isBreakpointValuesEmpty(values) {
  let isEmpty = true;
  for (const value of values) {
    if (value.value) {
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
}
function fillEmptyBreakpointValues(values) {
  const filledArray = [...values];
  for (let i = 1; i < filledArray.length; i++) {
    if (!filledArray[i].value) {
      filledArray[i].value = filledArray[i - 1].value;
    }
  }
  return filledArray;
}
function transformBreakpointValuesData(values) {
  return values.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.breakpointName]: v.value })), {});
}
function propsToBreakpointValuesArray(values) {
  return [
    { breakpointName: 'sm', value: values[0] },
    { breakpointName: 'md', value: values[1] },
    { breakpointName: 'lg', value: values[2] },
    { breakpointName: 'xl', value: values[3] },
    { breakpointName: 'xxl', value: values[4] },
  ];
}
function createBreakpointValuedProp(propName, values) {
  if (!propName || !values) {
    return;
  }
  return {
    propName,
    breakpointValues: propsToBreakpointValuesArray(values.split(',')),
  };
}




/***/ })

};
;