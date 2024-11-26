"use strict";
exports.id = 677;
exports.ids = [677];
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

/***/ 30677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91779);




/**
 * Copy/pasted from https://github.com/andreasbm/focus-trap
 */
/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * We need to traverse each child-depth one at a time because if an element should be skipped
 * (for example because it is hidden) we need to skip all of it's children. If we use querySelectorAll("*")
 * the information of whether the children is within a hidden parent is lost.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
  const matches = [];
  // If the depth is above the max depth, abort the searching here.
  if (depth >= maxDepth) {
    return matches;
  }
  // Traverses a slot element
  const traverseSlot = ($slot) => {
    // Only check nodes that are of the type Node.ELEMENT_NODE
    // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    const assignedNodes = $slot
      .assignedNodes()
      .filter((node) => node.nodeType === 1);
    if (assignedNodes.length > 0) {
      const $slotParent = assignedNodes[0].parentElement;
      return queryShadowRoot($slotParent, skipNode, isMatch, maxDepth, depth + 1);
    }
    return [];
  };
  // Go through each child and continue the traversing if necessary
  // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
  // Therefore we fallback to an empty array if it is undefined.
  const children = Array.from(root.children || []);
  for (const $child of children) {
    // Check if the element and its descendants should be skipped
    if (skipNode($child)) {
      // console.log('-- SKIP', $child);
      continue;
    }
    // console.log('$child', $child);
    // If the element matches we always add it
    if (isMatch($child)) {
      matches.push($child);
    }
    if ($child.shadowRoot != null) {
      // If the element has a shadow root we need to traverse it
      matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
    }
    else if ($child.tagName === 'SLOT') {
      // If the child is a slot we need to traverse each assigned node
      matches.push(...traverseSlot($child));
    }
    else {
      // Traverse the children of the element
      matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
    }
  }
  return matches;
}
/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
  return ($elem.hasAttribute('hidden') ||
    ($elem.hasAttribute('aria-hidden') &&
      $elem.getAttribute('aria-hidden') !== 'false') ||
    // A quick and dirty way to check whether the element is hidden.
    // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
    // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
    // we won't be able to catch it here. We accept it due to the huge performance benefits.
    $elem.style.display === `none` ||
    $elem.style.opacity === `0` ||
    $elem.style.visibility === `hidden` ||
    $elem.style.visibility === `collapse`);
  // If offsetParent is null we can assume that the element is hidden
  // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
  // || $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
  return ($elem.hasAttribute('disabled') ||
    ($elem.hasAttribute('aria-disabled') &&
      $elem.getAttribute('aria-disabled') !== 'false'));
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
  // Discard elements that are removed from the tab order.
  if ($elem.getAttribute('tabindex') === '-1' ||
    isHidden($elem) ||
    isDisabled($elem)) {
    return false;
  }
  return (
  // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
  $elem.hasAttribute('tabindex') ||
    // Anchor tags or area tags with a href set
    (($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) &&
      $elem.hasAttribute('href')) ||
    // Form elements which are not disabled
    $elem instanceof HTMLButtonElement ||
    $elem instanceof HTMLInputElement ||
    $elem instanceof HTMLTextAreaElement ||
    $elem instanceof HTMLSelectElement ||
    // IFrames
    $elem instanceof HTMLIFrameElement);
}

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
 * @see https://www.youtube.com/watch?v=9-6CKCz58A8
 */
function animateTo(element, keyframes, options) {
  const anim = element.animate(keyframes, Object.assign(Object.assign({}, options), { fill: 'both' }));
  anim.addEventListener('finish', () => {
    // @ts-ignore
    anim.commitStyles();
    anim.cancel();
  });
  return anim;
}
const keyframeDefaults = {
  easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
};
const KEYFRAMES = {
  fadeIn: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1 }),
  ],
  fadeOut: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 0 }),
  ],
  fadeInTop: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0, 
      /**
       * we are not using transform here to avoid breaking positioning for nested fixed elements (i.e. a flyout menu in an animated modal)
       * see 'fixed' section @link https://developer.mozilla.org/en-US/docs/Web/CSS/position
       */
      top: '-3rem' }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1, top: 0 }),
  ],
};

