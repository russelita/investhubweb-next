"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/register",{

/***/ "./src/features/register/hooks/useRegisterForm.ts":
/*!********************************************************!*\
  !*** ./src/features/register/hooks/useRegisterForm.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_hooks_useMutationHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/hooks/useMutationHook */ \"./src/shared/hooks/useMutationHook.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_constants_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/constants/path */ \"./src/shared/constants/path.ts\");\n/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/notification */ \"./node_modules/antd/lib/notification/index.js\");\n/* harmony import */ var _shared_api_mutation_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/api/mutation/register */ \"./src/shared/api/mutation/register.ts\");\n\n\n\n\n\nconst useRegisterForm = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const mutationQuery = (0,_shared_hooks_useMutationHook__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        api: _shared_api_mutation_register__WEBPACK_IMPORTED_MODULE_3__.register,\n        options: {\n            // eslint-disable-next-line no-unused-vars\n            onError (error, variables, context) {\n                var _error_response_data, _error_response, _error, _error1;\n                antd_lib_notification__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error({\n                    message: (_error = error) === null || _error === void 0 ? void 0 : (_error_response = _error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.error,\n                    description: (_error1 = error) === null || _error1 === void 0 ? void 0 : _error1.message\n                });\n            },\n            // eslint-disable-next-line no-unused-vars\n            onSuccess (data, variables, context) {\n                antd_lib_notification__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success({\n                    message: \"Berhasil registrasi. Silahkan Login\"\n                });\n                router.replace(_shared_constants_path__WEBPACK_IMPORTED_MODULE_2__.DASHBOARD_EMAIL_CONFIRM);\n            }\n        }\n    });\n    const handleOnSubmit = (name, email, password, passwordConfirm)=>{\n        mutationQuery.mutate({\n            name,\n            email,\n            password,\n            passwordConfirm\n        });\n    };\n    return {\n        mutationQuery,\n        handleOnSubmit\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRegisterForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvcmVnaXN0ZXIvaG9va3MvdXNlUmVnaXN0ZXJGb3JtLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkQ7QUFDckI7QUFDMkM7QUFDL0M7QUFDc0I7QUFFMUQsTUFBTUssa0JBQWtCO0lBQ3RCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QixNQUFNTSxnQkFBZ0JQLHlFQUFlQSxDQUFDO1FBQ3BDUSxLQUFLSixtRUFBUUE7UUFDYkssU0FBUztZQUNQLDBDQUEwQztZQUMxQ0MsU0FBUUMsS0FBVSxFQUFFQyxTQUFTLEVBQUVDLE9BQU87b0JBRXpCRixzQkFBQUEsaUJBQUFBLFFBQ0lBO2dCQUZmUixtRUFBa0IsQ0FBQztvQkFDakJXLE9BQU8sR0FBRUgsU0FBQUEsbUJBQUFBLDhCQUFBQSxrQkFBQUEsT0FBT0ksUUFBUSxjQUFmSix1Q0FBQUEsdUJBQUFBLGdCQUFpQkssSUFBSSxjQUFyQkwsMkNBQUFBLHFCQUF1QkEsS0FBSztvQkFDckNNLFdBQVcsR0FBRU4sVUFBQUEsbUJBQUFBLDhCQUFBQSxRQUFPRyxPQUFPO2dCQUM3QjtZQUNGO1lBRUEsMENBQTBDO1lBQzFDSSxXQUFVRixJQUFTLEVBQUVKLFNBQVMsRUFBRUMsT0FBTztnQkFDckNWLHFFQUFvQixDQUFDO29CQUNuQlcsU0FBUztnQkFDWDtnQkFFQVIsT0FBT2MsT0FBTyxDQUFDbEIsMkVBQXVCQTtZQUN4QztRQUNGO0lBQ0Y7SUFFQSxNQUFNbUIsaUJBQWlCLENBQUNDLE1BQWNDLE9BQWVDLFVBQWtCQztRQUN0RWxCLGNBQWNtQixNQUFNLENBQUM7WUFDbEJKO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTGxCO1FBQ0FjO0lBQ0Y7QUFDRjtBQUVBLCtEQUFlaEIsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvcmVnaXN0ZXIvaG9va3MvdXNlUmVnaXN0ZXJGb3JtLnRzPzNkMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZU11dGF0aW9uSG9vayBmcm9tIFwiQC9zaGFyZWQvaG9va3MvdXNlTXV0YXRpb25Ib29rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBEQVNIQk9BUkRfRU1BSUxfQ09ORklSTSwgREFTSEJPQVJEX0xPR0lOIH0gZnJvbSAnQC9zaGFyZWQvY29uc3RhbnRzL3BhdGgnO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJ0Avc2hhcmVkL2FwaS9tdXRhdGlvbi9yZWdpc3Rlcic7XG5cbmNvbnN0IHVzZVJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbXV0YXRpb25RdWVyeSA9IHVzZU11dGF0aW9uSG9vayh7XG4gICAgYXBpOiByZWdpc3RlcixcbiAgICBvcHRpb25zOiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIG9uRXJyb3IoZXJyb3I6IGFueSwgdmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgbWVzc2FnZTogZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3I/Lm1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICBcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgb25TdWNjZXNzKGRhdGE6IGFueSwgdmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcbiAgICAgICAgICBtZXNzYWdlOiAnQmVyaGFzaWwgcmVnaXN0cmFzaS4gU2lsYWhrYW4gTG9naW4nLFxuICAgICAgICB9KTtcblxuICAgICAgICByb3V0ZXIucmVwbGFjZShEQVNIQk9BUkRfRU1BSUxfQ09ORklSTSk7XG4gICAgICB9LFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBwYXNzd29yZENvbmZpcm06IHN0cmluZykgPT4ge1xuXHQgIG11dGF0aW9uUXVlcnkubXV0YXRlKHtcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRDb25maXJtLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbXV0YXRpb25RdWVyeSxcbiAgICBoYW5kbGVPblN1Ym1pdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlZ2lzdGVyRm9ybTsiXSwibmFtZXMiOlsidXNlTXV0YXRpb25Ib29rIiwidXNlUm91dGVyIiwiREFTSEJPQVJEX0VNQUlMX0NPTkZJUk0iLCJub3RpZmljYXRpb24iLCJyZWdpc3RlciIsInVzZVJlZ2lzdGVyRm9ybSIsInJvdXRlciIsIm11dGF0aW9uUXVlcnkiLCJhcGkiLCJvcHRpb25zIiwib25FcnJvciIsImVycm9yIiwidmFyaWFibGVzIiwiY29udGV4dCIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImRhdGEiLCJkZXNjcmlwdGlvbiIsIm9uU3VjY2VzcyIsInN1Y2Nlc3MiLCJyZXBsYWNlIiwiaGFuZGxlT25TdWJtaXQiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsIm11dGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/register/hooks/useRegisterForm.ts\n"));

/***/ })

});