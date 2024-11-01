/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-pixabay-premium/assets/js/gutenberg/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@wordpress/element/build-module/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/element/build-module/index.js ***!
  \***************************************************************/
/*! exports provided: Children, cloneElement, Component, createContext, createElement, createRef, forwardRef, Fragment, isValidElement, StrictMode, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, concatChildren, switchChildrenNodeName, createPortal, findDOMNode, render, unmountComponentAtNode, isEmptyElement, renderToString, RawHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./node_modules/@wordpress/element/build-module/react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["Children"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatChildren", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["concatChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchChildrenNodeName", function() { return _react__WEBPACK_IMPORTED_MODULE_0__["switchChildrenNodeName"]; });

/* harmony import */ var _react_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-platform */ "./node_modules/@wordpress/element/build-module/react-platform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_1__["createPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return _react_platform__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/element/build-module/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmptyElement", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["isEmptyElement"]; });

/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serialize */ "./node_modules/@wordpress/element/build-module/serialize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToString", function() { return _serialize__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raw-html */ "./node_modules/@wordpress/element/build-module/raw-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawHTML", function() { return _raw_html__WEBPACK_IMPORTED_MODULE_4__["default"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/element/build-module/raw-html.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/element/build-module/raw-html.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RawHTML; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react */ "./node_modules/@wordpress/element/build-module/react.js");



/**
 * Internal dependencies
 */

/**
 * Component used as equivalent of Fragment with unescaped HTML, in cases where
 * it is desirable to render dangerous HTML without needing a wrapper element.
 * To preserve additional props, a `div` wrapper _will_ be created if any props
 * aside from `children` are passed.
 *
 * @param {string} props.children HTML to render.
 *
 * @return {WPElement} Dangerously-rendering element.
 */

function RawHTML(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  // The DIV wrapper will be stripped by serializer, unless there are
  // non-children props present.
  return Object(_react__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    dangerouslySetInnerHTML: {
      __html: children
    }
  }, props));
}
//# sourceMappingURL=raw-html.js.map

/***/ }),

/***/ "./node_modules/@wordpress/element/build-module/react-platform.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/element/build-module/react-platform.js ***!
  \************************************************************************/
/*! exports provided: createPortal, findDOMNode, render, unmountComponentAtNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["createPortal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"]; });

/**
 * External dependencies
 */

/**
 * Creates a portal into which a component can be rendered.
 *
 * @see https://github.com/facebook/react/issues/10309#issuecomment-318433235
 *
 * @param {Component} component Component
 * @param {Element}   target    DOM node into which element should be rendered
 */


/**
 * Finds the dom node of a React component
 *
 * @param {Component} component component's instance
 * @param {Element}   target    DOM node into which element should be rendered
 */


/**
 * Renders a given element into the target DOM node.
 *
 * @param {WPElement} element Element to render
 * @param {Element}   target  DOM node into which element should be rendered
 */


/**
 * Removes any mounted element from the target DOM node.
 *
 * @param {Element} target DOM node in which element is to be removed
 */


//# sourceMappingURL=react-platform.js.map

/***/ }),

/***/ "./node_modules/@wordpress/element/build-module/react.js":
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/element/build-module/react.js ***!
  \***************************************************************/
/*! exports provided: Children, cloneElement, Component, createContext, createElement, createRef, forwardRef, Fragment, isValidElement, StrictMode, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, concatChildren, switchChildrenNodeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatChildren", function() { return concatChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchChildrenNodeName", function() { return switchChildrenNodeName; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return react__WEBPACK_IMPORTED_MODULE_2__["Children"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return react__WEBPACK_IMPORTED_MODULE_2__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return react__WEBPACK_IMPORTED_MODULE_2__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return react__WEBPACK_IMPORTED_MODULE_2__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return react__WEBPACK_IMPORTED_MODULE_2__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return react__WEBPACK_IMPORTED_MODULE_2__["StrictMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return react__WEBPACK_IMPORTED_MODULE_2__["useState"]; });

/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */


/**
 * Object that provides utilities for dealing with React children.
 */


/**
 * Creates a copy of an element with extended props.
 *
 * @param {WPElement} element Element
 * @param {?Object}   props   Props to apply to cloned element
 *
 * @return {WPElement} Cloned element.
 */


/**
 * A base class to create WordPress Components (Refs, state and lifecycle hooks)
 */


/**
 * Creates a context object containing two components: a provider and consumer.
 *
 * @param {Object} defaultValue A default data stored in the context.
 *
 * @return {Object} Context object.
 */


/**
 * Returns a new element of given type. Type can be either a string tag name or
 * another function which itself returns an element.
 *
 * @param {?(string|Function)} type     Tag name or element creator
 * @param {Object}             props    Element properties, either attribute
 *                                       set to apply to DOM node or values to
 *                                       pass through to element creator
 * @param {...WPElement}       children Descendant elements
 *
 * @return {WPElement} Element.
 */


/**
 * Returns an object tracking a reference to a rendered element via its
 * `current` property as either a DOMElement or Element, dependent upon the
 * type of element rendered with the ref attribute.
 *
 * @return {Object} Ref object.
 */