const modalCss = ":host{--spacing-x:var(--telekom-spacing-composition-space-06);--background-overlay:var(\n    --telekom-color-background-backdrop,\n    rgba(108, 108, 108, 0.7)\n  );--max-height-window:calc(\n    100vh - (2 * var(--telekom-spacing-composition-space-19))\n  );--radius-window:var(--telekom-radius-large);--box-shadow-window:var(--telekom-shadow-top);--background-window:var(--telekom-color-background-surface);--color-window:var(--telekom-color-text-and-icon-standard);--size-window-small:calc(\n    (6 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (5 * var(--telekom-spacing-composition-space-10))\n  );--size-window-default:calc(\n    (8 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (7 * var(--telekom-spacing-composition-space-10))\n  );--size-window-large:calc(\n    (12 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (11 * var(--telekom-spacing-composition-space-10))\n  );--spacing-x-header:var(--telekom-spacing-composition-space-08);--spacing-y-header:var(--telekom-spacing-composition-space-08);--border-bottom-header-has-scroll:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-subtle);--font-family-heading:var(--telekom-typography-font-family-sans);--font-size-heading:var(--telekom-typography-font-size-callout);--font-weight-heading:var(--telekom-typography-font-weight-extra-bold);--spacing-close-button:var(--telekom-spacing-composition-space-04);--radius-close-button:var(--telekom-radius-standard);--transition-close-button:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--box-shadow-close-button-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard);--color-close-button:var(--telekom-color-text-and-icon-standard);--color-close-button-hover:var(--telekom-color-primary-hovered);--color-close-button-active:var(--telekom-color-primary-pressed);--spacing-x-body-wrapper:var(--telekom-spacing-composition-space-08);--spacing-y-body:var(--telekom-spacing-composition-space-08);--spacing-actions:var(--telekom-spacing-composition-space-06)\n    var(--telekom-spacing-composition-space-08)\n    var(--telekom-spacing-composition-space-08);--spacing-x-actions-slotted:var(--telekom-spacing-composition-space-04);--background-actions-has-scroll:var(\n    --telekom-color-background-surface-subtle\n  )}.modal{top:0;left:0;width:100%;bottom:0;display:none;z-index:100;position:fixed;background:var(--background-overlay);box-sizing:border-box;align-items:center;justify-content:center;padding-left:var(--spacing-x);padding-right:var(--spacing-x)}.modal.modal--is-open{display:flex}.modal__backdrop{top:0;left:0;width:100%;height:100%;z-index:0;position:absolute}.modal__window{width:100%;height:auto;display:flex;z-index:1;position:relative;overflow-y:auto;flex-direction:column;background-color:var(--background-window);color:var(--color-window);max-height:var(--max-height-window);min-height:var(--min-height-window);border-radius:var(--radius-window);box-shadow:var(--box-shadow-window)}.modal__window .modal__body-wrapper{overflow-y:auto;flex-shrink:1;flex-grow:1}.modal--size-small .modal__window{max-width:var(--size-window-small)}.modal--size-default .modal__window{max-width:var(--size-window-default)}.modal--size-large .modal__window{max-width:var(--size-window-large)}@media (max-height: 30em){.modal__window{max-height:calc(100vh - var(--telekom-spacing-composition-space-08))}}.modal__window:after{top:0;left:0;width:100%;border:1px solid transparent;height:100%;content:'';display:block;position:absolute;box-sizing:border-box;pointer-events:none;border-radius:var(--radius-window)}.modal__header{display:flex;align-items:flex-start;flex-shrink:0;justify-content:space-between;margin-left:var(--spacing-x-header);margin-right:var(--spacing-x-header);padding-top:var(--spacing-y-header);padding-bottom:var(--spacing-y-header)}.modal--has-scroll .modal__header{border-bottom:var(--border-bottom-header-has-scroll)}.modal__heading{margin:0;font-family:var(--font-family-heading);font-size:var(--font-size-heading);font-weight:var(--font-weight-heading)}.modal__close-button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;padding:var(--spacing-close-button);margin-bottom:calc(-2 * var(--spacing-close-button));border:0;border-radius:var(--radius-close-button);outline:none;color:var(--color-close-button);background:transparent;transition:var(--transition-close-button);transform:translate(\n    var(--spacing-close-button),\n    calc(-1 * var(--spacing-close-button))\n  );appearance:none;cursor:pointer;user-select:none}.modal__close-button:focus{box-shadow:var(--box-shadow-close-button-focus)}.modal__close-button:hover{color:var(--color-close-button-hover)}.modal__close-button:active{color:var(--color-close-button-active)}.modal__body-wrapper{padding-left:var(--spacing-x-body-wrapper);padding-right:var(--spacing-x-body-wrapper)}.modal--has-body .modal__body-wrapper{min-height:var(--telekom-spacing-related-lg)}.modal--has-body .modal__body{margin-top:0;margin-bottom:0}.modal--has-body:not(.modal--has-actions) .modal__body{margin-bottom:var(--spacing-y-body)}.modal--has-scroll.modal--has-body .modal__body{margin-top:var(--spacing-y-body);margin-bottom:var(--spacing-y-body)}.modal--has-body .modal__body ::slotted(*){font:var(--telekom-text-style-body)}.modal--has-body .modal__body ::slotted(*:not([slot]):first-child){margin-top:0}.modal--has-body .modal__body ::slotted(*:not([slot]):last-of-type){margin-bottom:0}.modal__actions{display:none;flex-shrink:0;justify-content:flex-end;padding:var(--spacing-actions)}.modal__actions ::slotted(*){margin-left:var(--spacing-x-actions-slotted)}.modal--has-actions .modal__actions{display:flex}.modal--align-actions-left .modal__actions{justify-content:flex-start}.modal--has-scroll .modal__actions{background-color:var(--background-actions-has-scroll)}";

