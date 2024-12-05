"use strict";
exports.id = 6163;
exports.ids = [6163];
exports.modules = {

/***/ 13299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrow),
/* harmony export */   c: () => (/* binding */ computePosition),
/* harmony export */   f: () => (/* binding */ flip),
/* harmony export */   o: () => (/* binding */ offset),
/* harmony export */   p: () => (/* binding */ platform),
/* harmony export */   s: () => (/* binding */ shift)
/* harmony export */ });
const min = Math.min;
const max = Math.max;
const round = Math.round;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

function getCssDimensions(element) {
  const css = getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

const getElementRects = async function (_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...(await getDimensionsFn(floating))
    }
  };
};

function isRTL(element) {
  return getComputedStyle(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};




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

/***/ 16163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale_dropdown_select: () => (/* binding */ DropdownSelect),
/* harmony export */   scale_dropdown_select_item: () => (/* binding */ DropdownSelectItem),
/* harmony export */   scale_icon_action_hide_password: () => (/* binding */ ActionHidePassword),
/* harmony export */   scale_icon_action_sort: () => (/* binding */ ActionSort),
/* harmony export */   scale_icon_content_sort_indicator_down: () => (/* binding */ ContentSortIndicatorDown),
/* harmony export */   scale_icon_content_sort_indicator_up: () => (/* binding */ ContentSortIndicatorUp),
/* harmony export */   scale_icon_service_settings: () => (/* binding */ ServiceSettings),
/* harmony export */   scale_menu_flyout_item: () => (/* binding */ MenuFlyoutItem),
/* harmony export */   scale_pagination: () => (/* binding */ Pagination),
/* harmony export */   scale_progress_bar: () => (/* binding */ ProgressBar),
/* harmony export */   scale_switch: () => (/* binding */ Switch),
/* harmony export */   scale_tag: () => (/* binding */ Tag),
/* harmony export */   scale_text_field: () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68555);
/* harmony import */ var _index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88114);
/* harmony import */ var _status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94200);
/* harmony import */ var _floating_ui_dom_esm_43ac86e1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13299);
/* harmony import */ var _utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91779);






const dropdownSelectCss = ":host{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-composition-space-13);--color:var(--telekom-color-text-and-icon-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--background-hover:var(--telekom-color-ui-state-fill-hovered);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border-invalid:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-hovered);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--spacing-x:var(--telekom-spacing-composition-space-05);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--spacing-x-for-helper-text:var(--telekom-spacing-composition-space-03);--transition-combobox:var(--transition);--background-combobox:var(--telekom-color-ui-state-fill-standard);--spacing-combobox:1.125rem\n    calc(2rem - var(--telekom-spacing-composition-space-01)) 0.25rem\n    calc(0.75rem - var(--telekom-spacing-composition-space-01));--spacing-y-meta:var(--telekom-spacing-composition-space-03);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:20px;--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--transform-label:translate(var(--spacing-x), 0.875rem);--transform-label-animated:translate(\n    var(--spacing-x),\n    calc(0.25rem + var(--telekom-spacing-composition-space-01))\n  );--background-listbox:var(--telekom-color-background-surface);--box-shadow-listbox:0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    0 4px 16px 0 rgba(0, 0, 0, 0.1);--max-height-listbox:300px;--z-index-listbox:99}[part='combobox-container'] *,[part='combobox-container'] *::before,[part='combobox-container'] *::after{box-sizing:border-box}[part='combobox-container']{display:block;position:relative}[part='combobox']{width:100%;height:var(--height);margin:0;display:flex;align-items:center;outline:none;padding:var(--spacing-combobox);z-index:1;box-sizing:border-box;transition:var(--transition-combobox);font:var(--telekom-text-style-body);border-radius:var(--radius);border:var(--border);box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-combobox);color:var(--color)}[part='combobox-value']{overflow:hidden;text-overflow:ellipsis}[part~='select']:not([part~='disabled']) [part='combobox']:hover~[part='icon']{color:var(--color-icon-hover)}[part~='select']:not([part~='disabled']) [part='combobox']:active~[part='icon']{color:var(--color-icon-active)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:hover{border-color:var(--border-color-hover);background-color:var(--background-hover)}[part~='select']:not([part~='disabled'])[part~='invalid'] [part='combobox']:hover{background-color:var(--background-hover)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:focus{border-color:var(--border-color-focus)}[part~='select']:not([part~='disabled']):not([part~='steal-focus']) [part='combobox']:focus{outline:var(--focus-outline);outline-offset:1px}[part~='invalid'] [part='combobox']{border:var(--border-invalid)}[part~='transparent'] [part='combobox']{background-color:transparent}[part~='disabled'] [part='combobox']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='combobox_value']{width:calc(100%);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}[part='meta']{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}[part='icon']{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}[part~='disabled'] [part='icon']{color:var(--color-disabled)}[part='label']{width:calc(100% - 44px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;top:0;left:0;color:var(--color-label);display:inline-block;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font:var(--telekom-text-style-ui);transform:var(--transform-label)}[part~='animated'] [part='label']{font:var(--telekom-text-style-small-bold);transform:var(--transform-label-animated)}[part~='disabled'] [part='label']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part~='hide-label'] [part='combobox']{padding-top:0.3125rem}[part~='hide-label'] [part='label']{visibility:hidden}[part='listbox']{position:relative}[part='listbox-scroll-container']{max-height:var(--max-height-listbox);overflow-y:auto}[part='listbox-pad']{background:var(--background-listbox);box-shadow:var(--box-shadow-listbox);border-radius:var(--radius);padding:var(--radius) 0;margin-top:var(--telekom-spacing-composition-space-03);left:0;position:absolute;top:100%;width:100%;z-index:var(--z-index-listbox);display:none}[part~='open'] [part='listbox-pad']{display:block}[part~='strategy-fixed'] [part='listbox-pad']{position:fixed}[part~='transparent'] [part='listbox']{background-color:transparent}[part~='option']{color:var(--color)}[part~='option'][part~='disabled']{color:var(--color-disabled);cursor:not-allowed}[part~='option']:not([part~='disabled']):hover{background-color:var(--background-hover)}[part~='option'][part~='current']{outline:var(--focus-outline);outline-offset:-2px;border-radius:var(--radius)}[part~='option'][aria-selected='true']{padding-right:30px;position:relative}[part~='option'][aria-selected='true'] scale-icon-action-checkmark{position:absolute;right:var(--telekom-spacing-composition-space-05);top:var(--telekom-spacing-composition-space-05)}[part~='option'] scale-dropdown-select-item::part(base){padding:var(--telekom-spacing-composition-space-05)}[part~='has-helper-text'] [part~='combobox-container']{margin-bottom:var(--spacing-x-for-helper-text)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.hcm-disabled{display:none}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='listbox-pad']{outline:var(--focus-outline);outline-offset:-2px;border-radius:var(--radius)}.hcm-disabled{display:block}}";

