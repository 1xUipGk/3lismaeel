"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[694],{

/***/ 8694:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Logo = ()=>{
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "logo-img animate-pulse bg-gray-800 rounded-lg"
        }) // placeholder while loading
        ;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "logo",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256.7 256.7",
            className: "logo-img text-[#FF4D00] hover:text-white transition-colors duration-300",
            "aria-label": "شعار علي إسماعيل",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        fill: "#ffffff",
                        d: "M215.82,0h-122.82v134.05h-52.11V0h0C18.3,0,0,18.3,0,40.88v174.93c0,22.58,18.3,40.88,40.88,40.88h0v-.02c.21,0,.43.02.64.02h92.35v-40.88H40.88v-40.88h215.82v-40.88h-122.82V40.88h81.94v51.01h40.88v-51.01h0c0-22.58-18.3-40.88-40.88-40.88Z"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        fill: "#ffffff",
                        d: "M215.82,256.7h0c22.58,0,40.88-18.3,40.88-40.88h-40.88v40.88Z"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        fill: "#ffffff",
                        x: "154.4",
                        y: "215.82",
                        width: "40.88",
                        height: "40.88"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);


/***/ })

}]);