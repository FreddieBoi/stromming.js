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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = React;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCI/OWRlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = jQuery;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiPzBjYjgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************!*\
  !*** ./src/ts/Utils.ts ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jQuery = __webpack_require__(/*! jquery */ 1);\r\nexports.corsProxyUrl = \"https://cors.io/?\";\r\nfunction getJson(url, useCorsProxy = false) {\r\n    return jQuery.ajax({\r\n        method: \"get\",\r\n        url: useCorsProxy ? `${exports.corsProxyUrl}${url}` : url,\r\n        async: false\r\n    });\r\n}\r\nexports.getJson = getJson;\r\nfunction postJson(url, data) {\r\n    return jQuery.ajax({\r\n        method: \"post\",\r\n        url: url,\r\n        data: data,\r\n        async: false\r\n    });\r\n}\r\nexports.postJson = postJson;\r\nfunction toParam(param) {\r\n    return jQuery.param(param);\r\n}\r\nexports.toParam = toParam;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvVXRpbHMudHM/ZjVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IHZhciBjb3JzUHJveHlVcmwgPSBcImh0dHBzOi8vY29ycy5pby8/XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SnNvbih1cmw6IHN0cmluZywgdXNlQ29yc1Byb3h5ID0gZmFsc2UpOiBKUXVlcnlYSFIge1xyXG4gICAgcmV0dXJuIGpRdWVyeS5hamF4KHtcclxuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgICAgdXJsOiB1c2VDb3JzUHJveHkgPyBgJHtjb3JzUHJveHlVcmx9JHt1cmx9YCA6IHVybCxcclxuICAgICAgICBhc3luYzogZmFsc2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdEpzb24odXJsOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IEpRdWVyeVhIUiB7XHJcbiAgICByZXR1cm4galF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBhc3luYzogZmFsc2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9QYXJhbShwYXJhbTogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBqUXVlcnkucGFyYW0ocGFyYW0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvVXRpbHMudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************!*\
  !*** ./src/ts/index.tsx ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jQuery = __webpack_require__(/*! jquery */ 1);\r\nconst React = __webpack_require__(/*! react */ 0);\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ 4);\r\nconst App_1 = __webpack_require__(/*! ./Components/App */ 5);\r\nconst ViaplayStreamer_1 = __webpack_require__(/*! ./Streamers/ViaplayStreamer */ 14);\r\nconst SvtPlayStreamer_1 = __webpack_require__(/*! ./Streamers/SvtPlayStreamer */ 15);\r\nconst SfAnytimeStreamer_1 = __webpack_require__(/*! ./Streamers/SfAnytimeStreamer */ 16);\r\nconst Search_1 = __webpack_require__(/*! ./Search */ 17);\r\njQuery(document).ready(() => {\r\n    let streamers = [\r\n        new ViaplayStreamer_1.ViaplayStreamer(),\r\n        new SvtPlayStreamer_1.SvtPlayStreamer(),\r\n        new SfAnytimeStreamer_1.SfAnytimeStreamer()\r\n    ];\r\n    let onSearch = (term) => {\r\n        return Search_1.search(term, streamers);\r\n    };\r\n    ReactDOM.render(React.createElement(App_1.AppComponent, { onSearch: onSearch }), document.getElementById(\"react-root\"));\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvaW5kZXgudHN4PzAzNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IGFzIEFwcCB9IGZyb20gXCIuL0NvbXBvbmVudHMvQXBwXCI7XHJcbmltcG9ydCB7IFZpYXBsYXlTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVycy9WaWFwbGF5U3RyZWFtZXJcIjtcclxuaW1wb3J0IHsgU3Z0UGxheVN0cmVhbWVyIH0gZnJvbSBcIi4vU3RyZWFtZXJzL1N2dFBsYXlTdHJlYW1lclwiO1xyXG5pbXBvcnQgeyBTZkFueXRpbWVTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVycy9TZkFueXRpbWVTdHJlYW1lclwiO1xyXG5pbXBvcnQgeyBzZWFyY2ggfSBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgbGV0IHN0cmVhbWVycyA9IFtcclxuICAgICAgICBuZXcgVmlhcGxheVN0cmVhbWVyKCksXHJcbiAgICAgICAgbmV3IFN2dFBsYXlTdHJlYW1lcigpLFxyXG4gICAgICAgIG5ldyBTZkFueXRpbWVTdHJlYW1lcigpXHJcbiAgICBdO1xyXG4gICAgbGV0IG9uU2VhcmNoID0gKHRlcm06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBzZWFyY2godGVybSwgc3RyZWFtZXJzKTtcclxuICAgIH07XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPEFwcCBvblNlYXJjaD17b25TZWFyY2h9IC8+LFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhY3Qtcm9vdFwiKVxyXG4gICAgKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvaW5kZXgudHN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCI/NGFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***********************************!*\
  !*** ./src/ts/Components/App.tsx ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nconst Header_1 = __webpack_require__(/*! ./Header */ 6);\r\nconst SearchSection_1 = __webpack_require__(/*! ./SearchSection */ 7);\r\nconst ResultSection_1 = __webpack_require__(/*! ./ResultSection */ 9);\r\nconst Footer_1 = __webpack_require__(/*! ./Footer */ 13);\r\nclass AppComponent extends React.Component {\r\n    constructor(props, context) {\r\n        super(props, context);\r\n        this.state = {\r\n            term: \"\",\r\n            results: []\r\n        };\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", { className: \"container-fluid\" },\r\n            React.createElement(Header_1.HeaderComponent, null),\r\n            React.createElement(SearchSection_1.SearchSectionComponent, { onSearch: this.handleSearch.bind(this) }),\r\n            this.state.term && this.state.results && this.state.results.length > 0\r\n                ? React.createElement(ResultSection_1.ResultSectionComponent, { term: this.state.term, results: this.state.results })\r\n                : null,\r\n            React.createElement(Footer_1.FooterComponent, null)));\r\n    }\r\n    handleSearch(term) {\r\n        const results = this.props.onSearch(term)\r\n            .filter((result) => {\r\n            return result && result.count;\r\n        })\r\n            .sort((a, b) => {\r\n            return a && b\r\n                ? b.count - a.count\r\n                : 0;\r\n        });\r\n        this.setState({\r\n            term: term,\r\n            results: results\r\n        });\r\n    }\r\n}\r\nexports.AppComponent = AppComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9BcHAudHN4PzE1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCBhcyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgU2VhcmNoU2VjdGlvbkNvbXBvbmVudCBhcyBTZWFyY2hTZWN0aW9uIH0gZnJvbSBcIi4vU2VhcmNoU2VjdGlvblwiO1xyXG5pbXBvcnQgeyBSZXN1bHRTZWN0aW9uQ29tcG9uZW50IGFzIFJlc3VsdFNlY3Rpb24gfSBmcm9tIFwiLi9SZXN1bHRTZWN0aW9uXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCBhcyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IHsgSVJlc3VsdFByb3BzIH0gZnJvbSBcIi4vUmVzdWx0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBQcm9wcyB7XHJcbiAgICBvblNlYXJjaDogKHRlcm06IHN0cmluZykgPT4gSVJlc3VsdFByb3BzW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFN0YXRlIHtcclxuICAgIHRlcm06IHN0cmluZztcclxuICAgIHJlc3VsdHM6IElSZXN1bHRQcm9wc1tdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElBcHBQcm9wcywgSUFwcFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dD86IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGVybTogXCJcIixcclxuICAgICAgICAgICAgcmVzdWx0czogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoU2VjdGlvbiBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRlcm0gJiYgdGhpcy5zdGF0ZS5yZXN1bHRzICYmIHRoaXMuc3RhdGUucmVzdWx0cy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8UmVzdWx0U2VjdGlvbiB0ZXJtPXt0aGlzLnN0YXRlLnRlcm19IHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gLz5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTZWFyY2godGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucHJvcHMub25TZWFyY2godGVybSlcclxuICAgICAgICAgICAgLmZpbHRlcigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHNob3cgcmVzdWx0cyB3aXRoIG1hdGNoZXNcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0LmNvdW50O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyByZXN1bHQgd2l0aCBtb3N0IG1hdGNoZXMgZmlyc3RcclxuICAgICAgICAgICAgICAgIHJldHVybiBhICYmIGJcclxuICAgICAgICAgICAgICAgICAgICA/IGIuY291bnQgLSBhLmNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGVybTogdGVybSxcclxuICAgICAgICAgICAgcmVzdWx0czogcmVzdWx0c1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RzL0NvbXBvbmVudHMvQXBwLnRzeCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************!*\
  !*** ./src/ts/Components/Header.tsx ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nclass HeaderComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"header\", null,\r\n            React.createElement(\"h1\", null, \"Stromming\"),\r\n            React.createElement(\"p\", { className: \"lead\" }, \"Str\\u00F6mming (or more internationally Stromming) is a simple application to use when you want to find what streaming services have the content you want to watch.\")));\r\n    }\r\n}\r\nexports.HeaderComponent = HeaderComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9IZWFkZXIudHN4P2IxN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+U3Ryb21taW5nPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBTdHLDtm1taW5nIChvciBtb3JlIGludGVybmF0aW9uYWxseSBTdHJvbW1pbmcpIGlzIGEgc2ltcGxlIGFwcGxpY2F0aW9uIHRvIHVzZSB3aGVuIHlvdSB3YW50IHRvIGZpbmRcclxuICAgICAgICAgICAgICAgICAgICB3aGF0IHN0cmVhbWluZyBzZXJ2aWNlcyBoYXZlIHRoZSBjb250ZW50IHlvdSB3YW50IHRvIHdhdGNoLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RzL0NvbXBvbmVudHMvSGVhZGVyLnRzeCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBZEE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************!*\
  !*** ./src/ts/Components/SearchSection.tsx ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nconst SearchForm_1 = __webpack_require__(/*! ./SearchForm */ 8);\r\nclass SearchSectionComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"section\", { className: \"section-search\" },\r\n            React.createElement(SearchForm_1.SearchFormComponent, { onSearch: this.props.onSearch })));\r\n    }\r\n}\r\nexports.SearchSectionComponent = SearchSectionComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9TZWFyY2hTZWN0aW9uLnRzeD8zNTg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJU2VhcmNoRm9ybVByb3BzLCBTZWFyY2hGb3JtQ29tcG9uZW50IGFzIFNlYXJjaEZvcm0gfSBmcm9tIFwiLi9TZWFyY2hGb3JtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hTZWN0aW9uUHJvcHMge1xyXG4gICAgb25TZWFyY2g6ICh0ZXJtOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElTZWFyY2hTZWN0aW9uUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gb25TZWFyY2g9e3RoaXMucHJvcHMub25TZWFyY2h9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RzL0NvbXBvbmVudHMvU2VhcmNoU2VjdGlvbi50c3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQVZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************************!*\
  !*** ./src/ts/Components/SearchForm.tsx ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nclass SearchFormComponent extends React.Component {\r\n    constructor(props, context) {\r\n        super(props, context);\r\n        this.state = {\r\n            term: \"\"\r\n        };\r\n    }\r\n    render() {\r\n        return (React.createElement(\"form\", { className: \"form-inline\", onSubmit: this.handleSubmit.bind(this) },\r\n            React.createElement(\"div\", { className: \"form-group mr-2\" },\r\n                React.createElement(\"input\", { type: \"text\", className: \"form-control\", placeholder: \"Search content...\", value: this.state.term, onChange: this.handleChange.bind(this) })),\r\n            React.createElement(\"button\", { type: \"submit\", className: \"btn btn-primary\" }, \"Search\")));\r\n    }\r\n    handleSubmit(event) {\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n        this.props.onSearch(this.state.term);\r\n        this.setState({\r\n            term: \"\"\r\n        });\r\n    }\r\n    handleChange(event) {\r\n        this.setState({\r\n            term: event.target.value\r\n        });\r\n    }\r\n}\r\nexports.SearchFormComponent = SearchFormComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9TZWFyY2hGb3JtLnRzeD9jMGU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoRm9ybVByb3BzIHtcclxuICAgIG9uU2VhcmNoOiAodGVybTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hGb3JtU3RhdGUge1xyXG4gICAgdGVybTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRm9ybUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU2VhcmNoRm9ybVByb3BzLCBJU2VhcmNoRm9ybVN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElTZWFyY2hGb3JtUHJvcHMsIGNvbnRleHQ/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dClcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGVybTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGNvbnRlbnQuLi5cIiB2YWx1ZT17dGhpcy5zdGF0ZS50ZXJtfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaCh0aGlzLnN0YXRlLnRlcm0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0ZXJtOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRlcm06IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RzL0NvbXBvbmVudHMvU2VhcmNoRm9ybS50c3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFwQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************!*\
  !*** ./src/ts/Components/ResultSection.tsx ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nconst ResultList_1 = __webpack_require__(/*! ./ResultList */ 10);\r\nconst ResultHeading_1 = __webpack_require__(/*! ./ResultHeading */ 12);\r\nclass ResultSectionComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"section\", { className: \"section-result\" },\r\n            React.createElement(ResultHeading_1.ResultHeadingComponent, { term: this.props.term, count: this.props.results ? this.props.results.length : 0 }),\r\n            this.props.results && this.props.results.length > 0\r\n                ? React.createElement(ResultList_1.ResultListComponent, { results: this.props.results })\r\n                : null));\r\n    }\r\n}\r\nexports.ResultSectionComponent = ResultSectionComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRTZWN0aW9uLnRzeD84NGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUmVzdWx0UHJvcHMgfSBmcm9tIFwiLi9SZXN1bHRcIjtcclxuaW1wb3J0IHsgUmVzdWx0TGlzdENvbXBvbmVudCBhcyBSZXN1bHRMaXN0IH0gZnJvbSBcIi4vUmVzdWx0TGlzdFwiO1xyXG5pbXBvcnQgeyBSZXN1bHRIZWFkaW5nQ29tcG9uZW50IGFzIFJlc3VsdEhlYWRpbmcgfSBmcm9tIFwiLi9SZXN1bHRIZWFkaW5nXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bHRTZWN0aW9uUHJvcHMge1xyXG4gICAgdGVybTogc3RyaW5nO1xyXG4gICAgcmVzdWx0czogSVJlc3VsdFByb3BzW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRTZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSZXN1bHRTZWN0aW9uUHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgPFJlc3VsdEhlYWRpbmcgdGVybT17dGhpcy5wcm9wcy50ZXJtfSBjb3VudD17dGhpcy5wcm9wcy5yZXN1bHRzID8gdGhpcy5wcm9wcy5yZXN1bHRzLmxlbmd0aCA6IDB9IC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZXN1bHRzICYmIHRoaXMucHJvcHMucmVzdWx0cy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8UmVzdWx0TGlzdCByZXN1bHRzPXt0aGlzLnByb3BzLnJlc3VsdHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90cy9Db21wb25lbnRzL1Jlc3VsdFNlY3Rpb24udHN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQWJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!******************************************!*\
  !*** ./src/ts/Components/ResultList.tsx ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nconst Result_1 = __webpack_require__(/*! ./Result */ 11);\r\nclass ResultListComponent extends React.Component {\r\n    render() {\r\n        const results = this.props.results.map((result) => {\r\n            const key = `${result.name}-${result.count}`;\r\n            return React.createElement(Result_1.ResultComponent, { key: key, name: result.name, href: result.href, count: result.count });\r\n        });\r\n        return (React.createElement(\"ol\", { className: \"list-unstyled list-result\" }, results));\r\n    }\r\n}\r\nexports.ResultListComponent = ResultListComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL0NvbXBvbmVudHMvUmVzdWx0TGlzdC50c3g/Y2Y5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVJlc3VsdFByb3BzLCBSZXN1bHRDb21wb25lbnQgYXMgUmVzdWx0IH0gZnJvbSBcIi4vUmVzdWx0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bHRMaXN0UHJvcHMge1xyXG4gICAgcmVzdWx0czogSVJlc3VsdFByb3BzW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRMaXN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSZXN1bHRMaXN0UHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5wcm9wcy5yZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke3Jlc3VsdC5uYW1lfS0ke3Jlc3VsdC5jb3VudH1gO1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlc3VsdCBrZXk9e2tleX0gbmFtZT17cmVzdWx0Lm5hbWV9IGhyZWY9e3Jlc3VsdC5ocmVmfSBjb3VudD17cmVzdWx0LmNvdW50fSAvPjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBsaXN0LXJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdHN9XHJcbiAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90cy9Db21wb25lbnRzL1Jlc3VsdExpc3QudHN4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFkQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**************************************!*\
  !*** ./src/ts/Components/Result.tsx ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nclass ResultComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"li\", { className: \"result\" },\r\n            React.createElement(\"a\", { className: \"result-name\", href: this.props.href }, this.props.name),\r\n            \" has \",\r\n            React.createElement(\"strong\", { className: \"h4 result-count\" }, this.props.count),\r\n            \" content match\",\r\n            this.props.count === 1 ? \"\" : \"es\",\r\n            \"!\"));\r\n    }\r\n}\r\nexports.ResultComponent = ResultComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL0NvbXBvbmVudHMvUmVzdWx0LnRzeD9lMzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVzdWx0UHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUmVzdWx0UHJvcHMsIGFueT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVzdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXN1bHQtbmFtZVwiIGhyZWY9e3RoaXMucHJvcHMuaHJlZn0+e3RoaXMucHJvcHMubmFtZX08L2E+IGhhcyA8c3Ryb25nIGNsYXNzTmFtZT1cImg0IHJlc3VsdC1jb3VudFwiPnt0aGlzLnByb3BzLmNvdW50fTwvc3Ryb25nPiBjb250ZW50IG1hdGNoe3RoaXMucHJvcHMuY291bnQgPT09IDEgPyBcIlwiIDogXCJlc1wifSFcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RzL0NvbXBvbmVudHMvUmVzdWx0LnRzeCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUVBOztBQUFBOztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBVkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************!*\
  !*** ./src/ts/Components/ResultHeading.tsx ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nclass ResultHeadingComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"div\", null, this.props.count\r\n            ? React.createElement(\"span\", null,\r\n                \"Found \",\r\n                React.createElement(\"strong\", null, this.props.count),\r\n                \" content match\",\r\n                this.props.count == 1 ? \"\" : \"es\",\r\n                \" for \",\r\n                React.createElement(\"strong\", null, this.props.term),\r\n                \"! :D\")\r\n            : React.createElement(\"span\", null,\r\n                \"No content match for \",\r\n                React.createElement(\"strong\", null, this.props.term),\r\n                \" :(\")));\r\n    }\r\n}\r\nexports.ResultHeadingComponent = ResultHeadingComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL0NvbXBvbmVudHMvUmVzdWx0SGVhZGluZy50c3g/YjY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VsdEhlYWRpbmdQcm9wcyB7XHJcbiAgICB0ZXJtOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdWx0SGVhZGluZ0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUmVzdWx0SGVhZGluZ1Byb3BzLCBhbnk+IHtcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyA8c3Bhbj5Gb3VuZCA8c3Ryb25nPnt0aGlzLnByb3BzLmNvdW50fTwvc3Ryb25nPiBjb250ZW50IG1hdGNoe3RoaXMucHJvcHMuY291bnQgPT0gMSA/IFwiXCIgOiBcImVzXCJ9IGZvciA8c3Ryb25nPnt0aGlzLnByb3BzLnRlcm19PC9zdHJvbmc+ISA6RDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA6IDxzcGFuPk5vIGNvbnRlbnQgbWF0Y2ggZm9yIDxzdHJvbmc+e3RoaXMucHJvcHMudGVybX08L3N0cm9uZz4gOig8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvQ29tcG9uZW50cy9SZXN1bHRIZWFkaW5nLnRzeCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUdBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQWJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**************************************!*\
  !*** ./src/ts/Components/Footer.tsx ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ 0);\r\nclass FooterComponent extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"footer\", null,\r\n            React.createElement(\"p\", null,\r\n                \"Written by \",\r\n                React.createElement(\"a\", { href: \"https://github.com/FreddieBoi\" }, \"FreddieBoi\"),\r\n                \".\")));\r\n    }\r\n}\r\nexports.FooterComponent = FooterComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL0NvbXBvbmVudHMvRm9vdGVyLnRzeD8zYzEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgV3JpdHRlbiBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0ZyZWRkaWVCb2lcIj5GcmVkZGllQm9pPC9hPi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90cy9Db21wb25lbnRzL0Zvb3Rlci50c3giXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQVpBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*********************************************!*\
  !*** ./src/ts/Streamers/ViaplayStreamer.ts ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ../Utils */ 2);\r\nclass ViaplayStreamer {\r\n    constructor() {\r\n        this.name = \"Viaplay\";\r\n        this.href = \"https://viaplay.se/\";\r\n        this.count = 0;\r\n    }\r\n    search(term) {\r\n        this.count = 0;\r\n        let param = Utils_1.toParam({\r\n            \"query\": term\r\n        });\r\n        Utils_1.getJson(`${ViaplayStreamer.url}?${param}`)\r\n            .done((data) => {\r\n            this.count = data &&\r\n                data[\"_embedded\"] &&\r\n                data[\"_embedded\"][\"viaplay:blocks\"] &&\r\n                data[\"_embedded\"][\"viaplay:blocks\"][0] &&\r\n                data[\"_embedded\"][\"viaplay:blocks\"][0][\"totalProductCount\"]\r\n                ? data[\"_embedded\"][\"viaplay:blocks\"][0][\"totalProductCount\"]\r\n                : 0;\r\n        })\r\n            .fail((jqXHR) => {\r\n            this.count = 0;\r\n        });\r\n    }\r\n}\r\nViaplayStreamer.url = \"https://content.viaplay.se/pcdash-se/search\";\r\nexports.ViaplayStreamer = ViaplayStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL1N0cmVhbWVycy9WaWFwbGF5U3RyZWFtZXIudHM/NzljYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lclwiO1xyXG5pbXBvcnQgeyBnZXRKc29uLCB0b1BhcmFtIH0gZnJvbSBcIi4uL1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogU2FtcGxlIFVSTDsgaHR0cHM6Ly9jb250ZW50LnZpYXBsYXkuc2UvcGNkYXNoLXNlL3NlYXJjaD9xdWVyeT1teXNlYXJjaHRlcm1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaWFwbGF5U3RyZWFtZXIgaW1wbGVtZW50cyBJU3RyZWFtZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHVybCA9IFwiaHR0cHM6Ly9jb250ZW50LnZpYXBsYXkuc2UvcGNkYXNoLXNlL3NlYXJjaFwiO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gXCJWaWFwbGF5XCI7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGhyZWYgPSBcImh0dHBzOi8vdmlhcGxheS5zZS9cIjtcclxuXHJcbiAgICBwdWJsaWMgY291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzZWFyY2godGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHBhcmFtID0gdG9QYXJhbSh7XHJcbiAgICAgICAgICAgIFwicXVlcnlcIjogdGVybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldEpzb24oYCR7VmlhcGxheVN0cmVhbWVyLnVybH0/JHtwYXJhbX1gKVxyXG4gICAgICAgICAgICAuZG9uZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbXCJfZW1iZWRkZWRcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW1wiX2VtYmVkZGVkXCJdW1widmlhcGxheTpibG9ja3NcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW1wiX2VtYmVkZGVkXCJdW1widmlhcGxheTpibG9ja3NcIl1bMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW1wiX2VtYmVkZGVkXCJdW1widmlhcGxheTpibG9ja3NcIl1bMF1bXCJ0b3RhbFByb2R1Y3RDb3VudFwiXVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGF0YVtcIl9lbWJlZGRlZFwiXVtcInZpYXBsYXk6YmxvY2tzXCJdWzBdW1widG90YWxQcm9kdWN0Q291bnRcIl1cclxuICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mYWlsKChqcVhIUjogSlF1ZXJ5WEhSKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvU3RyZWFtZXJzL1ZpYXBsYXlTdHJlYW1lci50cyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUtBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFzQkE7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUJBO0FBRkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************!*\
  !*** ./src/ts/Streamers/SvtPlayStreamer.ts ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ./../Utils */ 2);\r\nclass SvtPlayStreamer {\r\n    constructor() {\r\n        this.name = \"SVT Play\";\r\n        this.href = \"https://www.svtplay.se/\";\r\n        this.count = 0;\r\n    }\r\n    search(term) {\r\n        this.count = 0;\r\n        let param = Utils_1.toParam({\r\n            \"q\": term\r\n        });\r\n        Utils_1.getJson(`${SvtPlayStreamer.url}?${param}`, true)\r\n            .done((data) => {\r\n            this.count = data && data[\"totalResults\"] ? data[\"totalResults\"] : 0;\r\n        })\r\n            .fail((jqXHR) => {\r\n            this.count = 0;\r\n        });\r\n    }\r\n}\r\nSvtPlayStreamer.url = \"https://www.svtplay.se/api/search\";\r\nexports.SvtPlayStreamer = SvtPlayStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL1N0cmVhbWVycy9TdnRQbGF5U3RyZWFtZXIudHM/N2Y3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lclwiO1xyXG5pbXBvcnQgeyBnZXRKc29uLCB0b1BhcmFtIH0gZnJvbSBcIi4vLi4vVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBTYW1wbGUgVVJMOyBodHRwczovL3d3dy5zdnRwbGF5LnNlL2FwaS9zZWFyY2g/cT1teXNlYXJjaHRlcm1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdnRQbGF5U3RyZWFtZXIgaW1wbGVtZW50cyBJU3RyZWFtZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHVybCA9IFwiaHR0cHM6Ly93d3cuc3Z0cGxheS5zZS9hcGkvc2VhcmNoXCI7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBcIlNWVCBQbGF5XCI7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IGhyZWYgPSBcImh0dHBzOi8vd3d3LnN2dHBsYXkuc2UvXCI7XHJcblxyXG4gICAgcHVibGljIGNvdW50ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIGxldCBwYXJhbSA9IHRvUGFyYW0oe1xyXG4gICAgICAgICAgICBcInFcIjogdGVybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldEpzb24oYCR7U3Z0UGxheVN0cmVhbWVyLnVybH0/JHtwYXJhbX1gLCB0cnVlKVxyXG4gICAgICAgICAgICAuZG9uZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gZGF0YSAmJiBkYXRhW1widG90YWxSZXN1bHRzXCJdID8gZGF0YVtcInRvdGFsUmVzdWx0c1wiXSA6IDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mYWlsKChqcVhIUjogSlF1ZXJ5WEhSKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvU3RyZWFtZXJzL1N2dFBsYXlTdHJlYW1lci50cyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUtBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFnQkE7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwQkE7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***********************************************!*\
  !*** ./src/ts/Streamers/SfAnytimeStreamer.ts ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ./../Utils */ 2);\r\nclass SfAnytimeStreamer {\r\n    constructor() {\r\n        this.name = \"SF Anytime\";\r\n        this.href = \"https://www.sfanytime.com/sv\";\r\n        this.count = 0;\r\n    }\r\n    search(term) {\r\n        this.count = 0;\r\n        let param = Utils_1.toParam({\r\n            \"query\": term\r\n        });\r\n        let data = `{\"requests\":[{\"indexName\":\"prod_sfanytime_movies\",\"params\":\"${param}&numericFilters=adult%3D0%2C%20available_in_se%3D1&hitsPerPage=60&maxValuesPerFacet=3&page=0&attributesToRetrieve=mediaid%2Cproducttype%2Cproducttypeid%2Ctitle%2Ctitle_sv%2Ctitle_no%2Ctitle_da%2Ctitle_fi%2Ccover_id%2Ccover_no%2Ccover_sv%2Ccover_da%2Ccover_fi&distinct=true&facets=%5B%5D&tagFilters=\"}]}`;\r\n        Utils_1.postJson(SfAnytimeStreamer.url, data)\r\n            .done((data) => {\r\n            this.count = data && data[\"results\"] && data[\"results\"][0] && data[\"results\"][0][\"nbHits\"] ? data[\"results\"][0][\"nbHits\"] : 0;\r\n        })\r\n            .fail((jqXHR) => {\r\n            this.count = 0;\r\n        });\r\n    }\r\n}\r\nSfAnytimeStreamer.url = \"https://e38fd90mob-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.21.1%3Binstantsearch.js%201.11.7%3BJS%20Helper%202.19.0&x-algolia-application-id=E38FD90MOB&x-algolia-api-key=3f56a452156f1a76c8939af1798a2335\";\r\nexports.SfAnytimeStreamer = SfAnytimeStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL1N0cmVhbWVycy9TZkFueXRpbWVTdHJlYW1lci50cz9kZDkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVyXCI7XHJcbmltcG9ydCB7IHBvc3RKc29uLCB0b1BhcmFtIH0gZnJvbSBcIi4vLi4vVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBTYW1wbGUgVVJMOyBodHRwczovL2UzOGZkOTBtb2ItZHNuLmFsZ29saWEubmV0LzEvaW5kZXhlcy8vcXVlcmllcz94LWFsZ29saWEtYWdlbnQ9QWxnb2xpYSUyMGZvciUyMHZhbmlsbGElMjBKYXZhU2NyaXB0JTIwKGxpdGUpJTIwMy4yMS4xJTNCaW5zdGFudHNlYXJjaC5qcyUyMDEuMTEuNyUzQkpTJTIwSGVscGVyJTIwMi4xOS4wJngtYWxnb2xpYS1hcHBsaWNhdGlvbi1pZD1FMzhGRDkwTU9CJngtYWxnb2xpYS1hcGkta2V5PTNmNTZhNDUyMTU2ZjFhNzZjODkzOWFmMTc5OGEyMzM1XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2ZBbnl0aW1lU3RyZWFtZXIgaW1wbGVtZW50cyBJU3RyZWFtZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHVybCA9IFwiaHR0cHM6Ly9lMzhmZDkwbW9iLWRzbi5hbGdvbGlhLm5ldC8xL2luZGV4ZXMvKi9xdWVyaWVzP3gtYWxnb2xpYS1hZ2VudD1BbGdvbGlhJTIwZm9yJTIwdmFuaWxsYSUyMEphdmFTY3JpcHQlMjAobGl0ZSklMjAzLjIxLjElM0JpbnN0YW50c2VhcmNoLmpzJTIwMS4xMS43JTNCSlMlMjBIZWxwZXIlMjAyLjE5LjAmeC1hbGdvbGlhLWFwcGxpY2F0aW9uLWlkPUUzOEZEOTBNT0ImeC1hbGdvbGlhLWFwaS1rZXk9M2Y1NmE0NTIxNTZmMWE3NmM4OTM5YWYxNzk4YTIzMzVcIjtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFwiU0YgQW55dGltZVwiO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBocmVmID0gXCJodHRwczovL3d3dy5zZmFueXRpbWUuY29tL3N2XCI7XHJcblxyXG4gICAgcHVibGljIGNvdW50ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIGxldCBwYXJhbSA9IHRvUGFyYW0oe1xyXG4gICAgICAgICAgICBcInF1ZXJ5XCI6IHRlcm1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZGF0YSA9IGB7XCJyZXF1ZXN0c1wiOlt7XCJpbmRleE5hbWVcIjpcInByb2Rfc2Zhbnl0aW1lX21vdmllc1wiLFwicGFyYW1zXCI6XCIke3BhcmFtfSZudW1lcmljRmlsdGVycz1hZHVsdCUzRDAlMkMlMjBhdmFpbGFibGVfaW5fc2UlM0QxJmhpdHNQZXJQYWdlPTYwJm1heFZhbHVlc1BlckZhY2V0PTMmcGFnZT0wJmF0dHJpYnV0ZXNUb1JldHJpZXZlPW1lZGlhaWQlMkNwcm9kdWN0dHlwZSUyQ3Byb2R1Y3R0eXBlaWQlMkN0aXRsZSUyQ3RpdGxlX3N2JTJDdGl0bGVfbm8lMkN0aXRsZV9kYSUyQ3RpdGxlX2ZpJTJDY292ZXJfaWQlMkNjb3Zlcl9ubyUyQ2NvdmVyX3N2JTJDY292ZXJfZGElMkNjb3Zlcl9maSZkaXN0aW5jdD10cnVlJmZhY2V0cz0lNUIlNUQmdGFnRmlsdGVycz1cIn1dfWA7XHJcbiAgICAgICAgcG9zdEpzb24oU2ZBbnl0aW1lU3RyZWFtZXIudXJsLCBkYXRhKVxyXG4gICAgICAgICAgICAuZG9uZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gZGF0YSAmJiBkYXRhW1wicmVzdWx0c1wiXSAmJiBkYXRhW1wicmVzdWx0c1wiXVswXSAmJiBkYXRhW1wicmVzdWx0c1wiXVswXVtcIm5iSGl0c1wiXSA/IGRhdGFbXCJyZXN1bHRzXCJdWzBdW1wibmJIaXRzXCJdIDogMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGpxWEhSOiBKUXVlcnlYSFIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90cy9TdHJlYW1lcnMvU2ZBbnl0aW1lU3RyZWFtZXIudHMiXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFLQTtBQUFBO0FBSUE7QUFFQTtBQUVBO0FBaUJBO0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyQkE7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**************************!*\
  !*** ./src/ts/Search.ts ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jQuery = __webpack_require__(/*! jquery */ 1);\r\nfunction search(term, streamers) {\r\n    if (!jQuery.trim(term)) {\r\n        console.error(\"No search term!\");\r\n        return [];\r\n    }\r\n    console.info(`Searching for \"${term}\"...`);\r\n    let count = 0;\r\n    for (let streamer of streamers) {\r\n        try {\r\n            streamer.search(term);\r\n            count += streamer.count;\r\n        }\r\n        catch (error) {\r\n            console.error(`Failed searching ${streamer.name}: ${error ? error.message : \"\"}`);\r\n        }\r\n    }\r\n    if (count <= 0) {\r\n        console.info(\"0... :(\");\r\n        return [];\r\n    }\r\n    console.info(`${count}! :D`);\r\n    const results = [];\r\n    for (let streamer of streamers) {\r\n        console.info(`${streamer.name}: ${streamer.count}`);\r\n        let result = {\r\n            name: streamer.name,\r\n            href: streamer.href,\r\n            count: streamer.count\r\n        };\r\n        results.push(result);\r\n    }\r\n    return results;\r\n}\r\nexports.search = search;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RzL1NlYXJjaC50cz84ZmQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVycy9TdHJlYW1lclwiO1xyXG5pbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUmVzdWx0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGhyZWY6IHN0cmluZztcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2godGVybTogc3RyaW5nLCBzdHJlYW1lcnM6IElTdHJlYW1lcltdKTogSVNlYXJjaFJlc3VsdFtdIHtcclxuICAgIGlmICghalF1ZXJ5LnRyaW0odGVybSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gc2VhcmNoIHRlcm0hXCIpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUuaW5mbyhgU2VhcmNoaW5nIGZvciBcIiR7dGVybX1cIi4uLmApO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGZvciAobGV0IHN0cmVhbWVyIG9mIHN0cmVhbWVycykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHN0cmVhbWVyLnNlYXJjaCh0ZXJtKTtcclxuICAgICAgICAgICAgY291bnQgKz0gc3RyZWFtZXIuY291bnQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHNlYXJjaGluZyAke3N0cmVhbWVyLm5hbWV9OiAke2Vycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiXCJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNvdW50IDw9IDApIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCIwLi4uIDooXCIpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUuaW5mbyhgJHtjb3VudH0hIDpEYCk7XHJcbiAgICBjb25zdCByZXN1bHRzOiBJU2VhcmNoUmVzdWx0W10gPSBbXTtcclxuICAgIGZvciAobGV0IHN0cmVhbWVyIG9mIHN0cmVhbWVycykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJHtzdHJlYW1lci5uYW1lfTogJHtzdHJlYW1lci5jb3VudH1gKTtcclxuICAgICAgICBsZXQgcmVzdWx0OiBJU2VhcmNoUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBzdHJlYW1lci5uYW1lLFxyXG4gICAgICAgICAgICBocmVmOiBzdHJlYW1lci5ocmVmLFxyXG4gICAgICAgICAgICBjb3VudDogc3RyZWFtZXIuY291bnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RzL1NlYXJjaC50cyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ })
/******/ ]);