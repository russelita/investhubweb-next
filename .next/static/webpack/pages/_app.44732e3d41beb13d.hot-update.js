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

/***/ "./src/shared/components/layout/ProfileLayout.tsx":
/*!********************************************************!*\
  !*** ./src/shared/components/layout/ProfileLayout.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_components_layout_dashboard_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/components/layout/dashboard-layout/Navbar */ \"./src/shared/components/layout/dashboard-layout/Navbar.tsx\");\n/* harmony import */ var antd_lib_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/grid */ \"./node_modules/antd/lib/grid/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _auth_layout_sider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout/sider */ \"./src/shared/components/layout/auth-layout/sider/index.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background: #f8f8f8;\\n  min-height: 100vh;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst { Content } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst CustomLayout = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_templateObject());\nconst ProfileLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const screens = antd_lib_grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"].useBreakpoint();\n    const sideBarCollapseWidth = screens.lg ? 108 : 0; // nol membuat sidebar menghilang ketika di layar kecil\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_components_layout_dashboard_layout_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/components/layout/ProfileLayout.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Content, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            style: {\n                                minHeight: \"calc(100vh - 132px)\"\n                            },\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/components/layout/ProfileLayout.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/components/layout/ProfileLayout.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Sider, {\n                        width: 600,\n                        style: {\n                            backgroundColor: \"transparent\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_auth_layout_sider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            button: false\n                        }, void 0, false, {\n                            fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/components/layout/ProfileLayout.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/components/layout/ProfileLayout.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rusliwanasuria/Documents/NextJS/investhub-web/src/shared/components/layout/ProfileLayout.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProfileLayout, \"o8MdUL/Nxo3UM77EI0fttHENoPQ=\", false, function() {\n    return [\n        antd_lib_grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"].useBreakpoint\n    ];\n});\n_c = ProfileLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileLayout);\nvar _c;\n$RefreshReg$(_c, \"ProfileLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0L1Byb2ZpbGVMYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdFO0FBQ3BDO0FBQUE7QUFDSDtBQUNNO0FBQ1c7QUFFbEQsTUFBTSxFQUFFTSxPQUFPLEVBQUUsR0FBR0osdURBQU1BO0FBRTFCLE1BQU1LLGVBQWVILDZEQUFNQSxDQUFDRix1REFBTUE7QUFTbEMsTUFBTU0sZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFTOztJQUN4QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVMsVUFBVVgsbUVBQWtCO0lBQ2xDLE1BQU1hLHVCQUF1QkYsUUFBUUcsRUFBRSxHQUFHLE1BQU0sR0FBRyx1REFBdUQ7SUFFMUcscUJBQ0U7OzBCQUNBLDhEQUFDZix5RkFBTUE7Ozs7OzBCQUNMLDhEQUFDRSx1REFBTUE7O2tDQUNMLDhEQUFDQSwrREFBYztrQ0FDYiw0RUFBQ2M7NEJBQ0NDLE9BQU87Z0NBQUVDLFdBQVc7NEJBQXNCO3NDQUV6Q1Q7Ozs7Ozs7Ozs7O2tDQUlMLDhEQUFDUCw2REFBWTt3QkFBQ2tCLE9BQU87d0JBQUtILE9BQU87NEJBQUVJLGlCQUFpQjt3QkFBYztrQ0FDaEUsNEVBQUNoQiwwREFBZUE7NEJBQUNpQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25DO0dBeEJNZDs7UUFHWVAsbUVBQWtCWTs7O0tBSDlCTDtBQTBCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0L1Byb2ZpbGVMYXlvdXQudHN4Pzk4N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvZGFzaGJvYXJkLWxheW91dC9OYXZiYXJcIjtcbmltcG9ydCB7IEdyaWQsIExheW91dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBTaWRlckxheW91dEF1dGggZnJvbSBcIi4vYXV0aC1sYXlvdXQvc2lkZXJcIjtcblxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XG5cbmNvbnN0IEN1c3RvbUxheW91dCA9IHN0eWxlZChMYXlvdXQpYFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbmA7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5jb25zdCBQcm9maWxlTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzY3JlZW5zID0gR3JpZC51c2VCcmVha3BvaW50KCk7XG4gIGNvbnN0IHNpZGVCYXJDb2xsYXBzZVdpZHRoID0gc2NyZWVucy5sZyA/IDEwOCA6IDA7IC8vIG5vbCBtZW1idWF0IHNpZGViYXIgbWVuZ2hpbGFuZyBrZXRpa2EgZGkgbGF5YXIga2VjaWxcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE5hdmJhciAvPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPExheW91dC5Db250ZW50PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogXCJjYWxjKDEwMHZoIC0gMTMycHgpXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0LkNvbnRlbnQ+XG5cbiAgICAgICAgPExheW91dC5TaWRlciB3aWR0aD17NjAwfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiB9fT5cbiAgICAgICAgICA8U2lkZXJMYXlvdXRBdXRoIGJ1dHRvbj17ZmFsc2V9IC8+XG4gICAgICAgIDwvTGF5b3V0LlNpZGVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTGF5b3V0O1xuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkdyaWQiLCJMYXlvdXQiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIlNpZGVyTGF5b3V0QXV0aCIsIkNvbnRlbnQiLCJDdXN0b21MYXlvdXQiLCJQcm9maWxlTGF5b3V0IiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJzY3JlZW5zIiwidXNlQnJlYWtwb2ludCIsInNpZGVCYXJDb2xsYXBzZVdpZHRoIiwibGciLCJkaXYiLCJzdHlsZSIsIm1pbkhlaWdodCIsIlNpZGVyIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/shared/components/layout/ProfileLayout.tsx\n"));

/***/ })

});