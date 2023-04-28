import {
    computed,
    createBaseVNode,
    createBlock,
    createCommentVNode,
    createElementBlock,
    createSlots,
    createTextVNode,
    createVNode,
    customRef,
    defineComponent,
    effectScope,
    Fragment,
    getCurrentInstance,
    getCurrentScope,
    guardReactiveProps,
    h,
    inject,
    isReadonly,
    isRef,
    mergeProps,
    nextTick,
    normalizeClass,
    normalizeProps,
    normalizeStyle,
    onMounted,
    onScopeDispose,
    openBlock,
    popScopeId,
    provide,
    pushScopeId,
    reactive,
    readonly,
    ref,
    renderList,
    renderSlot,
    resolveComponent,
    resolveDynamicComponent,
    shallowReadonly,
    shallowRef,
    Teleport,
    toDisplayString,
    toHandlers,
    toRaw,
    toRef,
    toRefs,
    Transition,
    TransitionGroup,
    unref,
    useAttrs,
    useSlots,
    vShow,
    watch,
    watchEffect,
    withCtx,
    withDirectives
} from "./chunk-LZPJ5JBW.js";

// node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p2, c2) => _defu(p2, c2, "", merger), {})
  );
}
var defu = createDefu();
var defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
var defuArrayFn = createDefu((object, key, currentValue) => {
  if (Array.isArray(object[key]) && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

// node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs
var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t = function(r2) {
  return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
};
var n = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
};
var e = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
};
var u = function(r2) {
  return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
};
var a = function(r2) {
  return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
};
var o = function(r2) {
  return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
};
var i = /^#([0-9a-f]{3,8})$/i;
var s = function(r2) {
  var t2 = r2.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
};
var h2 = function(r2) {
  var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
};
var b = function(r2) {
  var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h3 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h3], g: 255 * [s2, e2, e2, i2, o2, o2][h3], b: 255 * [o2, o2, s2, e2, e2, i2][h3], a: u2 };
};
var g = function(r2) {
  return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
};
var d = function(r2) {
  return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
};
var f = function(r2) {
  return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
};
var c = function(r2) {
  return { h: (t2 = h2(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
};
var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y = { string: [[function(r2) {
  var t2 = i.exec(r2);
  return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r2) {
  var t2 = v.exec(r2) || m.exec(r2);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p.exec(t2);
  if (!n2)
    return null;
  var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f(a2);
}, "hsl"]], object: [[function(r2) {
  var n2 = r2.r, e2 = r2.g, u2 = r2.b, o2 = r2.a, i2 = void 0 === o2 ? 1 : o2;
  return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r2) {
  var n2 = r2.h, e2 = r2.s, u2 = r2.l, a2 = r2.a, o2 = void 0 === a2 ? 1 : a2;
  if (!t(n2) || !t(e2) || !t(u2))
    return null;
  var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f(i2);
}, "hsl"], [function(r2) {
  var n2 = r2.h, a2 = r2.s, o2 = r2.v, i2 = r2.a, s2 = void 0 === i2 ? 1 : i2;
  if (!t(n2) || !t(a2) || !t(o2))
    return null;
  var h3 = function(r3) {
    return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
  }({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b(h3);
}, "hsv"]] };
var N = function(r2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r2);
    if (e2)
      return [e2, t2[n2][1]];
  }
  return [null, void 0];
};
var x = function(r2) {
  return "string" == typeof r2 ? N(r2.trim(), y.string) : "object" == typeof r2 && null !== r2 ? N(r2, y.object) : [null, void 0];
};
var M = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
};
var H = function(r2) {
  return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
};
var $ = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
};
var j = function() {
  function r2(r3) {
    this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r2.prototype.isValid = function() {
    return null !== this.parsed;
  }, r2.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r2.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r2.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r2.prototype.toHex = function() {
    return r3 = o(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, i2 = (a2 = r3.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
    var r3, t2, e2, u2, a2, i2;
  }, r2.prototype.toRgb = function() {
    return o(this.rgba);
  }, r2.prototype.toRgbString = function() {
    return r3 = o(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r2.prototype.toHslString = function() {
    return r3 = d(c(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsv = function() {
    return r3 = h2(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
    var r3;
  }, r2.prototype.invert = function() {
    return w({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
    var r3;
  }, r2.prototype.saturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, r3));
  }, r2.prototype.desaturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, -r3));
  }, r2.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r2.prototype.lighten = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, r3));
  }, r2.prototype.darken = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, -r3));
  }, r2.prototype.rotate = function(r3) {
    return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
  }, r2.prototype.alpha = function(r3) {
    return "number" == typeof r3 ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
    var t2;
  }, r2.prototype.hue = function(r3) {
    var t2 = c(this.rgba);
    return "number" == typeof r3 ? w({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r2.prototype.isEqual = function(r3) {
    return this.toHex() === w(r3).toHex();
  }, r2;
}();
var w = function(r2) {
  return r2 instanceof j ? r2 : new j(r2);
};
var S = [];
var k = function(r2) {
  r2.forEach(function(r3) {
    S.indexOf(r3) < 0 && (r3(j, y), S.push(r3));
  });
};

// node_modules/.pnpm/@floating-ui+core@1.2.6/node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
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
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
      continue;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
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
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x: x2,
    y: y2
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var sides = ["top", "right", "bottom", "left"];
var allPlacements = sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr2 = ["left", "right"];
  const rl2 = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl2 : lr2;
      return isStart ? lr2 : rl2;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
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
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
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
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
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
async function convertValueToCoords(state, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(state) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(state) {
      const {
        x: x2,
        y: y2
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2
        }
      };
    }
  };
};

// node_modules/.pnpm/@floating-ui+dom@1.2.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
var uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
    return uaString;
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
  return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some((value) => {
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}
function isClientRectVisualViewportBased() {
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width);
  let height = parseFloat(css.height);
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
    fallback: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
var FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x2 = (fallback ? round(rect.width) : rect.width) / width;
  let y2 = (fallback ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  let x2 = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y2 = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win2 = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win2.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win2) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += iframeRect.x;
      y2 += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
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
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
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
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x2 += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const mutableRect = {
      ...clippingAncestor
    };
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      const win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el2) => isElement(el2) && getNodeName(el2) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const containingBlock = isContainingBlock(currentNode);
    if (computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
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
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
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
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
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
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
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
        ...await getDimensionsFn(floating)
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/.pnpm/@floating-ui+vue@0.2.1_vue@3.2.47/node_modules/@floating-ui/vue/dist/floating-ui.vue.esm.js
function unwrapElement2(element) {
  var _$el;
  return (_$el = element == null ? void 0 : element.$el) != null ? _$el : element;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _unref;
    return (_unref = unref(options.open)) != null ? _unref : true;
  });
  const middlewareOption = computed(() => unref(options.middleware));
  const placementOption = computed(() => {
    var _unref2;
    return (_unref2 = unref(options.placement)) != null ? _unref2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _unref3;
    return (_unref3 = unref(options.strategy)) != null ? _unref3 : "absolute";
  });
  const referenceElement = computed(() => unwrapElement2(reference.value));
  const floatingElement = computed(() => unwrapElement2(floating.value));
  const x2 = ref(null);
  const y2 = ref(null);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    computePosition2(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x2.value = position.x;
      y2.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = true;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x2),
    y: shallowReadonly(y2),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    update
  };
}

