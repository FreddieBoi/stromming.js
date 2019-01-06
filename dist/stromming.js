/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/Components/App.tsx":
/*!***********************************!*\
  !*** ./src/ts/Components/App.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst Footer_1 = __webpack_require__(/*! ./Footer */ \"./src/ts/Components/Footer.tsx\");\r\nconst Header_1 = __webpack_require__(/*! ./Header */ \"./src/ts/Components/Header.tsx\");\r\nconst ResultSection_1 = __webpack_require__(/*! ./ResultSection */ \"./src/ts/Components/ResultSection.tsx\");\r\nconst SearchSection_1 = __webpack_require__(/*! ./SearchSection */ \"./src/ts/Components/SearchSection.tsx\");\r\nclass AppComponent extends React.Component {\r\n    constructor(props, context) {\r\n        super(props, context);\r\n        this.handleSearch = (term) => {\r\n            this.props.onSearch(term)\r\n                .then((results) => this.handleSearchResults(results));\r\n            this.setState({\r\n                isSearching: true,\r\n                results: [],\r\n                term,\r\n            });\r\n        };\r\n        this.handleSearchResults = (results) => {\r\n            if (!results) {\r\n                this.setState({\r\n                    isSearching: false,\r\n                    results: [],\r\n                });\r\n                return;\r\n            }\r\n            this.setState({\r\n                isSearching: false,\r\n                results: results\r\n                    .filter((result) => {\r\n                    return result && result.count;\r\n                })\r\n                    .sort((a, b) => {\r\n                    return a && b\r\n                        ? b.count - a.count\r\n                        : 0;\r\n                }),\r\n            });\r\n        };\r\n        this.state = {\r\n            isSearching: false,\r\n            results: [],\r\n            term: \"\",\r\n        };\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", { className: \"container-fluid\" },\r\n            React.createElement(Header_1.HeaderComponent, null),\r\n            React.createElement(SearchSection_1.SearchSectionComponent, { onSearch: this.handleSearch, isDisabled: this.state.isSearching }),\r\n            this.state.term\r\n                ? React.createElement(ResultSection_1.ResultSectionComponent, { term: this.state.term, isSearching: this.state.isSearching, results: this.state.results })\r\n                : null,\r\n            React.createElement(Footer_1.FooterComponent, null)));\r\n    }\r\n}\r\nexports.AppComponent = AppComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9BcHAudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90cy9Db21wb25lbnRzL0FwcC50c3g/OTdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vU2VhcmNoXCI7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgYXMgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgYXMgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgeyBJUmVzdWx0UHJvcHMgfSBmcm9tIFwiLi9SZXN1bHRcIjtcbmltcG9ydCB7IFJlc3VsdFNlY3Rpb25Db21wb25lbnQgYXMgUmVzdWx0U2VjdGlvbiB9IGZyb20gXCIuL1Jlc3VsdFNlY3Rpb25cIjtcbmltcG9ydCB7IFNlYXJjaFNlY3Rpb25Db21wb25lbnQgYXMgU2VhcmNoU2VjdGlvbiB9IGZyb20gXCIuL1NlYXJjaFNlY3Rpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwUHJvcHMge1xuICAgIG9uU2VhcmNoOiAodGVybTogc3RyaW5nKSA9PiBQcm9taXNlPElTZWFyY2hSZXN1bHRbXT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFN0YXRlIHtcbiAgICBpc1NlYXJjaGluZzogYm9vbGVhbjtcbiAgICByZXN1bHRzOiBJUmVzdWx0UHJvcHNbXTtcbiAgICB0ZXJtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUFwcFByb3BzLCBJQXBwU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1NlYXJjaGluZzogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIHRlcm06IFwiXCIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPFNlYXJjaFNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXt0aGlzLnN0YXRlLmlzU2VhcmNoaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGVybVxuICAgICAgICAgICAgICAgICAgICA/IDxSZXN1bHRTZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtPXt0aGlzLnN0YXRlLnRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlYXJjaGluZz17dGhpcy5zdGF0ZS5pc1NlYXJjaGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU2VhcmNoID0gKHRlcm06IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHRlcm0pXG4gICAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4gdGhpcy5oYW5kbGVTZWFyY2hSZXN1bHRzKHJlc3VsdHMpKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzU2VhcmNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgcmVzdWx0czogW10sXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVNlYXJjaFJlc3VsdHMgPSAocmVzdWx0czogSVNlYXJjaFJlc3VsdFtdKSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNTZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1NlYXJjaGluZzogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgc2hvdyByZXN1bHRzIHdpdGggbWF0Y2hlc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5jb3VudDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcmVzdWx0IHdpdGggbW9zdCBtYXRjaGVzIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYi5jb3VudCAtIGEuY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBcUNBO0FBbkVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Components/App.tsx\n");

/***/ }),

/***/ "./src/ts/Components/Footer.tsx":
/*!**************************************!*\
  !*** ./src/ts/Components/Footer.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass FooterComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"footer\", null,\r\n            React.createElement(\"p\", null,\r\n                \"Written by \",\r\n                React.createElement(\"a\", { href: \"https://github.com/FreddieBoi\" }, \"FreddieBoi\"),\r\n                \".\")));\r\n    }\r\n}\r\nexports.FooterComponent = FooterComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9Gb290ZXIudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90cy9Db21wb25lbnRzL0Zvb3Rlci50c3g/N2QyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgV3JpdHRlbiBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0ZyZWRkaWVCb2lcIj5GcmVkZGllQm9pPC9hPi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBWkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Components/Footer.tsx\n");

/***/ }),