var Actions;
(function (Actions) {
  Actions["Close"] = "Close";
  Actions["CloseSelect"] = "CloseSelect";
  Actions["First"] = "First";
  Actions["Last"] = "Last";
  Actions["Next"] = "Next";
  Actions["Open"] = "Open";
  Actions["PageDown"] = "PageDown";
  Actions["PageUp"] = "PageUp";
  Actions["Previous"] = "Previous";
  Actions["Select"] = "Select";
  Actions["Type"] = "Type";
})(Actions || (Actions = {}));
const DEFAULT_ICON_SIZE$1 = 20;
const isElementValue = (x) => typeof x.value === 'string';
const readValue = (element) => isElementValue(element) ? element.value : null;
const isElementDisabled = (x) => {
  return typeof x.disable === 'boolean';
};
const readDisabled = (element) => {
  const attr = element.getAttribute('disabled');
  return ((attr !== null && `${attr}` !== 'false') ||
    (isElementDisabled(element) ? element.disable : false));
};
const readOptions = (hostElement) => {
  const children = Array.from(hostElement.children);
  const options = children.filter((x) => x.tagName !== 'INPUT' && x.hidden === false);
  return options.map((x) => {
    var _a;
    return ({
      label: x.textContent.trim(),
      value: (_a = x.getAttribute('value')) !== null && _a !== void 0 ? _a : readValue(x),
      disabled: readDisabled(x),
      ItemElement: (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { innerHTML: x.outerHTML }),
    });
  });
};
function getActionFromKey(event, open) {
  const { key, altKey, ctrlKey, metaKey } = event;
  if (!open && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(key)) {
    return Actions['Open'];
  }
  if (key === 'Home') {
    return Actions['First'];
  }
  if (key === 'End') {
    return Actions['Last'];
  }
  if (['Backspace', 'Clear'].includes(key) ||
    (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)) {
    return Actions['Type'];
  }
  if (!open) {
    return;
  }
  if (key === 'ArrowUp' && altKey) {
    return Actions['CloseSelect'];
  }
  if (key === 'ArrowDown' && !altKey) {
    return Actions['Next'];
  }
  switch (key) {
    case 'ArrowUp':
      return Actions['Previous'];
    case 'PageUp':
      return Actions['PageUp'];
    case 'PageDown':
      return Actions['PageDown'];
    case 'Escape':
      return Actions['Close'];
    case 'Enter':
      return Actions['CloseSelect'];
    case ' ':
      return Actions['CloseSelect'];
  }
}
function jumpToIndex(from, action, options) {
  var _a;
  const JUMP_SIZE = 10;
  const findNearestEnabled = (current, step) => {
    let nextIndex = current;
    let nextOption;
    do {
      nextIndex += step;
      nextOption = options[nextIndex];
      if (nextOption === undefined) {
        break;
      }
    } while (nextOption === null || nextOption === void 0 ? void 0 : nextOption.disabled);
    return nextOption ? nextIndex : current;
  };
  let nearest;
  switch (action) {
    case Actions['First']:
      return ((_a = options[0]) === null || _a === void 0 ? void 0 : _a.disabled) ? findNearestEnabled(-1, 1) : 0;
    case Actions['Last']:
      nearest = findNearestEnabled(options.length, -1);
      return nearest === options.length ? -1 : nearest; // rare case when all options are disabled
    case Actions['Previous']:
      nearest = findNearestEnabled(from, from === -1 ? 1 : -1);
      return nearest === options.length ? -1 : nearest; // rare case when all options are disabled
    case Actions['Next']:
      return findNearestEnabled(from, 1);
    case Actions['PageUp']:
      const lowerBound = Math.max(from - JUMP_SIZE, -1);
      return findNearestEnabled(lowerBound, 1);
    case Actions['PageDown']:
      const upperBound = Math.min(from + JUMP_SIZE, options.length);
      nearest = findNearestEnabled(upperBound, -1);
      return nearest === options.length ? -1 : nearest; // rare case when all options are disabled
    default:
      return from;
  }
}
function matchEnabledOptions(options = [], filter) {
  return options.filter((option) => !option.disabled &&
    option.label.toLowerCase().indexOf(filter.toLowerCase()) === 0);
}
function getIndexByChar(values, filter, startIndex = 0) {
  const sortedOptions = [
    ...values.slice(startIndex),
    ...values.slice(0, startIndex),
  ];
  const firstHit = matchEnabledOptions(sortedOptions, filter)[0];
  const allMatchingChars = (array) => array.every((char) => char === array[0]);
  if (firstHit) {
    return values.indexOf(firstHit);
  }
  if (allMatchingChars(filter.split(''))) {
    const hits = matchEnabledOptions(sortedOptions, filter[0]);
    return values.indexOf(hits[0]);
  }
  return -1;
}
function keepInView(activeElement, scrollParent) {
  const { offsetHeight, offsetTop } = activeElement;
  const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;
  const isAboveParent = offsetTop < scrollTop;
  const isBelowParent = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
  if (isBelowParent) {
    return (scrollParent.scrollTop =
      offsetTop + offsetHeight - parentOffsetHeight);
  }
  if (isAboveParent) {
    return (scrollParent.scrollTop = offsetTop);
  }
}
function hasOverflow(element) {
  return element && element.clientHeight < element.scrollHeight;
}
function isInView(element) {
  const rect = element.getBoundingClientRect();
  const parentRect = {
    top: 0,
    left: 0,
    right: window.innerWidth || document.documentElement.clientWidth,
    bottom: window.innerHeight || document.documentElement.clientHeight,
  };
  return (rect.top >= parentRect.top &&
    rect.left >= parentRect.left &&
    rect.bottom <= parentRect.bottom &&
    rect.right <= parentRect.right);
}
let activeDropdown = null;
const DropdownSelect = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleFocus = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-focus", 7);
    this.scaleBlur = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-blur", 7);
    this.scaleKeydown = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-keydown", 7);
    this.comboboxId = 'combobox';
    this.helperText = '';
    this.invalid = false;
    this.variant = 'informational';
    /** @see {@url https://floating-ui.com/docs/computePosition#strategy} */
    this.floatingStrategy = 'absolute';
    /** (optional) to hide the label */
    this.hideLabelVisually = false;
    /** (optional) Screen reader text appended to the selected element */
    this.ariaLabelSelected = 'selected';
    /** (optional) Text displayed in high contrast mode only to indicate disabled state */
    this.hcmLabelDisabled = 'this field is disabled';
    this.options = '';
    this.open = false;
    this.currentIndex = -1;
    this.queryString = '';
    this.queryTimeout = null;
    this.hasFocus = false;
    this.selectOption = (index) => {
      this.currentIndex = index;
      this.value = readOptions(this.hostElement)[index].value;
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleChange', { value: this.value });
    };
    this.handleKeyDown = (event) => {
      var _a;
      const { key } = event;
      const options = readOptions(this.hostElement);
      const action = getActionFromKey(event, this.open);
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleKeydown', event);
      switch (action) {
        case Actions['Last']:
        case Actions['First']:
          this.setOpen(true);
        case Actions['Next']:
        case Actions['Previous']:
        case Actions['PageUp']:
        case Actions['PageDown']:
          event.preventDefault();
          return this.handleOptionChange(jumpToIndex(this.currentIndex, action, options));
        case Actions['CloseSelect']:
          event.preventDefault();
          if ((_a = options[this.currentIndex]) === null || _a === void 0 ? void 0 : _a.disabled) {
            return;
          }
          if (this.currentIndex !== -1) {
            this.selectOption(this.currentIndex);
          }
        case Actions['Close']:
          event.preventDefault();
          return this.setOpen(false);
        case Actions['Type']:
          return this.buildQueryString(key);
        case Actions['Open']:
          event.preventDefault();
          return this.setOpen(true);
      }
    };
    this.handleBlur = () => {
      this.setOpen(false);
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleBlur');
    };
    this.handleFocus = () => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleFocus');
    };
    this.handleClick = () => {
      // * This is a fix to prevent the dropdown from being opened when the user clicks on another combobox.
      // ! https://github.com/telekom/scale/issues/2285
      if (activeDropdown && activeDropdown !== this) {
        activeDropdown.setOpen(false);
      }
      this.setOpen(!this.open);
      activeDropdown = this;
      const indexOfValue = readOptions(this.hostElement).findIndex(({ value }) => value === this.value);
      if (indexOfValue > -1) {
        setTimeout(() => {
          this.bringIntoView(indexOfValue);
        });
      }
    };
  }
  valueChange(newValue) {
    this.currentIndex = readOptions(this.hostElement).findIndex(({ value }) => value === newValue);
    this.updateInputHidden(newValue);
  }
  connectedCallback() {
    (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({ source: this.hostElement, tag: 'beta' });
    this.currentIndex =
      readOptions(this.hostElement).findIndex(({ value }) => value === this.value) || -1;
  }
  componentDidRender() {
    if (!this.open) {
      return;
    }
    if (this.floatingStrategy === 'fixed') {
      this.listboxPadEl.style.width = `${this.comboEl.getBoundingClientRect().width}px`;
    }
    (0,_floating_ui_dom_esm_43ac86e1_js__WEBPACK_IMPORTED_MODULE_3__.c)(this.comboEl, this.listboxPadEl, {
      placement: 'bottom',
      strategy: this.floatingStrategy,
    }).then(({ x, y }) => {
      Object.assign(this.listboxPadEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
  // this workaround is needed to make the component work with form
  // https://github.com/ionic-team/stencil/issues/2284
  componentDidLoad() {
    this.appendInputHidden();
  }
  appendInputHidden() {
    const input = document.createElement('input');
    input.name = this.name;
    input.id = this.name;
    input.value = this.value;
    input.type = 'hidden';
    this.hostElement.appendChild(input);
    this.hiddenInput = input;
  }
  updateInputHidden(value = this.value) {
    this.hiddenInput.value = value;
  }
  handleOptionChange(index) {
    this.currentIndex = index;
    if (index > -1) {
      this.bringIntoView(index);
    }
  }
  bringIntoView(index) {
    const options = this.listboxEl.querySelectorAll('[role=option]');
    if (hasOverflow(this.listboxEl)) {
      keepInView(options[index], this.listboxEl);
    }
    if (!isInView(options[index])) {
      options[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  setOpen(open) {
    if (this.open === open) {
      return;
    }
    if (this.disabled) {
      return;
    }
    this.open = open;
    if (!this.open) {
      this.comboEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      this.comboEl.focus();
      this.currentIndex = -1;
    }
  }
  handleOptionClick(event, index) {
    event.stopPropagation();
    if (readOptions(this.hostElement)[index].disabled) {
      return;
    }
    this.handleOptionChange(index);
    this.selectOption(index);
    this.setOpen(false);
  }
  getSearchString(char) {
    if (typeof this.queryTimeout === 'number') {
      window.clearTimeout(this.queryTimeout);
    }
    this.queryTimeout = window.setTimeout(() => {
      this.queryString = '';
    }, 500);
    this.queryString += char;
    return this.queryString;
  }
  buildQueryString(char) {
    this.setOpen(true);
    const queryString = this.getSearchString(char);
    const queryIndex = getIndexByChar(readOptions(this.hostElement), queryString, this.currentIndex + 1);
    if (queryIndex >= 0) {
      this.handleOptionChange(queryIndex);
    }
    else {
      window.clearTimeout(this.queryTimeout);
      this.queryString = '';
    }
  }
  render() {
    var _a;
    const element = (_a = readOptions(this.hostElement).find(({ value }) => value === this.value)) !== null && _a !== void 0 ? _a : {};
    const ValueElement = element.ItemElement;
    const hasEmptyValueElement = element.value === '';
    const helperTextId = `helper-message-${(0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.g)()}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: this.getBasePartMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "combobox-container" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { id: `${this.comboboxId}-label`, part: "label" }, this.label), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({ ref: (el) => (this.comboEl = el), "aria-controls": `${this.comboboxId}-listbox`, "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "listbox", "aria-labelledby": `${this.comboboxId}-label`, id: this.comboboxId, part: "combobox", role: "combobox", tabindex: this.disabled ? '-1' : '0', onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, (this.open
      ? {
        'aria-activedescendant': (readOptions(this.hostElement)[this.currentIndex] ||
          {}).value,
      }
      : {}), (this.helperText ? ariaDescribedByAttr : {}), (this.invalid ? { 'aria-invalid': 'true' } : {})), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "combobox-value" }, hasEmptyValueElement ? '' : ValueElement)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "listbox-pad", ref: (el) => (this.listboxPadEl = el) }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "listbox-scroll-container", onMouseDown: (e) => {
        e.preventDefault();
      } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: (el) => (this.listboxEl = el), part: "listbox", role: "listbox", id: `${this.comboboxId}-listbox`, "aria-labelledby": `${this.comboboxId}-label`, tabindex: "-1" }, readOptions(this.hostElement).map(({ value, disabled, ItemElement }, index) => ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({ role: "option", part: this.getOptionPartMap(index, disabled), id: value, onClick: (event) => {
        this.handleOptionClick(event, index);
      } }, (value === this.value
      ? { 'aria-selected': 'true' }
      : {}), (disabled ? { 'aria-disabled': 'true' } : {})), ItemElement, value === this.value ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-checkmark", { size: 16 }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "sr-only" }, this.ariaLabelSelected))) : null)))))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "icon" }, this.open ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-collapse-up", { decorative: true, size: DEFAULT_ICON_SIZE$1 })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-collapse-down", { decorative: true, size: DEFAULT_ICON_SIZE$1 })))), this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant, id: helperTextId })), this.disabled && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "hcm-disabled" }, this.hcmLabelDisabled)))));
  }
  getBasePartMap() {
    const animated = this.value != null && this.value !== '';
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('select', this.open && `open`, this.disabled && `disabled`, this.readonly && `readonly`, this.transparent && 'transparent', this.invalid && `invalid`, this.currentIndex > -1 && `steal-focus`, animated && 'animated', this.helperText && 'has-helper-text', this.floatingStrategy && `strategy-${this.floatingStrategy}`, this.hideLabelVisually && 'hide-label');
  }
  getOptionPartMap(index, disabled) {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('option', index === this.currentIndex && `current`, disabled && `disabled`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "value": ["valueChange"]
  }; }
};
DropdownSelect.style = dropdownSelectCss;

const dropdownSelectItemCss = "/*!*option*!*/[part~='base']{display:flex;justify-content:flex-start;align-items:center}[part~='prefix'],[part~='label'],[part~='suffix']{display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1}";

const DropdownSelectItem = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "prefix" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "prefix" })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "label" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "suffix" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "suffix" }))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
DropdownSelectItem.style = dropdownSelectItemCss;

const iconCss$4 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionHidePassword = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M3.815 2.776l.085.074L21.15 20.1c.3.3.3.75 0 1.05a.722.722 0 01-.965.074l-.085-.074L2.85 3.9c-.3-.3-.3-.75 0-1.05a.722.722 0 01.965-.074zM4.2 7.35L5.25 8.4l-.018.017 2.423 2.423A4.67 4.67 0 007.5 12a4.5 4.5 0 004.5 4.5 4.67 4.67 0 00.874-.089l.286-.066 2.285 2.28-.015.005.57.57c-1.2.5-2.5.8-4 .8-4.108 0-6.987-2.283-9.1-4.68l-.364-.425-.35-.423-.334-.421-.476-.62-.726-.981L.3 12l.35-.45.595-.806C1.969 9.776 2.8 8.73 3.774 7.76l.426-.41zM12 4c4.108 0 6.987 2.283 9.1 4.68l.364.425.35.423.334.421.476.62.726.981.35.45-.35.45-.595.806c-.724.968-1.555 2.014-2.529 2.983l-.426.411-1.05-1.05.018-.017-2.423-2.423c.1-.379.152-.768.155-1.16A4.5 4.5 0 0012 7.5a4.67 4.67 0 00-.874.089l-.286.066-2.285-2.28.015-.005L8 4.8c1.2-.5 2.5-.8 4-.8zm-3 8.19l2.8 2.8a3 3 0 01-2.783-2.621L9 12.19zm3.2-3.18a3 3 0 012.783 2.621l.017.179-2.8-2.8z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2.85 2.85a.722.722 0 01.965-.074l.085.074L21.15 20.1c.3.3.3.75 0 1.05a.722.722 0 01-.965.074l-.085-.074L2.85 3.9c-.3-.3-.3-.75 0-1.05zm1.35 4.5L5.25 8.4c-1.1 1.05-2.1 2.3-3.05 3.6l.578.778.39.506.397.494C5.766 16.458 8.287 18.5 12 18.5c.919 0 1.76-.115 2.527-.345l.323-.105L16 19.2c-1.2.5-2.5.8-4 .8-4.108 0-6.987-2.283-9.1-4.68l-.364-.425-.35-.423-.334-.421-.476-.62-.726-.981L.3 12l.35-.45.595-.806C1.969 9.776 2.8 8.73 3.774 7.76l.426-.41zM12 4c4.108 0 6.987 2.283 9.1 4.68l.364.425.35.423.334.421.476.62.726.981.35.45-.35.45-.595.806c-.724.968-1.555 2.014-2.529 2.983l-.426.411-1.05-1.05c1.1-1.05 2.1-2.3 3.05-3.6l-.578-.778-.39-.506-.397-.494C18.234 7.542 15.713 5.5 12 5.5c-.919 0-1.76.115-2.527.345l-.323.105L8 4.8c1.2-.5 2.5-.8 4-.8zm-4.35 6.85l5.5 5.5c-.35.1-.75.15-1.15.15-2.5 0-4.5-2-4.5-4.5 0-.32.032-.64.096-.934l.054-.216zM12 7.5c2.5 0 4.5 2 4.5 4.5 0 .32-.032.64-.096.934l-.054.216-5.5-5.5c.35-.1.75-.15 1.15-.15z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionHidePassword.style = iconCss$4;

const iconCss$3 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionSort = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.25 3.5c.647 0 1.18.492 1.244 1.122l.006.128V14h3.17l-4.42 6.75L12.83 14H16V4.75c0-.69.56-1.25 1.25-1.25zm-10.5-.25L11.17 10H8v9.25a1.25 1.25 0 01-2.494.128L5.5 19.25V10H2.33l4.42-6.75z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M17.25 4c.367 0 .691.294.743.651L18 4.75V14h3.65l-4.4 6.75-4.4-6.75h3.65V4.75c0-.4.35-.75.75-.75zm-10.5-.75l4.4 6.75H7.5v9.25c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L6 19.25V10H2.35l4.4-6.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ActionSort.style = iconCss$3;

const iconCss$2 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentSortIndicatorDown = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.584 9.5l5.417 5 5.416-5z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M6.584 9.5l5.417 5 5.416-5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentSortIndicatorDown.style = iconCss$2;

const iconCss$1 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentSortIndicatorUp = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 9.5l-5.417 5h10.834z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12 9.5l-5.417 5h10.834z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ContentSortIndicatorUp.style = iconCss$1;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceSettings = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
    /** (optional) If `true` the icon can receive focus */
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", null, this.accessibilityTitle), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M20.235 14.5L23 14v-4l-2.765-.5a1 1 0 01-.64-1.555l1.595-2.31-2.825-2.825-2.31 1.595a1 1 0 01-1.555-.64L14 1h-4l-.5 2.76a1 1 0 01-1.555.645L5.635 2.81 2.81 5.635l1.595 2.31a1 1 0 01-.64 1.555L1 10v4l2.76.5a1 1 0 01.645 1.555l-1.595 2.31 2.825 2.825 2.31-1.595a1 1 0 011.555.64L10 23h4l.5-2.765a1 1 0 011.555-.64l2.31 1.595 2.825-2.825-1.595-2.31a1 1 0 01.64-1.555zM12 15a3 3 0 110-6 3 3 0 010 6z", "fill-rule": "evenodd" }))) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", null, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M14 1l.5 2.75a.992.992 0 001.448.71l.102-.06 2.3-1.6 2.85 2.85-1.6 2.3c-.378.567-.087 1.312.537 1.52l.113.03L23 10v4l-2.75.5a.992.992 0 00-.71 1.448l.06.102 1.6 2.3-2.85 2.85-2.3-1.6c-.567-.378-1.312-.087-1.52.537l-.03.113L14 23h-4l-.5-2.75c-.142-.661-.863-1.01-1.448-.71l-.102.06-2.3 1.6-2.85-2.85 1.6-2.3c.378-.567.087-1.312-.537-1.52l-.113-.03L1 14v-4l2.75-.5a.992.992 0 00.71-1.448L4.4 7.95l-1.6-2.3L5.65 2.8l2.3 1.6c.567.378 1.312.087 1.52-.537l.03-.113L10 1h4zm-1.25 1.5h-1.5l-.3 1.5c-.2 1.2-1.25 2.05-2.45 2.05-.438 0-.875-.115-1.246-.345L5.8 4.7 4.75 5.75l.9 1.3c.464.65.584 1.472.318 2.227L5.9 9.45c-.279.743-.902 1.27-1.67 1.462l-.18.038-1.55.3v1.5l1.55.25c.85.15 1.5.7 1.85 1.5a2.426 2.426 0 01-.149 2.247l-.101.153-.9 1.3 1.05 1.05 1.3-.9c.4-.3.9-.45 1.4-.45 1.145 0 2.154.774 2.418 1.889l.332 1.711h1.5l.3-1.55c.2-1.2 1.25-2.05 2.45-2.05.438 0 .875.115 1.246.345L18.2 19.25l1.05-1.05-.9-1.3c-.5-.7-.55-1.6-.25-2.3.279-.743.902-1.27 1.67-1.462l.18-.038 1.55-.3v-1.5l-1.55-.3c-.85-.15-1.5-.7-1.85-1.5a2.426 2.426 0 01.149-2.247l.101-.153.9-1.3-1.05-1.05-1.3.9c-.4.3-.9.45-1.4.45-1.145 0-2.154-.774-2.418-1.889L12.75 2.5zM12 9a3 3 0 110 6 3 3 0 010-6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ServiceSettings.style = iconCss;

const menuFlyoutItemCss = ":host{--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);display:block;position:relative;outline-color:transparent;padding-left:var(--telekom-spacing-composition-space-02);padding-right:var(--telekom-spacing-composition-space-02);--_min-width:fit-content;--_min-width-moz:-moz-fit-content}*{-webkit-tap-highlight-color:rgba(255, 255, 255, 0)}.menu-flyout-item{position:relative;display:flex;align-items:stretch;text-align:left;font-size:var(--telekom-typography-font-size-body);line-height:2.635em;padding:0\n    calc(\n      var(--telekom-spacing-composition-space-08) -\n        var(--telekom-spacing-composition-space-02)\n    );user-select:none;white-space:nowrap;border-radius:0;cursor:pointer;color:var(--telekom-color-text-and-icon-standard);max-width:calc(\n    100vw - 2 * var(--telekom-spacing-composition-space-08) - 2 * 10px\n  );overflow:hidden;min-width:var(--_min-width-moz);min-width:var(--_min-width)}.menu-flyout-item:focus:not(.menu-flyout-item--disabled),.menu-flyout-item:hover:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-hovered)}:host(:focus) .menu-flyout-item:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-standard)}:host(:focus) .menu-flyout-item:hover:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-hovered)}:host(:focus){outline:none}:host(:focus) .menu-flyout-item{outline:var(--focus-outline);border-radius:var(--telekom-radius-small)}:host(:active) .menu-flyout-item:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-pressed)}:host([aria-expanded='true']) .menu-flyout-item{color:var(--telekom-color-text-and-icon-primary-standard)}.menu-flyout-item--disabled{outline:none;color:var(--telekom-color-text-and-icon-disabled);cursor:not-allowed}:host([active])::before{content:'';display:block;position:absolute;top:0;left:0;height:100%;width:0;background-color:var(--telekom-color-primary-standard);border-left:var(--telekom-spacing-composition-space-02) solid transparent}.menu-flyout-item--active{color:var(--telekom-color-text-and-icon-primary-standard)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.menu-flyout-item--disabled:not(.menu-flyout-item--disabled),.menu-flyout-item--active:not(.menu-flyout-item--disabled){color:white;stroke:white}}.menu-flyout-item__label{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}.menu-flyout-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-flyout-item__check,slot[name='prefix']::slotted(:last-of-type){margin-right:var(--telekom-spacing-composition-space-04)}.menu-flyout-item__check{visibility:hidden}:host([aria-checked='true']) .menu-flyout-item__check{visibility:visible}.menu-flyout-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-flyout-item__cascade,slot[name='suffix']::slotted(:first-of-type){margin-left:var(--telekom-spacing-composition-space-06)}";

const MenuFlyoutItem = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleSelect = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-select", 7);
    this.scaleSelectLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleSelect", 7);
    /** (optional) Set to true to display arrow icon suffix */
    this.cascade = false; // TODO rename to `hasMenu`?
    /** (optional) Mark as active */
    this.active = false;
    /** (optional) Set to true to display check prefix, false to display empty prefix */
    this.checked = false;
    /** (optional) Disabled */
    this.disabled = false;
    this.hasSlotSublist = false;
  }
  // TODO there is lot of room for improving this, aka edge-cases
  async triggerEvent(event, closeOnSelect = true) {
    const { key } = event;
    if (this.disabled) {
      return;
    }
    if (key === 'ArrowRight' && !this.hasSlotSublist) {
      return;
    }
    if (this.hasSlotSublist) {
      const sublist = this.hostElement.querySelector('[slot="sublist"]');
      if (sublist.hasAttribute('opened')) {
        sublist.removeAttribute('opened');
      }
      else {
        this.openSublist();
      }
      return;
    }
    const detail = {
      eventType: event.type,
      key,
      item: this.hostElement,
      closeOnSelect,
      originalEvent: event,
    };
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleSelect', detail);
  }
  connectedCallback() {
    this.hasSlotSublist =
      this.hostElement.querySelector('[slot="sublist"]') != null;
    if (this.hasSlotSublist) {
      this.cascade = true;
    }
  }
  openSublist() {
    const sublist = this.hostElement.querySelector('[slot="sublist"]');
    if (sublist == null) {
      return;
    }
    sublist.trigger = () => this.hostElement;
    sublist.direction = 'right';
    sublist.open();
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('menu-flyout-item', this.disabled && 'menu-flyout-item--disabled', this.checkable != null && 'menu-flyout-item--checkable', this.active && 'menu-flyout-item--active');
  }
  render() {
    const checked = this.checked ? 'true' : 'false';
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, { role: this.checkable ? `menuitem${this.checkable}` : 'menuitem', "aria-checked": this.checkable == null ? false : checked, "aria-disabled": this.disabled ? 'true' : undefined, tabindex: "-1" }, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap(), part: "base" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "prefix", class: "menu-flyout-item__prefix" }, this.checkable == null ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "prefix" })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-checkmark", { class: "menu-flyout-item__check", size: 16 }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "label", class: "menu-flyout-item__label" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "suffix", class: "menu-flyout-item__suffix" }, this.cascade ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-right", { class: "menu-flyout-item__cascade", size: 16 })) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "suffix" })))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "sublist" })));
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
MenuFlyoutItem.style = menuFlyoutItemCss;

const paginationCss = ":host{--color:var(--telekom-color-text-and-icon-standard);--radius:var(--telekom-radius-standard);--font-size:var(--telekom-typography-font-size-small);--border:1px solid var(--telekom-color-ui-faint);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-button:var(--telekom-color-ui-subtle);--border-button:var(--border);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--radius-first-prompt:var(--radius) 0 0 var(--radius);--radius-last-prompt:0 var(--radius) var(--radius) 0;--radius-first-prompt-stack:0 0 0 var(--radius);--radius-last-prompt-stack:0 0 var(--radius) 0;--stroke-svg:var(--telekom-color-ui-extra-strong);--stroke-svg-high-contrast:#fff;--width-button:44px;--padding-info:var(--telekom-spacing-composition-space-04);--height-button:44px;--line-height-info:calc(var(--height-button) - 2px)}.pagination{display:flex;overflow:auto;flex-wrap:wrap}.pagination__info,.pagination__info-responsive{color:var(--color);text-align:center;font-size:var(--font-size);font-weight:var(--telekom-typography-font-weight-medium);line-height:var(--line-height-info);padding:0 var(--padding-info);border:var(--border);flex-shrink:0;border-left:0;border-right:0;white-space:nowrap;order:1}.pagination__info-responsive{display:none}.pagination__info span,.pagination__info-responsive span{color:var(--telekom-color-text-and-icon-primary-standard);font-weight:var(--telekom-typography-font-weight-bold)}button{display:flex;flex-shrink:0;justify-content:center;align-items:center;padding:0;margin:0;height:var(--height-button);width:var(--width-button);color:var(--color-button);background:none;border:var(--border-button)}button:focus{outline:var(--focus-outline);outline-offset:-3px}.pagination__first-prompt{border-radius:var(--radius-first-prompt);margin-right:-1px}.pagination__last-prompt{border-radius:var(--radius-last-prompt);margin-left:-1px;order:2}.pagination__next-prompt{order:2}button svg{display:block}button:not(:disabled){cursor:pointer}button:not(:disabled) svg{color:var(--stroke-svg)}button:disabled svg{color:var(--telekom-color-text-and-icon-disabled)}button:not(:disabled):hover{border-color:var(--telekom-color-primary-hovered);z-index:1}button:not(:disabled):hover svg{color:var(--color-hover)}button:not(:disabled):active{border-color:var(--color-active);z-index:1}button:not(:disabled):active svg{color:var(--color-active)}.pagination--hide-borders .pagination__info,.pagination--hide-borders .pagination__info-responsive{border:0}.pagination--hide-borders .pagination__info-responsive{border-bottom:var(--border)}.pagination--hide-borders button{border-radius:0;border-top-width:0;border-bottom-width:0}.pagination--hide-borders .pagination__first-prompt{border-left-color:transparent}.pagination--hide-borders .pagination__last-prompt{border-right-color:transparent}.pagination--hide-borders button:not(:disabled):hover{border-width:1px;border-color:var(--telekom-color-primary-hovered)}.pagination__button-wrapper{display:flex}@media screen and (forced-colors: active), (-ms-high-contrast: active){button:not(:disabled) svg{color:var(--stroke-svg-high-contrast)}}@media screen and (max-width: 639px){:host{width:100%}.pagination{flex-direction:column}.pagination__info-responsive{display:initial;order:0;overflow:auto;border-left:var(--border);border-right:var(--border);border-bottom:0;border-radius:var(--radius) var(--radius) 0 0;line-height:var(--line-height-info)}.pagination__info{display:none;line-height:var(--line-height-info)}.pagination__first-prompt{border-radius:var(--radius-first-prompt-stack)}.pagination__last-prompt{border-radius:var(--radius-last-prompt-stack)}.pagination__next-prompt{margin-left:-1px}button{flex:1;height:var(--height-button)}.pagination--hide-borders .pagination__first-prompt{border-left-width:0}.pagination--hide-borders .pagination__last-prompt{border-right-width:0}}";

const DEFAULT_ICON_SIZE = 20;
const name = 'pagination';
const Pagination = class {
  /* 6. Lifecycle Events (call order) */
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scalePagination = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-pagination", 7);
    this.scalePaginationLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scalePagination", 7);
    /* 2. State Variables (alphabetical) */
    /* 3. Public Properties (alphabetical) */
    /** (optional) Deprecated; hideBorder should replace hideBorders */
    this.hideBorders = false;
    /** (optional) Set to true to hide top and bottom borders */
    this.hideBorder = false;
    /** (optional) Set number of rows/elements to show per page */
    this.pageSize = 10;
    /** (optional) Index of first element to display */
    this.startElement = 0;
    /** (optional) Total number of rows/elements used to calculate page displays */
    this.totalElements = 1;
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) translation to 'Go to first page'  */
    this.ariaLabelFirstPage = 'Go to first page';
    /** (optional) translation to 'Go to next page'  */
    this.ariaLabelNextPage = 'Go to next page';
    /** (optional) translation to 'Go to previous page'  */
    this.ariaLabelPreviousPage = 'Go to previous page';
    /** (optional) translation to 'Go to last page'  */
    this.ariaLabelLastPage = 'Go to last page';
    /* 5. Private Properties (alphabetical) */
    /** Calculated width of largest text so buttons don't move while changing pages */
    this.maxWidth = 100;
  }
  componentWillLoad() {
    this.calculateWidth();
  }
  componentWillUpdate() { }
  componentDidRender() {
    if (this.hideBorders !== false) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "hideBorders" is deprecated. Please use the "hideBorder" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.small !== false) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.size) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  componentDidLoad() { }
  componentDidUpdate() { }
  disconnectedCallback() { }
  /* 7. Listeners */
  calculateWidth() {
    // calculate max possible width
    this.maxWidth = (this.totalElements.toString().length * 3 + 3) * 9;
  }
  /* 8. Public Methods */
  /* 9. Local Methods */
  goFirstPage() {
    this.startElement = 0;
    this.emitUpdate('FIRST');
  }
  goPreviousPage() {
    // Min to prevent going below 0
    this.startElement -= Math.min(this.pageSize, this.startElement);
    this.emitUpdate('PREVIOUS');
  }
  goNextPage() {
    this.startElement += this.pageSize;
    this.emitUpdate('NEXT');
  }
  goLastPage() {
    const p = this.pageSize;
    // Make sure startElement is multiple of pageSize
    this.startElement = Math.ceil((this.totalElements - p) / p) * p;
    this.emitUpdate('LAST');
  }
  emitUpdate(direction) {
    const data = {
      startElement: this.startElement,
      direction,
    };
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scalePagination', data);
  }
  /* 10. Render */
  render() {
    const total = this.totalElements;
    const start = this.startElement + 1;
    const end = Math.min(this.startElement + this.pageSize, total);
    const isAtStart = start === 1;
    const isAtEnd = end === total;
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "info-responsive", class: `${name}__info-responsive` }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, start, "-", end), ' ', "/ ", total), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${name}__button-wrapper` }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "info", class: `${name}__info`, style: { width: `${this.maxWidth}px` } }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, start, "-", end), ' ', "/ ", total), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: `${name}__first-prompt`, part: "first-prompt", disabled: isAtStart, onClick: () => this.goFirstPage(), "aria-label": this.ariaLabelFirstPage }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-double-left", { size: DEFAULT_ICON_SIZE, decorative: true })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: `${name}__prev-prompt`, part: "prev-prompt", disabled: isAtStart, onClick: () => this.goPreviousPage(), "aria-label": this.ariaLabelPreviousPage }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-left", { size: DEFAULT_ICON_SIZE, decorative: true })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: `${name}__next-prompt`, part: "next-prompt", disabled: isAtEnd, onClick: () => this.goNextPage(), "aria-label": this.ariaLabelNextPage }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-right", { size: DEFAULT_ICON_SIZE, decorative: true })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: `${name}__last-prompt`, part: "last-prompt", disabled: isAtEnd, onClick: () => this.goLastPage(), "aria-label": this.ariaLabelLastPage }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-navigation-double-right", { size: DEFAULT_ICON_SIZE, decorative: true }))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(name, (this.hideBorder || this.hideBorders) && `${prefix}hide-borders`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "totalElements": ["calculateWidth"]
  }; }
};
Pagination.style = paginationCss;

