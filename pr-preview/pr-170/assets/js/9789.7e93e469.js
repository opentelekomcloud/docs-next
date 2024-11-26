"use strict";
exports.id = 9789;
exports.ids = [9789];
exports.modules = {

/***/ 9789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app_navigation_user_menu: () => (/* binding */ AppNavigationUserMenu),
/* harmony export */   scale_menu_flyout: () => (/* binding */ MenuFlyout),
/* harmony export */   scale_menu_flyout_list: () => (/* binding */ MenuFlyoutList)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21591);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91779);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88114);





const appNavigationUserMenuCss = ":host{--border-width-divider:var(--telekom-spacing-composition-space-01);--color-divider:var(--telekom-color-ui-subtle);--color-menu-item-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-menu-item-active:var(--telekom-color-text-and-icon-primary-pressed);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard)}.app-navigation-user-menu{width:100%;position:relative;min-width:260px}.app-navigation-user-menu__divider{margin:var(--telekom-spacing-composition-space-06) 0;border:0;border-top:var(--border-width-divider) solid var(--color-divider)}@media (min-width: 1040px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-composition-space-05)\n      var(--telekom-spacing-composition-space-08) 0\n      var(--telekom-spacing-composition-space-08)}}@media (max-width: 1039px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-composition-space-08)\n      var(--telekom-spacing-composition-space-06) 0\n      var(--telekom-spacing-composition-space-06)}}.app-navigation-user-menu__user-info--name{font:var(--telekom-text-style-heading-5);margin-bottom:var(--telekom-spacing-composition-space-03)}.app-navigation-user-menu__user-info--email{color:var(--telekom-color-text-and-icon-additional);font:var(--telekom-text-style-body)}.app-navigation-user-menu__item{display:flex;font:var(--telekom-text-style-heading-6);padding:var(--telekom-spacing-composition-space-04)\n    var(--telekom-spacing-composition-space-06);border-radius:calc(var(--telekom-radius-small) / 2);color:var(--telekom-color-text-and-icon-standard);text-decoration:none}@media (min-width: 1040px){.app-navigation-user-menu__item{padding:var(--telekom-spacing-composition-space-04)\n      var(--telekom-spacing-composition-space-08)}}.app-navigation-user-menu__item:hover{color:var(--color-menu-item-hover)}.app-navigation-user-menu__item:active{color:var(--color-menu-item-active)}.app-navigation-user-menu__item:focus{outline:none;box-shadow:var(--box-shadow-focus)}.app-navigation-user-menu__item--icon-prefix{margin-right:var(--telekom-spacing-composition-space-04)}.app-navigation-user-menu__item--icon-suffix{margin-left:var(--telekom-spacing-composition-space-04)}.app-navigation-user-menu__button{padding:var(--telekom-spacing-composition-space-04)\n    var(--telekom-spacing-composition-space-06)}@media (min-width: 1040px){.app-navigation-user-menu__button{padding:var(--telekom-spacing-composition-space-04)\n      var(--telekom-spacing-composition-space-08)}}@media (min-width: 1040px){.app-navigation-user-menu{padding-bottom:var(--telekom-spacing-composition-space-03)}}";