/***/ "./src/ts/Components/Header.tsx":
/*!**************************************!*\
  !*** ./src/ts/Components/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass HeaderComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"header\", null,\r\n            React.createElement(\"h1\", null, \"Stromming\"),\r\n            React.createElement(\"p\", { className: \"lead\" }, \"Str\\u00F6mming (or more internationally Stromming) is a simple application to use when you want to find what streaming services have the content you want to watch.\")));\r\n    }\r\n}\r\nexports.HeaderComponent = HeaderComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90cy9Db21wb25lbnRzL0hlYWRlci50c3g/NTdlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDE+U3Ryb21taW5nPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIFN0csO2bW1pbmcgKG9yIG1vcmUgaW50ZXJuYXRpb25hbGx5IFN0cm9tbWluZykgaXMgYSBzaW1wbGUgYXBwbGljYXRpb24gdG8gdXNlIHdoZW4geW91IHdhbnQgdG8gZmluZFxuICAgICAgICAgICAgICAgICAgICB3aGF0IHN0cmVhbWluZyBzZXJ2aWNlcyBoYXZlIHRoZSBjb250ZW50IHlvdSB3YW50IHRvIHdhdGNoLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApO1xuICAgIH1cblxufVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFkQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Components/Header.tsx\n");

/***/ }),

/***/ "./src/ts/Components/Result.tsx":
/*!**************************************!*\
  !*** ./src/ts/Components/Result.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass ResultComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"li\", { className: \"result\" },\r\n            React.createElement(\"a\", { className: \"result-name\", href: this.props.href }, this.props.name),\r\n            \" has \",\r\n            React.createElement(\"strong\", { className: \"h4 result-count\" }, this.props.count),\r\n            \" content match\",\r\n            this.props.count === 1 ? \"\" : \"es\",\r\n            \"!\"));\r\n    }\r\n}\r\nexports.ResultComponent = ResultComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHQudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90cy9Db21wb25lbnRzL1Jlc3VsdC50c3g/MGY2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUmVzdWx0UHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBocmVmOiBzdHJpbmc7XG4gICAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUmVzdWx0UHJvcHMsIGFueT4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlc3VsdFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc3VsdC1uYW1lXCIgaHJlZj17dGhpcy5wcm9wcy5ocmVmfT57dGhpcy5wcm9wcy5uYW1lfTwvYT4gaGFzIDxzdHJvbmcgY2xhc3NOYW1lPVwiaDQgcmVzdWx0LWNvdW50XCI+e3RoaXMucHJvcHMuY291bnR9PC9zdHJvbmc+IGNvbnRlbnQgbWF0Y2h7dGhpcy5wcm9wcy5jb3VudCA9PT0gMSA/IFwiXCIgOiBcImVzXCJ9IVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUVBOztBQUFBOztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBVkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Components/Result.tsx\n");

/***/ }),

/***/ "./src/ts/Components/ResultHeading.tsx":
/*!*********************************************!*\
  !*** ./src/ts/Components/ResultHeading.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass ResultHeadingComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"p\", null, this.props.count\r\n            ? React.createElement(\"span\", null,\r\n                \"Found \",\r\n                React.createElement(\"strong\", null, this.props.count),\r\n                \" content match\",\r\n                this.props.count === 1 ? \"\" : \"es\",\r\n                \" for \",\r\n                React.createElement(\"strong\", null, this.props.term),\r\n                \"! :D\")\r\n            : React.createElement(\"span\", null,\r\n                \"No content match for \",\r\n                React.createElement(\"strong\", null, this.props.term),\r\n                \" :(\")));\r\n    }\r\n}\r\nexports.ResultHeadingComponent = ResultHeadingComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRIZWFkaW5nLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRIZWFkaW5nLnRzeD9hODAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bHRIZWFkaW5nUHJvcHMge1xuICAgIHRlcm06IHN0cmluZztcbiAgICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0SGVhZGluZ0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUmVzdWx0SGVhZGluZ1Byb3BzLCBhbnk+IHtcblxuICAgIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvdW50XG4gICAgICAgICAgICAgICAgICAgID8gPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBGb3VuZCA8c3Ryb25nPnt0aGlzLnByb3BzLmNvdW50fTwvc3Ryb25nPiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaHt0aGlzLnByb3BzLmNvdW50ID09PSAxID8gXCJcIiA6IFwiZXNcIn0gZm9yIDxzdHJvbmc+e3RoaXMucHJvcHMudGVybX08L3N0cm9uZz4hIDpEXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgOiA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIGNvbnRlbnQgbWF0Y2ggZm9yIDxzdHJvbmc+e3RoaXMucHJvcHMudGVybX08L3N0cm9uZz4gOihcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUdBOztBQUNBOztBQUNBOztBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQWxCQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Components/ResultHeading.tsx\n");

/***/ }),