const progressBarCss = ":host{--track-color:var(--telekom-color-ui-faint);--bar-color:var(--telekom-color-primary-standard);--icon-color-error:var(--telekom-color-text-and-icon-functional-danger);--track-color-error:var(--telekom-color-functional-danger-subtle);--bar-color-error:var(--telekom-color-functional-danger-standard);--icon-color-success:var(--telekom-color-text-and-icon-functional-success);--track-color-success:var(--telekom-color-functional-success-subtle);--bar-color-success:var(--telekom-color-functional-success-standard);--bar-color-disabled:var(--telekom-color-ui-disabled);--color-disabled:var(--telekom-color-text-and-icon-disabled);--progress-bar-outer-size:6px;--progress-bar-inner-size:var(--telekom-spacing-composition-space-03);--font-label:var(--telekom-text-style-ui);--color-label:var(--telekom-color-text-and-icon-standard);--color-status-description:var(--telekom-color-text-and-icon-additional);--font-status-description:var(--telekom-text-style-small-bold)}.progress-bar{width:100%;max-width:30rem}.progress-bar--disabled{cursor:not-allowed}.progress-bar__top-container{display:flex;justify-content:space-between;align-items:center}.progress-bar--disabled .progress-bar__label,.progress-bar--disabled .progress-bar__status{color:var(--color-disabled)}.progress-bar__label{display:block;padding:var(--telekom-spacing-composition-space-05) 0;color:var(--color-label);font:var(--font-label)}.progress-bar__wrapper{width:100%;display:flex;box-sizing:border-box;align-items:center}.progress-bar__outer{width:100%;height:var(--progress-bar-outer-size);margin-left:0;overflow:hidden;position:relative;border-radius:var(--telekom-radius-pill);background:var(--track-color)}.progress-bar__inner{position:absolute;top:0;left:0;width:var(--progress, 0);height:var(--progress-bar-inner-size);display:flex;align-items:center;white-space:nowrap;justify-content:flex-end;border-radius:var(--telekom-radius-pill);border:1px solid transparent;background:var(--bar-color);transition:width var(--telekom-motion-duration-immediate)\n    var(--telekom-motion-easing-standard)}.progress-bar--disabled .progress-bar__inner{background:var(--bar-color-disabled)}.progress-bar__status{padding:var(--telekom-spacing-composition-space-05) 0;font:var(--font-label);font-variant-numeric:tabular-nums}.progress-bar--completed .progress-bar__icon{color:var(--icon-color-success)}.progress-bar--completed .progress-bar__outer{background:var(--track-color-success)}.progress-bar--completed .progress-bar__inner{background:var(--bar-color-success)}.progress-bar--has-error .progress-bar__icon{color:var(--icon-color-error)}.progress-bar--has-error .progress-bar__outer{background:var(--track-color-error)}.progress-bar--has-error .progress-bar__inner{background:var(--bar-color-error)}.progress-bar__status-description{color:var(--color-status-description);font:var(--font-status-description);margin-top:var(--telekom-spacing-composition-space-04)}.progress-bar__aria-live{clip:rect(0 0 0 0);width:1px;border:0;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute}";

