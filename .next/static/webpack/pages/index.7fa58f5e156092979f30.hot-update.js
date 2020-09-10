webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PageLayout.js":
/*!**********************************!*\
  !*** ./components/PageLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageLayout; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-pro-sidebar */ \"./node_modules/react-pro-sidebar/dist/index.es.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _backendurl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backendurl.js */ \"./components/backendurl.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/components/PageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar PageLayout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PageLayout, _React$Component);\n\n  var _super = _createSuper(PageLayout);\n\n  function PageLayout(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PageLayout);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      sidebarCollapsed: true,\n      levels: []\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PageLayout, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getLevels();\n    }\n  }, {\n    key: \"getLevels\",\n    value: function getLevels() {\n      var _this2 = this;\n\n      fetch(_backendurl_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"] + 'bfbb-site/levels').then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.success == true) _this2.setState({\n          levels: data.info\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Navbar\"], {\n        className: \"bg-dark justify-content-between\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 1\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Form\"], {\n        inline: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Image\"], {\n        onClick: function onClick() {\n          return document.location.href = \"/\";\n        },\n        src: \"/spat-icon.png\",\n        height: \"40\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }\n      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Form\"], {\n        inline: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"], {\n        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"ButtonGroup\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n        variant: \"primary\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }\n      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"].Toggle, {\n        split: true,\n        variant: \"primary\",\n        id: \"dropdown-split-basic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }\n      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"].Menu, {\n        id: \"dropdown-menu-align-right\",\n        alignRight: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"].Item, {\n        href: \"/settings\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 15\n        }\n      }, \"Settings\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Dropdown\"].Item, {\n        onClick: function onClick() {\n          return _this3.logout();\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 15\n        }\n      }, \"Logout\"))))), __jsx(\"div\", {\n        style: {\n          display: \"flex\",\n          position: \"relative\",\n          height: \"calc(100% - 56px)\",\n          whiteSpace: \"pre-wrap\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"ProSidebar\"], {\n        collapsed: this.state.sidebarCollapsed,\n        breakPoint: \"md\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarContent\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"circle\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 15\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n        icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__[\"BiHomeAlt\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 25\n          }\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 18\n        }\n      }, \"Home\"))))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarContent\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"circle\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SubMenu\"], {\n        icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__[\"BiWorld\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 30\n          }\n        }),\n        title: \"Levels\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 15\n        }\n      }, this.state.levels.map(function (level) {\n        return __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n          onClick: function onClick() {\n            return location.replace('/levels/' + level.name);\n          },\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 49\n          }\n        }, level.name);\n      })))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarFooter\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }\n      }, this.state.sidebarCollapsed == false && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"square\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 15\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n        onClick: function onClick() {\n          return _this3.setState({\n            sidebarCollapsed: true\n          });\n        },\n        icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__[\"FaArrowLeft\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 91\n          }\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }\n      }, \"Collapse\")), this.state.sidebarCollapsed == true && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"square\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 15\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n        onClick: function onClick() {\n          return _this3.setState({\n            sidebarCollapsed: false\n          });\n        },\n        icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__[\"FaArrowRight\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 92\n          }\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }\n      }, \"Expand\")))), __jsx(\"div\", {\n        style: {\n          width: \"100%\",\n          height: \"100%\",\n          overflow: \"auto\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 9\n        }\n      }, this.props.children)), __jsx(\"style\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 7\n        }\n      }, \"\\n          $sidebar-bg-color: #ffffff;\\n          \"));\n    }\n  }]);\n\n  return PageLayout;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n/*\n\n\n      \n\n\n\n\n<MenuItem\n                icon={<FaTachometerAlt />}\n              ><a href=\"/\">Dashboard</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaMapMarkedAlt />}\n              ><a href=\"/map\">Map</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaSearchLocation />}\n              ><a href=\"/query\">Query</a>\n              </MenuItem> */\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTGF5b3V0LmpzPzM3MTEiXSwibmFtZXMiOlsiUGFnZUxheW91dCIsInByb3BzIiwic3RhdGUiLCJzaWRlYmFyQ29sbGFwc2VkIiwibGV2ZWxzIiwiZ2V0TGV2ZWxzIiwiZmV0Y2giLCJCQUNLRU5EX1VSTCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsImluZm8iLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsIkJ1dHRvbkdyb3VwIiwibG9nb3V0IiwiZGlzcGxheSIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2hpdGVTcGFjZSIsIm1hcCIsImxldmVsIiwicmVwbGFjZSIsIm5hbWUiLCJ3aWR0aCIsIm92ZXJmbG93IiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHcUJBLFU7Ozs7O0FBQ25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixFQUFFLElBRFA7QUFFWEMsWUFBTSxFQUFFO0FBRkcsS0FBYjtBQUZpQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsU0FBTDtBQUNEOzs7Z0NBRVc7QUFBQTs7QUFDVkMsV0FBSyxDQUFDQyx1REFBVyxHQUFHLGtCQUFmLENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BRFgsRUFFR0YsSUFGSCxDQUVRLFVBQUFHLElBQUksRUFBSTtBQUNaLFlBQUlBLElBQUksQ0FBQ0MsT0FBTCxJQUFnQixJQUFwQixFQUNFLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVULGdCQUFNLEVBQUVPLElBQUksQ0FBQ0c7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDBEQUFEO0FBQVUsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDVSxRQUFMLENBQWM7QUFBRVYsNEJBQWdCLEVBQUU7QUFBcEIsV0FBZCxDQUFOO0FBQUEsU0FBbkI7QUFBcUUsWUFBSSxFQUFFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBUkosQ0FwQkYsQ0FERixFQW9DRTtBQUFLLGFBQUssRUFBRTtBQUFFeUIsZUFBSyxFQUFFLE1BQVQ7QUFBaUJOLGdCQUFNLEVBQUUsTUFBekI7QUFBaUNPLGtCQUFRLEVBQUU7QUFBM0MsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBSzVCLEtBQUwsQ0FBVzZCLFFBRGQsQ0FwQ0YsQ0FuQk0sRUE2RE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrREE3RE0sQ0FBUjtBQWtFRDs7OztFQTFGcUNDLDRDQUFLLENBQUNDLFM7QUE2RjlDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdlTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyLCBGb3JtLCBGb3JtQ29udHJvbCwgQnV0dG9uLCBEcm9wZG93biwgQnV0dG9uR3JvdXAsIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgUHJvU2lkZWJhciwgTWVudSwgTWVudUl0ZW0sIFN1Yk1lbnUsIFNpZGViYXJIZWFkZXIsIFNpZGViYXJGb290ZXIsIFNpZGViYXJDb250ZW50IH0gZnJvbSAncmVhY3QtcHJvLXNpZGViYXInO1xuaW1wb3J0IHsgRmFBcnJvd0xlZnQsIEZhQXJyb3dSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgQmlXb3JsZCwgQmlIb21lQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXG5pbXBvcnQgQkFDS0VORF9VUkwgZnJvbSAnLi9iYWNrZW5kdXJsLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaWRlYmFyQ29sbGFwc2VkOiB0cnVlLFxuICAgICAgbGV2ZWxzOiBbXSxcbiAgICB9XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0TGV2ZWxzKCk7XG4gIH1cblxuICBnZXRMZXZlbHMoKSB7XG4gICAgZmV0Y2goQkFDS0VORF9VUkwgKyAnYmZiYi1zaXRlL2xldmVscycpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09IHRydWUpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldmVsczogZGF0YS5pbmZvIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDw+XG48TmF2YmFyIGNsYXNzTmFtZT1cImJnLWRhcmsganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPEZvcm0gaW5saW5lID5cbiAgICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCkgPT4gZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiL1wifSBzcmM9XCIvc3BhdC1pY29uLnBuZ1wiIGhlaWdodD1cIjQwXCI+PC9JbWFnZT5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Rm9ybSBpbmxpbmU+XG4gICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgc3BsaXQgdmFyaWFudD1cInByaW1hcnlcIiBpZD1cImRyb3Bkb3duLXNwbGl0LWJhc2ljXCIgLz5cblxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgaWQ9XCJkcm9wZG93bi1tZW51LWFsaWduLXJpZ2h0XCIgYWxpZ25SaWdodD5cbiAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIi9zZXR0aW5nc1wiPlNldHRpbmdzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvZ291dCgpfT5Mb2dvdXQ8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9OYXZiYXI+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGhlaWdodDogXCJjYWxjKDEwMCUgLSA1NnB4KVwiLHdoaXRlU3BhY2U6XCJwcmUtd3JhcFwifX0+XG4gICAgICAgIDxQcm9TaWRlYmFyXG4gICAgICAgICAgY29sbGFwc2VkPXt0aGlzLnN0YXRlLnNpZGViYXJDb2xsYXBzZWR9XG4gICAgICAgICAgYnJlYWtQb2ludD1cIm1kXCI+XG4gICAgICAgICAgPFNpZGViYXJIZWFkZXI+XG4gICAgICAgICAgICA8U2lkZWJhckNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxNZW51IGljb25TaGFwZT1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PEJpSG9tZUFsdCAvPn1cbiAgICAgICAgICAgICAgICA+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvU2lkZWJhckNvbnRlbnQ+XG4gICAgICAgICAgPC9TaWRlYmFySGVhZGVyPlxuICAgICAgICAgIDxTaWRlYmFyQ29udGVudD5cbiAgICAgICAgICAgIDxNZW51IGljb25TaGFwZT1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICA8U3ViTWVudSBpY29uPXs8QmlXb3JsZCAvPn0gdGl0bGU9XCJMZXZlbHNcIiA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWxzLm1hcChsZXZlbCA9PiA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gbG9jYXRpb24ucmVwbGFjZSgnL2xldmVscy8nICsgbGV2ZWwubmFtZSl9PntsZXZlbC5uYW1lfTwvTWVudUl0ZW0+KX1cbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvU2lkZWJhckNvbnRlbnQ+XG4gICAgICAgICAgPFNpZGViYXJGb290ZXI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaWRlYmFyQ29sbGFwc2VkID09IGZhbHNlICYmXG4gICAgICAgICAgICAgIDxNZW51IGljb25TaGFwZT1cInNxdWFyZVwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhckNvbGxhcHNlZDogdHJ1ZSB9KX0gaWNvbj17PEZhQXJyb3dMZWZ0IC8+fSA+Q29sbGFwc2U8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNpZGViYXJDb2xsYXBzZWQgPT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICA8TWVudSBpY29uU2hhcGU9XCJzcXVhcmVcIj5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJDb2xsYXBzZWQ6IGZhbHNlIH0pfSBpY29uPXs8RmFBcnJvd1JpZ2h0IC8+fSA+RXhwYW5kPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC9TaWRlYmFyRm9vdGVyPlxuICAgICAgICA8L1Byb1NpZGViYXI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgJHNpZGViYXItYmctY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+KTtcbiAgfVxufVxuXG4vKlxuXG5cbiAgICAgIFxuXG5cblxuXG48TWVudUl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8RmFUYWNob21ldGVyQWx0IC8+fVxuICAgICAgICAgICAgICA+PGEgaHJlZj1cIi9cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhTWFwTWFya2VkQWx0IC8+fVxuICAgICAgICAgICAgICA+PGEgaHJlZj1cIi9tYXBcIj5NYXA8L2E+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhU2VhcmNoTG9jYXRpb24gLz59XG4gICAgICAgICAgICAgID48YSBocmVmPVwiL3F1ZXJ5XCI+UXVlcnk8L2E+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+ICovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PageLayout.js\n");

/***/ })

})