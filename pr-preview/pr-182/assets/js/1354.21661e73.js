"use strict";
exports.id = 1354;
exports.ids = [1354];
exports.modules = {

/***/ 11354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_link: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);


const linkCss = ":host{--spacing-x-icon:var(--telekom-spacing-composition-space-03);--line-offset:0.0625em;--color:var(--telekom-color-text-and-icon-link-standard);--color-line-initial:var(--telekom-color-functional-interaction-subtle);--line-thickness-initial:var(--telekom-line-weight-standard);--color-visited:var(--telekom-color-text-and-icon-link-visited);--color-line-visited:currentColor;--line-thickness-visited:var(--line-thickness-initial);--color-hover:var(--telekom-color-text-and-icon-link-hovered);--color-line-hover:currentColor;--line-thickness-hover:var(--telekom-line-weight-highlight);--color-focus-outline:var(--telekom-color-functional-focus-standard);--color-focus:var(--telekom-color-text-and-icon-link-standard);--color-line-focus:transparent;--line-thickness-focus:0;--color-active:var(--telekom-color-text-and-icon-link-active);--color-line-active:currentColor;--line-thickness-active:var(--telekom-line-weight-highlight);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-line-disabled:transparent;--line-thickness-disabled:var(--line-thickness-initial)}:host{display:inline;margin-bottom:calc(var(--line-offset) + var(--line-thickness-initial))}[part='anchor']{cursor:pointer;outline:none;font-weight:var(--font-weight);color:var(--color);position:relative;display:inline-flex;text-decoration:underline;text-underline-offset:0.1875em;text-underline-position:from-font;text-decoration-thickness:var(\n    --line-thickness,\n    var(--line-thickness-initial)\n  );text-decoration-color:var(--line-color)}[part='anchor']{display:inline-flex;align-items:center}[part='content']{position:relative}slot[name='icon']::slotted(*){position:relative;margin-left:var(--spacing-x-icon)}:host(.reverse) [part='anchor']{flex-direction:row-reverse}:host(.reverse) slot[name='icon']::slotted(*){margin-left:auto;margin-right:var(--spacing-x-icon)}:host(.no-underline){--color-line-initial:transparent;--color-line-visited:transparent;--line-color:transparent}:host(.no-underline) [part='anchor']{text-decoration:none}[part='anchor']:hover,[part='anchor']:focus,[part='anchor']:active,:host(.no-underline) [part='anchor']:hover,:host(.no-underline) [part='anchor']:active{text-decoration:underline}[part='anchor']:hover,:host(.no-underline) [part='anchor']:hover{color:var(--color-hover);text-decoration-color:var(--color-line-hover);text-decoration-thickness:var(\n    --line-thickness-hover,\n    var(--line-thickness-initial)\n  )}[part='anchor']:focus,[part='anchor']:focus-visible{color:var(--color-focus);text-decoration-color:var(--color-line-focus);text-decoration-thickness:var(\n    --line-thickness-focus,\n    var(--line-thickness-initial)\n  );outline:var(--telekom-line-weight-highlight) solid var(--color-focus-outline);outline-offset:var(--telekom-spacing-composition-space-01);border-radius:var(--telekom-radius-small)}[part='anchor']:active,:host(.no-underline) [part='anchor']:active{color:var(--color-active);text-decoration-color:var(--color-line-active);text-decoration-thickness:var(\n    --line-thickness-active,\n    var(--line-thickness-initial)\n  )}[part='anchor']:visited{color:var(--color-visited);text-decoration-color:var(--color-line-visited);text-decoration-thickness:var(\n    --line-thickness-visited,\n    var(--line-thickness-initial)\n  )}:host(.disabled){cursor:not-allowed}:host(.disabled) [part='anchor'],:host(.disabled) [part='anchor']:visited,:host(.disabled) [part='anchor']:hover,:host(.disabled) [part='anchor']:active{color:var(--color-disabled);text-decoration:none;cursor:not-allowed;pointer-events:none}";

const Link = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Disabled link */
    this.disabled = false;
    /** (optional) Remove the initial line from the text (can also be achieved via `--line-thickness-initial: 0`)
     * Remove the line for every state with `--line-thickness: 0`
     */
    this.omitUnderline = false;
    /** (optional) Chnage icon/content slot order */
    this.iconPosition = 'after';
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  getAnchorProps() {
    const props = {
      href: this.href || null,
      tabIndex: this.disabled ? -1 : this.innerTabindex,
      'aria-disabled': `${this.disabled}`,
      download: this.download || null,
      hreflang: this.hreflang || null,
      ping: this.ping || null,
      referrerpolicy: this.referrerpolicy || null,
      rel: this.rel || null,
      target: this.target || null,
      type: this.type || null,
    };
    return Object.assign({}, props);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: {
        disabled: this.disabled,
        reverse: this.iconPosition === 'before',
        'no-underline': this.omitUnderline,
      } }, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", Object.assign({ part: "anchor", ref: (el) => (this.focusableElement = el) }, this.getAnchorProps()), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "content" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "icon" }))));
  }
};
Link.style = linkCss;




/***/ })

};
;