/**
 * Component enhancer used to enable passing a ref to its wrapped component.
 * Pass a function argument which receives `props` and `ref` as its arguments,
 * returning an element using the forwarded ref. The return value is a new
 * component which forwards its ref.
 *
 * @param {Function} forwarder Function passed `props` and `ref`, expected to
 *                             return an element.
 *
 * @return {WPComponent} Enhanced component.
 */


/**
 * A component which renders its children without any wrapping element.
 */


/**
 * Checks if an object is a valid WPElement
 *
 * @param {Object} objectToCheck The object to be checked.
 *
 * @return {boolean} true if objectToTest is a valid WPElement and false otherwise.
 */


/**
 * Component that activates additional checks and warnings for its descendants.
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecallback
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usememo
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 */


/**
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */


/**
 * Concatenate two or more React children objects.
 *
 * @param {...?Object} childrenArguments Array of children arguments (array of arrays/strings/objects) to concatenate.
 *
 * @return {Array} The concatenated value.
 */

function concatChildren() {
  for (var _len = arguments.length, childrenArguments = new Array(_len), _key = 0; _key < _len; _key++) {
    childrenArguments[_key] = arguments[_key];
  }

  return childrenArguments.reduce(function (memo, children, i) {
    react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child, j) {
      if (child && 'string' !== typeof child) {
        child = Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(child, {
          key: [i, j].join()
        });
      }

      memo.push(child);
    });
    return memo;
  }, []);
}
/**
 * Switches the nodeName of all the elements in the children object.
 *
 * @param {?Object} children Children object.
 * @param {string}  nodeName Node name.
 *
 * @return {?Object} The updated children object.
 */

function switchChildrenNodeName(children, nodeName) {
  return children && react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (elt, index) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(elt)) {
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(nodeName, {
        key: index
      }, elt);
    }

    var _elt$props = elt.props,
        childrenProp = _elt$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_elt$props, ["children"]);

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(nodeName, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, props), childrenProp);
  });
}
//# sourceMappingURL=react.js.map

/***/ }),

/***/ "./node_modules/@wordpress/element/build-module/serialize.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/element/build-module/serialize.js ***!
  \*******************************************************************/
/*! exports provided: hasPrefix, renderElement, renderNativeComponent, renderComponent, renderAttributes, renderStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPrefix", function() { return hasPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNativeComponent", function() { return renderNativeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAttributes", function() { return renderAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStyle", function() { return renderStyle; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/escape-html */ "./node_modules/@wordpress/escape-html/build-module/index.js");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./react */ "./node_modules/@wordpress/element/build-module/react.js");
/* harmony import */ var _raw_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raw-html */ "./node_modules/@wordpress/element/build-module/raw-html.js");




/**
 * Parts of this source were derived and modified from fast-react-render,
 * released under the MIT license.
 *
 * https://github.com/alt-j/fast-react-render
 *
 * Copyright (c) 2016 Andrey Morozov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




var _createContext = Object(_react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;
/**
 * Valid attribute types.
 *
 * @type {Set}
 */


var ATTRIBUTES_TYPES = new Set(['string', 'boolean', 'number']);
/**
 * Element tags which can be self-closing.
 *
 * @type {Set}
 */

var SELF_CLOSING_TAGS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
/**
 * Boolean attributes are attributes whose presence as being assigned is
 * meaningful, even if only empty.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => tr.lastChild.textContent.indexOf( 'Boolean attribute' ) !== -1 )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * @type {Set}
 */

