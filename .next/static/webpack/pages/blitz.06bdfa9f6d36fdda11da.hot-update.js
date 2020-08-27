webpackHotUpdate_N_E("pages/blitz",{

/***/ "./components/BlitzBoard.js":
/*!**********************************!*\
  !*** ./components/BlitzBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlitzGrid.js */ \"./components/BlitzGrid.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BlitzBoard.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar BlitzBoard = function BlitzBoard(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, props.room.players.sort(function (a, b) {\n    return a.score - b.score;\n  }).reverse().map(function (player) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      score: player.score,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      style: {\n        borderRadius: 20,\n        backgroundColor: player.color + \"aa\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      style: {\n        fontWeight: \"bold\",\n        paddingTop: 15\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 25\n      }\n    }, player.display_name), __jsx(\"div\", {\n      style: {\n        fontSize: 48,\n        lineHeight: 0.75,\n        paddingBottom: 20\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 25\n      }\n    }, player.score)));\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    defaultActiveKey: \"0\",\n    style: {\n      color: \"black\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, props.room.board.levels.map(function (level) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      bg: props.room.level_data[\"\" + level].collected == props.room.level_data[\"\" + level].count ? \"dark\" : \"success\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 25\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header,\n      style: {\n        color: \"white\",\n        fontWeight: \"bold\"\n      },\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 33\n      }\n    }, level, \" \", props.room.level_data[\"\" + level].collected, \"/\", props.room.level_data[\"\" + level].count), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Collapse, {\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 29\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n      style: {\n        padding: 0\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      style: {\n        display: \"grid\",\n        gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n        width: \"100%\",\n        justifyContent: 'space-between'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 37\n      }\n    }, props.room.board.tasks.map(function (task) {\n      if (task.level == level) return __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        rid: props.room.id,\n        pid: props.pid,\n        name: task.name,\n        type: task.type,\n        collected: task.collected,\n        collector: task.collector,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 49\n        }\n      });\n    })))));\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"grid\",\n      gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n      width: \"100%\",\n      justifyContent: 'space-between'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, props.room.board.tasks.map(function (task) {\n    return __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      rid: props.room.id,\n      pid: props.pid,\n      name: task.name,\n      type: task.type,\n      collected: task.collected,\n      collector: task.collector,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 25\n      }\n    });\n  })))));\n};\n\n_c = BlitzBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlitzBoard);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlitzBoard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbGl0ekJvYXJkLmpzPzMwMWYiXSwibmFtZXMiOlsiQmxpdHpCb2FyZCIsInByb3BzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJyb29tIiwicGxheWVycyIsInNvcnQiLCJhIiwiYiIsInNjb3JlIiwicmV2ZXJzZSIsIm1hcCIsInBsYXllciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJkaXNwbGF5X25hbWUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJib2FyZCIsImxldmVscyIsImxldmVsIiwibGV2ZWxfZGF0YSIsImNvbGxlY3RlZCIsImNvdW50IiwiQ2FyZCIsIkhlYWRlciIsInBhZGRpbmciLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImp1c3RpZnlDb250ZW50IiwidGFza3MiLCJ0YXNrIiwiaWQiLCJwaWQiLCJuYW1lIiwidHlwZSIsImNvbGxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUMsaUJBQVcsRUFBRSxFQUFmO0FBQW1CQyxtQkFBYSxFQUFFLEVBQWxDO0FBQXNDQyxXQUFLLEVBQUUsTUFBN0M7QUFBcURDLGVBQVMsRUFBRTtBQUFoRSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0osS0FBSyxDQUFDSyxJQUFOLENBQVdDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsQ0FBQ0UsS0FBRixHQUFV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TUFBQyxnRUFBRDtBQUFXLFNBQUcsRUFBRW5DLEtBQUssQ0FBQ0ssSUFBTixDQUFXK0IsRUFBM0I7QUFBK0IsU0FBRyxFQUFFcEMsS0FBSyxDQUFDcUMsR0FBMUM7QUFBK0MsVUFBSSxFQUFFRixJQUFJLENBQUNHLElBQTFEO0FBQWdFLFVBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUEzRTtBQUFpRixlQUFTLEVBQUVKLElBQUksQ0FBQ1QsU0FBakc7QUFBNEcsZUFBUyxFQUFFUyxJQUFJLENBQUNLLFNBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFENEI7QUFBQSxHQUEvQixDQURMLENBREosQ0F6QkosQ0FkSixDQURlO0FBQUEsQ0FBbkI7O0tBQU16QyxVO0FBdURTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmxpdHpCb2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBBY2NvcmRpb24sIENhcmQsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQmxpdHpHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQmxpdHpHcmlkLmpzJ1xuXG5cblxuY29uc3QgQmxpdHpCb2FyZCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nQm90dG9tOiAxMCwgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICB7cHJvcHMucm9vbS5wbGF5ZXJzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKS5yZXZlcnNlKCkubWFwKHBsYXllciA9PlxuICAgICAgICAgICAgICAgIDxDb2wgc2NvcmU9e3BsYXllci5zY29yZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAyMCwgYmFja2dyb3VuZENvbG9yOiBwbGF5ZXIuY29sb3IgKyBcImFhXCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIHBhZGRpbmdUb3A6IDE1IH19PntwbGF5ZXIuZGlzcGxheV9uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogNDgsIGxpbmVIZWlnaHQ6IDAuNzUsIHBhZGRpbmdCb3R0b206IDIwIH19PntwbGF5ZXIuc2NvcmV9PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ0JvdHRvbTogMTAsIHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJvb20uYm9hcmQubGV2ZWxzLm1hcChsZXZlbCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYmc9e3Byb3BzLnJvb20ubGV2ZWxfZGF0YVtcIlwiK2xldmVsXS5jb2xsZWN0ZWQ9PXByb3BzLnJvb20ubGV2ZWxfZGF0YVtcIlwiK2xldmVsXS5jb3VudCA/IFwiZGFya1wiIDogXCJzdWNjZXNzXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLGZvbnRXZWlnaHQ6XCJib2xkXCJ9fSAgZXZlbnRLZXk9e2xldmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZXZlbH0ge3Byb3BzLnJvb20ubGV2ZWxfZGF0YVtcIlwiK2xldmVsXS5jb2xsZWN0ZWR9L3twcm9wcy5yb29tLmxldmVsX2RhdGFbXCJcIitsZXZlbF0uY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PXtsZXZlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3twYWRkaW5nOjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmclwiLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJvb20uYm9hcmQudGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5sZXZlbCA9PSBsZXZlbCkgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGl0ekdyaWQgcmlkPXtwcm9wcy5yb29tLmlkfSBwaWQ9e3Byb3BzLnBpZH0gbmFtZT17dGFzay5uYW1lfSB0eXBlPXt0YXNrLnR5cGV9IGNvbGxlY3RlZD17dGFzay5jb2xsZWN0ZWR9IGNvbGxlY3Rvcj17dGFzay5jb2xsZWN0b3J9IC8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyXCIsIHdpZHRoOiBcIjEwMCVcIiwganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnJvb20uYm9hcmQudGFza3MubWFwKHRhc2sgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGl0ekdyaWQgcmlkPXtwcm9wcy5yb29tLmlkfSBwaWQ9e3Byb3BzLnBpZH0gbmFtZT17dGFzay5uYW1lfSB0eXBlPXt0YXNrLnR5cGV9IGNvbGxlY3RlZD17dGFzay5jb2xsZWN0ZWR9IGNvbGxlY3Rvcj17dGFzay5jb2xsZWN0b3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG5cblxuICAgIDwvZGl2PlxuXG5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJsaXR6Qm9hcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BlitzBoard.js\n");

/***/ })

})