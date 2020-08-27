webpackHotUpdate_N_E("pages/blitz",{

/***/ "./components/BlitzBoard.js":
/*!**********************************!*\
  !*** ./components/BlitzBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlitzGrid.js */ \"./components/BlitzGrid.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BlitzBoard.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar BlitzBoard = function BlitzBoard(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, props.room.players.sort(function (a, b) {\n    return a.score - b.score;\n  }).reverse().map(function (player) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      score: player.score,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      style: {\n        borderRadius: 20,\n        backgroundColor: player.color + \"aa\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      style: {\n        fontWeight: \"bold\",\n        paddingTop: 15\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 25\n      }\n    }, player.display_name), __jsx(\"div\", {\n      style: {\n        fontSize: 48,\n        lineHeight: 0.75,\n        paddingBottom: 20\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 25\n      }\n    }, player.score)));\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    defaultActiveKey: \"0\",\n    style: {\n      color: \"black\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, props.room.board.levels.map(function (level) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 25\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 29\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"],\n      variant: \"link\",\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 33\n      }\n    }, level)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Collapse, {\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 29\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 33\n      }\n    }, props.room.board.tasks.map(function (task) {\n       true && __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        rid: props.room.id,\n        pid: props.pid,\n        name: task.name,\n        type: task.type,\n        collected: task.collected,\n        collector: task.collector,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 50\n        }\n      });\n    }))));\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"grid\",\n      gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n      width: \"100%\",\n      justifyContent: 'space-between'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, props.room.board.tasks.map(function (task) {\n    return __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      rid: props.room.id,\n      pid: props.pid,\n      name: task.name,\n      type: task.type,\n      collected: task.collected,\n      collector: task.collector,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 25\n      }\n    });\n  })))));\n};\n\n_c = BlitzBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlitzBoard);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlitzBoard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbGl0ekJvYXJkLmpzPzMwMWYiXSwibmFtZXMiOlsiQmxpdHpCb2FyZCIsInByb3BzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJyb29tIiwicGxheWVycyIsInNvcnQiLCJhIiwiYiIsInNjb3JlIiwicmV2ZXJzZSIsIm1hcCIsInBsYXllciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJkaXNwbGF5X25hbWUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJib2FyZCIsImxldmVscyIsImxldmVsIiwiQnV0dG9uIiwidGFza3MiLCJ0YXNrIiwiaWQiLCJwaWQiLCJuYW1lIiwidHlwZSIsImNvbGxlY3RlZCIsImNvbGxlY3RvciIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVDLGlCQUFXLEVBQUUsRUFBZjtBQUFtQkMsbUJBQWEsRUFBRSxFQUFsQztBQUFzQ0MsV0FBSyxFQUFFLE1BQTdDO0FBQXFEQyxlQUFTLEVBQUU7QUFBaEUsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tKLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLENBQUNFLEtBQUYsR0FBVUQsQ0FBQyxDQUFDQyxLQUF0QjtBQUFBLEdBQXhCLEVBQXFEQyxP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LENBRDhCO0FBQUEsR0FBakMsQ0FETCxDQURKLENBREosRUF1QkksTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFtQixFQUFFLDZEQUF4QztBQUF1R2hDLFdBQUssRUFBRSxNQUE5RztBQUFzSGlDLG9CQUFjLEVBQUU7QUFBdEksS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0twQyxLQUFLLENBQUNLLElBQU4sQ0FBV2lCLEtBQVgsQ0FBaUJJLEtBQWpCLENBQXVCZCxHQUF2QixDQUEyQixVQUFBZSxJQUFJO0FBQUEsV0FDNUIsTUFBQyxnRUFBRDtBQUFXLFNBQUcsRUFBRTNCLEtBQUssQ0FBQ0ssSUFBTixDQUFXdUIsRUFBM0I7QUFBK0IsU0FBRyxFQUFFNUIsS0FBSyxDQUFDNkIsR0FBMUM7QUFBK0MsVUFBSSxFQUFFRixJQUFJLENBQUNHLElBQTFEO0FBQWdFLFVBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUEzRTtBQUFpRixlQUFTLEVBQUVKLElBQUksQ0FBQ0ssU0FBakc7QUFBNEcsZUFBUyxFQUFFTCxJQUFJLENBQUNNLFNBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFENEI7QUFBQSxHQUEvQixDQURMLENBREosQ0F2QkosQ0FkSixDQURlO0FBQUEsQ0FBbkI7O0tBQU1sQyxVO0FBcURTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmxpdHpCb2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBBY2NvcmRpb24sIENhcmQsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQmxpdHpHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQmxpdHpHcmlkLmpzJ1xuXG5cblxuY29uc3QgQmxpdHpCb2FyZCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nQm90dG9tOiAxMCwgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICB7cHJvcHMucm9vbS5wbGF5ZXJzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKS5yZXZlcnNlKCkubWFwKHBsYXllciA9PlxuICAgICAgICAgICAgICAgIDxDb2wgc2NvcmU9e3BsYXllci5zY29yZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAyMCwgYmFja2dyb3VuZENvbG9yOiBwbGF5ZXIuY29sb3IgKyBcImFhXCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIHBhZGRpbmdUb3A6IDE1IH19PntwbGF5ZXIuZGlzcGxheV9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogNDgsIGxpbmVIZWlnaHQ6IDAuNzUsIHBhZGRpbmdCb3R0b206IDIwIH19PntwbGF5ZXIuc2NvcmV9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ0JvdHRvbTogMTAsIHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJvb20uYm9hcmQubGV2ZWxzLm1hcChsZXZlbCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PVwibGlua1wiIGV2ZW50S2V5PXtsZXZlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e2xldmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yb29tLmJvYXJkLnRhc2tzLm1hcCh0YXNrID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RydWUgJiYgPEJsaXR6R3JpZCByaWQ9e3Byb3BzLnJvb20uaWR9IHBpZD17cHJvcHMucGlkfSBuYW1lPXt0YXNrLm5hbWV9IHR5cGU9e3Rhc2sudHlwZX0gY29sbGVjdGVkPXt0YXNrLmNvbGxlY3RlZH0gY29sbGVjdG9yPXt0YXNrLmNvbGxlY3Rvcn0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cblxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnJcIiwgd2lkdGg6IFwiMTAwJVwiLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucm9vbS5ib2FyZC50YXNrcy5tYXAodGFzayA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsaXR6R3JpZCByaWQ9e3Byb3BzLnJvb20uaWR9IHBpZD17cHJvcHMucGlkfSBuYW1lPXt0YXNrLm5hbWV9IHR5cGU9e3Rhc2sudHlwZX0gY29sbGVjdGVkPXt0YXNrLmNvbGxlY3RlZH0gY29sbGVjdG9yPXt0YXNrLmNvbGxlY3Rvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cblxuXG4gICAgPC9kaXY+XG5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmxpdHpCb2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlitzBoard.js\n");

/***/ })

})