var BOOLEAN_ATTRIBUTES = new Set(['allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'download', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'typemustmatch']);
/**
 * Enumerated attributes are attributes which must be of a specific value form.
 * Like boolean attributes, these are meaningful if specified, even if not of a
 * valid enumerated value.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( [ ...document.querySelectorAll( '#attributes-1 > tbody > tr' ) ]
 *     .filter( ( tr ) => /^("(.+?)";?\s*)+/.test( tr.lastChild.textContent.trim() ) )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * Some notable omissions:
 *
 *  - `alt`: https://blog.whatwg.org/omit-alt
 *
 * @type {Set}
 */

var ENUMERATED_ATTRIBUTES = new Set(['autocapitalize', 'autocomplete', 'charset', 'contenteditable', 'crossorigin', 'decoding', 'dir', 'draggable', 'enctype', 'formenctype', 'formmethod', 'http-equiv', 'inputmode', 'kind', 'method', 'preload', 'scope', 'shape', 'spellcheck', 'translate', 'type', 'wrap']);
/**
 * Set of CSS style properties which support assignment of unitless numbers.
 * Used in rendering of style properties, where `px` unit is assumed unless
 * property is included in this set or value is zero.
 *
 * Generated via:
 *
 * Object.entries( document.createElement( 'div' ).style )
 *     .filter( ( [ key ] ) => (
 *         ! /^(webkit|ms|moz)/.test( key ) &&
 *         ( e.style[ key ] = 10 ) &&
 *         e.style[ key ] === '10'
 *     ) )
 *     .map( ( [ key ] ) => key )
 *     .sort();
 *
 * @type {Set}
 */

var CSS_PROPERTIES_SUPPORTS_UNITLESS = new Set(['animation', 'animationIterationCount', 'baselineShift', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'columnCount', 'cx', 'cy', 'fillOpacity', 'flexGrow', 'flexShrink', 'floodOpacity', 'fontWeight', 'gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart', 'lineHeight', 'opacity', 'order', 'orphans', 'r', 'rx', 'ry', 'shapeImageThreshold', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'widows', 'x', 'y', 'zIndex', 'zoom']);
/**
 * Returns true if the specified string is prefixed by one of an array of
 * possible prefixes.
 *
 * @param {string}   string   String to check.
 * @param {string[]} prefixes Possible prefixes.
 *
 * @return {boolean} Whether string has prefix.
 */

function hasPrefix(string, prefixes) {
  return prefixes.some(function (prefix) {
    return string.indexOf(prefix) === 0;
  });
}
/**
 * Returns true if the given prop name should be ignored in attributes
 * serialization, or false otherwise.
 *
 * @param {string} attribute Attribute to check.
 *
 * @return {boolean} Whether attribute should be ignored.
 */

function isInternalAttribute(attribute) {
  return 'key' === attribute || 'children' === attribute;
}
/**
 * Returns the normal form of the element's attribute value for HTML.
 *
 * @param {string} attribute Attribute name.
 * @param {*}      value     Non-normalized attribute value.
 *
 * @return {string} Normalized attribute value.
 */


function getNormalAttributeValue(attribute, value) {
  switch (attribute) {
    case 'style':
      return renderStyle(value);
  }

  return value;
}
/**
 * Returns the normal form of the element's attribute name for HTML.
 *
 * @param {string} attribute Non-normalized attribute name.
 *
 * @return {string} Normalized attribute name.
 */


function getNormalAttributeName(attribute) {
  switch (attribute) {
    case 'htmlFor':
      return 'for';

    case 'className':
      return 'class';
  }

  return attribute.toLowerCase();
}
/**
 * Returns the normal form of the style property name for HTML.
 *
 * - Converts property names to kebab-case, e.g. 'backgroundColor' → 'background-color'
 * - Leaves custom attributes alone, e.g. '--myBackgroundColor' → '--myBackgroundColor'
 * - Converts vendor-prefixed property names to -kebab-case, e.g. 'MozTransform' → '-moz-transform'
 *
 * @param {string} property Property name.
 *
 * @return {string} Normalized property name.
 */


function getNormalStylePropertyName(property) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["startsWith"])(property, '--')) {
    return property;
  }

  if (hasPrefix(property, ['ms', 'O', 'Moz', 'Webkit'])) {
    return '-' + Object(lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"])(property);
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"])(property);
}
/**
 * Returns the normal form of the style property value for HTML. Appends a
 * default pixel unit if numeric, not a unitless property, and not zero.
 *
 * @param {string} property Property name.
 * @param {*}      value    Non-normalized property value.
 *
 * @return {*} Normalized property value.
 */


function getNormalStylePropertyValue(property, value) {
  if (typeof value === 'number' && 0 !== value && !CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)) {
    return value + 'px';
  }

  return value;
}
/**
 * Serializes a React element to string.
 *
 * @param {WPElement} element       Element to serialize.
 * @param {?Object}   context       Context object.
 * @param {?Object}   legacyContext Legacy context object.
 *
 * @return {string} Serialized element.
 */


function renderElement(element, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (null === element || undefined === element || false === element) {
    return '';
  }

  if (Array.isArray(element)) {
    return renderChildren(element, context, legacyContext);
  }

  switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(element)) {
    case 'string':
      return Object(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__["escapeHTML"])(element);

    case 'number':
      return element.toString();
  }

  var type = element.type,
      props = element.props;

  switch (type) {
    case _react__WEBPACK_IMPORTED_MODULE_5__["StrictMode"]:
    case _react__WEBPACK_IMPORTED_MODULE_5__["Fragment"]:
      return renderChildren(props.children, context, legacyContext);

    case _raw_html__WEBPACK_IMPORTED_MODULE_6__["default"]:
      var children = props.children,
          wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children"]);

      return renderNativeComponent(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(wrapperProps) ? null : 'div', Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, wrapperProps, {
        dangerouslySetInnerHTML: {
          __html: children
        }
      }), context, legacyContext);
  }

  switch (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(type)) {
    case 'string':
      return renderNativeComponent(type, props, context, legacyContext);

    case 'function':
      if (type.prototype && typeof type.prototype.render === 'function') {
        return renderComponent(type, props, context, legacyContext);
      }

      return renderElement(type(props, legacyContext), context, legacyContext);
  }

  switch (type && type.$$typeof) {
    case Provider.$$typeof:
      return renderChildren(props.children, props.value, legacyContext);

    case Consumer.$$typeof:
      return renderElement(props.children(context || type._currentValue), context, legacyContext);
  }

  return '';
}
/**
 * Serializes a native component type to string.
 *
 * @param {?string} type          Native component type to serialize, or null if
 *                                rendering as fragment of children content.
 * @param {Object}  props         Props object.
 * @param {?Object} context       Context object.
 * @param {?Object} legacyContext Legacy context object.
 *
 * @return {string} Serialized element.
 */

