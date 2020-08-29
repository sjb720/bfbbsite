module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BattleShipBoard.js":
/*!***************************************!*\
  !*** ./components/BattleShipBoard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BattleShipGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BattleShipGrid.js */ \"./components/BattleShipGrid.js\");\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BattleShipBoard.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst BattleShipBoard = props => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, __jsx(\"h2\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }\n}, props.player.display_name, \"'s Board\"), __jsx(\"div\", {\n  style: {\n    display: \"grid\",\n    gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n    width: 750,\n    justifyContent: 'space-between'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 25\n  }\n}, props.player.board.tasks.map(task => __jsx(_components_BattleShipGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  name: task.name,\n  type: task.type,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 29\n  }\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleShipBoard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhdHRsZVNoaXBCb2FyZC5qcz85MzcyIl0sIm5hbWVzIjpbIkJhdHRsZVNoaXBCb2FyZCIsInByb3BzIiwicGxheWVyIiwiZGlzcGxheV9uYW1lIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiYm9hcmQiLCJ0YXNrcyIsIm1hcCIsInRhc2siLCJuYW1lIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUlDLEtBQUQsSUFDcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBS0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFlBQWxCLGFBREosRUFHb0I7QUFBSyxPQUFLLEVBQUU7QUFBRUMsV0FBTyxFQUFFLE1BQVg7QUFBbUJDLHVCQUFtQixFQUFFLDZDQUF4QztBQUF1RkMsU0FBSyxFQUFFLEdBQTlGO0FBQW1HQyxrQkFBYyxFQUFFO0FBQW5ILEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNDTixLQUFLLENBQUNDLE1BQU4sQ0FBYU0sS0FBYixDQUFtQkMsS0FBbkIsQ0FBeUJDLEdBQXpCLENBQTZCQyxJQUFJLElBQzlCLE1BQUMscUVBQUQ7QUFBZ0IsTUFBSSxFQUFFQSxJQUFJLENBQUNDLElBQTNCO0FBQWlDLE1BQUksRUFBRUQsSUFBSSxDQUFDRSxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREgsQ0FERCxDQUhwQixDQURKOztBQWNlYiw4RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmF0dGxlU2hpcEJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQmF0dGxlU2hpcEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9CYXR0bGVTaGlwR3JpZC5qcydcblxuY29uc3QgQmF0dGxlU2hpcEJvYXJkID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgyPntwcm9wcy5wbGF5ZXIuZGlzcGxheV9uYW1lfSdzIEJvYXJkPC9oMj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnJcIiwgd2lkdGg6IDc1MCwganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wbGF5ZXIuYm9hcmQudGFza3MubWFwKHRhc2sgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmF0dGxlU2hpcEdyaWQgbmFtZT17dGFzay5uYW1lfSB0eXBlPXt0YXNrLnR5cGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYXR0bGVTaGlwQm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BattleShipBoard.js\n");

/***/ }),