const ICON_SIZE = 16;
let i$1 = 0;
const ProgressBar = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** (optional) Progress bar busy switch */
    this.busy = false;
    /** (required) Progress bar percentage */
    this.percentage = 0;
    /** (optional) Progress bar percentage to start the animation from (default: 0) */
    this.percentageStart = 0;
    /** (optional) Progress bar percentage text */
    this.showStatus = true;
    this.transitions = (width, widthStart) => `
    @keyframes showProgress {
      from {
        width: ${widthStart}%;
      }
      to {
        width: ${width}%;
      }
    }
  `;
    this.progressStyle = () => {
      const customColor = this.customColor
        ? { '--background': this.customColor }
        : {};
      return Object.assign({ '--progress': this.disabled ? '100%' : `${this.percentage}%` }, customColor);
    };
  }
  componentWillLoad() {
    if (this.progressBarId == null) {
      this.progressBarId = 'progress-bar-' + i$1++;
    }
    if (this.disabled) {
      this.showStatus = false;
    }
  }
  componentWillUpdate() { }
  disconnectedCallback() { }
  componentDidRender() {
    if (this.customColor !== undefined) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: `Property "customColor" is deprecated. 
          Please use css variable "--background" to set the progress bar background color;
          e.g. <scale-progress-bar percentage="20" style="--background: green"></scale-progress-bar>`,
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.transitions(this.percentage, this.percentageStart)), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "progress-bar__top-container" }, !!this.label ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { part: "label", class: "progress-bar__label", htmlFor: this.progressBarId }, this.label)) : ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, " ")), !!this.showStatus &&
      !this.hasError &&
      this.percentage <= 100 &&
      this.percentage !== 100 && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "status", class: "progress-bar__status", "aria-hidden": "true" }, this.percentage, "%")), this.hasError ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "progress-bar__icon" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-alert-error", { size: ICON_SIZE }))) : this.percentage >= 100 ? ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "progress-bar__icon" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-success", { size: ICON_SIZE }))) : null), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "wrapper", class: "progress-bar__wrapper" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "outer", class: "progress-bar__outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": this.percentage, "aria-busy": this.busy, "aria-valuetext": `${this.percentage}%`, "aria-label": this.label, id: this.progressBarId }, this.percentage > 0 && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "inner", class: "progress-bar__inner", style: this.progressStyle() }))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "icon" }))), !!this.statusDescription && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { part: "status-description", class: "progress-bar__status-description", role: "alert" }, this.statusDescription)), !this.mute && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-live": "polite", class: "progress-bar__aria-live" }, this.percentage !== Math.round(this.percentage / 10) * 10
      ? `${Math.round(this.percentage / 10) * 10}%`
      : null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'progress-bar';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(component, this.hasError && `${prefix}has-error`, this.disabled && `${prefix}disabled`, this.percentage >= 100 && `${prefix}completed`);
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
ProgressBar.style = progressBarCss;

