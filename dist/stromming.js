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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/ts/Utils.ts ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jQuery = __webpack_require__(/*! jquery */ 1);\r\nexports.corsProxyUrl = \"https://cors.io/?\";\r\nfunction getJson(url, useCorsProxy = false) {\r\n    return jQuery.ajax({\r\n        method: \"get\",\r\n        url: useCorsProxy ? `${exports.corsProxyUrl}${url}` : url,\r\n        async: false\r\n    });\r\n}\r\nexports.getJson = getJson;\r\nfunction postJson(url, data) {\r\n    return jQuery.ajax({\r\n        method: \"post\",\r\n        url: url,\r\n        data: data,\r\n        async: false\r\n    });\r\n}\r\nexports.postJson = postJson;\r\nfunction toParam(param) {\r\n    return jQuery.param(param);\r\n}\r\nexports.toParam = toParam;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvVXRpbHMudHM/ZjVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IHZhciBjb3JzUHJveHlVcmwgPSBcImh0dHBzOi8vY29ycy5pby8/XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SnNvbih1cmw6IHN0cmluZywgdXNlQ29yc1Byb3h5ID0gZmFsc2UpOiBKUXVlcnlYSFIge1xyXG4gICAgcmV0dXJuIGpRdWVyeS5hamF4KHtcclxuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgICAgdXJsOiB1c2VDb3JzUHJveHkgPyBgJHtjb3JzUHJveHlVcmx9JHt1cmx9YCA6IHVybCxcclxuICAgICAgICBhc3luYzogZmFsc2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zdEpzb24odXJsOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IEpRdWVyeVhIUiB7XHJcbiAgICByZXR1cm4galF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBhc3luYzogZmFsc2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9QYXJhbShwYXJhbTogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBqUXVlcnkucGFyYW0ocGFyYW0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvVXRpbHMudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

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
/*!***********************!*\
  !*** ./src/ts/App.ts ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ViaplayStreamer_1 = __webpack_require__(/*! ./Streamers/ViaplayStreamer */ 3);\r\nconst SvtPlayStreamer_1 = __webpack_require__(/*! ./Streamers/SvtPlayStreamer */ 4);\r\nconst SfAnytimeStreamer_1 = __webpack_require__(/*! ./Streamers/SfAnytimeStreamer */ 5);\r\nconst Searcher_1 = __webpack_require__(/*! ./Searcher */ 6);\r\nconst jQuery = __webpack_require__(/*! jquery */ 1);\r\njQuery(document).ready(() => {\r\n    let streamers = [\r\n        new ViaplayStreamer_1.ViaplayStreamer(),\r\n        new SvtPlayStreamer_1.SvtPlayStreamer(),\r\n        new SfAnytimeStreamer_1.SfAnytimeStreamer()\r\n    ];\r\n    jQuery(\"#section-search\").find(\"form\").on(\"submit\", (event) => {\r\n        event.preventDefault();\r\n        let term = jQuery(event.target).find(\"#input-search\").val();\r\n        Searcher_1.search(term, streamers);\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvQXBwLnRzPzcyYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlhcGxheVN0cmVhbWVyIH0gZnJvbSBcIi4vU3RyZWFtZXJzL1ZpYXBsYXlTdHJlYW1lclwiO1xyXG5pbXBvcnQgeyBTdnRQbGF5U3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lcnMvU3Z0UGxheVN0cmVhbWVyXCI7XHJcbmltcG9ydCB7IFNmQW55dGltZVN0cmVhbWVyIH0gZnJvbSBcIi4vU3RyZWFtZXJzL1NmQW55dGltZVN0cmVhbWVyXCI7XHJcbmltcG9ydCB7IHNlYXJjaCB9IGZyb20gXCIuL1NlYXJjaGVyXCI7XHJcbmltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAgIGxldCBzdHJlYW1lcnMgPSBbXHJcbiAgICAgICAgbmV3IFZpYXBsYXlTdHJlYW1lcigpLFxyXG4gICAgICAgIG5ldyBTdnRQbGF5U3RyZWFtZXIoKSxcclxuICAgICAgICBuZXcgU2ZBbnl0aW1lU3RyZWFtZXIoKVxyXG4gICAgXTtcclxuICAgIGpRdWVyeShcIiNzZWN0aW9uLXNlYXJjaFwiKS5maW5kKFwiZm9ybVwiKS5vbihcInN1Ym1pdFwiLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRlcm0gPSBqUXVlcnkoZXZlbnQudGFyZ2V0KS5maW5kKFwiI2lucHV0LXNlYXJjaFwiKS52YWwoKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgc2VhcmNoKHRlcm0sIHN0cmVhbWVycyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvQXBwLnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************!*\
  !*** ./src/ts/Streamers/ViaplayStreamer.ts ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ../Utils */ 0);\r\nclass ViaplayStreamer {\r\n    constructor() {\r\n        this.name = \"Viaplay\";\r\n        this.count = 0;\r\n    }\r\n    search(term) {\r\n        this.count = 0;\r\n        let param = Utils_1.toParam({\r\n            \"query\": term\r\n        });\r\n        Utils_1.getJson(`${ViaplayStreamer.url}?${param}`)\r\n            .done((data) => {\r\n            this.count = data &&\r\n                data[\"_embedded\"] &&\r\n                data[\"_embedded\"][\"viaplay:blocks\"] &&\r\n                data[\"_embedded\"][\"viaplay:blocks\"][0] &&\r\n                data[\"_embedded\"][\"viaplay:blocks\"][0][\"totalProductCount\"]\r\n                ? data[\"_embedded\"][\"viaplay:blocks\"][0][\"totalProductCount\"]\r\n                : 0;\r\n        })\r\n            .fail((jqXHR) => {\r\n            this.count = 0;\r\n        });\r\n    }\r\n}\r\nViaplayStreamer.url = \"https://content.viaplay.se/pcdash-se/search\";\r\nexports.ViaplayStreamer = ViaplayStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvU3RyZWFtZXJzL1ZpYXBsYXlTdHJlYW1lci50cz83OWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVyXCI7XHJcbmltcG9ydCB7IGdldEpzb24sIHRvUGFyYW0gfSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBTYW1wbGUgVVJMOyBodHRwczovL2NvbnRlbnQudmlhcGxheS5zZS9wY2Rhc2gtc2Uvc2VhcmNoP3F1ZXJ5PW15c2VhcmNodGVybVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpYXBsYXlTdHJlYW1lciBpbXBsZW1lbnRzIElTdHJlYW1lciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdXJsID0gXCJodHRwczovL2NvbnRlbnQudmlhcGxheS5zZS9wY2Rhc2gtc2Uvc2VhcmNoXCI7XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWUgPSBcIlZpYXBsYXlcIjtcclxuXHJcbiAgICBwdWJsaWMgY291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzZWFyY2godGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHBhcmFtID0gdG9QYXJhbSh7XHJcbiAgICAgICAgICAgIFwicXVlcnlcIjogdGVybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldEpzb24oYCR7VmlhcGxheVN0cmVhbWVyLnVybH0/JHtwYXJhbX1gKVxyXG4gICAgICAgICAgICAuZG9uZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbXCJfZW1iZWRkZWRcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW1wiX2VtYmVkZGVkXCJdW1widmlhcGxheTpibG9ja3NcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW1wiX2VtYmVkZGVkXCJdW1widmlhcGxheTpibG9ja3NcIl1bMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW1wiX2VtYmVkZGVkXCJdW1widmlhcGxheTpibG9ja3NcIl1bMF1bXCJ0b3RhbFByb2R1Y3RDb3VudFwiXVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGF0YVtcIl9lbWJlZGRlZFwiXVtcInZpYXBsYXk6YmxvY2tzXCJdWzBdW1widG90YWxQcm9kdWN0Q291bnRcIl1cclxuICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mYWlsKChqcVhIUjogSlF1ZXJ5WEhSKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvU3RyZWFtZXJzL1ZpYXBsYXlTdHJlYW1lci50cyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUtBO0FBQUE7QUFJQTtBQUVBO0FBc0JBO0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhCQTtBQUZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************************************!*\
  !*** ./src/ts/Streamers/SvtPlayStreamer.ts ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ./../Utils */ 0);\r\nclass SvtPlayStreamer {\r\n    constructor() {\r\n        this.name = \"SVT Play\";\r\n        this.count = 0;\r\n    }\r\n    search(term) {\r\n        this.count = 0;\r\n        let param = Utils_1.toParam({\r\n            \"q\": term\r\n        });\r\n        Utils_1.getJson(`${SvtPlayStreamer.url}?${param}`, true)\r\n            .done((data) => {\r\n            this.count = data && data[\"totalResults\"] ? data[\"totalResults\"] : 0;\r\n        })\r\n            .fail((jqXHR) => {\r\n            this.count = 0;\r\n        });\r\n    }\r\n}\r\nSvtPlayStreamer.url = \"https://www.svtplay.se/api/search\";\r\nexports.SvtPlayStreamer = SvtPlayStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvU3RyZWFtZXJzL1N2dFBsYXlTdHJlYW1lci50cz83Zjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTdHJlYW1lciB9IGZyb20gXCIuL1N0cmVhbWVyXCI7XHJcbmltcG9ydCB7IGdldEpzb24sIHRvUGFyYW0gfSBmcm9tIFwiLi8uLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIFNhbXBsZSBVUkw7IGh0dHBzOi8vd3d3LnN2dHBsYXkuc2UvYXBpL3NlYXJjaD9xPW15c2VhcmNodGVybVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN2dFBsYXlTdHJlYW1lciBpbXBsZW1lbnRzIElTdHJlYW1lciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdXJsID0gXCJodHRwczovL3d3dy5zdnRwbGF5LnNlL2FwaS9zZWFyY2hcIjtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZSA9IFwiU1ZUIFBsYXlcIjtcclxuXHJcbiAgICBwdWJsaWMgY291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzZWFyY2godGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHBhcmFtID0gdG9QYXJhbSh7XHJcbiAgICAgICAgICAgIFwicVwiOiB0ZXJtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0SnNvbihgJHtTdnRQbGF5U3RyZWFtZXIudXJsfT8ke3BhcmFtfWAsIHRydWUpXHJcbiAgICAgICAgICAgIC5kb25lKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSBkYXRhICYmIGRhdGFbXCJ0b3RhbFJlc3VsdHNcIl0gPyBkYXRhW1widG90YWxSZXN1bHRzXCJdIDogMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGpxWEhSOiBKUXVlcnlYSFIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90cy9TdHJlYW1lcnMvU3Z0UGxheVN0cmVhbWVyLnRzIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBS0E7QUFBQTtBQUlBO0FBRUE7QUFnQkE7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQkE7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***********************************************!*\
  !*** ./src/ts/Streamers/SfAnytimeStreamer.ts ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Utils_1 = __webpack_require__(/*! ./../Utils */ 0);\r\nclass SfAnytimeStreamer {\r\n    constructor() {\r\n        this.name = \"SF Anytime\";\r\n        this.count = 0;\r\n    }\r\n    search(term) {\r\n        this.count = 0;\r\n        let param = Utils_1.toParam({\r\n            \"query\": term\r\n        });\r\n        let data = `{\"requests\":[{\"indexName\":\"prod_sfanytime_movies\",\"params\":\"${param}&numericFilters=adult%3D0%2C%20available_in_se%3D1&hitsPerPage=60&maxValuesPerFacet=3&page=0&attributesToRetrieve=mediaid%2Cproducttype%2Cproducttypeid%2Ctitle%2Ctitle_sv%2Ctitle_no%2Ctitle_da%2Ctitle_fi%2Ccover_id%2Ccover_no%2Ccover_sv%2Ccover_da%2Ccover_fi&distinct=true&facets=%5B%5D&tagFilters=\"}]}`;\r\n        Utils_1.postJson(SfAnytimeStreamer.url, data)\r\n            .done((data) => {\r\n            this.count = data && data[\"results\"] && data[\"results\"][0] && data[\"results\"][0][\"nbHits\"] ? data[\"results\"][0][\"nbHits\"] : 0;\r\n        })\r\n            .fail((jqXHR) => {\r\n            this.count = 0;\r\n        });\r\n    }\r\n}\r\nSfAnytimeStreamer.url = \"https://e38fd90mob-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.21.1%3Binstantsearch.js%201.11.7%3BJS%20Helper%202.19.0&x-algolia-application-id=E38FD90MOB&x-algolia-api-key=3f56a452156f1a76c8939af1798a2335\";\r\nexports.SfAnytimeStreamer = SfAnytimeStreamer;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvU3RyZWFtZXJzL1NmQW55dGltZVN0cmVhbWVyLnRzP2RkOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0cmVhbWVyIH0gZnJvbSBcIi4vU3RyZWFtZXJcIjtcclxuaW1wb3J0IHsgcG9zdEpzb24sIHRvUGFyYW0gfSBmcm9tIFwiLi8uLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIFNhbXBsZSBVUkw7IGh0dHBzOi8vZTM4ZmQ5MG1vYi1kc24uYWxnb2xpYS5uZXQvMS9pbmRleGVzLy9xdWVyaWVzP3gtYWxnb2xpYS1hZ2VudD1BbGdvbGlhJTIwZm9yJTIwdmFuaWxsYSUyMEphdmFTY3JpcHQlMjAobGl0ZSklMjAzLjIxLjElM0JpbnN0YW50c2VhcmNoLmpzJTIwMS4xMS43JTNCSlMlMjBIZWxwZXIlMjAyLjE5LjAmeC1hbGdvbGlhLWFwcGxpY2F0aW9uLWlkPUUzOEZEOTBNT0ImeC1hbGdvbGlhLWFwaS1rZXk9M2Y1NmE0NTIxNTZmMWE3NmM4OTM5YWYxNzk4YTIzMzVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZkFueXRpbWVTdHJlYW1lciBpbXBsZW1lbnRzIElTdHJlYW1lciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdXJsID0gXCJodHRwczovL2UzOGZkOTBtb2ItZHNuLmFsZ29saWEubmV0LzEvaW5kZXhlcy8qL3F1ZXJpZXM/eC1hbGdvbGlhLWFnZW50PUFsZ29saWElMjBmb3IlMjB2YW5pbGxhJTIwSmF2YVNjcmlwdCUyMChsaXRlKSUyMDMuMjEuMSUzQmluc3RhbnRzZWFyY2guanMlMjAxLjExLjclM0JKUyUyMEhlbHBlciUyMDIuMTkuMCZ4LWFsZ29saWEtYXBwbGljYXRpb24taWQ9RTM4RkQ5ME1PQiZ4LWFsZ29saWEtYXBpLWtleT0zZjU2YTQ1MjE1NmYxYTc2Yzg5MzlhZjE3OThhMjMzNVwiO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gXCJTRiBBbnl0aW1lXCI7XHJcblxyXG4gICAgcHVibGljIGNvdW50ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKHRlcm06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIGxldCBwYXJhbSA9IHRvUGFyYW0oe1xyXG4gICAgICAgICAgICBcInF1ZXJ5XCI6IHRlcm1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZGF0YSA9IGB7XCJyZXF1ZXN0c1wiOlt7XCJpbmRleE5hbWVcIjpcInByb2Rfc2Zhbnl0aW1lX21vdmllc1wiLFwicGFyYW1zXCI6XCIke3BhcmFtfSZudW1lcmljRmlsdGVycz1hZHVsdCUzRDAlMkMlMjBhdmFpbGFibGVfaW5fc2UlM0QxJmhpdHNQZXJQYWdlPTYwJm1heFZhbHVlc1BlckZhY2V0PTMmcGFnZT0wJmF0dHJpYnV0ZXNUb1JldHJpZXZlPW1lZGlhaWQlMkNwcm9kdWN0dHlwZSUyQ3Byb2R1Y3R0eXBlaWQlMkN0aXRsZSUyQ3RpdGxlX3N2JTJDdGl0bGVfbm8lMkN0aXRsZV9kYSUyQ3RpdGxlX2ZpJTJDY292ZXJfaWQlMkNjb3Zlcl9ubyUyQ2NvdmVyX3N2JTJDY292ZXJfZGElMkNjb3Zlcl9maSZkaXN0aW5jdD10cnVlJmZhY2V0cz0lNUIlNUQmdGFnRmlsdGVycz1cIn1dfWA7XHJcbiAgICAgICAgcG9zdEpzb24oU2ZBbnl0aW1lU3RyZWFtZXIudXJsLCBkYXRhKVxyXG4gICAgICAgICAgICAuZG9uZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gZGF0YSAmJiBkYXRhW1wicmVzdWx0c1wiXSAmJiBkYXRhW1wicmVzdWx0c1wiXVswXSAmJiBkYXRhW1wicmVzdWx0c1wiXVswXVtcIm5iSGl0c1wiXSA/IGRhdGFbXCJyZXN1bHRzXCJdWzBdW1wibmJIaXRzXCJdIDogMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoKGpxWEhSOiBKUXVlcnlYSFIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy90cy9TdHJlYW1lcnMvU2ZBbnl0aW1lU3RyZWFtZXIudHMiXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFLQTtBQUFBO0FBSUE7QUFFQTtBQWlCQTtBQWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbkJBO0FBRkE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************!*\
  !*** ./src/ts/Searcher.ts ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jQuery = __webpack_require__(/*! jquery */ 1);\r\nfunction search(term, streamers) {\r\n    if (!jQuery.trim(term)) {\r\n        console.error(\"No search term!\");\r\n        return;\r\n    }\r\n    console.info(`Searching for \"${term}\"...`);\r\n    let count = 0;\r\n    for (let streamer of streamers) {\r\n        try {\r\n            streamer.search(term);\r\n            count += streamer.count;\r\n        }\r\n        catch (error) {\r\n            console.error(`Failed searching ${streamer.name}: ${error ? error.message : \"\"}`);\r\n        }\r\n    }\r\n    if (count <= 0) {\r\n        console.info(\"0... :(\");\r\n        return;\r\n    }\r\n    console.info(`${count}! :D`);\r\n    for (let streamer of streamers) {\r\n        console.info(`${streamer.name}: ${streamer.count}`);\r\n    }\r\n}\r\nexports.search = search;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdHMvU2VhcmNoZXIudHM/NTMyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RyZWFtZXIgfSBmcm9tIFwiLi9TdHJlYW1lcnMvU3RyZWFtZXJcIjtcclxuaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2godGVybTogc3RyaW5nLCBzdHJlYW1lcnM6IElTdHJlYW1lcltdKSB7XHJcbiAgICBpZiAoIWpRdWVyeS50cmltKHRlcm0pKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIHNlYXJjaCB0ZXJtIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmluZm8oYFNlYXJjaGluZyBmb3IgXCIke3Rlcm19XCIuLi5gKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBmb3IgKGxldCBzdHJlYW1lciBvZiBzdHJlYW1lcnMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzdHJlYW1lci5zZWFyY2godGVybSk7XHJcbiAgICAgICAgICAgIGNvdW50ICs9IHN0cmVhbWVyLmNvdW50O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCBzZWFyY2hpbmcgJHtzdHJlYW1lci5uYW1lfTogJHtlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlwifWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiMC4uLiA6KFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmluZm8oYCR7Y291bnR9ISA6RGApO1xyXG4gICAgZm9yIChsZXQgc3RyZWFtZXIgb2Ygc3RyZWFtZXJzKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGAke3N0cmVhbWVyLm5hbWV9OiAke3N0cmVhbWVyLmNvdW50fWApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdHMvU2VhcmNoZXIudHMiXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);