const AppNavigationUserMenu = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.closeMenu = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "closeMenu", 7);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "app-navigation-user-menu" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), this.navigation.map((item) => {
      if (item.type === 'divider') {
        return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("hr", { class: "app-navigation-user-menu__divider", part: "rule-horizontal" }));
      }
      if (item.type === 'userInfo') {
        return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "app-navigation-user-menu__user-info", part: "userInfo" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "app-navigation-user-menu__user-info--name scl-font-variant-heading-4" }, item.name), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "app-navigation-user-menu__user-info--email" }, item.email)));
      }
      if (item.type === 'item') {
        return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', tabindex: 0, class: "app-navigation-user-menu__item", part: "item", onClick: (e) => {
            e.stopImmediatePropagation();
            if (item.onClick) {
              item.onClick(e);
            }
            this.hide();
          }, onKeyDown: (e) => {
            if ([' ', 'Enter'].includes(e.key)) {
              if (item.onClick) {
                e.stopImmediatePropagation();
                e.preventDefault();
                item.onClick(e);
              }
              this.hide();
            }
          } }, item.icon &&
          (!item.iconPosition || item.iconPosition === 'prefix')
          ? (0,_render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__.r)({
            tag: `scale-icon-${item.icon}`,
            attributes: {
              class: `app-navigation-user-menu__item--icon-prefix`,
            },
          })
          : null, item.name, item.icon && item.iconPosition === 'suffix'
          ? (0,_render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__.r)({
            tag: `scale-icon-${item.icon}`,
            attributes: {
              class: `app-navigation-user-menu__item--icon-suffix`,
            },
          })
          : null));
      }
      if (item.type === 'button') {
        return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-button", { class: "app-navigation-user-menu__button", part: "button", onClick: (e) => {
            if (item.onClick) {
              e.stopImmediatePropagation();
              e.preventDefault();
              item.onClick(e);
            }
            this.hide();
          }, onKeyDown: (e) => {
            if ([' ', 'Enter'].includes(e.key)) {
              if (item.onClick) {
                e.stopImmediatePropagation();
                e.preventDefault();
                item.onClick(e);
              }
              this.hide();
            }
          }, href: item.href, variant: item.variant || 'primary' }, item.icon &&
          (!item.iconPosition || item.iconPosition === 'prefix')
          ? (0,_render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__.r)({
            tag: `scale-icon-${item.icon}`,
            attributes: {},
          })
          : null, item.name, item.icon && item.iconPosition === 'suffix'
          ? (0,_render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__.r)({
            tag: `scale-icon-${item.icon}`,
            attributes: {},
          })
          : null));
      }
    }))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
AppNavigationUserMenu.style = appNavigationUserMenuCss;

const menuFlyoutCss = ":host{--spacing-y-list:0;--spacing-x-list:0}";

const MENU_SELECTOR = '.scale-menu-flyout-list';
const isButtonOrLink = (el) => {
  if (el.tagName.toUpperCase() === 'BUTTON' ||
    el.tagName.toUpperCase() === 'A' ||
    el.getAttribute('role') === 'button') {
    return el;
  }
};
const MenuFlyout = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Determines whether the flyout should close when a menu item is selected */
    this.closeOnSelect = true;
    /** (optional) Determines whether the flyout trigger should get the aria-haspopup attribute */
    this.triggerHasPopup = true;
    /** (optional) Set preference for where the menu appears, space permitting */
    this.direction = 'bottom-right';
    this.lists = new Set();
    this.closeAll = () => {
      this.lists.forEach(async (list) => {
        await list.close(); // Wait for `scale-close` event to fire
        list.active = false; // Make sure focus control is right while reopening
      });
    };
    this.toggle = () => {
      const list = this.getListElement();
      if (list.opened) {
        this.closeAll();
        return;
      }
      if (this.direction != null) {
        // Overwrite `direction` in list
        list.direction = this.direction;
      }
      list.trigger = () => this.trigger;
      list.open();
    };
  }
  async handleScaleOpen({ detail }) {
    // Close the previous active list and its parents if
    // - it's not the root and
    // - it's not the one being opened
    // (useful only with "click" interactions)
    const rootList = this.getListElement();
    if (this.activeList &&
      this.activeList.active &&
      this.activeList !== rootList &&
      this.activeList !== detail.list) {
      let list = this.activeList;
      while (list != null && list !== rootList) {
        await list.close(true);
        list = list.parentElement.closest(MENU_SELECTOR);
      }
    }
    this.activeList = detail.list;
  }
  handleScaleSelect({ detail }) {
    if (detail.closeOnSelect === false) {
      return;
    }
    if (this.closeOnSelect) {
      window.requestAnimationFrame(() => {
        this.closeAll();
      });
    }
  }
  handleScaleClose({ detail }) {
    const parent = detail.list != null
      ? detail.list.parentNode.closest(MENU_SELECTOR)
      : null;
    if (parent) {
      window.requestAnimationFrame(() => {
        parent.active = true;
        parent.setFocus();
      });
    }
  }
  handleWindowScroll() {
    this.closeAll();
  }
  handleOutsideClick(event) {
    if ((0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.b)(event, this.hostElement)) {
      this.closeAll();
    }
  }
  handleKeydown(event) {
    if ('Tab' === event.key &&
      !this.hostElement.querySelector('app-navigation-user-menu')) {
      if (this.trigger.tagName === 'SCALE-TELEKOM-NAV-ITEM') {
        this.trigger.firstElementChild.focus();
      }
      this.closeAll();
      return;
    }
  }
  componentDidLoad() {
    const triggerSlot = this.hostElement.querySelector('[slot="trigger"]');
    const tagName = triggerSlot ? triggerSlot.tagName.toUpperCase() : '';
    // TODO a different, more global, solution less dependent on tag names
    // would be great…
    if (triggerSlot && tagName === 'SCALE-BUTTON') {
      this.trigger = triggerSlot.shadowRoot.querySelector('button');
    }
    else if (triggerSlot && tagName === 'SCALE-NAV-ICON') {
      this.trigger = triggerSlot.querySelector('a');
    }
    else {
      this.trigger = triggerSlot;
    }
    this.lists = new Set(Array.from(this.hostElement.querySelectorAll(MENU_SELECTOR)));
    this.setTriggerAttributes();
  }
  setTriggerAttributes() {
    const triggers = Array.from(this.hostElement.querySelectorAll('[role="menuitem"]'))
      .filter((el) => el.querySelector('[slot="sublist"]') != null)
      .concat([isButtonOrLink(this.trigger)])
      .filter((x) => x != null);
    triggers.forEach((el) => {
      if (this.triggerHasPopup) {
        el.setAttribute('aria-haspopup', 'true');
      }
      el.classList.add('scale-menu-trigger');
      el.setAttribute('aria-expanded', 'false');
    });
  }
  getListElement() {
    // TODO use [role="menu"]?
    return Array.from(this.hostElement.children).find((el) => el.tagName.toUpperCase().startsWith('SCALE-MENU-FLYOUT'));
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "trigger", onClick: this.toggle }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "trigger" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
MenuFlyout.style = menuFlyoutCss;

