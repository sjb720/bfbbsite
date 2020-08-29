webpackHotUpdate_N_E("pages/spectate/blitz/[id]",{

/***/ "./pages/spectate/blitz/[id].js":
/*!**************************************!*\
  !*** ./pages/spectate/blitz/[id].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_BlitzBoard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/BlitzBoard.js */ \"./components/BlitzBoard.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/pages/spectate/blitz/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar BACKEND_IP = \"https://bfbbhub.herokuapp.com\"; //const BACKEND_IP = \"http://172.16.127.245:3001\";\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      room: null,\n      errorLoading: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      node_fetch__WEBPACK_IMPORTED_MODULE_7___default()(BACKEND_IP + '/blitz/getroom/' + this.props.query.id).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.success == true) _this2.setState({\n          room: data.room\n        });else _this2.setState({\n          errorLoading: true\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.room == null) return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 7\n        }\n      }, this.state.errorLoading == false ? __jsx(\"div\", {\n        style: {\n          color: \"#aabfff\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 43\n        }\n      }, \"Loading room \", this.props.query.id, \"...\") : __jsx(\"div\", {\n        style: {\n          textAlign: \"center\",\n          position: \"relative\",\n          top: \"25vh\",\n          color: \"#5a7bfd\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Image\"], {\n        src: \"/error.png\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 90\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 122\n        }\n      }, \"This room does not exist.\")));\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }\n      }, \"BfBB Blitz: Spectating\"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 9\n        }\n      }), __jsx(_components_BlitzBoard_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        pid: \"lol\",\n        room: this.state.room,\n        collect_function: function collect_function(e) {\n          console.log(\"nope\");\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function getInitialProps(_ref) {\n      var query = _ref.query;\n      return {\n        query: query\n      };\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlY3RhdGUvYmxpdHovLmpzPzU2MGQiXSwibmFtZXMiOlsiQkFDS0VORF9JUCIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInJvb20iLCJlcnJvckxvYWRpbmciLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwic2V0U3RhdGUiLCJjb2xvciIsInRleHRBbGlnbiIsInBvc2l0aW9uIiwidG9wIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLCtCQUFuQixDLENBQ0E7O0lBRXFCQyxLOzs7OztBQUVuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxVQUFJLEVBQUMsSUFETTtBQUVYQyxrQkFBWSxFQUFDO0FBRkYsS0FBYjtBQUZpQjtBQU9sQjs7Ozt3Q0FNbUI7QUFBQTs7QUFHbEJDLHVEQUFLLENBQUNOLFVBQVUsR0FBQyxpQkFBWCxHQUErQixLQUFLRSxLQUFMLENBQVdLLEtBQVgsQ0FBaUJDLEVBQWpELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BRFgsRUFFR0YsSUFGSCxDQUVRLFVBQUFHLElBQUksRUFBSTtBQUNaLFlBQUdBLElBQUksQ0FBQ0MsT0FBTCxJQUFjLElBQWpCLEVBQ0UsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ1YsY0FBSSxFQUFDUSxJQUFJLENBQUNSO0FBQVgsU0FBZCxFQURGLEtBR0UsTUFBSSxDQUFDVSxRQUFMLENBQWM7QUFBQ1Qsc0JBQVksRUFBQztBQUFkLFNBQWQ7QUFDSCxPQVBIO0FBU0Q7Ozs2QkFHUTtBQUNQLFVBQUksS0FBS0YsS0FBTCxDQUFXQyxJQUFYLElBQW1CLElBQXZCLEVBQ0UsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0QsS0FBTCxDQUFXRSxZQUFYLElBQXlCLEtBQXpCLEdBQWlDO0FBQUssYUFBSyxFQUFFO0FBQUVVLGVBQUssRUFBRTtBQUFULFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBZ0QsS0FBS2IsS0FBTCxDQUFXSyxLQUFYLENBQWlCQyxFQUFqRSxRQUFqQyxHQUVEO0FBQUssYUFBSyxFQUFFO0FBQUNRLG1CQUFTLEVBQUMsUUFBWDtBQUFvQkMsa0JBQVEsRUFBQyxVQUE3QjtBQUF3Q0MsYUFBRyxFQUFDLE1BQTVDO0FBQW1ESCxlQUFLLEVBQUM7QUFBekQsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlGLE1BQUMscURBQUQ7QUFBTyxXQUFHLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWpGLEVBQWlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBQWpILENBSEYsQ0FEQTtBQU9GLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHTSxNQUFDLGlFQUFEO0FBQVksV0FBRyxFQUFDLEtBQWhCO0FBQXNCLFlBQUksRUFBRSxLQUFLWixLQUFMLENBQVdDLElBQXZDO0FBQTZDLHdCQUFnQixFQUFFLDBCQUFDZSxDQUFELEVBQUs7QUFBQ0MsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFBb0IsU0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhOLENBREY7QUFRRDs7OzBDQXBDaUM7QUFBQSxVQUFUZCxLQUFTLFFBQVRBLEtBQVM7QUFDaEMsYUFBTztBQUFFQSxhQUFLLEVBQUxBO0FBQUYsT0FBUDtBQUNEOzs7O0VBYmdDZSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvc3BlY3RhdGUvYmxpdHovW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5pbXBvcnQgeyBEcm9wZG93bkJ1dHRvbiwgRHJvcGRvd24sIEJ1dHRvbixJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBCbGl0ekJvYXJkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQmxpdHpCb2FyZC5qcydcblxuY29uc3QgQkFDS0VORF9JUCA9IFwiaHR0cHM6Ly9iZmJiaHViLmhlcm9rdWFwcC5jb21cIjtcbi8vY29uc3QgQkFDS0VORF9JUCA9IFwiaHR0cDovLzE3Mi4xNi4xMjcuMjQ1OjMwMDFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvb206bnVsbCxcbiAgICAgIGVycm9yTG9hZGluZzpmYWxzZSxcbiAgICB9XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgcmV0dXJuIHsgcXVlcnkgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICBcbiAgICBmZXRjaChCQUNLRU5EX0lQKycvYmxpdHovZ2V0cm9vbS8nICsgdGhpcy5wcm9wcy5xdWVyeS5pZClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmKGRhdGEuc3VjY2Vzcz09dHJ1ZSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb29tOmRhdGEucm9vbX0pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvckxvYWRpbmc6dHJ1ZX0pXG4gICAgICB9KTtcblxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucm9vbSA9PSBudWxsKVxuICAgICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTG9hZGluZz09ZmFsc2UgPyA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiNhYWJmZmZcIiB9fT5Mb2FkaW5nIHJvb20ge3RoaXMucHJvcHMucXVlcnkuaWR9Li4uPC9kaXY+IDogXG4gICAgICAgIFxuICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIscG9zaXRpb246XCJyZWxhdGl2ZVwiLHRvcDpcIjI1dmhcIixjb2xvcjpcIiM1YTdiZmRcIn19PjxJbWFnZSBzcmM9XCIvZXJyb3IucG5nXCI+PC9JbWFnZT48aDE+VGhpcyByb29tIGRvZXMgbm90IGV4aXN0LjwvaDE+PC9kaXY+fVxuICAgICAgPC9kaXY+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx0aXRsZT5CZkJCIEJsaXR6OiBTcGVjdGF0aW5nPC90aXRsZT5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8QmxpdHpCb2FyZCBwaWQ9XCJsb2xcIiByb29tPXt0aGlzLnN0YXRlLnJvb219IGNvbGxlY3RfZnVuY3Rpb249eyhlKT0+e2NvbnNvbGUubG9nKFwibm9wZVwiKX19PjwvQmxpdHpCb2FyZD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/spectate/blitz/[id].js\n");

/***/ })

})