const switchCss = "scale-switch{--width:42px;--height:24px;--offset:2px;--radius:1em;--transition-duration:var(--telekom-motion-duration-immediate);--transition-easing:var(--telekom-motion-easing-standard);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--spacing-x-label:var(--telekom-spacing-composition-space-04);--font-label:var(--telekom-text-style-ui);--font-io-text:var(--telekom-text-style-small-bold);--color-label:var(--telekom-color-text-and-icon-standard)}.switch{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-white, #fff);--_overlay-background:transparent;display:inline-block;position:relative}.switch__control{position:absolute;margin:0;top:0;width:var(--width);height:var(--height);opacity:0}.switch__wrapper{display:flex;align-items:center;cursor:pointer}.switch__toggle{position:relative;width:var(--width);height:var(--height);background:var(--_background);border-radius:var(--radius);transition-property:background;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing)}.switch__toggle--overlay{position:absolute;width:var(--width);height:var(--height);border-radius:var(--radius);background:var(--_overlay-background)}[data-platform='android'] .switch__toggle--overlay{display:none}.switch:hover{--_overlay-background:var(--telekom-color-ui-state-fill-hovered)}.switch:active{--_overlay-background:var(--telekom-color-ui-state-fill-pressed)}.switch--checked{--_background:var(--telekom-color-primary-standard)}[data-platform='android'] .switch.switch--checked{--_background:var(--telekom-color-primary-standard);--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch{--_color-thumb:var(--telekom-color-ui-strong)}[data-platform='android'] .switch:hover{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:active{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:hover{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch:active{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch--checked:active,[data-platform='android'] .switch--checked:hover{--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch--checked:hover,.switch--checked:hover{--_background:var(--telekom-color-primary-hovered)}[data-platform='android'] .switch--checked:active,.switch--checked:active{--_background:var(--telekom-color-primary-pressed)}[data-platform='android'] .switch--disabled{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-border-disabled)}[data-platform='android'] .switch--disabled:hover{--_color-thumb:var(--telekom-color-ui-border-disabled);--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch--checked.switch--disabled:hover{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled,.switch--disabled:hover,.switch--disabled:active{--_background:var(--telekom-color-ui-disabled);--_color-thumb:var(--telekom-color-ui-faint);--_overlay-background:transparent}.switch--checked .switch--disabled,.switch--checked .switch--disabled:hover,.switch--checked .switch--disabled:active{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-disabled);box-shadow:var(--telekom-shadow-raised-standard);--_overlay-background:transparent}[data-platform='android'] .switch--disabled.switch--checked{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled .switch__wrapper{cursor:not-allowed}.switch--disabled .switch__thumb{box-shadow:var(--telekom-shadow-raised-standard)}.switch--size-large{--width:56px;--height:32px}.switch--focus-visible-not-supported :focus~.switch__toggle,:focus-visible~.switch__toggle{outline:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:var(--telekom-spacing-composition-space-01)}.switch__thumb{--_size:calc(var(--height) - var(--offset) * 2);position:relative;z-index:2;box-sizing:border-box;width:var(--_size);height:var(--_size);aspect-ratio:1 / 1;background:var(--_color-thumb);border-radius:50%;box-shadow:var(--shadow-thumb);margin:var(--offset);transition-property:margin, width, height, background, color;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing);color:transparent;border:1px solid rgba(0, 0, 0, 0.04);display:inline-block}.switch--checked .switch__thumb{margin-left:1em;margin-inline-start:calc(var(--width) - var(--height) + var(--offset))}.switch__io-text{position:absolute;z-index:1;top:0;left:0;display:flex;justify-content:center;align-items:center;width:50%;height:var(--height);margin-left:calc(50% - var(--offset));font:var(--font-io-text);line-height:var(--telekom-typography-line-spacing-none)}.switch--size-large .switch__io-text{margin-top:1px;font:var(--telekom-text-style-caption-bold)}.switch--checked .switch__io-text{margin-left:var(--offset);color:var(--telekom-color-text-and-icon-white-standard)}.switch--disabled .switch__io-text{color:var(--telekom-color-text-and-icon-disabled)}.switch__label-text{font:var(--font-label);margin-inline-start:var(--spacing-x-label);color:var(--color-label)}[data-platform='android'] scale-switch{--width:56px;--height:32px;--offset:7px}[data-platform='android'] .switch__thumb{width:18px;height:18px}[data-platform='android'] scale-switch:not([disabled]):active .switch__thumb{width:28px;height:28px;--offset:2px}[data-platform='android'] .switch--checked .switch__thumb{width:24px;height:24px;--offset:4px}[data-platform='android'] .switch__thumb{display:flex;justify-content:center;align-items:center;box-shadow:none}scale-switch scale-icon-action-success{display:none !important}[data-platform='android'] .switch--checked scale-icon-action-success{position:absolute;display:inline-block !important;margin-top:2px;margin-left:1px}[data-platform='android'] .switch--checked .switch__thumb{color:var(--_background)}[data-platform='android'] .switch__io-text{display:none}[data-platform='android'] .switch--checked .switch__thumb{color:var(--telekom-color-primary-standard)}[data-platform='android'] .switch--disabled .switch__thumb{color:var(--telekom-color-ui-strong)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.switch__toggle{border:1px solid}scale-icon-action-checkmark{visibility:hidden !important}}";

