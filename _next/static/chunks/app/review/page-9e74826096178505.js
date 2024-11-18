(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[672],{

/***/ 3850:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7509))

/***/ }),

/***/ 7509:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ReviewPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./src/components/IconProvider.tsx
var IconProvider = __webpack_require__(6413);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(1279);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(2759);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.mjs
var free_regular_svg_icons = __webpack_require__(7188);
;// CONCATENATED MODULE: ./src/components/review/ReviewForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ReviewForm(param) {
    let { onSubmit } = param;
    const [formData, setFormData] = (0,react.useState)({
        name: "",
        rating: 5,
        comment: "",
        image: null
    });
    const [submitting, setSubmitting] = (0,react.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        try {
            await onSubmit({
                ...formData,
                date: new Date().toISOString()
            });
        } catch (error) {
            console.error("Error submitting review:", error);
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "review-form",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "name",
                        children: "الاسم"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "text",
                        id: "name",
                        value: formData.name,
                        onChange: (e)=>setFormData({
                                ...formData,
                                name: e.target.value
                            }),
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        children: "التقييم"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "rating",
                        children: [
                            5,
                            4,
                            3,
                            2,
                            1
                        ].map((star)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: ()=>setFormData({
                                        ...formData,
                                        rating: star
                                    }),
                                className: "star-button",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                    icon: formData.rating >= star ? free_solid_svg_icons/* faStar */.Tab : free_regular_svg_icons/* faStar */.Tab,
                                    className: formData.rating >= star ? "star-filled" : "star-empty"
                                })
                            }, star))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "comment",
                        children: "التعليق"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                        id: "comment",
                        value: formData.comment,
                        onChange: (e)=>setFormData({
                                ...formData,
                                comment: e.target.value
                            }),
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                type: "submit",
                className: "submit-button",
                disabled: submitting,
                children: submitting ? "جاري الإرسال..." : "إرسال التقييم"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/review/AlreadyReviewed.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function AlreadyReviewed(param) {
    let { reviewerData } = param;
    const reviewDate = reviewerData.date ? new Date(reviewerData.date) : new Date();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "rv-thank-you",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                icon: free_solid_svg_icons/* faCircleExclamation */.xHz,
                className: "rv-thank-you-icon warning"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "rv-thank-you-title",
                children: reviewerData.name ? "عذراً ".concat(reviewerData.name) : "عذراً"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "rv-thank-you-text",
                children: [
                    "لقد قمت بتقييم خدماتي مسبقاً بتاريخ ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        dir: "ltr",
                        children: reviewDate.toLocaleDateString("en-US")
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/",
                className: "rv-back-btn",
                children: "العودة للرئيسية"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/review/ThankYouMessage.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ThankYouMessage(param) {
    let { reviewerData } = param;
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "rv-thank-you",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                icon: free_solid_svg_icons/* faCircleCheck */.fV7,
                className: "rv-thank-you-icon success"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "rv-thank-you-title",
                children: "تم استلام تقييمك"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "rv-thank-you-text",
                children: "أشكر لك مشاركتي رأيك"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "rv-thank-you-details",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rv-detail-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "rv-detail-label",
                                children: "المقيم"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "rv-detail-value",
                                children: reviewerData.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rv-detail-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "rv-detail-label",
                                children: "تاريخ التقييم"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "rv-detail-value",
                                dir: "ltr",
                                children: reviewerData.createdAt ? formatDate(reviewerData.createdAt) : ""
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/",
                className: "rv-back-btn",
                children: "العودة للرئيسية"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/LoadingSpinner.tsx
var LoadingSpinner = __webpack_require__(221);
;// CONCATENATED MODULE: ./src/app/review/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function ReviewPage() {
    const [hasReviewed, setHasReviewed] = (0,react.useState)(false);
    const [showThankYou, setShowThankYou] = (0,react.useState)(false);
    const [reviewerData, setReviewerData] = (0,react.useState)(null);
    const [loading, setLoading] = (0,react.useState)(false);
    const onReviewSubmitted = async (data)=>{
        setLoading(true);
        try {
            // يمكنك استبدال هذا بـ API آخر لحفظ المراجعات
            localStorage.setItem("hasReviewed", "true");
            localStorage.setItem("reviewerName", data.name);
            localStorage.setItem("reviewDate", new Date().toISOString());
            setShowThankYou(true);
            setReviewerData(data);
        } catch (error) {
            console.error("Error submitting review:", error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSpinner["default"], {});
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconProvider/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "review-container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "review-card",
                children: showThankYou ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ThankYouMessage, {
                    reviewerData: reviewerData
                }) : hasReviewed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AlreadyReviewed, {
                    reviewerData: reviewerData
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ReviewForm, {
                    onSubmit: onReviewSubmitted
                })
            })
        })
    });
}


/***/ }),

/***/ 6413:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ IconProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1988);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9398);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// منع Font Awesome من إضافة CSS تلقائياً
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__/* .config */ .vc.autoAddCss = false;
function IconProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 221:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadingSpinner; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1279);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2759);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function LoadingSpinner() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "loading-container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__/* .FontAwesomeIcon */ .G, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__/* .faSpinner */ .LM3,
            className: "loading-icon",
            spin: true
        })
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [676,892,396,675,971,472,744], function() { return __webpack_exec__(3850); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);