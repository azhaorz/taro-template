(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/@tarojs/redux/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@tarojs/redux/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof2(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var Taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/dist/index.esm.js");
var Taro__default = _interopDefault(Taro);

var store = null;
var appGlobal = global || {};
var globalRef = Object.getPrototypeOf(appGlobal) || appGlobal;
function getStore() {

  return store;
}
function setStore(arg) {
  {
    store = arg;
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function isObject(arg) {
  return arg != null && _typeof(arg) === 'object' && !Array.isArray(arg);
}
function mergeObjects(obj1, obj2) {
  var result = Object.assign({}, obj1);

  if (isObject(obj1) && isObject(obj2)) {
    for (var p in obj2) {
      if (isObject(obj1[p]) && isObject(obj2[p])) {
        result[p] = mergeObjects(obj1[p], obj2[p]);
      } else {
        result[p] = obj2[p];
      }
    }
  }

  return result;
}

function wrapPropsWithDispatch(mapDispatchToProps, dispatch) {
  if (typeof mapDispatchToProps === 'function') {
    return mapDispatchToProps(dispatch);
  }

  if (isObject(mapDispatchToProps)) {
    return Object.keys(mapDispatchToProps).reduce(function (props, key) {
      var actionCreator = mapDispatchToProps[key];

      if (typeof actionCreator === 'function') {
        props[key] = function () {
          return dispatch(actionCreator.apply(undefined, arguments));
        };
      }

      return props;
    }, {});
  }

  return {};
}

function connect(mapStateToProps, mapDispatchToProps) {
  var store = getStore();
  var dispatch = store.dispatch;
  var initMapDispatch = wrapPropsWithDispatch(mapDispatchToProps, dispatch);
  initMapDispatch.dispatch = dispatch;

  var stateListener = function stateListener() {
    var _this = this;

    var isChanged = false;
    var newMapState = mapStateToProps(store.getState(), this.props);
    var prevProps = Object.assign({}, this.props);
    Object.keys(newMapState).forEach(function (key) {
      var val = newMapState[key];

      if (isObject(val) && isObject(initMapDispatch[key])) {
        val = mergeObjects(val, initMapDispatch[key]);
      }

      if (_this.props[key] !== val) {
        _this.props[key] = val;
        isChanged = true;
      }
    });

    if (isChanged) {
      if (!this._dirty) {
        this.prevProps = prevProps;
      }

      this._unsafeCallUpdate = true;
      this.setState({}, function () {
        delete _this._unsafeCallUpdate;
      });
    }
  };

  return function connectComponent(Component) {
    // 将从redux而来的props从配置中剔除
    var mapState = mapStateToProps(store.getState(), Component.defaultProps || {});
    Component.properties && mapState && Object.keys(mapState).forEach(function (key) {
      delete Component.properties[key];
    });
    var unSubscribe = null;
    return (/*#__PURE__*/function (_Component) {
        _inherits(Connect, _Component);

        var _super = _createSuper(Connect);

        function Connect(props, isPage) {
          var _this2;

          _classCallCheck(this, Connect);

          _this2 = _super.call(this, Object.assign.apply(Object, Array.prototype.slice.call(arguments).concat([mergeObjects(mapStateToProps(store.getState(), props), initMapDispatch)])), isPage);
          Object.keys(initMapDispatch).forEach(function (key) {
            _this2["__event_".concat(key)] = initMapDispatch[key];
          });
          return _this2;
        }

        _createClass(Connect, [{
          key: "_constructor",
          value: function _constructor() {
            if (!this.$scope) {
              if (_get(_getPrototypeOf(Connect.prototype), "_constructor", this)) {
                _get(_getPrototypeOf(Connect.prototype), "_constructor", this).call(this, this.props);
              }

              return;
            }

            var store = getStore();
            Object.assign(this.props, mergeObjects(mapStateToProps(store.getState(), this.props), initMapDispatch));
            unSubscribe = store.subscribe(stateListener.bind(this));

            if (_get(_getPrototypeOf(Connect.prototype), "_constructor", this)) {
              _get(_getPrototypeOf(Connect.prototype), "_constructor", this).call(this, this.props);
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (_get(_getPrototypeOf(Connect.prototype), "componentWillUnmount", this)) {
              _get(_getPrototypeOf(Connect.prototype), "componentWillUnmount", this).call(this);
            }

            if (unSubscribe) {
              unSubscribe();
            }

            unSubscribe = null;
          }
        }]);

        return Connect;
      }(Component)
    );
  };
}

var Provider = function Provider() {
  _classCallCheck(this, Provider);
};

var ReduxContext = Taro__default.createContext(null);

/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Taro.useContext(ReduxContext);
  return contextValue;
}

/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

function useStore() {
  var _useReduxContext = useReduxContext(),
      store = _useReduxContext.store;

  return store;
}

/**
 * A hook to access the redux `dispatch` function. Note that in most cases where you
 * might want to use this hook it is recommended to use `useActions` instead to bind
 * action creators to the `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useReduxDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

function useDispatch() {
  var store = useStore();
  return store.dispatch;
}

// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var getBatch = function getBatch() {
  return batch;
};

// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  _createClass(Subscription, [{
    key: "addNestedSub",
    value: function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    }
  }, {
    key: "notifyNestedSubs",
    value: function notifyNestedSubs() {
      this.listeners.notify();
    }
  }, {
    key: "handleChangeWrapper",
    value: function handleChangeWrapper() {
      if (this.onStateChange) {
        this.onStateChange();
      }
    }
  }, {
    key: "isSubscribed",
    value: function isSubscribed() {
      return Boolean(this.unsubscribe);
    }
  }, {
    key: "trySubscribe",
    value: function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
        this.listeners = createListenerCollection();
      }
    }
  }, {
    key: "tryUnsubscribe",
    value: function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    }
  }]);

  return Subscription;
}();

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

function invariant(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

var refEquality = function refEquality(a, b) {
  return a === b;
};
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

function useSelector(selector) {
  var equalityFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : refEquality;
  invariant(selector, "You must pass a selector to useSelectors");

  var _useReduxContext = useReduxContext(),
      store = _useReduxContext.store,
      contextSub = _useReduxContext.subscription;

  var _useReducer = Taro.useReducer(function (s) {
    return s + 1;
  }, 0),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      forceRender = _useReducer2[1];

  var subscription = Taro.useMemo(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Taro.useRef();
  var latestSelector = Taro.useRef();
  var latestSelectedState = Taro.useRef();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occured while selecting the store state: ".concat(err.message, ".");

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\nOriginal stack trace:");
    }

    throw new Error(errorMessage);
  }

  Taro.useEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Taro.useEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}

var index = {
  connect: connect,
  Provider: Provider,
  getStore: getStore,
  setStore: setStore,
  useDispatch: useDispatch,
  useSelector: useSelector,
  useStore: useStore,
  ReduxContext: ReduxContext
};

exports.default = index;
exports.connect = connect;
exports.Provider = Provider;
exports.getStore = getStore;
exports.setStore = setStore;
exports.useDispatch = useDispatch;
exports.useSelector = useSelector;
exports.useStore = useStore;
exports.ReduxContext = ReduxContext;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../mini-runner/node_modules/webpack/buildin/global.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tarojs/redux/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@tarojs/redux/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/redux/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;

  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ })

}]);