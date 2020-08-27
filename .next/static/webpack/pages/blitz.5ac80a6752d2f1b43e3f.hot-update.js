webpackHotUpdate_N_E("pages/blitz",{

/***/ "./components/BlitzBoard.js":
/*!**********************************!*\
  !*** ./components/BlitzBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlitzGrid.js */ \"./components/BlitzGrid.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BlitzBoard.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar BlitzBoard = function BlitzBoard(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, props.room.players.sort(function (a, b) {\n    return a.score - b.score;\n  }).reverse().map(function (player) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      score: player.score,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      style: {\n        borderRadius: 20,\n        backgroundColor: player.color + \"aa\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      style: {\n        fontWeight: \"bold\",\n        paddingTop: 15\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 25\n      }\n    }, player.display_name), __jsx(\"div\", {\n      style: {\n        fontSize: 48,\n        lineHeight: 0.75,\n        paddingBottom: 20\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 25\n      }\n    }, player.score)));\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    defaultActiveKey: \"0\",\n    style: {\n      color: \"black\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, props.room.board.levels.map(function (level) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      bg: \"dark\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 25\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header,\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 33\n      }\n    }, level), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Collapse, {\n      eventKey: level,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 29\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 33\n      }\n    }, __jsx(\"div\", {\n      style: {\n        display: \"grid\",\n        gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n        width: \"100%\",\n        justifyContent: 'space-between'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 37\n      }\n    }, props.room.board.tasks.map(function (task) {\n      if (task.level == level) return __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        rid: props.room.id,\n        pid: props.pid,\n        name: task.name,\n        type: task.type,\n        collected: task.collected,\n        collector: task.collector,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 49\n        }\n      });\n    })))));\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"grid\",\n      gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n      width: \"100%\",\n      justifyContent: 'space-between'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, props.room.board.tasks.map(function (task) {\n    return __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      rid: props.room.id,\n      pid: props.pid,\n      name: task.name,\n      type: task.type,\n      collected: task.collected,\n      collector: task.collector,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 25\n      }\n    });\n  })))));\n};\n\n_c = BlitzBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlitzBoard);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlitzBoard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbGl0ekJvYXJkLmpzPzMwMWYiXSwibmFtZXMiOlsiQmxpdHpCb2FyZCIsInByb3BzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJyb29tIiwicGxheWVycyIsInNvcnQiLCJhIiwiYiIsInNjb3JlIiwicmV2ZXJzZSIsIm1hcCIsInBsYXllciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJkaXNwbGF5X25hbWUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJib2FyZCIsImxldmVscyIsImxldmVsIiwiQ2FyZCIsIkhlYWRlciIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwianVzdGlmeUNvbnRlbnQiLCJ0YXNrcyIsInRhc2siLCJpZCIsInBpZCIsIm5hbWUiLCJ0eXBlIiwiY29sbGVjdGVkIiwiY29sbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFEO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBRTtBQUFFQyxpQkFBVyxFQUFFLEVBQWY7QUFBbUJDLG1CQUFhLEVBQUUsRUFBbEM7QUFBc0NDLFdBQUssRUFBRSxNQUE3QztBQUFxREMsZUFBUyxFQUFFO0FBQWhFLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixLQUFLLENBQUNLLElBQU4sQ0FBV0MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxDQUFDRSxLQUFGLEdBQVVELENBQUMsQ0FBQ0MsS0FBdEI7QUFBQSxHQUF4QixF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SSxJQUEzRTtBQUFpRixpQkFBUyxFQUFFSixJQUFJLENBQUNLLFNBQWpHO0FBQTRHLGlCQUFTLEVBQUVMLElBQUksQ0FBQ00sU0FBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURxQjtBQUU1QixLQUhBLENBREwsQ0FESixDQURKLENBSkosQ0FEOEI7QUFBQSxHQUFqQyxDQURMLENBREosQ0FESixFQXlCSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFVixhQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQW1CLEVBQUUsNkRBQXhDO0FBQXVHekIsV0FBSyxFQUFFLE1BQTlHO0FBQXNIMEIsb0JBQWMsRUFBRTtBQUF0SSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSzdCLEtBQUssQ0FBQ0ssSUFBTixDQUFXaUIsS0FBWCxDQUFpQlEsS0FBakIsQ0FBdUJsQixHQUF2QixDQUEyQixVQUFBbUIsSUFBSTtBQUFBLFdBQzVCLE1BQUMsZ0VBQUQ7QUFBVyxTQUFHLEVBQUUvQixLQUFLLENBQUNLLElBQU4sQ0FBVzJCLEVBQTNCO0FBQStCLFNBQUcsRUFBRWhDLEtBQUssQ0FBQ2lDLEdBQTFDO0FBQStDLFVBQUksRUFBRUYsSUFBSSxDQUFDRyxJQUExRDtBQUFnRSxVQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBM0U7QUFBaUYsZUFBUyxFQUFFSixJQUFJLENBQUNLLFNBQWpHO0FBQTRHLGVBQVMsRUFBRUwsSUFBSSxDQUFDTSxTQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRDRCO0FBQUEsR0FBL0IsQ0FETCxDQURKLENBekJKLENBZEosQ0FEZTtBQUFBLENBQW5COztLQUFNdEMsVTtBQXVEU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0JsaXR6Qm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCwgQWNjb3JkaW9uLCBDYXJkLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEJsaXR6R3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0JsaXR6R3JpZC5qcydcblxuXG5cbmNvbnN0IEJsaXR6Qm9hcmQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ0JvdHRvbTogMTAsIHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAge3Byb3BzLnJvb20ucGxheWVycy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlIC0gYi5zY29yZSkucmV2ZXJzZSgpLm1hcChwbGF5ZXIgPT5cbiAgICAgICAgICAgICAgICA8Q29sIHNjb3JlPXtwbGF5ZXIuc2NvcmV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogMjAsIGJhY2tncm91bmRDb2xvcjogcGxheWVyLmNvbG9yICsgXCJhYVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBwYWRkaW5nVG9wOiAxNSB9fT57cGxheWVyLmRpc3BsYXlfbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDQ4LCBsaW5lSGVpZ2h0OiAwLjc1LCBwYWRkaW5nQm90dG9tOiAyMCB9fT57cGxheWVyLnNjb3JlfTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdCb3R0b206IDEwLCB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yb29tLmJvYXJkLmxldmVscy5tYXAobGV2ZWwgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJnPVwiZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9ICBldmVudEtleT17bGV2ZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xldmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT17bGV2ZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnJcIiwgd2lkdGg6IFwiMTAwJVwiLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yb29tLmJvYXJkLnRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2subGV2ZWwgPT0gbGV2ZWwpIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxpdHpHcmlkIHJpZD17cHJvcHMucm9vbS5pZH0gcGlkPXtwcm9wcy5waWR9IG5hbWU9e3Rhc2submFtZX0gdHlwZT17dGFzay50eXBlfSBjb2xsZWN0ZWQ9e3Rhc2suY29sbGVjdGVkfSBjb2xsZWN0b3I9e3Rhc2suY29sbGVjdG9yfSAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmclwiLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5yb29tLmJvYXJkLnRhc2tzLm1hcCh0YXNrID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxpdHpHcmlkIHJpZD17cHJvcHMucm9vbS5pZH0gcGlkPXtwcm9wcy5waWR9IG5hbWU9e3Rhc2submFtZX0gdHlwZT17dGFzay50eXBlfSBjb2xsZWN0ZWQ9e3Rhc2suY29sbGVjdGVkfSBjb2xsZWN0b3I9e3Rhc2suY29sbGVjdG9yfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuXG5cbiAgICA8L2Rpdj5cblxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCbGl0ekJvYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlitzBoard.js\n");

/***/ })

})