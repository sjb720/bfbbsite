webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_PageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageLayout.js */ \"./components/PageLayout.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-twitter-embed */ \"./node_modules/react-twitter-embed/dist/index.es.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar button_style = {\n  width: \"100%\",\n  marginTop: 20\n};\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      ht: 0\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState({\n        ht: document.getElementById('tplayer').clientHeight\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_PageLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 7\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }\n      }, \"The BfBB Resource Site!\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], {\n        style: {\n          position: \"relative\",\n          textAlign: \"center\",\n          width: \"100%\",\n          paddingLeft: 30\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], {\n        sm: 5,\n        style: {\n          padding: \"2vw\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        style: {\n          textAlign: \"left\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Image\"], {\n        id: \"breathing\",\n        style: {\n          paddingTop: 20,\n          paddingBottom: 20\n        },\n        src: \"/bfbb-community-logo.png\",\n        fluid: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }\n      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], {\n        sm: 7,\n        style: {\n          padding: \"2vw\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        style: {\n          position: \"relative\",\n          width: \"100%\",\n          paddingBottom: \"56.25%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }\n      }, __jsx(\"iframe\", {\n        id: \"tplayer\",\n        src: \"https://player.twitch.tv/?channel=bfbbcommunity&parent=bfbbsite.vercel.app&parent=localhost\",\n        style: {\n          border: 0,\n          position: \"absolute\",\n          top: 0,\n          left: 0,\n          width: \"100%\",\n          height: \"100%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 15\n        }\n      })))), __jsx(\"style\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }\n      }, \"body{\\n        background-image: url(\\\"bg-ocean.jpg\\\");\\n        background-repeat: no-repeat;\\n        background-attachment: fixed;\\n      }\\n      \\n      #breathing {\\n        -webkit-animation: breathing 5s ease-out infinite normal;\\n        animation: breathing 5s ease-out infinite normal;\\n        }\\n    \\n    \\n    @-webkit-keyframes breathing {\\n      0% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      25% {\\n        -webkit-transform: scale(1);\\n        transform: scale(1);\\n      }\\n    \\n      60% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      100% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    }\\n    \\n    @keyframes breathing {\\n      0% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      25% {\\n        -webkit-transform: scale(1);\\n        -ms-transform: scale(1);\\n        transform: scale(1);\\n      }\\n    \\n      60% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      100% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    }\\n    \\n      \\n      \"));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJidXR0b25fc3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImh0Iiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpZW50SGVpZ2h0IiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlciIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsTUFEWTtBQUVuQkMsV0FBUyxFQUFFO0FBRlEsQ0FBckI7O0lBTXFCQyxLOzs7OztBQUVuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxRQUFFLEVBQUU7QUFETyxLQUFiO0FBRmlCO0FBS2xCOzs7O3dDQUltQjtBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFBRUQsVUFBRSxFQUFFRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDO0FBQXpDLE9BQWQ7QUFDRDs7OzZCQUdRO0FBQ1AsYUFDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBR0UsTUFBQyxtREFBRDtBQUFLLGFBQUssRUFBRTtBQUFFQyxrQkFBUSxFQUFFLFVBQVo7QUFBd0JDLG1CQUFTLEVBQUUsUUFBbkM7QUFBNkNYLGVBQUssRUFBRSxNQUFwRDtBQUE0RFkscUJBQVcsRUFBRTtBQUF6RSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG1EQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGFBQUssRUFBRTtBQUFDRixtQkFBUyxFQUFDO0FBQVgsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyxxREFBRDtBQUFPLFVBQUUsRUFBQyxXQUFWO0FBQXNCLGFBQUssRUFBRTtBQUFFRyxvQkFBVSxFQUFFLEVBQWQ7QUFBa0JDLHVCQUFhLEVBQUU7QUFBakMsU0FBN0I7QUFBb0UsV0FBRyxFQUFDLDBCQUF4RTtBQUFtRyxhQUFLLE1BQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQSxDQURGLENBREYsRUFRRSxNQUFDLG1EQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxhQUFLLEVBQUU7QUFBRUYsaUJBQU8sRUFBRTtBQUFYLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGFBQUssRUFBRTtBQUFFSCxrQkFBUSxFQUFFLFVBQVo7QUFBd0JWLGVBQUssRUFBRSxNQUEvQjtBQUF1Q2UsdUJBQWEsRUFBRTtBQUF0RCxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFVBQUUsRUFBQyxTQURMO0FBRUUsV0FBRyxFQUFDLDZGQUZOO0FBR0UsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsQ0FBVjtBQUFhTixrQkFBUSxFQUFFLFVBQXZCO0FBQW1DTyxhQUFHLEVBQUUsQ0FBeEM7QUFBMkNDLGNBQUksRUFBRSxDQUFqRDtBQUFvRGxCLGVBQUssRUFBRSxNQUEzRDtBQUFtRW1CLGdCQUFNLEVBQUU7QUFBM0UsU0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixDQVJGLENBSEYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrMENBNUJGLENBREY7QUErRkQ7Ozs7RUFoSGdDQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxheW91dC5qcydcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIENvbnRhaW5lciwgQ29sLCBSb3csIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgVHdpdHRlclRpbWVsaW5lRW1iZWQsIFR3aXR0ZXJTaGFyZUJ1dHRvbiwgVHdpdHRlckZvbGxvd0J1dHRvbiwgVHdpdHRlckhhc2h0YWdCdXR0b24sIFR3aXR0ZXJNZW50aW9uQnV0dG9uLCBUd2l0dGVyVHdlZXRFbWJlZCwgVHdpdHRlck1vbWVudFNoYXJlLCBUd2l0dGVyRE1CdXR0b24sIFR3aXR0ZXJWaWRlb0VtYmVkLCBUd2l0dGVyT25BaXJCdXR0b24gfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcblxuXG5jb25zdCBidXR0b25fc3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgbWFyZ2luVG9wOiAyMFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBodDogMFxuICAgIH1cbiAgfVxuXG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cGxheWVyJykuY2xpZW50SGVpZ2h0IH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2VMYXlvdXQ+XG4gICAgICAgIDx0aXRsZT5UaGUgQmZCQiBSZXNvdXJjZSBTaXRlITwvdGl0bGU+XG5cbiAgICAgICAgPFJvdyBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ0xlZnQ6IDMwIH19PlxuICAgICAgICAgIDxDb2wgc209ezV9IHN0eWxlPXt7IHBhZGRpbmc6IFwiMnZ3XCIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwibGVmdFwifX0+XG4gICAgICAgICAgICA8SW1hZ2UgaWQ9XCJicmVhdGhpbmdcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCwgcGFkZGluZ0JvdHRvbTogMjAgfX0gc3JjPVwiL2JmYmItY29tbXVuaXR5LWxvZ28ucG5nXCIgZmx1aWQ+PC9JbWFnZT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgc209ezd9IHN0eWxlPXt7IHBhZGRpbmc6IFwiMnZ3XCIgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ0JvdHRvbTogXCI1Ni4yNSVcIiB9fT5cbiAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgIGlkPVwidHBsYXllclwiXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudHdpdGNoLnR2Lz9jaGFubmVsPWJmYmJjb21tdW5pdHkmcGFyZW50PWJmYmJzaXRlLnZlcmNlbC5hcHAmcGFyZW50PWxvY2FsaG9zdFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDwvUm93PlxuXG5cblxuXG5cbiAgICAgICAgPHN0eWxlPntgYm9keXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYmctb2NlYW4uanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjYnJlYXRoaW5nIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGJyZWF0aGluZyA1cyBlYXNlLW91dCBpbmZpbml0ZSBub3JtYWw7XG4gICAgICAgIGFuaW1hdGlvbjogYnJlYXRoaW5nIDVzIGVhc2Utb3V0IGluZmluaXRlIG5vcm1hbDtcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBicmVhdGhpbmcge1xuICAgICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIFxuICAgICAgMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgIFxuICAgICAgNjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAa2V5ZnJhbWVzIGJyZWF0aGluZyB7XG4gICAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgXG4gICAgICAyNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgIFxuICAgICAgNjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9QYWdlTGF5b3V0ID5cblxuXG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})