function renderNativeComponent(type, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var content = '';

  if (type === 'textarea' && props.hasOwnProperty('value')) {
    // Textarea children can be assigned as value prop. If it is, render in
    // place of children. Ensure to omit so it is not assigned as attribute
    // as well.
    content = renderChildren(props.value, context, legacyContext);
    props = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["omit"])(props, 'value');
  } else if (props.dangerouslySetInnerHTML && typeof props.dangerouslySetInnerHTML.__html === 'string') {
    // Dangerous content is left unescaped.
    content = props.dangerouslySetInnerHTML.__html;
  } else if (typeof props.children !== 'undefined') {
    content = renderChildren(props.children, context, legacyContext);
  }

  if (!type) {
    return content;
  }

  var attributes = renderAttributes(props);

  if (SELF_CLOSING_TAGS.has(type)) {
    return '<' + type + attributes + '/>';
  }

  return '<' + type + attributes + '>' + content + '</' + type + '>';
}
/**
 * Serializes a non-native component type to string.
 *
 * @param {Function} Component     Component type to serialize.
 * @param {Object}   props         Props object.
 * @param {?Object}  context       Context object.
 * @param {?Object}  legacyContext Legacy context object.
 *
 * @return {string} Serialized element
 */

function renderComponent(Component, props, context) {
  var legacyContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var instance = new Component(props, legacyContext);

  if (typeof instance.getChildContext === 'function') {
    Object.assign(legacyContext, instance.getChildContext());
  }

  var html = renderElement(instance.render(), context, legacyContext);
  return html;
}
/**
 * Serializes an array of children to string.
 *
 * @param {Array}   children      Children to serialize.
 * @param {?Object} context       Context object.
 * @param {?Object} legacyContext Legacy context object.
 *
 * @return {string} Serialized children.
 */

function renderChildren(children, context) {
  var legacyContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var result = '';
  children = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["castArray"])(children);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    result += renderElement(child, context, legacyContext);
  }

  return result;
}
/**
 * Renders a props object as a string of HTML attributes.
 *
 * @param {Object} props Props object.
 *
 * @return {string} Attributes string.
 */


function renderAttributes(props) {
  var result = '';

  for (var key in props) {
    var attribute = getNormalAttributeName(key);

    if (!Object(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__["isValidAttributeName"])(attribute)) {
      continue;
    }

    var value = getNormalAttributeValue(key, props[key]); // If value is not of serializeable type, skip.

    if (!ATTRIBUTES_TYPES.has(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(value))) {
      continue;
    } // Don't render internal attribute names.


    if (isInternalAttribute(key)) {
      continue;
    }

    var isBooleanAttribute = BOOLEAN_ATTRIBUTES.has(attribute); // Boolean attribute should be omitted outright if its value is false.

    if (isBooleanAttribute && value === false) {
      continue;
    }

    var isMeaningfulAttribute = isBooleanAttribute || hasPrefix(key, ['data-', 'aria-']) || ENUMERATED_ATTRIBUTES.has(attribute); // Only write boolean value as attribute if meaningful.

    if (typeof value === 'boolean' && !isMeaningfulAttribute) {
      continue;
    }

    result += ' ' + attribute; // Boolean attributes should write attribute name, but without value.
    // Mere presence of attribute name is effective truthiness.

    if (isBooleanAttribute) {
      continue;
    }

    if (typeof value === 'string') {
      value = Object(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_4__["escapeAttribute"])(value);
    }

    result += '="' + value + '"';
  }

  return result;
}
/**
 * Renders a style object as a string attribute value.
 *
 * @param {Object} style Style object.
 *
 * @return {string} Style attribute value.
 */

function renderStyle(style) {
  // Only generate from object, e.g. tolerate string value.
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(style)) {
    return style;
  }

  var result;

  for (var property in style) {
    var value = style[property];

    if (null === value || undefined === value) {
      continue;
    }

    if (result) {
      result += ';';
    } else {
      result = '';
    }

    var normalName = getNormalStylePropertyName(property);
    var normalValue = getNormalStylePropertyValue(property, value);
    result += normalName + ':' + normalValue;
  }

  return result;
}
/* harmony default export */ __webpack_exports__["default"] = (renderElement);
//# sourceMappingURL=serialize.js.map

/***/ }),

/***/ "./node_modules/@wordpress/element/build-module/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/element/build-module/utils.js ***!
  \***************************************************************/
/*! exports provided: isEmptyElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyElement", function() { return isEmptyElement; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Checks if the provided WP element is empty.
 *
 * @param {*} element WP element to check.
 * @return {boolean} True when an element is considered empty.
 */

var isEmptyElement = function isEmptyElement(element) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(element)) {
    return false;
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isString"])(element) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(element)) {
    return !element.length;
  }

  return !element;
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@wordpress/escape-html/build-module/escape-greater.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/escape-html/build-module/escape-greater.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __unstableEscapeGreaterThan; });
/**
 * Returns a string with greater-than sign replaced.
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to exist.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */
function __unstableEscapeGreaterThan(value) {
  return value.replace(/>/g, '&gt;');
}
//# sourceMappingURL=escape-greater.js.map

/***/ }),

/***/ "./node_modules/@wordpress/escape-html/build-module/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/escape-html/build-module/index.js ***!
  \*******************************************************************/
