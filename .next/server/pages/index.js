module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PageLayout.js":
/*!**********************************!*\
  !*** ./components/PageLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pro-sidebar */ \"react-pro-sidebar\");\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _backendurl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backendurl.js */ \"./components/backendurl.js\");\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/components/PageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nclass PageLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      sidebarCollapsed: true,\n      levels: []\n    };\n  }\n\n  componentDidMount() {\n    this.getLevels();\n  }\n\n  getLevels() {\n    fetch(_backendurl_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"] + 'bfbb-site/levels').then(res => res.json()).then(data => {\n      if (data.success == true) this.setState({\n        levels: data.info\n      });\n    });\n  }\n\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      style: {\n        display: \"flex\",\n        position: \"relative\",\n        height: \"calc(100% - 0px)\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"ProSidebar\"], {\n      collapsed: this.state.sidebarCollapsed,\n      breakPoint: \"md\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarHeader\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarContent\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"circle\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiHomeAlt\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 25\n        }\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      href: \"/\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 18\n      }\n    }, \"Home\"))))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarContent\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"circle\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SubMenu\"], {\n      icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiWorld\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 30\n        }\n      }),\n      title: \"Levels\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, this.state.levels.map(level => __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      onClick: () => location.replace('/levels/' + level.name),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 49\n      }\n    }, level.name))))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarFooter\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, this.state.sidebarCollapsed == false && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"square\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      onClick: () => this.setState({\n        sidebarCollapsed: true\n      }),\n      icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaArrowLeft\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 91\n        }\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }\n    }, \"Collapse\")), this.state.sidebarCollapsed == true && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"square\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      onClick: () => this.setState({\n        sidebarCollapsed: false\n      }),\n      icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaArrowRight\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 92\n        }\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, \"Expand\")))), __jsx(\"div\", {\n      style: {\n        width: \"100%\",\n        height: \"100%\",\n        overflow: \"auto\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }\n    }, this.props.children)), __jsx(\"style\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }\n    }, `\n          $sidebar-bg-color: #ffffff;\n          `));\n  }\n\n}\n/*\n\n\n      <Navbar className=\"bg-dark justify-content-between\">\n        <Form inline >\n          <Image onClick={() => document.location.href = \"/\"} src=\"/crash_header_logo.png\" height=\"40\"></Image>\n        </Form>\n        <Form inline>\n          <Dropdown as={ButtonGroup}>\n            <Button variant=\"primary\"></Button>\n\n            <Dropdown.Toggle split variant=\"primary\" id=\"dropdown-split-basic\" />\n\n            <Dropdown.Menu id=\"dropdown-menu-align-right\" alignRight>\n              <Dropdown.Item href=\"/settings\">Settings</Dropdown.Item>\n              <Dropdown.Item onClick={() => this.logout()}>Logout</Dropdown.Item>\n            </Dropdown.Menu>\n          </Dropdown>\n        </Form>\n      </Navbar>\n\n\n\n\n<MenuItem\n                icon={<FaTachometerAlt />}\n              ><a href=\"/\">Dashboard</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaMapMarkedAlt />}\n              ><a href=\"/map\">Map</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaSearchLocation />}\n              ><a href=\"/query\">Query</a>\n              </MenuItem> *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VMYXlvdXQuanM/MzcxMSJdLCJuYW1lcyI6WyJQYWdlTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzaWRlYmFyQ29sbGFwc2VkIiwibGV2ZWxzIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRMZXZlbHMiLCJmZXRjaCIsIkJBQ0tFTkRfVVJMIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInNldFN0YXRlIiwiaW5mbyIsInJlbmRlciIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImhlaWdodCIsIm1hcCIsImxldmVsIiwibG9jYXRpb24iLCJyZXBsYWNlIiwibmFtZSIsIndpZHRoIiwib3ZlcmZsb3ciLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxNQUFNQSxVQUFOLFNBQXlCQyw0Q0FBSyxDQUFDQyxTQUEvQixDQUF5QztBQUN0REMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxzQkFBZ0IsRUFBRSxJQURQO0FBRVhDLFlBQU0sRUFBRTtBQUZHLEtBQWI7QUFLRDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDbEIsU0FBS0MsU0FBTDtBQUNEOztBQUVEQSxXQUFTLEdBQUc7QUFDVkMsU0FBSyxDQUFDQyxzREFBVyxHQUFHLGtCQUFmLENBQUwsQ0FDR0MsSUFESCxDQUNRQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQURmLEVBRUdGLElBRkgsQ0FFUUcsSUFBSSxJQUFJO0FBQ1osVUFBSUEsSUFBSSxDQUFDQyxPQUFMLElBQWdCLElBQXBCLEVBQ0UsS0FBS0MsUUFBTCxDQUFjO0FBQUVWLGNBQU0sRUFBRVEsSUFBSSxDQUFDRztBQUFmLE9BQWQ7QUFDSCxLQUxIO0FBTUQ7O0FB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REYsQ0FSSixDQXBCRixDQURGLEVBb0NFO0FBQUssV0FBSyxFQUFFO0FBQUVzQixhQUFLLEVBQUUsTUFBVDtBQUFpQk4sY0FBTSxFQUFFLE1BQXpCO0FBQWlDTyxnQkFBUSxFQUFFO0FBQTNDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLEtBQUt6QixLQUFMLENBQVcwQixRQURkLENBcENGLENBRk0sRUE0Q047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTOztXQUFULENBNUNNLENBQVI7QUFpREQ7O0FBekVxRDtBQTRFeEQiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZiYXIsIEZvcm0sIEZvcm1Db250cm9sLCBCdXR0b24sIERyb3Bkb3duLCBCdXR0b25Hcm91cCwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBQcm9TaWRlYmFyLCBNZW51LCBNZW51SXRlbSwgU3ViTWVudSwgU2lkZWJhckhlYWRlciwgU2lkZWJhckZvb3RlciwgU2lkZWJhckNvbnRlbnQgfSBmcm9tICdyZWFjdC1wcm8tc2lkZWJhcic7XG5pbXBvcnQgeyBGYUFycm93TGVmdCwgRmFBcnJvd1JpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgeyBCaVdvcmxkLCBCaUhvbWVBbHQgfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcbmltcG9ydCBCQUNLRU5EX1VSTCBmcm9tICcuL2JhY2tlbmR1cmwuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUxheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNpZGViYXJDb2xsYXBzZWQ6IHRydWUsXG4gICAgICBsZXZlbHM6IFtdLFxuICAgIH1cblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMZXZlbHMoKTtcbiAgfVxuXG4gIGdldExldmVscygpIHtcbiAgICBmZXRjaChCQUNLRU5EX1VSTCArICdiZmJiLXNpdGUvbGV2ZWxzJylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGV2ZWxzOiBkYXRhLmluZm8gfSlcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPD5cblxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgaGVpZ2h0OiBcImNhbGMoMTAwJSAtIDBweClcIiB9fT5cbiAgICAgICAgPFByb1NpZGViYXJcbiAgICAgICAgICBjb2xsYXBzZWQ9e3RoaXMuc3RhdGUuc2lkZWJhckNvbGxhcHNlZH1cbiAgICAgICAgICBicmVha1BvaW50PVwibWRcIj5cbiAgICAgICAgICA8U2lkZWJhckhlYWRlcj5cbiAgICAgICAgICAgIDxTaWRlYmFyQ29udGVudD5cbiAgICAgICAgICAgICAgPE1lbnUgaWNvblNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBpY29uPXs8QmlIb21lQWx0IC8+fVxuICAgICAgICAgICAgICAgID48YSBocmVmPVwiL1wiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9TaWRlYmFyQ29udGVudD5cbiAgICAgICAgICA8L1NpZGViYXJIZWFkZXI+XG4gICAgICAgICAgPFNpZGViYXJDb250ZW50PlxuICAgICAgICAgICAgPE1lbnUgaWNvblNoYXBlPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgIDxTdWJNZW51IGljb249ezxCaVdvcmxkIC8+fSB0aXRsZT1cIkxldmVsc1wiID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sZXZlbHMubWFwKGxldmVsID0+IDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBsb2NhdGlvbi5yZXBsYWNlKCcvbGV2ZWxzLycgKyBsZXZlbC5uYW1lKX0+e2xldmVsLm5hbWV9PC9NZW51SXRlbT4pfVxuICAgICAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPC9TaWRlYmFyQ29udGVudD5cbiAgICAgICAgICA8U2lkZWJhckZvb3Rlcj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNpZGViYXJDb2xsYXBzZWQgPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgPE1lbnUgaWNvblNoYXBlPVwic3F1YXJlXCI+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyQ29sbGFwc2VkOiB0cnVlIH0pfSBpY29uPXs8RmFBcnJvd0xlZnQgLz59ID5Db2xsYXBzZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2lkZWJhckNvbGxhcHNlZCA9PSB0cnVlICYmXG4gICAgICAgICAgICAgIDxNZW51IGljb25TaGFwZT1cInNxdWFyZVwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhckNvbGxhcHNlZDogZmFsc2UgfSl9IGljb249ezxGYUFycm93UmlnaHQgLz59ID5FeHBhbmQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L1NpZGViYXJGb290ZXI+XG4gICAgICAgIDwvUHJvU2lkZWJhcj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG92ZXJmbG93OiBcImF1dG9cIiB9fT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAkc2lkZWJhci1iZy1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICA8Lz4pO1xuICB9XG59XG5cbi8qXG5cblxuICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJiZy1kYXJrIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxGb3JtIGlubGluZSA+XG4gICAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9cIn0gc3JjPVwiL2NyYXNoX2hlYWRlcl9sb2dvLnBuZ1wiIGhlaWdodD1cIjQwXCI+PC9JbWFnZT5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Rm9ybSBpbmxpbmU+XG4gICAgICAgICAgPERyb3Bkb3duIGFzPXtCdXR0b25Hcm91cH0+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgc3BsaXQgdmFyaWFudD1cInByaW1hcnlcIiBpZD1cImRyb3Bkb3duLXNwbGl0LWJhc2ljXCIgLz5cblxuICAgICAgICAgICAgPERyb3Bkb3duLk1lbnUgaWQ9XCJkcm9wZG93bi1tZW51LWFsaWduLXJpZ2h0XCIgYWxpZ25SaWdodD5cbiAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIi9zZXR0aW5nc1wiPlNldHRpbmdzPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvZ291dCgpfT5Mb2dvdXQ8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9OYXZiYXI+XG5cblxuXG5cbjxNZW51SXRlbVxuICAgICAgICAgICAgICAgIGljb249ezxGYVRhY2hvbWV0ZXJBbHQgLz59XG4gICAgICAgICAgICAgID48YSBocmVmPVwiL1wiPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8RmFNYXBNYXJrZWRBbHQgLz59XG4gICAgICAgICAgICAgID48YSBocmVmPVwiL21hcFwiPk1hcDwvYT5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cblxuICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8RmFTZWFyY2hMb2NhdGlvbiAvPn1cbiAgICAgICAgICAgICAgPjxhIGhyZWY9XCIvcXVlcnlcIj5RdWVyeTwvYT5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT4gKi8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageLayout.js\n");

