webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageLayout */ "./components/PageLayout.js");
/* harmony import */ var _components_PlainText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PlainText */ "./components/PlainText.js");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
var _jsxFileName = "/home/stephen/Desktop/LearnBattle/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var contentBacker = {
  backgroundColor: 'rgba(11, 23, 82, 0.8)',
  padding: 20,
  marginTop: 20,
  borderRadius: 10,
  textAlign: "left"
};

var Index = function Index() {
  return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("iframe", {
    src: "https://player.twitch.tv/?channel=bfbbcommunity",
    frameborder: "0",
    allowfullscreen: "true",
    scrolling: "no",
    height: "540",
    width: "960",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("div", {
    style: contentBacker,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Welcome"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Welcome to the SpongeBob SquarePants: Battle for Bikini Bottom community homepage and resource. This site has a primary focus on speedrunning, but we also provide other resources related to the game. If you are interested in speedrunning, take a look at our Getting Started guide. You may also check out the community stream above.")), __jsx(Navbar, {
    bg: "light",
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(Navbar.Brand, {
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "React-Bootstrap"), __jsx(Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(Navbar.Collapse, {
    id: "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(Nav, {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Nav.Link, {
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Home"), __jsx(Nav.Link, {
    href: "#link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Link"), __jsx(NavDropdown, {
    title: "Dropdown",
    id: "basic-nav-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(NavDropdown.Item, {
    href: "#action/3.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Action"), __jsx(NavDropdown.Item, {
    href: "#action/3.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Another action"), __jsx(NavDropdown.Item, {
    href: "#action/3.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Something"), __jsx(NavDropdown.Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(NavDropdown.Item, {
    href: "#action/3.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Separated link"))), __jsx(Form, {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(FormControl, {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(Button, {
    variant: "outline-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Search")))), __jsx("div", {
    style: {
      position: 'fixed',
      right: 20,
      top: 70
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_3__["TwitterTimelineEmbed"], {
    sourceType: "profile",
    screenName: "BfBBCommunity",
    options: {
      height: 520,
      width: 300
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("div", {
    style: {
      textAlign: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_3__["TwitterFollowButton"], {
    screenName: 'BfBBComunity',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), __jsx("div", {
    style: {
      textAlign: "right",
      position: "relative",
      top: "-24px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_3__["TwitterHashtagButton"], {
    tag: 'bfbb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b7c5841115c42198a525.hot-update.js.map