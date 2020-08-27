webpackHotUpdate_N_E("pages/blitz",{

/***/ "./components/BlitzBoard.js":
/*!**********************************!*\
  !*** ./components/BlitzBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlitzGrid.js */ \"./components/BlitzGrid.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BlitzBoard.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar BlitzBoard = function BlitzBoard(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, props.room.players.sort(function (a, b) {\n    return a.score - b.score;\n  }).reverse().map(function (player) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      score: player.score,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      style: {\n        borderRadius: 20,\n        backgroundColor: player.color + \"aa\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      style: {\n        fontWeight: \"bold\",\n        paddingTop: 15\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 25\n      }\n    }, player.display_name), __jsx(\"div\", {\n      style: {\n        fontSize: 48,\n        lineHeight: 0.75,\n        paddingBottom: 20\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 25\n      }\n    }, player.score)));\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    defaultActiveKey: \"0\",\n    style: {\n      color: \"black\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, props.room.board.levels.map(function (level) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 25\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 29\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"],\n      variant: \"link\",\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 33\n      }\n    }, level)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Collapse, {\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 29\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 33\n      }\n    })));\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"grid\",\n      gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n      width: \"100%\",\n      justifyContent: 'space-between'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, props.room.board.tasks.map(function (task) {\n    return __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      rid: props.room.id,\n      pid: props.pid,\n      name: task.name,\n      type: task.type,\n      collected: task.collected,\n      collector: task.collector,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 25\n      }\n    });\n  })))));\n};\n\n_c = BlitzBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlitzBoard);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlitzBoard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbGl0ekJvYXJkLmpzPzMwMWYiXSwibmFtZXMiOlsiQmxpdHpCb2FyZCIsInByb3BzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJyb29tIiwicGxheWVycyIsInNvcnQiLCJhIiwiYiIsInNjb3JlIiwicmV2ZXJzZSIsIm1hcCIsInBsYXllciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJkaXNwbGF5X25hbWUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJib2FyZCIsImxldmVscyIsImxldmVsIiwiQnV0dG9uIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJqdXN0aWZ5Q29udGVudCIsInRhc2tzIiwidGFzayIsImlkIiwicGlkIiwibmFtZSIsInR5cGUiLCJjb2xsZWN0ZWQiLCJjb2xsZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVDLGlCQUFXLEVBQUUsRUFBZjtBQUFtQkMsbUJBQWEsRUFBRSxFQUFsQztBQUFzQ0MsV0FBSyxFQUFFLE1BQTdDO0FBQXFEQyxlQUFTLEVBQUU7QUFBaEUsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tKLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLENBQUNFLEtBQUYsR0FBVUQsQ0FBQyxDQUFDQyxLQUF0QjtBQUFBLEdBQXhCLEVBQXFEQyxP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QjtBQUErQixTQUFHLEVBQUUvQixLQUFLLENBQUNnQyxHQUExQztBQUErQyxVQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFBMUQ7QUFBZ0UsVUFBSSxFQUFFSCxJQUFJLENBQUNJLElBQTNFO0FBQWlGLGVBQVMsRUFBRUosSUFBSSxDQUFDSyxTQUFqRztBQUE0RyxlQUFTLEVBQUVMLElBQUksQ0FBQ00sU0FBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQ0QjtBQUFBLEdBQS9CLENBREwsQ0FESixDQXJCSixDQWRKLENBRGU7QUFBQSxDQUFuQjs7S0FBTXJDLFU7QUFtRFNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CbGl0ekJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm93LCBDb2wsIEFjY29yZGlvbiwgQ2FyZCwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBCbGl0ekdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9CbGl0ekdyaWQuanMnXG5cblxuXG5jb25zdCBCbGl0ekJvYXJkID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdCb3R0b206IDEwLCB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIHtwcm9wcy5yb29tLnBsYXllcnMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmUpLnJldmVyc2UoKS5tYXAocGxheWVyID0+XG4gICAgICAgICAgICAgICAgPENvbCBzY29yZT17cGxheWVyLnNjb3JlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDIwLCBiYWNrZ3JvdW5kQ29sb3I6IHBsYXllci5jb2xvciArIFwiYWFcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiwgcGFkZGluZ1RvcDogMTUgfX0+e3BsYXllci5kaXNwbGF5X25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiA0OCwgbGluZUhlaWdodDogMC43NSwgcGFkZGluZ0JvdHRvbTogMjAgfX0+e3BsYXllci5zY29yZX08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nQm90dG9tOiAxMCwgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucm9vbS5ib2FyZC5sZXZlbHMubWFwKGxldmVsID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtCdXR0b259IHZhcmlhbnQ9XCJsaW5rXCIgZXZlbnRLZXk9e2xldmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZXZlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT17bGV2ZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyXCIsIHdpZHRoOiBcIjEwMCVcIiwganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJvb20uYm9hcmQudGFza3MubWFwKHRhc2sgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGl0ekdyaWQgcmlkPXtwcm9wcy5yb29tLmlkfSBwaWQ9e3Byb3BzLnBpZH0gbmFtZT17dGFzay5uYW1lfSB0eXBlPXt0YXNrLnR5cGV9IGNvbGxlY3RlZD17dGFzay5jb2xsZWN0ZWR9IGNvbGxlY3Rvcj17dGFzay5jb2xsZWN0b3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG5cblxuICAgIDwvZGl2PlxuXG5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJsaXR6Qm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BlitzBoard.js\n");

/***/ })

})