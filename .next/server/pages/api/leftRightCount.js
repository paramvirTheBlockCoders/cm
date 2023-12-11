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
exports.id = "pages/api/leftRightCount";
exports.ids = ["pages/api/leftRightCount"];
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

/***/ "(api)/./pages/api/leftRightCount.js":
/*!*************************************!*\
  !*** ./pages/api/leftRightCount.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (req.method === \"POST\") {\n        try {\n            console.log(session.user?.name, \"yyyyyyy\");\n            // Set HttpOnly cookie on the response\n            res.setHeader(\"Set-Cookie\", `token=${session.user?.name}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 365}` // Example: 7 days expiry\n            );\n            var config = {\n                method: \"post\",\n                url: \"http://44.200.180.0:7777/api/v1/admin/getuserscount\",\n                headers: {\n                    Authorization: `Bearer ${session.user?.name}`\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGVmdFJpZ2h0Q291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFFOUIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxPQUFPLEdBQUcsTUFBTUosMkRBQVUsQ0FBQztRQUFFRSxHQUFHO0tBQUUsQ0FBQztJQUN6QyxJQUFJQSxHQUFHLENBQUNHLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxDQUFDSSxJQUFJLEVBQUVDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUUzQyxzQ0FBc0M7WUFDdENOLEdBQUcsQ0FBQ08sU0FBUyxDQUNYLFlBQVksRUFDWixDQUFDLE1BQU0sRUFBRU4sT0FBTyxDQUFDSSxJQUFJLEVBQUVDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjthQUN6RyxDQUFDO1lBRUYsSUFBSUUsTUFBTSxHQUFHO2dCQUNYTixNQUFNLEVBQUUsTUFBTTtnQkFDZE8sR0FBRyxFQUFFLHFEQUFxRDtnQkFDMURDLE9BQU8sRUFBRTtvQkFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFVixPQUFPLENBQUNJLElBQUksRUFBRUMsSUFBSSxDQUFDLENBQUM7aUJBQzlDO2FBQ0Y7WUFFRCxNQUFNViw0Q0FBSyxDQUFDWSxNQUFNLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLElBQUksRUFBRUgsUUFBUSxDQUFDRyxJQUFJLENBQUNBLElBQUk7aUJBQUUsQ0FBQyxDQUFDO2FBQ3BELENBQUMsQ0FBQztTQUNKLENBQUMsT0FBT0MsR0FBRyxFQUFFO1lBQ1pkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxHQUFHLENBQUMsQ0FBQztZQUNqQmpCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVHLEtBQUssRUFBRUQsR0FBRzthQUFFLENBQUMsQ0FBQztTQUN0QztLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWRvYWRtaW4vLi9wYWdlcy9hcGkvbGVmdFJpZ2h0Q291bnQuanM/NThiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coc2Vzc2lvbi51c2VyPy5uYW1lLCBcInl5eXl5eXlcIik7XG5cbiAgICAgIC8vIFNldCBIdHRwT25seSBjb29raWUgb24gdGhlIHJlc3BvbnNlXG4gICAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgICBcIlNldC1Db29raWVcIixcbiAgICAgICAgYHRva2VuPSR7c2Vzc2lvbi51c2VyPy5uYW1lfTsgSHR0cE9ubHk7IFBhdGg9LzsgTWF4LUFnZT0kezYwICogNjAgKiAyNCAqIDM2NX1gIC8vIEV4YW1wbGU6IDcgZGF5cyBleHBpcnlcbiAgICAgICk7XG5cbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vNDQuMjAwLjE4MC4wOjc3NzcvYXBpL3YxL2FkbWluL2dldHVzZXJzY291bnRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uLnVzZXI/Lm5hbWV9YCxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXNwb25zZS5kYXRhLmRhdGEgfSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm5hbWUiLCJzZXRIZWFkZXIiLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/leftRightCount.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/leftRightCount.js"));
module.exports = __webpack_exports__;

})();