const supportsResizeObserver = 'ResizeObserver' in window;
const Modal = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleOpen = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-open", 7);
    this.scaleOpenLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleOpen", 7);
    this.scaleBeforeClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-before-close", 7);
    this.scaleBeforeCloseLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleBeforeClose", 7);
    this.scaleClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close", 7);
    this.scaleCloseLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleClose", 7);
    /** (optional) Modal size */
    this.size = 'default';
    /** (optional) If `true`, the Modal is open. */
    this.opened = false;
    /** (optional) Transition duration */
    this.duration = 200;
    /** (optional) Label for close button */
    this.closeButtonLabel = 'Close';
    /** (optional) title for close button */
    this.closeButtonTitle = 'Close';
    /** (optional) hide close button */
    this.omitCloseButton = false;
    /** (optional) Alignment of action buttons */
    this.alignActions = 'right';
    /** (optional) allow to inject css style {overflow: hidden} to body when modal is open */
    this.allowInjectingStyleToBody = false;
    /** What actually triggers opening/closing the modal */
    this.isOpen = this.opened || false;
    /** Check wheter there are actions slots, style accordingly */
    this.hasActionsSlot = false;
    /** Check wheter there's content in the body, style accordingly */
    this.hasBody = false;
    /** Useful for toggling scroll-specific styles */
    this.hasScroll = false;
    /** store document body original overflow style if applicable, this is useful when modal opens and inject overflow style to body */
    this.bodyOverflowValue = '';
    this.focusableElements = [];
    this.handleKeypress = (event) => {
      if (!this.isOpen) {
        return;
      }
      if (event.key === 'Escape') {
        this.emitBeforeClose('ESCAPE_KEY');
      }
    };
    this.handleTopFocus = () => {
      this.attemptFocus(this.getLastFocusableElement());
    };
    this.handleBottomFocus = () => {
      this.attemptFocus(this.getFirstFocusableElement());
    };
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  /**
   * Set `hasActionsSlot` and `hasBody`.
   */
  componentWillRender() {
    const actionSlots = this.hostElement.querySelectorAll('[slot="action"]');
    const bodySlot = Array.from(this.hostElement.shadowRoot.querySelectorAll('slot')).find((x) => !x.name);
    this.hasActionsSlot = actionSlots.length > 0;
    if (bodySlot != null) {
      this.hasBody = bodySlot.assignedElements().length > 0;
    }
  }
  emitBeforeClose(trigger) {
    const emittedEvents = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleBeforeClose', { trigger });
    const prevented = emittedEvents.some((event) => event.defaultPrevented);
    if (!prevented) {
      this.opened = false;
    }
  }
  componentDidLoad() {
    // Query all focusable elements and store them in `focusableElements`.
    // Needed for the "focus trap" functionality.
    this.focusableElements = queryShadowRoot(this.hostElement.shadowRoot, (el) => isHidden(el) || el.matches('[data-focus-trap-edge]'), isFocusable);
    // Set `hasScroll` state dynamically on resize.
    if (supportsResizeObserver) {
      // @ts-ignore
      this.resizeObserver = new ResizeObserver(() => {
        this.setHasScroll();
      });
      this.resizeObserver.observe(this.modalBody);
    }
    this.setHasScroll();
  }
  setHasScroll() {
    const container = this.modalBody;
    this.hasScroll = container.scrollHeight > container.clientHeight;
  }
  getFirstFocusableElement() {
    return this.focusableElements[0];
  }
  getLastFocusableElement() {
    return this.focusableElements[this.focusableElements.length - 1];
  }
  attemptFocus(element) {
    if (element == null) {
      this.closeButton.focus();
      return;
    }
    element.focus();
  }
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
      if (this.allowInjectingStyleToBody) {
        this.bodyOverflowValue = document.body.style.overflow;
        // The following style will disable body from scrolling when modal is open
        document.body.style.setProperty('overflow', 'hidden');
      }
    }
    else {
      this.close();
      if (this.allowInjectingStyleToBody) {
        // remove injected overflow style or set it to original value
        document.body.style.setProperty('overflow', this.bodyOverflowValue);
      }
    }
  }
  open() {
    this.isOpen = true;
    try {
      animateTo(this.modalWindow, KEYFRAMES.fadeInTop, {
        duration: this.duration,
        delay: this.duration * 0.5,
      });
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeIn, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.attemptFocus(this.getFirstFocusableElement());
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleOpen');
      });
      this.hostElement.addEventListener('keydown', this.handleKeypress);
    }
    catch (err) {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleOpen');
    }
  }
  close() {
    try {
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeOut, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.isOpen = false;
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleClose');
      });
      this.hostElement.removeEventListener('keydown', this.handleKeypress);
    }
    catch (err) {
      this.isOpen = false;
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_2__.e)(this, 'scaleClose');
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: (el) => (this.modalContainer = el), class: this.getCssClassMap(), part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('base', this.isOpen && 'open') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal__backdrop", part: "backdrop", onClick: () => this.emitBeforeClose('BACKDROP') }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-focus-trap-edge": true, onFocus: this.handleTopFocus, tabindex: "0" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal__window", part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('window', this.size && `size-${this.size}`), ref: (el) => (this.modalWindow = el), role: "dialog", "aria-modal": "true", "aria-label": this.heading }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal__header", part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('header', this.hasScroll && 'has-scroll') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2", { class: "modal__heading", part: "heading" }, this.heading), !this.omitCloseButton && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { ref: (el) => (this.closeButton = el), class: "modal__close-button", part: "close-button", onClick: () => this.emitBeforeClose('CLOSE_BUTTON'), "aria-label": this.closeButtonLabel, title: this.closeButtonTitle }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "close-icon" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-circle-close", { decorative: true }))))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: (el) => (this.modalBody = el), class: "modal__body-wrapper", part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('body-wrapper', this.hasBody && 'has-body') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal__body", part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('body', this.hasBody && 'has-body') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal__actions", part: (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('actions', `align-${this.alignActions}`, this.hasActionsSlot && 'has-actions', this.hasScroll && 'has-scroll') }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "action" }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-focus-trap-edge": true, onFocus: this.handleBottomFocus, tabindex: "0" }))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('modal', this.isOpen && 'modal--is-open', this.hasActionsSlot && 'modal--has-actions', `modal--align-actions-${this.alignActions}`, this.hasScroll && 'modal--has-scroll', this.hasBody && 'modal--has-body', this.size && `modal--size-${this.size}`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "opened": ["openedChanged"]
  }; }
};
Modal.style = modalCss;




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