/***/ }),

/***/ "./components/backendurl.js":
/*!**********************************!*\
  !*** ./components/backendurl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"http://10.42.0.98:3001/\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2tlbmR1cmwuanM/MDNlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLHdGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9iYWNrZW5kdXJsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJodHRwOi8vMTAuNDIuMC45ODozMDAxL1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/backendurl.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageLayout.js */ \"./components/PageLayout.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst button_style = {\n  width: \"100%\",\n  marginTop: 20\n};\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  componentDidMount() {}\n\n  render() {\n    return __jsx(_components_PageLayout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, \"The BfBB Resource Site!\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n      style: {\n        textAlign: \"Center\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      style: {\n        paddingTop: 20\n      },\n      src: \"/bfbb-community-logo.png\",\n      fluid: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    })), __jsx(\"style\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, `body{\n        background-image: url(\"bg-ocean.jpg\");\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n      }`));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJ1dHRvbl9zdHlsZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiSW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLE1BRFk7QUFFbkJDLFdBQVMsRUFBRTtBQUZRLENBQXJCO0FBS2UsTUFBTUMsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFFakRDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUdEOztBQUVEQyxtQkFBaUIsR0FBRyxDQUVuQjs7QUFHREMsUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBRUUsTUFBQyx5REFBRDtBQUFXLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMscURBQUQ7QUFBTyxXQUFLLEVBQUU7QUFBQ0Msa0JBQVUsRUFBQztBQUFaLE9BQWQ7QUFBK0IsU0FBRyxFQUFDLDBCQUFuQztBQUE4RCxXQUFLLE1BQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQUZGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTOzs7O1FBQVQsQ0FSRixDQURGO0FBa0JEOztBQWpDZ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlTGF5b3V0LmpzJ1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dEdyb3VwLCBGb3JtQ29udHJvbCwgQ29udGFpbmVyLCBDb2wsIFJvdywgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IGJ1dHRvbl9zdHlsZSA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBtYXJnaW5Ub3A6IDIwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlTGF5b3V0PlxuICAgICAgICA8dGl0bGU+VGhlIEJmQkIgUmVzb3VyY2UgU2l0ZSE8L3RpdGxlPlxuICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJDZW50ZXJcIiB9fT5cbiAgICAgICAgICBcbiAgICAgICAgICA8SW1hZ2Ugc3R5bGU9e3twYWRkaW5nVG9wOjIwfX0gc3JjPVwiL2JmYmItY29tbXVuaXR5LWxvZ28ucG5nXCIgZmx1aWQ+PC9JbWFnZT5cbiAgICAgICAgPC9Db250YWluZXI+XG5cblxuICAgICAgICA8c3R5bGU+e2Bib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJiZy1vY2Vhbi5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICB9YH08L3N0eWxlPlxuICAgICAgPC9QYWdlTGF5b3V0PlxuXG5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiPzEyNDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bi\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react-pro-sidebar":
/*!************************************!*\
  !*** external "react-pro-sidebar" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-pro-sidebar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wcm8tc2lkZWJhclwiPzBjOWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcHJvLXNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wcm8tc2lkZWJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-pro-sidebar\n");

/***/ })

/******/ });