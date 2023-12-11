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
exports.id = "pages/api/2fa";
exports.ids = ["pages/api/2fa"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/2fa.js":
/*!**************************!*\
  !*** ./pages/api/2fa.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    // const session = await getSession({ req });\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(\"---------\", data);\n            const apiResponse = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://44.200.180.0:7777/api/v1/auth/changeemail\", data);\n            res.status(200).json({\n                data: apiResponse.data.data\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err.message\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvMmZhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ21CO0FBRTlCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsNkNBQTZDO0lBRTdDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7WUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLFdBQVcsRUFBRUgsSUFBSSxDQUFDLENBQUM7WUFFaEMsTUFBTUksV0FBVyxHQUFHLE1BQU1WLGlEQUFVLENBQ2xDLGtEQUFrRCxFQUNsRE0sSUFBSSxDQUVMO1lBRURGLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVQLElBQUksRUFBRUksV0FBVyxDQUFDSixJQUFJLENBQUNBLElBQUk7YUFBRSxDQUFDLENBQUM7U0FDdkQsQ0FBQyxPQUFPUSxHQUFHLEVBQUU7WUFDWk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCVixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUcsQ0FBQ0UsT0FBTzthQUFFLENBQUMsQ0FBQztTQUM5QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9wYWdlcy9hcGkvMmZhLmpzPzc5N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcbiAgXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyggXCItLS0tLS0tLS1cIiwgZGF0YSk7XG5cbiAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwOi8vNDQuMjAwLjE4MC4wOjc3NzcvYXBpL3YxL2F1dGgvY2hhbmdlZW1haWxcIixcbiAgICAgICAgZGF0YSxcbiAgICAgICBcbiAgICAgICk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogYXBpUmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJhcGlSZXNwb25zZSIsInBvc3QiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/2fa.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/2fa.js"));
module.exports = __webpack_exports__;

})();