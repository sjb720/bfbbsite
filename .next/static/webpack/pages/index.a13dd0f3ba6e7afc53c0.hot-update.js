webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_PageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PageLayout.js */ \"./components/PageLayout.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-twitter-embed */ \"./node_modules/react-twitter-embed/dist/index.es.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar button_style = {\n  width: \"100%\",\n  marginTop: 20\n};\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      ht: 0\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState({\n        ht: document.getElementById('tplayer').clientHeight\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_PageLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 7\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }\n      }, \"The BfBB Resource Site!\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Container\"], {\n        style: {\n          textAlign: \"Center\",\n          paddingLeft: \"10vw\",\n          paddingRight: \"10vw\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Image\"], {\n        id: \"breathing\",\n        style: {\n          paddingTop: 20,\n          paddingBottom: 20\n        },\n        src: \"/bfbb-community-logo.png\",\n        fluid: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }\n      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], {\n        style: {\n          position: \"relative\",\n          textAlign: \"center\",\n          width: \"100%\",\n          paddingLeft: 30\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], {\n        sm: 5,\n        style: {\n          padding: \"2vw\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        style: {\n          textAlign: \"left\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }\n      }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_9__[\"TwitterTimelineEmbed\"], {\n        sourceType: \"profile\",\n        screenName: \"BfBBCommunity\",\n        options: {\n          height: this.state.ht + \"px\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 15\n        }\n      }), __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_9__[\"TwitterFollowButton\"], {\n        screenName: 'BfBBCommunity',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }\n      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], {\n        sm: 7,\n        style: {\n          padding: \"2vw\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        style: {\n          position: \"relative\",\n          width: \"100%\",\n          paddingBottom: \"56.25%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, __jsx(\"iframe\", {\n        id: \"tplayer\",\n        src: \"https://player.twitch.tv/?channel=bfbbcommunity&parent=bfbbsite.vercel.app&parent=localhost\",\n        style: {\n          border: 0,\n          position: \"absolute\",\n          top: 0,\n          left: 0,\n          width: \"100%\",\n          height: \"100%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 15\n        }\n      })))), __jsx(\"style\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 9\n        }\n      }, \"body{\\n        background-image: url(\\\"bg-ocean.jpg\\\");\\n        background-repeat: no-repeat;\\n        background-attachment: fixed;\\n      }\\n      \\n      #breathing {\\n        -webkit-animation: breathing 5s ease-out infinite normal;\\n        animation: breathing 5s ease-out infinite normal;\\n        }\\n    \\n    \\n    @-webkit-keyframes breathing {\\n      0% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      25% {\\n        -webkit-transform: scale(1);\\n        transform: scale(1);\\n      }\\n    \\n      60% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      100% {\\n        -webkit-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    }\\n    \\n    @keyframes breathing {\\n      0% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      25% {\\n        -webkit-transform: scale(1);\\n        -ms-transform: scale(1);\\n        transform: scale(1);\\n      }\\n    \\n      60% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    \\n      100% {\\n        -webkit-transform: scale(0.9);\\n        -ms-transform: scale(0.9);\\n        transform: scale(0.9);\\n      }\\n    }\\n    \\n      \\n      \"));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJidXR0b25fc3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsImh0Iiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpZW50SGVpZ2h0IiwidGV4dEFsaWduIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBvc2l0aW9uIiwicGFkZGluZyIsImhlaWdodCIsImJvcmRlciIsInRvcCIsImxlZnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsTUFEWTtBQUVuQkMsV0FBUyxFQUFFO0FBRlEsQ0FBckI7O0lBTXFCQyxLOzs7OztBQUVuQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxRQUFFLEVBQUU7QUFETyxLQUFiO0FBRmlCO0FBS2xCOzs7O3dDQUltQjtBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFBRUQsVUFBRSxFQUFFRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDO0FBQXpDLE9BQWQ7QUFDRDs7OzZCQUdRO0FBQ1AsYUFDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUUsTUFBQyx5REFBRDtBQUFXLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFLFFBQWI7QUFBc0JDLHFCQUFXLEVBQUMsTUFBbEM7QUFBeUNDLHNCQUFZLEVBQUM7QUFBdEQsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFLE1BQUMscURBQUQ7QUFBTyxVQUFFLEVBQUMsV0FBVjtBQUFzQixhQUFLLEVBQUU7QUFBRUMsb0JBQVUsRUFBRSxFQUFkO0FBQWtCQyx1QkFBYSxFQUFFO0FBQWpDLFNBQTdCO0FBQW9FLFdBQUcsRUFBQywwQkFBeEU7QUFBbUcsYUFBSyxNQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FGRixFQU9FLE1BQUMsbURBQUQ7QUFBSyxhQUFLLEVBQUU7QUFBRUMsa0JBQVEsRUFBRSxVQUFaO0FBQXdCTCxtQkFBUyxFQUFFLFFBQW5DO0FBQTZDVixlQUFLLEVBQUUsTUFBcEQ7QUFBNERXLHFCQUFXLEVBQUU7QUFBekUsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxtREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQVksYUFBSyxFQUFFO0FBQUVLLGlCQUFPLEVBQUU7QUFBWCxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBQ04sbUJBQVMsRUFBQztBQUFYLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0VBQUQ7QUFDRSxrQkFBVSxFQUFDLFNBRGI7QUFFRSxrQkFBVSxFQUFDLGVBRmI7QUFHRSxlQUFPLEVBQUU7QUFBRU8sZ0JBQU0sRUFBRSxLQUFLYixLQUFMLENBQVdDLEVBQVgsR0FBZ0I7QUFBMUIsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRSxNQUFDLHVFQUFEO0FBQ0Usa0JBQVUsRUFBRSxlQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFORixDQURGLENBREYsRUFjRSxNQUFDLG1EQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxhQUFLLEVBQUU7QUFBRVcsaUJBQU8sRUFBRTtBQUFYLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGFBQUssRUFBRTtBQUFFRCxrQkFBUSxFQUFFLFVBQVo7QUFBd0JmLGVBQUssRUFBRSxNQUEvQjtBQUF1Q2MsdUJBQWEsRUFBRTtBQUF0RCxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFVBQUUsRUFBQyxTQURMO0FBRUUsV0FBRyxFQUFDLDZGQUZOO0FBR0UsYUFBSyxFQUFFO0FBQUVJLGdCQUFNLEVBQUUsQ0FBVjtBQUFhSCxrQkFBUSxFQUFFLFVBQXZCO0FBQW1DSSxhQUFHLEVBQUUsQ0FBeEM7QUFBMkNDLGNBQUksRUFBRSxDQUFqRDtBQUFvRHBCLGVBQUssRUFBRSxNQUEzRDtBQUFtRWlCLGdCQUFNLEVBQUU7QUFBM0UsU0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixDQWRGLENBUEYsRUFzQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrMENBdENGLENBREY7QUF5R0Q7Ozs7RUExSGdDSSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxheW91dC5qcydcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIENvbnRhaW5lciwgQ29sLCBSb3csIEltYWdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgVHdpdHRlclRpbWVsaW5lRW1iZWQsIFR3aXR0ZXJTaGFyZUJ1dHRvbiwgVHdpdHRlckZvbGxvd0J1dHRvbiwgVHdpdHRlckhhc2h0YWdCdXR0b24sIFR3aXR0ZXJNZW50aW9uQnV0dG9uLCBUd2l0dGVyVHdlZXRFbWJlZCwgVHdpdHRlck1vbWVudFNoYXJlLCBUd2l0dGVyRE1CdXR0b24sIFR3aXR0ZXJWaWRlb0VtYmVkLCBUd2l0dGVyT25BaXJCdXR0b24gfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJztcblxuXG5jb25zdCBidXR0b25fc3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgbWFyZ2luVG9wOiAyMFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBodDogMFxuICAgIH1cbiAgfVxuXG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cGxheWVyJykuY2xpZW50SGVpZ2h0IH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2VMYXlvdXQ+XG4gICAgICAgIDx0aXRsZT5UaGUgQmZCQiBSZXNvdXJjZSBTaXRlITwvdGl0bGU+XG4gICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgdGV4dEFsaWduOiBcIkNlbnRlclwiLHBhZGRpbmdMZWZ0OlwiMTB2d1wiLHBhZGRpbmdSaWdodDpcIjEwdndcIiB9fT5cblxuICAgICAgICAgIDxJbWFnZSBpZD1cImJyZWF0aGluZ1wiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDIwLCBwYWRkaW5nQm90dG9tOiAyMCB9fSBzcmM9XCIvYmZiYi1jb21tdW5pdHktbG9nby5wbmdcIiBmbHVpZD48L0ltYWdlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8Um93IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nTGVmdDogMzAgfX0+XG4gICAgICAgICAgPENvbCBzbT17NX0gc3R5bGU9e3sgcGFkZGluZzogXCIydndcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgICAgPFR3aXR0ZXJUaW1lbGluZUVtYmVkXG4gICAgICAgICAgICAgICAgc291cmNlVHlwZT1cInByb2ZpbGVcIlxuICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU9XCJCZkJCQ29tbXVuaXR5XCJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7IGhlaWdodDogdGhpcy5zdGF0ZS5odCArIFwicHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VHdpdHRlckZvbGxvd0J1dHRvblxuICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU9eydCZkJCQ29tbXVuaXR5J31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBzbT17N30gc3R5bGU9e3sgcGFkZGluZzogXCIydndcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nQm90dG9tOiBcIjU2LjI1JVwiIH19PlxuICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgaWQ9XCJ0cGxheWVyXCJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BsYXllci50d2l0Y2gudHYvP2NoYW5uZWw9YmZiYmNvbW11bml0eSZwYXJlbnQ9YmZiYnNpdGUudmVyY2VsLmFwcCZwYXJlbnQ9bG9jYWxob3N0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IDAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMCwgbGVmdDogMCwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPC9Sb3c+XG5cblxuXG5cblxuICAgICAgICA8c3R5bGU+e2Bib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJiZy1vY2Vhbi5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNicmVhdGhpbmcge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYnJlYXRoaW5nIDVzIGVhc2Utb3V0IGluZmluaXRlIG5vcm1hbDtcbiAgICAgICAgYW5pbWF0aW9uOiBicmVhdGhpbmcgNXMgZWFzZS1vdXQgaW5maW5pdGUgbm9ybWFsO1xuICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGJyZWF0aGluZyB7XG4gICAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgXG4gICAgICAyNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgXG4gICAgICA2MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgYnJlYXRoaW5nIHtcbiAgICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgIH1cbiAgICBcbiAgICAgIDI1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgXG4gICAgICA2MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1BhZ2VMYXlvdXQgPlxuXG5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})