(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[548],{

/***/ 2511:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4787))

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

/***/ 4787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BlogPostPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(1279);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(2759);
// EXTERNAL MODULE: ./src/components/LoadingSpinner.tsx
var LoadingSpinner = __webpack_require__(221);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1396);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/blogger.ts
var blogger = __webpack_require__(255);
;// CONCATENATED MODULE: ./src/components/ImageWithFallback.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function ImageWithFallback(param) {
    let { imageUrl, className } = param;
    const [hasError, setHasError] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const img = new Image();
        img.src = imageUrl;
        img.onerror = ()=>setHasError(true);
    }, [
        imageUrl
    ]);
    if (hasError) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "no-image-icon",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m22.019 16.82-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76ZM6.97 8.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z"
                })
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: className,
        style: {
            backgroundImage: "url(".concat(imageUrl, ")")
        }
    });
}

// EXTERNAL MODULE: ./src/components/CustomLink.tsx
var CustomLink = __webpack_require__(2696);
;// CONCATENATED MODULE: ./src/components/blog/BlogPostPage.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const BLOG_ID = "279667659503645305";
const API_KEY = "AIzaSyD63hBPKHJmj5oQC5n8dzO4u5edlR81OJU";
function BlogPostPage(param) {
    let { postId } = param;
    const [post, setPost] = (0,react.useState)(null);
    const [posts, setPosts] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [isShareOpen, setIsShareOpen] = (0,react.useState)(false);
    const [searchQuery, setSearchQuery] = (0,react.useState)("");
    const [searchResults, setSearchResults] = (0,react.useState)([]);
    (0,react.useEffect)(()=>{
        async function fetchData() {
            try {
                var _data_labels;
                setLoading(true);
                // جلب المقال الحالي
                const response = await fetch("https://www.googleapis.com/blogger/v3/blogs/".concat(BLOG_ID, "/posts/").concat(postId, "?key=").concat(API_KEY));
                if (!response.ok) {
                    throw new Error("Failed to fetch post");
                }
                const data = await response.json();
                setPost({
                    id: data.id,
                    title: data.title,
                    content: data.content,
                    excerpt: data.content.replace(/<[^>]+>/g, "").substring(0, 150) + "...",
                    imageUrl: extractFirstImage(data.content),
                    createdAt: data.published,
                    views: 0,
                    isUpdated: new Date(data.updated) > new Date(data.published),
                    readingTime: "5 دقائق قراءة",
                    category: ((_data_labels = data.labels) === null || _data_labels === void 0 ? void 0 : _data_labels[0]) || "عام"
                });
                // جلب جميع المنشورات
                const allPosts = await (0,blogger/* getBlogPosts */.u)();
                setPosts(allPosts);
            } catch (err) {
                setError(err instanceof Error ? err.message : "حدث خطأ أثناء تحميل المقال");
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [
        postId
    ]);
    // وظيفة البحث
    const handleSearch = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === "") {
            setSearchResults([]);
            return;
        }
        const results = posts.filter((post)=>post.title.toLowerCase().includes(query.toLowerCase()));
        setSearchResults(results);
    };
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return date.toLocaleDateString("ar", options);
    }
    const processContent = (content)=>{
        // إزالة الروابط من الصور مع الحفاظ على الصور نفسها
        return content.replace(/<a[^>]*>(\s*<img[^>]+>)\s*<\/a>/g, (match, img)=>img).replace(/<img[^>]+>/g, (img)=>'<div class="separator"><div class="zmImg">'.concat(img, "</div></div>"));
    };
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSpinner["default"], {});
    if (error) return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "error-message",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: error
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "action-buttons",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "error-primary-btn",
                        onClick: ()=>window.location.reload(),
                        children: "حاول مرة أخرى"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "/",
                        className: "error-secondary-btn",
                        children: "العودة للرئيسية"
                    })
                ]
            })
        ]
    });
    if (!post) return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "error-message",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: "لم يتم العثور على المقال"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "action-buttons",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                    href: "/",
                    className: "error-secondary-btn",
                    children: "العودة للرئيسية"
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "blog-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "brdCmb",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/",
                                children: "الصفحة الرئيسية"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                href: "/blog",
                                children: "المدونة"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: post.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "blog-post",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: "post-title",
                                children: post.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "blog-meta",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "meta-right",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                                        icon: free_solid_svg_icons/* faClock */.SZw
                                                    }),
                                                    formatDate(post.createdAt)
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* FontAwesomeIcon */.G, {
                                                        icon: free_solid_svg_icons/* faClock */.SZw
                                                    }),
                                                    post.readingTime
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        onClick: ()=>setIsShareOpen(true),
                                        className: "share-icon",
                                        "aria-label": "مشاركة",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "blog-content",
                                dangerouslySetInnerHTML: {
                                    __html: processContent(post.content)
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "pSh",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "pShc",
                                    "data-text": "مشاركة:",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            "aria-label": "Facebook",
                                            className: "c fb",
                                            "data-text": "فيسبوك",
                                            href: "https://www.facebook.com/sharer.php?u=".concat(window.location.href),
                                            rel: "noopener",
                                            role: "button",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                viewBox: "0 0 64 64",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "M20.1,36h3.4c0.3,0,0.6,0.3,0.6,0.6V58c0,1.1,0.9,2,2,2h7.8c1.1,0,2-0.9,2-2V36.6c0-0.3,0.3-0.6,0.6-0.6h5.6c1,0,1.9-0.7,2-1.7l1.3-7.8c0.2-1.2-0.8-2.4-2-2.4h-6.6c-0.5,0-0.9-0.4-0.9-0.9v-5c0-1.3,0.7-2,2-2h5.9c1.1,0,2-0.9,2-2V6.2c0-1.1-0.9-2-2-2h-7.1c-13,0-12.7,10.5-12.7,12v7.3c0,0.3-0.3,0.6-0.6,0.6h-3.4c-1.1,0-2,0.9-2,2v7.8C18.1,35.1,19,36,20.1,36z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            "aria-label": "WhatsApp",
                                            className: "c wa",
                                            "data-text": "واتساب",
                                            href: "https://api.whatsapp.com/send?text=".concat(window.location.href),
                                            rel: "noopener",
                                            role: "button",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                viewBox: "0 0 64 64",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "M6.9,48.4c-0.4,1.5-0.8,3.3-1.3,5.2c-0.7,2.9,1.9,5.6,4.8,4.8l5.1-1.3c1.7-0.4,3.5-0.2,5.1,0.5c4.7,2.1,10,3,15.6,2.1c12.3-1.9,22-11.9,23.5-24.2C62,17.3,46.7,2,28.5,4.2C16.2,5.7,6.2,15.5,4.3,27.8c-0.8,5.6,0,10.9,2.1,15.6C7.1,44.9,7.3,46.7,6.9,48.4z M21.3,19.8c0.6-0.5,1.4-0.9,1.8-0.9s2.3-0.2,2.9,1.2c0.6,1.4,2,4.7,2.1,5.1c0.2,0.3,0.3,0.7,0.1,1.2c-0.2,0.5-0.3,0.7-0.7,1.1c-0.3,0.4-0.7,0.9-1,1.2c-0.3,0.3-0.7,0.7-0.3,1.4c0.4,0.7,1.8,2.9,3.8,4.7c2.6,2.3,4.9,3,5.5,3.4c0.7,0.3,1.1,0.3,1.5-0.2c0.4-0.5,1.7-2,2.2-2.7c0.5-0.7,0.9-0.6,1.6-0.3c0.6,0.2,4,1.9,4.7,2.2c0.7,0.3,1.1,0.5,1.3,0.8c0.2,0.3,0.2,1.7-0.4,3.2c-0.6,1.6-2.1,3.1-3.2,3.5c-1.3,0.5-2.8,0.7-9.3-1.9c-7-2.8-11.8-9.8-12.1-10.3c-0.3-0.5-2.8-3.7-2.8-7.1C18.9,22.1,20.7,20.4,21.3,19.8z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            "aria-label": "Twitter",
                                            className: "c tw",
                                            "data-text": "تويتر",
                                            href: "https://twitter.com/share?url=".concat(window.location.href),
                                            rel: "noopener",
                                            role: "button",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                viewBox: "0 0 64 64",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "M11.4,26.6C11.5,26.6,11.5,26.6,11.4,26.6c-0.9,0-1.8-0.2-2.6-0.4c-1.3-0.4-2.5,0.8-2.1,2c1.1,4.3,4.5,7.7,8.8,8.6c-1,0.3-2,0.4-3,0.4c-1,0-1.7,1.1-1.2,2c1.9,3.5,5.6,5.9,9.7,6h1c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2c-1.3,0-2.9-0.1-4.5-0.5c-1-0.2-2-0.2-2.9,0.1c-1.7,0.6-3.5,1.1-5.4,1.3C8.5,50.2,8,50.7,8,51.4v0c0,0.5,0.3,1,0.8,1.2c3.9,1.7,8.3,2.7,12.9,2.7c21.1,0,32.7-17.9,32.7-33.5v0c0-0.9,0.4-1.8,1.1-2.4c1.2-1,2.3-2.1,3.3-3.4c0.4-0.5-0.1-1.2-0.7-1c-1.2,0.4-2.4,0.7-3.7,0.9c-0.2,0-0.3-0.2-0.1-0.4c1.5-1.1,2.8-2.6,3.6-4.3c0.3-0.6-0.3-1.2-0.9-0.9c-1.1,0.6-2.3,1-3.5,1.4c-1.2,0.4-2.6,0.1-3.6-0.7c-1.9-1.5-4.4-2.4-7-2.4c-5.3,0-9.8,3.7-11.1,8.8c-0.2,0.9,0.5,1.7,1.4,1.7c1.6-0.1,3.2-0.3,4.4-0.5c1-0.2,2,0.3,2.4,1.2c0.5,1.2-0.2,2.4-1.3,2.7c-4.6,1.3-9.7,0.4-9.7,0.4l0,0C21.2,21.8,14.3,18,9.3,12.5C8.6,11.7,7.3,12,7,12.9c-0.4,1.2-0.6,2.5-0.6,3.9C6.4,20.9,8.4,24.5,11.4,26.6z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            "aria-label": "مشاركة إلى تطبيقات أخرى",
                                            onClick: ()=>setIsShareOpen(true),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                viewBox: "0 0 512 512",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32C448,238.3,434.3,224,417.4,224z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                id: "rPst",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rPst",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                            className: "title dt",
                                            children: "منشورات قد تعجبك"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            className: "s-3 scrlH",
                                            children: posts.slice(0, 3).map((post, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "i",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "pThmb",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomLink/* default */.Z, {
                                                                    href: "/blog/".concat(post.id),
                                                                    className: "thmb",
                                                                    "aria-label": post.title,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        style: {
                                                                            backgroundImage: "url(".concat(post.imageUrl, ")")
                                                                        }
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "iTtl aTtl",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomLink/* default */.Z, {
                                                                    href: "/blog/".concat(post.id),
                                                                    "data-date": formatDate(post.createdAt),
                                                                    "data-text": "قراءة المزيد",
                                                                    children: post.title
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, post.id))
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "search-section",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "sidebar-title",
                                children: "البحث"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "search-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        placeholder: "ابحث في المدونة...",
                                        className: "search-input",
                                        value: searchQuery,
                                        onChange: handleSearch
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        className: "search-button",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                                            })
                                        })
                                    })
                                ]
                            }),
                            searchQuery.trim() !== "" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "search-results",
                                children: searchResults.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "popular-posts",
                                    children: searchResults.map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CustomLink/* default */.Z, {
                                            href: "/blog/".concat(post.id),
                                            className: "popular-post-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "popular-post-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "popular-post-title",
                                                        children: post.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "popular-post-meta",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "post-date",
                                                            children: formatDate(post.createdAt)
                                                        })
                                                    })
                                                ]
                                            })
                                        }, post.id))
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "no-results",
                                    children: "لا توجد نتائج للبحث"
                                })
                            })
                        ]
                    }),
                    searchQuery.trim() === "" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "sidebar-title",
                                children: "المنشورات الشائعة"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "popular-posts",
                                children: [
                                    posts[0] && /*#__PURE__*/ (0,jsx_runtime.jsxs)(CustomLink/* default */.Z, {
                                        href: "/blog/".concat(posts[0].id),
                                        className: "popular-post-item with-image",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "popular-post-image",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageWithFallback, {
                                                    imageUrl: posts[0].imageUrl,
                                                    className: "popular-post-thumbnail"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "popular-post-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "popular-post-header",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "popular-post-number",
                                                                children: "#1"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                className: "popular-post-title",
                                                                children: posts[0].title
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "popular-post-meta",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "post-date",
                                                            children: formatDate(posts[0].createdAt)
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    posts.slice(1, 5).map((post, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(CustomLink/* default */.Z, {
                                            href: "/blog/".concat(post.id),
                                            className: "popular-post-item",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "popular-post-number",
                                                    children: [
                                                        "#",
                                                        index + 2
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "popular-post-content",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "popular-post-title",
                                                            children: post.title
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "popular-post-meta",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
            }),
            isShareOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "share-dropdown",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "shBrs fixLs",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "shH fixH fixT",
                            "data-text": "مشاركة المشور",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                "aria-label": "إغلاق",
                                className: "c cl",
                                onClick: ()=>setIsShareOpen(false)
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "shC",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "shL",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            "data-text": "Facebook",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                "aria-label": "Facebook",
                                                href: "https://www.facebook.com/sharer.php?u=".concat(window.location.href),
                                                rel: "noopener",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    viewBox: "0 0 64 64",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M20.1,36h3.4c0.3,0,0.6,0.3,0.6,0.6V58c0,1.1,0.9,2,2,2h7.8c1.1,0,2-0.9,2-2V36.6c0-0.3,0.3-0.6,0.6-0.6h5.6c1,0,1.9-0.7,2-1.7l1.3-7.8c0.2-1.2-0.8-2.4-2-2.4h-6.6c-0.5,0-0.9-0.4-0.9-0.9v-5c0-1.3,0.7-2,2-2h5.9c1.1,0,2-0.9,2-2V6.2c0-1.1-0.9-2-2-2h-7.1c-13,0-12.7,10.5-12.7,12v7.3c0,0.3-0.3,0.6-0.6,0.6h-3.4c-1.1,0-2,0.9-2,2v7.8C18.1,35.1,19,36,20.1,36z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            "data-text": "WhatsApp",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                "aria-label": "WhatsApp",
                                                href: "https://api.whatsapp.com/send?text=".concat(window.location.href),
                                                rel: "noopener",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    viewBox: "0 0 64 64",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M6.9,48.4c-0.4,1.5-0.8,3.3-1.3,5.2c-0.7,2.9,1.9,5.6,4.8,4.8l5.1-1.3c1.7-0.4,3.5-0.2,5.1,0.5c4.7,2.1,10,3,15.6,2.1c12.3-1.9,22-11.9,23.5-24.2C62,17.3,46.7,2,28.5,4.2C16.2,5.7,6.2,15.5,4.3,27.8c-0.8,5.6,0,10.9,2.1,15.6C7.1,44.9,7.3,46.7,6.9,48.4z M21.3,19.8c0.6-0.5,1.4-0.9,1.8-0.9s2.3-0.2,2.9,1.2c0.6,1.4,2,4.7,2.1,5.1c0.2,0.3,0.3,0.7,0.1,1.2c-0.2,0.5-0.3,0.7-0.7,1.1c-0.3,0.4-0.7,0.9-1,1.2c-0.3,0.3-0.7,0.7-0.3,1.4c0.4,0.7,1.8,2.9,3.8,4.7c2.6,2.3,4.9,3,5.5,3.4c0.7,0.3,1.1,0.3,1.5-0.2c0.4-0.5,1.7-2,2.2-2.7c0.5-0.7,0.9-0.6,1.6-0.3c0.6,0.2,4,1.9,4.7,2.2c0.7,0.3,1.1,0.5,1.3,0.8c0.2,0.3,0.2,1.7-0.4,3.2c-0.6,1.6-2.1,3.1-3.2,3.5c-1.3,0.5-2.8,0.7-9.3-1.9c-7-2.8-11.8-9.8-12.1-10.3c-0.3-0.5-2.8-3.7-2.8-7.1C18.9,22.1,20.7,20.4,21.3,19.8z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            "data-text": "Twitter",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                "aria-label": "Twitter",
                                                href: "https://twitter.com/share?url=".concat(window.location.href),
                                                rel: "noopener",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    viewBox: "0 0 64 64",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M11.4,26.6C11.5,26.6,11.5,26.6,11.4,26.6c-0.9,0-1.8-0.2-2.6-0.4c-1.3-0.4-2.5,0.8-2.1,2c1.1,4.3,4.5,7.7,8.8,8.6c-1,0.3-2,0.4-3,0.4c-1,0-1.7,1.1-1.2,2c1.9,3.5,5.6,5.9,9.7,6h1c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2c-1.3,0-2.9-0.1-4.5-0.5c-1-0.2-2-0.2-2.9,0.1c-1.7,0.6-3.5,1.1-5.4,1.3C8.5,50.2,8,50.7,8,51.4v0c0,0.5,0.3,1,0.8,1.2c3.9,1.7,8.3,2.7,12.9,2.7c21.1,0,32.7-17.9,32.7-33.5v0c0-0.9,0.4-1.8,1.1-2.4c1.2-1,2.3-2.1,3.3-3.4c0.4-0.5-0.1-1.2-0.7-1c-1.2,0.4-2.4,0.7-3.7,0.9c-0.2,0-0.3-0.2-0.1-0.4c1.5-1.1,2.8-2.6,3.6-4.3c0.3-0.6-0.3-1.2-0.9-0.9c-1.1,0.6-2.3,1-3.5,1.4c-1.2,0.4-2.6,0.1-3.6-0.7c-1.9-1.5-4.4-2.4-7-2.4c-5.3,0-9.8,3.7-11.1,8.8c-0.2,0.9,0.5,1.7,1.4,1.7c1.6-0.1,3.2-0.3,4.4-0.5c1-0.2,2,0.3,2.4,1.2c0.5,1.2-0.2,2.4-1.3,2.7c-4.6,1.3-9.7,0.4-9.7,0.4l0,0C21.2,21.8,14.3,18,9.3,12.5C8.6,11.7,7.3,12,7,12.9c-0.4,1.2-0.6,2.5-0.6,3.9C6.4,20.9,8.4,24.5,11.4,26.6z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            "data-text": "Telegram",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                "aria-label": "Telegram",
                                                href: "https://t.me/share/url?url=".concat(window.location.href),
                                                rel: "noopener",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    viewBox: "0 0 64 64",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M56.4,8.2l-51.2,20c-1.7,0.6-1.6,3,0.1,3.5l9.7,2.9c2.1,0.6,3.8,2.2,4.4,4.3l3.8,12.1c0.5,1.6,2.5,2.1,3.7,0.9l5.2-5.3c0.9-0.9,2.2-1,3.2-0.3l11.5,8.4c1.6,1.2,3.9,0.3,4.3-1.7l8.7-41.8C60.4,9.1,58.4,7.4,56.4,8.2z M50,17.4L29.4,35.6c-1.1,1-1.9,2.4-2,3.9c-0.2,1.5-2.3,1.7-2.8,0.3l-0.9-3c-0.7-2.2,0.2-4.5,2.1-5.7l23.5-14.6C49.9,16.1,50.5,16.9,50,17.4z"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            "data-text": "LinkedIn",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                "aria-label": "LinkedIn",
                                                href: "https://www.linkedin.com/sharing/share-offsite/?url=".concat(window.location.href),
                                                rel: "noopener",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    viewBox: "0 0 64 64",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M8,54.7C8,55.4,8.6,56,9.3,56h9.3c0.7,0,1.3-0.6,1.3-1.3V23.9c0-0.7-0.6-1.3-1.3-1.3H9.3c-0.7,0-1.3,0.6-1.3,1.3V54.7z"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M46.6,22.3c-4.5,0-7.7,1.8-9.4,3.7c-0.4,0.4-1.1,0.1-1.1-0.5l0-1.6c0-0.7-0.6-1.3-1.3-1.3h-9.4c-0.7,0-1.3,0.6-1.3,1.3c0.1,5.7,0,25.4,0,30.7c0,0.7,0.6,1.3,1.3,1.3h9.5c0.7,0,1.3-0.6,1.3-1.3V37.9c0-1,0-2,0.3-2.7c0.8-2,2.6-4.1,5.7-4.1c4.1,0,6,3.1,6,7.6v15.9c0,0.7,0.6,1.3,1.3,1.3h9.3c0.7,0,1.3-0.6,1.3-1.3V37.4C60,27.1,54.1,22.3,46.6,22.3z"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M13.9,18.9L13.9,18.9c3.8,0,6.1-2.4,6.1-5.4C19.9,10.3,17.7,8,14,8c-3.7,0-6,2.3-6,5.4C8,16.5,10.3,18.9,13.9,18.9z"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            "data-text": "Email",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                "aria-label": "Email",
                                                href: "mailto:?body=".concat(window.location.href),
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    viewBox: "0 0 500 500",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M468.051,222.657c0-12.724-5.27-24.257-13.717-32.527L282.253,45.304c-17.811-17.807-46.702-17.807-64.505,0L45.666,190.129c-8.448,8.271-13.717,19.803-13.717,32.527v209.054c0,20.079,16.264,36.341,36.34,36.341h363.421c20.078,0,36.34-16.262,36.34-36.341V222.657z M124.621,186.402h250.758c11.081,0,19.987,8.905,19.987,19.991v34.523c-0.088,4.359-1.818,8.631-5.181,11.997l-55.966,56.419l83.224,83.127c6.904,6.904,6.904,18.081,0,24.985s-18.085,6.904-24.985,0l-85.676-85.672H193.034l-85.492,85.672c-6.907,6.904-18.081,6.904-24.985,0c-6.906-6.904-6.906-18.081,0-24.985l83.131-83.127l-55.875-56.419c-3.638-3.638-5.363-8.358-5.181-13.177v-33.343C104.632,195.307,113.537,186.402,124.621,186.402z"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "cpL",
                                    "data-text": "أو نسخ الرابط",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "cpLb",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                className: "line",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M13.0601 10.9399C15.3101 13.1899 15.3101 16.8299 13.0601 19.0699C10.8101 21.3099 7.17009 21.3199 4.93009 19.0699C2.69009 16.8199 2.68009 13.1799 4.93009 10.9399"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        className: "svgC",
                                                        d: "M10.59 13.4099C8.24996 11.0699 8.24996 7.26988 10.59 4.91988C12.93 2.56988 16.73 2.57988 19.08 4.91988C21.43 7.25988 21.42 11.0599 19.08 13.4099"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                id: "getlink",
                                                onClick: (e)=>e.target.select(),
                                                readOnly: true,
                                                value: window.location.href
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                htmlFor: "getlink",
                                                onClick: ()=>{
                                                    navigator.clipboard.writeText(window.location.href);
                                                },
                                                children: "نسخ"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function extractFirstImage(content) {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : "/default-blog-image.jpg";
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
// بيانات ثابتة للبناء
const STATIC_POSTS = [
    {
        id: "6497840499876073",
        title: "المقال الأول",
        content: "<p>محتوى المقال الأول</p>",
        excerpt: "مقتطف من المقال الأول...",
        imageUrl: "/images/blog/default.jpg",
        createdAt: "2024-01-01T00:00:00Z",
        views: 0,
        isUpdated: false,
        category: "عام"
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
    return match ? match[1] : "/images/blog/default.jpg";
}


/***/ }),

/***/ 4033:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(94)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [676,892,396,971,472,744], function() { return __webpack_exec__(2511); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);