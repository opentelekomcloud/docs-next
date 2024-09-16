"use strict";
exports.id = 5361;
exports.ids = [5361];
exports.modules = {

/***/ 8355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ findRootNode),
/* harmony export */   f: () => (/* binding */ findSelected)
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
const findSelected = (structure = [], id, parent) => structure.reduce((acc, item) => {
  if (item.id === id) {
    return { selected: item, parent };
  }
  if (item.children &&
    item.children.length &&
    !!findSelected(item.children, id, item).selected) {
    return findSelected(item.children, id, item);
  }
  return acc;
}, { selected: null, parent: null });
const findRootNode = (structure, id) => {
  let result = findSelected(structure, id);
  while (result.parent) {
    result = findSelected(structure, result.parent.id);
  }
  return result.selected;
};




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

/***/ 5361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_telekom_header_data_back_compat: () => (/* binding */ TelekomHeaderDataBackCompat)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90936);
/* harmony import */ var _menu_utils_ee192675_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8355);
/* harmony import */ var _render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21591);




const telekomHeaderDataBackCompatCss = "/**\n * @license\n * Scale https://github.com/telekom/scale\n *\n * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG\n *\n * This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at https://mozilla.org/MPL/2.0/.\n */\n\n\nscale-telekom-header-data-back-compat .user-menu-mobile {\n  display: block;\n}\n\nscale-telekom-header-data-back-compat .user-menu-desktop {\n  display: none;\n}\n\nscale-telekom-header-data-back-compat .user-menu-desktop scale-menu-flyout {\n  display: flex;\n}\n\nscale-telekom-header-data-back-compat .user-menu-trigger {\n  position: relative;\n  left: 24px;\n}\n\n@media screen and (min-width: 640px) {\n  scale-telekom-header-data-back-compat .user-menu-trigger {\n    top: calc(var(--_spacing-bottom-slotted-bottom) + 8px);\n  }\n}\n\n@media screen and (min-width: 1040px) {\n  scale-telekom-header-data-back-compat .user-menu-mobile {\n    display: none;\n  }\n\n  scale-telekom-header-data-back-compat .user-menu-desktop {\n    display: block;\n  }\n}\n\ndia screen and (--xl) {\n  scale-telekom-header-data-back-compat .user-menu-trigger {\n    top: calc(var(--_spacing-bottom-slotted-bottom) + 12px);\n  }\n}\n";

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
const TelekomHeaderDataBackCompat = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    const { shortName = 'Login', badge, badgeLabel, } = (readData(this.userNavigation) || []).find(({ type }) => type === 'userInfo') || {
      shortName: 'Login',
    };
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-header", { "app-name": this.appName, "app-name-link": this.appNameLink, "app-name-click": this.appNameClick, "logo-href": this.logoHref, "logo-title": this.logoTitle, "logo-hide-title": this.logoHideTitle }, !readData(this.sectorNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-list", { slot: "meta-nav-external", variant: "meta-nav-external", alignment: "left" }, readData(this.sectorNavigation).map((item) => {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: item.href || 'javascript:void(0);', id: item.id, target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    }))), !readData(this.addonNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-list", { slot: "meta-nav", variant: "meta-nav", alignment: "right" }, readData(this.addonNavigation).map((item) => {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: item.href || 'javascript:void(0);', id: item.id, target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    }))), !readData(this.mainNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-list", { variant: "main-nav", slot: "main-nav" }, readData(this.mainNavigation).map((item) => {
      const { selected } = (0,_menu_utils_ee192675_js__WEBPACK_IMPORTED_MODULE_2__.f)(readData(this.mainNavigation), this.activeRouteId);
      const rootNode = selected &&
        (0,_menu_utils_ee192675_js__WEBPACK_IMPORTED_MODULE_2__.a)(readData(this.mainNavigation), selected.id);
      const isActive = (itemId) => rootNode && rootNode.id === itemId;
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", { active: isActive(item.id) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: item.href || 'javascript:void(0);', id: item.id, target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, item.name)), !item.children ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-flyout", { hover: true }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mega-menu", null, item.children.map((child) => {
        return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mega-menu-column", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: child.href || 'javascript:void(0);', target: child.target || '_self', onClick: (event) => {
            if (typeof child.onClick === 'function') {
              child.onClick(event);
            }
          }, slot: "heading" }, child.name), !child.children ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", null, child.children.map((grandChild) => {
          return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: grandChild.href ||
              'javascript:void(0);', target: grandChild.target || '_self', onClick: (event) => {
              if (typeof grandChild.onClick ===
                'function') {
                grandChild.onClick(event);
              }
            } }, grandChild.name)));
        })))));
      }))))));
    }))), !readData(this.iconNavigation) &&
      !readData(this.userNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-list", { variant: "functions", slot: "functions", alignment: "right" }, readData(this.userNavigation).length > 0 && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", { class: "user-menu-desktop" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: "javascript:void(0);", ref: (el) => (this.userMenuDesktopLink = el), onKeyDown: (e) => {
        if ([' ', 'Enter', 'Escape'].includes(e.key)) {
          e.preventDefault();
          this.userMenuDesktopTrigger.click();
        }
      }, onClick: (e) => {
        e.stopPropagation();
        this.userMenuDesktopTrigger.click();
      } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-menu-flyout", { direction: "bottom-left" }, badge ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-badge", { count: badgeLabel, label: shortName, "label-visually-hidden": true }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-user-file-user", null, " "))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-user-file-user", null, " ")), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-menu-flyout-list", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("app-navigation-user-menu", { hide: () => {
        this.userMenuDesktopTrigger.click();
        this.userMenuDesktopLink.focus();
      }, navigation: readData(this.userNavigation) })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { slot: "trigger", class: "user-menu-trigger", ref: (el) => (this.userMenuDesktopTrigger = el) }))))), readData(this.userNavigation).length > 0 && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", { class: "user-menu-mobile" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { ref: (el) => {
        this.userMenuMobileTrigger = el;
      } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-badge", { count: badgeLabel, label: shortName, "label-visually-hidden": true }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-user-file-user", null, " "))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-flyout", { variant: "mobile" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mobile-flyout-canvas", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("app-navigation-user-menu", { slot: "mobile-main-nav", hide: () => {
        this.userMenuMobileTrigger.click();
        this.userMenuMobileTrigger.focus();
      }, navigation: readData(this.userNavigation) }))))), (readData(this.iconNavigation) || [])
      .filter(({ id }) => id !== 'menu')
      .map((item) => {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', id: item.id, onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.badgeLabel ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-badge", { count: item.badgeCount, label: item.badgeLabel, "label-visually-hidden": item.labelVisuallyHidden, "aria-label-translation": item.ariaLabelTranslation }, (0,_render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__.r)({
        tag: `scale-icon-${item.icon}`,
        attributes: {},
      }))) : ((0,_render_icon_05777d0c_js__WEBPACK_IMPORTED_MODULE_1__.r)({
        tag: `scale-icon-${item.icon}`,
        attributes: {},
      })))));
    }), !readData(this.mainNavigation) &&
      !readData(this.sectorNavigation) &&
      !readData(this.addonNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", { "hide-on-desktop": true }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-badge", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-menu", null))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-flyout", { variant: "mobile" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mobile-flyout-canvas", { "app-name": this.appName, "app-name-link": this.appNameLink || 'javascript:void(0);', "app-name-click": (event) => {
        if (typeof this.appNameClick === 'function') {
          this.appNameClick(event);
        }
      } }, !readData(this.mainNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mobile-menu", { slot: "mobile-main-nav" }, readData(this.mainNavigation).map((item) => {
      const { selected, parent } = (0,_menu_utils_ee192675_js__WEBPACK_IMPORTED_MODULE_2__.f)(readData(this.mainNavigation), this.activeRouteId);
      const rootNode = selected &&
        (0,_menu_utils_ee192675_js__WEBPACK_IMPORTED_MODULE_2__.a)(readData(this.mainNavigation), selected.id);
      const isRootOpen = (itemId) => rootNode &&
        rootNode.id === itemId &&
        itemId !== this.activeRouteId;
      const isActive = (itemId) => itemId === this.activeRouteId;
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mobile-menu-item", { open: isRootOpen(item.id), active: isActive(item.id) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name), !item.children
        ? null
        : item.children.map((child) => {
          return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mobile-menu-item", { slot: "children", active: isActive(child.id), open: parent && parent.id === child.id }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: child.href || 'javascript:void(0);', target: child.target || '_self', onClick: (event) => {
              if (typeof child.onClick ===
                'function') {
                child.onClick(event);
              }
            } }, child.name), !child.children
            ? null
            : child.children.map((grandChild) => ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-mobile-menu-item", { slot: "children", active: isActive(grandChild.id) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: grandChild.href ||
                'javascript:void(0);', target: grandChild.target || '_self', onClick: (event) => {
                if (typeof grandChild.onClick ===
                  'function') {
                  grandChild.onClick(event);
                }
              } }, grandChild.name))))));
        })));
    }))), !readData(this.sectorNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-list", { variant: "meta-nav", slot: "mobile-meta-nav-external", alignment: "left" }, readData(this.sectorNavigation).map((item) => {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { id: item.id, href: item.href || 'javascript:void(0);', target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    }))), !readData(this.addonNavigation) ? null : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-list", { variant: "meta-nav", slot: "mobile-meta-nav", alignment: "left" }, readData(this.addonNavigation).map((item) => {
      return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-telekom-nav-item", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: item.href || 'javascript:void(0);', id: item.id, target: item.target || '_self', onClick: (event) => {
          if (typeof item.onClick === 'function') {
            item.onClick(event);
          }
        } }, item.name)));
    })))))))))));
  }
};
TelekomHeaderDataBackCompat.style = telekomHeaderDataBackCompatCss;




/***/ })

};
;