/***/ "./components/BattleShipGrid.js":
/*!**************************************!*\
  !*** ./components/BattleShipGrid.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BattleShipGrid.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst renderTooltip = props => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], _extends({\n  id: \"button-tooltip\"\n}, props, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n}), props.name);\n\nconst BattleShipGrid = props => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }\n}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"OverlayTrigger\"], {\n  placement: \"right\",\n  delay: {\n    show: 100,\n    hide: 400\n  },\n  overlay: renderTooltip(props),\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }\n}, __jsx(\"div\", {\n  class: \"butt\",\n  style: {\n    backgroundImage: 'url(\"' + props.type + '/' + props.name + '.png' + '\")'\n  },\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }\n})), __jsx(\"style\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }\n}, `\n          .butt {\n            border: 1px outset white;\n            padding-top:100%;\n            cursor:pointer;\n            width:100%\n            -webkit-background-size: cover;\n            -moz-background-size: cover;\n            -o-background-size: cover;\n            background-size: cover;\n            background-blend-mode: multiply;\n         }\n         \n         .butt:hover {\n            background-color: red;\n            color:white;\n         }\n\n          `));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BattleShipGrid);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhdHRsZVNoaXBHcmlkLmpzPzhlZTQiXSwibmFtZXMiOlsicmVuZGVyVG9vbHRpcCIsInByb3BzIiwibmFtZSIsIkJhdHRsZVNoaXBHcmlkIiwic2hvdyIsImhpZGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUNsQixNQUFDLHVEQUFEO0FBQVMsSUFBRSxFQUFDO0FBQVosR0FBaUNBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFDR0EsS0FBSyxDQUFDQyxJQURULENBREo7O0FBTUEsTUFBTUMsY0FBYyxHQUFJRixLQUFELElBQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSSxNQUFDLDhEQUFEO0FBQ0osV0FBUyxFQUFDLE9BRE47QUFFSixPQUFLLEVBQUU7QUFBRUcsUUFBSSxFQUFFLEdBQVI7QUFBYUMsUUFBSSxFQUFFO0FBQW5CLEdBRkg7QUFHSixTQUFPLEVBQUVMLGFBQWEsQ0FBQ0MsS0FBRCxDQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBS0E7QUFBSyxPQUFLLEVBQUMsTUFBWDtBQUFrQixPQUFLLEVBQUU7QUFBQ0ssbUJBQWUsRUFBRSxVQUFRTCxLQUFLLENBQUNNLElBQWQsR0FBbUIsR0FBbkIsR0FBdUJOLEtBQUssQ0FBQ0MsSUFBN0IsR0FBa0MsTUFBbEMsR0FBeUM7QUFBM0QsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxBLENBREosRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQUFULENBVkosQ0FESjs7QUFtQ2VDLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CYXR0bGVTaGlwR3JpZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvb2x0aXAsT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCByZW5kZXJUb29sdGlwID0gKHByb3BzKSA9PiAoXG4gICAgPFRvb2x0aXAgaWQ9XCJidXR0b24tdG9vbHRpcFwiIHsuLi5wcm9wc30+XG4gICAgICB7cHJvcHMubmFtZX1cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG5cbmNvbnN0IEJhdHRsZVNoaXBHcmlkID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgIGRlbGF5PXt7IHNob3c6IDEwMCwgaGlkZTogNDAwIH19XG4gICAgb3ZlcmxheT17cmVuZGVyVG9vbHRpcChwcm9wcyl9PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0XCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6KCd1cmwoXCInK3Byb3BzLnR5cGUrJy8nK3Byb3BzLm5hbWUrJy5wbmcnKydcIiknKX19PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgLmJ1dHQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggb3V0c2V0IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6MTAwJTtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6MTAwJVxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAuYnV0dDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgIH1cblxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhdHRsZVNoaXBHcmlkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BattleShipGrid.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BattleShipBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BattleShipBoard.js */ \"./components/BattleShipBoard.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst button_style = {\n  width: \"100%\",\n  marginTop: 20\n};\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  componentDidMount() {}\n\n  render() {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n      style: {\n        textAlign: \"Center\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      src: \"/logo.png\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"outline-primary\",\n      style: button_style,\n      href: \"/blitz\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }, \"Blitz\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"outline-primary\",\n      style: button_style,\n      href: \"/bingo\",\n      disabled: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }, \"Bingo\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n      variant: \"outline-primary\",\n      style: button_style,\n      href: \"/battleship\",\n      disabled: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, \"Battleship\"));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJ1dHRvbl9zdHlsZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiSW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsTUFEWTtBQUVuQkMsV0FBUyxFQUFFO0FBRlEsQ0FBckI7QUFLZSxNQUFNQyxLQUFOLFNBQW9CQyw0Q0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUlqREMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0Q7O0FBRURDLG1CQUFpQixHQUFHLENBRW5COztBQUdEQyxRQUFNLEdBQUc7QUFDUCxXQUNFLE1BQUMseURBQUQ7QUFBVyxXQUFLLEVBQUU7QUFBQ0MsaUJBQVMsRUFBQztBQUFYLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQU8sU0FBRyxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBQyxpQkFBaEI7QUFBa0MsV0FBSyxFQUFFWCxZQUF6QztBQUF1RCxVQUFJLEVBQUMsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0UsTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBQyxpQkFBaEI7QUFBa0MsV0FBSyxFQUFFQSxZQUF6QztBQUF1RCxVQUFJLEVBQUMsUUFBNUQ7QUFBcUUsY0FBUSxNQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsRUFJRSxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLGlCQUFoQjtBQUFrQyxXQUFLLEVBQUVBLFlBQXpDO0FBQXVELFVBQUksRUFBQyxhQUE1RDtBQUEwRSxjQUFRLE1BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsQ0FERjtBQVNEOztBQTFCZ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEJhdHRsZVNoaXBCb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0JhdHRsZVNoaXBCb2FyZC5qcydcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIENvbnRhaW5lciwgQ29sLCBSb3csIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jb25zdCBidXR0b25fc3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgbWFyZ2luVG9wOiAyMFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBzdHlsZT17e3RleHRBbGlnbjpcIkNlbnRlclwifX0+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIj48L0ltYWdlPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzdHlsZT17YnV0dG9uX3N0eWxlfSBocmVmPVwiL2JsaXR6XCIgPkJsaXR6PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHN0eWxlPXtidXR0b25fc3R5bGV9IGhyZWY9XCIvYmluZ29cIiBkaXNhYmxlZD5CaW5nbzwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiBzdHlsZT17YnV0dG9uX3N0eWxlfSBocmVmPVwiL2JhdHRsZXNoaXBcIiBkaXNhYmxlZD5CYXR0bGVzaGlwPC9CdXR0b24+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ })

/******/ });