/*! exports provided: escapeAmpersand, escapeQuotationMark, escapeLessThan, escapeAttribute, escapeHTML, isValidAttributeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeAmpersand", function() { return escapeAmpersand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeQuotationMark", function() { return escapeQuotationMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeLessThan", function() { return escapeLessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeAttribute", function() { return escapeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHTML", function() { return escapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAttributeName", function() { return isValidAttributeName; });
/* harmony import */ var _escape_greater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-greater */ "./node_modules/@wordpress/escape-html/build-module/escape-greater.js");
/**
 * Internal dependencies
 */

/**
 * Regular expression matching invalid attribute names.
 *
 * "Attribute names must consist of one or more characters other than controls,
 * U+0020 SPACE, U+0022 ("), U+0027 ('), U+003E (>), U+002F (/), U+003D (=),
 * and noncharacters."
 *
 * @link https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
 *
 * @type {RegExp}
 */

var REGEXP_INVALID_ATTRIBUTE_NAME = /[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;
/**
 * Returns a string with ampersands escaped. Note that this is an imperfect
 * implementation, where only ampersands which do not appear as a pattern of
 * named, decimal, or hexadecimal character references are escaped. Invalid
 * named references (i.e. ambiguous ampersand) are are still permitted.
 *
 * @link https://w3c.github.io/html/syntax.html#character-references
 * @link https://w3c.github.io/html/syntax.html#ambiguous-ampersand
 * @link https://w3c.github.io/html/syntax.html#named-character-references
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeAmpersand(value) {
  return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, '&amp;');
}
/**
 * Returns a string with quotation marks replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeQuotationMark(value) {
  return value.replace(/"/g, '&quot;');
}
/**
 * Returns a string with less-than sign replaced.
 *
 * @param {string} value Original string.
 *
 * @return {string} Escaped string.
 */

function escapeLessThan(value) {
  return value.replace(/</g, '&lt;');
}
/**
 * Returns an escaped attribute value.
 *
 * @link https://w3c.github.io/html/syntax.html#elements-attributes
 *
 * "[...] the text cannot contain an ambiguous ampersand [...] must not contain
 * any literal U+0022 QUOTATION MARK characters (")"
 *
 * Note we also escape the greater than symbol, as this is used by wptexturize to
 * split HTML strings. This is a WordPress specific fix
 *
 * Note that if a resolution for Trac#45387 comes to fruition, it is no longer
 * necessary for `__unstableEscapeGreaterThan` to be used.
 *
 * See: https://core.trac.wordpress.org/ticket/45387
 *
 * @param {string} value Attribute value.
 *
 * @return {string} Escaped attribute value.
 */

function escapeAttribute(value) {
  return Object(_escape_greater__WEBPACK_IMPORTED_MODULE_0__["default"])(escapeQuotationMark(escapeAmpersand(value)));
}
/**
 * Returns an escaped HTML element value.
 *
 * @link https://w3c.github.io/html/syntax.html#writing-html-documents-elements
 *
 * "the text must not contain the character U+003C LESS-THAN SIGN (<) or an
 * ambiguous ampersand."
 *
 * @param {string} value Element value.
 *
 * @return {string} Escaped HTML element value.
 */

function escapeHTML(value) {
  return escapeLessThan(escapeAmpersand(value));
}
/**
 * Returns true if the given attribute name is valid, or false otherwise.
 *
 * @param {string} name Attribute name to test.
 *
 * @return {boolean} Whether attribute is valid.
 */

function isValidAttributeName(name) {
  return !REGEXP_INVALID_ATTRIBUTE_NAME.test(name);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/components/photo-list/index.js":
/*!*******************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/components/photo-list/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Component, __) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var wp_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wp/components */ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/components.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./wp-pixabay-premium/assets/js/gutenberg/components/photo-list/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../photo */ "./wp-pixabay-premium/assets/js/gutenberg/components/photo/index.js");











var PhotoList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PhotoList, _Component);

  function PhotoList() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PhotoList);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PhotoList).apply(this, arguments));
    _this.state = {
      photos: [],
      query: ""
    };
    _this.updateQuery = _this.updateQuery.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.search = _this.search.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PhotoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.api.all().then(function (photos) {
        _this2.setState({
          photos: photos
        });
      });
    }
  }, {
    key: "updateQuery",
    value: function updateQuery(event) {
      this.setState({
        query: event.target.value
      });
    }
  }, {
    key: "search",
    value: function search(event) {
      var _this3 = this;

      event.preventDefault();
      this.props.api.search(this.state.query).then(function (photos) {
        _this3.setState({
          photos: photos
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          photos = _this$state.photos,
          query = _this$state.query;
      var api = this.props.api;
      return wp.element.createElement("div", null, wp.element.createElement("form", {
        className: "wppb-sidebar-photo-list__search-form",
        onSubmit: this.search
      }, wp.element.createElement("input", {
        type: "text",
        value: query,
        onChange: this.updateQuery,
        placeholder: __("Search…", "wppb")
      }), wp.element.createElement(wp_components__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
        className: "button",
        type: "submit",
        icon: "search"
      })), photos.map(function (photo) {
        return wp.element.createElement(_photo__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: photo.id,
          photo: photo,
          api: {
            download: api.download
          }
        });
      }));
    }
  }]);

  return PhotoList;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (PhotoList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! wordpress */ "wordpress")["element"]["Component"], __webpack_require__(/*! wordpress */ "wordpress")["i18n"]["__"]))

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/components/photo-list/style.scss":
/*!*********************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/components/photo-list/style.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/components/photo/index.js":
/*!**************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/components/photo/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Component, __, compose) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var wp_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wp/components */ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/components.js");
/* harmony import */ var wp_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wp/blocks */ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/blocks.js");
/* harmony import */ var wp_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wp/data */ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/data.js");
/* harmony import */ var wp_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wp/editor */ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/editor.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.scss */ "./wp-pixabay-premium/assets/js/gutenberg/components/photo/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_11__);