/***/ "./src/ts/Components/ResultList.tsx":
/*!******************************************!*\
  !*** ./src/ts/Components/ResultList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst Result_1 = __webpack_require__(/*! ./Result */ \"./src/ts/Components/Result.tsx\");\r\nclass ResultListComponent extends React.Component {\r\n    render() {\r\n        const results = this.props.results.map((result) => {\r\n            const key = `${result.name}-${result.count}`;\r\n            return (React.createElement(Result_1.ResultComponent, { key: key, name: result.name, href: result.href, count: result.count }));\r\n        });\r\n        return (React.createElement(\"ol\", { className: \"list-unstyled list-result\" }, results));\r\n    }\r\n}\r\nexports.ResultListComponent = ResultListComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRMaXN0LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRMaXN0LnRzeD9lNDllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVJlc3VsdFByb3BzLCBSZXN1bHRDb21wb25lbnQgYXMgUmVzdWx0IH0gZnJvbSBcIi4vUmVzdWx0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdExpc3RQcm9wcyB7XG4gICAgcmVzdWx0czogSVJlc3VsdFByb3BzW107XG59XG5cbmV4cG9ydCBjbGFzcyBSZXN1bHRMaXN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSZXN1bHRMaXN0UHJvcHMsIGFueT4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5wcm9wcy5yZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtyZXN1bHQubmFtZX0tJHtyZXN1bHQuY291bnR9YDtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlc3VsdFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cmVzdWx0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3Jlc3VsdC5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjb3VudD17cmVzdWx0LmNvdW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIGxpc3QtcmVzdWx0XCI+XG4gICAgICAgICAgICAgICAge3Jlc3VsdHN9XG4gICAgICAgICAgICA8L29sPlxuICAgICAgICApO1xuICAgIH1cblxufVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUtBO0FBRUE7QUFyQkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Components/ResultList.tsx\n");

/***/ }),

/***/ "./src/ts/Components/ResultSection.tsx":
/*!*********************************************!*\
  !*** ./src/ts/Components/ResultSection.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ResultHeading_1 = __webpack_require__(/*! ./ResultHeading */ \"./src/ts/Components/ResultHeading.tsx\");\r\nconst ResultList_1 = __webpack_require__(/*! ./ResultList */ \"./src/ts/Components/ResultList.tsx\");\r\nclass ResultSectionComponent extends React.Component {\r\n    render() {\r\n        const count = this.props.results\r\n            ? this.props.results\r\n                .map((result) => result ? result.count : 0)\r\n                .reduce((total, current) => total + current, 0)\r\n            : 0;\r\n        return (React.createElement(\"section\", { className: \"section-result\" }, this.props.isSearching ?\r\n            React.createElement(\"p\", null,\r\n                \"Searching for \",\r\n                React.createElement(\"strong\", null, this.props.term),\r\n                \"...\")\r\n            : React.createElement(\"div\", null,\r\n                React.createElement(ResultHeading_1.ResultHeadingComponent, { term: this.props.term, count: count }),\r\n                this.props.results && this.props.results.length > 0\r\n                    ? React.createElement(ResultList_1.ResultListComponent, { results: this.props.results })\r\n                    : null)));\r\n    }\r\n}\r\nexports.ResultSectionComponent = ResultSectionComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRTZWN0aW9uLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRTZWN0aW9uLnRzeD9jZjU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVJlc3VsdFByb3BzIH0gZnJvbSBcIi4vUmVzdWx0XCI7XG5pbXBvcnQgeyBSZXN1bHRIZWFkaW5nQ29tcG9uZW50IGFzIFJlc3VsdEhlYWRpbmcgfSBmcm9tIFwiLi9SZXN1bHRIZWFkaW5nXCI7XG5pbXBvcnQgeyBSZXN1bHRMaXN0Q29tcG9uZW50IGFzIFJlc3VsdExpc3QgfSBmcm9tIFwiLi9SZXN1bHRMaXN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdFNlY3Rpb25Qcm9wcyB7XG4gICAgdGVybTogc3RyaW5nO1xuICAgIGlzU2VhcmNoaW5nOiBib29sZWFuO1xuICAgIHJlc3VsdHM6IElSZXN1bHRQcm9wc1tdO1xufVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0U2VjdGlvbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUmVzdWx0U2VjdGlvblByb3BzLCBhbnk+IHtcblxuICAgIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnByb3BzLnJlc3VsdHNcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5yZXN1bHRzXG4gICAgICAgICAgICAgICAgLm1hcCgocmVzdWx0KSA9PiByZXN1bHQgPyByZXN1bHQuY291bnQgOiAwKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbCArIGN1cnJlbnQsIDApXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzU2VhcmNoaW5nID9cbiAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoaW5nIGZvciA8c3Ryb25nPnt0aGlzLnByb3BzLnRlcm19PC9zdHJvbmc+Li4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzdWx0SGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm09e3RoaXMucHJvcHMudGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmVzdWx0cyAmJiB0aGlzLnByb3BzLnJlc3VsdHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPFJlc3VsdExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cz17dGhpcy5wcm9wcy5yZXN1bHRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBS0E7QUFFQTtBQTVCQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Components/ResultSection.tsx\n");

