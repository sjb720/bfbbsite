webpackHotUpdate_N_E("pages/blitz",{

/***/ "./components/BlitzBoard.js":
/*!**********************************!*\
  !*** ./components/BlitzBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlitzGrid.js */ \"./components/BlitzGrid.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/frontend-nextjs/components/BlitzBoard.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar BlitzBoard = function BlitzBoard(props) {\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, props.room.players.sort(function (a, b) {\n    return a.score - b.score;\n  }).reverse().map(function (player) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      score: player.score,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      style: {\n        borderRadius: 20,\n        backgroundColor: player.color + \"aa\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      style: {\n        fontWeight: \"bold\",\n        paddingTop: 15\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 25\n      }\n    }, player.display_name), __jsx(\"div\", {\n      style: {\n        fontSize: 48,\n        lineHeight: 0.75,\n        paddingBottom: 20\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 25\n      }\n    }, player.score)));\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    style: {\n      paddingLeft: 30,\n      paddingBottom: 10,\n      width: \"100%\",\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    defaultActiveKey: \"0\",\n    style: {\n      color: \"black\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(Card, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, __jsx(Card.Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Toggle, {\n    as: Button,\n    variant: \"link\",\n    eventKey: \"1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 19\n    }\n  }, \"Bikini Bottom\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Collapse, {\n    eventKey: \"1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, __jsx(Card.Body, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 19\n    }\n  }, \"Text here\"))), __jsx(Card, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, __jsx(Card.Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Toggle, {\n    as: Button,\n    variant: \"link\",\n    eventKey: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 19\n    }\n  }, \"Jellyfish Fields\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"].Collapse, {\n    eventKey: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, __jsx(Card.Body, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 19\n    }\n  }, \"Text here\"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"grid\",\n      gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr\",\n      width: \"100%\",\n      justifyContent: 'space-between'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, props.room.board.tasks.map(function (task) {\n    return __jsx(_components_BlitzGrid_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      rid: props.room.id,\n      pid: props.pid,\n      name: task.name,\n      type: task.type,\n      collected: task.collected,\n      collector: task.collector,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 25\n      }\n    });\n  })))));\n};\n\n_c = BlitzBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlitzBoard);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlitzBoard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbGl0ekJvYXJkLmpzPzMwMWYiXSwibmFtZXMiOlsiQmxpdHpCb2FyZCIsInByb3BzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJyb29tIiwicGxheWVycyIsInNvcnQiLCJhIiwiYiIsInNjb3JlIiwicmV2ZXJzZSIsIm1hcCIsInBsYXllciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJkaXNwbGF5X25hbWUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJCdXR0b24iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImp1c3RpZnlDb250ZW50IiwiYm9hcmQiLCJ0YXNrcyIsInRhc2siLCJpZCIsInBpZCIsIm5hbWUiLCJ0eXBlIiwiY29sbGVjdGVkIiwiY29sbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFEO0FBQUEsU0FDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBRTtBQUFFQyxpQkFBVyxFQUFFLEVBQWY7QUFBbUJDLG1CQUFhLEVBQUUsRUFBbEM7QUFBc0NDLFdBQUssRUFBRSxNQUE3QztBQUFxREMsZUFBUyxFQUFFO0FBQWhFLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixLQUFLLENBQUNLLElBQU4sQ0FBV0MsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxDQUFDRSxLQUFGLEdBQVVELENBQUMsQ0FBQ0MsS0FBdEI7QUFBQSxHQUF4QixFQUFxREMsT0FBckQsR0FBK0RDLEdBQS9E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QUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQW1CLEVBQUUsNkRBQXhDO0FBQXVHckIsV0FBSyxFQUFFLE1BQTlHO0FBQXNIc0Isb0JBQWMsRUFBRTtBQUF0SSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3pCLEtBQUssQ0FBQ0ssSUFBTixDQUFXcUIsS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUJmLEdBQXZCLENBQTJCLFVBQUFnQixJQUFJO0FBQUEsV0FDNUIsTUFBQyxnRUFBRDtBQUFXLFNBQUcsRUFBRTVCLEtBQUssQ0FBQ0ssSUFBTixDQUFXd0IsRUFBM0I7QUFBK0IsU0FBRyxFQUFFN0IsS0FBSyxDQUFDOEIsR0FBMUM7QUFBK0MsVUFBSSxFQUFFRixJQUFJLENBQUNHLElBQTFEO0FBQWdFLFVBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUEzRTtBQUFpRixlQUFTLEVBQUVKLElBQUksQ0FBQ0ssU0FBakc7QUFBNEcsZUFBUyxFQUFFTCxJQUFJLENBQUNNLFNBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFENEI7QUFBQSxHQUEvQixDQURMLENBREosQ0E5QkosQ0FkSixDQURlO0FBQUEsQ0FBbkI7O0tBQU1uQyxVO0FBNERTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQmxpdHpCb2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sLCBBY2NvcmRpb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEJsaXR6R3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0JsaXR6R3JpZC5qcydcblxuXG5cbmNvbnN0IEJsaXR6Qm9hcmQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ0JvdHRvbTogMTAsIHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAge3Byb3BzLnJvb20ucGxheWVycy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlIC0gYi5zY29yZSkucmV2ZXJzZSgpLm1hcChwbGF5ZXIgPT5cbiAgICAgICAgICAgICAgICA8Q29sIHNjb3JlPXtwbGF5ZXIuc2NvcmV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogMjAsIGJhY2tncm91bmRDb2xvcjogcGxheWVyLmNvbG9yICsgXCJhYVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBwYWRkaW5nVG9wOiAxNSB9fT57cGxheWVyLmRpc3BsYXlfbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDQ4LCBsaW5lSGVpZ2h0OiAwLjc1LCBwYWRkaW5nQm90dG9tOiAyMCB9fT57cGxheWVyLnNjb3JlfTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdCb3R0b206IDEwLCB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCIgc3R5bGU9e3tjb2xvcjpcImJsYWNrXCJ9fT5cbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0J1dHRvbn0gdmFyaWFudD1cImxpbmtcIiBldmVudEtleT1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgQmlraW5pIEJvdHRvbVxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjFcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgVGV4dCBoZXJlXG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17QnV0dG9ufSB2YXJpYW50PVwibGlua1wiIGV2ZW50S2V5PVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICBKZWxseWZpc2ggRmllbGRzXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMlwiPlxuICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICBUZXh0IGhlcmVcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0FjY29yZGlvbj5cblxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnJcIiwgd2lkdGg6IFwiMTAwJVwiLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucm9vbS5ib2FyZC50YXNrcy5tYXAodGFzayA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsaXR6R3JpZCByaWQ9e3Byb3BzLnJvb20uaWR9IHBpZD17cHJvcHMucGlkfSBuYW1lPXt0YXNrLm5hbWV9IHR5cGU9e3Rhc2sudHlwZX0gY29sbGVjdGVkPXt0YXNrLmNvbGxlY3RlZH0gY29sbGVjdG9yPXt0YXNrLmNvbGxlY3Rvcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cblxuXG4gICAgPC9kaXY+XG5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmxpdHpCb2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlitzBoard.js\n");

/***/ })

})