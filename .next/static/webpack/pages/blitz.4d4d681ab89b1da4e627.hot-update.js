webpackHotUpdate_N_E("pages/blitz",{

/***/ "./components/BlitzGrid.js":
/*!*********************************!*\
  !*** ./components/BlitzGrid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlitzGrid; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BlitzGrid.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar renderTooltip = function renderTooltip(props) {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Tooltip\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    id: \"button-tooltip-2\",\n    style: {\n      pointerEvents: \"none\"\n    }\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 3\n    }\n  }), props.collected == true ? __jsx(\"div\", {\n    style: {\n      color: props.collector.color,\n      fontWeight: \"bold\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, \"Collected by \", props.collector.display_name) : __jsx(\"div\", {\n    style: {\n      color: props.type == \"Spatula\" ? \"Gold\" : \"White\",\n      fontWeight: \"bold\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, props.type), props.name);\n};\n\nvar BlitzGrid = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(BlitzGrid, _React$Component);\n\n  var _super = _createSuper(BlitzGrid);\n\n  function BlitzGrid(props) {\n    var _this2;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, BlitzGrid);\n\n    _this2 = _super.call(this, props);\n    _this2.state = {};\n    return _this2;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BlitzGrid, [{\n    key: \"onClick\",\n    value: function onClick() {\n      this.props.collect_function(\"\" + this.props.name);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"OverlayTrigger\"], {\n        placement: \"top\",\n        overlay: renderTooltip(this.props),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }\n      }, !this.props.collected && __jsx(\"div\", {\n        \"class\": \"butt\",\n        onClick: function onClick() {\n          return _this3.onClick();\n        },\n        style: {\n          backgroundImage: 'url(\"/' + this.props.type + '/' + this.props.name + '.png' + '\")'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 15\n        }\n      }), this.props.collected && __jsx(\"div\", {\n        \"class\": \"butt\",\n        onClick: function onClick() {\n          return _this3.onClick();\n        },\n        style: {\n          backgroundColor: this.props.collector.color,\n          boxShadow: \"inset 0px 0px 0px 3px\" + this.props.collector.color,\n          backgroundImage: 'url(\"/' + this.props.type + '/' + this.props.name + '.png' + '\")'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 15\n        }\n      }))), __jsx(\"style\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }\n      }, \"\\n          .butt {\\n            \\n            padding-top:100%;\\n            cursor:pointer;\\n            width:100%\\n            -webkit-background-size: cover;\\n            -moz-background-size: cover;\\n            -o-background-size: cover;\\n            background-size: cover;\\n            background-blend-mode: multiply;\\n         }\\n         \\n         .butt:hover {\\n            background-color: grey;\\n            color:white;\\n         }\\n\\n\\n\\n          \"));\n    }\n  }]);\n\n  return BlitzGrid;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbGl0ekdyaWQuanM/MTczOCJdLCJuYW1lcyI6WyJyZW5kZXJUb29sdGlwIiwicHJvcHMiLCJwb2ludGVyRXZlbnRzIiwiY29sbGVjdGVkIiwiY29sb3IiLCJjb2xsZWN0b3IiLCJmb250V2VpZ2h0IiwiZGlzcGxheV9uYW1lIiwidHlwZSIsIm5hbWUiLCJCbGl0ekdyaWQiLCJzdGF0ZSIsImNvbGxlY3RfZnVuY3Rpb24iLCJvbkNsaWNrIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxTQUNwQixNQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLGtCQUFaO0FBQStCLFNBQUssRUFBRTtBQUFDQyxtQkFBYSxFQUFDO0FBQWY7QUFBdEMsS0FBa0VELEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR0EsS0FBSyxDQUFDRSxTQUFOLElBQWlCLElBQWpCLEdBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JELEtBQXZCO0FBQTZCRSxnQkFBVSxFQUFDO0FBQXhDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBMkVMLEtBQUssQ0FBQ0ksU0FBTixDQUFnQkUsWUFBM0YsQ0FERCxHQUVDO0FBQUssU0FBSyxFQUFFO0FBQUNILFdBQUssRUFBRUgsS0FBSyxDQUFDTyxJQUFOLElBQVksU0FBWixHQUF3QixNQUF4QixHQUFpQyxPQUF6QztBQUFrREYsZ0JBQVUsRUFBQztBQUE3RCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUZMLEtBQUssQ0FBQ08sSUFBekYsQ0FISixFQUtHUCxLQUFLLENBQUNRLElBTFQsQ0FEb0I7QUFBQSxDQUF0Qjs7SUFVcUJDLFM7Ozs7O0FBRW5CLHFCQUFZVCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLCtCQUFNQSxLQUFOO0FBQ0EsV0FBS1UsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFLbEI7Ozs7OEJBRVM7QUFDUixXQUFLVixLQUFMLENBQVdXLGdCQUFYLENBQTRCLEtBQUcsS0FBS1gsS0FBTCxDQUFXUSxJQUExQztBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDhEQUFEO0FBQ0UsaUJBQVMsRUFBQyxLQURaO0FBRUUsZUFBTyxFQUFFVCxhQUFhLENBQUMsS0FBS0MsS0FBTixDQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLENBQUMsS0FBS0EsS0FBTCxDQUFXRSxTQUFaLElBQ0M7QUFBSyxpQkFBTSxNQUFYO0FBQWtCLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ1UsT0FBTCxFQUFOO0FBQUEsU0FBM0I7QUFBaUQsYUFBSyxFQUFFO0FBQUVDLHlCQUFlLEVBQUcsV0FBVyxLQUFLYixLQUFMLENBQVdPLElBQXRCLEdBQTZCLEdBQTdCLEdBQW1DLEtBQUtQLEtBQUwsQ0FBV1EsSUFBOUMsR0FBcUQsTUFBckQsR0FBOEQ7QUFBbEYsU0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBS0csS0FBS1IsS0FBTCxDQUFXRSxTQUFYLElBQ0M7QUFBSyxpQkFBTSxNQUFYO0FBQWtCLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ1UsT0FBTCxFQUFOO0FBQUEsU0FBM0I7QUFBaUQsYUFBSyxFQUFFO0FBQUNFLHlCQUFlLEVBQUUsS0FBS2QsS0FBTCxDQUFXSSxTQUFYLENBQXFCRCxLQUF2QztBQUE2Q1ksbUJBQVMsRUFBQywwQkFBd0IsS0FBS2YsS0FBTCxDQUFXSSxTQUFYLENBQXFCRCxLQUFwRztBQUEyR1UseUJBQWUsRUFBRyxXQUFXLEtBQUtiLEtBQUwsQ0FBV08sSUFBdEIsR0FBNkIsR0FBN0IsR0FBbUMsS0FBS1AsS0FBTCxDQUFXUSxJQUE5QyxHQUFxRCxNQUFyRCxHQUE4RDtBQUEzTCxTQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkosQ0FIRixDQURGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK2RBakJGLENBREY7QUF5Q0Q7Ozs7RUF2RG9DUSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbGl0ekdyaWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb29sdGlwLCBPdmVybGF5VHJpZ2dlciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IHJlbmRlclRvb2x0aXAgPSAocHJvcHMpID0+IChcbiAgPFRvb2x0aXAgaWQ9XCJidXR0b24tdG9vbHRpcC0yXCIgc3R5bGU9e3twb2ludGVyRXZlbnRzOlwibm9uZVwifX0gey4uLnByb3BzfT5cbiAgICB7cHJvcHMuY29sbGVjdGVkPT10cnVlID9cbiAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjpwcm9wcy5jb2xsZWN0b3IuY29sb3IsZm9udFdlaWdodDpcImJvbGRcIn19PkNvbGxlY3RlZCBieSB7cHJvcHMuY29sbGVjdG9yLmRpc3BsYXlfbmFtZX08L2Rpdj4gOlxuICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOihwcm9wcy50eXBlPT1cIlNwYXR1bGFcIiA/IFwiR29sZFwiIDogXCJXaGl0ZVwiKSxmb250V2VpZ2h0OlwiYm9sZFwifX0+e3Byb3BzLnR5cGV9PC9kaXY+XG4gICAgfVxuICAgIHtwcm9wcy5uYW1lfVxuICA8L1Rvb2x0aXA+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGl0ekdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5jb2xsZWN0X2Z1bmN0aW9uKFwiXCIrdGhpcy5wcm9wcy5uYW1lKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXG4gICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICBvdmVybGF5PXtyZW5kZXJUb29sdGlwKHRoaXMucHJvcHMpfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLmNvbGxlY3RlZCAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dFwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGljaygpfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICgndXJsKFwiLycgKyB0aGlzLnByb3BzLnR5cGUgKyAnLycgKyB0aGlzLnByb3BzLm5hbWUgKyAnLnBuZycgKyAnXCIpJykgfX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29sbGVjdGVkICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0XCIgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrKCl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmNvbGxlY3Rvci5jb2xvcixib3hTaGFkb3c6XCJpbnNldCAwcHggMHB4IDBweCAzcHhcIit0aGlzLnByb3BzLmNvbGxlY3Rvci5jb2xvciwgYmFja2dyb3VuZEltYWdlOiAoJ3VybChcIi8nICsgdGhpcy5wcm9wcy50eXBlICsgJy8nICsgdGhpcy5wcm9wcy5uYW1lICsgJy5wbmcnICsgJ1wiKScpIH19IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIC5idXR0IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFkZGluZy10b3A6MTAwJTtcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6MTAwJVxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAuYnV0dDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICB9XG5cblxuXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BlitzGrid.js\n");

/***/ })

})