const menuFlyoutListCss = ":host{box-sizing:content-box;position:fixed;z-index:100;pointer-events:none}.menu-flyout-list{display:none;position:absolute;pointer-events:initial;z-index:var(--scl-z-index-20);background:var(--telekom-color-background-surface);border-radius:var(--telekom-radius-standard);box-shadow:var(--telekom-shadow-overlay);overflow-y:hidden;margin-top:var(--spacing-y-list, 0);margin-bottom:var(--spacing-y-list, 0);margin-left:var(--spacing-x-list, 0);margin-right:var(--spacing-x-list, 0)}.menu-flyout-list::after{content:'';display:block;position:absolute;width:calc(100% - 2px);height:calc(100% - 2px);inset:0;border-radius:var(--telekom-radius-standard);border:1px solid transparent;pointer-events:none}.menu-flyout-list--opened{display:flex}.menu-flyout-list__list{padding:20px 0;overflow-y:auto;overflow-y:overlay;overscroll-behavior:contain;width:100%}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-bottom-left,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-right,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-left,.menu-flyout-list--direction-bottom-right{top:calc(100% + var(--telekom-spacing-composition-space-03));left:0;right:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-bottom-right,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-left,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-right,.menu-flyout-list--direction-bottom-left{top:calc(100% + var(--telekom-spacing-composition-space-03));right:0;left:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-top-left,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-right,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-left,.menu-flyout-list--direction-top-right{bottom:calc(100% + var(--telekom-spacing-composition-space-03));left:0;right:auto;top:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-top-right,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-left,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-right,.menu-flyout-list--direction-top-left{bottom:calc(100% + var(--telekom-spacing-composition-space-03));right:0;left:auto;top:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-left,.menu-flyout-list--direction-right{left:calc(100% - var(--telekom-spacing-composition-space-03));top:-20px;right:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-right,.menu-flyout-list--direction-left{right:calc(100% - var(--telekom-spacing-composition-space-03));top:-20px;left:auto;bottom:auto}.menu-flyout-list__scroll-up-indicator,.menu-flyout-list__scroll-down-indicator{position:absolute;width:0;border:5px solid transparent;pointer-events:none;opacity:0;left:50%}.menu-flyout-list__scroll-up-indicator{top:var(--telekom-spacing-composition-space-04);border-bottom:5px solid var(--telekom-color-ui-faint);border-top:0}.menu-flyout-list__scroll-down-indicator{bottom:var(--telekom-spacing-composition-space-04);border-top:5px solid var(--telekom-color-ui-faint);border-bottom:0}.menu-flyout-list--can-scroll-up .menu-flyout-list__scroll-up-indicator{opacity:1}.menu-flyout-list--can-scroll-down .menu-flyout-list__scroll-down-indicator{opacity:1}.menu-flyout-list--brand-header-dropdown ::slotted(scale-menu-flyout-item){--_min-width-moz:0;--_min-width:0}";

