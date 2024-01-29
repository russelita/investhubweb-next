"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/login",{

/***/ "./src/features/login/ui/FormLogin.tsx":
/*!*********************************************!*\
  !*** ./src/features/login/ui/FormLogin.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FooterAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FooterAuth */ \"./src/components/FooterAuth.tsx\");\n/* harmony import */ var _components_FormButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FormButton */ \"./src/components/FormButton.tsx\");\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FormInput */ \"./src/components/FormInput.tsx\");\n/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/space */ \"./node_modules/antd/lib/space/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shared_utils_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shared/utils/helper */ \"./src/shared/utils/helper.js\");\n/* harmony import */ var _shared_images_logo_logo_investhub_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shared/images/logo/logo_investhub.webp */ \"./src/shared/images/logo/logo_investhub.webp\");\n/* harmony import */ var _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useLoginForm */ \"./src/features/login/hooks/useLoginForm.ts\");\n/* harmony import */ var _shared_constants_path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/shared/constants/path */ \"./src/shared/constants/path.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst initialAuthState = {\n    loading: true,\n    isLogin: false,\n    isProfileUpdated: false,\n    user: null,\n    initialRoute: \"Home\",\n    token: null,\n    fcmToken: null\n};\nconst FormLogin = ()=>{\n    _s();\n    const { mutationQuery, handleOnSubmit } = (0,_hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    const { isLoading } = mutationQuery;\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_7___default().useState({\n        email: \"\",\n        password: \"\"\n    });\n    const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_7___default().useState({});\n    const handleChange = (event)=>{\n        const { target: { name, value } } = event;\n        // const value =\n        //   event.target.type === \"file\" ? event.target.files[0] : event.target.value;\n        console.log(name, value);\n        setFormData(()=>({\n                ...formData,\n                [name]: value\n            }));\n        // Clear error for a field once it has been changed\n        if (errors[name]) {\n            setErrors(()=>({\n                    ...formData,\n                    [name]: null\n                }));\n        }\n    };\n    const handleLogin = (event)=>{\n        event.preventDefault();\n        console.log(\"event\", event);\n        let validationErrors = {};\n        // Simple validation for empty fields\n        for(const key in formData){\n            if (!formData[key]) {\n                validationErrors[key] = \"\".concat(key.charAt(0).toUpperCase() + key.slice(1), \" is required.\");\n            }\n            if (key == \"email\" && !(0,_shared_utils_helper__WEBPACK_IMPORTED_MODULE_8__.validateEmail)(formData[key])) {\n                validationErrors[key] = \"\".concat(key.charAt(0).toUpperCase() + key.slice(1), \" format is wrong.\");\n            }\n        }\n        if (Object.keys(validationErrors).length > 0) {\n            setErrors(validationErrors);\n            return;\n        }\n        let temp = initialAuthState;\n        temp.isLogin = true;\n        localStorage.setItem(\"dataUser\", JSON.stringify(temp));\n        // Cookies.set('token', 'sdkaldknldnlasndlkandlknadlknalkdnalk');\n        //     Cookies.set('user', JSON.stringify({user: 'rusli'}));\n        //     navigate.replace(DASHBOARD_HOME);\n        navigate.push(_shared_constants_path__WEBPACK_IMPORTED_MODULE_11__.DASHBOARD_PROFILE);\n    };\n    const onFinish = (values)=>{\n        handleOnSubmit(values.email, values.password);\n    };\n    const onFinishFailed = (errorInfo)=>{\n        console.log(\"Failed:\", errorInfo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_space__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        direction: \"vertical\",\n        style: {\n            display: \"flex\",\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"icon-logo-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: _shared_images_logo_logo_investhub_webp__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                            alt: \"icon-logo\",\n                            className: \"icon-logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sub-right-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-ask\",\n                                children: \"Doesn’t have an account?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: _shared_constants_path__WEBPACK_IMPORTED_MODULE_11__.DASHBOARD_REGISTER,\n                                className: \"text-register\",\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-title\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-title\",\n                        children: \"Login!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-title-info\",\n                        children: \"Please input your information in the fields below\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"form-input-email\",\n                        placeholder: \"Enter Email\",\n                        title: \"Email Address\",\n                        type: \"email\",\n                        name: \"email\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"error\",\n                        children: errors.email\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 26\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"form-input-password\",\n                        placeholder: \"Enter Password\",\n                        title: \"Password*\",\n                        type: \"password\",\n                        name: \"password\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined),\n                    errors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"error\",\n                        children: errors.password\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: _shared_constants_path__WEBPACK_IMPORTED_MODULE_11__.DASHBOARD_FORGOT,\n                        className: \"text-forgot-password\",\n                        children: \"Forgot your password?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"form-button-login\",\n                        onClick: handleLogin,\n                        title: \"Login\",\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FooterAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                backToLogin: false,\n                hiddenButton: false,\n                hiddenLineOr: false\n            }, void 0, false, {\n                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/features/login/ui/FormLogin.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormLogin, \"F0EcXfn0OgQg2nZq71dJ+9WJMwo=\", false, function() {\n    return [\n        _hooks_useLoginForm__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = FormLogin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormLogin);\nvar _c;\n$RefreshReg$(_c, \"FormLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1osNERBQVlBO1FBRXJDSixrREFBU0E7OztLQUh0QmdCO0FBdUlOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9sb2dpbi91aS9Gb3JtTG9naW4udHN4PzcyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlckF1dGggZnJvbSBcIkAvY29tcG9uZW50cy9Gb290ZXJBdXRoXCI7XG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1CdXR0b25cIjtcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtSW5wdXRcIjtcbmltcG9ydCB7IFNwYWNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSBcIkAvc2hhcmVkL3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IEljb25Mb2dvIGZyb20gXCJAL3NoYXJlZC9pbWFnZXMvbG9nby9sb2dvX2ludmVzdGh1Yi53ZWJwXCI7XG5pbXBvcnQgdXNlTG9naW5Gb3JtIGZyb20gXCIuLi9ob29rcy91c2VMb2dpbkZvcm1cIjtcbmltcG9ydCB7IERBU0hCT0FSRF9SRUdJU1RFUiwgREFTSEJPQVJEX0ZPUkdPVCwgREFTSEJPQVJEX0hPTUUsIERBU0hCT0FSRF9QUk9GSUxFIH0gZnJvbSAnQC9zaGFyZWQvY29uc3RhbnRzL3BhdGgnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuXG5jb25zdCBpbml0aWFsQXV0aFN0YXRlID0ge1xuICBsb2FkaW5nOiB0cnVlLFxuICBpc0xvZ2luOiBmYWxzZSxcbiAgaXNQcm9maWxlVXBkYXRlZDogZmFsc2UsXG4gIHVzZXI6IG51bGwsXG4gIGluaXRpYWxSb3V0ZTogXCJIb21lXCIsXG4gIHRva2VuOiBudWxsLFxuICBmY21Ub2tlbjogbnVsbCxcbn07XG5cbmNvbnN0IEZvcm1Mb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBtdXRhdGlvblF1ZXJ5LCBoYW5kbGVPblN1Ym1pdCB9ID0gdXNlTG9naW5Gb3JtKCk7XG4gIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSBtdXRhdGlvblF1ZXJ5O1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oe1xuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oe30pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSxcbiAgICB9ID0gZXZlbnQ7XG4gICAgLy8gY29uc3QgdmFsdWUgPVxuICAgIC8vICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiZmlsZVwiID8gZXZlbnQudGFyZ2V0LmZpbGVzWzBdIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKTtcblxuICAgIHNldEZvcm1EYXRhKCgpID0+ICh7XG4gICAgICAuLi5mb3JtRGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSkpO1xuICAgIC8vIENsZWFyIGVycm9yIGZvciBhIGZpZWxkIG9uY2UgaXQgaGFzIGJlZW4gY2hhbmdlZFxuICAgIGlmIChlcnJvcnNbbmFtZV0pIHtcbiAgICAgIHNldEVycm9ycygoKSA9PiAoe1xuICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgW25hbWVdOiBudWxsLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiZXZlbnRcIiwgZXZlbnQpO1xuXG4gICAgbGV0IHZhbGlkYXRpb25FcnJvcnMgPSB7fSBhcyBhbnk7XG5cbiAgICAvLyBTaW1wbGUgdmFsaWRhdGlvbiBmb3IgZW1wdHkgZmllbGRzXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZm9ybURhdGEpIHtcbiAgICAgIGlmICghZm9ybURhdGFba2V5XSkge1xuICAgICAgICB2YWxpZGF0aW9uRXJyb3JzW2tleV0gPSBgJHtcbiAgICAgICAgICBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSlcbiAgICAgICAgfSBpcyByZXF1aXJlZC5gO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09IFwiZW1haWxcIiAmJiAhdmFsaWRhdGVFbWFpbChmb3JtRGF0YVtrZXldKSkge1xuICAgICAgICB2YWxpZGF0aW9uRXJyb3JzW2tleV0gPSBgJHtcbiAgICAgICAgICBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSlcbiAgICAgICAgfSBmb3JtYXQgaXMgd3JvbmcuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRhdGlvbkVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgc2V0RXJyb3JzKHZhbGlkYXRpb25FcnJvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0ZW1wID0gaW5pdGlhbEF1dGhTdGF0ZTtcbiAgICB0ZW1wLmlzTG9naW4gPSB0cnVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodGVtcCkpO1xuICAgIC8vIENvb2tpZXMuc2V0KCd0b2tlbicsICdzZGthbGRrbmxkbmxhc25kbGthbmRsa25hZGxrbmFsa2RuYWxrJyk7XG4gICAgLy8gICAgIENvb2tpZXMuc2V0KCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoe3VzZXI6ICdydXNsaSd9KSk7XG4gICAgLy8gICAgIG5hdmlnYXRlLnJlcGxhY2UoREFTSEJPQVJEX0hPTUUpO1xuICAgIG5hdmlnYXRlLnB1c2goREFTSEJPQVJEX1BST0ZJTEUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlczogYW55KSA9PiB7XG4gICAgaGFuZGxlT25TdWJtaXQodmFsdWVzLmVtYWlsLCB2YWx1ZXMucGFzc3dvcmQpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbzogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJGYWlsZWQ6XCIsIGVycm9ySW5mbyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbnRhaW5lci1oZWFkZXJcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImljb24tbG9nby1jb250YWluZXJcIn0+XG4gICAgICAgICAgPEltYWdlIHNyYz17SWNvbkxvZ299IGFsdD1cImljb24tbG9nb1wiIGNsYXNzTmFtZT17XCJpY29uLWxvZ29cIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN1Yi1yaWdodC1jb250YWluZXJcIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWFza1wiPntcIkRvZXNu4oCZdCBoYXZlIGFuIGFjY291bnQ/XCJ9PC9kaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj17REFTSEJPQVJEX1JFR0lTVEVSfSBjbGFzc05hbWU9e1widGV4dC1yZWdpc3RlclwifT5cbiAgICAgICAgICAgIHtcIlJlZ2lzdGVyXCJ9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGFpbmVyLXRpdGxlXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LXRpdGxlXCJ9PntcIkxvZ2luIVwifTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LXRpdGxlLWluZm9cIn0+XG4gICAgICAgICAge1wiUGxlYXNlIGlucHV0IHlvdXIgaW5mb3JtYXRpb24gaW4gdGhlIGZpZWxkcyBiZWxvd1wifVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWlucHV0LWVtYWlsXCJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW50ZXIgRW1haWxcIn1cbiAgICAgICAgICB0aXRsZT17XCJFbWFpbCBBZGRyZXNzXCJ9XG4gICAgICAgICAgdHlwZT17XCJlbWFpbFwifVxuICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9PntlcnJvcnMuZW1haWx9PC9kaXY+fVxuICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0taW5wdXQtcGFzc3dvcmRcIn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17XCJFbnRlciBQYXNzd29yZFwifVxuICAgICAgICAgIHRpdGxlPXtcIlBhc3N3b3JkKlwifVxuICAgICAgICAgIHR5cGU9e1wicGFzc3dvcmRcIn1cbiAgICAgICAgICBuYW1lPXtcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+e2Vycm9ycy5wYXNzd29yZH08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXtEQVNIQk9BUkRfRk9SR09UfVxuICAgICAgICAgIGNsYXNzTmFtZT17XCJ0ZXh0LWZvcmdvdC1wYXNzd29yZFwifVxuICAgICAgICA+XG4gICAgICAgICAge1wiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCJ9XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8Rm9ybUJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWJ1dHRvbi1sb2dpblwifVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxuICAgICAgICAgIHRpdGxlPXtcIkxvZ2luXCJ9XG4gICAgICAgICAgdHlwZT17XCJzdWJtaXRcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlckF1dGhcbiAgICAgICAgYmFja1RvTG9naW49e2ZhbHNlfVxuICAgICAgICBoaWRkZW5CdXR0b249e2ZhbHNlfVxuICAgICAgICBoaWRkZW5MaW5lT3I9e2ZhbHNlfVxuICAgICAgLz5cbiAgICA8L1NwYWNlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUxvZ2luO1xuIl0sIm5hbWVzIjpbIkZvb3RlckF1dGgiLCJGb3JtQnV0dG9uIiwiRm9ybUlucHV0IiwiU3BhY2UiLCJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInZhbGlkYXRlRW1haWwiLCJJY29uTG9nbyIsInVzZUxvZ2luRm9ybSIsIkRBU0hCT0FSRF9SRUdJU1RFUiIsIkRBU0hCT0FSRF9GT1JHT1QiLCJEQVNIQk9BUkRfUFJPRklMRSIsImluaXRpYWxBdXRoU3RhdGUiLCJsb2FkaW5nIiwiaXNMb2dpbiIsImlzUHJvZmlsZVVwZGF0ZWQiLCJ1c2VyIiwiaW5pdGlhbFJvdXRlIiwidG9rZW4iLCJmY21Ub2tlbiIsIkZvcm1Mb2dpbiIsIm11dGF0aW9uUXVlcnkiLCJoYW5kbGVPblN1Ym1pdCIsImlzTG9hZGluZyIsIm5hdmlnYXRlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvZ2luIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0aW9uRXJyb3JzIiwia2V5IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0ZW1wIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsImRpcmVjdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhyZWYiLCJwbGFjZWhvbGRlciIsInRpdGxlIiwidHlwZSIsIm9uQ2hhbmdlIiwib25DbGljayIsImJhY2tUb0xvZ2luIiwiaGlkZGVuQnV0dG9uIiwiaGlkZGVuTGluZU9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/login/ui/FormLogin.tsx\n"));

/***/ })

});