var Photo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Photo, _Component);

  function Photo() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Photo);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Photo).apply(this, arguments));
    _this.addPhoto = _this.addPhoto.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.alertPro = _this.alertPro.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.useAsAFeaturedImage = _this.useAsAFeaturedImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      loading: false,
      image: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Photo, [{
    key: "getPhotoCaption",
    value: function getPhotoCaption(photo) {
      if (!photo.authorLink || !photo.siteLink) {
        return [];
      }

      return [__("Photo by", "wppb") + " ", wp.element.createElement("a", {
        key: "link",
        href: photo.authorLink
      }, photo.authorName), " " + __("on", "wppb") + " ", wp.element.createElement("a", {
        key: "link2",
        href: photo.siteLink
      }, photo.siteName)];
    }
  }, {
    key: "addPhoto",
    value: function addPhoto() {
      var photo = this.props.photo;
      var block = Object(wp_blocks__WEBPACK_IMPORTED_MODULE_8__["createBlock"])("core/image", {
        url: photo.viewLink,
        caption: this.getPhotoCaption(photo),
        alt: photo.title
      });
      this.props.insertBlock(block);
    }
  }, {
    key: "uploadPhoto",
    value: function uploadPhoto() {
      var _this2 = this;

      if (this.state.image) {
        return Promise.resolve(this.state.image);
      }

      var photo = this.props.photo;

      var createMediaFromFile = function createMediaFromFile(file) {
        // Create upload payload
        var data = new window.FormData();
        data.append("file", file, file.name || file.type.replace("/", "."));
        return wp.apiRequest({
          path: "/wp/v2/media",
          data: data,
          contentType: false,
          processData: false,
          method: "POST"
        });
      };

      this.setState({
        loading: true
      });
      return this.props.api.download(photo.downloadLink, photo.id, {
        type: photo.mimeType
      }).then(function (file) {
        return createMediaFromFile(file).then(function (image) {
          _this2.setState({
            loading: false,
            image: image
          });

          return image;
        });
      });
    }
  }, {
    key: "useAsAFeaturedImage",
    value: function useAsAFeaturedImage() {
      var _this3 = this;

      this.uploadPhoto().then(function (image) {
        _this3.props.updateFeaturedImage(image.id);
      });
    }
  }, {
    key: "alertPro",
    value: function alertPro() {
      var _buy = confirm('This feature only available in the Premium Version!\nBuy it now? Just $29');

      if (_buy == true) {
        var _buy_win = window.open('https://wpclever.net/downloads/wp-pixabay', '_blank');

        _buy_win.focus();
      } else {
        return false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          photo = _this$props.photo,
          api = _this$props.api,
          featuredImageId = _this$props.featuredImageId;
      var _this$state = this.state,
          loading = _this$state.loading,
          image = _this$state.image;
      return wp.element.createElement("div", {
        key: photo.id,
        className: "wppb-sidebar-photo"
      }, loading && wp.element.createElement("div", {
        className: "wppb-sidebar-photo__spinner-container"
      }, wp.element.createElement(wp_components__WEBPACK_IMPORTED_MODULE_7__["Spinner"], null)), wp.element.createElement("img", {
        src: photo.thumbnailLink
      }), !loading && wp.element.createElement("div", {
        className: "wppb-sidebar-photo__toolbar"
      }, api.download && wp.element.createElement(wp_editor__WEBPACK_IMPORTED_MODULE_10__["PostFeaturedImageCheck"], null, wp.element.createElement(wp_components__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
        className: "button",
        icon: "format-image",
        onClick: this.useAsAFeaturedImage,
        label: __("Set featured image", "dropit"),
        disabled: image && featuredImageId === image.id
      })), api.download && wp.element.createElement(wp_components__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
        className: "button",
        icon: "upload",
        onClick: this.alertPro,
        label: __("Upload photo", "wppb")
      }), wp.element.createElement(wp_components__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
        isPrimary: true,
        icon: "plus",
        onClick: this.addPhoto,
        label: __("Add photo", "wppb")
      })));
    }
  }]);

  return Photo;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(Object(wp_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  return {
    featuredImageId: select("core/editor").getEditedPostAttribute("featured_media")
  };
}), Object(wp_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  return {
    insertBlock: dispatch("core/editor").insertBlock,
    updateFeaturedImage: function updateFeaturedImage(imageId) {
      dispatch("core/editor").editPost({
        featured_media: imageId
      });
    }
  };
}))(Photo));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! wordpress */ "wordpress")["element"]["Component"], __webpack_require__(/*! wordpress */ "wordpress")["i18n"]["__"], __webpack_require__(/*! wordpress */ "wordpress")["compose"]["compose"]))

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/components/photo/style.scss":
/*!****************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/components/photo/style.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/api/index.js":
/*!********************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/api/index.js ***!
  \********************************************************************************/