/***/ }),

/***/ "./src/ts/Components/SearchForm.tsx":
/*!******************************************!*\
  !*** ./src/ts/Components/SearchForm.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass SearchFormComponent extends React.Component {\r\n    constructor(props, context) {\r\n        super(props, context);\r\n        this.handleSubmit = (event) => {\r\n            event.preventDefault();\r\n            event.stopPropagation();\r\n            this.props.onSearch(this.state.term);\r\n            this.setState({\r\n                term: \"\",\r\n            });\r\n        };\r\n        this.handleChange = (event) => {\r\n            this.setState({\r\n                term: event.target.value,\r\n            });\r\n        };\r\n        this.state = {\r\n            term: \"\",\r\n        };\r\n    }\r\n    render() {\r\n        return (React.createElement(\"form\", { onSubmit: this.handleSubmit },\r\n            React.createElement(\"div\", { className: \"form-group\" },\r\n                React.createElement(\"input\", { type: \"text\", className: \"form-control\", placeholder: \"Search content...\", value: this.state.term, onChange: this.handleChange, disabled: this.props.isDisabled })),\r\n            React.createElement(\"button\", { type: \"submit\", className: \"btn btn-primary\", disabled: this.props.isDisabled || !this.state.term }, \"Search\")));\r\n    }\r\n}\r\nexports.SearchFormComponent = SearchFormComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9TZWFyY2hGb3JtLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9TZWFyY2hGb3JtLnRzeD81MTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hGb3JtUHJvcHMge1xuICAgIG9uU2VhcmNoOiAodGVybTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaEZvcm1TdGF0ZSB7XG4gICAgdGVybTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoRm9ybUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU2VhcmNoRm9ybVByb3BzLCBJU2VhcmNoRm9ybVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVNlYXJjaEZvcm1Qcm9wcywgY29udGV4dD86IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlcm06IFwiXCIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY29udGVudC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0Rpc2FibGVkIHx8ICF0aGlzLnN0YXRlLnRlcm19PlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh0aGlzLnN0YXRlLnRlcm0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlcm06IFwiXCIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlcm06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFXQTtBQUVBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBR0E7QUFpQkE7QUEzQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Components/SearchForm.tsx\n");

/***/ }),

/***/ "./src/ts/Components/SearchSection.tsx":
/*!*********************************************!*\
  !*** ./src/ts/Components/SearchSection.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst SearchForm_1 = __webpack_require__(/*! ./SearchForm */ \"./src/ts/Components/SearchForm.tsx\");\r\nclass SearchSectionComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"section\", { className: \"section-search\" },\r\n            React.createElement(SearchForm_1.SearchFormComponent, { onSearch: this.props.onSearch, isDisabled: this.props.isDisabled })));\r\n    }\r\n}\r\nexports.SearchSectionComponent = SearchSectionComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ29tcG9uZW50cy9TZWFyY2hTZWN0aW9uLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9TZWFyY2hTZWN0aW9uLnRzeD81YWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VhcmNoRm9ybUNvbXBvbmVudCBhcyBTZWFyY2hGb3JtIH0gZnJvbSBcIi4vU2VhcmNoRm9ybVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hTZWN0aW9uUHJvcHMge1xuICAgIG9uU2VhcmNoOiAodGVybTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElTZWFyY2hTZWN0aW9uUHJvcHMsIGFueT4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybVxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5wcm9wcy5vblNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17dGhpcy5wcm9wcy5pc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQWJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Components/SearchSection.tsx\n");

/***/ }),

/***/ "./src/ts/Search.ts":
/*!**************************!*\
  !*** ./src/ts/Search.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ./Utils */ \"./src/ts/Utils.ts\");\r\nfunction search(term, streamers) {\r\n    const searchTerm = Utils_1.trim(term);\r\n    if (!searchTerm) {\r\n        return Promise.reject(\"No search term!\");\r\n    }\r\n    return Promise.all(streamers.map((streamer) => streamer.search(searchTerm)));\r\n}\r\nexports.search = search;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2VhcmNoLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90cy9TZWFyY2gudHM/YWI4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lcnMvU3RyZWFtZXJcIjtcbmltcG9ydCB7IHRyaW0gfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hSZXN1bHQge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBocmVmOiBzdHJpbmc7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaCh0ZXJtOiBzdHJpbmcsIHN0cmVhbWVyczogSVN0cmVhbWVyW10pOiBQcm9taXNlPElTZWFyY2hSZXN1bHRbXT4ge1xuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSB0cmltKHRlcm0pO1xuICAgIGlmICghc2VhcmNoVGVybSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBzZWFyY2ggdGVybSFcIik7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChzdHJlYW1lcnMubWFwKChzdHJlYW1lcikgPT4gc3RyZWFtZXIuc2VhcmNoKHNlYXJjaFRlcm0pKSk7XG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Search.ts\n");

/***/ }),

