(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[404],{

/***/ 7889:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1824))

/***/ }),

/***/ 1824:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _lib_blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(255);
/* harmony import */ var _components_IconProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6413);
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(221);
/* harmony import */ var _components_CustomLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2696);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1279);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2759);
/* __next_internal_client_entry_do_not_use__ default auto */ 







// إضافة أيقونة الصورة المفقودة
const NoImageIcon = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "no-image-icon",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "m22.019 16.82-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76ZM6.97 8.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z"
            })
        })
    });
// تحديث طريقة عرض الصور
function ImageWithFallback(param) {
    let { imageUrl, className } = param;
    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const img = new Image();
        img.src = imageUrl;
        img.onerror = ()=>setHasError(true);
    }, [
        imageUrl
    ]);
    if (hasError) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NoImageIcon, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: className,
        style: {
            backgroundImage: "url(".concat(imageUrl, ")")
        }
    });
}
function BlogPage() {
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const postsPerPage = 9;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchPosts() {
            const blogPosts = await (0,_lib_blogger__WEBPACK_IMPORTED_MODULE_2__/* .getBlogPosts */ .u)();
            setPosts(blogPosts);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    // وظيفة البحث
    const handleSearch = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === "") {
            setSearchResults([]);
            return;
        }
        const results = posts.filter((post)=>post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt.toLowerCase().includes(query.toLowerCase()));
        setSearchResults(results);
    };
    if (loading) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    const mainPost = posts[0];
    const popularPosts = [
        ...posts
    ].sort((a, b)=>(b.views || 0) - (a.views || 0)).slice(0, 3);
    const otherPosts = posts.slice(1);
    // حساب المنشورات للصفحة الحالية
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return date.toLocaleDateString("ar", options);
    }
    // وظيفة تغيير الصفحة
    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IconProvider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "blog-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "main-content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "todays-article",
                            children: mainPost && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "/blog/".concat(mainPost.id),
                                className: "main-article",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "article-image-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageWithFallback, {
                                                imageUrl: mainPost.imageUrl,
                                                className: "article-image"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "views-badge",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__/* .FontAwesomeIcon */ .G, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__/* .faEye */ .Mdf
                                                    }),
                                                    " ",
                                                    mainPost.views || 0
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "article-details",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "article-title",
                                                children: mainPost.title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "article-excerpt",
                                                children: mainPost.excerpt
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "article-meta",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "post-status",
                                                        children: [
                                                            mainPost.isUpdated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "status-badge updated",
                                                                children: "تم التحديث"
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "status-badge published",
                                                                children: "تم النشر"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "post-date",
                                                                children: formatDate(mainPost.createdAt)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "read-more",
                                                        children: "قراءة المزيد"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "most-viewed",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    className: "section-label",
                                    children: "أحدث المنشورات"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "most-viewed-grid",
                                    children: currentPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            href: "/blog/".concat(post.id),
                                            className: "most-viewed-card",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "article-image-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageWithFallback, {
                                                            imageUrl: post.imageUrl,
                                                            className: "article-thumbnail"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "views-badge",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__/* .FontAwesomeIcon */ .G, {
                                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__/* .faEye */ .Mdf
                                                                }),
                                                                " ",
                                                                post.views || 0
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "article-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                            className: "article-title",
                                                            children: post.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                            className: "article-excerpt",
                                                            children: post.excerpt
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "article-meta",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "post-status",
                                                                    children: [
                                                                        post.isUpdated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                            className: "status-badge updated",
                                                                            children: "تم التحديث"
                                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                            className: "status-badge published",
                                                                            children: "تم النشر"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                            className: "post-date",
                                                                            children: formatDate(post.createdAt)
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "read-more",
                                                                    children: "قراءة المزيد"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, post.id))
                                }),
                                totalPages > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pagination",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "pagination-label",
                                            children: "الصفحات:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pagination-buttons",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                    onClick: ()=>handlePageChange(currentPage - 1),
                                                    className: "pagination-button prev",
                                                    disabled: currentPage === 1,
                                                    children: "السابق"
                                                }),
                                                Array.from({
                                                    length: totalPages
                                                }, (_, i)=>i + 1).map((number)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                        onClick: ()=>handlePageChange(number),
                                                        className: "pagination-button ".concat(currentPage === number ? "active" : ""),
                                                        children: number
                                                    }, number)),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                    onClick: ()=>handlePageChange(currentPage + 1),
                                                    className: "pagination-button next",
                                                    disabled: currentPage === totalPages,
                                                    children: "التالي"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    className: "sidebar",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "search-section",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    className: "sidebar-title",
                                    children: "البحث"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "search-box",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                            type: "text",
                                            placeholder: "ابحث في المدونة...",
                                            className: "search-input",
                                            value: searchQuery,
                                            onChange: handleSearch
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                            className: "search-button",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                    d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                searchQuery.trim() !== "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "search-results",
                                    children: searchResults.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "popular-posts",
                                        children: searchResults.map((post, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                href: "/blog/".concat(post.id),
                                                className: "popular-post-item",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "popular-post-content",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                            className: "popular-post-title",
                                                            children: post.title
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "popular-post-meta",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "post-date",
                                                                children: formatDate(post.createdAt)
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, post.id))
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "no-results",
                                        children: "لا توجد نتائج للبحث"
                                    })
                                })
                            ]
                        }),
                        searchQuery.trim() === "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    className: "sidebar-title",
                                    children: "المنشورات الشائعة"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "popular-posts",
                                    children: [
                                        posts[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            href: "/blog/".concat(posts[0].id),
                                            className: "popular-post-item with-image",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "popular-post-image",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageWithFallback, {
                                                        imageUrl: posts[0].imageUrl,
                                                        className: "popular-post-thumbnail"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "popular-post-content",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "popular-post-header",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "popular-post-number",
                                                                    children: "#1"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                    className: "popular-post-title",
                                                                    children: posts[0].title
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "popular-post-meta",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "post-date",
                                                                children: formatDate(posts[0].createdAt)
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        posts.slice(1, 5).map((post, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                href: "/blog/".concat(post.id),
                                                className: "popular-post-item",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "popular-post-number",
                                                        children: [
                                                            "#",
                                                            index + 2
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "popular-post-content",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                className: "popular-post-title",
                                                                children: post.title
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "popular-post-meta",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "post-date",
                                                                    children: formatDate(post.createdAt)
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, post.id))
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 2696:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ CustomLink; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4033);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CustomLink(param) {
    let { href, children, className } = param;
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const handleMenuClose = ()=>{
        document.body.classList.remove("mobile-menu-open");
        const navLinks = document.querySelector(".nav-links");
        navLinks === null || navLinks === void 0 ? void 0 : navLinks.classList.remove("mobile-menu-open");
        // تغيير الأيقونة إلى أيقونة القائمة
        const menuIcon = document.querySelector(".menu-icon");
        if (menuIcon) {
            menuIcon.innerHTML = '\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>\n        </svg>\n      ';
        }
    };
    // إغلاق القائمة عند تغيير المسار
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        handleMenuClose();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: className,
        onClick: handleMenuClose,
        children: children
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


/***/ }),

/***/ 255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ getBlogPosts; }
/* harmony export */ });
/* unused harmony export getBlogPost */
const BLOG_ID = "279667659503645305";
const API_KEY = "AIzaSyD63hBPKHJmj5oQC5n8dzO4u5edlR81OJU";
// دالة مساعدة للحصول على المسار الأساسي
const getBasePath = ()=> true ? "/3lismaeel" : 0;
// بيانات ثابتة للبناء
const STATIC_POSTS = [
    {
        id: "6497840499876073",
        title: "كيف تبدأ في تعلم البرمجة",
        content: '\n      <h2>كيف تبدأ في تعلم البرمجة</h2>\n      <p>تعلم البرمجة رحلة ممتعة تحتاج إلى الصبر والمثابرة...</p>\n      <img src="'.concat(getBasePath(), '/images/blog/programming.jpg" alt="تعلم البرمجة" />\n      <p>في هذا المقال سنتعرف على أهم الخطوات للبدء في تعلم البرمجة...</p>\n    '),
        excerpt: "تعلم البرمجة رحلة ممتعة تحتاج إلى الصبر والمثابرة...",
        imageUrl: "".concat(getBasePath(), "/images/blog/programming.jpg"),
        createdAt: "2024-01-01T00:00:00Z",
        views: 0,
        isUpdated: false,
        category: "البرمجة"
    },
    {
        id: "4300175848306059715",
        title: "أساسيات تطوير الويب",
        content: '\n      <h2>أساسيات تطوير الويب</h2>\n      <p>تطوير الويب يتطلب فهم عدة تقنيات أساسية...</p>\n      <img src="'.concat(getBasePath(), '/images/blog/web-dev.jpg" alt="تطوير الويب" />\n      <p>سنتعرف في هذا المقال على أهم التقنيات المطلوبة...</p>\n    '),
        excerpt: "تطوير الويب يتطلب فهم عدة تقنيات أساسية...",
        imageUrl: "".concat(getBasePath(), "/images/blog/web-dev.jpg"),
        createdAt: "2024-01-02T00:00:00Z",
        views: 0,
        isUpdated: false,
        category: "تطوير الويب"
    }
];
async function getBlogPosts() {
    // استخدام البيانات الثابتة في وضع البناء
    if (true) {
        return STATIC_POSTS;
    }
    try {
        const response = await fetch("https://www.googleapis.com/blogger/v3/blogs/".concat(BLOG_ID, "/posts?key=").concat(API_KEY), {
            cache: "no-store"
        });
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        return data.items.map((post)=>{
            var _post_labels;
            return {
                id: post.id,
                title: post.title,
                content: post.content,
                excerpt: post.content.replace(/<[^>]+>/g, "").substring(0, 150) + "...",
                imageUrl: extractFirstImage(post.content),
                createdAt: post.published,
                views: 0,
                isUpdated: new Date(post.updated) > new Date(post.published),
                category: ((_post_labels = post.labels) === null || _post_labels === void 0 ? void 0 : _post_labels[0]) || "عام"
            };
        });
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return STATIC_POSTS;
    }
}
async function getBlogPost(id) {
    if (true) {
        return STATIC_POSTS.find((post)=>post.id === id) || null;
    }
    try {
        const response = await fetch("https://www.googleapis.com/blogger/v3/blogs/".concat(BLOG_ID, "/posts/").concat(id, "?key=").concat(API_KEY), {
            cache: "no-store"
        });
        if (!response.ok) {
            return null;
        }
        const post = await response.json();
        return {
            id: post.id,
            title: post.title,
            content: post.content,
            published: post.published,
            imageUrl: extractFirstImage(post.content)
        };
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return null;
    }
}
function extractFirstImage(content) {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : "".concat(getBasePath(), "/images/blog/default.jpg");
}


/***/ }),

/***/ 9398:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4033:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(94)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [676,892,396,971,472,744], function() { return __webpack_exec__(7889); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);