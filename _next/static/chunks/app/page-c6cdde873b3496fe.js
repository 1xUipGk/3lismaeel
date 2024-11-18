(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 9156:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6794))

/***/ }),

/***/ 6794:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(1279);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(2759);
;// CONCATENATED MODULE: ./src/components/Testimonials.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Testimonials() {
    const [testimonials, setTestimonials] = (0,react.useState)([]);
    (0,react.useEffect)(()=>{
        // يمكنك استبدال هذا بالبيانات الثابتة أو API آخر
        const dummyTestimonials = [
            {
                id: "1",
                name: "أحمد",
                rating: 5,
                comment: "خدمة ممتازة",
                date: new Date().toISOString()
            }
        ];
        setTestimonials(dummyTestimonials);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "testimonials",
        children: testimonials.map((testimonial)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "testimonial-card",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "rating",
                        children: [
                            ...Array(testimonial.rating)
                        ].map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                icon: free_solid_svg_icons/* faStar */.Tab,
                                className: "star"
                            }, i))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "comment",
                        children: testimonial.comment
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "author",
                        children: testimonial.name
                    })
                ]
            }, testimonial.id))
    });
}

;// CONCATENATED MODULE: ./src/components/FAQ.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const faqData = [
    {
        question: "لماذا الدفع قبل العمل؟",
        answer: "الدفع قبل البدء في العمل يدل على جدية العميل وضمان تغطية تكاليف الخدمة"
    },
    {
        question: "من يتحمل ضريبة التحويل؟",
        answer: "ضريبة التحويل لتغطية تكاليف المعاملات المالية الدولية وتقديم خدمة آمنة لك"
    },
    {
        question: "هل يمكنني استلام ملفات (AI - PSD)؟",
        answer: "نعم يمكنك استلام الملفات المفتوحة وذلك عن طريق دفع قيمتها التي تعتمد على وع التصميم"
    },
    {
        question: "لماذا يتم نشر تصميمي في الموقع بدون إذني؟",
        answer: "التصاميم المنشورة في الموقع لغرض العرض والنشر وهي ضمن حقوقي كمصمم"
    },
    {
        question: "ما الذي يضمن لي جودة الخدمة؟",
        answer: "أحرص بشكل كبير على تقديم أفضل جودة في التصميم وإرضاء عملائي"
    }
];
function FAQ() {
    const [activeIndex, setActiveIndex] = (0,react.useState)(0);
    const toggleFAQ = (index)=>{
        setActiveIndex(activeIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "faq",
        id: "faq",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "section-header",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: "الأسئلة الشائعة"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "إجابات على أكثر الأسئلة شيوعاً"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "faq-grid",
                    children: faqData.map((faq, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "faq-item ".concat(activeIndex === index ? "active" : ""),
                            onClick: ()=>toggleFAQ(index),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "faq-question",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            children: faq.question
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                            icon: free_solid_svg_icons/* faChevronDown */.ptq,
                                            className: "transition-transform duration-300 ".concat(activeIndex === index ? "rotate-180" : "")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "faq-answer",
                                    style: {
                                        maxHeight: activeIndex === index ? "1000px" : "0"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        children: faq.answer
                                    })
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/IconProvider.tsx
var IconProvider = __webpack_require__(6413);
;// CONCATENATED MODULE: ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const services = [
    {
        icon: free_solid_svg_icons/* faHashtag */.olY,
        title: "سوشال ميديا",
        description: "تصميم منشورات جذابة لمنصات التواصل الاجتماعي تعزز حضورك الرقمي",
        link: "/portfolio#social-media"
    },
    {
        icon: free_solid_svg_icons/* faFileAlt */.cwv,
        title: "الفلايرات والبروشورات",
        description: "تصميم مطبوعات إعلانية مميزة تساعد في الترويج لنشاطك التجاري",
        link: "/portfolio#print"
    },
    {
        icon: free_solid_svg_icons/* faScroll */.tx1,
        title: "رول أب ولافتات المعارض",
        description: "تصميم لافتات ورول أب احترافية لمعارض والمؤتمرات",
        link: "/portfolio#roll-up"
    },
    {
        icon: free_solid_svg_icons/* faUtensils */.fkH,
        title: "قوائم الطعام (منيو)",
        description: "تصميم قوائم طعام جذابة واحترافية تعرض منتجاتك بشكل مميز",
        link: "/portfolio#menu"
    },
    {
        icon: free_solid_svg_icons/* faIdCard */.Ukp,
        title: "البطاقات الشخصية",
        description: "تصميم بطاقات أعمال احترافية تعزز هويتك المهنية",
        link: "/portfolio#business-cards"
    },
    {
        icon: free_solid_svg_icons/* faBook */.FL8,
        title: "أغلفة الكتب",
        description: "تصميم أغلفة كتب احترافية تجذب القراء وتعكس محتوى الكتاب",
        link: "/portfolio#book-covers"
    },
    {
        icon: free_solid_svg_icons/* faEnvelopeOpen */.dwZ,
        title: "بطاقات الدعوة الإلكترونية",
        description: "تصميم دعوات إلكترونية مميزة لمختلف المناسبات",
        link: "/portfolio#invitations"
    },
    {
        icon: free_solid_svg_icons/* faAward */.O7Q,
        title: "الشهادات التقديرية",
        description: "تصميم شهادات تقديرية احترافية للمؤسسات والفعاليات",
        link: "/portfolio#certificates"
    },
    {
        icon: free_solid_svg_icons/* faAd */.drw,
        title: "اللوحات الإعلانية",
        description: "تصميم لوحات إعلانية وستاندات احترافية للمؤتمرات والفعاليات",
        link: "/portfolio#advertising"
    }
];
function Home() {
    const [showAllServices, setShowAllServices] = (0,react.useState)(false);
    const [mounted, setMounted] = (0,react.useState)(false);
    const [animatingServices, setAnimatingServices] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    const visibleServices = showAllServices ? services : services.slice(0, 3);
    const additionalServices = services.slice(3);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(IconProvider/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: "hero",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "hero-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                            className: "animate-title",
                            children: "مصمم جرافيك محترف"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "animate-description",
                            children: "أقدم تصاميم إبداعية تناسب احتياجاتك"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "hero-buttons animate-buttons",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                    href: "/contact",
                                    className: "primary-btn",
                                    children: "احصل على تصميمك"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                    href: "#services",
                                    className: "secondary-btn",
                                    children: "استكشف خدماتي"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                id: "services",
                className: "services",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "section-header",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    children: "خدماتي"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: "مجموعة من الخدمات الاحترافية لتلبية احتياجاتك"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "services-grid",
                            children: [
                                services.slice(0, 3).map((service, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "service-card",
                                        style: {
                                            transitionDelay: "".concat(index * 0.1, "s")
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "service-icon",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                                    icon: service.icon
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                children: service.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                children: service.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                                className: "service-divider"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: service.link,
                                                className: "learn-more",
                                                children: "معرفة المزيد"
                                            })
                                        ]
                                    }, index)),
                                showAllServices && additionalServices.map((service, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "service-card ".concat(animatingServices ? "animate-in" : ""),
                                        style: {
                                            transitionDelay: "".concat((index + 1) * 0.1, "s")
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "service-icon",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                                    icon: service.icon
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                children: service.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                children: service.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {
                                                className: "service-divider"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: service.link,
                                                className: "learn-more",
                                                children: "معرفة المزيد"
                                            })
                                        ]
                                    }, "additional-".concat(index)))
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "services-footer",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: ()=>{
                                    setShowAllServices(!showAllServices);
                                    setAnimatingServices(true);
                                    setTimeout(()=>setAnimatingServices(false), 1000);
                                },
                                id: "showMoreServices",
                                className: "secondary-btn",
                                children: showAllServices ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        "عرض أقل",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                            icon: free_solid_svg_icons/* faChevronUp */.mTx,
                                            className: "icon-more"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        "عرض المزيد",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                            icon: free_solid_svg_icons/* faChevronDown */.ptq,
                                            className: "icon-more"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Testimonials, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FAQ, {})
        ]
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

/***/ 9398:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [676,892,396,971,472,744], function() { return __webpack_exec__(9156); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);