/***/ "./src/ts/Streamers/SfAnytimeStreamer.ts":
/*!***********************************************!*\
  !*** ./src/ts/Streamers/SfAnytimeStreamer.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ../Utils */ \"./src/ts/Utils.ts\");\r\nclass SfAnytimeStreamer {\r\n    constructor() {\r\n        this.name = \"SF Anytime\";\r\n        this.href = \"https://www.sfanytime.com/sv\";\r\n    }\r\n    search(term) {\r\n        const param = Utils_1.toParam({\r\n            query: term,\r\n        });\r\n        const data = `{\"requests\":[{\"indexName\":\"prod_sfanytime_movies\",\"params\":\"${param}&numericFilters=adult%3D0%2C%20available_in_se%3D1&hitsPerPage=60&maxValuesPerFacet=3&page=0&attributesToRetrieve=mediaid%2Cproducttype%2Cproducttypeid%2Ctitle%2Ctitle_sv%2Ctitle_no%2Ctitle_da%2Ctitle_fi%2Ccover_id%2Ccover_no%2Ccover_sv%2Ccover_da%2Ccover_fi&distinct=true&facets=%5B%5D&tagFilters=\"}]}`;\r\n        return Utils_1.postJson(SfAnytimeStreamer.url, data)\r\n            .then((json) => {\r\n            const count = json &&\r\n                json.results &&\r\n                json.results[0] &&\r\n                json.results[0].nbHits\r\n                ? json.results[0].nbHits\r\n                : 0;\r\n            return {\r\n                count,\r\n                href: this.href,\r\n                name: this.name,\r\n            };\r\n        }, (reason) => {\r\n            return {\r\n                count: 0,\r\n                error: reason,\r\n                href: this.href,\r\n                name: this.name,\r\n            };\r\n        });\r\n    }\r\n}\r\nSfAnytimeStreamer.url = \"https://e38fd90mob-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.21.1%3Binstantsearch.js%201.11.7%3BJS%20Helper%202.19.0&x-algolia-application-id=E38FD90MOB&x-algolia-api-key=3f56a452156f1a76c8939af1798a2335\";\r\nexports.SfAnytimeStreamer = SfAnytimeStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU3RyZWFtZXJzL1NmQW55dGltZVN0cmVhbWVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90cy9TdHJlYW1lcnMvU2ZBbnl0aW1lU3RyZWFtZXIudHM/MjE1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4uL1NlYXJjaFwiO1xuaW1wb3J0IHsgcG9zdEpzb24sIHRvUGFyYW0gfSBmcm9tIFwiLi4vVXRpbHNcIjtcbmltcG9ydCB7IElTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVyXCI7XG5cbi8qKlxuICogU2FtcGxlIFVSTDsgaHR0cHM6Ly9lMzhmZDkwbW9iLWRzbi5hbGdvbGlhLm5ldC8xL2luZGV4ZXMvL3F1ZXJpZXM/eC1hbGdvbGlhLWFnZW50PUFsZ29saWElMjBmb3IlMjB2YW5pbGxhJTIwSmF2YVNjcmlwdCUyMChsaXRlKSUyMDMuMjEuMSUzQmluc3RhbnRzZWFyY2guanMlMjAxLjExLjclM0JKUyUyMEhlbHBlciUyMDIuMTkuMCZ4LWFsZ29saWEtYXBwbGljYXRpb24taWQ9RTM4RkQ5ME1PQiZ4LWFsZ29saWEtYXBpLWtleT0zZjU2YTQ1MjE1NmYxYTc2Yzg5MzlhZjE3OThhMjMzNVxuICovXG5leHBvcnQgY2xhc3MgU2ZBbnl0aW1lU3RyZWFtZXIgaW1wbGVtZW50cyBJU3RyZWFtZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdXJsID0gXCJodHRwczovL2UzOGZkOTBtb2ItZHNuLmFsZ29saWEubmV0LzEvaW5kZXhlcy8qL3F1ZXJpZXM/eC1hbGdvbGlhLWFnZW50PUFsZ29saWElMjBmb3IlMjB2YW5pbGxhJTIwSmF2YVNjcmlwdCUyMChsaXRlKSUyMDMuMjEuMSUzQmluc3RhbnRzZWFyY2guanMlMjAxLjExLjclM0JKUyUyMEhlbHBlciUyMDIuMTkuMCZ4LWFsZ29saWEtYXBwbGljYXRpb24taWQ9RTM4RkQ5ME1PQiZ4LWFsZ29saWEtYXBpLWtleT0zZjU2YTQ1MjE1NmYxYTc2Yzg5MzlhZjE3OThhMjMzNVwiO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBcIlNGIEFueXRpbWVcIjtcblxuICAgIHB1YmxpYyByZWFkb25seSBocmVmID0gXCJodHRwczovL3d3dy5zZmFueXRpbWUuY29tL3N2XCI7XG5cbiAgICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZyk6IFByb21pc2U8SVNlYXJjaFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBwYXJhbSA9IHRvUGFyYW0oe1xuICAgICAgICAgICAgcXVlcnk6IHRlcm0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYHtcInJlcXVlc3RzXCI6W3tcImluZGV4TmFtZVwiOlwicHJvZF9zZmFueXRpbWVfbW92aWVzXCIsXCJwYXJhbXNcIjpcIiR7cGFyYW19Jm51bWVyaWNGaWx0ZXJzPWFkdWx0JTNEMCUyQyUyMGF2YWlsYWJsZV9pbl9zZSUzRDEmaGl0c1BlclBhZ2U9NjAmbWF4VmFsdWVzUGVyRmFjZXQ9MyZwYWdlPTAmYXR0cmlidXRlc1RvUmV0cmlldmU9bWVkaWFpZCUyQ3Byb2R1Y3R0eXBlJTJDcHJvZHVjdHR5cGVpZCUyQ3RpdGxlJTJDdGl0bGVfc3YlMkN0aXRsZV9ubyUyQ3RpdGxlX2RhJTJDdGl0bGVfZmklMkNjb3Zlcl9pZCUyQ2NvdmVyX25vJTJDY292ZXJfc3YlMkNjb3Zlcl9kYSUyQ2NvdmVyX2ZpJmRpc3RpbmN0PXRydWUmZmFjZXRzPSU1QiU1RCZ0YWdGaWx0ZXJzPVwifV19YDtcbiAgICAgICAgcmV0dXJuIHBvc3RKc29uKFNmQW55dGltZVN0cmVhbWVyLnVybCwgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKChqc29uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGpzb24gJiZcbiAgICAgICAgICAgICAgICAgICAganNvbi5yZXN1bHRzICYmXG4gICAgICAgICAgICAgICAgICAgIGpzb24ucmVzdWx0c1swXSAmJlxuICAgICAgICAgICAgICAgICAgICBqc29uLnJlc3VsdHNbMF0ubmJIaXRzXG4gICAgICAgICAgICAgICAgICAgID8ganNvbi5yZXN1bHRzWzBdLm5iSGl0c1xuICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHJlYXNvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiByZWFzb24sXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQU1BO0FBQUE7QUFJQTtBQUVBO0FBK0JBO0FBN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqQ0E7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Streamers/SfAnytimeStreamer.ts\n");

