webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PageLayout.js":
/*!**********************************!*\
  !*** ./components/PageLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageLayout; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-pro-sidebar */ \"./node_modules/react-pro-sidebar/dist/index.es.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _backendurl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backendurl.js */ \"./components/backendurl.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/components/PageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar PageLayout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PageLayout, _React$Component);\n\n  var _super = _createSuper(PageLayout);\n\n  function PageLayout(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PageLayout);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      sidebarCollapsed: true,\n      levels: []\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PageLayout, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getLevels();\n    }\n  }, {\n    key: \"getLevels\",\n    value: function getLevels() {\n      var _this2 = this;\n\n      fetch(_backendurl_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"] + 'bfbb-site/levels').then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        if (data.success == true) _this2.setState({\n          levels: data.info\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Navbar\"], {\n        bg: \"dark\",\n        expand: \"lg\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Navbar\"].Brand, {\n        href: \"#home\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }, \"React-Bootstrap\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Navbar\"].Toggle, {\n        \"aria-controls\": \"basic-navbar-nav\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }\n      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Navbar\"].Collapse, {\n        id: \"basic-navbar-nav\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Nav\"], {\n        className: \"mr-auto\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Nav\"].Link, {\n        href: \"#home\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }\n      }, \"Home\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Nav\"].Link, {\n        href: \"#link\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }\n      }, \"Link\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NavDropdown\"], {\n        title: \"Dropdown\",\n        id: \"basic-nav-dropdown\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NavDropdown\"].Item, {\n        href: \"#action/3.1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 15\n        }\n      }, \"Action\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NavDropdown\"].Item, {\n        href: \"#action/3.2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 15\n        }\n      }, \"Another action\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NavDropdown\"].Item, {\n        href: \"#action/3.3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 15\n        }\n      }, \"Something\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NavDropdown\"].Divider, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 15\n        }\n      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"NavDropdown\"].Item, {\n        href: \"#action/3.4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 15\n        }\n      }, \"Separated link\"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Form\"], {\n        inline: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"FormControl\"], {\n        type: \"text\",\n        placeholder: \"Search\",\n        className: \"mr-sm-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }\n      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n        variant: \"outline-success\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }\n      }, \"Search\")))), __jsx(\"div\", {\n        style: {\n          display: \"flex\",\n          position: \"relative\",\n          height: \"calc(100% - 56px)\",\n          whiteSpace: \"pre-wrap\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 7\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"ProSidebar\"], {\n        collapsed: this.state.sidebarCollapsed,\n        breakPoint: \"md\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 9\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarHeader\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarContent\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"circle\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 15\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n        icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__[\"BiHomeAlt\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 25\n          }\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 18\n        }\n      }, \"Home\"))))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarContent\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"circle\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SubMenu\"], {\n        icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__[\"BiWorld\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 30\n          }\n        }),\n        title: \"Levels\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 15\n        }\n      }, this.state.levels.map(function (level) {\n        return __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n          onClick: function onClick() {\n            return location.replace('/levels/' + level.name);\n          },\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 49\n          }\n        }, level.name);\n      })))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"SidebarFooter\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }\n      }, this.state.sidebarCollapsed == false && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"square\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 15\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n        onClick: function onClick() {\n          return _this3.setState({\n            sidebarCollapsed: true\n          });\n        },\n        icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__[\"FaArrowLeft\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 91\n          }\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }\n      }, \"Collapse\")), this.state.sidebarCollapsed == true && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"Menu\"], {\n        iconShape: \"square\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 15\n        }\n      }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"MenuItem\"], {\n        onClick: function onClick() {\n          return _this3.setState({\n            sidebarCollapsed: false\n          });\n        },\n        icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__[\"FaArrowRight\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 92\n          }\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 17\n        }\n      }, \"Expand\")))), __jsx(\"div\", {\n        style: {\n          width: \"100%\",\n          height: \"100%\",\n          overflow: \"auto\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 9\n        }\n      }, this.props.children)), __jsx(\"style\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 7\n        }\n      }, \"\\n          $sidebar-bg-color: #ffffff;\\n          \"));\n    }\n  }]);\n\n  return PageLayout;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n/*\n\n\n\n\n\n\n\n<MenuItem\n                icon={<FaTachometerAlt />}\n              ><a href=\"/\">Dashboard</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaMapMarkedAlt />}\n              ><a href=\"/map\">Map</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaSearchLocation />}\n              ><a href=\"/query\">Query</a>\n              </MenuItem> */\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTGF5b3V0LmpzPzM3MTEiXSwibmFtZXMiOlsiUGFnZUxheW91dCIsInByb3BzIiwic3RhdGUiLCJzaWRlYmFyQ29sbGFwc2VkIiwibGV2ZWxzIiwiZ2V0TGV2ZWxzIiwiZmV0Y2giLCJCQUNLRU5EX1VSTCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsImluZm8iLCJkaXNwbGF5IiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aGl0ZVNwYWNlIiwibWFwIiwibGV2ZWwiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJuYW1lIiwid2lkdGgiLCJvdmVyZmxvdyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR3FCQSxVOzs7OztBQUNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxzQkFBZ0IsRUFBRSxJQURQO0FBRVhDLFlBQU0sRUFBRTtBQUZHLEtBQWI7QUFGaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtDLFNBQUw7QUFDRDs7O2dDQUVXO0FBQUE7O0FBQ1ZDLFdBQUssQ0FBQ0MsdURBQVcsR0FBRyxrQkFBZixDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQURYLEVBRUdGLElBRkgsQ0FFUSxVQUFBRyxJQUFJLEVBQUk7QUFDWixZQUFJQSxJQUFJLENBQUNDLE9BQUwsSUFBZ0IsSUFBcEIsRUFDRSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFVCxnQkFBTSxFQUFFTyxJQUFJLENBQUNHO0FBQWYsU0FBZDtBQUNILE9BTEg7QUFNRDs7OzZCQUVRO0FBQUE7O0FB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ZW50cy9QYWdlTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyLCBGb3JtLCBGb3JtQ29udHJvbCwgQnV0dG9uLCBEcm9wZG93biwgQnV0dG9uR3JvdXAsIEltYWdlLCBOYXYsIE5hdkRyb3Bkb3duIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgUHJvU2lkZWJhciwgTWVudSwgTWVudUl0ZW0sIFN1Yk1lbnUsIFNpZGViYXJIZWFkZXIsIFNpZGViYXJGb290ZXIsIFNpZGViYXJDb250ZW50IH0gZnJvbSAncmVhY3QtcHJvLXNpZGViYXInO1xuaW1wb3J0IHsgRmFBcnJvd0xlZnQsIEZhQXJyb3dSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgQmlXb3JsZCwgQmlIb21lQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknXG5pbXBvcnQgQkFDS0VORF9VUkwgZnJvbSAnLi9iYWNrZW5kdXJsLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaWRlYmFyQ29sbGFwc2VkOiB0cnVlLFxuICAgICAgbGV2ZWxzOiBbXSxcbiAgICB9XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0TGV2ZWxzKCk7XG4gIH1cblxuICBnZXRMZXZlbHMoKSB7XG4gICAgZmV0Y2goQkFDS0VORF9VUkwgKyAnYmZiYi1zaXRlL2xldmVscycpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09IHRydWUpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldmVsczogZGF0YS5pbmZvIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDw+XG5cbiAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgZXhwYW5kPVwibGdcIj5cbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI2hvbWVcIj5SZWFjdC1Cb290c3RyYXA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiAvPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjaG9tZVwiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkxpbms8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiRHJvcGRvd25cIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5BY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPkFub3RoZXIgYWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjNcIj5Tb21ldGhpbmc8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlNlcGFyYXRlZCBsaW5rPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8Rm9ybSBpbmxpbmU+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCI+U2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvTmF2YmFyPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNTZweClcIiwgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiIH19PlxuICAgICAgICA8UHJvU2lkZWJhclxuICAgICAgICAgIGNvbGxhcHNlZD17dGhpcy5zdGF0ZS5zaWRlYmFyQ29sbGFwc2VkfVxuICAgICAgICAgIGJyZWFrUG9pbnQ9XCJtZFwiPlxuICAgICAgICAgIDxTaWRlYmFySGVhZGVyPlxuICAgICAgICAgICAgPFNpZGViYXJDb250ZW50PlxuICAgICAgICAgICAgICA8TWVudSBpY29uU2hhcGU9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGljb249ezxCaUhvbWVBbHQgLz59XG4gICAgICAgICAgICAgICAgPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L1NpZGViYXJDb250ZW50PlxuICAgICAgICAgIDwvU2lkZWJhckhlYWRlcj5cbiAgICAgICAgICA8U2lkZWJhckNvbnRlbnQ+XG4gICAgICAgICAgICA8TWVudSBpY29uU2hhcGU9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgPFN1Yk1lbnUgaWNvbj17PEJpV29ybGQgLz59IHRpdGxlPVwiTGV2ZWxzXCIgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxldmVscy5tYXAobGV2ZWwgPT4gPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGxvY2F0aW9uLnJlcGxhY2UoJy9sZXZlbHMvJyArIGxldmVsLm5hbWUpfT57bGV2ZWwubmFtZX08L01lbnVJdGVtPil9XG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L1NpZGViYXJDb250ZW50PlxuICAgICAgICAgIDxTaWRlYmFyRm9vdGVyPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2lkZWJhckNvbGxhcHNlZCA9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICA8TWVudSBpY29uU2hhcGU9XCJzcXVhcmVcIj5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJDb2xsYXBzZWQ6IHRydWUgfSl9IGljb249ezxGYUFycm93TGVmdCAvPn0gPkNvbGxhcHNlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaWRlYmFyQ29sbGFwc2VkID09IHRydWUgJiZcbiAgICAgICAgICAgICAgPE1lbnUgaWNvblNoYXBlPVwic3F1YXJlXCI+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyQ29sbGFwc2VkOiBmYWxzZSB9KX0gaWNvbj17PEZhQXJyb3dSaWdodCAvPn0gPkV4cGFuZDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvU2lkZWJhckZvb3Rlcj5cbiAgICAgICAgPC9Qcm9TaWRlYmFyPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICRzaWRlYmFyLWJnLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvPik7XG4gIH1cbn1cblxuLypcblxuXG5cblxuXG5cblxuPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhVGFjaG9tZXRlckFsdCAvPn1cbiAgICAgICAgICAgICAgPjxhIGhyZWY9XCIvXCI+RGFzaGJvYXJkPC9hPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxGYU1hcE1hcmtlZEFsdCAvPn1cbiAgICAgICAgICAgICAgPjxhIGhyZWY9XCIvbWFwXCI+TWFwPC9hPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxGYVNlYXJjaExvY2F0aW9uIC8+fVxuICAgICAgICAgICAgICA+PGEgaHJlZj1cIi9xdWVyeVwiPlF1ZXJ5PC9hPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPiAqLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PageLayout.js\n");

/***/ })

})