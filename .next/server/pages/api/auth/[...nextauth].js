"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Custom Provider\",\n            async authorize (credentials) {\n                try {\n                    const { email , password  } = credentials;\n                    const data = {\n                        email,\n                        password\n                    };\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://44.200.180.0:7777/api/v1/auth/adminuserlogin\", data);\n                    if (response.status !== 200) {\n                        throw new Error(\"Invalid Credentials for email: \" + email);\n                    }\n                    const token = response.data.data;\n                    console.log(token, \"abcdef\");\n                    // Check if running on the client side before using localStorage\n                    if (false) {}\n                    if (!token) {\n                        throw new Error(\"Invalid token\");\n                    }\n                    const user = {\n                        name: token,\n                        email\n                    };\n                    return user;\n                } catch (error) {\n                    console.error(\"Authentication error:\", error.message);\n                    throw new Error(\"Authentication failed\");\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNrQztBQUVuRSxpRUFBZUMsZ0RBQVEsQ0FBQztJQUN0QkUsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0RDLFNBQVMsRUFBRTtRQUNUSCxzRUFBb0IsQ0FBQztZQUNuQkksSUFBSSxFQUFFLGlCQUFpQjtZQUN2QixNQUFNQyxTQUFTLEVBQUNDLFdBQVcsRUFBRTtnQkFDM0IsSUFBSTtvQkFDRixNQUFNLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdGLFdBQVc7b0JBQ3ZDLE1BQU1HLElBQUksR0FBRzt3QkFBRUYsS0FBSzt3QkFBRUMsUUFBUTtxQkFBRTtvQkFFaEMsTUFBTUUsUUFBUSxHQUFHLE1BQU1aLGlEQUFVLENBQy9CLHFEQUFxRCxFQUNyRFcsSUFBSSxDQUNMO29CQUVELElBQUlDLFFBQVEsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTt3QkFDM0IsTUFBTSxJQUFJQyxLQUFLLENBQUMsaUNBQWlDLEdBQUdOLEtBQUssQ0FBQyxDQUFDO3FCQUM1RDtvQkFFRCxNQUFNTyxLQUFLLEdBQUdKLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJO29CQUNoQ00sT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFFN0IsZ0VBQWdFO29CQUNoRSxJQUFJLEtBQTZCLEVBQUUsRUFFbEM7b0JBRUQsSUFBSSxDQUFDQSxLQUFLLEVBQUU7d0JBQ1YsTUFBTSxJQUFJRCxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ2xDO29CQUVELE1BQU1NLElBQUksR0FBRzt3QkFDWGYsSUFBSSxFQUFFVSxLQUFLO3dCQUNYUCxLQUFLO3FCQUNOO29CQUVELE9BQU9ZLElBQUksQ0FBQztpQkFDYixDQUFDLE9BQU9DLEtBQUssRUFBRTtvQkFDZEwsT0FBTyxDQUFDSyxLQUFLLENBQUMsdUJBQXVCLEVBQUVBLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUM7b0JBQ3RELE1BQU0sSUFBSVIsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcnMoe1xuICAgICAgbmFtZTogXCJDdXN0b20gUHJvdmlkZXJcIixcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscztcbiAgICAgICAgICBjb25zdCBkYXRhID0geyBlbWFpbCwgcGFzc3dvcmQgfTtcblxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICAgIFwiaHR0cDovLzQ0LjIwMC4xODAuMDo3Nzc3L2FwaS92MS9hdXRoL2FkbWludXNlcmxvZ2luXCIsXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBDcmVkZW50aWFscyBmb3IgZW1haWw6IFwiICsgZW1haWwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuLCBcImFiY2RlZlwiKTtcblxuICAgICAgICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgb24gdGhlIGNsaWVudCBzaWRlIGJlZm9yZSB1c2luZyBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2tlblwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICAgICAgbmFtZTogdG9rZW4sXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dGhlbnRpY2F0aW9uIGVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdXRoZW50aWNhdGlvbiBmYWlsZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlcnMiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsIkVycm9yIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVzZXIiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();