/***/ }),

/***/ "./src/ts/Streamers/SvtPlayStreamer.ts":
/*!*********************************************!*\
  !*** ./src/ts/Streamers/SvtPlayStreamer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ../Utils */ \"./src/ts/Utils.ts\");\r\nclass SvtPlayStreamer {\r\n    constructor() {\r\n        this.name = \"SVT Play\";\r\n        this.href = \"https://www.svtplay.se/\";\r\n    }\r\n    search(term) {\r\n        const param = Utils_1.toParam({\r\n            q: term,\r\n        });\r\n        return Utils_1.getJson(`${SvtPlayStreamer.url}?${param}`, true)\r\n            .then((jsonString) => {\r\n            const json = JSON.parse(jsonString);\r\n            const count = json && json.totalResults\r\n                ? json.totalResults\r\n                : 0;\r\n            return {\r\n                count,\r\n                href: this.href,\r\n                name: this.name,\r\n            };\r\n        }, (reason) => {\r\n            return {\r\n                count: 0,\r\n                error: reason,\r\n                href: this.href,\r\n                name: this.name,\r\n            };\r\n        });\r\n    }\r\n}\r\nSvtPlayStreamer.url = \"https://www.svtplay.se/api/search\";\r\nexports.SvtPlayStreamer = SvtPlayStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU3RyZWFtZXJzL1N2dFBsYXlTdHJlYW1lci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvU3RyZWFtZXJzL1N2dFBsYXlTdHJlYW1lci50cz9hNThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vU2VhcmNoXCI7XG5pbXBvcnQgeyBnZXRKc29uLCB0b1BhcmFtIH0gZnJvbSBcIi4uL1V0aWxzXCI7XG5pbXBvcnQgeyBJU3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lclwiO1xuXG4vKipcbiAqIFNhbXBsZSBVUkw7IGh0dHBzOi8vd3d3LnN2dHBsYXkuc2UvYXBpL3NlYXJjaD9xPW15c2VhcmNodGVybVxuICovXG5leHBvcnQgY2xhc3MgU3Z0UGxheVN0cmVhbWVyIGltcGxlbWVudHMgSVN0cmVhbWVyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHVybCA9IFwiaHR0cHM6Ly93d3cuc3Z0cGxheS5zZS9hcGkvc2VhcmNoXCI7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFwiU1ZUIFBsYXlcIjtcblxuICAgIHB1YmxpYyByZWFkb25seSBocmVmID0gXCJodHRwczovL3d3dy5zdnRwbGF5LnNlL1wiO1xuXG4gICAgcHVibGljIHNlYXJjaCh0ZXJtOiBzdHJpbmcpOiBQcm9taXNlPElTZWFyY2hSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgcGFyYW0gPSB0b1BhcmFtKHtcbiAgICAgICAgICAgIHE6IHRlcm0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ2V0SnNvbihgJHtTdnRQbGF5U3RyZWFtZXIudXJsfT8ke3BhcmFtfWAsIHRydWUpXG4gICAgICAgICAgICAudGhlbigoanNvblN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBqc29uICYmIGpzb24udG90YWxSZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgID8ganNvbi50b3RhbFJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChyZWFzb246IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogcmVhc29uLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFNQTtBQUFBO0FBSUE7QUFFQTtBQTRCQTtBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOUJBO0FBRkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Streamers/SvtPlayStreamer.ts\n");

/***/ }),