/*! exports provided: all, search, download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
var PIXABAY_API_KEY = WPPB.wppb_key;

var toJson = function toJson(response) {
  return response.json();
};

var normalize = function normalize(photo) {
  return {
    id: photo.id,
    viewLink: photo.webformatURL,
    thumbnailLink: photo.previewURL,
    downloadLink: photo.webformatURL,
    authorLink: "https://pixabay.com/users/".concat(photo.user, "?utm_source=wppb&utm_medium=referral"),
    authorName: photo.user,
    siteLink: "https://pixabay.com/?utm_source=wppb&utm_medium=referral",
    siteName: "Pixabay",
    mimeType: "image/jpeg"
  };
};

var all = function all() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return window.fetch("https://pixabay.com/api/?key=".concat(PIXABAY_API_KEY, "&per_page=20&page=").concat(page, "&order=latest")).then(toJson).then(function (photos) {
    return photos.hits.map(normalize);
  });
};
var search = function search(_search) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return window.fetch("https://pixabay.com/api/?key=".concat(PIXABAY_API_KEY, "&per_page=20&page=").concat(page, "&q=").concat(_search)).then(toJson).then(function (data) {
    return data.hits.map(normalize);
  });
};
var download = function download(url, name, options) {
  return new Promise(function (resolve) {
    var img = new window.Image();
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");

    img.onload = function () {
      var maxWidthHeight = 2000;
      var ratio = this.naturalWidth / this.naturalHeight;
      var width = ratio > 1 ? maxWidthHeight : maxWidthHeight * ratio;
      var height = ratio < 1 ? maxWidthHeight : maxWidthHeight / ratio;
      c.width = width;
      c.height = height;
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
      c.toBlob(resolve, "image/jpeg", 0.75);
    };

    img.crossOrigin = "";
    img.src = url;
  }).then(function (blob) {
    return new window.File([blob], name + ".jpg", options);
  });
};

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/menu-item/index.js":
/*!**************************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/menu-item/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var wp_editPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp/editPost */ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/editPost.js");



var MenuItem = function MenuItem() {
  return wp.element.createElement(wp_editPost__WEBPACK_IMPORTED_MODULE_1__["PluginSidebarMoreMenuItem"], {
    icon: "art",
    target: "wppb-sidebar"
  }, __("WPC Pixabay", "wppb"));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! wordpress */ "wordpress")["i18n"]["__"]))

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/sidebar/index.js":
/*!************************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/sidebar/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var wp_editPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp/editPost */ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/editPost.js");
/* harmony import */ var _photo_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../photo-list */ "./wp-pixabay-premium/assets/js/gutenberg/components/photo-list/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/api/index.js");