let i = 0;
// For chrome that applies :focus upon click, and :focus-visible isn't widely supported
const isFocusVisibleSupported = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.c)(':focus-visible');
const Switch = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleChange = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-change", 7);
    this.scaleChangeLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleChange", 7);
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) Disabled switch */
    this.disabled = false;
    this.size = 'large';
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i++;
    }
  }
  render() {
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { id: `${this.inputId}-label`, class: "switch__wrapper" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "checkbox", name: this.name, class: "switch__control", checked: this.checked, disabled: this.disabled, "aria-labelledby": `${this.inputId}-label`, id: this.inputId, onChange: (event) => {
        this.checked = event.target.checked;
        (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleChange', { value: this.checked });
      } }), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "switch__toggle", "aria-hidden": "true" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "switch__thumb" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-checkmark", { size: 12, decorative: true, selected: true })), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "switch__io-text" }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.checked ? 'I' : '0'))), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "switch__toggle--overlay", "aria-hidden": "true" }), this.label && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "switch__label-text" }, this.label)))));
  }
  getCssClassMap() {
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('switch', this.checked && 'switch--checked', this.disabled && 'switch--disabled', this.size && `switch--size-${this.size}`, isFocusVisibleSupported && 'switch--focus-visible-supported', !isFocusVisibleSupported && 'switch--focus-visible-not-supported');
  }
};
Switch.style = switchCss;

