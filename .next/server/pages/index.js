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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pro-sidebar */ \"react-pro-sidebar\");\n/* harmony import */ var react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _backendurl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backendurl.js */ \"./components/backendurl.js\");\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/components/PageLayout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nclass PageLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      sidebarCollapsed: true,\n      levels: []\n    };\n  }\n\n  componentDidMount() {\n    this.getLevels();\n  }\n\n  getLevels() {\n    fetch(_backendurl_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"] + 'bfbb-site/levels').then(res => res.json()).then(data => {\n      if (data.success == true) this.setState({\n        levels: data.info\n      });\n    });\n  }\n\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      style: {\n        display: \"flex\",\n        position: \"relative\",\n        height: \"calc(100% - 0px)\",\n        whiteSpace: \"pre-wrap\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"ProSidebar\"], {\n      collapsed: this.state.sidebarCollapsed,\n      breakPoint: \"md\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarHeader\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarContent\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"circle\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiHomeAlt\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 25\n        }\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      href: \"/\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 18\n      }\n    }, \"Home\"))))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarContent\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"circle\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SubMenu\"], {\n      icon: __jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiWorld\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 30\n        }\n      }),\n      title: \"Levels\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, this.state.levels.map(level => __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      onClick: () => location.replace('/levels/' + level.name),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 49\n      }\n    }, level.name))))), __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"SidebarFooter\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }\n    }, this.state.sidebarCollapsed == false && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"square\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      onClick: () => this.setState({\n        sidebarCollapsed: true\n      }),\n      icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaArrowLeft\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 91\n        }\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }\n    }, \"Collapse\")), this.state.sidebarCollapsed == true && __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n      iconShape: \"square\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }, __jsx(react_pro_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      onClick: () => this.setState({\n        sidebarCollapsed: false\n      }),\n      icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaArrowRight\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 92\n        }\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, \"Expand\")))), __jsx(\"div\", {\n      style: {\n        width: \"100%\",\n        height: \"100%\",\n        overflow: \"auto\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }\n    }, this.props.children)), __jsx(\"style\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }\n    }, `\n          $sidebar-bg-color: #ffffff;\n          `));\n  }\n\n}\n/*\n\n\n      <Navbar className=\"bg-dark justify-content-between\">\n        <Form inline >\n          <Image onClick={() => document.location.href = \"/\"} src=\"/crash_header_logo.png\" height=\"40\"></Image>\n        </Form>\n        <Form inline>\n          <Dropdown as={ButtonGroup}>\n            <Button variant=\"primary\"></Button>\n\n            <Dropdown.Toggle split variant=\"primary\" id=\"dropdown-split-basic\" />\n\n            <Dropdown.Menu id=\"dropdown-menu-align-right\" alignRight>\n              <Dropdown.Item href=\"/settings\">Settings</Dropdown.Item>\n              <Dropdown.Item onClick={() => this.logout()}>Logout</Dropdown.Item>\n            </Dropdown.Menu>\n          </Dropdown>\n        </Form>\n      </Navbar>\n\n\n\n\n<MenuItem\n                icon={<FaTachometerAlt />}\n              ><a href=\"/\">Dashboard</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaMapMarkedAlt />}\n              ><a href=\"/map\">Map</a>\n              </MenuItem>\n\n              <MenuItem\n                icon={<FaSearchLocation />}\n              ><a href=\"/query\">Query</a>\n              </MenuItem> *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VMYXlvdXQuanM/MzcxMSJdLCJuYW1lcyI6WyJQYWdlTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzaWRlYmFyQ29sbGFwc2VkIiwibGV2ZWxzIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRMZXZlbHMiLCJmZXRjaCIsIkJBQ0tFTkRfVVJMIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsInNldFN0YXRlIiwiaW5mbyIsInJlbmRlciIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImhlaWdodCIsIndoaXRlU3BhY2UiLCJtYXAiLCJsZXZlbCIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm5hbWUiLCJ3aWR0aCIsIm92ZXJmbG93IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsTUFBTUEsVUFBTixTQUF5QkMsNENBQUssQ0FBQ0MsU0FBL0IsQ0FBeUM7QUFDdERDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCLEVBQUUsSUFEUDtBQUVYQyxZQUFNLEVBQUU7QUFGRyxLQUFiO0FBS0Q7O0FBRURDLG1CQUFpQixHQUFHO0FBQ2xCLFNBQUtDLFNBQUw7QUFDRDs7QUFFREEsV0FBUyxHQUFHO0FBQ1ZDLFNBQUssQ0FBQ0Msc0RBQVcsR0FBRyxrQkFBZixDQUFMLENBQ0dDLElBREgsQ0FDUUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEZixFQUVHRixJQUZILENBRVFHLElBQUksSUFBSTtBQUNaLFVBQUlBLElBQUksQ0FBQ0MsT0FBTCxJQUFnQixJQUFwQixFQUNFLEtBQUtDLFFBQUwsQ0FBYztBQUFFVixjQUFNLEVBQUVRLElBQUksQ0FBQ0c7QUFBZixPQUFkO0FBQ0gs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQVJKLENBcEJGLENBREYsRUFvQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRXVCLGFBQUssRUFBRSxNQUFUO0FBQWlCUCxjQUFNLEVBQUUsTUFBekI7QUFBaUNRLGdCQUFRLEVBQUU7QUFBM0MsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csS0FBSzFCLEtBQUwsQ0FBVzJCLFFBRGQsQ0FwQ0YsQ0FGTSxFQTRDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVM7O1dBQVQsQ0E1Q00sQ0FBUjtBQWlERDs7QUF6RXFEO0FBNEV4RCIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZUxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhciwgRm9ybSwgRm9ybUNvbnRyb2wsIEJ1dHRvbiwgRHJvcGRvd24sIEJ1dHRvbkdyb3VwLCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IFByb1NpZGViYXIsIE1lbnUsIE1lbnVJdGVtLCBTdWJNZW51LCBTaWRlYmFySGVhZGVyLCBTaWRlYmFyRm9vdGVyLCBTaWRlYmFyQ29udGVudCB9IGZyb20gJ3JlYWN0LXByby1zaWRlYmFyJztcbmltcG9ydCB7IEZhQXJyb3dMZWZ0LCBGYUFycm93UmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCB7IEJpV29ybGQsIEJpSG9tZUFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xuaW1wb3J0IEJBQ0tFTkRfVVJMIGZyb20gJy4vYmFja2VuZHVybC5qcydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2lkZWJhckNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGxldmVsczogW10sXG4gICAgfVxuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldExldmVscygpO1xuICB9XG5cbiAgZ2V0TGV2ZWxzKCkge1xuICAgIGZldGNoKEJBQ0tFTkRfVVJMICsgJ2JmYmItc2l0ZS9sZXZlbHMnKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PSB0cnVlKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsZXZlbHM6IGRhdGEuaW5mbyB9KVxuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gMHB4KVwiLHdoaXRlU3BhY2U6XCJwcmUtd3JhcFwifX0+XG4gICAgICAgIDxQcm9TaWRlYmFyXG4gICAgICAgICAgY29sbGFwc2VkPXt0aGlzLnN0YXRlLnNpZGViYXJDb2xsYXBzZWR9XG4gICAgICAgICAgYnJlYWtQb2ludD1cIm1kXCI+XG4gICAgICAgICAgPFNpZGViYXJIZWFkZXI+XG4gICAgICAgICAgICA8U2lkZWJhckNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxNZW51IGljb25TaGFwZT1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgaWNvbj17PEJpSG9tZUFsdCAvPn1cbiAgICAgICAgICAgICAgICA+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvU2lkZWJhckNvbnRlbnQ+XG4gICAgICAgICAgPC9TaWRlYmFySGVhZGVyPlxuICAgICAgICAgIDxTaWRlYmFyQ29udGVudD5cbiAgICAgICAgICAgIDxNZW51IGljb25TaGFwZT1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICA8U3ViTWVudSBpY29uPXs8QmlXb3JsZCAvPn0gdGl0bGU9XCJMZXZlbHNcIiA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGV2ZWxzLm1hcChsZXZlbCA9PiA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gbG9jYXRpb24ucmVwbGFjZSgnL2xldmVscy8nICsgbGV2ZWwubmFtZSl9PntsZXZlbC5uYW1lfTwvTWVudUl0ZW0+KX1cbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvU2lkZWJhckNvbnRlbnQ+XG4gICAgICAgICAgPFNpZGViYXJGb290ZXI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaWRlYmFyQ29sbGFwc2VkID09IGZhbHNlICYmXG4gICAgICAgICAgICAgIDxNZW51IGljb25TaGFwZT1cInNxdWFyZVwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhckNvbGxhcHNlZDogdHJ1ZSB9KX0gaWNvbj17PEZhQXJyb3dMZWZ0IC8+fSA+Q29sbGFwc2U8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNpZGViYXJDb2xsYXBzZWQgPT0gdHJ1ZSAmJlxuICAgICAgICAgICAgICA8TWVudSBpY29uU2hhcGU9XCJzcXVhcmVcIj5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJDb2xsYXBzZWQ6IGZhbHNlIH0pfSBpY29uPXs8RmFBcnJvd1JpZ2h0IC8+fSA+RXhwYW5kPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC9TaWRlYmFyRm9vdGVyPlxuICAgICAgICA8L1Byb1NpZGViYXI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgJHNpZGViYXItYmctY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC8+KTtcbiAgfVxufVxuXG4vKlxuXG5cbiAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwiYmctZGFyayBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8Rm9ybSBpbmxpbmUgPlxuICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCIvXCJ9IHNyYz1cIi9jcmFzaF9oZWFkZXJfbG9nby5wbmdcIiBoZWlnaHQ9XCI0MFwiPjwvSW1hZ2U+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPEZvcm0gaW5saW5lPlxuICAgICAgICAgIDxEcm9wZG93biBhcz17QnV0dG9uR3JvdXB9PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHNwbGl0IHZhcmlhbnQ9XCJwcmltYXJ5XCIgaWQ9XCJkcm9wZG93bi1zcGxpdC1iYXNpY1wiIC8+XG5cbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IGlkPVwiZHJvcGRvd24tbWVudS1hbGlnbi1yaWdodFwiIGFsaWduUmlnaHQ+XG4gICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIvc2V0dGluZ3NcIj5TZXR0aW5nczwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5sb2dvdXQoKX0+TG9nb3V0PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTmF2YmFyPlxuXG5cblxuXG48TWVudUl0ZW1cbiAgICAgICAgICAgICAgICBpY29uPXs8RmFUYWNob21ldGVyQWx0IC8+fVxuICAgICAgICAgICAgICA+PGEgaHJlZj1cIi9cIj5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhTWFwTWFya2VkQWx0IC8+fVxuICAgICAgICAgICAgICA+PGEgaHJlZj1cIi9tYXBcIj5NYXA8L2E+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgaWNvbj17PEZhU2VhcmNoTG9jYXRpb24gLz59XG4gICAgICAgICAgICAgID48YSBocmVmPVwiL3F1ZXJ5XCI+UXVlcnk8L2E+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+ICovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PageLayout.js\n");

