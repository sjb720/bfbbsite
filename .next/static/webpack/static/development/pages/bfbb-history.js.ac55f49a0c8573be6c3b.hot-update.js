webpackHotUpdate("static/development/pages/bfbb-history.js",{

/***/ "./pages/bfbb-history.js":
/*!*******************************!*\
  !*** ./pages/bfbb-history.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageLayout */ \"./components/PageLayout.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-animate-on-scroll */ \"./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js\");\n/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/stephen/Desktop/Shift Website/pages/bfbb-history.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      url: \"https://player.twitch.tv/shift\",\n      playing: true,\n      videos: []\n    };\n    _this.changeVideo = _this.changeVideo.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 7\n        }\n      }, __jsx(\"title\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 9\n        }\n      }, \"The History of BfBB\"), __jsx(\"h1\", {\n        style: {\n          color: \"white\",\n          textAlign: \"center\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }\n      }, \"How Speedrunning Revived BfBB\"), __jsx(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        animateIn: \"bounceInLeft\",\n        animateOnce: \"true\",\n        offset: \"50\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        style: {\n          width: '100%',\n          paddingLeft: '20%',\n          paddingRight: '20%',\n          height: '34vw'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }\n      }, __jsx(\"iframe\", {\n        width: \"100%\",\n        height: \"100%\",\n        src: \"https://www.youtube.com/embed/videoseries?list=PLDzuZShnnVbZ78eM3wnnXq1C3mnU2PMZf\",\n        frameborder: \"0\",\n        allow: \"autoplay; encrypted-media; fullscreen\",\n        allowfullscreen: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }\n      }))), __jsx(\"div\", {\n        style: {\n          width: '100%',\n          paddingLeft: 40,\n          paddingRight: 40,\n          paddingTop: 20\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }, __jsx(\"h3\", {\n        style: {\n          color: \"white\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }\n      }, \"Catch the latest:\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n        style: {\n          width: '100%'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }\n      }, this.state.videos.map(function (vid) {\n        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n          style: {\n            padding: 0,\n            textAlign: 'center'\n          },\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }\n        }, __jsx(VideoThumbnail, {\n          videoId: vid.id.videoId,\n          title: vid.snippet.title,\n          thumbnail: vid.snippet.thumbnails.medium.url,\n          changeVideo: _this2.changeVideo,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 17\n          }\n        }));\n      }))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9iZmJiLWhpc3RvcnkuanM/YTRiNSJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwic3RhdGUiLCJ1cmwiLCJwbGF5aW5nIiwidmlkZW9zIiwiY2hhbmdlVmlkZW8iLCJiaW5kIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsIm1hcCIsInZpZCIsInBhZGRpbmciLCJpZCIsInZpZGVvSWQiLCJzbmlwcGV0IiwidGl0bGUiLCJ0aHVtYm5haWxzIiwibWVkaXVtIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7O0FBRW5CLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFNBQUcsRUFBRSxnQ0FETTtBQUVYQyxhQUFPLEVBQUUsSUFGRTtBQUdYQyxZQUFNLEVBQUU7QUFIRyxLQUFiO0FBTUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQix5R0FBbkI7QUFSaUI7QUFTbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFFRTtBQUFJLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUUsT0FBVDtBQUFrQkMsbUJBQVMsRUFBRTtBQUE3QixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBRkYsRUFJRSxNQUFDLDhEQUFEO0FBQWlCLGlCQUFTLEVBQUMsY0FBM0I7QUFBMEMsbUJBQVcsRUFBQyxNQUF0RDtBQUE2RCxjQUFNLEVBQUMsSUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxNQUFUO0FBQWlCQyxxQkFBVyxFQUFFLEtBQTlCO0FBQXFDQyxzQkFBWSxFQUFFLEtBQW5EO0FBQTBEQyxnQkFBTSxFQUFFO0FBQWxFLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsYUFBSyxFQUFDLE1BQWQ7QUFBcUIsY0FBTSxFQUFDLE1BQTVCO0FBQW1DLFdBQUcsRUFBQyxtRkFBdkM7QUFBMkgsbUJBQVcsRUFBQyxHQUF2STtBQUEySSxhQUFLLEVBQUMsdUNBQWpKO0FBQXlMLHVCQUFlLE1BQXhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLENBSkYsRUFVRTtBQUFLLGFBQUssRUFBRTtBQUFFSCxlQUFLLEVBQUUsTUFBVDtBQUFpQkMscUJBQVcsRUFBRSxFQUE5QjtBQUFrQ0Msc0JBQVksRUFBRSxFQUFoRDtBQUFvREUsb0JBQVUsRUFBQztBQUEvRCxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGFBQUssRUFBRTtBQUFFTixlQUFLLEVBQUU7QUFBVCxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFJRSxNQUFDLG1EQUFEO0FBQUssYUFBSyxFQUFFO0FBQUVFLGVBQUssRUFBRTtBQUFULFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUtSLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlUsR0FBbEIsQ0FBc0IsVUFBQUMsR0FBRztBQUFBLGVBQ3hCLE1BQUMsbURBQUQ7QUFBSyxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRSxDQUFYO0FBQWNSLHFCQUFTLEVBQUU7QUFBekIsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxjQUFEO0FBQ0UsaUJBQU8sRUFBRU8sR0FBRyxDQUFDRSxFQUFKLENBQU9DLE9BRGxCO0FBRUUsZUFBSyxFQUFFSCxHQUFHLENBQUNJLE9BQUosQ0FBWUMsS0FGckI7QUFHRSxtQkFBUyxFQUFFTCxHQUFHLENBQUNJLE9BQUosQ0FBWUUsVUFBWixDQUF1QkMsTUFBdkIsQ0FBOEJwQixHQUgzQztBQUlFLHFCQUFXLEVBQUUsTUFBSSxDQUFDRyxXQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FEd0I7QUFBQSxPQUF6QixDQURILENBSkYsQ0FWRixDQURGO0FBZ0NEOzs7O0VBOUNnQ2tCLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoiLi9wYWdlcy9iZmJiLWhpc3RvcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxheW91dCc7XG5pbXBvcnQgeyBDYXJkR3JvdXAsIENhcmQsIEltYWdlLCBCdXR0b24sIENhcm91c2VsLCBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9wbGF5ZXIudHdpdGNoLnR2L3NoaWZ0XCIsXG4gICAgICBwbGF5aW5nOiB0cnVlLFxuICAgICAgdmlkZW9zOiBbXVxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlVmlkZW8gPSB0aGlzLmNoYW5nZVZpZGVvLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDx0aXRsZT5UaGUgSGlzdG9yeSBvZiBCZkJCPC90aXRsZT5cbiAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5Ib3cgU3BlZWRydW5uaW5nIFJldml2ZWQgQmZCQjwvaDE+XG5cbiAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJib3VuY2VJbkxlZnRcIiBhbmltYXRlT25jZT1cInRydWVcIiBvZmZzZXQ9XCI1MFwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ0xlZnQ6ICcyMCUnLCBwYWRkaW5nUmlnaHQ6ICcyMCUnLCBoZWlnaHQ6ICczNHZ3JyB9fT5cbiAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3ZpZGVvc2VyaWVzP2xpc3Q9UExEenVaU2hublZiWjc4ZU0zd25uWHExQzNtblUyUE1aZlwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZnVsbHNjcmVlblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nTGVmdDogNDAsIHBhZGRpbmdSaWdodDogNDAsIHBhZGRpbmdUb3A6MjAgfX0gPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxuICAgICAgICAgICAgQ2F0Y2ggdGhlIGxhdGVzdDpcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnZpZGVvcy5tYXAodmlkID0+XG4gICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogMCwgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICA8VmlkZW9UaHVtYm5haWxcbiAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9e3ZpZC5pZC52aWRlb0lkfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3ZpZC5zbmlwcGV0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsPXt2aWQuc25pcHBldC50aHVtYm5haWxzLm1lZGl1bS51cmx9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VWaWRlbz17dGhpcy5jaGFuZ2VWaWRlb31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9WaWRlb1RodW1ibmFpbD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bfbb-history.js\n");

/***/ })

})