const tagCss = ":host{--background:var(--telekom-color-ui-faint);--color:var(--telekom-color-text-and-icon-standard);--font:var(--telekom-text-style-caption-bold);--radius:2px;--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--icon-color:var(--telekom-color-text-and-icon-additional);--icon-color-hover:var(--color);--background-disabled:var(--telekom-color-ui-faint);--color-disabled:var(--telekom-color-text-and-icon-disabled);--spacing-dismissable:var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-03);--spacing-dismissable-small:var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-03);--height:24px;--height-small:20px;--border-button-dismissable-focus:1px solid transparent;--box-shadow-button-dismissable-focus:var(--box-shadow-focus);--background-button-dismissable-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-standard-strong-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered-inverted\n  );--background-button-standard-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-dismissable-active:var(\n    --telekom-color-ui-state-fill-pressed\n  );--height-button-dismissable:20px;--width-button-dismissable:20px;--height-button-dismissable-small:16px;--width-button-dismissable-small:16px;--spacing-small:0 var(--telekom-spacing-composition-space-04);--font-size-small:var(--telekom-typography-font-size-small);--line-height-small:var(--telekom-typography-line-spacing-loose)}.tag{display:inline-flex;outline:none;padding:0 8px;text-align:center;transition:all 0.15s ease-in-out;align-items:center;white-space:nowrap;border-radius:var(--telekom-radius-small);vertical-align:baseline;justify-content:center;font:var(--font);line-height:1;background:var(--background);color:var(--color);cursor:default;height:var(--height)}.tag scale-icon-action-close{color:var(--icon-color)}.tag:not(.tag--disabled) scale-icon-action-close:hover{color:var(--icon-color-hover)}.tag::slotted(*){padding:100px}.tag--dismissable{padding:0 0 0 8px}.tag--dismissable button{border:none;cursor:pointer;height:var(--height-button-dismissable);width:var(--width-button-dismissable);margin:0;outline:none;padding:0;background:transparent;margin:var(--spacing-dismissable);border-radius:var(--radius);align-items:center}.tag--dismissable scale-icon-action-close{display:flex !important;align-items:center;justify-content:center}.tag--dismissable button:focus{justify-content:center;outline:var(--focus-outline);outline-offset:1px}.tag--dismissable:not(.tag--disabled) button:hover{background:var(--background-button-dismissable-hover)}.tag--dismissable.tag--color-standard:not(.tag--disabled) button:hover{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-standard:not(.tag--disabled) button:hover{background:var(--background-button-standard-strong-dismissible-hover)}.tag--dismissable button:active{background:var(--background-button-dismissable-active)}.tag--dismissable.tag--color-standard button:active{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-standard button:active{background:var(--background-button-standard-strong-dismissible-hover)}.tag--size-small{font-size:var(--font-size-small);padding:0 6px;height:var(--height-small)}.tag--size-small.tag--dismissable{padding-right:0px}.tag--size-small.tag--dismissable button{height:var(--height-button-dismissable-small);width:var(--width-button-dismissable-small);margin:var(--spacing-dismissable-small)}.tag--disabled{background-color:var(--telekom-color-ui-faint) !important;color:var(--color-disabled) !important;pointer-events:none}.tag--disabled scale-icon-action-close{color:var(--color-disabled) !important;pointer-events:none}.tag--link{text-decoration:none}.tag--link:focus{outline:var(--focus-outline)}.tag--link{background:var(--background-secondary)}.tag--link:hover{background:var(--background-secondary)}.tag--type-standard.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-subtle);color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-cyan.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-subtle);color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-yellow.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-green{background-color:var(--telekom-color-functional-success-subtle);color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-green.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-orange{background-color:var(--telekom-color-functional-warning-subtle);color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-orange.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-red{background-color:var(--telekom-color-functional-danger-subtle);color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-red.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-violet{background-color:var(--telekom-color-additional-violet-subtle);color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-violet.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-brown{background-color:var(--telekom-color-additional-brown-subtle);color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-brown.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-olive{background-color:var(--telekom-color-additional-olive-subtle);color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-olive.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-teal{background-color:var(--telekom-color-additional-teal-subtle);color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-standard.tag--color-teal.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-strong.tag--color-standard{background-color:var(--telekom-color-ui-extra-strong);color:var(--telekom-color-text-and-icon-inverted-standard)}.tag--type-strong.tag--color-standard.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-inverted-additional)}.tag--type-strong.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-cyan.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-yellow.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-green{background-color:var(--telekom-color-functional-success-standard);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-green.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-orange{background-color:var(--telekom-color-functional-warning-standard);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-orange.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-red{background-color:var(--telekom-color-functional-danger-standard);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-red.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-violet{background-color:var(--telekom-color-additional-violet-300);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-violet.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-brown{background-color:var(--telekom-color-additional-brown-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-brown.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-olive{background-color:var(--telekom-color-additional-olive-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-olive.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-teal{background-color:var(--telekom-color-additional-teal-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-teal.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}";

const Tag = class {
  constructor(hostRef) {
    (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scaleClose = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scale-close", 7);
    this.scaleCloseLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleClose", 7);
    /** (optional) Tag type */
    this.type = 'standard';
    /** (optional) Tag color */
    this.color = 'standard';
    /** (optional) Tag href */
    this.href = '';
    /** (optional) Tag target */
    this.target = '_self';
    /** (optional) Tag dismissable */
    this.dismissable = false;
    /** (optional) Tag disabled */
    this.disabled = false;
    /** (optional) Dismiss label */
    this.dismissText = 'dismiss';
    this.handleClose = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleClose', event);
    };
  }
  componentWillUpdate() { }
  disconnectedCallback() { }
  render() {
    const Element = !!this.href && !this.disabled ? 'a' : 'span';
    const linkProps = !!this.href
      ? {
        href: this.href,
        target: this.target,
      }
      : {};
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(Element, Object.assign({ part: this.getBasePartMap(), class: this.getCssClassMap() }, linkProps), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), this.dismissable && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { part: "button-dismissable", disabled: this.disabled, "aria-label": this.dismissText, onClick: this.handleClose }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-icon-action-close", { part: "icon-dismissable", size: 16 }))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tag';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)(mode === 'basePart' ? 'base' : component, this.size && `${prefix}size-${this.size}`, this.type && `${prefix}type-${this.type}`, this.color && `${prefix}color-${this.color}`, !!this.href && `${prefix}link`, !!this.dismissable && `${prefix}dismissable`, !!this.disabled && `${prefix}disabled`);
  }
};
Tag.style = tagCss;