/***/ "./src/ts/Streamers/ViaplayStreamer.ts":
/*!*********************************************!*\
  !*** ./src/ts/Streamers/ViaplayStreamer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ../Utils */ \"./src/ts/Utils.ts\");\r\nclass ViaplayStreamer {\r\n    constructor() {\r\n        this.name = \"Viaplay\";\r\n        this.href = \"https://viaplay.se/\";\r\n    }\r\n    search(term) {\r\n        const param = Utils_1.toParam({\r\n            query: term,\r\n        });\r\n        return Utils_1.getJson(`${ViaplayStreamer.url}?${param}`)\r\n            .then((json) => {\r\n            const count = json &&\r\n                json._embedded &&\r\n                json._embedded[\"viaplay:blocks\"] &&\r\n                json._embedded[\"viaplay:blocks\"][0] &&\r\n                json._embedded[\"viaplay:blocks\"][0].totalProductCount\r\n                ? json._embedded[\"viaplay:blocks\"][0].totalProductCount\r\n                : 0;\r\n            return {\r\n                count,\r\n                href: this.href,\r\n                name: this.name,\r\n            };\r\n        }, (reason) => {\r\n            return {\r\n                count: 0,\r\n                error: reason,\r\n                href: this.href,\r\n                name: this.name,\r\n            };\r\n        });\r\n    }\r\n}\r\nViaplayStreamer.url = \"https://content.viaplay.se/pcdash-se/search\";\r\nexports.ViaplayStreamer = ViaplayStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU3RyZWFtZXJzL1ZpYXBsYXlTdHJlYW1lci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvU3RyZWFtZXJzL1ZpYXBsYXlTdHJlYW1lci50cz8zOTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vU2VhcmNoXCI7XG5pbXBvcnQgeyBnZXRKc29uLCB0b1BhcmFtIH0gZnJvbSBcIi4uL1V0aWxzXCI7XG5pbXBvcnQgeyBJU3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lclwiO1xuXG4vKipcbiAqIFNhbXBsZSBVUkw7IGh0dHBzOi8vY29udGVudC52aWFwbGF5LnNlL3BjZGFzaC1zZS9zZWFyY2g/cXVlcnk9bXlzZWFyY2h0ZXJtXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWFwbGF5U3RyZWFtZXIgaW1wbGVtZW50cyBJU3RyZWFtZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdXJsID0gXCJodHRwczovL2NvbnRlbnQudmlhcGxheS5zZS9wY2Rhc2gtc2Uvc2VhcmNoXCI7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFwiVmlhcGxheVwiO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGhyZWYgPSBcImh0dHBzOi8vdmlhcGxheS5zZS9cIjtcblxuICAgIHB1YmxpYyBzZWFyY2godGVybTogc3RyaW5nKTogUHJvbWlzZTxJU2VhcmNoUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtID0gdG9QYXJhbSh7XG4gICAgICAgICAgICBxdWVyeTogdGVybSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBnZXRKc29uKGAke1ZpYXBsYXlTdHJlYW1lci51cmx9PyR7cGFyYW19YClcbiAgICAgICAgICAgIC50aGVuKChqc29uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGpzb24gJiZcbiAgICAgICAgICAgICAgICAgICAganNvbi5fZW1iZWRkZWQgJiZcbiAgICAgICAgICAgICAgICAgICAganNvbi5fZW1iZWRkZWRbXCJ2aWFwbGF5OmJsb2Nrc1wiXSAmJlxuICAgICAgICAgICAgICAgICAgICBqc29uLl9lbWJlZGRlZFtcInZpYXBsYXk6YmxvY2tzXCJdWzBdICYmXG4gICAgICAgICAgICAgICAgICAgIGpzb24uX2VtYmVkZGVkW1widmlhcGxheTpibG9ja3NcIl1bMF0udG90YWxQcm9kdWN0Q291bnRcbiAgICAgICAgICAgICAgICAgICAgPyBqc29uLl9lbWJlZGRlZFtcInZpYXBsYXk6YmxvY2tzXCJdWzBdLnRvdGFsUHJvZHVjdENvdW50XG4gICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdGhpcy5ocmVmLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAocmVhc29uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHJlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogdGhpcy5ocmVmLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufVxuIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBTUE7QUFBQTtBQUlBO0FBRUE7QUErQkE7QUE3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWpDQTtBQUZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Streamers/ViaplayStreamer.ts\n");

/***/ }),