// node_modules/.pnpm/anu-vue@0.13.1_@unocss+reset@0.41.2_@vueuse+core@10.0.2_vue-router@4.1.6/node_modules/anu-vue/dist/anu-vue.js
function hl() {
  return {
    type: "component",
    resolve: (s2) => {
      if (s2.match(/^A[A-Z]/))
        return { name: s2, from: "anu-vue" };
    }
  };
}
var Mt = (s2) => s2 == null || s2 === "" ? true : !!(Array.isArray(s2) && s2.length === 0) || JSON.stringify(s2) === "{}";
var Se = (s2) => s2 !== null && !!s2 && typeof s2 == "object" && !Array.isArray(s2);
var Vs = (s2) => (typeof s2 == "string" || typeof s2 == "number") && s2 !== "" && !isNaN(Number(s2));
var Ts = (s2) => s2[0].toUpperCase() + s2.slice(1);
var Nt = (s2, t2) => {
  const e2 = Object.entries(s2).map(([a2, n2]) => [
    `${t2}${a2}`,
    n2
  ]);
  return Object.fromEntries(e2);
};
var Ye = (s2, t2) => {
  const e2 = {};
  for (const a2 in s2)
    e2[`${t2}${a2}`] = {
      originalKey: a2,
      prefixedKey: `${t2}${a2}`,
      value: s2[a2]
    };
  return e2;
};
var se = (s2) => defineComponent({
  name: `A${Ts(s2)}Transition`,
  props: {
    group: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(t2, { attrs: e2, slots: a2 }) {
    return () => h(
      t2.group ? TransitionGroup : Transition,
      {
        name: `${s2}`,
        tag: t2.group ? t2.tag : void 0,
        class: [
          t2.group && `${s2}-group`
        ],
        ...e2
      },
      () => {
        var n2;
        return (n2 = a2.default) == null ? void 0 : n2.call(a2);
      }
    );
  }
});
var Is = [
  "fade",
  "scale",
  "slide-y",
  "slide-y-reverse",
  "scroll-y",
  "scroll-y-reverse",
  "slide-x",
  "slide-x-reverse",
  "scroll-x",
  "scroll-x-reverse",
  "view-next",
  "view-previous"
];
var Ps = se("fade");
var Bs = se("scale");
var Es = se("slide-y");
var Ls = se("slide-y-reverse");
var js = se("scroll-y");
var Ms = se("scroll-y-reverse");
var Ns = se("slide-x");
var Rs = se("slide-x-reverse");
var Ds = se("scroll-x");
var Fs = se("scroll-x-reverse");
var Ws = se("view-next");
var qs = se("view-previous");
function zs(s2) {
  let t2 = false, e2;
  const a2 = effectScope(true);
  return (...n2) => (t2 || (e2 = a2.run(() => s2(...n2)), t2 = true), e2);
}
var Xs = Object.defineProperty;
var Hs = Object.defineProperties;
var Ys = Object.getOwnPropertyDescriptors;
var yt = Object.getOwnPropertySymbols;
var Us = Object.prototype.hasOwnProperty;
var Ks = Object.prototype.propertyIsEnumerable;
var ht = (s2, t2, e2) => t2 in s2 ? Xs(s2, t2, { enumerable: true, configurable: true, writable: true, value: e2 }) : s2[t2] = e2;
var Gs = (s2, t2) => {
  for (var e2 in t2 || (t2 = {}))
    Us.call(t2, e2) && ht(s2, e2, t2[e2]);
  if (yt)
    for (var e2 of yt(t2))
      Ks.call(t2, e2) && ht(s2, e2, t2[e2]);
  return s2;
};
var Js = (s2, t2) => Hs(s2, Ys(t2));
function Qs(s2, t2) {
  var e2;
  const a2 = shallowRef();
  return watchEffect(() => {
    a2.value = s2();
  }, Js(Gs({}, t2), {
    flush: (e2 = t2 == null ? void 0 : t2.flush) != null ? e2 : "sync"
  })), readonly(a2);
}
var bt;
var at = typeof window < "u";
var Zs = (s2) => typeof s2 < "u";
var Rt = (s2) => typeof s2 == "function";
var gt = (s2) => typeof s2 == "number";
var ea = (s2) => typeof s2 == "string";
var ze = (s2, t2, e2) => Math.min(e2, Math.max(t2, s2));
var re = () => {
};
var ta = at && ((bt = window == null ? void 0 : window.navigator) == null ? void 0 : bt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function E(s2) {
  return typeof s2 == "function" ? s2() : unref(s2);
}
function sa(s2, t2) {
  function e2(...a2) {
    return new Promise((n2, o2) => {
      Promise.resolve(s2(() => t2.apply(this, a2), { fn: t2, thisArg: this, args: a2 })).then(n2).catch(o2);
    });
  }
  return e2;
}
function aa(s2, t2 = {}) {
  let e2, a2, n2 = re;
  const o2 = (l2) => {
    clearTimeout(l2), n2(), n2 = re;
  };
  return (l2) => {
    const c2 = E(s2), u2 = E(t2.maxWait);
    return e2 && o2(e2), c2 <= 0 || u2 !== void 0 && u2 <= 0 ? (a2 && (o2(a2), a2 = null), Promise.resolve(l2())) : new Promise((f2, d2) => {
      n2 = t2.rejectOnCancel ? d2 : f2, u2 && !a2 && (a2 = setTimeout(() => {
        e2 && o2(e2), a2 = null, f2(l2());
      }, u2)), e2 = setTimeout(() => {
        a2 && o2(a2), a2 = null, f2(l2());
      }, c2);
    });
  };
}
function na(s2, t2) {
  var e2;
  if (typeof s2 == "number")
    return s2 + t2;
  const a2 = ((e2 = s2.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : e2[0]) || "", n2 = s2.slice(a2.length), o2 = parseFloat(a2) + t2;
  return Number.isNaN(o2) ? s2 : o2 + n2;
}
function Oe(s2) {
  return getCurrentScope() ? (onScopeDispose(s2), true) : false;
}
function ra(s2) {
  if (!isRef(s2))
    return reactive(s2);
  const t2 = new Proxy({}, {
    get(e2, a2, n2) {
      return unref(Reflect.get(s2.value, a2, n2));
    },
    set(e2, a2, n2) {
      return isRef(s2.value[a2]) && !isRef(n2) ? s2.value[a2].value = n2 : s2.value[a2] = n2, true;
    },
    deleteProperty(e2, a2) {
      return Reflect.deleteProperty(s2.value, a2);
    },
    has(e2, a2) {
      return Reflect.has(s2.value, a2);
    },
    ownKeys() {
      return Object.keys(s2.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(t2);
}
function la(s2) {
  return ra(computed(s2));
}
function Ve(s2, ...t2) {
  const e2 = t2.flat(), a2 = e2[0];
  return la(() => Object.fromEntries(typeof a2 == "function" ? Object.entries(toRefs(s2)).filter(([n2, o2]) => a2(E(o2), n2)) : e2.map((n2) => [n2, toRef(s2, n2)])));
}
function oa(s2, t2 = 1e4) {
  return customRef((e2, a2) => {
    let n2 = s2, o2;
    const r2 = () => setTimeout(() => {
      n2 = s2, a2();
    }, E(t2));
    return Oe(() => {
      clearTimeout(o2);
    }), {
      get() {
        return e2(), n2;
      },
      set(l2) {
        n2 = l2, a2(), clearTimeout(o2), o2 = r2();
      }
    };
  });
}
function Ie(s2, t2 = 200, e2 = {}) {
  return sa(aa(t2, e2), s2);
}
function ia(s2, t2 = 200, e2 = {}) {
  const a2 = ref(s2.value), n2 = Ie(() => {
    a2.value = s2.value;
  }, t2, e2);
  return watch(s2, () => n2()), a2;
}
function nt(s2) {
  return typeof s2 == "function" ? computed(s2) : ref(s2);
}
function _t(s2, t2, e2 = {}) {
  var a2, n2;
  const {
    flush: o2 = "sync",
    deep: r2 = false,
    immediate: l2 = true,
    direction: c2 = "both",
    transform: u2 = {}
  } = e2;
  let f2, d2;
  const p2 = (a2 = u2.ltr) != null ? a2 : (y2) => y2, m2 = (n2 = u2.rtl) != null ? n2 : (y2) => y2;
  return (c2 === "both" || c2 === "ltr") && (f2 = watch(s2, (y2) => t2.value = p2(y2), { flush: o2, deep: r2, immediate: l2 })), (c2 === "both" || c2 === "rtl") && (d2 = watch(t2, (y2) => s2.value = m2(y2), { flush: o2, deep: r2, immediate: l2 })), () => {
    f2 == null || f2(), d2 == null || d2();
  };
}
function ca(s2, t2 = true) {
  getCurrentInstance() ? onMounted(s2) : t2 ? s2() : nextTick(s2);
}
var ua = Object.defineProperty;
var da = Object.defineProperties;
var fa = Object.getOwnPropertyDescriptors;
var wt = Object.getOwnPropertySymbols;
var pa = Object.prototype.hasOwnProperty;
var va = Object.prototype.propertyIsEnumerable;
var $t = (s2, t2, e2) => t2 in s2 ? ua(s2, t2, { enumerable: true, configurable: true, writable: true, value: e2 }) : s2[t2] = e2;
var ma = (s2, t2) => {
  for (var e2 in t2 || (t2 = {}))
    pa.call(t2, e2) && $t(s2, e2, t2[e2]);
  if (wt)
    for (var e2 of wt(t2))
      va.call(t2, e2) && $t(s2, e2, t2[e2]);
  return s2;
};
var ya = (s2, t2) => da(s2, fa(t2));
function ha(s2, t2, e2) {
  return watch(s2, (a2, n2, o2) => {
    a2 && t2(a2, n2, o2);
  }, ya(ma({}, e2), {
    deep: true
  }));
}
function Dt(s2, t2, e2) {
  const a2 = watch(s2, (...n2) => (nextTick(() => a2()), t2(...n2)), e2);
}
function ie(s2) {
  var t2;
  const e2 = E(s2);
  return (t2 = e2 == null ? void 0 : e2.$el) != null ? t2 : e2;
}
var me = at ? window : void 0;
var ba = at ? window.document : void 0;
function G(...s2) {
  let t2, e2, a2, n2;
  if (ea(s2[0]) || Array.isArray(s2[0]) ? ([e2, a2, n2] = s2, t2 = me) : [t2, e2, a2, n2] = s2, !t2)
    return re;
  Array.isArray(e2) || (e2 = [e2]), Array.isArray(a2) || (a2 = [a2]);
  const o2 = [], r2 = () => {
    o2.forEach((f2) => f2()), o2.length = 0;
  }, l2 = (f2, d2, p2, m2) => (f2.addEventListener(d2, p2, m2), () => f2.removeEventListener(d2, p2, m2)), c2 = watch(() => [ie(t2), E(n2)], ([f2, d2]) => {
    r2(), f2 && o2.push(...e2.flatMap((p2) => a2.map((m2) => l2(f2, p2, m2, d2))));
  }, { immediate: true, flush: "post" }), u2 = () => {
    c2(), r2();
  };
  return Oe(u2), u2;
}
var kt = false;
function Le(s2, t2, e2 = {}) {
  const { window: a2 = me, ignore: n2 = [], capture: o2 = true, detectIframe: r2 = false } = e2;
  if (!a2)
    return;
  ta && !kt && (kt = true, Array.from(a2.document.body.children).forEach((p2) => p2.addEventListener("click", re)));
  let l2 = true;
  const c2 = (p2) => n2.some((m2) => {
    if (typeof m2 == "string")
      return Array.from(a2.document.querySelectorAll(m2)).some((y2) => y2 === p2.target || p2.composedPath().includes(y2));
    {
      const y2 = ie(m2);
      return y2 && (p2.target === y2 || p2.composedPath().includes(y2));
    }
  }), f2 = [
    G(a2, "click", (p2) => {
      const m2 = ie(s2);
      if (!(!m2 || m2 === p2.target || p2.composedPath().includes(m2))) {
        if (p2.detail === 0 && (l2 = !c2(p2)), !l2) {
          l2 = true;
          return;
        }
        t2(p2);
      }
    }, { passive: true, capture: o2 }),
    G(a2, "pointerdown", (p2) => {
      const m2 = ie(s2);
      m2 && (l2 = !p2.composedPath().includes(m2) && !c2(p2));
    }, { passive: true }),
    r2 && G(a2, "blur", (p2) => {
      var m2;
      const y2 = ie(s2);
      ((m2 = a2.document.activeElement) == null ? void 0 : m2.tagName) === "IFRAME" && !(y2 != null && y2.contains(a2.document.activeElement)) && t2(p2);
    })
  ].filter(Boolean);
  return () => f2.forEach((p2) => p2());
}
function je() {
  const s2 = ref(false);
  return onMounted(() => {
    s2.value = true;
  }), s2;
}
function Ft(s2) {
  const t2 = je();
  return computed(() => (t2.value, Boolean(s2())));
}
function we(s2, t2 = {}) {
  const { window: e2 = me } = t2, a2 = Ft(() => e2 && "matchMedia" in e2 && typeof e2.matchMedia == "function");
  let n2;
  const o2 = ref(false), r2 = () => {
    n2 && ("removeEventListener" in n2 ? n2.removeEventListener("change", l2) : n2.removeListener(l2));
  }, l2 = () => {
    a2.value && (r2(), n2 = e2.matchMedia(nt(s2).value), o2.value = n2.matches, "addEventListener" in n2 ? n2.addEventListener("change", l2) : n2.addListener(l2));
  };
  return watchEffect(l2), Oe(() => r2()), o2;
}
var ga = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
function _a(s2, t2 = {}) {
  function e2(l2, c2) {
    let u2 = s2[l2];
    return c2 != null && (u2 = na(u2, c2)), typeof u2 == "number" && (u2 = `${u2}px`), u2;
  }
  const { window: a2 = me } = t2;
  function n2(l2) {
    return a2 ? a2.matchMedia(l2).matches : false;
  }
  const o2 = (l2) => we(`(min-width: ${e2(l2)})`, t2), r2 = Object.keys(s2).reduce((l2, c2) => (Object.defineProperty(l2, c2, {
    get: () => o2(c2),
    enumerable: true,
    configurable: true
  }), l2), {});
  return Object.assign(r2, {
    greater(l2) {
      return we(`(min-width: ${e2(l2, 0.1)})`, t2);
    },
    greaterOrEqual: o2,
    smaller(l2) {
      return we(`(max-width: ${e2(l2, -0.1)})`, t2);
    },
    smallerOrEqual(l2) {
      return we(`(max-width: ${e2(l2)})`, t2);
    },
    between(l2, c2) {
      return we(`(min-width: ${e2(l2)}) and (max-width: ${e2(c2, -0.1)})`, t2);
    },
    isGreater(l2) {
      return n2(`(min-width: ${e2(l2, 0.1)})`);
    },
    isGreaterOrEqual(l2) {
      return n2(`(min-width: ${e2(l2)})`);
    },
    isSmaller(l2) {
      return n2(`(max-width: ${e2(l2, -0.1)})`);
    },
    isSmallerOrEqual(l2) {
      return n2(`(max-width: ${e2(l2)})`);
    },
    isInBetween(l2, c2) {
      return n2(`(min-width: ${e2(l2)}) and (max-width: ${e2(c2, -0.1)})`);
    },
    current() {
      const l2 = Object.keys(s2).map((c2) => [c2, o2(c2)]);
      return computed(() => l2.filter(([, c2]) => c2.value).map(([c2]) => c2));
    }
  });
}
function wa(s2) {
  return JSON.parse(JSON.stringify(s2));
}
var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Ke = "__vueuse_ssr_handlers__";
Ue[Ke] = Ue[Ke] || {};
Ue[Ke];
function At(s2, t2, e2 = {}) {
  const { window: a2 = me, initialValue: n2 = "", observe: o2 = false } = e2, r2 = ref(n2), l2 = computed(() => {
    var u2;
    return ie(t2) || ((u2 = a2 == null ? void 0 : a2.document) == null ? void 0 : u2.documentElement);
  });
  function c2() {
    var u2;
    const f2 = E(s2), d2 = E(l2);
    if (d2 && a2) {
      const p2 = (u2 = a2.getComputedStyle(d2).getPropertyValue(f2)) == null ? void 0 : u2.trim();
      r2.value = p2 || n2;
    }
  }
  return o2 && xa(l2, c2, {
    attributes: true,
    window: a2
  }), watch([l2, () => E(s2)], c2, { immediate: true }), watch(r2, (u2) => {
    var f2;
    (f2 = l2.value) != null && f2.style && l2.value.style.setProperty(E(s2), u2);
  }), r2;
}
function $a(s2, t2) {
  const e2 = shallowRef(u2()), a2 = nt(s2), n2 = computed({
    get() {
      var f2;
      const d2 = E(s2);
      let p2 = t2 != null && t2.getIndexOf ? t2.getIndexOf(e2.value, d2) : d2.indexOf(e2.value);
      return p2 < 0 && (p2 = (f2 = t2 == null ? void 0 : t2.fallbackIndex) != null ? f2 : 0), p2;
    },
    set(f2) {
      o2(f2);
    }
  });
  function o2(f2) {
    const d2 = a2.value, p2 = d2.length, m2 = (f2 % p2 + p2) % p2, y2 = d2[m2];
    return e2.value = y2, y2;
  }
  function r2(f2 = 1) {
    return o2(n2.value + f2);
  }
  function l2(f2 = 1) {
    return r2(f2);
  }
  function c2(f2 = 1) {
    return r2(-f2);
  }
  function u2() {
    var f2, d2;
    return (d2 = E((f2 = t2 == null ? void 0 : t2.initialValue) != null ? f2 : E(s2)[0])) != null ? d2 : void 0;
  }
  return watch(a2, () => o2(n2.value)), {
    state: e2,
    index: n2,
    next: l2,
    prev: c2
  };
}
var St = Object.getOwnPropertySymbols;
var ka = Object.prototype.hasOwnProperty;
var Aa = Object.prototype.propertyIsEnumerable;
var Sa = (s2, t2) => {
  var e2 = {};
  for (var a2 in s2)
    ka.call(s2, a2) && t2.indexOf(a2) < 0 && (e2[a2] = s2[a2]);
  if (s2 != null && St)
    for (var a2 of St(s2))
      t2.indexOf(a2) < 0 && Aa.call(s2, a2) && (e2[a2] = s2[a2]);
  return e2;
};
function xa(s2, t2, e2 = {}) {
  const a2 = e2, { window: n2 = me } = a2, o2 = Sa(a2, ["window"]);
  let r2;
  const l2 = Ft(() => n2 && "MutationObserver" in n2), c2 = () => {
    r2 && (r2.disconnect(), r2 = void 0);
  }, u2 = watch(() => ie(s2), (d2) => {
    c2(), l2.value && n2 && d2 && (r2 = new MutationObserver(t2), r2.observe(d2, o2));
  }, { immediate: true }), f2 = () => {
    c2(), u2();
  };
  return Oe(f2), {
    isSupported: l2,
    stop: f2
  };
}
function xt(s2, t2, e2) {
  if (Rt(s2) || isReadonly(s2))
    return computed(() => ze(E(s2), E(t2), E(e2)));
  const a2 = ref(s2);
  return computed({
    get() {
      return a2.value = ze(a2.value, E(t2), E(e2));
    },
    set(n2) {
      a2.value = ze(n2, E(t2), E(e2));
    }
  });
}
function Ca(s2) {
  const {
    total: t2 = 1 / 0,
    pageSize: e2 = 10,
    page: a2 = 1,
    onPageChange: n2 = re,
    onPageSizeChange: o2 = re,
    onPageCountChange: r2 = re
  } = s2, l2 = xt(e2, 1, 1 / 0), c2 = computed(() => Math.max(1, Math.ceil(unref(t2) / unref(l2)))), u2 = xt(a2, 1, c2), f2 = computed(() => u2.value === 1), d2 = computed(() => u2.value === c2.value);
  isRef(a2) && _t(a2, u2), isRef(e2) && _t(e2, l2);
  function p2() {
    u2.value--;
  }
  function m2() {
    u2.value++;
  }
  const y2 = {
    currentPage: u2,
    currentPageSize: l2,
    pageCount: c2,
    isFirstPage: f2,
    isLastPage: d2,
    prev: p2,
    next: m2
  };
  return watch(u2, () => {
    n2(reactive(y2));
  }), watch(l2, () => {
    o2(reactive(y2));
  }), watch(c2, () => {
    r2(reactive(y2));
  }), y2;
}
var Oa = 0;
function Va(s2, t2 = {}) {
  const e2 = ref(false), {
    document: a2 = ba,
    immediate: n2 = true,
    manual: o2 = false,
    id: r2 = `vueuse_styletag_${++Oa}`
  } = t2, l2 = ref(s2);
  let c2 = () => {
  };
  const u2 = () => {
    if (!a2)
      return;
    const d2 = a2.getElementById(r2) || a2.createElement("style");
    d2.isConnected || (d2.type = "text/css", d2.id = r2, t2.media && (d2.media = t2.media), a2.head.appendChild(d2)), !e2.value && (c2 = watch(l2, (p2) => {
      d2.textContent = p2;
    }, { immediate: true }), e2.value = true);
  }, f2 = () => {
    !a2 || !e2.value || (c2(), a2.head.removeChild(a2.getElementById(r2)), e2.value = false);
  };
  return n2 && !o2 && ca(u2), o2 || Oe(f2), {
    id: r2,
    css: l2,
    unload: f2,
    load: u2,
    isLoaded: readonly(e2)
  };
}
function Wt(s2, t2 = {}) {
  const {
    threshold: e2 = 50,
    onSwipe: a2,
    onSwipeEnd: n2,
    onSwipeStart: o2,
    passive: r2 = true,
    window: l2 = me
  } = t2, c2 = reactive({ x: 0, y: 0 }), u2 = reactive({ x: 0, y: 0 }), f2 = computed(() => c2.x - u2.x), d2 = computed(() => c2.y - u2.y), { max: p2, abs: m2 } = Math, y2 = computed(() => p2(m2(f2.value), m2(d2.value)) >= e2), _ = ref(false), N2 = computed(() => y2.value ? m2(f2.value) > m2(d2.value) ? f2.value > 0 ? "left" : "right" : d2.value > 0 ? "up" : "down" : "none"), I = (x2) => [x2.touches[0].clientX, x2.touches[0].clientY], F = (x2, T) => {
    c2.x = x2, c2.y = T;
  }, q = (x2, T) => {
    u2.x = x2, u2.y = T;
  };
  let z;
  const S2 = Ta(l2 == null ? void 0 : l2.document);
  r2 ? z = S2 ? { passive: true } : { capture: false } : z = S2 ? { passive: false, capture: true } : { capture: true };
  const M2 = (x2) => {
    _.value && (n2 == null || n2(x2, N2.value)), _.value = false;
  }, B = [
    G(s2, "touchstart", (x2) => {
      z.capture && !z.passive && x2.preventDefault();
      const [T, K] = I(x2);
      F(T, K), q(T, K), o2 == null || o2(x2);
    }, z),
    G(s2, "touchmove", (x2) => {
      const [T, K] = I(x2);
      q(T, K), !_.value && y2.value && (_.value = true), _.value && (a2 == null || a2(x2));
    }, z),
    G(s2, "touchend", M2, z),
    G(s2, "touchcancel", M2, z)
  ];
  return {
    isPassiveEventSupported: S2,
    isSwiping: _,
    direction: N2,
    coordsStart: c2,
    coordsEnd: u2,
    lengthX: f2,
    lengthY: d2,
    stop: () => B.forEach((x2) => x2())
  };
}
function Ta(s2) {
  if (!s2)
    return false;
  let t2 = false;
  const e2 = {
    get passive() {
      return t2 = true, false;
    }
  };
  return s2.addEventListener("x", re, e2), s2.removeEventListener("x", re), t2;
}
function qt(s2, t2, e2, a2 = {}) {
  var n2, o2, r2;
  const {
    clone: l2 = false,
    passive: c2 = false,
    eventName: u2,
    deep: f2 = false,
    defaultValue: d2,
    shouldEmit: p2
  } = a2, m2 = getCurrentInstance(), y2 = e2 || (m2 == null ? void 0 : m2.emit) || ((n2 = m2 == null ? void 0 : m2.$emit) == null ? void 0 : n2.bind(m2)) || ((r2 = (o2 = m2 == null ? void 0 : m2.proxy) == null ? void 0 : o2.$emit) == null ? void 0 : r2.bind(m2 == null ? void 0 : m2.proxy));
  let _ = u2;
  t2 || (t2 = "modelValue"), _ = u2 || _ || `update:${t2.toString()}`;
  const N2 = (q) => l2 ? Rt(l2) ? l2(q) : wa(q) : q, I = () => Zs(s2[t2]) ? N2(s2[t2]) : d2, F = (q) => {
    p2 ? p2(q) && y2(_, q) : y2(_, q);
  };
  if (c2) {
    const q = I(), z = ref(q);
    return watch(() => s2[t2], (S2) => z.value = N2(S2)), watch(z, (S2) => {
      (S2 !== s2[t2] || f2) && F(S2);
    }, { deep: f2 }), z;
  } else
    return computed({
      get() {
        return I();
      },
      set(q) {
        F(q);
      }
    });
}
var Ia = (s2) => Object.values(s2).map(
  (t2) => `${t2.class ? `.${t2.class}` : ":root"}{${Object.entries(t2.colors).concat(Object.entries(t2.cssVars)).concat([["primary-hue", t2.colors.primary.split(",")[0]]]).map(([e2, a2]) => `--a-${e2}:${a2};`).join("")}}`
).join("");
var rt = zs((s2) => {
  const t2 = ref(s2.themes), e2 = ref(s2.initialTheme), a2 = computed(() => ({
    name: e2.value,
    theme: t2.value[e2.value]
  })), n2 = ref("");
  return Va(n2), watch(
    () => Object.values(t2.value).map((o2) => [o2.colors, o2.cssVars]).flat(),
    () => {
      n2.value = Ia(t2.value);
    },
    { deep: true, immediate: true }
  ), watch(e2, (o2, r2) => {
    const l2 = t2.value[o2];
    if (l2 && l2.class && document.documentElement.classList.toggle(l2.class), r2) {
      const c2 = t2.value[r2];
      c2 && c2.class && document.documentElement.classList.toggle(c2.class);
    }
  }, { immediate: true }), {
    themes: t2,
    activeThemeName: e2,
    activeTheme: a2
  };
});
var Me = (s2) => computed(() => {
  let t2 = [];
  const { activeTheme: e2 } = rt();
  return t2 = Object.keys(e2.value.theme.colors), !!(s2 && t2.includes(s2));
});
var lt = (s2, t2, e2 = "text") => ({
  styles: computed(() => {
    const n2 = unref(s2), o2 = computed(() => `--a-${unref(t2)}`), r2 = e2 === "bg" ? "background-color" : "color", l2 = Me(n2);
    return {
      [o2.value]: l2.value ? `var(--a-${n2})` : n2,
      [r2]: `hsla(var(${o2.value}), var(${o2.value}-opacity, 1))`
    };
  })
});
var ye = {
  type: [String, void 0]
};
var le = { type: Boolean };
var zt = { type: Boolean };
var Y = { type: [Array, String, Number, Object, void 0] };
var ot = createDefu((s2, t2, e2) => {
  if (t2 === "type")
    return s2[t2] = e2, true;
  if (t2 === "required" && e2)
    return delete s2.default, s2[t2] = e2, true;
});
var Xe = function(s2) {
  var t2 = s2 / 255;
  return t2 < 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
};
var He = function(s2) {
  return 0.2126 * Xe(s2.r) + 0.7152 * Xe(s2.g) + 0.0722 * Xe(s2.b);
};
function Pa(s2) {
  s2.prototype.luminance = function() {
    return t2 = He(this.rgba), (e2 = 2) === void 0 && (e2 = 0), a2 === void 0 && (a2 = Math.pow(10, e2)), Math.round(a2 * t2) / a2 + 0;
    var t2, e2, a2;
  }, s2.prototype.contrast = function(t2) {
    t2 === void 0 && (t2 = "#FFF");
    var e2, a2, n2, o2, r2, l2, c2, u2 = t2 instanceof s2 ? t2 : new s2(t2);
    return o2 = this.rgba, r2 = u2.toRgb(), l2 = He(o2), c2 = He(r2), e2 = l2 > c2 ? (l2 + 0.05) / (c2 + 0.05) : (c2 + 0.05) / (l2 + 0.05), (a2 = 2) === void 0 && (a2 = 0), n2 === void 0 && (n2 = Math.pow(10, a2)), Math.floor(n2 * e2) / n2 + 0;
  }, s2.prototype.isReadable = function(t2, e2) {
    return t2 === void 0 && (t2 = "#FFF"), e2 === void 0 && (e2 = {}), this.contrast(t2) >= (l2 = (r2 = (a2 = e2).size) === void 0 ? "normal" : r2, (o2 = (n2 = a2.level) === void 0 ? "AA" : n2) === "AAA" && l2 === "normal" ? 7 : o2 === "AA" && l2 === "large" ? 3 : 4.5);
    var a2, n2, o2, r2, l2;
  };
}
function Ba(s2) {
  var t2 = { analogous: [-30, 0, 30], complementary: [0, 180], "double-split-complementary": [-30, 0, 30, 150, 210], rectangle: [0, 60, 180, 240], tetradic: [0, 90, 180, 270], triadic: [0, 120, 240], "split-complementary": [0, 150, 210] };
  s2.prototype.harmonies = function(e2) {
    var a2 = this;
    return e2 === void 0 && (e2 = "complementary"), t2[e2].map(function(n2) {
      return a2.rotate(n2);
    });
  };
}
function Ea(s2, t2) {
  var e2 = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, a2 = {};
  for (var n2 in e2)
    a2[e2[n2]] = n2;
  var o2 = {};
  s2.prototype.toName = function(r2) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var l2, c2, u2 = a2[this.toHex()];
    if (u2)
      return u2;
    if (r2 != null && r2.closest) {
      var f2 = this.toRgb(), d2 = 1 / 0, p2 = "black";
      if (!o2.length)
        for (var m2 in e2)
          o2[m2] = new s2(e2[m2]).toRgb();
      for (var y2 in e2) {
        var _ = (l2 = f2, c2 = o2[y2], Math.pow(l2.r - c2.r, 2) + Math.pow(l2.g - c2.g, 2) + Math.pow(l2.b - c2.b, 2));
        _ < d2 && (d2 = _, p2 = y2);
      }
      return p2;
    }
  }, t2.string.push([function(r2) {
    var l2 = r2.toLowerCase(), c2 = l2 === "transparent" ? "#0000" : e2[l2];
    return c2 ? new s2(c2).toRgb() : null;
  }, "name"]);
}
k([Pa, Ea, Ba]);
var La = (s2) => {
  s2.prototype.contrasting = function() {
    return this.isLight() ? w("#000") : w("#fff");
  }, s2.prototype.toHslValue = function() {
    return this.toHslString().replace(/hsla?\(([\d\s]+,[\d\s]+%,[\d\s]+%).*/gm, "$1");
  };
};
k([La]);
var ja = (s2, t2, e2) => {
  const a2 = [], n2 = [];
  if (s2)
    a2.push("a-title-opacity-100 a-subtitle-opacity-100"), e2 !== "fill" ? a2.push(`a-title-${t2} a-subtitle-${t2}`) : n2.push("--a-title-c: 0, 0%, 100%; --a-subtitle-c: 0, 0%, 100%");
  else if (t2 !== void 0) {
    const o2 = t2 === null ? "var(--a-base-c)" : w(t2).toHslValue();
    n2.push(`--a-title-c: ${o2}; --a-subtitle-c: ${o2};`), a2.push(
      t2 === null ? "[--a-title-opacity:var(--a-text-emphasis-high-opacity)] [--a-subtitle-opacity:var(--a-text-emphasis-light-opacity)]" : "a-subtitle-opacity-100"
    );
  }
  return {
    classes: a2,
    styles: n2
  };
};
var Ma = (s2, t2) => {
  const e2 = ref([]), a2 = ref([]), n2 = E(s2), o2 = E(t2), r2 = Me(n2);
  return watch([() => s2, () => t2], () => {
    const l2 = ja(r2.value, n2, o2);
    e2.value = l2.classes, a2.value = l2.styles;
  }, { immediate: true }), {
    typographyClasses: e2,
    typographyStyles: a2
    // typographyClasses,
  };
};
var he = (s2) => {
  let t2 = {
    /**
     * Layer color
     */
    color: ye,
    /**
     * Layer variant
     */
    variant: {
      type: String,
      // validator: (value: string) => ['fill', 'outline', 'light', 'text'].includes(value),
      default: "text"
    },
    /**
     * Interaction states like hover & active
     */
    states: {
      type: Boolean,
      default: false
    }
  };
  return s2 && (t2 = defu(s2, t2)), t2;
};
var be = () => {
  const s2 = (e2, a2, n2, o2 = {}) => {
    const r2 = [], l2 = defu(o2, { statesClass: "states" }), c2 = [
      n2 && l2.statesClass
    ], { typographyClasses: u2, typographyStyles: f2 } = Ma(e2, a2);
    if (c2.push(u2.value), r2.push(f2.value), Me(e2).value)
      r2.push({ "--a-layer-c": `var(--a-${e2})` }), a2 === "fill" ? (r2.push({ background: "hsla(var(--a-layer-c),var(--a-layer-opacity))" }), c2.push("[--a-layer-opacity:1]"), e2 != null && c2.push("text-white")) : a2 === "light" ? (r2.push({ background: "hsla(var(--a-layer-c),var(--a-layer-opacity))" }), c2.push("[--a-layer-opacity:0.15]"), e2 != null && c2.push(`text-${e2}`)) : a2 === "outline" ? (c2.push("border-width-1", "border-solid"), r2.push({ borderColor: "hsl(var(--a-layer-c)" }), e2 != null && c2.push("text-[hsl(var(--a-layer-c))]")) : a2 === "text" && e2 != null && c2.push("text-[hsl(var(--a-layer-c))]");
    else if (e2 === "inherit")
      c2.push("text-inherit"), a2 === "outline" && c2.push("border-width-1 border-solid border-current");
    else if (e2) {
      const p2 = w(e2);
      r2.push({ "--a-layer-c": p2.toHslValue() }), a2 === "fill" ? (r2.push({ background: "hsla(var(--a-layer-c),var(--a-layer-opacity))" }), c2.push("[--a-layer-opacity:1]"), e2 != null && r2.push({ color: p2.contrasting().toHslString() })) : a2 === "light" ? (r2.push({ background: "hsla(var(--a-layer-c),var(--a-layer-opacity))" }), c2.push("[--a-layer-opacity:0.15]"), e2 != null && r2.push({ color: "hsl(var(--a-layer-c))" })) : a2 === "outline" ? (c2.push("border-width-1", "border-solid"), r2.push({ borderColor: "hsl(var(--a-layer-c))" }), e2 != null && r2.push({ color: "hsl(var(--a-layer-c))" })) : a2 === "text" && e2 != null && r2.push({ color: "hsl(var(--a-layer-c))" });
    }
    return {
      styles: r2,
      classes: c2
    };
  };
  return {
    getLayerClasses: (e2, a2, n2, o2) => {
      const r2 = ref([]), l2 = ref([]);
      return watch([e2, a2, n2, () => unref(o2)], () => {
        const { classes: c2, styles: u2 } = s2(unref(e2), unref(a2), unref(n2), unref(o2));
        r2.value = c2, l2.value = u2;
      }, { immediate: true }), {
        classes: r2,
        styles: l2
      };
    }
  };
};
var Na = { key: 0 };
var Ra = {
  class: "flex-grow",
  "data-no-reference": ""
};
var Da = defineComponent({
  name: "AAlert"
});
var Fa = defineComponent({
  ...Da,
  props: {
    ...he({
      color: {
        default: "primary"
      },
      variant: {
        default: "light"
      }
    }),
    /**
     * prepend icon
     */
    icon: Y,
    /**
     * append (close) icon
     */
    appendIcon: Y,
    /**
     * Make alert dismissible using this prop. Adds close icon as appended icon.
     */
    dismissible: Boolean,
    /**
     * Hide/Show alert based on v-model value
     */
    modelValue: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["click:appendIcon", "update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = qt(e2, "modelValue", t2, { defaultValue: true, passive: true }), { getLayerClasses: n2 } = be(), { styles: o2, classes: r2 } = n2(
      toRef(e2, "color"),
      toRef(e2, "variant"),
      toRef(e2, "states")
    ), l2 = e2.appendIcon || (e2.dismissible ? "i-bx-x" : null), c2 = () => {
      a2.value = false, t2("click:appendIcon");
    }, u2 = computed(() => e2.dismissible ? {
      icon: l2,
      ariaLabel: "close"
    } : {
      class: l2
    });
    return (f2, d2) => (openBlock(), createElementBlock("div", {
      role: "alert",
      class: normalizeClass(["a-alert items-start w-full", [
        ...unref(r2),
        unref(a2) ? "flex" : "hidden"
      ]]),
      style: normalizeStyle(unref(o2))
    }, [
      e2.icon ? (openBlock(), createElementBlock("div", Na, [
        createBaseVNode("i", {
          class: normalizeClass(e2.icon)
        }, null, 2)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", Ra, [
        renderSlot(f2.$slots, "default")
      ]),
      createBaseVNode("div", null, [
        renderSlot(f2.$slots, "append", {}, () => [
          unref(l2) ? (openBlock(), createBlock(resolveDynamicComponent(e2.dismissible ? unref(Qt) : "i"), mergeProps({
            key: 0,
            class: "align-text-top"
          }, unref(u2), { onClick: c2 }), null, 16)) : createCommentVNode("", true)
        ])
      ])
    ], 6));
  }
});
var Wa = {
  ...he({
    color: {
      default: "primary"
    },
    variant: {
      default: "light"
    }
  }),
  /**
   * Icon to render in avatar
   */
  icon: Y,
  /**
   * Content to render inside avatar
   */
  content: String,
  /**
   * Render image using this prop
   */
  src: String,
  /**
   * Provide alt attribute for image given by `src` prop
   */
  alt: {
    type: String,
    default: "avatar"
  }
};
var qa = ["src", "alt"];
var za = { key: 2 };
var Xa = defineComponent({
  name: "AAvatar"
});
var Ge = defineComponent({
  ...Xa,
  props: Wa,
  setup(s2) {
    const t2 = s2, { getLayerClasses: e2 } = be(), { styles: a2, classes: n2 } = e2(
      toRef(t2, "color"),
      toRef(t2, "variant"),
      toRef(t2, "states")
    );
    return (o2, r2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["a-avatar overflow-hidden inline-flex items-center justify-center", unref(n2)]),
      style: normalizeStyle(unref(a2))
    }, [
      renderSlot(o2.$slots, "default", {}, () => [
        t2.src ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: t2.src,
          alt: t2.alt
        }, null, 8, qa)) : t2.icon ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(t2.icon)
        }, null, 2)) : (openBlock(), createElementBlock("span", za, toDisplayString(t2.content), 1))
      ])
    ], 6));
  }
});
var Ha = { class: "a-badge-wrapper relative" };
var Ct = 4;
var Ot = 12;
var Ya = defineComponent({
  name: "ABadge",
  inheritAttrs: false
});
var Ua = defineComponent({
  ...Ya,
  props: {
    /**
     * Show/Hide badge based on v-model value
     */
    modelValue: {
      type: Boolean,
      default: true
    },
    /**
     * Sets badge color
     */
    color: defu({
      default: "primary"
    }, ye),
    /**
     * Converts badge to a dot
     */
    dot: Boolean,
    /**
    * Adds badge border
    */
    bordered: {
      type: Boolean,
      default: true
    },
    /**
     * Sets the highest possible value
     */
    max: Number,
    /**
     * Use to pass numeric values
     */
    content: [Number, String],
    /**
     * Sets the badge position
     */
    anchor: {
      type: String,
      default: "top right"
    },
    /**
     * Adjusts position of badge
     */
    overlap: {
      type: Boolean,
      default: true
    },
    /**
     * Sets offset on x-axis
     */
    offsetX: {
      type: [Number, String],
      default: 4
    },
    /**
     * Sets offset on y-axis
     */
    offsetY: {
      type: [Number, String],
      default: 4
    }
  },
  setup(s2) {
    const t2 = s2, e2 = (o2) => {
      if (!Vs(o2) || t2.max === void 0)
        return o2;
      const r2 = Number(o2);
      return r2 > t2.max ? `${t2.max}+` : r2;
    }, a2 = computed(() => {
      const o2 = t2.overlap && Ct === t2.offsetY ? Ot : t2.offsetY, r2 = t2.overlap && Ct === t2.offsetX ? Ot : t2.offsetX;
      return { y: o2, x: r2 };
    }), n2 = computed(() => {
      const [o2, r2] = t2.anchor.split(" ");
      return {
        top: o2 === "top" ? "auto" : `calc(100% - ${a2.value.y}px)`,
        bottom: o2 === "bottom" ? "auto" : `calc(100% - ${a2.value.y}px)`,
        left: r2 === "left" ? "auto" : `calc(100% - ${a2.value.x}px)`,
        right: r2 === "right" ? "auto" : `calc(100% - ${a2.value.x}px)`
      };
    });
    return (o2, r2) => (openBlock(), createElementBlock("div", Ha, [
      renderSlot(o2.$slots, "default"),
      createVNode(Transition, { name: "dialog" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", mergeProps(o2.$attrs, {
            class: ["a-badge absolute", [
              `bg-${t2.color}`,
              { "a-badge-dot": t2.dot },
              { "a-badge-bordered": t2.bordered }
            ]],
            style: unref(n2)
          }), [
            t2.dot ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              o2.$slots.content ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(e2(o2.$slots.content()[0].children)), 1)
              ], 64)) : t2.content ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(e2(t2.content)), 1)
              ], 64)) : createCommentVNode("", true)
            ], 64))
          ], 16), [
            [vShow, t2.modelValue]
          ])
        ]),
        _: 1
      })
    ]));
  }
});
var ve = {
  /**
   * Input wrapper classes
   */
  // ℹ️ If we want any type need to set `propName: { type: null }`. Using `propName: null` will omit (disable) the prop.
  inputWrapperClasses: { type: null },
  /**
   * Input classes
   */
  // ℹ️ If we want any type need to set `propName: { type: null }`. Using `propName: null` will omit (disable) the prop.
  inputClasses: { type: null },
  /**
   * Input container classes
   */
  inputContainerAttrs: Object,
  /**
   * Add hint below the form component
   */
  hint: String,
  /**
   * Error text to render. This will replace hint text if provided.
   */
  error: String,
  /**
   * Label of the form component
   */
  label: Y,
  /**
   * Prepend icon
   */
  prependIcon: String,
  /**
   * Append icon
   */
  appendIcon: String,
  /**
   * Prepend icon inside input
   */
  prependInnerIcon: String,
  /**
   * Append icon inside input
   */
  appendInnerIcon: String,
  /**
   * Set component in disabled state
   */
  disabled: le,
  /**
   * Set component in readonly mode
   */
  readonly: zt,
  /**
   * Set loading state
   */
  loading: {
    type: Boolean,
    default: false
  }
};
var Ne = {
  /**
   * Typography title
   */
  title: Y,
  /**
   * Typography subtitle
   */
  subtitle: Y,
  /**
   * Typography text content
   */
  text: Y,
  /**
   * Tag to use for title of the component
   */
  titleTag: {
    type: String,
    default: "span"
  },
  /**
   * Tag to use for subtitle of the component
   */
  subtitleTag: {
    type: String,
    default: "span"
  },
  /**
   * Tag to use for text rendered via `text` prop
   */
  textTag: {
    type: String,
    default: "span"
  }
};
var Ka = {
  ...Ne,
  /**
   * Toggle loading state
   */
  loading: {
    type: Boolean,
    default: true
  },
  /**
   * Display loader in full page mode
   */
  fullPage: {
    type: Boolean,
    default: false
  }
};
var Xt = (s2, t2) => {
  const { title: e2, subtitle: a2, text: n2 } = s2, o2 = (r2) => r2 && r2.value ? typeof r2.value == "string" ? !!r2.value : typeof r2.value == "number" ? (r2.value ?? null) !== null : !!r2.value.length : false;
  return o2(e2) || o2(a2) || o2(n2) || t2.title || t2.subtitle || t2["header-right"];
};
var ue = (s2) => computed(
  () => {
    const t2 = E(s2), [e2, a2, n2] = t2 === void 0 ? [] : typeof t2 == "string" || typeof t2 == "number" ? [t2] : t2;
    return { content: e2, classes: a2, attrs: n2 };
  }
);
var Re = (s2) => {
  const t2 = ref(), e2 = At("--scrollbar-width", t2), a2 = At("--window-scroll-top", t2);
  watch(s2, (n2) => {
    e2.value || (e2.value = `${window.innerWidth - document.body.clientWidth}px`);
    const o2 = document.documentElement.classList;
    if (n2)
      a2.value = `-${window.scrollY}px`, o2.add("scroll-lock");
    else {
      const r2 = a2.value;
      o2.remove("scroll-lock"), window.scrollTo(0, parseInt(r2 || "0") * -1);
    }
  });
};
var Ga = {
  key: 0,
  class: "a-loader-typography-wrapper"
};
var Ja = defineComponent({
  name: "ALoader"
});
var it = defineComponent({
  ...Ja,
  props: Ka,
  setup(s2) {
    const t2 = s2, e2 = useSlots(), a2 = ref(t2.loading);
    Dt(
      () => t2.loading,
      () => {
        a2.value = true;
      }
    );
    const n2 = Xt(toRefs(t2), e2), o2 = ue(toRef(t2, "text"));
    return o2.value.classes === void 0 ? o2.value.classes = "text-sm" : Array.isArray(o2.value.classes) ? o2.value.classes = [...o2.value.classes, "text-sm"] : o2.value.classes = " text-sm", t2.fullPage && Re(toRef(t2, "loading")), (r2, l2) => {
      const c2 = resolveComponent("ATypography");
      return unref(a2) ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["a-loader overlay flex items-center justify-center flex-col text-center gap-4", [t2.loading && "opacity-100", t2.fullPage && "a-loader-full-page fixed inset-0 z-54"]])
      }, [
        renderSlot(r2.$slots, "default", {}, () => [
          createVNode(unref(Fe), { class: "a-loader-spinner text-[hsl(var(--a-layer-c))]" })
        ]),
        unref(n2) ? (openBlock(), createElementBlock("div", Ga, [
          createVNode(c2, {
            title: t2.title,
            subtitle: t2.subtitle,
            text: Object.values(unref(o2)),
            style: { "--a-title-c": "var(--a-layer-c)", "--a-subtitle-c": "var(--a-layer-c)" }
          }, createSlots({ _: 2 }, [
            renderList(Object.keys(r2.$slots).filter((u2) => u2 !== "default"), (u2) => ({
              name: u2,
              fn: withCtx((f2) => [
                renderSlot(r2.$slots, u2, normalizeProps(guardReactiveProps(f2 || {})))
              ])
            }))
          ]), 1032, ["title", "subtitle", "text"])
        ])) : createCommentVNode("", true)
      ], 2)), [
        [vShow, t2.loading]
      ]) : createCommentVNode("", true);
    };
  }
});
var Qa = defineComponent({
  name: "TransitionExpand",
  setup(s2, { slots: t2 }) {
    const e2 = (o2) => {
      const r2 = getComputedStyle(o2).width;
      o2.style.width = r2, o2.style.position = "absolute", o2.style.visibility = "hidden", o2.style.height = "auto";
      const l2 = getComputedStyle(o2).height;
      o2.style.width = "", o2.style.position = "", o2.style.visibility = "", o2.style.height = "0px", getComputedStyle(o2).height, requestAnimationFrame(() => {
        o2.style.height = l2;
      });
    }, a2 = (o2) => {
      o2.style.height = "auto";
    }, n2 = (o2) => {
      const r2 = getComputedStyle(o2).height;
      o2.style.height = r2, getComputedStyle(o2).height, requestAnimationFrame(() => {
        o2.style.height = "0px";
      });
    };
    return () => h(
      h(Transition),
      {
        name: "expand",
        onEnter: e2,
        onAfterEnter: a2,
        onLeave: n2
      },
      () => {
        var o2;
        return (o2 = t2.default) == null ? void 0 : o2.call(t2);
      }
    );
  }
});
var Ht = (s2, t2) => {
  const e2 = s2.__vccOpts || s2;
  for (const [a2, n2] of t2)
    e2[a2] = n2;
  return e2;
};
var Za = Ht(Qa, [["__scopeId", "data-v-f9e96780"]]);
var en = ["for"];
var tn = { class: "h-8" };
var Te = "transition duration-150 ease-in";
var sn = defineComponent({
  name: "ABaseInput"
});
var De = defineComponent({
  ...sn,
  props: ve,
  emits: ["click:inputWrapper"],
  setup(s2, { expose: t2 }) {
    const e2 = s2, a2 = useAttrs(), n2 = ue(toRef(e2, "label")), o2 = a2.id || e2.label, r2 = o2 ? `a-input-${o2}-${Math.random().toString(36).slice(2, 7)}` : void 0, l2 = ref(), c2 = ref();
    return t2({
      refRoot: l2,
      refInputContainer: c2
    }), (u2, f2) => (openBlock(), createElementBlock("div", {
      ref_key: "refRoot",
      ref: l2,
      class: normalizeClass(["a-base-input-root i:children:focus-within:text-primary flex flex-col flex-grow flex-shrink-0", [
        e2.disabled && "a-base-input-disabled",
        (e2.disabled || e2.readonly) && "pointer-events-none",
        !(e2.disabled || e2.readonly) && "a-base-input-interactive"
      ]])
    }, [
      renderSlot(u2.$slots, "label", {}, () => [
        e2.label ? (openBlock(), createElementBlock("label", mergeProps({
          key: 0,
          for: unref(r2),
          class: "a-base-input-label"
        }, unref(n2).attrs, {
          class: [e2.error && "text-danger", unref(n2).classes]
        }), toDisplayString(unref(n2).content), 17, en)) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", mergeProps({
        ref_key: "refInputContainer",
        ref: c2,
        class: "a-base-input-input-container flex items-center"
      }, e2.inputContainerAttrs), [
        renderSlot(u2.$slots, "prepend", {}, () => [
          e2.prependIcon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([Te, e2.prependIcon])
          }, null, 2)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: normalizeClass([[e2.inputWrapperClasses, e2.error ? "border-danger" : "focus-within:border-primary"], "a-base-input-input-wrapper cursor-text em:spacing:px-4 spacing:gap-x-2 relative i:focus-within:text-primary items-center border border-solid border-a-border w-full"]),
          onClick: f2[0] || (f2[0] = (d2) => u2.$emit("click:inputWrapper"))
        }, [
          renderSlot(u2.$slots, "prepend-inner", {}, () => [
            e2.prependInnerIcon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(["a-base-input-prepend-inner-icon", [Te, e2.prependInnerIcon]])
            }, null, 2)) : createCommentVNode("", true)
          ]),
          renderSlot(u2.$slots, "default", {
            id: unref(r2),
            readonly: e2.readonly,
            disabled: e2.disabled,
            class: normalizeClass(["a-base-input-child w-full h-full inset-0 rounded-inherit bg-transparent", [
              e2.inputClasses,
              u2.$slots["prepend-inner"] || e2.prependInnerIcon ? "a-base-input-w-prepend-inner" : "a-base-input-wo-prepend-inner",
              u2.$slots["append-inner"] || e2.appendInnerIcon ? "a-base-input-w-append-inner" : "a-base-input-wo-append-inner"
            ]])
          }),
          renderSlot(u2.$slots, "append-inner", {}, () => [
            e2.loading ? (openBlock(), createBlock(unref(it), { key: 0 })) : e2.appendInnerIcon ? (openBlock(), createElementBlock("i", {
              key: 1,
              class: normalizeClass(["a-base-input-append-inner-icon ms-auto", [Te, e2.appendInnerIcon]])
            }, null, 2)) : createCommentVNode("", true)
          ])
        ], 2),
        renderSlot(u2.$slots, "append", {}, () => [
          e2.appendIcon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([Te, e2.appendIcon])
          }, null, 2)) : createCommentVNode("", true)
        ])
      ], 16),
      renderSlot(u2.$slots, "bottom", {}, () => [
        createVNode(Za, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", tn, [
              createBaseVNode("small", {
                class: normalizeClass(["inline-block", [e2.error ? "text-danger" : "text-light-emphasis"]])
              }, toDisplayString(e2.error || e2.hint), 3)
            ], 512), [
              [vShow, e2.error || e2.hint]
            ])
          ]),
          _: 1
        })
      ])
    ], 2));
  }
});
var an = {
  label: {},
  prepend: {},
  "prepend-inner": {},
  "append-inner": {},
  append: {},
  bottom: {},
  default: {
    id: String(),
    readonly: Boolean(),
    disabled: Boolean(),
    class: Object
  }
};
var nn = {
  // let vue-component-meta found it
  /* @ts-expect-error We need to redefine default value so volar can use it for generating component meta */
  color: { default: "primary" },
  /* @ts-expect-error We need to redefine default value so volar can use it for generating component meta */
  variant: { default: "fill" },
  ...he({
    color: {
      default: "primary"
    },
    variant: {
      default: "fill"
    },
    states: {
      default: true
    }
  }),
  /**
   * Render icon before button text
   */
  icon: Y,
  /**
   * Append icon after button text
   */
  appendIcon: Y,
  /**
   * Mark button as icon only button to apply square styling
   */
  iconOnly: Boolean,
  /**
   * Set component in disabled state
   */
  disabled: le,
  /**
   * Set button loading state.
   * Although, `loading` prop accepts boolean value, we set default value to `undefined` to indicate button won't ever use loading (show/hide) and won't render `ASpinner` component.
   * However, if `loading` prop is set to any boolean value (`false`/`true`) it will always render `ASpinner` component.
   */
  loading: {
    type: Boolean,
    default: void 0
  }
};
var rn = defineComponent({
  name: "ASpinner"
});
var ln = (s2) => (pushScopeId("data-v-75ff79bd"), s2 = s2(), popScopeId(), s2);
var on = {
  fill: "none",
  viewBox: "-120,-120,240,240",
  xmlns: "http://www.w3.org/2000/svg",
  class: "a-spinner shrink-0 inline-block em:w-[1.2em] aspect-square animate-spin animate-duration-[var(--a-spin-duration,_1s)]"
};
var cn = ln(() => createBaseVNode("g", { class: "-rotate-90" }, [
  createBaseVNode("circle", {
    class: "a-spinner-ring stroke-[var(--a-ring-color,_currentColor)] stroke-width-[var(--a-ring-stroke,_40)] opacity-[var(--a-ring-opacity,_.25)]",
    r: "100"
  }),
  createBaseVNode("circle", {
    r: "100",
    class: "a-spinner-arc stroke-[var(--a-arc-color,_currentColor)] stroke-width-[var(--a-arc-stroke,_40)] opacity-[var(--a-arc-opacity)]",
    "stroke-dasharray": "219.9114857512855 628.3185307179587",
    "stroke-dashoffset": "0"
  })
], -1));
var un = [
  cn
];
function dn(s2, t2, e2, a2, n2, o2) {
  return openBlock(), createElementBlock("svg", on, un);
}
var Fe = Ht(rn, [["render", dn], ["__scopeId", "data-v-75ff79bd"]]);
var fn = ["tabindex", "disabled"];
var pn = defineComponent({
  name: "ABtn"
});
var Je = defineComponent({
  ...pn,
  props: nn,
  setup(s2) {
    const t2 = s2, { getLayerClasses: e2 } = be(), { styles: a2, classes: n2 } = e2(
      toRef(t2, "color"),
      toRef(t2, "variant"),
      toRef(t2, "states")
    );
    return (o2, r2) => (openBlock(), createElementBlock("button", {
      tabindex: t2.disabled ? -1 : 0,
      style: normalizeStyle(unref(a2)),
      class: normalizeClass(["inline-flex whitespace-nowrap justify-center items-center relative", [
        t2.iconOnly ? "a-btn-icon-only" : "a-btn",
        t2.disabled && "opacity-50 pointer-events-none",
        unref(n2)
      ]]),
      disabled: t2.disabled ? true : void 0
    }, [
      typeof t2.loading == "boolean" ? (openBlock(), createBlock(unref(Fe), {
        key: 0,
        class: normalizeClass(["absolute", [!t2.loading && "opacity-0"]])
      }, null, 8, ["class"])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(["a-btn-content", [t2.loading && "opacity-0"]]),
        "data-no-reference": ""
      }, [
        t2.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(t2.icon)
        }, null, 2)) : createCommentVNode("", true),
        renderSlot(o2.$slots, "default"),
        t2.appendIcon ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(t2.appendIcon)
        }, null, 2)) : createCommentVNode("", true)
      ], 2)
    ], 14, fn));
  }
});
var vn = { class: "gap-4 flex flex-col" };
var mn = {
  key: 0,
  class: "flex justify-between"
};
var yn = { class: "flex-grow" };
var hn = defineComponent({
  name: "ATypography"
});
var ct = defineComponent({
  ...hn,
  props: Ne,
  setup(s2) {
    const t2 = s2, e2 = ue(toRef(t2, "title")), a2 = ue(toRef(t2, "subtitle")), n2 = ue(toRef(t2, "text"));
    return (o2, r2) => (openBlock(), createElementBlock("div", vn, [
      o2.$slots.title || t2.title || o2.$slots.subtitle || t2.subtitle || o2.$slots["header-right"] ? (openBlock(), createElementBlock("div", mn, [
        createBaseVNode("div", yn, [
          (Array.isArray(t2.title) ? t2.title[0] : t2.title) || o2.$slots.title ? (openBlock(), createBlock(resolveDynamicComponent(t2.titleTag), mergeProps({ key: 0 }, unref(e2).attrs, {
            class: ["a-title", [unref(e2).classes]]
          }), {
            default: withCtx(() => [
              renderSlot(o2.$slots, "title", {}, () => [
                createTextVNode(toDisplayString(unref(e2).content), 1)
              ])
            ]),
            _: 3
          }, 16, ["class"])) : createCommentVNode("", true),
          (Array.isArray(t2.subtitle) ? t2.subtitle[0] : t2.subtitle) || o2.$slots.subtitle ? (openBlock(), createBlock(resolveDynamicComponent(t2.subtitleTag), mergeProps({ key: 1 }, unref(a2).attrs, {
            class: ["a-subtitle", [unref(a2).classes]]
          }), {
            default: withCtx(() => [
              renderSlot(o2.$slots, "subtitle", {}, () => [
                createTextVNode(toDisplayString(unref(a2).content), 1)
              ])
            ]),
            _: 3
          }, 16, ["class"])) : createCommentVNode("", true)
        ]),
        renderSlot(o2.$slots, "header-right")
      ])) : createCommentVNode("", true),
      (Array.isArray(t2.text) ? t2.text[0] : t2.text) || o2.$slots.text ? (openBlock(), createBlock(resolveDynamicComponent(t2.textTag), mergeProps({ key: 1 }, unref(n2).attrs, {
        class: ["a-text", [unref(n2).classes]]
      }), {
        default: withCtx(() => [
          renderSlot(o2.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(unref(n2).content), 1)
          ])
        ]),
        _: 3
      }, 16, ["class"])) : createCommentVNode("", true)
    ]));
  }
});
var xe = {
  ...he(),
  ...Ne,
  /**
   * Render image at the top of the card (_above header_)
   */
  img: String,
  /**
   * `alt` attribute for image rendered via `img` prop
   */
  imgAlt: String,
  /**
   * Set loading state
   */
  loading: {
    type: [Boolean, Object],
    default: void 0
  }
};
var bn = {
  /**
   * Render custom content for title
   */
  title: {},
  /**
   * Render custom content for subtitle
   */
  subtitle: {},
  /**
   * Render custom content on right side of title & subtitle.
   * Content inside this slot will be vertically centered to title & subtitle.
   */
  "header-right": {},
  /**
   * Default slot for rendering text.
   */
  default: {}
};
var gn = {
  /**
   *  Default slot for rendering card content
   */
  default: {}
};
var { default: bl, ...Yt } = bn;
var _n = {
  ...gn,
  ...Yt
};
var wn = ["src", "alt"];
var $n = {
  key: 2,
  class: "a-card-typography-wrapper"
};
var kn = defineComponent({
  name: "ACard"
});
var _e = defineComponent({
  ...kn,
  props: xe,
  setup(s2) {
    const t2 = s2, e2 = useSlots(), { getLayerClasses: a2 } = be(), { styles: n2, classes: o2 } = a2(
      toRef(t2, "color"),
      toRef(t2, "variant"),
      toRef(t2, "states")
    ), r2 = Xt(toRefs(t2), e2), l2 = ue(toRef(t2, "text"));
    return l2.value.classes === void 0 ? l2.value.classes = "text-sm" : Array.isArray(l2.value.classes) ? l2.value.classes = [...l2.value.classes, "text-sm"] : l2.value.classes = " text-sm", (c2, u2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["a-card relative overflow-hidden bg-[hsla(var(--a-surface-c),var(--un-bg-opacity,1))]", unref(o2)]),
      style: normalizeStyle(unref(n2))
    }, [
      typeof t2.loading < "u" ? (openBlock(), createBlock(unref(it), normalizeProps(mergeProps({ key: 0 }, typeof t2.loading == "boolean" ? { loading: t2.loading } : t2.loading)), null, 16)) : createCommentVNode("", true),
      t2.img ? (openBlock(), createElementBlock("img", {
        key: 1,
        src: t2.img,
        alt: t2.imgAlt
      }, null, 8, wn)) : createCommentVNode("", true),
      unref(r2) ? (openBlock(), createElementBlock("div", $n, [
        createVNode(unref(ct), {
          title: t2.title,
          subtitle: t2.subtitle,
          text: Object.values(unref(l2))
        }, createSlots({ _: 2 }, [
          renderList(Object.keys(unref(Yt)), (f2) => ({
            name: f2,
            fn: withCtx((d2) => [
              renderSlot(c2.$slots, f2, normalizeProps(guardReactiveProps(d2 || {})))
            ])
          }))
        ]), 1032, ["title", "subtitle", "text"])
      ])) : createCommentVNode("", true),
      renderSlot(c2.$slots, "default")
    ], 6));
  }
});
var ut = {
  /**
   * Bind v-model value
   */
  modelValue: {
    type: [Boolean, Number, String, Array],
    default: true
  },
  /**
   * Switch value when in on state
   */
  checkedValue: [Boolean, Number, String, Array],
  /**
   * Switch value when in off state
   */
  uncheckedValue: {
    type: [Boolean, Number, String, Array],
    default: false
  },
  /**
   * Set custom value for indeterminate state
   */
  indeterminateValue: {
    type: [Boolean, Number, String, Array],
    default: null
  },
  /**
   * Enable cycling indeterminate state
   */
  cycleIndeterminate: {
    type: Boolean,
    default: false
  }
};
function dt(s2, t2, e2 = true, a2 = false, n2 = null, o2 = false) {
  const r2 = () => {
    const f2 = E(o2), d2 = E(s2), p2 = E(e2), m2 = E(a2), y2 = E(n2), _ = Array.isArray(d2) ? d2.includes(p2) ? p2 : m2 : d2, { next: N2 } = $a(
      [...f2 ? [y2] : [], p2, m2],
      { initialValue: _ }
    ), I = N2();
    Array.isArray(d2) ? I === p2 ? t2("update:modelValue", [...d2, p2]) : t2("update:modelValue", d2.filter((F) => F !== p2)) : t2("update:modelValue", I);
  }, l2 = () => {
    r2();
  }, c2 = computed({
    get: () => {
      const f2 = E(s2), d2 = E(e2);
      return Array.isArray(f2) ? f2.includes(d2) : f2 === d2;
    },
    set: r2
  }), u2 = computed(() => {
    const f2 = E(s2), d2 = E(n2);
    return Array.isArray(f2) ? f2.includes(d2) : f2 === d2;
  });
  return {
    isChecked: c2,
    isIndeterminate: u2,
    onChange: l2
  };
}
function We(s2) {
  const { options: t2, multi: e2 } = s2, a2 = ref(), n2 = (r2) => {
    unref(e2) ? a2.value instanceof Set ? a2.value.has(r2) ? a2.value.delete(r2) : a2.value.add(r2) : a2.value = /* @__PURE__ */ new Set([r2]) : a2.value = r2;
  };
  watch(
    () => unref(e2),
    () => {
      a2.value = void 0;
    }
  );
  const o2 = ref([]);
  return typeof t2 == "number" ? o2.value = [...Array(t2)].map((r2, l2) => ({
    value: l2,
    isSelected: computed(
      () => unref(e2) ? a2.value instanceof Set ? a2.value.has(l2) : false : l2 === a2.value
    )
  })) : o2.value = t2.map((r2) => ({
    value: r2,
    isSelected: computed(() => unref(e2) ? a2.value instanceof Set ? a2.value.has(r2) : false : r2 === toRaw(a2.value))
  })), {
    options: o2,
    value: a2,
    select: n2
  };
}
var An = (s2, t2) => {
  const e2 = nt(t2);
  return {
    vModel: computed({
      get() {
        return s2.value.length === e2.value.length ? true : s2.value.length === 0 ? false : null;
      },
      set(n2) {
        s2.value = n2 ? e2.value : [];
      }
    })
  };
};
function ft() {
  const s2 = ref();
  return onMounted(() => {
    var a2;
    const t2 = getCurrentInstance();
    let e2 = (a2 = t2 == null ? void 0 : t2.proxy) == null ? void 0 : a2.$el.parentNode;
    for (; e2 && e2.hasAttribute("data-no-reference"); )
      e2 = e2.parentNode;
    s2.value = e2;
  }), s2;
}
var Ut = (s2, t2, e2 = void 0, a2 = false) => {
  const n2 = (l2, c2, u2) => {
    const f2 = l2[c2];
    if (u2) {
      if (typeof f2 == "string")
        return f2;
    } else if (typeof f2 == "string" || typeof f2 == "number" || typeof f2 == "boolean")
      return f2.toLocaleString();
    return null;
  }, o2 = (l2, c2, u2, f2) => {
    const d2 = n2(l2, c2, f2);
    return d2 ? d2.toLocaleLowerCase().includes(u2) : false;
  };
  return {
    results: computed(() => {
      const l2 = unref(t2), c2 = unref(s2).toLocaleLowerCase(), u2 = e2 && unref(e2), f2 = unref(a2);
      return Mt(c2) ? l2 : l2.filter((d2) => {
        if (typeof u2 == "function")
          return u2(unref(s2), d2);
        if (f2) {
          if (typeof d2 == "string")
            return d2.toLocaleLowerCase().includes(c2);
        } else if (typeof d2 == "string" || typeof d2 == "number" || typeof d2 == "boolean")
          return String(d2).toLocaleLowerCase().includes(c2);
        return Se(d2) ? u2 ? typeof u2 == "string" ? o2(d2, u2, c2, f2) : u2.some((p2) => {
          if (typeof p2 == "string")
            return o2(d2, p2, c2, f2);
          {
            const { name: m2, filterBy: y2 } = p2;
            return y2(d2[m2], unref(s2), d2);
          }
        }) : Object.entries(d2).some(([p2, m2]) => {
          if (f2) {
            if (typeof m2 == "string")
              return m2.toLocaleLowerCase().includes(c2);
          } else if (typeof m2 == "string" || typeof m2 == "number" || typeof m2 == "boolean")
            return String(m2).toLocaleLowerCase().includes(c2);
          return false;
        }) : false;
      });
    })
  };
};
var Kt = (s2, t2 = void 0, e2 = true) => {
  const a2 = (r2) => r2 instanceof Date && !isNaN(r2), n2 = (r2, l2) => gt(r2) && gt(l2) ? r2 - l2 : a2(r2) && a2(l2) ? Date.parse(new Date(r2)) - Date.parse(new Date(l2)) : typeof r2 == "boolean" && typeof l2 == "boolean" ? r2 - l2 : String(r2).localeCompare(String(l2));
  return {
    results: computed(() => {
      const r2 = JSON.parse(JSON.stringify(unref(s2))), l2 = unref(t2), u2 = unref(e2) ? 1 : -1;
      return r2.sort((d2, p2) => Se(d2) && Se(p2) ? l2 ? typeof l2 == "string" ? n2(d2[l2], p2[l2]) * u2 : Mt(l2) ? 0 : l2.map((y2) => {
        if (typeof y2 == "string")
          return n2(d2[y2], p2[y2]) * u2;
        {
          const { name: _, sortBy: N2, isAsc: I } = y2;
          if (N2)
            return N2(d2[_], p2[_]);
          if (I !== void 0) {
            const F = I ? 1 : -1;
            return n2(d2[_], p2[_]) * F;
          }
          return 0;
        }
      }).reduce((y2, _) => y2 || _) : 0 : n2(d2, p2) * u2);
    })
  };
};
function de(s2) {
  return { teleportTarget: computed(() => {
    const e2 = unref(s2);
    if (typeof window > "u")
      return;
    const a2 = e2 === void 0 ? document.body : typeof e2 == "string" ? document.querySelector(e2) : e2;
    if (a2 == null) {
      console.warn(`Unable to locate target ${e2}`);
      return;
    }
    if (!de.cache.has(a2)) {
      const n2 = document.createElement("div");
      n2.id = "a-teleport-target", a2.appendChild(n2), de.cache.set(a2, n2);
    }
    return de.cache.get(a2);
  }) };
}
de.cache = /* @__PURE__ */ new WeakMap();
var gl = Object.freeze(Object.defineProperty({
  __proto__: null,
  isThemeColor: Me,
  useAnu: rt,
  useCheckbox: dt,
  useCheckboxProps: ut,
  useColor: lt,
  useConfigurable: ue,
  useDOMScrollLock: Re,
  useGroupModel: We,
  useIndeterminateCheckbox: An,
  useLayer: be,
  useParent: ft,
  useProps: he,
  useSearch: Ut,
  useSort: Kt,
  useTeleport: de
}, Symbol.toStringTag, { value: "Module" }));
var Sn = {
  ...ut,
  /**
   * Checkbox color
   */
  color: defu({ default: "primary" }, ye),
  /**
   * Label text
   */
  label: String,
  /**
   * Icon to render in checkbox square instead of check
   */
  icon: defu({ default: "i-bx-check" }, Y),
  /**
   * Bind classes to input element
   */
  inputClasses: { type: null },
  /**
   * Disable checkbox
   */
  disabled: le
};
var xn = ["checked", "indeterminate"];
var Cn = defineComponent({
  name: "ACheckbox",
  inheritAttrs: false
});
var On = defineComponent({
  ...Cn,
  props: Sn,
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = useAttrs(), n2 = computed(() => e2.checkedValue || a2.value || true), { isChecked: o2, isIndeterminate: r2, onChange: l2 } = dt(toRef(e2, "modelValue"), t2, n2, toRef(e2, "uncheckedValue"), toRef(e2, "indeterminateValue"), toRef(e2, "cycleIndeterminate")), c2 = `a-checkbox-${a2.id || a2.value}-${Math.random().toString(36).slice(2, 7)}`, u2 = computed(() => {
      if (r2.value)
        return "i-bx-minus";
      if (o2.value)
        return e2.icon;
    });
    return (f2, d2) => (openBlock(), createElementBlock("label", {
      for: c2,
      class: normalizeClass(["inline-flex items-center cursor-pointer", [
        f2.$attrs.class,
        e2.disabled && "a-checkbox-disabled pointer-events-none"
      ]])
    }, [
      createBaseVNode("input", mergeProps({ ...f2.$attrs, class: e2.inputClasses }, {
        id: c2,
        checked: unref(o2),
        class: "hidden",
        type: "checkbox",
        indeterminate: unref(r2),
        onChange: d2[0] || (d2[0] = //@ts-ignore
        (...p2) => unref(l2) && unref(l2)(...p2))
      }), null, 16, xn),
      createBaseVNode("div", {
        class: normalizeClass(["a-checkbox-box flex items-center justify-center shrink-0", [(unref(o2) || unref(r2)) && `bg-${e2.color} border-${e2.color} children:scale-full`]])
      }, [
        createBaseVNode("i", {
          class: normalizeClass(["a-checkbox-icon scale-0 text-white", unref(u2)])
        }, null, 2)
      ], 2),
      renderSlot(f2.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(e2.label), 1)
      ])
    ], 2));
  }
});
var Vn = defineComponent({
  name: "AChip"
});
var Tn = defineComponent({
  ...Vn,
  props: {
    ...he({
      color: {
        default: "primary"
      },
      variant: {
        default: "light"
      }
    }),
    /**
     * Bind v-model value to show/hide the chip.
     */
    modelValue: {
      type: Boolean,
      default: true
    },
    /**
     * Allow to close chip
     */
    closable: Boolean,
    /**
     * prepend icon
     */
    icon: Y,
    /**
     * append icon
     */
    appendIcon: Y,
    /**
     * Disable state of component
     */
    disabled: le
  },
  emits: ["update:modelValue", "click:close", "click:appendIcon"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = useAttrs(), { getLayerClasses: n2 } = be(), o2 = computed(() => a2.onClick !== void 0), { styles: r2, classes: l2 } = n2(
      toRef(e2, "color"),
      toRef(e2, "variant"),
      o2
    ), c2 = () => {
      t2("update:modelValue", false), t2("click:close");
    };
    return (u2, f2) => e2.modelValue ? (openBlock(), createElementBlock("div", {
      key: 0,
      style: normalizeStyle(unref(r2)),
      class: normalizeClass(["a-chip", [
        {
          "a-chip-disabled": e2.disabled,
          "cursor-pointer": unref(o2)
        },
        unref(l2)
      ]])
    }, [
      e2.icon ? (openBlock(), createElementBlock("i", {
        key: 0,
        class: normalizeClass(e2.icon)
      }, null, 2)) : createCommentVNode("", true),
      renderSlot(u2.$slots, "default"),
      e2.appendIcon ? (openBlock(), createElementBlock("i", {
        key: 1,
        class: normalizeClass(e2.appendIcon)
      }, null, 2)) : createCommentVNode("", true),
      e2.closable ? (openBlock(), createElementBlock("i", {
        key: 2,
        class: "i-bx-x hover:i-bx-bxs-x-circle hover:opacity-70",
        onClick: c2
      })) : createCommentVNode("", true)
    ], 6)) : createCommentVNode("", true);
  }
});
var pt = {
  /**
    * Table rows
    */
  rows: {
    type: Array,
    default: () => []
  },
  /**
   * By default table will infer the column definition from first row. You can also manually provide the column definition for more control.
   */
  cols: {
    type: [Array],
    default: () => []
  },
  /**
   * Text to render when no row is available
   */
  noDataText: {
    type: String,
    default: "No records found!"
  }
};
var In = { class: "overflow-x-auto" };
var Pn = { class: "a-table-table overflow-x-auto w-full max-w-full" };
var Bn = ["onClick"];
var En = { class: "a-table-td-text" };
var Ln = { key: 1 };
var jn = ["colspan"];
var Mn = {
  key: 0,
  class: "a-table-footer"
};
var Nn = defineComponent({
  name: "ATable"
});
var Gt = defineComponent({
  ...Nn,
  props: defu(pt, xe),
  emits: ["click:header"],
  setup(s2) {
    const t2 = s2, e2 = Ve(t2, Object.keys(xe)), a2 = computed(() => t2.cols.length ? t2.cols : t2.rows.length ? Object.keys(t2.rows[0]).map((n2) => ({ name: n2 })) : []);
    return (n2, o2) => (openBlock(), createBlock(unref(_e), mergeProps(unref(e2), { class: "a-table" }), createSlots({
      default: withCtx(() => [
        renderSlot(n2.$slots, "before-table"),
        createBaseVNode("div", In, [
          createBaseVNode("table", Pn, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(a2), (r2, l2) => (openBlock(), createElementBlock("th", {
                  key: l2,
                  class: normalizeClass(["a-table-table-th whitespace-nowrap", typeof r2.headerClasses == "function" ? r2.headerClasses(r2) : r2.headerClasses]),
                  onClick: (c2) => n2.$emit("click:header", r2)
                }, [
                  renderSlot(n2.$slots, `header-${r2.name}`, normalizeProps(guardReactiveProps({ col: r2 })), () => [
                    createBaseVNode("span", null, toDisplayString(r2.name), 1)
                  ])
                ], 10, Bn))), 128))
              ])
            ]),
            createBaseVNode("tbody", null, [
              t2.rows.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(t2.rows, (r2, l2) => (openBlock(), createElementBlock("tr", { key: l2 }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(a2), (c2, u2) => (openBlock(), createElementBlock("td", {
                  key: u2,
                  class: normalizeClass(["a-table-table-td whitespace-nowrap", typeof c2.classes == "function" ? c2.classes(r2) : c2.classes])
                }, [
                  renderSlot(n2.$slots, `col-${c2.name}`, normalizeProps(guardReactiveProps({ row: r2, colIndex: u2 })), () => [
                    createBaseVNode("span", En, toDisplayString(c2.formatter ? c2.formatter(r2) : r2[c2.name]), 1)
                  ])
                ], 2))), 128))
              ]))), 128)) : (openBlock(), createElementBlock("tr", Ln, [
                createBaseVNode("td", {
                  class: "em:px-[1.15rem] em:h-14 whitespace-nowrap text-center font-medium",
                  colspan: t2.cols.length
                }, toDisplayString(t2.noDataText), 9, jn)
              ]))
            ]),
            n2.$slots.footer ? (openBlock(), createElementBlock("tfoot", Mn, [
              renderSlot(n2.$slots, "footer")
            ])) : createCommentVNode("", true)
          ])
        ]),
        renderSlot(n2.$slots, "after-table")
      ]),
      _: 2
    }, [
      renderList(Object.keys(n2.$slots).filter((r2) => r2 !== "default"), (r2) => ({
        name: r2,
        fn: withCtx((l2) => [
          renderSlot(n2.$slots, r2, normalizeProps(guardReactiveProps(l2 || {})))
        ])
      }))
    ]), 1040));
  }
});
var Rn = ot({
  /**
   * Function that returns resolves array.
   */
  rows: {
    type: [Array, Function],
    required: true
  },
  /**
   * By default table will infer the column definition from first row. You can also manually provide the column definition for more control.
   */
  cols: {
    type: [Array],
    default: () => []
  },
  /**
   * Enable filtering/searching in table
   */
  search: {
    type: [Boolean, String],
    default: false
  },
  /**
   * Enable/Disable sorting table
   */
  isSortable: {
    type: Boolean,
    default: true
  },
  /**
   * By default you can only sort single column. You can enable sorting multiple columns at the same time using this prop.
   */
  multiSort: Boolean,
  /**
   * Set rows to show per page
   */
  pageSize: {
    type: Number,
    default: 10
  }
  // ℹ️ Does anyone need prop initialPage?
}, pt);
var Vt = {
  isSortable: true,
  headerClasses: (s2) => s2.isSortable && "cursor-pointer select-none",
  sortBy: void 0,
  isFilterable: true
};
var Dn = { class: "i-bx-up-arrow-alt" };
var Fn = { class: "i-bx-down-arrow-alt" };
var Wn = { class: "a-data-table-pagination flex items-center w-full" };
var qn = { class: "a-subtitle a-data-table-pagination-meta" };
var zn = createBaseVNode("div", { class: "flex-grow" }, null, -1);
var Xn = { class: "a-data-table-per-page flex items-center" };
var Hn = createBaseVNode("span", { class: "sm:inline hidden" }, "per page", -1);
var Yn = { class: "a-data-table-pagination-navigation" };
var Un = defineComponent({
  name: "ADataTable"
});
var Kn = defineComponent({
  ...Un,
  props: Rn,
  emits: ["click:header", "update:search"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = Ve(e2, Object.keys(pt).filter((S2) => !["rows", "cols"].includes(S2))), n2 = ref(typeof e2.rows != "function" ? e2.rows : []);
    ha(() => e2.rows, (S2) => {
      Array.isArray(S2) && (n2.value = S2);
    });
    const o2 = ref(typeof e2.rows == "function" ? 0 : e2.rows.length), r2 = ref([]);
    watch(() => e2.cols, (S2) => {
      r2.value = S2.map((M2) => defu(M2, Vt));
    }, { immediate: true });
    const l2 = (S2) => S2.map((M2) => defu({ ...Vt, name: M2 }));
    if (!e2.cols.length)
      if (Array.isArray(e2.rows) && e2.rows.length)
        r2.value = l2(Object.keys(e2.rows[0]));
      else {
        const S2 = Qs(
          () => typeof e2.rows == "function" ? n2.value.length : e2.rows.length
        );
        Dt(S2, () => {
          r2.value = l2(
            Object.keys((typeof e2.rows == "function" ? n2.value : e2.rows)[0])
          );
        });
      }
    const c2 = ref(typeof e2.search == "boolean" ? "" : e2.search);
    watch(c2, (S2) => {
      t2("update:search", S2), f2();
    });
    const u2 = computed(() => r2.value.filter((S2) => S2.isSortable && S2.sortBy !== void 0)), f2 = () => {
      if (typeof e2.rows == "function")
        e2.rows({
          q: c2.value,
          /* eslint-disable @typescript-eslint/no-use-before-define */
          currentPage: d2.value,
          rowsPerPage: p2.value,
          /* eslint-enable */
          sortedCols: u2.value
        }).then((S2) => {
          const { rows: M2, total: B } = S2;
          n2.value = M2, o2.value = B;
        });
      else {
        const { results: S2 } = Ut(
          c2,
          e2.rows,
          r2.value.map((x2) => x2.filterFunc ? { name: x2.name, filterBy: x2.filterFunc } : x2.name)
        );
        o2.value = S2.value.length;
        const { results: M2 } = Kt(
          S2,
          computed(() => {
            const x2 = [];
            return u2.value.forEach((T) => {
              T.sortFunc ? x2.push({ name: T.name, sortBy: T.sortFunc }) : T.sortBy !== void 0 && x2.push({ name: T.name, isAsc: T.sortBy === "asc" });
            }), x2;
          })
        ), B = (d2.value - 1) * p2.value, P = d2.value * p2.value;
        n2.value = M2.value.slice(B, P);
      }
    }, {
      currentPage: d2,
      currentPageSize: p2,
      isFirstPage: m2,
      isLastPage: y2,
      prev: _,
      next: N2
    } = Ca({
      total: o2,
      page: 1,
      pageSize: e2.pageSize,
      onPageChange: f2,
      onPageSizeChange: f2
    });
    f2();
    const I = (S2) => {
      S2 = S2;
      const M2 = r2.value.find((B) => S2.name === B.name);
      if (!M2) {
        console.warn(`Clicked col ${S2.name} doesn't exist in table cols: ${r2.value.map((B) => B.name).join(", ")}`);
        return;
      }
      M2.isSortable && (M2.sortBy === void 0 ? M2.sortBy = "asc" : M2.sortBy === "asc" ? M2.sortBy = "desc" : M2.sortBy = void 0, e2.multiSort || r2.value.forEach((B) => {
        B.name !== S2.name && (B.sortBy = void 0);
      }), t2("click:header", S2), S2.isSortable && f2());
    }, F = useSlots(), q = typeof e2.search == "boolean" && e2.search || e2.search || F["before-search"] || F["after-search"], z = computed(() => {
      const S2 = n2.value.length ? (d2.value - 1) * p2.value + 1 : 0, M2 = y2.value ? o2.value : d2.value * p2.value;
      return `${S2} - ${M2} of ${o2.value}`;
    });
    return (S2, M2) => (openBlock(), createBlock(unref(Gt), mergeProps(unref(a2), {
      cols: unref(r2),
      rows: unref(n2),
      class: "a-data-table",
      "onClick:header": I
    }), createSlots({
      "after-table": withCtx(() => [
        createBaseVNode("div", Wn, [
          createBaseVNode("span", qn, toDisplayString(unref(z)), 1),
          zn,
          createBaseVNode("div", Xn, [
            Hn,
            createVNode(unref(us), {
              modelValue: unref(p2),
              "onUpdate:modelValue": M2[1] || (M2[1] = (B) => isRef(p2) ? p2.value = B : null),
              options: Array.from(/* @__PURE__ */ new Set([e2.pageSize, 5, 10, 15, 20])).sort((B, P) => B - P),
              "options-wrapper-classes": "a-data-table-per-page-select--options-wrapper-classes"
            }, null, 8, ["modelValue", "options"])
          ]),
          createBaseVNode("div", Yn, [
            createVNode(unref(Je), {
              class: "a-data-table-paginate-previous",
              icon: "i-bx-left-arrow-alt",
              "icon-only": "",
              variant: "default",
              disabled: unref(m2),
              onClick: unref(_)
            }, null, 8, ["disabled", "onClick"]),
            createVNode(unref(Je), {
              class: "a-data-table-paginate-next",
              icon: "i-bx-right-arrow-alt",
              "icon-only": "",
              variant: "default",
              disabled: unref(y2),
              onClick: unref(N2)
            }, null, 8, ["disabled", "onClick"])
          ])
        ])
      ]),
      _: 2
    }, [
      unref(q) ? {
        name: "header-right",
        fn: withCtx(() => [
          renderSlot(S2.$slots, "before-search"),
          typeof e2.search == "boolean" && e2.search || e2.search ? (openBlock(), createBlock(unref(Zt), {
            key: 0,
            modelValue: unref(c2),
            "onUpdate:modelValue": M2[0] || (M2[0] = (B) => isRef(c2) ? c2.value = B : null),
            placeholder: "search...",
            class: "max-w-48 text-sm",
            "prepend-inner-icon": "i-bx-search"
          }, null, 8, ["modelValue"])) : createCommentVNode("", true),
          renderSlot(S2.$slots, "after-search")
        ]),
        key: "0"
      } : void 0,
      renderList(unref(r2), (B) => ({
        name: `header-${B.name}`,
        fn: withCtx(() => [
          renderSlot(S2.$slots, `header-${B.name}`, normalizeProps(guardReactiveProps({ col: B })), () => [
            createBaseVNode("span", null, toDisplayString(B.name), 1)
          ]),
          withDirectives(createBaseVNode("i", Dn, null, 512), [
            [vShow, B.sortBy === "asc"]
          ]),
          withDirectives(createBaseVNode("i", Fn, null, 512), [
            [vShow, B.sortBy === "desc"]
          ])
        ])
      })),
      renderList(Object.keys(S2.$slots).filter((B) => !B.startsWith("header-")), (B) => ({
        name: B,
        fn: withCtx((P) => [
          renderSlot(S2.$slots, B, normalizeProps(guardReactiveProps(P || {})))
        ])
      }))
    ]), 1040, ["cols", "rows"]));
  }
});
var Gn = { class: "a-dialog-wrapper grid place-items-center fixed inset-0 bg-[hsla(var(--a-backdrop-c),var(--a-backdrop-opacity))]" };
var Jn = defineComponent({
  name: "ADialog",
  inheritAttrs: false
});
var Qn = defineComponent({
  ...Jn,
  props: ot({
    /**
     * Show/Hide menu base on v-model value
     */
    modelValue: Boolean,
    /**
     * Persistence of dialog when clicked outside of reference element
     */
    persistent: Boolean
  }, xe),
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, { teleportTarget: a2 } = de(), n2 = je(), o2 = ref();
    return e2.persistent || Le(o2, () => {
      e2.modelValue && t2("update:modelValue", false);
    }), Re(toRef(e2, "modelValue")), (r2, l2) => unref(n2) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(a2)
    }, [
      createVNode(Transition, { name: "bg" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", Gn, [
            createVNode(Transition, { name: "dialog" }, {
              default: withCtx(() => [
                withDirectives(createVNode(unref(_e), mergeProps({
                  ref_key: "refCard",
                  ref: o2,
                  class: "a-dialog backface-hidden transform translate-z-0 max-w-[calc(100vw-2rem)]"
                }, { ...r2.$attrs, ...e2 }), createSlots({ _: 2 }, [
                  renderList(r2.$slots, (c2, u2) => ({
                    name: u2,
                    fn: withCtx((f2) => [
                      renderSlot(r2.$slots, u2, normalizeProps(guardReactiveProps(f2 || {})))
                    ])
                  }))
                ]), 1040), [
                  [vShow, e2.modelValue]
                ])
              ]),
              _: 3
            })
          ], 512), [
            [vShow, e2.modelValue]
          ])
        ]),
        _: 3
      })
    ], 8, ["to"])) : createCommentVNode("", true);
  }
});
var Zn = defineComponent({
  name: "ADrawer",
  inheritAttrs: false
});
var er = defineComponent({
  ...Zn,
  props: defu({
    /**
     * Show/Hide drawer base on v-model value
     */
    modelValue: Boolean,
    /**
     * Persistence of drawer when clicked outside of reference element
     */
    persistent: Boolean,
    /**
     * Drawer anchor/position
     */
    anchor: {
      type: String,
      default: "left"
    }
  }, xe),
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, { teleportTarget: a2 } = de(), n2 = je(), o2 = ref();
    e2.persistent || Le(o2, () => {
      e2.modelValue && t2("update:modelValue", false);
    });
    const r2 = computed(() => e2.anchor === "bottom" ? "slide-y" : e2.anchor === "top" ? "slide-y-reverse" : e2.anchor === "right" ? "slide-x-reverse" : "slide-x"), l2 = computed(() => e2.anchor === "bottom" ? "[--slide-y-translateY:100%]" : e2.anchor === "top" ? "[--slide-y-reverse-translateY:-100%]" : e2.anchor === "right" ? "[--slide-x-reverse-translateX:100%]" : "[--slide-x-translateX:-100%]");
    return Re(toRef(e2, "modelValue")), (c2, u2) => unref(n2) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(a2)
    }, [
      createVNode(Transition, { name: "bg" }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(["a-drawer-wrapper flex fixed inset-0 bg-[hsla(var(--a-backdrop-c),var(--a-backdrop-opacity))]", [
              `a-drawer-anchor-${e2.anchor}`,
              // `flex-col` set full width for top & bottom anchored drawer
              ["top", "bottom"].includes(e2.anchor) && "flex-col",
              // set drawer to end of flex container of anchor is right or bottom
              ["right", "bottom"].includes(e2.anchor) && "justify-end"
            ]])
          }, [
            createVNode(Transition, {
              duration: 3e4,
              name: unref(r2)
            }, {
              default: withCtx(() => [
                withDirectives(createVNode(unref(_e), mergeProps({
                  ref_key: "refCard",
                  ref: o2,
                  style: [`--${unref(r2)}-opacity: 1`, `--${unref(r2)}--transform-timing: ease-in-out`],
                  class: ["a-drawer backface-hidden transform translate-z-0", unref(l2)]
                }, { ...c2.$attrs, ...e2 }), createSlots({ _: 2 }, [
                  renderList(c2.$slots, (f2, d2) => ({
                    name: d2,
                    fn: withCtx((p2) => [
                      renderSlot(c2.$slots, d2, normalizeProps(guardReactiveProps(p2 || {})))
                    ])
                  }))
                ]), 1040, ["style", "class"]), [
                  [vShow, e2.modelValue]
                ])
              ]),
              _: 3
            }, 8, ["name"])
          ], 2), [
            [vShow, e2.modelValue]
          ])
        ]),
        _: 3
      })
    ], 8, ["to"])) : createCommentVNode("", true);
  }
});
var Jt = (s2) => ({
  name: "sameWidth",
  fn: ({ rects: t2, x: e2, y: a2 }) => {
    const n2 = ie(s2);
    return n2 && (n2.style.minWidth = `${t2.reference.width}px`), { x: e2, y: a2 };
  }
});
var vt = {
  referenceEl: {
    type: Object
  },
  /**
   * Show/Hide floating element base on v-model value
   */
  modelValue: {
    type: Boolean,
    default: void 0
  },
  /**
   * Persistence of floating element when clicked outside of reference element
   */
  persist: {
    type: [Boolean, String],
    default: false
  },
  /**
   * Trigger event to open the floating element
   */
  trigger: {
    type: String,
    default: "click"
  },
  /**
   * Delay before showing floating element
   */
  delay: {
    type: Number,
    default: 0
  },
  /**
   * Delay before hiding floating element
   */
  hideDelay: {
    type: Number,
    default: 0
  },
  /**
   * Transition to add while showing/hiding floating element
   */
  transition: {
    type: [String, null],
    default: "slide-y"
  },
  // -- Floating UI based Props
  // https://floating-ui.com/docs/computePosition#placement
  /**
   * Placement option from Floating UI
   */
  placement: {
    type: String,
    default: "bottom-start"
  },
  // https://floating-ui.com/docs/computePosition#strategy
  /**
   * Strategy option from Floating UI
   */
  strategy: {
    type: String,
    default: "absolute"
  },
  // https://floating-ui.com/docs/tutorial#middleware
  /**
   * Middleware option from Floating UI
   */
  middleware: Function
};
var tr = defineComponent({
  name: "AFloating",
  inheritAttrs: false
});
var qe = defineComponent({
  ...tr,
  props: vt,
  emits: ["update:modelValue", "show", "hide"],
  setup(s2, { expose: t2, emit: e2 }) {
    const a2 = s2, { teleportTarget: n2 } = de(), o2 = je(), r2 = ref(a2.modelValue ? a2.hideDelay : a2.delay), l2 = qt(a2, "modelValue", e2, { defaultValue: false, passive: true });
    watch(l2, (y2) => {
      r2.value = y2 ? a2.hideDelay : a2.delay, e2(y2 ? "show" : "hide");
    });
    const c2 = ia(l2, r2), u2 = ref(), f2 = a2.middleware === void 0 ? [
      // ℹ️ For this we need need bridge to handle keep menu content open
      // offset(6),
      Jt(u2),
      flip(),
      shift({ padding: 10 })
    ] : a2.middleware(a2.referenceEl, u2), { x: d2, y: p2, strategy: m2 } = useFloating(toRef(a2, "referenceEl"), u2, {
      strategy: toRef(a2, "strategy"),
      placement: toRef(a2, "placement"),
      middleware: f2,
      whileElementsMounted: autoUpdate
    });
    return a2.modelValue === void 0 && (a2.trigger === "hover" ? (G(toRef(a2, "referenceEl"), "mouseenter", () => {
      l2.value = true;
    }), G(toRef(a2, "referenceEl"), "mouseleave", () => {
      l2.value = false;
    }), G(u2, "mouseenter", () => {
      l2.value = true;
    }), G(u2, "mouseleave", () => {
      l2.value = false;
    })) : (G(
      toRef(a2, "referenceEl"),
      "click",
      () => {
        l2.value = !l2.value;
      }
    ), a2.persist !== true && Le(
      toRef(a2, "referenceEl"),
      (y2) => {
        l2.value = false;
      },
      {
        ignore: a2.persist === "content" ? [u2] : []
      }
    ))), t2({
      refFloating: u2
    }), (y2, _) => unref(o2) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(n2)
    }, [
      createVNode(Transition, {
        name: a2.transition || void 0
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", mergeProps(y2.$attrs, {
            ref_key: "refFloating",
            ref: u2,
            class: ["a-floating transform", unref(m2)],
            style: {
              top: `${unref(p2) ?? 0}px`,
              left: `${unref(d2) ?? 0}px`
            }
          }), [
            renderSlot(y2.$slots, "default")
          ], 16), [
            [vShow, unref(c2)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["to"])) : createCommentVNode("", true);
  }
});
var sr = defineComponent({
  name: "AIcon"
});
var Qt = defineComponent({
  ...sr,
  props: {
    /**
     * Icon name
     */
    icon: {
      type: String,
      required: true
    },
    /**
     * Icon color
     */
    color: ye
  },
  setup(s2) {
    const t2 = s2, { styles: e2 } = lt(toRef(t2, "color"), "icon-color");
    return (a2, n2) => (openBlock(), createElementBlock("button", {
      type: "button",
      style: normalizeStyle(unref(e2)),
      class: "a-icon-btn relative rounded-full aspect-square leading-0 m--1 focus:after:opacity-35 focus:after:scale-125 focus:outline-none after:content-empty after:absolute after:inset-0 after:opacity-0 after:transform after:transition-all isolate after:z--1 after:rounded-inherit after:border-3 after:border-solid after:border-color-current"
    }, [
      createBaseVNode("i", mergeProps({
        "aria-hidden": "true",
        class: ["m-1", t2.icon]
      }, a2.$attrs), null, 16)
    ], 4));
  }
});
var ar = ["value"];
var nr = defineComponent({
  name: "AInput",
  inheritAttrs: false
});
var Zt = defineComponent({
  ...nr,
  props: defu({
    modelValue: [String, Number]
  }, ve),
  emits: ["update:modelValue"],
  setup(s2) {
    const t2 = s2, e2 = Ve(t2, Object.keys(ve)), a2 = useAttrs(), n2 = ref(), o2 = a2.type && a2.type === "file", r2 = () => {
      var l2;
      (l2 = n2.value) == null || l2.focus();
    };
    return (l2, c2) => (openBlock(), createBlock(unref(De), mergeProps({ ...unref(e2), class: l2.$attrs.class }, {
      class: [[unref(o2) && "a-input-type-file"], "a-input"],
      "onClick:inputWrapper": r2
    }), createSlots({
      default: withCtx((u2) => [
        createBaseVNode("input", mergeProps({ ...l2.$attrs, ...u2 }, {
          ref_key: "input",
          ref: n2,
          class: "a-input-input",
          value: t2.modelValue,
          onInput: c2[0] || (c2[0] = (f2) => {
            l2.$emit("update:modelValue", f2.target.value);
          })
        }), null, 16, ar)
      ]),
      _: 2
    }, [
      renderList(Object.keys(l2.$slots).filter((u2) => u2 !== "default"), (u2) => ({
        name: u2,
        fn: withCtx((f2) => [
          renderSlot(l2.$slots, u2, normalizeProps(guardReactiveProps(f2 || {})))
        ])
      }))
    ]), 1040, ["class"]));
  }
});
var es = {
  ...he({
    states: {
      default: true
    }
  }),
  ...Ne,
  /**
   * List item value, makes list item clickable.
   */
  // ℹ️ If we want any type need to set `propName: { type: null }`. Using `propName: null` will omit (disable) the prop.
  value: { type: null },
  /**
   * List item icon
   */
  icon: Y,
  /**
   * Render icon at the end instead of starting of list item
   */
  iconAppend: Boolean,
  /**
   * Mark list item disabled
   */
  disabled: le,
  /**
   * Props for rendering avatar.
   */
  avatarProps: Object,
  /**
   * Render avatar at the end instead of starting of list item
   */
  avatarAppend: Boolean,
  /**
   * Mark list item as active
   */
  isActive: Boolean
};
var rr = defineComponent({
  name: "AListItem"
});
var ts = defineComponent({
  ...rr,
  props: es,
  emits: ["click:icon", "click:avatar", "click:iconAppend", "click:avatarAppend"],
  setup(s2) {
    const t2 = s2, { getLayerClasses: e2 } = be(), a2 = ue(t2.title);
    Array.isArray(a2.value.classes) ? a2.value.classes = [...a2.value.classes, "text-base"] : a2.value.classes += " text-base";
    const { styles: n2, classes: o2 } = e2(
      computed(() => t2.isActive ? t2.color || "primary" : void 0),
      computed(() => t2.isActive ? t2.variant || "light" : "text"),
      toRef(t2, "states"),
      { statesClass: "states:10" }
    );
    return (r2, l2) => (openBlock(), createElementBlock("li", {
      style: normalizeStyle(unref(n2)),
      class: normalizeClass(["a-list-item flex items-center", [
        { "opacity-50 pointer-events-none": t2.disabled },
        t2.value !== void 0 || r2.$attrs.onClick ? [...unref(o2), "cursor-pointer"] : ""
      ]])
    }, [
      renderSlot(r2.$slots, "default", {
        item: t2,
        attrs: r2.$attrs
      }, () => [
        renderSlot(r2.$slots, "prepend", {
          item: t2,
          attrs: r2.$attrs
        }, () => [
          t2.icon && !t2.iconAppend ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["text-xl", t2.icon]),
            onClick: l2[0] || (l2[0] = (c2) => r2.$emit("click:icon"))
          }, null, 2)) : createCommentVNode("", true),
          t2.avatarProps && !t2.avatarAppend ? (openBlock(), createBlock(unref(Ge), mergeProps({ key: 1 }, t2.avatarProps, {
            onClick: l2[1] || (l2[1] = (c2) => r2.$emit("click:avatar"))
          }), null, 16)) : createCommentVNode("", true)
        ]),
        renderSlot(r2.$slots, "content", {
          item: t2,
          attrs: r2.$attrs
        }, () => [
          createVNode(unref(ct), {
            class: "flex-grow",
            subtitle: t2.subtitle,
            text: t2.text,
            title: t2.title ? Object.values(unref(a2)) : void 0
          }, null, 8, ["subtitle", "text", "title"])
        ]),
        renderSlot(r2.$slots, "append", {
          item: t2,
          attrs: r2.$attrs
        }, () => [
          t2.icon && t2.iconAppend ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["text-xl", t2.icon]),
            onClick: l2[2] || (l2[2] = (c2) => r2.$emit("click:iconAppend"))
          }, null, 2)) : createCommentVNode("", true),
          t2.avatarProps && t2.avatarAppend ? (openBlock(), createBlock(unref(Ge), mergeProps({ key: 1 }, t2.avatarProps, {
            onClick: l2[3] || (l2[3] = (c2) => r2.$emit("click:avatarAppend"))
          }), null, 16)) : createCommentVNode("", true)
        ])
      ])
    ], 6));
  }
});
var { avatarAppend: lr, iconAppend: or, color: ir, variant: cr, states: ur } = es;
var dr = {
  /**
   * Items to render in list
   */
  items: {
    type: Array,
    default: () => []
  },
  /**
   * Enable selecting multiple list items
   */
  multi: Boolean,
  /**
   * Bind v-model value to selected list item
   */
  modelValue: null,
  // ℹ️ Workaround for checking if event is present on component instance: https://github.com/vuejs/core/issues/5220#issuecomment-1007488240
  "onClick:item": Function,
  // ℹ️ Below is list item props that will be passed to each list item
  /**
   * By default when icon props are used icon rendered at start. Use `iconAppend` to render icon at end.
   */
  iconAppend: or,
  /**
   * By default when avatar props are used avatar is added at start. Use `avatarAppend` to render avatar at end.
   */
  avatarAppend: lr,
  color: ir,
  variant: cr,
  states: ur
};
var ss = {
  /**
   * Render custom content and override other slots.
   */
  default: {
    item: Object,
    attrs: Object
  },
  /**
   * Prepend custom content to the list item
   */
  prepend: {
    item: Object,
    attrs: Object
  },
  /**
   * Render custom content instead of `ATypography` preserving `prepend` and `append` slot usage
   */
  content: {
    item: Object,
    attrs: Object
  },
  /**
   * Append custom content to the list item
   */
  append: {
    item: Object,
    attrs: Object
  }
};
var fr = {
  /**
   * Render custom content before list items
   */
  before: {},
  /**
   * Default slot to render custom content instead of `AListItem`
   */
  default: {
    handleListItemClick: Function
  },
  /**
   * Render custom content after list items
   */
  after: {}
};
var as = "item-";
var { "item-default": _l, ...pr } = Nt(ss, as);
var vr = {
  ...pr,
  ...fr
};
var mr = { class: "a-list grid" };
var yr = { key: 0 };
var hr = { key: 1 };
var br = defineComponent({
  name: "AList"
});
var ns = defineComponent({
  ...br,
  props: dr,
  emits: ["update:modelValue", "click:item"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = (u2) => Se(u2) && u2.value || u2, { options: n2, select: o2, value: r2 } = We({
      options: e2.items.map((u2) => a2(u2)),
      multi: e2.multi
    }), l2 = (u2) => {
      o2(a2(u2)), t2("update:modelValue", r2.value), t2("click:item", {
        value: r2.value,
        item: u2
      });
    }, c2 = Ye(ss, as);
    return (u2, f2) => (openBlock(), createElementBlock("ul", mr, [
      u2.$slots.before ? (openBlock(), createElementBlock("li", yr, [
        renderSlot(u2.$slots, "before")
      ])) : createCommentVNode("", true),
      renderSlot(u2.$slots, "default", { handleListItemClick: l2 }, () => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e2.items, (d2, p2) => {
          var m2;
          return openBlock(), createBlock(unref(ts), mergeProps({
            key: p2,
            text: typeof d2 == "string" || typeof d2 == "number" ? d2 : void 0
          }, typeof d2 == "string" ? {} : d2, {
            "avatar-append": e2.avatarAppend,
            "icon-append": e2.iconAppend,
            color: e2.color,
            variant: e2.variant,
            states: e2.states,
            "is-active": (m2 = unref(n2)[p2]) == null ? void 0 : m2.isSelected,
            value: e2.modelValue !== void 0 ? unref(n2)[p2] : void 0
          }, toHandlers({
            click: e2["onClick:item"] || e2.modelValue !== void 0 ? () => l2(d2) : null
          })), createSlots({ _: 2 }, [
            renderList(unref(c2), ({ originalKey: y2, prefixedKey: _ }) => ({
              name: y2,
              fn: withCtx((N2) => [
                renderSlot(u2.$slots, _, mergeProps({ index: p2 }, N2 || {}))
              ])
            }))
          ]), 1040, ["text", "avatar-append", "icon-append", "color", "variant", "states", "is-active", "value"]);
        }), 128))
      ]),
      u2.$slots.after ? (openBlock(), createElementBlock("li", hr, [
        renderSlot(u2.$slots, "after")
      ])) : createCommentVNode("", true)
    ]));
  }
});
var gr = defineComponent({
  name: "ALoadingIcon",
  inheritAttrs: false
});
var _r = defineComponent({
  ...gr,
  props: {
    icon: Y,
    /**
     * Set loading state
     */
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(s2) {
    const t2 = s2;
    return (e2, a2) => t2.loading ? (openBlock(), createBlock(unref(Fe), mergeProps({
      key: 0,
      class: "transition-opacity"
    }, e2.$attrs), null, 16)) : (openBlock(), createElementBlock("i", {
      key: 1,
      class: normalizeClass(t2.icon)
    }, null, 2));
  }
});
var wr = Object.fromEntries(
  Object.entries(vt).filter(([s2, t2]) => s2 !== "referenceEl")
);
var $r = defineComponent({
  name: "AMenu"
});
var kr = defineComponent({
  ...$r,
  props: wr,
  setup(s2) {
    const t2 = s2, e2 = ft();
    return (a2, n2) => (openBlock(), createBlock(unref(qe), mergeProps(t2, { "reference-el": unref(e2) }), {
      default: withCtx(() => [
        createVNode(unref(_e), null, {
          default: withCtx(() => [
            renderSlot(a2.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["reference-el"]));
  }
});
var Ar = ["checked"];
var Sr = defineComponent({
  name: "ARadio",
  inheritAttrs: false
});
var xr = defineComponent({
  ...Sr,
  props: {
    /**
     * Radio color
     */
    color: defu({
      default: "primary"
    }, ye),
    /**
     * Bind v-model value to radio
     */
    modelValue: String,
    /**
     * Bind classes to input element
     */
    inputClasses: { type: null },
    /**
     * Define label text
     */
    label: String,
    /**
     * Disable radio
     */
    disabled: le
  },
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = useAttrs(), n2 = `a-radio-${a2.id || a2.value}-${Math.random().toString(36).slice(2, 7)}`, o2 = computed(() => e2.modelValue === a2.value);
    return (r2, l2) => (openBlock(), createElementBlock("label", {
      for: n2,
      class: normalizeClass(["inline-flex items-center cursor-pointer", [
        e2.disabled && "a-radio-disabled pointer-events-none",
        r2.$attrs.class
      ]])
    }, [
      createBaseVNode("input", mergeProps({ ...r2.$attrs, class: e2.inputClasses }, {
        id: n2,
        checked: unref(o2),
        class: "hidden",
        type: "radio",
        onChange: l2[0] || (l2[0] = (c2) => t2("update:modelValue", c2.target.value))
      }), null, 16, Ar),
      createBaseVNode("div", {
        class: normalizeClass(["a-radio-circle after:w-full after:h-full after:rounded-full after:block after:content-empty after:transform after:transition after:transition-transform", [
          `after:bg-${e2.color}`,
          unref(o2) ? `after:scale-full border-${e2.color}` : "after:scale-0 border-[hsla(var(--a-base-c),var(--a-border-opacity))]"
        ]])
      }, null, 2),
      renderSlot(r2.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(e2.label), 1)
      ])
    ], 2));
  }
});
var Cr = ["onMouseenter"];
var Or = defineComponent({
  name: "ARating"
});
var Vr = defineComponent({
  ...Or,
  props: {
    /**
     * Rating color
     */
    color: defu({ default: "warning" }, ye),
    /**
     * Bind v-model value to rating
     */
    modelValue: Number,
    /**
     * Sets amount of rating items
     */
    length: {
      type: [Number, String],
      default: 5
    },
    /**
     * Allows the award of half a point
     */
    halve: Boolean,
    /**
     * Sets empty icon
     */
    emptyIcon: {
      type: String,
      default: "i-bx:star"
    },
    /**
     * Sets half-filled icon
     */
    halfIcon: {
      type: String,
      default: "i-bx:bxs-star-half"
    },
    /**
     * Sets filled icon
     */
    fullIcon: {
      type: String,
      default: "i-bx:bxs-star"
    },
    /**
     * Allows to see visual changes of value on hover
     */
    noHoverHint: Boolean,
    /**
     * Animate icon on hover
     */
    animate: Boolean,
    /**
     * Make rating component readonly
     */
    readonly: zt,
    /**
     * Disable rating selection
     */
    disabled: le
  },
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, { styles: a2 } = lt(toRef(e2, "color"), "rating-color"), n2 = ref(0), o2 = ref(false), r2 = computed(
      () => !e2.noHoverHint && !e2.readonly && !e2.disabled && o2.value ? n2.value : e2.modelValue ?? 0
    ), l2 = computed(
      () => Array.from({ length: Number(e2.length) }, (d2, p2) => p2 + 1).map(
        (d2) => d2 <= r2.value ? e2.fullIcon : d2 - r2.value === 0.5 ? e2.halfIcon : e2.emptyIcon
      )
    ), c2 = () => {
      t2("update:modelValue", n2.value);
    }, u2 = (d2, p2) => {
      o2.value = true;
      const { offsetX: m2, target: y2 } = d2;
      if (y2 instanceof HTMLElement) {
        const _ = m2 * 100 / y2.clientWidth;
        e2.halve ? n2.value = _ < 50 ? p2 + 0.5 : p2 + 1 : n2.value = p2 + 1;
      }
    }, f2 = () => {
      o2.value = false;
    };
    return (d2, p2) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(unref(a2)),
      class: normalizeClass(["a-rating flex", [
        e2.animate && !e2.readonly && !e2.disabled && "a-rating-animated",
        e2.readonly && "a-rating-readonly pointer-events-none",
        e2.disabled && "a-rating-disabled pointer-events-none"
      ]])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l2), (m2, y2) => (openBlock(), createElementBlock("i", {
        key: y2,
        class: normalizeClass(["cursor-pointer", m2]),
        onClick: c2,
        onMouseenter: (_) => u2(_, y2),
        onMouseleave: f2
      }, null, 42, Cr))), 128))
    ], 6));
  }
});
var { default: wl, ...rs } = an;
var { default: $l, ...ls } = _n;
var { default: os, ...is } = vr;
var cs = "options-";
var Tr = {
  ...Nt(is, cs),
  // ℹ️ We don't want to rename the default slot
  default: os
};
({
  ...rs,
  ...ls,
  ...Tr
});
var Ir = ["value"];
var Pr = defineComponent({
  name: "ASelect",
  inheritAttrs: false
});
var us = defineComponent({
  ...Pr,
  props: defu({
    // ℹ️ If we want any type need to set `propName: { type: null }`. Using `propName: null` will omit (disable) the prop.
    modelValue: { type: null },
    options: {
      type: Array,
      default: () => []
    },
    emitObject: Boolean,
    // ℹ️ If we want any type need to set `propName: { type: null }`. Using `propName: null` will omit (disable) the prop.
    optionsWrapperClasses: { type: null },
    listClasses: { type: null }
  }, ve),
  emits: ["change", "input", "update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = Ve(e2, Object.keys(ve)), n2 = ref(), o2 = ref(), r2 = ref(), l2 = ref(false);
    Le(
      o2,
      (_) => {
        l2.value && (l2.value = false);
      },
      {
        ignore: [n2]
      }
    );
    const c2 = () => {
      var _;
      e2.disabled || e2.readonly || (l2.value = !l2.value, (_ = r2.value) == null || _.focus());
    }, u2 = (_, N2) => {
      const I = N2 && e2.emitObject ? N2 : _;
      t2("change", I), t2("input", I), t2("update:modelValue", I);
    }, f2 = (_) => {
      _.target !== o2.value && (l2.value = false);
    }, d2 = () => [
      offset(6),
      Jt(o2),
      flip(),
      shift({ padding: 10 })
    ], p2 = useSlots(), m2 = computed(() => Object.fromEntries(Object.entries(ls).filter(([_]) => p2[_]))), y2 = {
      ...Ye(is, cs),
      ...Ye(os, "")
    };
    return (_, N2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(De), mergeProps({ ...unref(a2), class: _.$attrs.class }, {
        ref_key: "refReference",
        ref: n2,
        "append-inner-icon": "i-bx-chevron-down",
        class: "a-select",
        "input-container-attrs": {
          onClick: c2
        }
      }), createSlots({
        default: withCtx((I) => [
          createBaseVNode("input", mergeProps({ ..._.$attrs, ...I }, {
            ref_key: "selectRef",
            ref: r2,
            readonly: "",
            class: "a-select-input",
            value: unref(Se)(_.modelValue) ? _.modelValue.text : _.modelValue
          }), null, 16, Ir)
        ]),
        _: 2
      }, [
        renderList(Object.keys(unref(rs)), (I) => ({
          name: I,
          fn: withCtx((F) => [
            renderSlot(_.$slots, I, normalizeProps(guardReactiveProps(F || {})))
          ])
        }))
      ]), 1040, ["input-container-attrs"]),
      createVNode(unref(qe), {
        "reference-el": unref(n2) && unref(n2).refInputContainer,
        middleware: d2,
        class: "a-select-floating"
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(unref(_e), {
            ref_key: "refFloating",
            ref: o2,
            "data-slots": Object.keys(_.$slots),
            class: normalizeClass(["a-select-options-container bg-[hsl(var(--a-surface-c))]", e2.optionsWrapperClasses]),
            onClick: f2
          }, createSlots({
            default: withCtx(() => [
              createVNode(unref(ns), {
                items: _.options,
                value: e2.modelValue,
                class: normalizeClass(["a-select-options-list", e2.listClasses]),
                "onClick:item": N2[0] || (N2[0] = ({ item: I, value: F }) => u2(F, I))
              }, createSlots({ _: 2 }, [
                renderList(y2, ({ originalKey: I, prefixedKey: F }) => ({
                  name: I,
                  fn: withCtx((q) => [
                    renderSlot(_.$slots, F, normalizeProps(guardReactiveProps({
                      ...q || {},
                      handleOptionClick: u2
                    })))
                  ])
                }))
              ]), 1032, ["items", "value", "class"])
            ]),
            _: 2
          }, [
            renderList(Object.keys(unref(m2)), (I) => ({
              name: I,
              fn: withCtx((F) => [
                renderSlot(_.$slots, I, normalizeProps(guardReactiveProps(F || {})))
              ])
            }))
          ]), 1032, ["data-slots", "class"]), [
            [vShow, unref(l2)]
          ])
        ]),
        _: 3
      }, 8, ["reference-el"])
    ], 64));
  }
});
var { checkedValue: Br, uncheckedValue: Er, ...Lr } = ut;
var jr = {
  ...Lr,
  onValue: Br,
  offValue: Er,
  /**
   * Switch color
   */
  color: defu({
    default: "primary"
  }, ye),
  /**
   * Define label text
   */
  label: String,
  /**
   * Icon to render when switch is on
   */
  onIcon: String,
  /**
   * Icon to render when switch is off
   */
  offIcon: String,
  /**
   * Bind classes to input element
   */
  inputClasses: { type: null },
  /**
   * Disable switch
   */
  disabled: le
};
var Mr = ["checked"];
var Nr = {
  class: "a-switch-label",
  "data-no-reference": ""
};
var Rr = defineComponent({
  name: "ASwitch",
  inheritAttrs: false
});
var Dr = defineComponent({
  ...Rr,
  props: jr,
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = useAttrs(), n2 = computed(() => e2.onValue || a2.value || true), { isChecked: o2, onChange: r2 } = dt(
      toRef(e2, "modelValue"),
      t2,
      n2,
      toRef(e2, "offValue")
    ), l2 = `a-switch-${a2.id || a2.value}-${Math.random().toString(36).slice(2, 7)}`, c2 = computed(() => o2.value ? { transform: "translateX(calc(var(--a-switch-track-size) - 100% - (var(--a-switch-thumb-margin) *2 )))" } : { transform: "translateX(0)" });
    return (u2, f2) => (openBlock(), createElementBlock("label", {
      for: l2,
      class: normalizeClass(["a-switch cursor-pointer rounded-full justify-between items-center", [
        u2.$attrs.class,
        e2.label || u2.$slots.default ? "flex" : "inline-flex",
        e2.disabled && "a-switch-disabled pointer-events-none"
      ]])
    }, [
      createBaseVNode("input", mergeProps({ ...u2.$attrs, class: e2.inputClasses }, {
        id: l2,
        checked: unref(o2),
        class: "hidden",
        role: "switch",
        type: "checkbox",
        onChange: f2[0] || (f2[0] = //@ts-ignore
        (...d2) => unref(r2) && unref(r2)(...d2))
      }), null, 16, Mr),
      createBaseVNode("div", Nr, [
        renderSlot(u2.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(e2.label), 1)
        ])
      ]),
      createBaseVNode("div", {
        class: normalizeClass(["a-switch-toggle flex rounded-inherit min-w-$a-switch-track-size", unref(o2) ? `bg-${e2.color}` : "bg-[hsl(var(--a-switch-default-color))]"])
      }, [
        createBaseVNode("div", {
          class: "a-switch-dot grid place-items-center rounded-inherit m-$a-switch-thumb-margin",
          style: normalizeStyle(unref(c2))
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["a-switch-icon color-$a-switch-icon-color", [
              unref(o2) ? `${e2.onIcon} text-${e2.color}` : e2.offIcon
            ]])
          }, null, 2)
        ], 4)
      ], 2)
    ], 2));
  }
});
var Fr = {
  /**
   * Tab title
   */
  title: {
    type: String,
    required: true
  },
  /**
   * Render icon before tab title
   */
  icon: Y,
  /**
   * Append icon after tab title
   */
  appendIcon: Y,
  /**
   * Stack tab title and icons vertically
   */
  stacked: {
    type: Boolean,
    default: false
  },
  /**
   * Tab value to be used for v-model binding
   */
  // ℹ️ If we want any type need to set `propName: { type: null }`. Using `propName: null` will omit (disable) the prop.
  value: { type: null },
  /**
   * Hide tab title on mobile
   */
  hideTitleOnMobile: {
    type: Boolean,
    default: false
  },
  /**
   * Set component in disabled state
   */
  disabled: le
};
var Wr = {
  key: 0,
  class: "a-tab-title whitespace-nowrap"
};
var qr = defineComponent({
  name: "ATab"
});
var ds = defineComponent({
  ...qr,
  props: Fr,
  setup(s2) {
    const t2 = s2, a2 = _a(ga).smaller("sm"), n2 = computed(() => {
      if (t2.hideTitleOnMobile && t2.icon)
        return a2;
    });
    return (o2, r2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["a-tab flex justify-center items-center cursor-pointer", [
        t2.disabled && "a-tab-disabled opacity-50 pointer-events-none",
        t2.stacked && "flex-col"
      ]])
    }, [
      renderSlot(o2.$slots, "prepend", {}, () => [
        t2.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(t2.icon)
        }, null, 2)) : createCommentVNode("", true)
      ]),
      t2.title && !unref(n2) ? (openBlock(), createElementBlock("p", Wr, toDisplayString(t2.title), 1)) : createCommentVNode("", true),
      renderSlot(o2.$slots, "append", {}, () => [
        t2.appendIcon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(t2.appendIcon)
        }, null, 2)) : createCommentVNode("", true)
      ])
    ], 2));
  }
});
var zr = {
  /**
   * Active tab
   */
  modelValue: { type: null },
  /**
   * Tabs to be rendered. Array of ATab props.
   */
  tabs: {
    type: Array,
    default: () => []
  },
  /**
   * Render tabs in vertical direction
   */
  vertical: {
    type: Boolean,
    default: false
  },
  /**
   * Specify how tabs should be justified. Can be 'start', 'center', 'end', 'stretch''
   */
  // justify: {
  //   type: String as PropType<'start' | 'center' | 'end' | 'stretch'>,
  //   default: 'start',
  // },
  /**
   * Mark all `ATab` as stacked
   */
  stackedTabs: {
    type: Boolean,
    default: false
  },
  /**
   * Hide tab title on mobile
   */
  hideTitleOnMobile: {
    type: Boolean,
    default: false
  },
  /**
   * Change tab transition
   */
  transition: {
    type: String,
    default: "view-next"
  }
};
var Xr = Symbol("tabBindings");
var fs = Symbol("activeView");
var ps = Symbol("ViewGroupModel");
var Hr = { class: "a-view w-full transform" };
var Yr = defineComponent({
  name: "AView"
});
var mt = defineComponent({
  ...Yr,
  props: {
    value: {
      type: null,
      default: void 0
    }
  },
  setup(s2) {
    const t2 = s2, e2 = inject(ps);
    if (!e2)
      throw new Error("AView must be used inside AViews");
    return (a2, n2) => withDirectives((openBlock(), createElementBlock("div", Hr, [
      renderSlot(a2.$slots, "default")
    ], 512)), [
      [vShow, unref(e2).value.value === t2.value]
    ]);
  }
});
var Ur = defineComponent({
  name: "AViews"
});
var vs = defineComponent({
  ...Ur,
  props: {
    /**
     * Active view value
     */
    modelValue: {
      type: null,
      default: 0
    },
    /**
     * Transition to use
     */
    transition: {
      type: String,
      default: "fade"
    }
  },
  emits: ["swipe"],
  setup(s2, { emit: t2 }) {
    var f2;
    const e2 = s2, a2 = useSlots();
    let n2 = [];
    a2.default && (n2 = ((f2 = a2.default()) == null ? void 0 : f2.filter((d2) => d2.type === mt)) || []);
    const o2 = n2.some((d2) => d2.props && d2.props.value), r2 = ref(0), l2 = We({
      options: o2 ? n2.map((d2) => d2.props && d2.props.value) : n2.length
    });
    l2.select(e2.modelValue), watch(() => e2.modelValue, (d2) => l2.select(d2)), provide(fs, r2), provide(ps, l2);
    const c2 = ref(), { direction: u2 } = Wt(c2);
    return watch(u2, (d2) => {
      d2 && t2("swipe", d2);
    }), (d2, p2) => (openBlock(), createElementBlock("div", {
      ref_key: "refViews",
      ref: c2,
      class: "a-views overflow-hidden"
    }, [
      createVNode(TransitionGroup, {
        tag: "div",
        class: normalizeClass([`${e2.transition}-group`, "a-views-wrapper relative"]),
        name: e2.transition
      }, {
        default: withCtx(() => [
          renderSlot(d2.$slots, "default", {}, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(n2), (m2, y2) => renderSlot(d2.$slots, y2, { key: y2 }, () => [
              (openBlock(), createBlock(resolveDynamicComponent(h(m2, { value: y2 }))))
            ])), 128))
          ])
        ]),
        _: 3
      }, 8, ["class", "name"])
    ], 512));
  }
});
var Kr = { class: "a-tabs-header relative" };
var Gr = { class: "a-tabs-content" };
var Jr = defineComponent({
  name: "ATabs"
});
var Qr = defineComponent({
  ...Jr,
  props: zr,
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = ref(), n2 = ref([]), o2 = ref(), r2 = computed(() => {
      if (e2.tabs.length === 0)
        return [];
      const P = e2.tabs[0];
      return typeof P == "string" ? e2.tabs : P.value ? e2.tabs.map((x2) => x2.value) : e2.tabs.length;
    }), { options: l2, select: c2, value: u2 } = We({
      options: r2.value
    });
    provide(fs, u2), provide(Xr, n2);
    const f2 = ref(), d2 = computed(() => !e2.vertical && f2.value), p2 = () => {
      if (e2.vertical)
        return;
      const P = a2.value;
      if (P) {
        const { scrollWidth: x2, clientWidth: T } = P;
        f2.value = x2 > T;
      } else
        f2.value = false;
    };
    G("resize", Ie(p2));
    const m2 = computed(() => {
      const P = ref([]), x2 = ref([]);
      return {
        tabClasses: P.value,
        tabsWrapperClasses: x2.value
      };
    }), y2 = ref({}), _ = () => {
      var x2, T;
      if (!o2.value)
        return;
      (((x2 = a2.value) == null ? void 0 : x2.scrollWidth) || 0) > (((T = a2.value) == null ? void 0 : T.clientWidth) || 0) && (f2.value = true);
      const P = o2.value.$el;
      e2.vertical ? y2.value = {
        transform: `translateY(${P.offsetTop}px)`,
        height: `${P.offsetHeight}px`
      } : y2.value = {
        transform: `translateX(${P.offsetLeft}px)`,
        width: `${P.offsetWidth}px`
      };
    }, N2 = (P, x2) => {
      const T = l2.value[x2].value;
      c2(T), t2("update:modelValue", T), o2.value = n2.value[x2], o2.value.$el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      }), _();
    };
    onMounted(_), onMounted(() => {
      e2.modelValue ? N2(e2.tabs[e2.modelValue], e2.modelValue) : N2(e2.tabs[0], 0);
    });
    const I = oa(void 0, 1500), F = async () => {
      var P;
      I.value = "end", await nextTick(), (P = a2.value) == null || P.scrollBy({
        left: 100,
        behavior: "smooth"
      });
    }, q = async () => {
      var P;
      I.value = "start", await nextTick(), (P = a2.value) == null || P.scrollBy({
        left: -100,
        behavior: "smooth"
      });
    }, z = ref(), S2 = ref(true), M2 = () => {
      a2.value && (z.value = a2.value.scrollLeft !== 0, S2.value = a2.value.scrollWidth - (a2.value.scrollLeft + a2.value.clientWidth) > 1);
    };
    watch(() => e2.tabs.length, () => {
      nextTick(() => {
        p2(), _();
      });
    }), Wt(a2, {
      threshold: 10,
      onSwipe: Ie(() => {
        I.value = "center";
      })
    });
    const B = Ie((P) => {
      let x2 = false;
      l2.value.forEach((T, K) => {
        if (!(x2 || T.value !== u2.value)) {
          if (P === "left") {
            const oe = K + 1;
            oe < l2.value.length && (x2 = true, N2(e2.tabs[oe], oe));
          } else if (P === "right") {
            const oe = K - 1;
            oe >= 0 && (x2 = true, N2(e2.tabs[oe], oe));
          }
        }
      });
    });
    return (P, x2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["a-tabs", [
        e2.vertical ? "a-tabs-vertical" : "a-tabs-horizontal",
        unref(d2) && "a-tabs-with-arrows"
      ]])
    }, [
      createBaseVNode("div", Kr, [
        unref(d2) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["a-tabs-navigation-arrow-wrapper absolute top-0 left-0 grid h-full place-items-center cursor-pointer", [!unref(z) && "pointer-events-none"]]),
          onClick: q
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["a-tabs-navigation-arrow-previous transition-opacity", [!unref(z) && "opacity-50"]])
          }, null, 2)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "refTabsWrapper",
          ref: a2,
          class: normalizeClass(["a-tabs-wrapper relative overflow-x-auto snap-x snap-mandatory", [
            unref(m2).tabsWrapperClasses,
            e2.vertical && "flex-col",
            e2.vertical ? "inline-flex items-start" : "flex items-center"
          ]]),
          onScroll: M2
        }, [
          renderSlot(P.$slots, "tabs", {}, () => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e2.tabs, (T, K) => (openBlock(), createBlock(unref(ds), mergeProps({
              key: K,
              ref_for: true,
              ref_key: "refTabs",
              ref: n2
            }, typeof T == "string" ? { title: T } : T, {
              class: [
                unref(l2)[K].isSelected && "a-tab-active",
                unref(m2).tabClasses
              ],
              stacked: e2.stackedTabs,
              "hide-title-on-mobile": e2.hideTitleOnMobile,
              style: {
                scrollSnapAlign: unref(I)
              },
              onClick: (oe) => N2(T, K)
            }), null, 16, ["class", "stacked", "hide-title-on-mobile", "style", "onClick"]))), 128))
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["a-tabs-active-indicator absolute", [e2.vertical ? "right-0 top-0" : "left-0"]]),
            style: normalizeStyle(unref(y2))
          }, null, 6)
        ], 34),
        unref(d2) ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["a-tabs-navigation-arrow-wrapper absolute top-0 right-0 grid h-full place-items-center cursor-pointer", [
            !unref(S2) && "pointer-events-none"
          ]]),
          onClick: F
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["a-tabs-navigation-arrow-next transition-opacity", [!unref(S2) && "opacity-50"]])
          }, null, 2)
        ], 2)) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", Gr, [
        createVNode(unref(vs), {
          modelValue: unref(u2),
          "onUpdate:modelValue": x2[0] || (x2[0] = (T) => isRef(u2) ? u2.value = T : null),
          transition: P.transition,
          onSwipe: unref(B)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(l2), (T, K) => (openBlock(), createBlock(unref(mt), {
              key: K,
              value: T.value
            }, {
              default: withCtx(() => [
                renderSlot(P.$slots, T.value)
              ]),
              _: 2
            }, 1032, ["value"]))), 128))
          ]),
          _: 3
        }, 8, ["modelValue", "transition", "onSwipe"])
      ])
    ], 2));
  }
});
var Zr = ["value"];
var el = defineComponent({
  name: "ATextarea",
  inheritAttrs: false
});
var tl = defineComponent({
  ...el,
  props: defu({
    modelValue: String,
    height: String
  }, ve),
  emits: ["update:modelValue"],
  setup(s2, { emit: t2 }) {
    const e2 = s2, a2 = Ve(e2, Object.keys(ve)), n2 = ref(), o2 = () => {
      var r2;
      (r2 = n2.value) == null || r2.focus();
    };
    return (r2, l2) => (openBlock(), createBlock(unref(De), mergeProps({ ...unref(a2), class: r2.$attrs.class }, {
      "input-wrapper-classes": ["min-h-32 overflow-hidden", e2.height, e2.inputWrapperClasses],
      class: "a-textarea !pointer-events-auto",
      "onClick:inputWrapper": o2
    }), createSlots({
      default: withCtx((c2) => [
        createBaseVNode("textarea", mergeProps({ ...r2.$attrs, ...c2 }, {
          ref_key: "textarea",
          ref: n2,
          class: "a-textarea-textarea bg-transparent resize-none",
          value: e2.modelValue,
          onInput: l2[0] || (l2[0] = (u2) => t2("update:modelValue", u2.target.value))
        }), null, 16, Zr)
      ]),
      _: 2
    }, [
      renderList(Object.keys(r2.$slots).filter((c2) => c2 !== "default"), (c2) => ({
        name: c2,
        fn: withCtx((u2) => [
          c2 !== "default" ? renderSlot(r2.$slots, c2, normalizeProps(mergeProps({ key: 0 }, u2 || {}))) : createCommentVNode("", true)
        ])
      }))
    ]), 1040, ["input-wrapper-classes"]));
  }
});
var { referenceEl: kl, ...sl } = vt;
var al = {
  trigger: {
    default: "hover"
  },
  placement: {
    default: "bottom"
  }
};
var nl = {
  ...ot(al, sl),
  /**
    * Text to render in tooltip
    */
  text: {
    type: String,
    default: ""
  }
};
var rl = { class: "a-tooltip" };
var ll = { class: "a-tooltip-text" };
var ol = defineComponent({
  name: "ATooltip"
});
var il = defineComponent({
  ...ol,
  props: nl,
  setup(s2) {
    const t2 = s2, e2 = ft(), a2 = [
      offset(10),
      flip(),
      shift({ padding: 10 })
      // arrow({
      //   element: arrowEl,
      // }),
    ];
    return (n2, o2) => (openBlock(), createBlock(unref(qe), mergeProps(t2, {
      "reference-el": unref(e2),
      class: "a-tooltip-wrapper",
      middleware: () => unref(a2)
    }), {
      default: withCtx(() => [
        createBaseVNode("div", rl, [
          createBaseVNode("span", ll, [
            renderSlot(n2.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(t2.text), 1)
            ])
          ])
        ])
      ]),
      _: 3
    }, 16, ["reference-el", "middleware"]));
  }
});
var Tt = Object.freeze(Object.defineProperty({
  __proto__: null,
  AAlert: Fa,
  AAvatar: Ge,
  ABadge: Ua,
  ABaseInput: De,
  ABtn: Je,
  ACard: _e,
  ACheckbox: On,
  AChip: Tn,
  ADataTable: Kn,
  ADialog: Qn,
  ADrawer: er,
  AFadeTransition: Ps,
  AFloating: qe,
  AIcon: Qt,
  AInput: Zt,
  AList: ns,
  AListItem: ts,
  ALoader: it,
  ALoadingIcon: _r,
  AMenu: kr,
  ARadio: xr,
  ARating: Vr,
  AScaleTransition: Bs,
  AScrollXReverseTransition: Fs,
  AScrollXTransition: Ds,
  AScrollYReverseTransition: Ms,
  AScrollYTransition: js,
  ASelect: us,
  ASlideXReverseTransition: Rs,
  ASlideXTransition: Ns,
  ASlideYReverseTransition: Ls,
  ASlideYTransition: Es,
  ASpinner: Fe,
  ASwitch: Dr,
  ATab: ds,
  ATable: Gt,
  ATabs: Qr,
  ATextarea: tl,
  ATooltip: il,
  ATypography: ct,
  AView: mt,
  AViewNextTransition: Ws,
  AViewPreviousTransition: qs,
  AViews: vs,
  transitions: Is
}, Symbol.toStringTag, { value: "Module" }));
var cl = Symbol("ANU_CONFIG");
var ul = {
  registerComponents: true,
  initialTheme: "light",
  themes: {
    light: {
      class: "",
      colors: {
        primary: "265, 97.7%, 66.3%",
        success: "94.5, 100%, 39.6%",
        info: "200.1, 100%, 54.3%",
        warning: "42.4, 100%, 50%",
        danger: "358.3, 100%, 64.9%"
      },
      cssVars: {
        "body-bg-c": "0,4.8%,95.9%",
        // ℹ️ Used for background on body like select options, card, etc
        "surface-c": "0, 0%, 100%"
      }
    },
    dark: {
      class: "dark",
      colors: {
        primary: "261, 73%, 66.3%",
        success: "94.5, 73%, 39.6%",
        info: "200.1, 73%, 54.3%",
        warning: "42.4, 73%, 50%",
        danger: "358.3, 73%, 64.9%"
      },
      cssVars: {
        "body-bg-c": "var(--a-primary-hue), 15%, 5%",
        "surface-c": "var(--a-primary-hue), 7%, 10%"
      }
    }
  }
};
var Al = {
  install(s2, t2 = {}) {
    const e2 = defu(t2, ul);
    if (e2.registerComponents)
      for (const a2 in Tt) {
        const n2 = Tt[a2];
        s2.component(n2.name, n2);
      }
    s2.provide(cl, e2), rt({
      initialTheme: e2.initialTheme,
      themes: e2.themes
    });
  }
};
var dl = ["primary", "success", "info", "warning", "danger"];
var fl = {
  colors: dl
};
function Sl(s2 = {}) {
  const t2 = defu(s2, fl);
  return {
    name: "@anu-vue/preset-core",
    theme: {
      colors: Object.fromEntries(
        t2.colors.map((e2) => [e2, `hsl(var(--a-${e2}))`])
      )
    },
    safelist: [
      ...t2.colors.map((e2) => `bg-${e2}`),
      ...t2.colors.map((e2) => `border-${e2}`),
      ...t2.colors.map((e2) => `text-${e2}`),
      ...t2.colors.map((e2) => `after:bg-${e2}`),
      // Typography
      ...t2.colors.map((e2) => `a-title-${e2}`),
      ...t2.colors.map((e2) => `a-subtitle-${e2}`),
      ...["top", "right", "bottom", "left"].map((e2) => `a-drawer-anchor-${e2}`)
    ],
    variants: [
      (e2) => e2.startsWith("i:") ? {
        // slice `i:` prefix and passed to the next variants and rules
        matcher: e2.slice(2),
        selector: (a2) => `${a2} > i`
      } : e2
    ]
  };
}
var xl = {
  height: "1.2em",
  width: "1.2em",
  // ℹ️ We also have to find a way to inject this without this config. (e.g. [class^=i-])
  "vertical-align": "text-top",
  "flex-shrink": "0",
  display: "inline-block",
  "backface-visibility": "hidden"
};
export {
  Fa as AAlert,
  Ge as AAvatar,
  Ua as ABadge,
  De as ABaseInput,
  Je as ABtn,
  _e as ACard,
  On as ACheckbox,
  Tn as AChip,
  Kn as ADataTable,
  Qn as ADialog,
  er as ADrawer,
  Ps as AFadeTransition,
  qe as AFloating,
  Qt as AIcon,
  Zt as AInput,
  ns as AList,
  ts as AListItem,
  it as ALoader,
  _r as ALoadingIcon,
  kr as AMenu,
  cl as ANU_CONFIG,
  xr as ARadio,
  Vr as ARating,
  Bs as AScaleTransition,
  Fs as AScrollXReverseTransition,
  Ds as AScrollXTransition,
  Ms as AScrollYReverseTransition,
  js as AScrollYTransition,
  us as ASelect,
  Rs as ASlideXReverseTransition,
  Ns as ASlideXTransition,
  Ls as ASlideYReverseTransition,
  Es as ASlideYTransition,
  Fe as ASpinner,
  Dr as ASwitch,
  ds as ATab,
  Gt as ATable,
  Qr as ATabs,
  tl as ATextarea,
  il as ATooltip,
  ct as ATypography,
  mt as AView,
  Ws as AViewNextTransition,
  qs as AViewPreviousTransition,
  vs as AViews,
  hl as AnuComponentResolver,
  Al as anu,
  Tt as components,
  gl as composables,
  dl as defaultThemeColors,
  Me as isThemeColor,
  Sl as presetAnu,
  xl as presetIconExtraProperties,
  Is as transitions,
  rt as useAnu,
  dt as useCheckbox,
  ut as useCheckboxProps,
  lt as useColor,
  ue as useConfigurable,
  Re as useDOMScrollLock,
  We as useGroupModel,
  An as useIndeterminateCheckbox,
  be as useLayer,
  ft as useParent,
  he as useProps,
  Ut as useSearch,
  Kt as useSort,
  de as useTeleport
};
//# sourceMappingURL=anu-vue.js.map
