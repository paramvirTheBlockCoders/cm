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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Component/RegistrationPage.js":
/*!***************************************!*\
  !*** ./Component/RegistrationPage.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Login = ()=>{\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // this route helps us to going next page\n    async function login(data) {\n        console.log(data, \"from send\");\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"api/login\", data);\n            const response = res.data;\n            console.log(response.data.data.token, \"response data!!!!!!!\");\n            // console.log(response.data.data.xx.data, \"to check the token for storage\")\n            localStorage.setItem(\"token\", response.data.data.token);\n            notify(\"User Login Successfully\");\n            setTimeout(()=>{\n                router.push(\"/dashboard\"); // here we are going to next page\n            }, 1000);\n        } catch (err) {\n            notifyError(\"Please Check Email or Password\");\n            console.log(err);\n        }\n    }\n    function onSubmitHandler(event) {\n        event.preventDefault();\n        const email = emailRef.current.value;\n        const password = passwordRef.current.value;\n        const data = {\n            email,\n            password\n        };\n        console.log(data, \"data here\");\n        login(data);\n    }\n    const notify = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(msg, {\n            position: \"top-right\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        })\n    ;\n    const notifyError = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(msg, {\n            position: \"top-right\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        })\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                class: \"profile-sec pb-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"row justify-content-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                                position: \"top-right\",\n                                autoClose: 5000,\n                                hideProgressBar: false,\n                                newestOnTop: false,\n                                closeOnClick: true,\n                                rtl: false,\n                                pauseOnFocusLoss: true,\n                                draggable: true,\n                                pauseOnHover: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                class: \"input-sec\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"line profile-line\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        class: \"heading-text pink-text mt-2\",\n                                        children: \" LOGIN ADMIN\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"name-sec\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"input-item\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                    className: \"item-text\",\n                                                    children: \"EMAIL\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    ref: emailRef,\n                                                    className: \"textinput\",\n                                                    type: \"email\",\n                                                    name: \"username\",\n                                                    placeholder: \"Enter your Email\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"input-item\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"item-text\",\n                                                children: \"PASSWORD\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                                lineNumber: 105,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                ref: passwordRef,\n                                                className: \"textinput\",\n                                                type: \"password\",\n                                                name: \"last-name\",\n                                                placeholder: \"Enter your Password\",\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"funds-page.html\",\n                                        class: \"btn btn-round btn-warning w-100 \",\n                                        style: {\n                                            marginTop: \"126px\",\n                                            marginBottom: \"20px\"\n                                        },\n                                        type: \"button\",\n                                        onClick: onSubmitHandler,\n                                        children: \"CONTINUE\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"para-text\",\n                                        children: [\n                                            \"Forgot Password?\",\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                style: {\n                                                    fontWeight: \"600\"\n                                                },\n                                                children: \"FORGOT\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                                lineNumber: 131,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"js/bootstrap.bundle.js\"\n            }, void 0, false, {\n                fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/Component/RegistrationPage.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO2dEQUNoQkMsV0FBVyxFQUFDLHFCQUFxQjtnREFDakNDLFFBQVE7Ozs7O3lEQUNSOzs7Ozs7aURBQ0U7a0RBR1IsOERBQUNDLEdBQUM7d0NBQ0FDLElBQUksRUFBQyxpQkFBaUI7d0NBQ3RCZixLQUFLLEVBQUMsa0NBQWtDO3dDQUN4Q2dCLEtBQUssRUFBRTs0Q0FBRUMsU0FBUyxFQUFFLE9BQU87NENBQUVDLFlBQVksRUFBRSxNQUFNO3lDQUFFO3dDQUNuRFIsSUFBSSxFQUFDLFFBQVE7d0NBQ2JTLE9BQU8sRUFBRXZDLGVBQWU7a0RBQ3pCLFVBRUQ7Ozs7O2lEQUFJO2tEQUVKLDhEQUFDd0MsR0FBQzt3Q0FBQ2QsU0FBUyxFQUFDLFdBQVc7OzRDQUV0QixrQkFDZ0I7NENBQUMsR0FBRzswREFDcEIsOERBQUNlLE1BQUk7Z0RBQUNMLEtBQUssRUFBRTtvREFBRU0sVUFBVSxFQUFFLEtBQUs7aURBQUU7MERBQUUsUUFBTTs7Ozs7eURBQU87Ozs7OztpREFDL0M7Ozs7Ozt5Q0FDQzs7Ozs7O2lDQUNIOzs7Ozs2QkFDRjs7Ozs7eUJBQ0U7MEJBRVYsOERBQUNDLFFBQU07Z0JBQUNDLEdBQUcsRUFBQyx3QkFBd0I7Ozs7O3lCQUFVOzs7Ozs7aUJBQzFDLENBQ047Q0FDSDtBQUVELGlFQUFlL0QsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vQ29tcG9uZW50L1JlZ2lzdHJhdGlvblBhZ2UuanM/ZDljZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IC8vIHRoaXMgcm91dGUgaGVscHMgdXMgdG8gZ29pbmcgbmV4dCBwYWdlXG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9naW4oZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEsXCJmcm9tIHNlbmRcIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvbG9naW5cIiwgZGF0YSk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcy5kYXRhO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhLnRva2VuLCBcInJlc3BvbnNlIGRhdGEhISEhISEhXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5kYXRhLnh4LmRhdGEsIFwidG8gY2hlY2sgdGhlIHRva2VuIGZvciBzdG9yYWdlXCIpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS5kYXRhLmRhdGEudG9rZW4pXG5cbiAgICAgIG5vdGlmeShcIlVzZXIgTG9naW4gU3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTsgLy8gaGVyZSB3ZSBhcmUgZ29pbmcgdG8gbmV4dCBwYWdlXG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIG5vdGlmeUVycm9yKFwiUGxlYXNlIENoZWNrIEVtYWlsIG9yIFBhc3N3b3JkXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbiAgXG5cbiAgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWU7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coZGF0YSwgXCJkYXRhIGhlcmVcIik7XG5cbiAgICBsb2dpbihkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IG5vdGlmeSA9IChtc2cpID0+XG4gICAgdG9hc3Quc3VjY2Vzcyhtc2csIHtcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgfSk7XG5cbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PlxuICAgIHRvYXN0LmVycm9yKG1zZywge1xuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInByb2ZpbGUtc2VjIHBiLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxuICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiaW5wdXQtc2VjXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lIHByb2ZpbGUtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJoZWFkaW5nLXRleHQgcGluay10ZXh0IG10LTJcIj4gTE9HSU4gQURNSU48L2gzPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLXNlY1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIml0ZW0tdGV4dFwiPkVNQUlMPC9oNj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0aW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIml0ZW0tdGV4dFwiPlBBU1NXT1JEPC9oNj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0aW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiZnVuZHMtcGFnZS5odG1sXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcm91bmQgYnRuLXdhcm5pbmcgdy0xMDAgXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTI2cHhcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0SGFuZGxlcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENPTlRJTlVFXG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhLXRleHRcIlxuICAgICAgICAgICAgICAvLyAgb25DbGljaz17Zm9yZ290SGFuZGxlcn1cbiAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/e1wiIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+Rk9SR09UPC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2NyaXB0IHNyYz1cImpzL2Jvb3RzdHJhcC5idW5kbGUuanNcIj48L3NjcmlwdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VSZWYiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlUm91dGVyIiwiTG9naW4iLCJlbWFpbFJlZiIsInBhc3N3b3JkUmVmIiwicm91dGVyIiwibG9naW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlcyIsInBvc3QiLCJyZXNwb25zZSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm5vdGlmeSIsInNldFRpbWVvdXQiLCJwdXNoIiwiZXJyIiwibm90aWZ5RXJyb3IiLCJvblN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsIm1zZyIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3MiLCJuZXdlc3RPblRvcCIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJmb3JtIiwiaDMiLCJjbGFzc05hbWUiLCJoNiIsImlucHV0IiwicmVmIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYSIsImhyZWYiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm9uQ2xpY2siLCJwIiwic3BhbiIsImZvbnRXZWlnaHQiLCJzY3JpcHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/RegistrationPage.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component/RegistrationPage */ \"./Component/RegistrationPage.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__]);\n_Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst registrationPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Component_RegistrationPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/pages/index.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac1/Desktop/param/parm/project/mscp admin/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registrationPage); // export async function getServerSideProps(context) {\n //   const session = await getSession(context)\n //   if (session) {\n //     return {\n //       redirect: {\n //         destination: \"/dashboard\",\n //         permanent: false,\n //       }\n //     }\n //   }\n //   return {\n //     props:{\n //       session\n //     }\n //   }\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ21DO0FBQ2xCO0FBRzNDLE1BQU1HLGdCQUFnQixHQUFHLElBQU07SUFDN0IscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0EsNEVBQUNILG1FQUFnQjs7OztxQkFBRTs7Ozs7aUJBRWpCLENBQ1A7Q0FDRjtBQUVELGlFQUFlRSxnQkFBZ0IsRUFBQyxDQUVoQyxzREFBc0Q7Q0FDdEQsOENBQThDO0NBQzlDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQyw0QkFBNEI7Q0FDNUIsVUFBVTtDQUNWLFFBQVE7Q0FDUixNQUFNO0NBQ04sYUFBYTtDQUNiLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsUUFBUTtDQUNSLE1BQU07Q0FDTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVkb2FkbWluLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvblBhZ2UgZnJvbSAnLi4vQ29tcG9uZW50L1JlZ2lzdHJhdGlvblBhZ2UnO1xuaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5cbmNvbnN0IHJlZ2lzdHJhdGlvblBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPFJlZ2lzdHJhdGlvblBhZ2UvPlxuICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25QYWdlO1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcbi8vICAgaWYgKHNlc3Npb24pIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcmVkaXJlY3Q6IHtcbi8vICAgICAgICAgZGVzdGluYXRpb246IFwiL2Rhc2hib2FyZFwiLFxuLy8gICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOntcbi8vICAgICAgIHNlc3Npb25cbi8vICAgICB9XG4vLyAgIH1cbi8vIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWdpc3RyYXRpb25QYWdlIiwiZ2V0U2Vzc2lvbiIsInJlZ2lzdHJhdGlvblBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();