const textFieldCss = "scale-text-field{--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--border-error:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard);--border-success:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-success-standard);--border-warning:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-warning-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--background-color-hover:var(--telekom-color-ui-state-fill-hovered);--background-color-disabled:none;--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--height:44px;--spacing-x:var(--telekom-spacing-composition-space-05);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--border-color-readonly:var(--telekom-color-ui-border-disabled);--background-readonly:var(--telekom-color-ui-disabled);--font-weight-meta:var(--telekom-line-weight-bold);--font-size-meta:var(--telekom-typography-font-size-small);--line-height-meta:var(--telekom-typography-line-spacing-standard);--spacing-y-meta:var(--telekom-spacing-composition-space-03);--color-meta:var(--telekom-color-text-and-icon-standard);--color-meta-error:var(--telekom-color-text-and-icon-functional-danger);--spacing-control:1.125rem\n    calc(2rem - var(--telekom-spacing-composition-space-01)) 0.25rem\n    calc(0.75rem - var(--telekom-spacing-composition-space-01));--transition-control:var(--transition);--background-control:var(--telekom-color-ui-state-fill-standard);--margin-bottom-control:var(--telekom-spacing-composition-space-03);--transition-counter:var(--transition);--color-counter-error:var(--color-meta-error);--font-size-helper-text:var(--telekom-typography-font-size-small);--line-height-helper-text:1.35;--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--color-helper-text-error:var(--color-meta-error);--color-helper-text-success:var(\n    --telekom-color-text-and-icon-functional-success\n  );--color-helper-text-warning:var(\n    --telekom-color-text-and-icon-functional-warning\n  );--color-helper-text-neutral:var(--telekom-color-text-and-icon-additional);--helper-text-icon-size:11px;--transition-placeholder:var(--transition);--color-placeholder:var(--telekom-color-text-and-icon-additional);--color-label:var(--telekom-color-text-and-icon-additional);--color-label-readonly:var(--telekom-color-text-and-icon-standard);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition)}.text-field{position:relative}.text-field .text-field__control{width:100%;height:var(--height);margin:0;display:flex;outline:none;padding:var(--spacing-control);z-index:1;box-sizing:border-box;transition:var(--transition-control);font:var(--telekom-text-style-body);border-radius:var(--radius);border:var(--border);background-color:var(--background-control);color:var(--color-meta)}.text-field--hide-label .text-field__control{padding:5px var(--telekom-spacing-composition-space-12) 5px\n    calc(var(--spacing-x) - 1px)}.text-field--hide-label .text-field__label{visibility:hidden}.text-field.text-field--helper-text .text-field__control{margin-bottom:var(--margin-bottom-control)}.text-field .text-field__counter{display:flex;transition:var(--transition-counter);margin-left:auto;justify-content:flex-end;font:var(--telekom-text-style-small);color:var(--telekom-color-text-and-icon-standard)}.text-field scale-helper-text{--color-informational:var(--color-helper-text);--color-warning:var(--color-helper-text-warning);--color-danger:var(--color-helper-text-error);--color-success:var(--color-helper-text-success);--color-neutral:var(--color-helper-text-neutral);--font-size:var(--font-size-helper-text);--font-weight:var(--font-weight-helper-text);--line-height:var(--line-height-helper-text);--icon-size-helper-text:var(--helper-text-icon-size);font-weight:var(--telekom-typography-font-weight-bold);display:flex}.text-field .text-field__meta{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}.text-field:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover{border-color:var(--border-color-hover);background-color:var(--background-color-hover)}.text-field:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--border-color-focus);outline:var(--focus-outline);outline-offset:1px}.text-field:not(.text-field--disabled) .text-field__control:focus::placeholder{color:var(--color-placeholder)}.text-field .text-field__control::placeholder,.text-field ::placeholder{color:transparent;transition:var(--transition-placeholder)}.text-field__label{top:0;left:0;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font:var(--telekom-text-style-ui);transform:translate(var(--spacing-x), 0.875rem)}.text-field--has-focus:not(.text-field--readonly) .text-field__label,.animated .text-field__label{font:var(--telekom-text-style-small-bold);transform:translate(\n    var(--spacing-x),\n    calc(0.25rem + var(--telekom-spacing-composition-space-01))\n  )}.text-field--variant-danger .text-field__control{border:var(--border-error)}.text-field--variant-success .text-field__control{border:var(--border-success)}.text-field--variant-warning .text-field__control{border:var(--border-warning)}.text-field--variant-danger:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-danger:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-danger-hovered)}.text-field--variant-success:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-success:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-success-hovered)}.text-field--variant-warning:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-warning:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-warning-hovered)}.text-field--variant-danger .text-field__helper-text{color:var(--color-helper-text-error)}.text-field--variant-danger .text-field__counter{color:var(--color-counter-error)}.text-field--variant-success .text-field__helper-text{color:var(--color-helper-text-success)}.text-field--variant-success .text-field__counter{color:var(--telekom-color-text-and-icon-functional-success)}.text-field--variant-warning .text-field__helper-text{color:var(--color-helper-text-warning)}.text-field--variant-warning .text-field__counter{color:var(--telekom-color-text-and-icon-functional-warning)}.text-field--transparent .text-field__control{background-color:transparent}.text-field--readonly input,.text-field--readonly .text-field__control{color:var(--color-label-readonly);border:none;background:var(--background-readonly)}.text-field--readonly .text-field__control:focus{outline:var(--focus-outline);outline-offset:1px}.text-field--disabled label,.text-field--disabled .text-field__label,.text-field--disabled input,.text-field--disabled .text-field__control,.text-field--disabled .text-field__meta,.text-field--disabled .text-field__counter,.text-field--disabled .text-field__helper-text{cursor:not-allowed;border-color:var(--border-color-disabled);background-color:var(--background-color-disabled);color:var(--color-disabled);background:transparent}.text-field--disabled.animated label.text-field__label{color:var(--color-disabled)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none}input[type='number']{-moz-appearance:textfield}input[type='datetime-local']::-webkit-calendar-picker-indicator,input[type='time']::-webkit-calendar-picker-indicator,input[type='date']::-webkit-calendar-picker-indicator,input[type='week']::-webkit-calendar-picker-indicator,input[type='month']::-webkit-calendar-picker-indicator{position:absolute;right:12px}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{color-scheme:dark}@media screen and (forced-colors: active), (-ms-high-contrast: active){.text-field--readonly input,.text-field--readonly .text-field__control{border:1px solid}}";

const TextField = class {
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
    this.scaleKeyDownLegacy = (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "scaleKeydown", 7);
    /** (optional) Input type */
    this.type = 'text';
    /** (optional) Input mode */
    this.inputModeType = 'text';
    /** (optional) Input name */
    this.name = '';
    /** Input label */
    this.label = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Variant */
    this.variant = 'informational';
    /** (optional) Input placeHolder */
    this.placeholder = '';
    /** (optional) Input value */
    this.value = '';
    /** (optional) the step attribute specifies the interval between legal numbers in an <input type="number"> element. */
    this.step = '1';
    /** (optional) to avoid displaying the label */
    this.hideLabelVisually = false;
    /** (optional)) Makes type `input` behave as a controlled component in React */
    this.experimentalControlled = false;
    /** Whether the input element has focus */
    this.hasFocus = false;
    this.internalId = (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.g)();
    this.handleInput = (event) => {
      const target = event.target;
      if (this.experimentalControlled) {
        this.hostElement.querySelector('input').value = String(this.value);
        this.forceUpdate = String(Date.now());
      }
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleInput', event);
    };
    this.handleChange = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleFocus = () => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleFocus');
      this.hasFocus = true;
    };
    this.handleBlur = () => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleBlur');
      this.hasFocus = false;
    };
    this.handleKeyDown = (event) => {
      (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleKeyDown', event);
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-text-field-' + this.internalId;
    }
  }
  componentDidRender() {
    // When `experimentalControlled` is true,
    // make sure the <input> is always in sync with the value.
    const value = this.value == null ? '' : this.value.toString();
    const input = this.hostElement.querySelector('input');
    if (this.experimentalControlled && input.value.toString() !== value) {
      input.value = value;
    }
    if (this.status !== '') {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.size) {
      (0,_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_2__.s)({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrites for a small version!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    (0,_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_4__.e)(this, 'scaleChange', {
      value: this.value == null ? this.value : this.value.toString(),
    });
  }
  render() {
    const ariaInvalidAttr = this.status === 'error' || this.invalid ? { 'aria-invalid': 'true' } : {};
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    const ariaDetailedById = { 'aria-details': this.ariaDetailedId };
    const numericTypes = [
      'number',
      'date',
      'month',
      'week',
      'time',
      'datetime-local',
    ];
    return ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.a, null, this.styles && (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, this.styles), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getCssClassMap() }, (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: "text-field__label", htmlFor: this.inputId }, this.label), (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({ type: this.type, inputMode: this.inputModeType, class: "text-field__control", value: this.value }, (!!this.name ? { name: this.name } : {}), (!!this.inputAutofocus ? { autofocus: 'true' } : {}), { required: this.required, minLength: this.minLength, maxLength: this.maxLength, min: this.min, max: this.max, id: this.inputId, list: this.list, onInput: this.handleInput, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, (!!this.placeholder && !this.readonly
      ? { placeholder: this.placeholder }
      : {}), { disabled: this.disabled, readonly: this.readonly, autocomplete: this.inputAutocomplete }, ariaDetailedById, ariaInvalidAttr, (this.helperText ? ariaDescribedByAttr : {}), (numericTypes.includes(this.type) ? { step: this.step } : {}))), (!!this.helperText || !!this.counter) && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text-field__meta", "aria-live": "polite", "aria-relevant": "additions removals" }, this.helperText && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("scale-helper-text", { id: helperTextId, helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant })), this.counter && ((0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text-field__counter" }, !!this.value ? String(this.value).length : 0, " /", ' ', this.maxLength)))))));
  }
  getCssClassMap() {
    // the numeric type as followings, eg input[type="date"], will print a placeholder in some browsers
    const numericTypes = ['date', 'month', 'week', 'time', 'datetime-local'];
    const animated = (this.value != null && this.value !== '') ||
      numericTypes.includes(this.type);
    return (0,_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_1__.c)('text-field', this.type && `text-field--type-${this.type}`, this.hasFocus && 'text-field--has-focus', this.disabled && `text-field--disabled`, this.transparent && 'text-field--transparent', this.status && `text-field--status-${this.status}`, this.invalid && `text-field--variant-danger`, this.variant && `text-field--variant-${this.variant}`, this.helperText && `text-field--helper-text`, this.readonly && `text-field--readonly`, this.hideLabelVisually && `text-field--hide-label`, animated && 'animated');
  }
  get hostElement() { return (0,_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
TextField.style = textFieldCss;




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