const PAD = 10;
const ITEM_ROLES = ['menuitem', 'menuitemcheckbox', 'menuitemradio'];
const MenuFlyoutList = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleOpen = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-open", 7);
    this.scaleOpenLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleOpen", 7);
    this.scaleClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close", 7);
    this.scaleCloseLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleClose", 7);
    /** Used to force a re-render */
    this.forceRender = 0;
    /** */
    this.opened = false;
    /** (optional) Set preference for where the menu appears, space permitting */
    this.direction = 'bottom-right';
    /**  */
    this.active = false;
    /** (optional) Determines whether the flyout should close when a menu item is selected */
    this.closeOnSelect = true;
    /** (optional) set to true when using in telekom-brand-header */
    this.brandHeaderDropdown = false;
    /** (optional) set to true to prevent flipping orientation when off the screen vertically  */
    this.preventFlipVertical = false;
    /** Flags to know if content scrollable */
    this.canScrollUp = false;
    this.canScrollDown = false;
    /** When menu off the screen horizontally */
    this.flipHorizontal = false;
    /** When menu off the screen vertically */
    this.flipVertical = false;
    /** Set true when resize or when opened */
    this.needsCheckPlacement = true;
    this.handleScroll = () => {
      this.updateScrollIndicators();
    };
    this.handleWheel = (event) => {
      // TODO not sure this is doing anything atm
      this.stopWheelPropagation(event);
    };
  }
  get triggerRect() {
    return this.trigger().getBoundingClientRect();
  }
  componentDidLoad() {
    if (!this.hostElement.hasAttribute('role')) {
      this.hostElement.setAttribute('role', 'menu');
    }
  }
  componentDidRender() {
    if (this.opened && this.needsCheckPlacement) {
      this.setSize();
      this.checkPlacement();
    }
  }
  async open() {
    this.opened = true;
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleOpen', { list: this.hostElement });
  }
  async close(silent = false) {
    if (this.active && silent !== true) {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_3__.e)(this, 'scaleClose', { list: this.hostElement });
    }
    this.opened = false;
  }
  async setFocus() {
    if (this.focusedItemIndex != null) {
      this.focusItem();
    }
    else {
      this.setInitialItemsFocus();
    }
  }
  handleResize() {
    this.close();
  }
  handleKeydown(event) {
    if (!this.active) {
      return;
    }
    if (!this.hostElement.querySelector('app-navigation-user-menu')) {
      event.preventDefault();
    }
    if ('ArrowDown' === event.key) {
      this.shiftItemsFocus();
      return;
    }
    if ('ArrowUp' === event.key) {
      this.shiftItemsFocus(-1);
      return;
    }
    if ('ArrowLeft' === event.key || 'Escape' === event.key) {
      this.close();
      return;
    }
    if (' ' === event.key ||
      'Enter' === event.key ||
      'ArrowRight' === event.key) {
      const item = this.items[this.focusedItemIndex];
      if (item != null) {
        item.triggerEvent(event, this.closeOnSelect);
      }
    }
  }
  /**
   * We handle item clicks here, to avoid setting up
   * listeners on every item
   */
  handleClick(event) {
    const roleSelector = ITEM_ROLES.map((role) => `[role="${role}"]`).join(',');
    const item = event.target.closest(roleSelector);
    if (item != null) {
      event.stopImmediatePropagation();
      item.triggerEvent(event, this.closeOnSelect);
    }
  }
  /**
   * Focus newly selected item
   */
  handleScaleSelect({ detail }) {
    if (this.active && this.opened) {
      const index = this.items.findIndex((x) => x === detail.item);
      if (index != null) {
        this.focusedItemIndex = index;
        this.focusItem();
      }
    }
  }
  /**
   * Set `active` to false when a descendant opens
   */
  handleScaleOpen({ detail }) {
    if (detail.list !== this.hostElement) {
      this.active = false;
    }
  }
  openedChanged() {
    if (!this.opened) {
      this.active = false;
      this.focusedItemIndex = null;
      // Reset checks for boundary-aware placement
      this.needsCheckPlacement = true;
      this.flipHorizontal = false;
      this.flipVertical = false;
      this.hostElement.style.marginLeft = '';
      this.hostElement.style.marginTop = '';
      this.hostElement.style.marginRight = '';
      this.hostElement.style.marginBottom = '';
      if (this.trigger().tagName === 'SCALE-TELEKOM-NAV-ITEM') {
        this.trigger().style.color =
          'var(--telekom-color-text-and-icon-standard)';
      }
    }
    if (this.opened) {
      this.active = true;
      this.setFocus();
      this.setWindowSize();
      this.setPosition();
      this.padForNonOverlayScrollbars();
      this.updateScrollIndicators();
    }
    this.updateTriggerAttributes();
  }
  setInitialItemsFocus() {
    this.items = this.getListItems();
    this.focusedItemIndex = -1;
    if (this.items.length > 0) {
      this.shiftItemsFocus();
    }
  }
  shiftItemsFocus(direction = 1) {
    let nextIndex = this.focusedItemIndex + direction;
    if (nextIndex === this.items.length) {
      nextIndex = 0;
    }
    else if (nextIndex < 0) {
      nextIndex = this.items.length - 1;
    }
    this.focusedItemIndex = nextIndex;
    this.focusItem();
  }
  focusItem() {
    window.requestAnimationFrame(() => {
      try {
        this.items[this.focusedItemIndex].focus();
      }
      catch (err) { }
    });
  }
  updateTriggerAttributes() {
    const trigger = this.trigger();
    if ((trigger && trigger.getAttribute('aria-haspopup') === 'true') ||
      trigger.classList.contains('scale-menu-trigger')) {
      trigger.setAttribute('aria-expanded', String(this.opened));
    }
  }
  setWindowSize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
  setPosition() {
    const { top, left } = this.triggerRect;
    this.hostElement.style.left = !this.brandHeaderDropdown
      ? `${left}px`
      : `${left - 4}px`;
    if (this.trigger().tagName === 'SCALE-TELEKOM-NAV-ITEM') {
      this.hostElement.style.top = `${top - 12}px`;
      this.hostElement.style.left = `${left - 24}px`;
      this.trigger().style.color =
        'var(--telekom-color-text-and-icon-primary-standard)';
    }
    else {
      this.hostElement.style.top = `${top}px`;
    }
  }
  setSize() {
    const { width, height } = this.triggerRect;
    this.hostElement.style.height = `${height}px`;
    this.hostElement.style.width = `${width}px`;
    if (this.brandHeaderDropdown) {
      this.base.style.width = `240px`;
    }
  }
  checkPlacement() {
    this.needsCheckPlacement = false;
    let isOutOfBounds = false;
    const rect = this.base.getBoundingClientRect();
    // Check horizontal flips
    if (rect.left < PAD) {
      // console.log('off left edge');
      isOutOfBounds = true;
      if (this.direction.includes('left')) {
        this.flipHorizontal = true;
      }
    }
    if (rect.right > this.windowWidth - PAD) {
      // console.log('off right edge');
      isOutOfBounds = true;
      if (this.direction.includes('right')) {
        this.flipHorizontal = true;
      }
    }
    // Check vertical flips
    if (rect.top < PAD) {
      // console.log('off top edge');
      isOutOfBounds = true;
      if (this.direction.includes('top') && !this.preventFlipVertical) {
        this.flipVertical = true;
      }
    }
    if (rect.bottom > this.windowHeight - PAD) {
      // console.log('off bottom edge');
      isOutOfBounds = true;
      if (this.direction.includes('bottom') && !this.preventFlipVertical) {
        this.flipVertical = true;
      }
    }
    if (isOutOfBounds) {
      this.furtherAdjustPlacement();
    }
  }
  furtherAdjustPlacement() {
    // Apply flip class changes immediately to avoid frame flash
    this.base.className = this.getCssClassMap();
    // Force layout and style recalculation
    window.getComputedStyle(this.base);
    const rect = this.base.getBoundingClientRect();
    // TODO: add more functionality for order of priority of which edge to snap to
    // Shift to be snapped to a padded edge
    // Note can't use transform as it creates
    // a relative parent for nested position fixed elements
    let left = 0;
    let top = 0;
    if (rect.left < PAD) {
      // console.log('still off left edge');
      left = PAD - rect.left;
    }
    else if (rect.right > this.windowWidth - PAD) {
      // console.log('still off right edge');
      left = this.windowWidth - PAD - rect.right;
    }
    if (rect.top < PAD) {
      // console.log('still off top edge');
      top = PAD - rect.top;
    }
    else if (rect.bottom > this.windowHeight - PAD) {
      // console.log('still off bottom edge');
      top = this.windowHeight - PAD - rect.bottom;
    }
    this.hostElement.style.marginLeft = `${left}px`;
    this.hostElement.style.marginTop = `${top}px`;
    this.hostElement.style.marginRight = `${-left}px`;
    this.hostElement.style.marginBottom = `${-top}px`;
    // Re-render visibly next frame with correct placement to update vdom
    setTimeout(() => this.forceRender++);
  }
  /**
   * Add scrollbar width to menu, to avoid horizontal scrollbars
   * or scrollbar forcing text-overflow.
   * (This affects Firefox and Safari, where non-overlay scrollbars
   * eat into content width rather than add)
   */
  padForNonOverlayScrollbars() {
    this.base.style.paddingRight = `0px`;
    const scrollbarWidth = this.base.offsetWidth - this.base.clientWidth;
    this.base.style.paddingRight = `${scrollbarWidth}px`;
  }
  updateScrollIndicators() {
    // Reset
    this.canScrollDown = false;
    this.canScrollUp = false;
    const diff = this.list.scrollHeight - this.list.clientHeight;
    // Not scrollable
    if (diff) {
      if (this.list.scrollTop > 0) {
        this.canScrollUp = true;
      }
      if (this.list.scrollTop < diff) {
        this.canScrollDown = true;
      }
    }
    this.forceRender++;
  }
  /**
   * Check if going in a direction with content to reach, otherwise stop
   */
  stopWheelPropagation(event) {
    // This is enough for Chrome
    event.stopPropagation();
    // Needed for Safari and Firefox to prevent scrolling on non-scrollable lists
    if (!this.canScrollDown && !this.canScrollUp) {
      event.preventDefault();
    }
    // Needed for Safari to prevent scrolling past the end of a scrollable list
    if (event.deltaY > 0 && !this.canScrollDown) {
      event.preventDefault();
    }
    if (event.deltaY < 0 && !this.canScrollUp) {
      event.preventDefault();
    }
  }
  getListItems() {
    return Array.from(this.hostElement.children).filter((el) => ITEM_ROLES.includes(el.getAttribute('role')));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__.c)('menu-flyout-list', `menu-flyout-list--direction-${this.direction}`, this.opened && 'menu-flyout-list--opened', this.canScrollUp && 'menu-flyout-list--can-scroll-up', this.canScrollDown && 'menu-flyout-list--can-scroll-down', this.flipHorizontal && `menu-flyout-list--flip-horizontal`, this.flipVertical && `menu-flyout-list--flip-vertical`, this.brandHeaderDropdown && `menu-flyout-list--brand-header-dropdown`);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { class: "scale-menu-flyout-list" }, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap(), ref: (el) => (this.base = el), part: "base", style: { maxHeight: `calc(${this.windowHeight}px - 20px)` }, onWheelCapture: this.handleWheel }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "menu-flyout-list__list", ref: (el) => (this.list = el), onScroll: this.handleScroll }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": "true", class: "menu-flyout-list__scroll-up-indicator" }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": "true", class: "menu-flyout-list__scroll-down-indicator" }))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "opened": ["openedChanged"]
  }; }
};
MenuFlyoutList.style = menuFlyoutListCss;




/***/ }),

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
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);


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