/***/ "./src/ts/Utils.ts":
/*!*************************!*\
  !*** ./src/ts/Utils.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jQuery = __webpack_require__(/*! jquery */ \"jquery\");\r\nexports.corsProxyUrl = \"https://cors.io/?\";\r\nfunction getJson(url, useCorsProxy = false) {\r\n    return new Promise((resolve, reject) => {\r\n        return jQuery\r\n            .ajax({\r\n            method: \"get\",\r\n            url: useCorsProxy ? `${exports.corsProxyUrl}${url}` : url,\r\n        })\r\n            .done((json) => {\r\n            resolve(json);\r\n        })\r\n            .fail((jqXHR) => {\r\n            reject(jqXHR && jqXHR.responseText ? jqXHR.responseText : \"error\");\r\n        });\r\n    });\r\n}\r\nexports.getJson = getJson;\r\nfunction postJson(url, data) {\r\n    return new Promise((resolve, reject) => {\r\n        return jQuery\r\n            .ajax({\r\n            data,\r\n            method: \"post\",\r\n            url,\r\n        })\r\n            .done((json) => {\r\n            resolve(json);\r\n        })\r\n            .fail((jqXHR) => {\r\n            reject(jqXHR && jqXHR.responseText ? jqXHR.responseText : \"error\");\r\n        });\r\n    });\r\n}\r\nexports.postJson = postJson;\r\nfunction toParam(param) {\r\n    return jQuery.param(param);\r\n}\r\nexports.toParam = toParam;\r\nfunction trim(value) {\r\n    return jQuery.trim(value);\r\n}\r\nexports.trim = trim;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvVXRpbHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL1V0aWxzLnRzP2I3ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcblxuZXhwb3J0IGNvbnN0IGNvcnNQcm94eVVybCA9IFwiaHR0cHM6Ly9jb3JzLmlvLz9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEpzb24odXJsOiBzdHJpbmcsIHVzZUNvcnNQcm94eSA9IGZhbHNlKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4galF1ZXJ5XG4gICAgICAgICAgICAuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgICAgIHVybDogdXNlQ29yc1Byb3h5ID8gYCR7Y29yc1Byb3h5VXJsfSR7dXJsfWAgOiB1cmwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRvbmUoKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb24pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mYWlsKChqcVhIUikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChqcVhIUiAmJiBqcVhIUi5yZXNwb25zZVRleHQgPyBqcVhIUi5yZXNwb25zZVRleHQgOiBcImVycm9yXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0SnNvbih1cmw6IHN0cmluZywgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4galF1ZXJ5XG4gICAgICAgICAgICAuYWpheCh7XG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZG9uZSgoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoKGpxWEhSKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGpxWEhSICYmIGpxWEhSLnJlc3BvbnNlVGV4dCA/IGpxWEhSLnJlc3BvbnNlVGV4dCA6IFwiZXJyb3JcIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUGFyYW0ocGFyYW06IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGpRdWVyeS5wYXJhbShwYXJhbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmltKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBqUXVlcnkudHJpbSh2YWx1ZSk7XG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Utils.ts\n");

/***/ }),

/***/ "./src/ts/index.tsx":
/*!**************************!*\
  !*** ./src/ts/index.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jQuery = __webpack_require__(/*! jquery */ \"jquery\");\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nconst App_1 = __webpack_require__(/*! ./Components/App */ \"./src/ts/Components/App.tsx\");\r\nconst Search_1 = __webpack_require__(/*! ./Search */ \"./src/ts/Search.ts\");\r\nconst SfAnytimeStreamer_1 = __webpack_require__(/*! ./Streamers/SfAnytimeStreamer */ \"./src/ts/Streamers/SfAnytimeStreamer.ts\");\r\nconst SvtPlayStreamer_1 = __webpack_require__(/*! ./Streamers/SvtPlayStreamer */ \"./src/ts/Streamers/SvtPlayStreamer.ts\");\r\nconst ViaplayStreamer_1 = __webpack_require__(/*! ./Streamers/ViaplayStreamer */ \"./src/ts/Streamers/ViaplayStreamer.ts\");\r\njQuery(document).ready(() => {\r\n    const streamers = [\r\n        new ViaplayStreamer_1.ViaplayStreamer(),\r\n        new SvtPlayStreamer_1.SvtPlayStreamer(),\r\n        new SfAnytimeStreamer_1.SfAnytimeStreamer(),\r\n    ];\r\n    const onSearch = (term) => {\r\n        return Search_1.search(term, streamers);\r\n    };\r\n    ReactDOM.render(React.createElement(App_1.AppComponent, { onSearch: onSearch }), document.getElementById(\"react-root\"));\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90cy9pbmRleC50c3g/YjE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgYXMgQXBwIH0gZnJvbSBcIi4vQ29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCB7IHNlYXJjaCB9IGZyb20gXCIuL1NlYXJjaFwiO1xuaW1wb3J0IHsgU2ZBbnl0aW1lU3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lcnMvU2ZBbnl0aW1lU3RyZWFtZXJcIjtcbmltcG9ydCB7IFN2dFBsYXlTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVycy9TdnRQbGF5U3RyZWFtZXJcIjtcbmltcG9ydCB7IFZpYXBsYXlTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVycy9WaWFwbGF5U3RyZWFtZXJcIjtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgY29uc3Qgc3RyZWFtZXJzID0gW1xuICAgICAgICBuZXcgVmlhcGxheVN0cmVhbWVyKCksXG4gICAgICAgIG5ldyBTdnRQbGF5U3RyZWFtZXIoKSxcbiAgICAgICAgbmV3IFNmQW55dGltZVN0cmVhbWVyKCksXG4gICAgXTtcbiAgICBjb25zdCBvblNlYXJjaCA9ICh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHNlYXJjaCh0ZXJtLCBzdHJlYW1lcnMpO1xuICAgIH07XG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHAgb25TZWFyY2g9e29uU2VhcmNofSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFjdC1yb290XCIpKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/index.tsx\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCI/Y2QwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiP2M0ODEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIj80YjJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ })

/******/ });