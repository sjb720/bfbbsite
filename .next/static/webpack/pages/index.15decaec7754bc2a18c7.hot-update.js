webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_PageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageLayout.js */ \"./components/PageLayout.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar button_style = {\n  width: \"100%\",\n  marginTop: 20\n};\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_PageLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 7\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }\n      }, \"The BfBB Resource Site!\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Container\"], {\n        style: {\n          textAlign: \"Center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Image\"], {\n        id: \"breathing\",\n        style: {\n          paddingTop: 20\n        },\n        src: \"/bfbb-community-logo.png\",\n        fluid: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }\n      }), __jsx(react_player__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        className: \"react-player\",\n        url: \"twitch.tv/shift\",\n        width: \"100%\",\n        height: \"600px\",\n        controls: \"true\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }\n      })), __jsx(\"style\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }, \"body{\\n        background-image: url(\\\"bg-ocean.jpg\\\");\\n        background-repeat: no-repeat;\\n        background-attachment: fixed;\\n      }\\n      \\n      #breathing {\\n        -webkit-animation: breathing 5s ease-out infinite normal;\\n        animation: breathing 5s ease-out infinite normal;\\n        }\\n    \\n    \\n    @-webkit-keyframes breathing {\\n      0% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      25% {\\n        -webkit-transform: scale(1);\\n        transform: scale(1);\\n      }\\n    \\n      60% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      100% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    }\\n    \\n    @keyframes breathing {\\n      0% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      25% {\\n        -webkit-transform: scale(1);\\n        -ms-transform: scale(1);\\n        transform: scale(1);\\n      }\\n    \\n      60% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      100% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    }\\n    \\n      \\n      \"));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJidXR0b25fc3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLE1BRFk7QUFFbkJDLFdBQVMsRUFBRTtBQUZRLENBQXJCOztJQUtxQkMsSzs7Ozs7QUFFbkIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozt3Q0FFbUIsQ0FFbkI7Ozs2QkFHUTtBQUNQLGFBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFLE1BQUMseURBQUQ7QUFBVyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRSxNQUFDLHFEQUFEO0FBQU8sVUFBRSxFQUFDLFdBQVY7QUFBc0IsYUFBSyxFQUFFO0FBQUVDLG9CQUFVLEVBQUU7QUFBZCxTQUE3QjtBQUFpRCxXQUFHLEVBQUMsMEJBQXJEO0FBQWdGLGFBQUssTUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLEVBSUUsTUFBQyxtREFBRDtBQUNVLGlCQUFTLEVBQUMsY0FEcEI7QUFFVSxXQUFHLEVBQUMsaUJBRmQ7QUFHVSxhQUFLLEVBQUMsTUFIaEI7QUFJVSxjQUFNLEVBQUMsT0FKakI7QUFLVSxnQkFBUSxFQUFDLE1BTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKRixDQUZGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsKzBDQWxCRixDQURGO0FBcUZEOzs7O0VBcEdnQ0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMYXlvdXQuanMnXG5pbXBvcnQgeyBCdXR0b24sIElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBDb250YWluZXIsIENvbCwgUm93LCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInO1xuXG5cbmNvbnN0IGJ1dHRvbl9zdHlsZSA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBtYXJnaW5Ub3A6IDIwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlTGF5b3V0PlxuICAgICAgICA8dGl0bGU+VGhlIEJmQkIgUmVzb3VyY2UgU2l0ZSE8L3RpdGxlPlxuICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJDZW50ZXJcIiB9fT5cblxuICAgICAgICAgIDxJbWFnZSBpZD1cImJyZWF0aGluZ1wiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwIH19IHNyYz1cIi9iZmJiLWNvbW11bml0eS1sb2dvLnBuZ1wiIGZsdWlkPjwvSW1hZ2U+XG5cbiAgICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWFjdC1wbGF5ZXInXG4gICAgICAgICAgICAgICAgICAgIHVybD1cInR3aXRjaC50di9zaGlmdFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzYwMHB4J1xuICAgICAgICAgICAgICAgICAgICBjb250cm9scz1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgPC9Db250YWluZXI+XG5cblxuICAgICAgICA8c3R5bGU+e2Bib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJiZy1vY2Vhbi5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNicmVhdGhpbmcge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYnJlYXRoaW5nIDVzIGVhc2Utb3V0IGluZmluaXRlIG5vcm1hbDtcbiAgICAgICAgYW5pbWF0aW9uOiBicmVhdGhpbmcgNXMgZWFzZS1vdXQgaW5maW5pdGUgbm9ybWFsO1xuICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGJyZWF0aGluZyB7XG4gICAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgXG4gICAgICAyNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgXG4gICAgICA2MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgYnJlYXRoaW5nIHtcbiAgICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgIH1cbiAgICBcbiAgICAgIDI1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgXG4gICAgICA2MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1BhZ2VMYXlvdXQ+XG5cblxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})