/***/ }),

/***/ "./components/backendurl.js":
/*!**********************************!*\
  !*** ./components/backendurl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//export default \"http://10.42.0.98:3001/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"https://bfbbhub.herokuapp.com/\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2tlbmR1cmwuanM/MDNlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBRWUsK0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2JhY2tlbmR1cmwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2V4cG9ydCBkZWZhdWx0IFwiaHR0cDovLzEwLjQyLjAuOTg6MzAwMS9cIjtcblxuZXhwb3J0IGRlZmF1bHQgXCJodHRwczovL2JmYmJodWIuaGVyb2t1YXBwLmNvbS9cIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/backendurl.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageLayout.js */ \"./components/PageLayout.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/stephen/Desktop/BFBB_Client/bfbb-site/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst button_style = {\n  width: \"100%\",\n  marginTop: 20\n};\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  componentDidMount() {}\n\n  render() {\n    return __jsx(_components_PageLayout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, \"The BfBB Resource Site!\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n      style: {\n        textAlign: \"Center\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n      id: \"breathing\",\n      style: {\n        paddingTop: 20\n      },\n      src: \"/bfbb-community-logo.png\",\n      fluid: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    }), __jsx(\"iframe\", {\n      src: \"https://player.twitch.tv/?shift&parent=https://bfbbsite.vercel.app/\",\n      height: \"100%\",\n      width: \"100%\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    })), __jsx(\"style\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }\n    }, `body{\n        background-image: url(\"bg-ocean.jpg\");\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n      }\n      \n      #breathing {\n        -webkit-animation: breathing 5s ease-out infinite normal;\n        animation: breathing 5s ease-out infinite normal;\n        }\n    \n    \n    @-webkit-keyframes breathing {\n      0% {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9);\n      }\n    \n      25% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n      }\n    \n      60% {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9);\n      }\n    \n      100% {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9);\n      }\n    }\n    \n    @keyframes breathing {\n      0% {\n        -webkit-transform: scale(0.9);\n        -ms-transform: scale(0.9);\n        transform: scale(0.9);\n      }\n    \n      25% {\n        -webkit-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n      }\n    \n      60% {\n        -webkit-transform: scale(0.9);\n        -ms-transform: scale(0.9);\n        transform: scale(0.9);\n      }\n    \n      100% {\n        -webkit-transform: scale(0.9);\n        -ms-transform: scale(0.9);\n        transform: scale(0.9);\n      }\n    }\n    \n      \n      `));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImJ1dHRvbl9zdHlsZSIsIndpZHRoIiwibWFyZ2luVG9wIiwiSW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLE1BRFk7QUFFbkJDLFdBQVMsRUFBRTtBQUZRLENBQXJCO0FBS2UsTUFBTUMsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFFakRDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUdEOztBQUVEQyxtQkFBaUIsR0FBRyxDQUVuQjs7QUFHREMsUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBRUUsTUFBQyx5REFBRDtBQUFXLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMscURBQUQ7QUFBTyxRQUFFLEVBQUMsV0FBVjtBQUFzQixXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQTdCO0FBQWlELFNBQUcsRUFBQywwQkFBckQ7QUFBZ0YsV0FBSyxNQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFJRTtBQUNFLFNBQUcsRUFBQyxxRUFETjtBQUVFLFlBQU0sRUFBQyxNQUZUO0FBR0UsV0FBSyxFQUFDLE1BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBRkYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FBVCxDQWZGLENBREY7QUFrRkQ7O0FBakdnRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMYXlvdXQuanMnXG5pbXBvcnQgeyBCdXR0b24sIElucHV0R3JvdXAsIEZvcm1Db250cm9sLCBDb250YWluZXIsIENvbCwgUm93LCBJbWFnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuXG5jb25zdCBidXR0b25fc3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgbWFyZ2luVG9wOiAyMFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZUxheW91dD5cbiAgICAgICAgPHRpdGxlPlRoZSBCZkJCIFJlc291cmNlIFNpdGUhPC90aXRsZT5cbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyB0ZXh0QWxpZ246IFwiQ2VudGVyXCIgfX0+XG5cbiAgICAgICAgICA8SW1hZ2UgaWQ9XCJicmVhdGhpbmdcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCB9fSBzcmM9XCIvYmZiYi1jb21tdW5pdHktbG9nby5wbmdcIiBmbHVpZD48L0ltYWdlPlxuXG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudHdpdGNoLnR2Lz9zaGlmdCZwYXJlbnQ9aHR0cHM6Ly9iZmJic2l0ZS52ZXJjZWwuYXBwL1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDwvaWZyYW1lPlxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG5cbiAgICAgICAgPHN0eWxlPntgYm9keXtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYmctb2NlYW4uanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjYnJlYXRoaW5nIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGJyZWF0aGluZyA1cyBlYXNlLW91dCBpbmZpbml0ZSBub3JtYWw7XG4gICAgICAgIGFuaW1hdGlvbjogYnJlYXRoaW5nIDVzIGVhc2Utb3V0IGluZmluaXRlIG5vcm1hbDtcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBicmVhdGhpbmcge1xuICAgICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIFxuICAgICAgMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgIFxuICAgICAgNjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAa2V5ZnJhbWVzIGJyZWF0aGluZyB7XG4gICAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICB9XG4gICAgXG4gICAgICAyNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgIFxuICAgICAgNjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAgIFxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9QYWdlTGF5b3V0PlxuXG5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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