"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/shared/styles/theme/index.tsx":
/*!*******************************************!*\
  !*** ./src/shared/styles/theme/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/config-provider */ \"./node_modules/antd/lib/config-provider/index.js\");\n/* harmony import */ var _FontFamily__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FontFamily */ \"./src/shared/styles/FontFamily.ts\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ \"./src/shared/styles/theme/component/index.ts\");\n/* harmony import */ var _shared_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/components/layout */ \"./src/shared/components/layout/index.tsx\");\n\n\n// antd\n\n// font\n\n// theme\n// next\n\n\n// component\n// import ModalDefaultComponent from 'src/shared/components/ModalDefaultComponent';\n// import ContextMessageDefault from 'src/shared/components/ContextMessageDefault';\n// import GlobalLoadingSpin from 'src/shared/components/GlobalLoadingSpin';\n// const Layout = dynamic(() => import('src/layout'), { ssr: false });\nconst withTheme = (node)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            theme: {\n                token: {\n                    // default font\n                    fontFamily: _FontFamily__WEBPACK_IMPORTED_MODULE_2__.OpenSans.style.fontFamily,\n                    lineHeight: 1.5,\n                    colorText: \"#333333\",\n                    colorTextSecondary: \"#6E6E6E\",\n                    fontSize: 30\n                },\n                components: _component__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: _FontFamily__WEBPACK_IMPORTED_MODULE_2__.OpenSans.className,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: node\n                }, void 0, false, {\n                    fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/styles/theme/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/styles/theme/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/styles/theme/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n/* harmony default export */ __webpack_exports__[\"default\"] = (withTheme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL3N0eWxlcy90aGVtZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUUxQixPQUFPO0FBQytCO0FBRXRDLE9BQU87QUFDa0M7QUFFekMsUUFBUTtBQUVSLE9BQU87QUFDbUM7QUFDTTtBQUVoRCxZQUFZO0FBQ1osbUZBQW1GO0FBQ25GLG1GQUFtRjtBQUNuRiwyRUFBMkU7QUFFM0Usc0VBQXNFO0FBRXRFLE1BQU1LLFlBQVksQ0FBQ0MscUJBQ2pCO2tCQUNFLDRFQUFDTCxnRUFBY0E7WUFDYk0sT0FBTztnQkFDTEMsT0FBTztvQkFDTCxlQUFlO29CQUNmQyxZQUFZUCxpREFBUUEsQ0FBQ1EsS0FBSyxDQUFDRCxVQUFVO29CQUNyQ0UsWUFBWTtvQkFDWkMsV0FBVztvQkFDWEMsb0JBQW9CO29CQUNwQkMsVUFBVTtnQkFFWjtnQkFDQUMsWUFBWVosa0RBQWVBO1lBQzdCO3NCQUVBLDRFQUFDYTtnQkFBS0MsV0FBV2YsaURBQVFBLENBQUNlLFNBQVM7MEJBRWpDLDRFQUFDYixpRUFBTUE7OEJBQUVFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQiwrREFBZUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2hhcmVkL3N0eWxlcy90aGVtZS9pbmRleC50c3g/ODMwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIGFudGRcbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSBcImFudGRcIjtcblxuLy8gZm9udFxuaW1wb3J0IHsgT3BlblNhbnMgfSBmcm9tIFwiLi4vRm9udEZhbWlseVwiO1xuXG4vLyB0aGVtZVxuXG4vLyBuZXh0XG5pbXBvcnQgY29tcG9uZW50c1RoZW1lIGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRcIjtcblxuLy8gY29tcG9uZW50XG4vLyBpbXBvcnQgTW9kYWxEZWZhdWx0Q29tcG9uZW50IGZyb20gJ3NyYy9zaGFyZWQvY29tcG9uZW50cy9Nb2RhbERlZmF1bHRDb21wb25lbnQnO1xuLy8gaW1wb3J0IENvbnRleHRNZXNzYWdlRGVmYXVsdCBmcm9tICdzcmMvc2hhcmVkL2NvbXBvbmVudHMvQ29udGV4dE1lc3NhZ2VEZWZhdWx0Jztcbi8vIGltcG9ydCBHbG9iYWxMb2FkaW5nU3BpbiBmcm9tICdzcmMvc2hhcmVkL2NvbXBvbmVudHMvR2xvYmFsTG9hZGluZ1NwaW4nO1xuXG4vLyBjb25zdCBMYXlvdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnc3JjL2xheW91dCcpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmNvbnN0IHdpdGhUaGVtZSA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IChcbiAgPD5cbiAgICA8Q29uZmlnUHJvdmlkZXJcbiAgICAgIHRoZW1lPXt7XG4gICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgLy8gZGVmYXVsdCBmb250XG4gICAgICAgICAgZm9udEZhbWlseTogT3BlblNhbnMuc3R5bGUuZm9udEZhbWlseSxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICAgICAgY29sb3JUZXh0OiBcIiMzMzMzMzNcIixcbiAgICAgICAgICBjb2xvclRleHRTZWNvbmRhcnk6IFwiIzZFNkU2RVwiLFxuICAgICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgICAvLyBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50c1RoZW1lLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e09wZW5TYW5zLmNsYXNzTmFtZX0+XG4gICAgICAgIHsvKiA8R2xvYmFsTG9hZGluZ1NwaW4+ICovfVxuICAgICAgICA8TGF5b3V0Pntub2RlfTwvTGF5b3V0PlxuICAgICAgICB7LyogPC9HbG9iYWxMb2FkaW5nU3Bpbj4gKi99XG5cbiAgICAgICAgey8qIDxNb2RhbERlZmF1bHRDb21wb25lbnQgLz4gKi99XG5cbiAgICAgICAgey8qIDxDb250ZXh0TWVzc2FnZURlZmF1bHQgLz4gKi99XG4gICAgICA8L21haW4+XG4gICAgPC9Db25maWdQcm92aWRlcj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb25maWdQcm92aWRlciIsIk9wZW5TYW5zIiwiY29tcG9uZW50c1RoZW1lIiwiTGF5b3V0Iiwid2l0aFRoZW1lIiwibm9kZSIsInRoZW1lIiwidG9rZW4iLCJmb250RmFtaWx5Iiwic3R5bGUiLCJsaW5lSGVpZ2h0IiwiY29sb3JUZXh0IiwiY29sb3JUZXh0U2Vjb25kYXJ5IiwiZm9udFNpemUiLCJjb21wb25lbnRzIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/shared/styles/theme/index.tsx\n"));

/***/ })

});