var Sidebar = function Sidebar() {
  return wp.element.createElement(wp_editPost__WEBPACK_IMPORTED_MODULE_1__["PluginSidebar"], {
    icon: "art",
    name: "wppb-sidebar",
    title: "WPC Pixabay"
  }, wp.element.createElement(_photo_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    api: {
      search: _api__WEBPACK_IMPORTED_MODULE_3__["search"],
      all: _api__WEBPACK_IMPORTED_MODULE_3__["all"],
      download: _api__WEBPACK_IMPORTED_MODULE_3__["download"]
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/index.js":
/*!*********************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(registerPlugin) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var _components_pixabay_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pixabay/sidebar */ "./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/sidebar/index.js");
/* harmony import */ var _components_pixabay_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pixabay/menu-item */ "./wp-pixabay-premium/assets/js/gutenberg/components/pixabay/menu-item/index.js");



registerPlugin("wppb", {
  render: function render() {
    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_components_pixabay_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], null), wp.element.createElement(_components_pixabay_menu_item__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! wordpress */ "wordpress")["plugins"]["registerPlugin"]))

/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/blocks.js":
/*!**************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/blocks.js ***!
  \**************************************************************************/
/*! exports provided: createBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlock", function() { return createBlock; });
var createBlock = wp.blocks.createBlock;


/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/components.js":
/*!******************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/components.js ***!
  \******************************************************************************/
/*! exports provided: PanelBody, TabPanel, ColorPalette, Toolbar, Spinner, ColorIndicator, IconButton, Icon, Button, ButtonGroup, Dashicon, ServerSideRender, Placeholder, DropZone, ResizableBox, Tooltip, Dropdown, DropdownMenu, withFallbackStyles, ColorPicker, FormFileUpload, withNotices, BaseControl, RangeControl, SelectControl, RadioControl, TextControl, TextareaControl, ToggleControl, QueryControls, G, Path, Rect, SVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBody", function() { return PanelBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return ColorPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorIndicator", function() { return ColorIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashicon", function() { return Dashicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSideRender", function() { return ServerSideRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return Placeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZone", function() { return DropZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableBox", function() { return ResizableBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFallbackStyles", function() { return withFallbackStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFileUpload", function() { return FormFileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withNotices", function() { return withNotices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseControl", function() { return BaseControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeControl", function() { return RangeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControl", function() { return SelectControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControl", function() { return RadioControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextControl", function() { return TextControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaControl", function() { return TextareaControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleControl", function() { return ToggleControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryControls", function() { return QueryControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TabPanel = _wp$components.TabPanel,
    ColorPalette = _wp$components.ColorPalette,
    Toolbar = _wp$components.Toolbar,
    Spinner = _wp$components.Spinner,
    ColorIndicator = _wp$components.ColorIndicator,
    IconButton = _wp$components.IconButton,
    Icon = _wp$components.Icon,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    Dashicon = _wp$components.Dashicon,
    ServerSideRender = _wp$components.ServerSideRender,
    Placeholder = _wp$components.Placeholder,
    DropZone = _wp$components.DropZone,
    ResizableBox = _wp$components.ResizableBox,
    Tooltip = _wp$components.Tooltip,
    Dropdown = _wp$components.Dropdown,
    DropdownMenu = _wp$components.DropdownMenu,
    withFallbackStyles = _wp$components.withFallbackStyles,
    ColorPicker = _wp$components.ColorPicker,
    FormFileUpload = _wp$components.FormFileUpload,
    withNotices = _wp$components.withNotices;

var _wp$components2 = wp.components,
    BaseControl = _wp$components2.BaseControl,
    RangeControl = _wp$components2.RangeControl,
    SelectControl = _wp$components2.SelectControl,
    RadioControl = _wp$components2.RadioControl,
    TextControl = _wp$components2.TextControl,
    TextareaControl = _wp$components2.TextareaControl,
    ToggleControl = _wp$components2.ToggleControl,
    QueryControls = _wp$components2.QueryControls;

var _wp$components3 = wp.components,
    G = _wp$components3.G,
    Path = _wp$components3.Path,
    Rect = _wp$components3.Rect,
    SVG = _wp$components3.SVG;


/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/data.js":
/*!************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/data.js ***!
  \************************************************************************/
/*! exports provided: registerStore, withSelect, withDispatch, select, dispatch, getEntityRecords, getEditedPostAttribute, getSelectedBlockClientId, editPost, selectBlock, clearSelectedBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStore", function() { return registerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSelect", function() { return withSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDispatch", function() { return withDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityRecords", function() { return getEntityRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditedPostAttribute", function() { return getEditedPostAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedBlockClientId", function() { return getSelectedBlockClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPost", function() { return editPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBlock", function() { return selectBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSelectedBlock", function() { return clearSelectedBlock; });
var _wp$data = wp.data,
    registerStore = _wp$data.registerStore,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;


var _select = select("core"),
    getEntityRecords = _select.getEntityRecords;



var _select2 = select("core/editor"),
    getEditedPostAttribute = _select2.getEditedPostAttribute,
    getSelectedBlockClientId = _select2.getSelectedBlockClientId;



var _dispatch = dispatch("core/editor"),
    editPost = _dispatch.editPost,
    selectBlock = _dispatch.selectBlock,
    clearSelectedBlock = _dispatch.clearSelectedBlock;



/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/editPost.js":
/*!****************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/editPost.js ***!
  \****************************************************************************/
/*! exports provided: PluginSidebar, PluginSidebarMoreMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginSidebar", function() { return PluginSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginSidebarMoreMenuItem", function() { return PluginSidebarMoreMenuItem; });
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;


/***/ }),

/***/ "./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/editor.js":
/*!**************************************************************************!*\
  !*** ./wp-pixabay-premium/assets/js/gutenberg/utils/wpImports/editor.js ***!
  \**************************************************************************/
/*! exports provided: InspectorControls, BlockControls, PanelColorSettings, withColors, AlignmentToolbar, RichText, URLInput, BlockAlignmentToolbar, ContrastChecker, InnerBlocks, MediaUpload, mediaUpload, MediaPlaceholder, URLPopover, RichTextToolbarButton, RichTextShortcut, PostFeaturedImageCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorControls", function() { return InspectorControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockControls", function() { return BlockControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelColorSettings", function() { return PanelColorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withColors", function() { return withColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignmentToolbar", function() { return AlignmentToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLInput", function() { return URLInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockAlignmentToolbar", function() { return BlockAlignmentToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrastChecker", function() { return ContrastChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerBlocks", function() { return InnerBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaUpload", function() { return MediaUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaUpload", function() { return mediaUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlaceholder", function() { return MediaPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLPopover", function() { return URLPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextToolbarButton", function() { return RichTextToolbarButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextShortcut", function() { return RichTextShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFeaturedImageCheck", function() { return PostFeaturedImageCheck; });
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    withColors = _wp$editor.withColors,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    URLInput = _wp$editor.URLInput,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    ContrastChecker = _wp$editor.ContrastChecker,
    InnerBlocks = _wp$editor.InnerBlocks,
    MediaUpload = _wp$editor.MediaUpload,
    mediaUpload = _wp$editor.mediaUpload,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    URLPopover = _wp$editor.URLPopover,
    RichTextToolbarButton = _wp$editor.RichTextToolbarButton,
    RichTextShortcut = _wp$editor.RichTextShortcut,
    PostFeaturedImageCheck = _wp$editor.PostFeaturedImageCheck;


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "wordpress":
/*!*********************!*\
  !*** external "wp" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp;

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map
