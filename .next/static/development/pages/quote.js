((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/quote.js"],{

/***/ "./components/Faqs/Faqs.js":
/*!*********************************!*\
  !*** ./components/Faqs/Faqs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Faqs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Faqs, _React$Component);

  function Faqs() {
    var _this;

    _classCallCheck(this, Faqs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Faqs).call(this));
    _this.state = {
      faqs: []
    };
    return _this;
  }

  _createClass(Faqs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://express-server-ap-southeast-2.flayr.io/faqs/quote').then(function (response) {
        if (response) {
          _this2.setState({
            faqs: response.data
          });

          var i;

          for (i = 0; i < response.data.length; i++) {
            var faq = response.data[i];
            var faq_question = faq.question;
            var faq_answer = faq.answer;
          }
        }
      }).catch(function (error) {
        if (error.response.status === 404) {
          _this2.setState({
            notFound: true
          });
        }
      }).then(function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var faq_question = 'this is my question';
      var faq_answer = 'goddamn answer is brilliant';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.faqs.map(function (faq) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Faq__Item Faq__Item--lastOfSection",
          "aria-expanded": "false"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "Faq__Icon"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          className: "Icon Icon--select-arrow-right",
          role: "presentation",
          viewBox: "0 0 11 18"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M1.5 1.5l8 7.5-8 7.5",
          strokeWidth: 2,
          stroke: "currentColor",
          fill: "none",
          fillRule: "evenodd",
          strokeLinecap: "square"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Faq__ItemWrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "Faq__Question"
        }, faq.question), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "faq-item"
        }, faq.answer))));
      }));
    }
  }]);

  return Faqs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Faqs);

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "shopify-section-footer",
    class: "shopify-section shopify-section--footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "section-footer",
    class: "Footer  ",
    role: "contentinfo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Block Footer__Block--text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    class: "Footer__Title Heading u-h6"
  }, "About FLAYR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Content Rte"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We help amazingly talented makeup artists & hair stylists run a business. And in turn, customers can get access to these talented professionals at often half the industry rate.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "Footer__Social HorizontalList HorizontalList--spacingLoose"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "HorizontalList__Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    rel: "nofollow",
    href: "https://www.facebook.com/withflayr",
    class: "Link Link--primary footer-link",
    target: "_blank",
    "aria-label": "Facebook"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Icon-Wrapper--clickable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    class: "Icon Icon--facebook",
    viewBox: "0 0 9 17"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "HorizontalList__Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    rel: "nofollow",
    href: "https://instagram.com/withflayr",
    class: "Link Link--primary footer-link",
    target: "_blank",
    "aria-label": "Instagram"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Icon-Wrapper--clickable"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    class: "Icon Icon--instagram",
    role: "presentation",
    viewBox: "0 0 32 32"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Block Footer__Block--links"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    class: "Footer__Title Heading u-h6 "
  }, "Learn More"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "Linklist"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "Linklist__Item "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/products/gallery",
    class: "Link Link--primary footer-link footer-link"
  }, "Gallery")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "Linklist__Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/pages/reviews-of-flayr",
    class: "Link Link--primary footer-link"
  }, "Reviews")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "Linklist__Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/pages/contact-us",
    class: "Link Link--primary footer-link"
  }, "Contact Us")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Block Footer__Block--links"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    class: "Footer__Title Heading u-h6"
  }, "Providers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "Linklist"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "Linklist__Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/pages/jobs-for-makeup-artists",
    class: "Link Link--primary footer-link"
  }, "Join FLAYR")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "Linklist__Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/pages/terms-for-providers",
    class: "Link Link--primary footer-link"
  }, "Terms For Providers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    class: "Linklist__Item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/account",
    class: "Link Link--primary footer-link"
  }, "My Account"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Aside"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Copyright"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/",
    class: "Footer__StoreName Heading u-h7 Link Link--secondary"
  }, "\xA9 2018 FLAYR Pty Ltd"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Loading/Loading.js":
/*!***************************************!*\
  !*** ./components/Loading/Loading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_1__);



var Loading = function Loading(_ref) {
  var type = _ref.type,
      color = _ref.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loading__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: type,
    color: color,
    height: '30%',
    width: '30%'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).call(this, props));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "shopify-section-header",
        class: "shopify-section shopify-section--header navbar-extra-space"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        id: "section-header",
        class: "Header Header--sidebar Header--initialized ",
        "data-section-id": "header",
        "data-section-type": "header",
        "data-section-settings": "{ \"navigationStyle\": \"sidebar\", \"hasTransparentHeader\": false, \"isSticky\": true }",
        role: "banner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "Header__Wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "Header__FlexItem Header__FlexItem--fill"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "Header__FlexItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        class: "Header__Logo"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        class: "Header__LogoLink"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "Heading u-h4"
      }, "FLAYR")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "Header__FlexItem Header__FlexItem--fill"
      })))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/ShopifyBar/ShopifyBar.js":
/*!*********************************************!*\
  !*** ./components/ShopifyBar/ShopifyBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ShopifyBar = function ShopifyBar(props) {
  var defaultBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      background: '#000000',
      color: '#ffffff'
    },
    id: "shopify-section-announcement"
    /*class="shopify-section hidden-phone" */

  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "section-announcement",
    "data-section-id": "announcement",
    "data-section-type": "announcement-bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "AnnouncementBar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "AnnouncementBar__Wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "AnnouncementBar__Content Heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "\u2665 Free Lashes on all makeup bookings"))))));

  if (props.fromStylistList) {
    defaultBar = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "shopify-section-announcement"
      /*class="shopify-section hidden-phone" */

    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      id: "section-announcement",
      "data-section-id": "announcement",
      "data-section-type": "announcement-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "AnnouncementBar",
      id: "quotenotification-red"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "AnnouncementBar__Wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "AnnouncementBar__Content Heading"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "This is not a reservation, prices are likely to rise.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Lock In Your Price Today!")))))));
  }

  return defaultBar;
};

/* harmony default export */ __webpack_exports__["default"] = (ShopifyBar);

/***/ }),

/***/ "./components/StylistList/StylistList.js":
/*!***********************************************!*\
  !*** ./components/StylistList/StylistList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loading/Loading */ "./components/Loading/Loading.js");
/* harmony import */ var _ShopifyBar_ShopifyBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShopifyBar/ShopifyBar */ "./components/ShopifyBar/ShopifyBar.js");
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var _StylistList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StylistList.css */ "./components/StylistList/StylistList.css");
/* harmony import */ var _StylistList_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_StylistList_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _StylistProfile_StylistProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StylistProfile/StylistProfile */ "./components/StylistProfile/StylistProfile.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Faqs_Faqs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Faqs/Faqs */ "./components/Faqs/Faqs.js");
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");
var constants__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! constants */ "./node_modules/constants-browserify/constants.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var StylistList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StylistList, _React$Component);

  function StylistList(props) {
    var _this;

    _classCallCheck(this, StylistList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StylistList).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseQuote", function () {
      _this.setState({
        cancelQuoteClicked: true
      });

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://express-server-ap-southeast-2.flayr.io/cancelquote', {
        shopify_id: _this.props.id
      }).then(function (response) {
        var newQuote = _this.state.quote;

        if (response.data.body === "success") {
          newQuote.status = 0;

          _this.setState({
            quote: newQuote
          });
        } // window.location.reload()

      }).catch(function (error) {
        console.log(error);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "postNewQuote", function (newQuote, callback) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://express-server-ap-southeast-2.flayr.io/quotes", newQuote).then(function (res) {
        console.log("sent");
        callback(null, res);
      }).catch(function (err) {
        callback(err, null);
        console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      //if direct quote is requested
      if (_this.props.isStylistQuote) {
        _this.setState({
          isStylistQuote: true,
          stylistProviderId: _this.props.provider_id
        }, function () {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://express-server-ap-southeast-2.flayr.io/stylist/' + _this.props.provider_id).then(function (response) {
            _this.setState({
              requestedSylistName: response.data.body.first_name
            });
          }).catch(function (error) {
            console.log(error);

            _this.setState({
              badRequest: true
            });
          });
        });
      }

      var _id = _this.props.id; //defining requests

      function getQuote() {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://express-server-ap-southeast-2.flayr.io/quote/' + _id);
      }

      function getRequests() {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://express-server-ap-southeast-2.flayr.io/requests/' + _id);
      }

      function getStylists() {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://express-server-ap-southeast-2.flayr.io/stylists/' + _id);
      } //do quote and stylist request at the same time


      axios__WEBPACK_IMPORTED_MODULE_1___default.a.all([getQuote().catch(function (error) {
        if (error.response) {
          if (error.response.status === 404) {
            _this.setState({
              badRequest: true
            });
          }
        }
      }), getStylists(), getRequests().catch(function (err) {
        return console.log(err);
      })]).then(axios__WEBPACK_IMPORTED_MODULE_1___default.a.spread(function (quote, stylists, requests) {
        if (requests) {
          _this.setState({
            requests: requests.data.body
          });
        } //get requests for this quote


        if (quote && stylists) {
          var stylistArray = [];

          if (stylists.data === 'no stylists available') {
            _this.setState({
              notFound: true,
              badRequest: false
            });
          } else {
            var requestedStylists = [];
            var responseArray = stylists.data.responseData; // for(let i = responseArray.length -1; i >= 0; i--)

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = responseArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var s = _step.value;
                //  console.log(s);
                stylistArray.push({
                  link: s.shopifyLink,
                  cost: s.stylistData.cost,
                  payment: s.stylistData.payment,
                  take: s.stylistData.take,
                  firstName: s.stylistData.stylist.first_name,
                  lastName: s.stylistData.stylist.last_name,
                  bigImage: s.stylistData.stylist.cover_image,
                  smallImage: s.stylistData.stylist.profile_image,
                  reviewScore: s.stylistData.stylist.review_score,
                  numOfReviews: s.stylistData.stylist.num_of_reviews,
                  provider_id: s.stylistData.stylist.provider_id,
                  unavailable_dates: s.stylistData.stylist.unavailable_dates,
                  requests_past_day: s.stylistData.stylist.requests_past_day
                });
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            for (var i = stylistArray.length - 1; i >= 0; i--) {
              //for requested stylists 
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = _this.state.requests[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var r = _step2.value;

                  if (r.provider_id === stylistArray[i].provider_id) {
                    var toPush = _objectSpread({}, stylistArray[i]);

                    toPush.stage = r.stage;
                    toPush.request_id = r.request_id;
                    toPush.cost = r.cost;
                    toPush.take = r.take;
                    toPush.payment = r.payment;
                    requestedStylists.push(toPush);
                    stylistArray.splice(i, 1);
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }

            _this.setState({
              requestedStylists: requestedStylists,
              quote: quote.data
            });

            stylistArray.sort(_this.compare); //if its a stylist direct quote and is found, redirect them to shopify

            if (_this.state.isStylistQuote) {
              var uniqueStylistArray = [];
              stylistArray.map(function (val, index) {
                if (val.provider_id === _this.state.stylistProviderId) {
                  uniqueStylistArray = [stylistArray[index]];
                }
              });

              if (uniqueStylistArray.length < 1) {
                _this.setState({
                  notFound: true
                });
              } else if (uniqueStylistArray[0].unavailable_dates.includes(_this.state.quote.event_date)) {
                _this.setState({
                  stylistBookedOut: true
                });
              } else {
                window.location.href = uniqueStylistArray[0].link;
              }
            } else {
              _this.setState({
                stylists: stylistArray,
                isLoaded: true,
                quoteInstanceId: stylists.data.instance_id,
                defaultCost: stylists.data.defaultCost
              });
            }
          }
        }
      })).catch(function (error) {
        if (error.response) {
          if (error.response.status === 400) {
            _this.setState({
              badRequest: true
            });
          } else if (error.response.status === 404) {
            _this.setState({
              notFound: true
            });
          } else if (error.response.status === 502) {
            _this.setState({
              badRequest: true
            });
          } else if (error) {
            _this.setState({
              badRequest: true
            });
          }
        } else if (error) {}
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isoToDate", function (isoString) {
      var date = new Date(isoString);
      date = date.toDateString();
      return date;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tConvert", function (time) {
      // Check correct time format and split into components
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value

        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM

        time[0] = +time[0] % 12 || 12; // Adjust hours
      }

      return time.join(''); // return adjusted time or original string
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "compare", function (a, b) {
      if (a.cost < b.cost) return -1;
      if (a.cost > b.cost) return 1;
      return 0;
    });

    _this.state = {
      requests: [],
      requestedStylists: [],
      quoteInstanceId: '',
      submittedNewQuote: '',
      notFound: false,
      requestedSylistName: '',
      quoteClosed: false,
      isStylistQuote: false,
      stylistProviderId: '',
      badRequest: false,
      isLoaded: false,
      stylists: [],
      newStylists: [],
      collapseQuoteDetails: false,
      collapseNeedHelp: false,
      collapseFAQ: false,
      serviceMap: new Map(),
      personMap: new Map(),
      cancelQuoteClicked: false,
      quote: {
        person_service_list: [],
        event_time: '',
        shopify_id: '',
        event_date: '',
        status: 1
      },
      stylistBookedOut: false
    };

    _this.state.serviceMap.set("_makeup_only", "Makeup Only");

    _this.state.serviceMap.set("_hair_only", "Hair Only");

    _this.state.serviceMap.set("_makeup_and_hair", "Makeup & Hair");

    _this.state.serviceMap.set("_makeup_and_hair_up", "Makeup & Hair Up");

    _this.state.serviceMap.set("_makeup_and_hair_down", "Makeup & Hair Down");

    _this.state.serviceMap.set("_hair_down", "Hair Down");

    _this.state.serviceMap.set("_hair_up", "Hair Up");

    _this.state.personMap.set("bride", "Bride");

    _this.state.personMap.set("bridesmaid", "Bridesmaid");

    _this.state.personMap.set("nonbridal", "Non-Bridal");

    _this.state.personMap.set("mother", "Mother Of Bride/Groom");

    _this.state.personMap.set("flowergirl", "Flower Girl");

    _this.toggleQuoteDetails = _this.toggleQuoteDetails.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleCollapseNeedHelp = _this.toggleCollapseNeedHelp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleCollapseFAQ = _this.toggleCollapseFAQ.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.componentDidMount.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(StylistList, [{
    key: "toggleQuoteDetails",
    value: function toggleQuoteDetails() {
      this.setState({
        collapseQuoteDetails: !this.state.collapseQuoteDetails
      });
    }
  }, {
    key: "toggleCollapseNeedHelp",
    value: function toggleCollapseNeedHelp() {
      this.setState({
        collapseNeedHelp: !this.state.collapseNeedHelp
      });
    }
  }, {
    key: "toggleCollapseFAQ",
    value: function toggleCollapseFAQ() {
      this.setState({
        collapseFAQ: !this.state.collapseFAQ
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
      }, "We're finding the best stylists in your area");
      var loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "spin",
        color: "black",
        height: "10px",
        width: "10px"
      });

      if (this.state.isLoaded) {
        loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      } else if (this.state.notFound && this.state.isStylistQuote) {
        loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
        }, "Sorry, ", this.state.requestedSylistName, " is not available for your quote."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "typeform-share Button Button--secondary",
          href: "https://www.flayr.io",
          "data-mode": "drawer_right",
          "data-hide-headers": "true",
          "data-hide-footer": "true",
          style: {
            background: 'white'
          }
        }, "Get A New Quote"));
      } else if (this.state.stylistBookedOut && this.state.isStylistQuote) {
        loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
        }, "Sorry, ", this.state.requestedSylistName, " is booked out for the date specified."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "typeform-share Button Button--secondary",
          href: "https://www.flayr.io",
          "data-mode": "drawer_right",
          "data-hide-headers": "true",
          "data-hide-footer": "true",
          style: {
            background: 'white'
          }
        }, "Get A New Quote"));
      } else if (this.state.notFound) {
        loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
        }, "Sorry, there are no stylists available for your quote."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "typeform-share Button Button--secondary",
          href: "https://www.flayr.io",
          "data-mode": "drawer_right",
          "data-hide-headers": "true",
          "data-hide-footer": "true",
          style: {
            background: 'white'
          }
        }, "Get A New Quote"));
      } else if (this.state.badRequest) {
        loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
        }, "Could not recognise quote. Please refresh the page or get a new quote.");
      } else if (this.state.quote.closed === true) {
        loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
        }, "This quote has been closed.");
      }

      var messageBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-text"
      }, loadingText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-bar"
      }, loading));

      if (this.state.isLoaded) {
        messageBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      }

      var stylists = [];
      var requestedStylists = [];
      var offeredStylists = [];
      var divStyle = {
        marginTop: 20,
        textAlign: 'center'
      };

      if (this.state.isLoaded) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.state.stylists[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var s = _step3.value;
            //changing link to contain the quote id
            //all stylists
            stylists.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StylistProfile_StylistProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {
              link: s.link,
              shopify_id: this.state.quote.shopify_id,
              bigImage: s.bigImage,
              smallImage: s.smallImage,
              firstName: s.firstName,
              reviewScore: s.reviewScore,
              numOfReviews: s.numOfReviews,
              cost: s.cost,
              take: s.take,
              payment: s.payment,
              stage: s.stage,
              unavailable_dates: s.unavailable_dates,
              event_date: this.state.quote.event_date,
              event_time: this.state.quote.event_time,
              requests_past_day: s.requests_past_day,
              defaultCost: this.state.defaultCost
            }));
          } //requested stylists

        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.state.requestedStylists[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _s = _step4.value;

            //offered stylists
            if (_s.stage === 20 || _s.stage === 30) {
              offeredStylists.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StylistProfile_StylistProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {
                link: _s.link,
                shopify_id: this.state.quote.shopify_id,
                bigImage: _s.bigImage,
                smallImage: _s.smallImage,
                firstName: _s.firstName,
                reviewScore: _s.reviewScore,
                numOfReviews: _s.numOfReviews,
                cost: _s.cost,
                take: _s.take,
                payment: _s.payment,
                stage: _s.stage,
                request_id: _s.request_id,
                unavailable_dates: _s.unavailable_dates,
                event_date: this.state.quote.event_date,
                event_time: this.state.quote.event_time,
                defaultCost: this.state.defaultCost,
                requests_past_day: _s.requests_past_day
              }));
            } else {
              //all other ones
              requestedStylists.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StylistProfile_StylistProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {
                link: _s.link,
                shopify_id: this.state.quote.shopify_id,
                bigImage: _s.bigImage,
                smallImage: _s.smallImage,
                firstName: _s.firstName,
                reviewScore: _s.reviewScore,
                numOfReviews: _s.numOfReviews,
                cost: _s.cost,
                take: _s.take,
                payment: _s.payment,
                stage: _s.stage,
                unavailable_dates: _s.unavailable_dates,
                event_date: this.state.quote.event_date,
                requests_past_day: _s.requests_past_day,
                event_time: this.state.quote.event_time,
                defaultCost: this.state.defaultCost
              }));
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShopifyBar_ShopifyBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        fromStylistList: false
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), messageBox, this.state.cancelQuoteClicked && this.state.quote.status !== 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
      }, "Closing Quote..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-bar"
      }, loading))), this.state.quote.status === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
      }, "This quote has been closed."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "typeform-share Button Button--secondary",
        href: "https://www.flayr.io",
        "data-mode": "drawer_right",
        "data-hide-headers": "true",
        "data-hide-footer": "true",
        style: {
          background: 'white'
        }
      }, "Get A New Quote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-bar"
      }, loading))), this.state.isLoaded && this.state.quote.status === 1 && !this.state.cancelQuoteClicked && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PageContainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "shopify-section-product-template-quote",
        className: "shopify-section shopify-section--bordered"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "Product Product--large",
        "data-section-id": "product-template-quote",
        "data-section-type": "product",
        "data-section-settings": "{ \"enableHistoryState\": true, \"showInventoryQuantity\": false, \"showThumbnails\": true, \"inventoryQuantityThreshold\": 0, \"enableImageZoom\": true, \"showPaymentButton\": false, \"useAjaxCart\": true\n}"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Product__Wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Product__InfoWrapper",
        style: {
          maxHeight: 146,
          marginTop: -100
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Product__Info ",
        style: {
          top: 75
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProductMeta"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Rte hidden-phone hidden-tablet"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Quote Summary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Event Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.isoToDate(this.state.quote.event_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "to be ready by - ", this.tConvert(this.state.quote.event_time), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.state.quote.suburb, " ", this.state.quote.postcode, ", ", this.state.quote.state, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://maps.google.com?daddr=".concat(this.state.quote.suburb, " ").concat(this.state.quote.state),
        className: "Link Link--underline show-location-link",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Show Location")), this.state.quote.person_service_list.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quoteLine"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "quotePerson"
        }, _this2.state.personMap.get(s[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "quoteService"
        }, _this2.state.serviceMap.get(s[1])));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "typeform-share Button Button--secondary",
        href: "https://www.flayr.io",
        "data-mode": "drawer_right",
        "data-hide-headers": "true",
        "data-hide-footer": "true",
        target: "_blank",
        style: {
          background: 'white'
        }
      }, "New Quote"), "       or \u2002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "typeform-share Link Link--underline Text--subdued close-quote",
        onClick: function onClick(e) {
          return _this2.handleCloseQuote(e);
        },
        id: "rejectQuote"
      }, "close quote"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "post",
        action: "/cart/add",
        id: "product_form_1909522301039",
        acceptCharset: "UTF-8",
        className: "ProductForm",
        encType: "multipart/form-data"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "form_type",
        defaultValue: "product"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "utf8",
        defaultValue: "\u2713"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProductForm__Variants"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "id",
        "data-sku": 1,
        defaultValue: 17844282949743
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "hidden",
        name: "quantity",
        defaultValue: 1
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Product__Aside "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Product__Tabs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        id: "offers"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "offers",
        className: "Container_Offers stylist-page-navbar-space"
      }, offeredStylists.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SectionHeader SectionHeader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "Heading u-h1 SectionHeader__Heading--ExtraSpaceOnTop"
      }, "Offers Received")), offeredStylists.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionMain CollectionMain_Offers"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionInner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionInner__Products"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProductList_Wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Grid",
        "data-mobile-count": 2,
        "data-desktop-count": 4
      }, offeredStylists.map(function (s) {
        return s;
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Grid__Cell"
      })))))), requestedStylists.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SectionHeader SectionHeader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "Heading u-h2 SectionHeader__Heading--ExtraSpaceOnTop"
      }, "Requested Stylists")), requestedStylists.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionMain CollectionMain_Offers"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionInner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionInner__Products"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProductList_Wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Grid",
        "data-mobile-count": 2,
        "data-desktop-count": 4
      }, requestedStylists.map(function (s) {
        return s;
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Grid__Cell"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SectionHeader SectionHeader"
      }, this.state.isStylistQuote && !this.state.badRequest && !this.state.notFound && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "SectionHeader__Heading Heading u-h1"
      }, "Your Offer From ", this.state.requestedSylistName), !this.state.isStylistQuote && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "Heading u-h2 SectionHeader__Heading--ExtraSpaceOnTop"
      }, "Stylists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Request up to 5 stylists to check their availability and get an appointment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "material-icons"
      }, "check"), "No Obligation \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        class: "material-icons"
      }, "check"), "Free Request"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionMain CollectionMain_Offers"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionInner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollectionInner__Products"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProductList_Wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Grid",
        "data-mobile-count": 2,
        "data-desktop-count": 4
      }, stylists.map(function (s) {
        return s;
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Grid__Cell"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Collapsible Collapsible--large hidden-lap-and-up"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "Collapsible__Button Heading u-h6 ",
        onClick: this.toggleQuoteDetails,
        "data-action": "",
        "aria-expanded": "false"
      }, "Quote Details", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Collapsible__Plus"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.collapseQuoteDetails
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Collapsible__Content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Rte"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Quote Summary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Event Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.isoToDate(this.state.quote.event_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "to be ready by - ", this.tConvert(this.state.quote.event_time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.state.quote.suburb, " ", this.state.quote.postcode, ", ", this.state.quote.state, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://maps.google.com?daddr=".concat(this.state.quote.suburb, " ").concat(this.state.quote.state),
        className: "Link Link--underline show-location-link",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Show Location")), this.state.quote.person_service_list.map(function (s) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quoteLine"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "quotePerson"
        }, _this2.state.personMap.get(s[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "quoteService"
        }, _this2.state.serviceMap.get(s[1])));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "typeform-share Button Button--secondary",
        href: "https://www.flayr.io",
        "data-mode": "drawer_right",
        "data-hide-headers": "true",
        "data-hide-footer": "true",
        target: "_blank",
        style: {
          background: 'white'
        }
      }, "New Quote"), "       or \u2002", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick(e) {
          return _this2.handleCloseQuote(e);
        },
        className: "typeform-share Link Link--underline Text--subdued close-quote",
        id: "rejectQuote"
      }, "close quote"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Collapsible Collapsible--large"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "Collapsible__Button Heading u-h6",
        onClick: this.toggleCollapseNeedHelp,
        "data-action": "toggle-collapsible",
        "aria-expanded": "false"
      }, "Need Help", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Collapsible__Plus"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.collapseNeedHelp
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Collapsible__Content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Rte"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can contact us using any of the links below and we'd be glad to help."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Quote ID: Quote|", this.state.quoteInstanceId), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:hey@flayr.com.au?Subject=QuoteID_".concat(this.state.quoteInstanceId),
        className: "icon-email"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "email: "), "hey@flayr.com.au"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:0466986744",
        className: "icon-call"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "call: "), "0466 986 744"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "txt-ios icon-text",
        href: "sms://+61437635297/&body=Help_quote-".concat(this.state.quoteInstanceId, "_TypeAfterThis__")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "txt :"), "0437 635 297")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Collapsible Collapsible--large"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "Collapsible__Button Heading u-h6",
        onClick: this.toggleCollapseFAQ,
        "data-action": "toggle-collapsible",
        "aria-expanded": "false"
      }, "FAQs", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Collapsible__Plus"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.collapseFAQ
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Collapsible__Content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "shopify-section-faqs-quote",
        className: "shopify-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        "data-section-type": "faq",
        "data-section-id": "faqs-quote"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PageContent "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PageLayout"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PageLayout__Section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Faq"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Faqs_Faqs__WEBPACK_IMPORTED_MODULE_10__["default"], null))))))))))))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return StylistList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StylistList);

/***/ }),

/***/ "./components/StylistProfile/StylistProfile.js":
/*!*****************************************************!*\
  !*** ./components/StylistProfile/StylistProfile.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-star-ratings */ "./node_modules/react-star-ratings/build/index.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);




var StylistProfile = function StylistProfile(props) {
  // Edit this to feed in actual default pricing
  var defaultPricing = 170;
  var CustomTag = "a";

  if (!props.link) {
    CustomTag = "div";
  }

  var numOfReviews = props.numOfReviews;
  var reviewString = numOfReviews + " reviews";
  var link = props.link;
  var buttonStyle = {};

  if (numOfReviews === 0) {
    reviewString = "new";
  }

  var errorStyle; //when a stylist is booked out
  //checking for unavailable time;

  var isUnavailableForTime;

  if (props.unavailable_dates) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = props.unavailable_dates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var d = _step.value;
        var time = void 0;

        if (d.length > 10) {
          time = d.split("T")[1];
          var unavail_date = d.split("T")[0];

          if (unavail_date === props.event_date && props.event_time <= time) {
            isUnavailableForTime = true;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var offerCardClass = "Grid__Cell Grid__Cell--white offer-item";

  if (!props.forLandingPage) {
    //default, if props.stage === 10
    if (props.stage === 10) {
      link = link.replace("view=autoquote", "view=appointmentrequest_submitted");
    } //if props.stage === 0


    if (props.stage < 10 || props.unavailable_dates.includes(props.event_date) || isUnavailableForTime) {
      CustomTag = "div";
      errorStyle = {
        color: '#cc0000',
        fontSize: 17
      };
      link = "";
      offerCardClass = "Grid__Cell Grid__Cell--white offer-item Card-bookedout";
    }

    if (props.stage === 20 || props.stage === 30) {
      CustomTag = "a";
      link = "https://au.flayr.io/products/".concat(props.request_id);
    }
  } else {}

  var reqDriver;

  if (props.requests_past_day) {
    if (props.requests_past_day.num > 4) {
      reqDriver = props.requests_past_day.num + " times";
    } else {
      reqDriver = "Today!";
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: offerCardClass,
    style: {
      marginRight: -100
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProductItem"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProductItem__Wrapper "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Grid",
    "data-mobile-count": 2,
    "data-desktop-count": 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTag, {
    href: link,
    class: "ProductItem__ImageWrapper "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Grid__Cell Grid__Cell--12 1/3--phone 1/3--tablet-and-up offer-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "offer-feature-image offer-feature-image-nomargin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    class: "big-profile-pic ProductItem__Image Image--fadeIn Image--lazyLoaded",
    src: "".concat(props.bigImage),
    className: "big-profile-pic ProductItem__Image Image--fadeIn Image--lazyLoaded",
    alt: "#bridal"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Image__Loader"
  }), !props.forLandingPage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ProductItem__Info ProductItem__Info--center offer-image-stylist-overlay"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "View Photos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Grid__Cell 2/3--phone 2/3--tablet-and-up offer-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Grid Grid__Cell--TopPad5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Grid__Cell 1/4--phone hidden-tablet-and-up hidden-lap-and-up offer-stylist-photo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "".concat(props.smallImage),
    className: "small-profile-pic"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Grid__Cell hidden-phone 1/4--tablet-and-up  offer-stylist-photo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "".concat(props.smallImage),
    className: "small-profile-pic-fixedheight"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Grid__Cell 3/4--phone 3/4--tablet-and-up offer-stylist-details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ProductItem__Title Heading"
  }, props.firstName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "spr-badge",
    id: "spr_badge_10728817548",
    "data-rating": "4.75"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "spr-starrating spr-badge-starrating"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_star_ratings__WEBPACK_IMPORTED_MODULE_1___default.a, {
    rating: props.reviewScore,
    starRatedColor: "black",
    numberOfStars: 5,
    name: "rating",
    starDimension: "12px",
    starSpacing: "2px"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "spr-badge-caption"
  }, reviewString))), props.forLandingPage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '80%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ProductMeta__Description Rte Offer__PricingCard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProductItem__PriceList  Heading",
    style: {
      overflow: 'hidden',
      height: '5.5em',
      position: 'relative'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '93%'
    },
    className: "ProductItem__Price Price Text--subdued subdued--heading",
    "data-money-convertible": true
  }, props.profile_blurb), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-blurb-text"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      marginTop: 20
    },
    className: "button-form Button Button--secondary Button--small Button--compressed",
    onClick: props.onViewPricingClick
  }, "View Pricing"))), !props.forLandingPage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "hidden-phone"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ProductMeta__Description Rte Offer__PricingCard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ProductMeta__Title Heading u-h3"
  }, "Total Of $", props.cost), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Book with a deposit of $", props.take, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "$", props.payment, " payable on the day", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), reqDriver && !(props.stage < 10 || props.unavailable_dates.includes(props.event_date) || isUnavailableForTime) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '1em'
    },
    class: "Alert__Stats"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "material-icons"
  }, "whatshot"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "In Demand"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Alert__Stats--cycling"
  }, " Requested ", reqDriver))))), !(props.stage < 10 || props.unavailable_dates.includes(props.event_date)) && props.cost <= props.defaultCost && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "#008489"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "material-icons"
  }, "local_offer"), " Great Value"), !(props.stage < 10 || props.unavailable_dates.includes(props.event_date) || isUnavailableForTime) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ViewProfile--rightbottom Button Button--small Button--primary Button--compressed"
  }, "View Profile"), (props.stage < 10 || props.unavailable_dates.includes(props.event_date) || isUnavailableForTime) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ProductMeta__Title Heading Alert__Booked"
  }, "Booked Out"))), !props.forLandingPage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "hidden-tablet-and-up hidden-lap-and-up"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ProductMeta__Description Rte Offer__PricingCard "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ProductMeta__Title Heading u-h3"
  }, "Total Of $", props.cost), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Book with a deposit of $", props.take, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "$", props.payment, " payable on the day", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), reqDriver && !(props.stage < 10 || props.unavailable_dates.includes(props.event_date)) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Alert__Stats"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "material-icons"
  }, "whatshot"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "In Demand"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Alert__Stats--cycling"
  }, " Requested ", reqDriver)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Viewprofile__arrow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "material-icons"
  }, "chevron_right")), (props.stage < 10 || props.unavailable_dates.includes(props.event_date)) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ProductMeta__Title Heading Alert__Booked"
  }, "Booked Out")), !(props.stage < 10 || props.unavailable_dates.includes(props.event_date)) && props.cost <= props.defaultCost && // <span class="Viewprofile__arrow"><i class="material-icons">
  // chevron_right
  // </i></span>
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Label__Great-Value--bottomright"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "material-icons"
  }, "local_offer"), " Great Value") // <span>Great Value</span>
  ))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (StylistProfile);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/constants-browserify/constants.json":
/*!**********************************************************!*\
  !*** ./node_modules/constants-browserify/constants.json ***!
  \**********************************************************/
/*! exports provided: O_RDONLY, O_WRONLY, O_RDWR, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOFOLLOW, O_SYNC, O_SYMLINK, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGSYS, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_STORE, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, NPN_ENABLED, RSA_PKCS1_PADDING, RSA_SSLV23_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, F_OK, R_OK, W_OK, X_OK, UV_UDP_REUSEADDR, default */
/***/ (function(module) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4};

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/lodash.isfunction/index.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash.isfunction/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.isobject/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isobject/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash.tonumber/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.tonumber/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/next/dist/lib/head.js":
/*!********************************************!*\
  !*** ./node_modules/next/dist/lib/head.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultHead = defaultHead;
exports.default = void 0;

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/lib/side-effect.js"));

var Head =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Head, _React$Component);

  function Head() {
    (0, _classCallCheck2.default)(this, Head);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Head).apply(this, arguments));
  }

  (0, _createClass2.default)(Head, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Head;
}(_react.default.Component);

(0, _defineProperty2.default)(Head, "contextTypes", {
  headManager: _propTypes.default.object
});
var NEXT_HEAD_IDENTIFIER = 'next-head';

function defaultHead() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NEXT_HEAD_IDENTIFIER;
  return [_react.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8",
    className: className
  })];
}

function reduceComponents(components) {
  return components.map(function (component) {
    return _react.default.Children.toArray(component.props.children);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []).reduce(function (a, b) {
    if (_react.default.Fragment && b.type === _react.default.Fragment) {
      return a.concat(_react.default.Children.toArray(b.props.children));
    }

    return a.concat(b);
  }, []).reverse().concat(defaultHead('')).filter(Boolean).filter(unique()).reverse().map(function (c, i) {
    var className = (c.props && c.props.className ? c.props.className + ' ' : '') + NEXT_HEAD_IDENTIFIER;
    var key = c.key || i;
    return _react.default.cloneElement(c, {
      key: key,
      className: className
    });
  });
}

function mapOnServer(head) {
  return head;
}

function onStateChange(head) {
  if (this.context && this.context.headManager) {
    this.context.headManager.updateHead(head);
  }
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];
var ALLOWED_DUPLICATES = ['article:tag', 'og:image', 'og:image:alt', 'og:image:width', 'og:image:height', 'og:image:type', 'og:image:secure_url', 'og:image:url'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>,
 except we explicit allow it in ALLOWED_DUPLICATES array
*/

function unique() {
  var keys = new _set.default();
  var tags = new _set.default();
  var metaTypes = new _set.default();
  var metaCategories = {};
  return function (h) {
    if (h.key && h.key.indexOf('.$') === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
    }

    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set.default();
            if (categories.has(category) && ALLOWED_DUPLICATES.indexOf(category) === -1) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}

var _default = (0, _sideEffect.default)(reduceComponents, onStateChange, mapOnServer)(Head);

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/lib/side-effect.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/lib/side-effect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withSideEffect;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next/dist/lib/utils.js");

function withSideEffect(reduceComponentsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reduceComponentsToState !== 'function') {
    throw new Error('Expected reduceComponentsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = new _set.default();
    var state;

    function emitChange(component) {
      state = reduceComponentsToState((0, _toConsumableArray2.default)(mountedInstances));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient.call(component, state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(SideEffect, _Component);
      (0, _createClass2.default)(SideEffect, null, [{
        key: "peek",
        // Expose canUseDOM so tests can monkeypatch it
        // Try to use displayName of wrapped component
        value: function peek() {
          return state;
        }
      }, {
        key: "rewind",
        value: function rewind() {
          if (SideEffect.canUseDOM) {
            throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
          }

          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function SideEffect(props) {
        var _this;

        (0, _classCallCheck2.default)(this, SideEffect);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideEffect).call(this, props));

        if (!SideEffect.canUseDOM) {
          mountedInstances.add((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
          emitChange((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        }

        return _this;
      }

      (0, _createClass2.default)(SideEffect, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedComponent, null, this.props.children);
        }
      }]);
      return SideEffect;
    }(_react.Component);

    (0, _defineProperty2.default)(SideEffect, "canUseDOM", typeof window !== 'undefined');
    (0, _defineProperty2.default)(SideEffect, "contextTypes", WrappedComponent.contextTypes);
    (0, _defineProperty2.default)(SideEffect, "displayName", "SideEffect(".concat((0, _utils.getDisplayName)(WrappedComponent), ")"));
    return SideEffect;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/next/dist/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execOnce = execOnce;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  return Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(Component, ctx) {
    var compName, message, props, _compName, _message;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!(Component.prototype && Component.prototype.getInitialProps)) {
              _context.next = 5;
              break;
            }

            compName = getDisplayName(Component);
            message = "\"".concat(compName, ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 5:
            if (Component.getInitialProps) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {});

          case 7:
            _context.next = 9;
            return Component.getInitialProps(ctx);

          case 9:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", props);

          case 12:
            if (props) {
              _context.next = 16;
              break;
            }

            _compName = getDisplayName(Component);
            _message = "\"".concat(_compName, ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 16:
            return _context.abrupt("return", props);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/head */ "./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;


  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthOddness = reference.width % 2 === popper.width % 2;
  var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;
  var noRound = function noRound(v) {
    return v;
  };

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
  var verticalToInteger = !shouldRound ? noRound : Math.round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-loading/dist/react-loading.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-loading/dist/react-loading.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(0);
  var warning = __webpack_require__(3);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _svg = __webpack_require__(14);

var svgSources = _interopRequireWildcard(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      delayed: _this.props.delay > 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loading, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var delay = this.props.delay;
      var delayed = this.state.delayed;


      if (delayed) {
        this.timeout = setTimeout(function () {
          _this2.setState({
            delayed: false
          });
        }, delay);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var timeout = this.timeout;


      if (timeout) {
        clearTimeout(timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          delay = _props.delay,
          type = _props.type,
          height = _props.height,
          width = _props.width,
          restProps = _objectWithoutProperties(_props, ['color', 'delay', 'type', 'height', 'width']);

      var selectedType = this.state.delayed ? 'blank' : type;
      var svg = svgSources[selectedType];
      var style = {
        fill: color,
        height: height,
        width: width
      };

      return _react2.default.createElement('div', _extends({
        style: style,
        dangerouslySetInnerHTML: { __html: svg }
      }, restProps));
    }
  }]);

  return Loading;
}(_react.Component);

Loading.propTypes = {
  color: _propTypes2.default.string,
  delay: _propTypes2.default.number,
  type: _propTypes2.default.string,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
Loading.defaultProps = {
  color: '#fff',
  delay: 0,
  type: 'balls',
  height: 64,
  width: 64
};
exports.default = Loading;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(10);
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(2),n=__webpack_require__(0),p=__webpack_require__(5),q=__webpack_require__(1),r="function"===typeof Symbol&&Symbol["for"],t=r?Symbol["for"]("react.element"):60103,u=r?Symbol["for"]("react.portal"):60106,v=r?Symbol["for"]("react.fragment"):60107,w=r?Symbol["for"]("react.strict_mode"):60108,x=r?Symbol["for"]("react.provider"):60109,y=r?Symbol["for"]("react.context"):60110,z=r?Symbol["for"]("react.async_mode"):60111,A=r?Symbol["for"]("react.forward_ref"):
60112,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b=arguments.length-1,e="http://reactjs.org/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};
function E(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];d.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:I.current}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g,O=[];function P(a,b,e,c){if(O.length){var d=O.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function Q(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>O.length&&O.push(a)}
function R(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+S(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+S(d,h);g+=R(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+S(d,h++),g+=R(d,f,e,c);else"object"===d&&(e=""+a,C("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function S(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function T(a,b){a.func.call(a.context,b,a.count++)}
function U(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,e,q.thatReturnsArgument):null!=a&&(M(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(N,"$\x26/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function V(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(N,"$\x26/")+"/");b=P(b,g,c,d);null==a||R(a,"",U,b);Q(b)}
var W={Children:{map:function(a,b,e){if(null==a)return a;var c=[];V(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=P(null,null,b,e);null==a||R(a,"",T,b);Q(b)},count:function(a){return null==a?0:R(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];V(a,b,null,q.thatReturnsArgument);return b},only:function(a){M(a)?void 0:C("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:y,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null};a.Provider={$$typeof:x,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:A,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:z,createElement:L,cloneElement:function(a,b,e){null===a||void 0===a?C("267",a):void 0;var c=void 0,d=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);var k=void 0;a.type&&a.type.defaultProps&&
(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];d.children=k}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:M,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,assign:m}},X=Object.freeze({default:W}),
Y=X&&W||X;module.exports=Y["default"]?Y["default"]:Y;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(2);
var invariant = __webpack_require__(0);
var emptyObject = __webpack_require__(5);
var warning = __webpack_require__(3);
var emptyFunction = __webpack_require__(1);
var checkPropTypes = __webpack_require__(6);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.3.2';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    _changedBits: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;

  {
    context._currentRenderer = null;
  }

  return context;
}

function forwardRef(render) {
  {
    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_CALL_TYPE:
      return 'ReactCall';
    case REACT_RETURN_TYPE:
      return 'ReactReturn';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

{
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    !componentClass.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(0);
var warning = __webpack_require__(3);
var assign = __webpack_require__(2);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(6);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(0);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blank = __webpack_require__(15);

Object.defineProperty(exports, 'blank', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blank).default;
  }
});

var _loadingBalls = __webpack_require__(16);

Object.defineProperty(exports, 'balls', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingBalls).default;
  }
});

var _loadingBars = __webpack_require__(17);

Object.defineProperty(exports, 'bars', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingBars).default;
  }
});

var _loadingBubbles = __webpack_require__(18);

Object.defineProperty(exports, 'bubbles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingBubbles).default;
  }
});

var _loadingCubes = __webpack_require__(19);

Object.defineProperty(exports, 'cubes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingCubes).default;
  }
});

var _loadingCylon = __webpack_require__(20);

Object.defineProperty(exports, 'cylon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingCylon).default;
  }
});

var _loadingSpin = __webpack_require__(21);

Object.defineProperty(exports, 'spin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpin).default;
  }
});

var _loadingSpinningBubbles = __webpack_require__(22);

Object.defineProperty(exports, 'spinningBubbles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpinningBubbles).default;
  }
});

var _loadingSpokes = __webpack_require__(23);

Object.defineProperty(exports, 'spokes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loadingSpokes).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon-blank\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"></svg>\n"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon-loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(-8 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"-8 0; 2 0; 2 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.25;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(2 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"2 0; 12 0; 12 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.35;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(12 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"12 0; 22 0; 22 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.45;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(24 0)\" d=\"M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"22 0; 32 0; 32 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.55;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n</svg>\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(2)\" d=\"M0 12 V20 H4 V12z\"> \n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(8)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(14)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path transform=\"translate(20)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.6\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path transform=\"translate(26)\" d=\"M0 12 V20 H4 V12z\">\n    <animate attributeName=\"d\" values=\"M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.8\" keytimes=\"0;.2;.5;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n</svg>\n"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <circle transform=\"translate(8 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"translate(16 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.3\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"translate(24 0)\" cx=\"0\" cy=\"16\" r=\"0\"> \n    <animate attributeName=\"r\" values=\"0; 4; 0; 0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.6\"\n      keytimes=\"0;0.2;0.7;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n</svg>\n"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(-8 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"-8 0; 2 0; 2 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.25;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(2 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"2 0; 12 0; 12 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.35;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(12 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"12 0; 22 0; 22 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.45;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n  <path transform=\"translate(24 0)\" d=\"M0 12 V20 H8 V12z\"> \n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"22 0; 32 0; 32 0;\" dur=\"0.8s\" repeatCount=\"indefinite\" begin=\"0\" keytimes=\"0;.55;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8\" calcMode=\"spline\"  />\n  </path>\n</svg>\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path opacity=\"0.5\" transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0.1s\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n  <path opacity=\"0.25\" transform=\"translate(0 0)\" d=\"M0 12 V20 H4 V12z\">\n    <animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 0; 28 0; 0 0; 0 0\" dur=\"1.5s\" begin=\"0.2s\" repeatCount=\"indefinite\" keytimes=\"0;0.3;0.6;1\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </path>\n</svg>\n"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path opacity=\".25\" d=\"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4\"/>\n  <path d=\"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z\">\n    <animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 16 16\" to=\"360 16 16\" dur=\"0.8s\" repeatCount=\"indefinite\" />\n  </path>\n</svg>\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <circle cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(45 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.125s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(90 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.25s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(135 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.375s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(225 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.625s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(270 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.75s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(315 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.875s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n  <circle transform=\"rotate(180 16 16)\" cx=\"16\" cy=\"3\" r=\"0\">\n    <animate attributeName=\"r\" values=\"0;3;0;0\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\" keySplines=\"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8\" calcMode=\"spline\" />\n  </circle>\n</svg>\n"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<svg id=\"loading\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(0 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(45 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.125s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(90 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.25s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(135 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.375s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(180 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.5s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(225 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.675s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(270 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.75s\"/>\n  </path>\n  <path opacity=\".1\" d=\"M14 0 H18 V8 H14 z\" transform=\"rotate(315 16 16)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\".1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0.875s\"/>\n  </path>\n</svg>\n"

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-loading.js.map

/***/ }),

/***/ "./node_modules/react-popper/lib/Arrow.js":
/*!************************************************!*\
  !*** ./node_modules/react-popper/lib/Arrow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

Arrow.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./node_modules/react-popper/lib/Manager.js":
/*!**************************************************!*\
  !*** ./node_modules/react-popper/lib/Manager.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Manager.childContextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
Manager.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
Manager.defaultProps = {
  tag: 'div'
};


/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./node_modules/react-popper/lib/Popper.js":
/*!*************************************************!*\
  !*** ./node_modules/react-popper/lib/Popper.js ***!
  \*************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var placements = popper_js__WEBPACK_IMPORTED_MODULE_2__["default"].placements;

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      if (_this.props.target) {
        return _this.props.target;
      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
      }
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;


      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return _extends({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;
      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }
      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
        this._destroyPopper();
        this._createPopper();
      }
      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled,
          positionFixed = _props.positionFixed;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = _extends({}, this.props.modifiers.arrow || {}, {
          element: this._arrowNode
        });
      }
      this._popper = new popper_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._getTargetNode(), this._popperNode, {
        placement: placement,
        positionFixed: positionFixed,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          positionFixed = _props2.positionFixed,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, componentProps, children);
    }
  }]);

  return Popper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Popper.contextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Popper.childContextTypes = {
  popper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
Popper.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(placements),
  eventsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  positionFixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  // the following check is needed for SSR
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(typeof Element !== 'undefined' ? Element : Object), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getBoundingClientRect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    clientWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    clientHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  positionFixed: false,
  modifiers: {}
};


/* harmony default export */ __webpack_exports__["default"] = (Popper);

/***/ }),

/***/ "./node_modules/react-popper/lib/Target.js":
/*!*************************************************!*\
  !*** ./node_modules/react-popper/lib/Target.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

Target.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

/* harmony default export */ __webpack_exports__["default"] = (Target);

/***/ }),

/***/ "./node_modules/react-popper/lib/react-popper.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-popper/lib/react-popper.js ***!
  \*******************************************************/
/*! exports provided: Manager, Target, Popper, placements, Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Target */ "./node_modules/react-popper/lib/Target.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return _Target__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popper */ "./node_modules/react-popper/lib/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_2__["placements"]; });

/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Arrow */ "./node_modules/react-popper/lib/Arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/react-star-ratings/build/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-star-ratings/build/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _starRatings = __webpack_require__(/*! ./star-ratings */ "./node_modules/react-star-ratings/build/star-ratings.js");

var _starRatings2 = _interopRequireDefault(_starRatings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// polyfill for ie
Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

exports.default = _starRatings2.default;

/***/ }),

/***/ "./node_modules/react-star-ratings/build/star-ratings.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-star-ratings/build/star-ratings.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _star = __webpack_require__(/*! ./star */ "./node_modules/react-star-ratings/build/star.js");

var _star2 = _interopRequireDefault(_star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarRatings = function (_React$Component) {
  _inherits(StarRatings, _React$Component);

  function StarRatings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StarRatings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StarRatings.__proto__ || Object.getPrototypeOf(StarRatings)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      highestStarHovered: -Infinity
    }, _this.fillId = 'starGrad' + Math.random().toFixed(15).slice(2), _this.hoverOverStar = function (starRating) {
      return function () {
        _this.setState({
          highestStarHovered: starRating
        });
      };
    }, _this.unHoverOverStar = function () {
      _this.setState({
        highestStarHovered: -Infinity
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StarRatings, [{
    key: 'stopColorStyle',
    value: function stopColorStyle(color) {
      var stopColorStyle = {
        stopColor: color,
        stopOpacity: '1'
      };
      return this.props.ignoreInlineStyles ? {} : stopColorStyle;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          starRatedColor = _props.starRatedColor,
          starEmptyColor = _props.starEmptyColor;


      return _react2.default.createElement(
        'div',
        {
          className: 'star-ratings',
          title: this.titleText,
          style: this.starRatingsStyle
        },
        _react2.default.createElement(
          'svg',
          {
            className: 'star-grad',
            style: this.starGradientStyle
          },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'linearGradient',
              { id: this.fillId, x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
              _react2.default.createElement('stop', { offset: '0%', className: 'stop-color-first', style: this.stopColorStyle(starRatedColor) }),
              _react2.default.createElement('stop', { offset: this.offsetValue, className: 'stop-color-first', style: this.stopColorStyle(starRatedColor) }),
              _react2.default.createElement('stop', { offset: this.offsetValue, className: 'stop-color-final', style: this.stopColorStyle(starEmptyColor) }),
              _react2.default.createElement('stop', { offset: '100%', className: 'stop-color-final', style: this.stopColorStyle(starEmptyColor) })
            )
          )
        ),
        this.renderStars
      );
    }
  }, {
    key: 'starRatingsStyle',
    get: function get() {
      var starRatingsStyle = {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block'
      };
      return this.props.ignoreInlineStyles ? {} : starRatingsStyle;
    }
  }, {
    key: 'starGradientStyle',
    get: function get() {
      var starGradientStyle = {
        position: 'absolute',
        zIndex: '0',
        width: '0',
        height: '0',
        visibility: 'hidden'
      };
      return this.props.ignoreInlineStyles ? {} : starGradientStyle;
    }
  }, {
    key: 'titleText',
    get: function get() {
      var _props2 = this.props,
          typeOfWidget = _props2.typeOfWidget,
          selectedRating = _props2.rating;

      var hoveredRating = this.state.highestStarHovered;
      var currentRating = hoveredRating > 0 ? hoveredRating : selectedRating;
      // fix it at 2 decimal places and remove trailing 0s
      var formattedRating = parseFloat(currentRating.toFixed(2)).toString();
      if (Number.isInteger(currentRating)) {
        formattedRating = String(currentRating);
      }
      var starText = typeOfWidget + 's';
      if (formattedRating === '1') {
        starText = typeOfWidget;
      }
      return formattedRating + ' ' + starText;
    }
  }, {
    key: 'offsetValue',
    get: function get() {
      var rating = this.props.rating;
      var ratingIsInteger = Number.isInteger(rating);
      var offsetValue = '0%';
      if (!ratingIsInteger) {
        var firstTwoDecimals = rating.toFixed(2).split('.')[1].slice(0, 2);
        offsetValue = firstTwoDecimals + '%';
      }
      return offsetValue;
    }
  }, {
    key: 'renderStars',
    get: function get() {
      var _this2 = this;

      var _props3 = this.props,
          changeRating = _props3.changeRating,
          selectedRating = _props3.rating,
          numberOfStars = _props3.numberOfStars,
          starDimension = _props3.starDimension,
          starSpacing = _props3.starSpacing,
          starRatedColor = _props3.starRatedColor,
          starEmptyColor = _props3.starEmptyColor,
          starHoverColor = _props3.starHoverColor,
          gradientPathName = _props3.gradientPathName,
          ignoreInlineStyles = _props3.ignoreInlineStyles,
          svgIconPath = _props3.svgIconPath,
          svgIconViewBox = _props3.svgIconViewBox,
          name = _props3.name;
      var highestStarHovered = this.state.highestStarHovered;


      var numberOfStarsArray = Array.apply(null, Array(numberOfStars));

      return numberOfStarsArray.map(function (_, index) {
        var starRating = index + 1;
        var isStarred = starRating <= selectedRating;

        // hovered only matters when changeRating is true
        var hoverMode = highestStarHovered > 0;
        var isHovered = starRating <= highestStarHovered;
        var isCurrentHoveredStar = starRating === highestStarHovered;

        // only matters when changeRating is false
        // given star 5 and rating 4.2:  5 > 4.2 && 4 < 4.2;
        var isPartiallyFullStar = starRating > selectedRating && starRating - 1 < selectedRating;

        var isFirstStar = starRating === 1;
        var isLastStar = starRating === numberOfStars;

        return _react2.default.createElement(_star2.default, {
          key: starRating,
          fillId: _this2.fillId,
          changeRating: changeRating ? function () {
            return changeRating(starRating, name);
          } : null,
          hoverOverStar: changeRating ? _this2.hoverOverStar(starRating) : null,
          unHoverOverStar: changeRating ? _this2.unHoverOverStar : null,
          isStarred: isStarred,
          isPartiallyFullStar: isPartiallyFullStar,
          isHovered: isHovered,
          hoverMode: hoverMode,
          isCurrentHoveredStar: isCurrentHoveredStar,
          isFirstStar: isFirstStar,
          isLastStar: isLastStar,
          starDimension: starDimension,
          starSpacing: starSpacing,
          starHoverColor: starHoverColor,
          starRatedColor: starRatedColor,
          starEmptyColor: starEmptyColor,
          gradientPathName: gradientPathName,
          ignoreInlineStyles: ignoreInlineStyles,
          svgIconPath: svgIconPath,
          svgIconViewBox: svgIconViewBox
        });
      });
    }
  }]);

  return StarRatings;
}(_react2.default.Component);

StarRatings.propTypes = {
  rating: _propTypes2.default.number.isRequired,
  numberOfStars: _propTypes2.default.number.isRequired,
  changeRating: _propTypes2.default.func,
  starHoverColor: _propTypes2.default.string.isRequired,
  starRatedColor: _propTypes2.default.string.isRequired,
  starEmptyColor: _propTypes2.default.string.isRequired,
  starDimension: _propTypes2.default.string.isRequired,
  starSpacing: _propTypes2.default.string.isRequired,
  gradientPathName: _propTypes2.default.string.isRequired,
  ignoreInlineStyles: _propTypes2.default.bool.isRequired,
  svgIconPath: _propTypes2.default.string.isRequired,
  svgIconViewBox: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string
};

StarRatings.defaultProps = {
  rating: 0,
  typeOfWidget: 'Star',
  numberOfStars: 5,
  changeRating: null,
  starHoverColor: 'rgb(230, 67, 47)',
  starRatedColor: 'rgb(109, 122, 130)',
  starEmptyColor: 'rgb(203, 211, 227)',
  starDimension: '50px',
  starSpacing: '7px',
  gradientPathName: '',
  ignoreInlineStyles: false,
  svgIconPath: 'm25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z',
  svgIconViewBox: '0 0 51 48'
};

exports.default = StarRatings;

/***/ }),

/***/ "./node_modules/react-star-ratings/build/star.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-star-ratings/build/star.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_React$Component) {
  _inherits(Star, _React$Component);

  function Star() {
    _classCallCheck(this, Star);

    return _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).apply(this, arguments));
  }

  _createClass(Star, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          changeRating = _props.changeRating,
          hoverOverStar = _props.hoverOverStar,
          unHoverOverStar = _props.unHoverOverStar,
          svgIconViewBox = _props.svgIconViewBox,
          svgIconPath = _props.svgIconPath;

      return _react2.default.createElement(
        'div',
        {
          className: 'star-container',
          style: this.starContainerStyle,
          onMouseEnter: hoverOverStar,
          onMouseLeave: unHoverOverStar,
          onClick: changeRating
        },
        _react2.default.createElement(
          'svg',
          {
            viewBox: svgIconViewBox,
            className: this.starClasses,
            style: this.starSvgStyle
          },
          _react2.default.createElement('path', {
            className: 'star',
            style: this.pathStyle,
            d: svgIconPath
          })
        )
      );
    }
  }, {
    key: 'starContainerStyle',
    get: function get() {
      var _props2 = this.props,
          changeRating = _props2.changeRating,
          starSpacing = _props2.starSpacing,
          isFirstStar = _props2.isFirstStar,
          isLastStar = _props2.isLastStar,
          ignoreInlineStyles = _props2.ignoreInlineStyles;


      var starContainerStyle = {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle',
        paddingLeft: isFirstStar ? undefined : starSpacing,
        paddingRight: isLastStar ? undefined : starSpacing,
        cursor: changeRating ? 'pointer' : undefined
      };
      return ignoreInlineStyles ? {} : starContainerStyle;
    }
  }, {
    key: 'starSvgStyle',
    get: function get() {
      var _props3 = this.props,
          ignoreInlineStyles = _props3.ignoreInlineStyles,
          isCurrentHoveredStar = _props3.isCurrentHoveredStar,
          starDimension = _props3.starDimension;

      var starSvgStyle = {
        width: starDimension,
        height: starDimension,
        transition: 'transform .2s ease-in-out',
        transform: isCurrentHoveredStar ? 'scale(1.1)' : undefined
      };

      return ignoreInlineStyles ? {} : starSvgStyle;
    }
  }, {
    key: 'pathStyle',
    get: function get() {
      var _props4 = this.props,
          isStarred = _props4.isStarred,
          isPartiallyFullStar = _props4.isPartiallyFullStar,
          isHovered = _props4.isHovered,
          hoverMode = _props4.hoverMode,
          starEmptyColor = _props4.starEmptyColor,
          starRatedColor = _props4.starRatedColor,
          starHoverColor = _props4.starHoverColor,
          gradientPathName = _props4.gradientPathName,
          fillId = _props4.fillId,
          ignoreInlineStyles = _props4.ignoreInlineStyles;


      var fill = void 0;
      if (hoverMode) {
        if (isHovered) fill = starHoverColor;else fill = starEmptyColor;
      } else {
        if (isPartiallyFullStar) fill = 'url(\'' + gradientPathName + '#' + fillId + '\')';else if (isStarred) fill = starRatedColor;else fill = starEmptyColor;
      }

      var pathStyle = {
        fill: fill,
        transition: 'fill .2s ease-in-out'
      };

      return ignoreInlineStyles ? {} : pathStyle;
    }
  }, {
    key: 'starClasses',
    get: function get() {
      var _props5 = this.props,
          isSelected = _props5.isSelected,
          isPartiallyFullStar = _props5.isPartiallyFullStar,
          isHovered = _props5.isHovered,
          isCurrentHoveredStar = _props5.isCurrentHoveredStar,
          ignoreInlineStyles = _props5.ignoreInlineStyles;


      var starClasses = (0, _classnames2.default)({
        'widget-svg': true,
        'widget-selected': isSelected,
        'multi-widget-selected': isPartiallyFullStar,
        'hovered': isHovered,
        'current-hovered': isCurrentHoveredStar
      });

      return ignoreInlineStyles ? {} : starClasses;
    }
  }]);

  return Star;
}(_react2.default.Component);

Star.propTypes = {
  fillId: _propTypes2.default.string.isRequired,
  changeRating: _propTypes2.default.func,
  hoverOverStar: _propTypes2.default.func,
  unHoverOverStar: _propTypes2.default.func,
  isStarred: _propTypes2.default.bool.isRequired,
  isPartiallyFullStar: _propTypes2.default.bool.isRequired,
  isHovered: _propTypes2.default.bool.isRequired,
  hoverMode: _propTypes2.default.bool.isRequired,
  isCurrentHoveredStar: _propTypes2.default.bool.isRequired,
  isFirstStar: _propTypes2.default.bool.isRequired,
  isLastStar: _propTypes2.default.bool.isRequired,
  starDimension: _propTypes2.default.string.isRequired,
  starSpacing: _propTypes2.default.string.isRequired,
  starHoverColor: _propTypes2.default.string.isRequired,
  starRatedColor: _propTypes2.default.string.isRequired,
  starEmptyColor: _propTypes2.default.string.isRequired,
  gradientPathName: _propTypes2.default.string.isRequired,
  ignoreInlineStyles: _propTypes2.default.bool.isRequired,
  svgIconPath: _propTypes2.default.string.isRequired,
  svgIconViewBox: _propTypes2.default.string.isRequired
};

exports.default = Star;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/reactstrap/dist/reactstrap.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactstrap/dist/reactstrap.es.js ***!
  \*******************************************************/
/*! exports provided: Alert, Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavDropdown, NavLink, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Badge, Card, CardLink, CardGroup, CardDeck, CardColumns, CardBody, CardBlock, CardFooter, CardHeader, CardImg, CardImgOverlay, Carousel, UncontrolledCarousel, CarouselControl, CarouselItem, CarouselIndicators, CarouselCaption, CardSubtitle, CardText, CardTitle, Popover, PopoverContent, PopoverBody, PopoverTitle, PopoverHeader, Progress, Modal, ModalHeader, ModalBody, ModalFooter, PopperContent, PopperTargetHelper, Tooltip, Table, ListGroup, Form, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupButtonDropdown, InputGroupText, Label, CustomInput, Media, Pagination, PaginationItem, PaginationLink, TabContent, TabPane, Jumbotron, Collapse, ListGroupItem, ListGroupItemText, ListGroupItemHeading, UncontrolledAlert, UncontrolledButtonDropdown, UncontrolledCollapse, UncontrolledDropdown, UncontrolledNavDropdown, UncontrolledTooltip, Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return NavbarBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarToggler", function() { return NavbarToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return NavDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return BreadcrumbItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDropdown", function() { return ButtonDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return ButtonToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownToggle", function() { return DropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return Fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLink", function() { return CardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGroup", function() { return CardGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDeck", function() { return CardDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardColumns", function() { return CardColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBody", function() { return CardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBlock", function() { return CardBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return CardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImg", function() { return CardImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgOverlay", function() { return CardImgOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledCarousel", function() { return UncontrolledCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselControl", function() { return CarouselControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return CarouselItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselIndicators", function() { return CarouselIndicators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselCaption", function() { return CarouselCaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return CardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardText", function() { return CardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContent", function() { return PopoverContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverBody", function() { return PopoverBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTitle", function() { return PopoverTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverHeader", function() { return PopoverHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return ModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopperContent", function() { return PopperContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopperTargetHelper", function() { return PopperTargetHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return ListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFeedback", function() { return FormFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormText", function() { return FormText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupAddon", function() { return InputGroupAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupButton", function() { return InputGroupButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupButtonDropdown", function() { return InputGroupButtonDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupText", function() { return InputGroupText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInput", function() { return CustomInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationItem", function() { return PaginationItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationLink", function() { return PaginationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return TabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return TabPane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return Jumbotron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return ListGroupItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItemText", function() { return ListGroupItemText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItemHeading", function() { return ListGroupItemHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledAlert", function() { return UncontrolledAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledButtonDropdown", function() { return UncontrolledButtonDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledCollapse", function() { return UncontrolledCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledDropdown", function() { return UncontrolledDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledNavDropdown", function() { return UncontrolledNavDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledTooltip", function() { return UncontrolledTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return utils; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isfunction */ "./node_modules/lodash.isfunction/index.js");
/* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isfunction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.isobject */ "./node_modules/lodash.isobject/index.js");
/* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isobject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/react-popper.js");
/* harmony import */ var lodash_tonumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.tonumber */ "./node_modules/lodash.tonumber/index.js");
/* harmony import */ var lodash_tonumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_tonumber__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");










var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth() {
  var scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}

function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);

  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}

function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

var globalCssModule = void 0;

function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

function mapToCssModules() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cssModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalCssModule;

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key = void 0;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}

var warned = {};

function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }
    warned[message] = true;
  }
}

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(undefined, [props, propName, componentName].concat(rest));
  };
}

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}

var targetPropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any })]);

/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
var TransitionTimeouts = {
  Fade: 150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal: 300, // $modal-transition
  Carousel: 600 // $carousel-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];

var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};

var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40
};

var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function isReactRefObj(target) {
  if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
    return 'current' in target;
  }
  return false;
}

function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }
  if (lodash_isfunction__WEBPACK_IMPORTED_MODULE_3___default()(target)) {
    return target();
  }
  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll('#' + target);
    }
    if (!selection.length) {
      throw new Error('The target \'' + target + '\' could not be identified in the dom, tip: check spelling');
    }
    return selection;
  }
  return target;
}

function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }
  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}

function getTarget(target) {
  var els = findDOMElements(target);
  if (isArrayOrNodeList(els)) {
    return els[0];
  }
  return els;
}

var defaultToggleEvents = ['touchstart', 'click'];

function addMultipleEventListeners(_els, handler, _events) {
  var els = _els;
  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;
  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error('\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ');
  }
  events.forEach(function (event) {
    els.forEach(function (el) {
      el.addEventListener(event, handler);
    });
  });
  return function removeEvents() {
    events.forEach(function (event) {
      els.forEach(function (el) {
        el.removeEventListener(event, handler);
      });
    });
  };
}

var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];



var utils = Object.freeze({
	getScrollbarWidth: getScrollbarWidth,
	setScrollbarWidth: setScrollbarWidth,
	isBodyOverflowing: isBodyOverflowing,
	getOriginalBodyPadding: getOriginalBodyPadding,
	conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
	setGlobalCssModule: setGlobalCssModule,
	mapToCssModules: mapToCssModules,
	omit: omit,
	pick: pick,
	warnOnce: warnOnce,
	deprecated: deprecated,
	DOMElement: DOMElement,
	targetPropType: targetPropType,
	TransitionTimeouts: TransitionTimeouts,
	TransitionPropTypeKeys: TransitionPropTypeKeys,
	TransitionStatuses: TransitionStatuses,
	keyCodes: keyCodes,
	PopperPlacements: PopperPlacements,
	canUseDOM: canUseDOM,
	isReactRefObj: isReactRefObj,
	findDOMElements: findDOMElements,
	isArrayOrNodeList: isArrayOrNodeList,
	getTarget: getTarget,
	defaultToggleEvents: defaultToggleEvents,
	addMultipleEventListeners: addMultipleEventListeners,
	focusableElements: focusableElements
});

var propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, fluid ? 'container-fluid' : 'container'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

var propTypes$1 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  noGutters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$1 = {
  tag: 'div'
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag', 'form']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Row.propTypes = propTypes$1;
Row.defaultProps = defaultProps$1;

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]);

var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes$2 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  widths: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var defaultProps$2 = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);

  var colClasses = [];

  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (lodash_isobject__WEBPACK_IMPORTED_MODULE_4___default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, colClasses), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Col.propTypes = propTypes$2;
Col.defaultProps = defaultProps$2;

var propTypes$3 = {
  light: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "dark"'),
  full: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sticky: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggleable: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]), 'Please use the prop "expand"'),
  expand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$3 = {
  tag: 'nav',
  expand: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + expand;
};

// To better maintain backwards compatibility while toggleable is deprecated.
// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
var toggleableToExpand = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl'
};

var getToggleableClass = function getToggleableClass(toggleable) {
  if (toggleable === undefined || toggleable === 'xl') {
    return false;
  } else if (toggleable === false) {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + (toggleable === true ? 'sm' : toggleableToExpand[toggleable] || toggleable);
};

var Navbar = function Navbar(props) {
  var _classNames;

  var toggleable = props.toggleable,
      expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      inverse = props.inverse,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['toggleable', 'expand', 'className', 'cssModule', 'light', 'dark', 'inverse', 'fixed', 'sticky', 'color', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar', getExpandClass(expand) || getToggleableClass(toggleable), (_classNames = {
    'navbar-light': light,
    'navbar-dark': inverse || dark
  }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Navbar.propTypes = propTypes$3;
Navbar.defaultProps = defaultProps$3;

var propTypes$4 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$4 = {
  tag: 'a'
};

var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-brand'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

NavbarBrand.propTypes = propTypes$4;
NavbarBrand.defaultProps = defaultProps$4;

var propTypes$5 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

var defaultProps$5 = {
  tag: 'button',
  type: 'button'
};

var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-toggler'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    _extends({}, attributes, { className: classes }),
    children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: mapToCssModules('navbar-toggler-icon', cssModule) })
  );
};

NavbarToggler.propTypes = propTypes$5;
NavbarToggler.defaultProps = defaultProps$5;

var propTypes$6 = {
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pills: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  justified: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  card: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$6 = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return 'flex-' + vertical + '-column';
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Nav.propTypes = propTypes$6;
Nav.defaultProps = defaultProps$6;

var propTypes$7 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$7 = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'nav-item', active ? 'active' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

NavItem.propTypes = propTypes$7;
NavItem.defaultProps = defaultProps$7;

/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

var propTypes$8 = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dropup: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "direction" with the value "up".'),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['up', 'down', 'left', 'right']),
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  nav: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append'])]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setActiveFromChild: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$8 = {
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};

var childContextTypes = {
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var Dropdown = function (_React$Component) {
  inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    classCallCheck(this, Dropdown);

    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.addEvents = _this.addEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen,
        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
        inNavbar: this.props.inNavbar
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getContainer',
    value: function getContainer() {
      return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (keyCodes.tab === e.which || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;

      var container = this.getContainer();

      if (e.which === keyCodes.space && keyCodes.enter && this.props.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.props.isOpen) {
        this.toggle(e);
        container.querySelector('[aria-expanded]').focus();
        return;
      }

      var menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
      var itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
      var disabledClass = mapToCssModules('disabled', this.props.cssModule);

      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');
      if (!items.length) return;

      var index = -1;

      var charPressed = String.fromCharCode(e.which).toLowerCase();

      for (var i = 0; i < items.length; i += 1) {
        var firstLetter = items[i].textContent && items[i].textContent[0].toLowerCase();
        if (firstLetter === charPressed || items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          setActiveFromChild = _omit.setActiveFromChild,
          active = _omit.active,
          addonType = _omit.addonType,
          attrs = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'setActiveFromChild', 'active', 'addonType']);

      var direction = this.props.direction === 'down' && dropup ? 'up' : this.props.direction;

      attrs.tag = attrs.tag || (nav ? 'li' : 'div');

      var subItemIsActive = false;
      if (setActiveFromChild) {
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children[1].props.children, function (dropdownItem) {
          if (dropdownItem.props.active) subItemIsActive = true;
        });
      }

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, direction !== 'down' && 'drop' + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, defineProperty(_classNames, 'input-group-' + addonType, addonType), defineProperty(_classNames, 'btn-group', group), defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group && !addonType), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Manager"], _extends({}, attrs, { className: classes, onKeyDown: this.handleKeyDown }));
    }
  }]);
  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Dropdown.propTypes = propTypes$8;
Dropdown.defaultProps = defaultProps$8;
Dropdown.childContextTypes = childContextTypes;

function NavDropdown(props) {
  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, _extends({ nav: true }, props));
}

var propTypes$9 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var defaultProps$9 = {
  tag: 'a'
};

var NavLink = function (_React$Component) {
  inherits(NavLink, _React$Component);

  function NavLink(props) {
    classCallCheck(this, NavLink);

    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(NavLink, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.href === '#') {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);


      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, onClick: this.onClick, className: classes }));
    }
  }]);
  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

NavLink.propTypes = propTypes$9;
NavLink.defaultProps = defaultProps$9;

var propTypes$10 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  listClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps$10 = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'children', 'tag', 'listTag', 'aria-label']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className), cssModule);

  var listClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('breadcrumb', listClassName), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    _extends({}, attributes, { className: classes, 'aria-label': label }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      ListTag,
      { className: listClasses },
      children
    )
  );
};

Breadcrumb.propTypes = propTypes$10;
Breadcrumb.defaultProps = defaultProps$10;

var propTypes$11 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$11 = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes, 'aria-current': active ? 'page' : undefined }));
};

BreadcrumbItem.propTypes = propTypes$11;
BreadcrumbItem.defaultProps = defaultProps$11;

var propTypes$12 = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$12 = {
  color: 'secondary',
  tag: 'button'
};

var Button = function (_React$Component) {
  inherits(Button, _React$Component);

  function Button(props) {
    classCallCheck(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          ariaLabel = _props['aria-label'],
          block = _props.block,
          className = _props.className,
          close = _props.close,
          cssModule = _props.cssModule,
          color = _props.color,
          outline = _props.outline,
          size = _props.size,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['active', 'aria-label', 'block', 'className', 'close', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);


      if (close && typeof attributes.children === 'undefined') {
        attributes.children = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { 'aria-hidden': true },
          '\xD7'
        );
      }

      var btnOutlineColor = 'btn' + (outline ? '-outline' : '') + '-' + color;

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, { close: close }, close || 'btn', close || btnOutlineColor, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      var defaultAriaLabel = close ? 'Close' : null;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick,
        'aria-label': ariaLabel || defaultAriaLabel
      }));
    }
  }]);
  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Button.propTypes = propTypes$12;
Button.defaultProps = defaultProps$12;

var propTypes$13 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

var ButtonDropdown = function ButtonDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, _extends({ group: true }, props));
};

ButtonDropdown.propTypes = propTypes$13;

var propTypes$14 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$13 = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ButtonGroup.propTypes = propTypes$14;
ButtonGroup.defaultProps = defaultProps$13;

var propTypes$15 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps$14 = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'btn-toolbar'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ButtonToolbar.propTypes = propTypes$15;
ButtonToolbar.defaultProps = defaultProps$14;

var propTypes$16 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  divider: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var contextTypes = {
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var defaultProps$15 = {
  tag: 'button',
  toggle: true
};

var DropdownItem = function (_React$Component) {
  inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    classCallCheck(this, DropdownItem);

    var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.getTabIndex = _this.getTabIndex.bind(_this);
    return _this;
  }

  createClass(DropdownItem, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: 'getTabIndex',
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    }
  }, {
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);
  return DropdownItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DropdownItem.propTypes = propTypes$16;
DropdownItem.defaultProps = defaultProps$15;
DropdownItem.contextTypes = contextTypes;

var propTypes$17 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  persist: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$16 = {
  tag: 'div',
  flip: true
};

var contextTypes$1 = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var noFlipModifier = { flip: { enabled: false } };

var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};

var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      tag = props.tag,
      flip = props.flip,
      modifiers = props.modifiers,
      persist = props.persist,
      attrs = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip', 'modifiers', 'persist']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'dropdown-menu', {
    'dropdown-menu-right': right,
    show: context.isOpen
  }), cssModule);

  var Tag = tag;

  if (persist || context.isOpen && !context.inNavbar) {
    Tag = react_popper__WEBPACK_IMPORTED_MODULE_6__["Popper"];

    var position1 = directionPositionMap[context.direction] || 'bottom';
    var position2 = right ? 'end' : 'start';
    attrs.placement = position1 + '-' + position2;
    attrs.component = tag;
    attrs.modifiers = !flip ? _extends({}, modifiers, noFlipModifier) : modifiers;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
    tabIndex: '-1',
    role: 'menu'
  }, attrs, {
    'aria-hidden': !context.isOpen,
    className: classes,
    'x-placement': attrs.placement
  }));
};

DropdownMenu.propTypes = propTypes$17;
DropdownMenu.defaultProps = defaultProps$16;
DropdownMenu.contextTypes = contextTypes$1;

var propTypes$18 = {
  caret: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  'aria-haspopup': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  split: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  nav: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$17 = {
  'aria-haspopup': true,
  color: 'secondary'
};

var contextTypes$2 = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var DropdownToggle = function (_React$Component) {
  inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    classCallCheck(this, DropdownToggle);

    var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(DropdownToggle, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = props.children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { className: 'sr-only' },
        ariaLabel
      );

      var Tag = void 0;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      if (this.context.inNavbar) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: this.onClick,
          'aria-expanded': this.context.isOpen,
          children: children
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Target"], _extends({}, props, {
        className: classes,
        component: Tag,
        onClick: this.onClick,
        'aria-expanded': this.context.isOpen,
        children: children
      }));
    }
  }]);
  return DropdownToggle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DropdownToggle.propTypes = propTypes$18;
DropdownToggle.defaultProps = defaultProps$17;
DropdownToggle.contextTypes = contextTypes$2;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var PropTypes$1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = undefined;
  exports.transitionTimeout = transitionTimeout;

  var _propTypes2 = _interopRequireDefault(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  }).isRequired]);

  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterDone: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    exitDone: _propTypes2.default.string,
    exitActive: _propTypes2.default.string
  })]);
});

unwrapExports(PropTypes$1);

var Transition_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

  var PropTypes$$1 = _interopRequireWildcard(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a);

  var _react2 = _interopRequireDefault(react__WEBPACK_IMPORTED_MODULE_0___default.a);

  var _reactDom2 = _interopRequireDefault(react_dom__WEBPACK_IMPORTED_MODULE_5___default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
  var EXITED = exports.EXITED = 'exited';
  var ENTERING = exports.ENTERING = 'entering';
  var ENTERED = exports.ENTERED = 'entered';
  var EXITING = exports.EXITING = 'exiting';

  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   */

  var Transition = function (_React$Component) {
    _inherits(Transition, _React$Component);

    function Transition(props, context) {
      _classCallCheck(this, Transition);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      var parentGroup = context.transitionGroup;
      // In the context of a TransitionGroup all enters are really appears
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

      var initialStatus = void 0;
      _this.nextStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.nextStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = { status: initialStatus };

      _this.nextCallback = null;
      return _this;
    }

    Transition.prototype.getChildContext = function getChildContext() {
      return { transitionGroup: null }; // allows for nested Transitions
    };

    Transition.prototype.componentDidMount = function componentDidMount() {
      this.updateStatus(true);
    };

    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _ref = this.pendingState || this.state,
          status = _ref.status;

      if (nextProps.in) {
        if (status === UNMOUNTED) {
          this.setState({ status: EXITED });
        }
        if (status !== ENTERING && status !== ENTERED) {
          this.nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          this.nextStatus = EXITING;
        }
      }
    };

    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateStatus();
    };

    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    Transition.prototype.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;

      var exit = void 0,
          enter = void 0,
          appear = void 0;

      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear;
      }
      return { exit: exit, enter: enter, appear: appear };
    };

    Transition.prototype.updateStatus = function updateStatus() {
      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var nextStatus = this.nextStatus;

      if (nextStatus !== null) {
        this.nextStatus = null;
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = _reactDom2.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({ status: UNMOUNTED });
      }
    };

    Transition.prototype.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;

      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

      var timeouts = this.getTimeouts();

      // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set
      if (!mounting && !enter) {
        this.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);

      this.safeSetState({ status: ENTERING }, function () {
        _this2.props.onEntering(node, appearing);

        // FIXME: appear timeout?
        _this2.onTransitionEnd(node, timeouts.enter, function () {
          _this2.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    Transition.prototype.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;

      var timeouts = this.getTimeouts();

      // no exit animation skip right to EXITED
      if (!exit) {
        this.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
        return;
      }
      this.props.onExit(node);

      this.safeSetState({ status: EXITING }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
      var _this4 = this;

      // We need to track pending updates for instances where a cWRP fires quickly
      // after cDM and before the state flushes, which would double trigger a
      // transition
      this.pendingState = nextState;

      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, function () {
        _this4.pendingState = null;
        callback();
      });
    };

    Transition.prototype.setNextCallback = function setNextCallback(callback) {
      var _this5 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this5.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    };

    Transition.prototype.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          childProps = _objectWithoutProperties(_props, ['children']);
      // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, childProps);
    };

    return Transition;
  }(_react2.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$$1.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {}
  };

  Transition.propTypes =  true ? {
    /**
     * A `function` child can be used instead of a React element.
     * This function is called with the current transition status
     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
     * to apply context specific props to a component.
     *
     * ```jsx
     * <Transition timeout={150}>
     *   {(status) => (
     *     <MyComponent className={`fade fade-${status}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes$$1.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes$$1.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes$$1.bool,

    /**
     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
     * If you want to transition on the first mount set `appear` to `true`, and the
     * component will transition in as soon as the `<Transition>` mounts.
     *
     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
     */
    appear: PropTypes$$1.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes$$1.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes$$1.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided
     *
     * You may specify a single timeout for all transitions like: `timeout={500}`,
     * or individually like:
     *
     * ```jsx
     * timeout={{
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * @type {number | { enter?: number, exit?: number }}
     */
    timeout: function timeout(props) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var pt = PropTypes$1.timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;
      return pt.apply(undefined, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes$$1.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes$$1.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$$1.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes$$1.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes$$1.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes$$1.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes$$1.func
  } : undefined;

  // Name the function so it is clearer in the documentation
  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,

    onEnter: noop,
    onEntering: noop,
    onEntered: noop,

    onExit: noop,
    onExiting: noop,
    onExited: noop
  };

  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  exports.default = Transition;
});

var Transition = unwrapExports(Transition_1);

var propTypes$19 = _extends({}, Transition.propTypes, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  baseClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  baseClassActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
});

var defaultProps$18 = _extends({}, Transition.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children', 'innerRef']);

  // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
  // empty object "{}". This is the result of the `react-transition-group` babel
  // configuration settings. Therefore, to ensure that production builds work without
  // error, we can either explicitly define keys or use the Transition.defaultProps.
  // Using the Transition.defaultProps excludes any required props. Thus, the best
  // solution is to explicitly define required props in our utilities and reference these.
  // This also gives us more flexibility in the future to remove the prop-types
  // dependency in distribution builds (Similar to how `react-transition-group` does).
  // Note: Without omitting the `react-transition-group` props, the resulting child
  // Tag component would inherit the Transition properties as attributes for the HTML
  // element which results in errors/warnings for non-valid attributes.

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Transition,
    transitionProps,
    function (status) {
      var isActive = status === 'entered';
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, baseClass, isActive && baseClassActive), cssModule);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tag,
        _extends({ className: classes }, childProps, { ref: innerRef }),
        children
      );
    }
  );
}

Fade.propTypes = propTypes$19;
Fade.defaultProps = defaultProps$18;

var propTypes$20 = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  pill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$19 = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      pill = props.pill,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Badge.propTypes = propTypes$20;
Badge.defaultProps = defaultProps$19;

var propTypes$21 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  block: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the props "body"'),
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

var defaultProps$20 = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      block = props.block,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag', 'innerRef']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes, ref: innerRef }));
};

Card.propTypes = propTypes$21;
Card.defaultProps = defaultProps$20;

var propTypes$22 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$21 = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-group'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardGroup.propTypes = propTypes$22;
CardGroup.defaultProps = defaultProps$21;

var propTypes$23 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$22 = {
  tag: 'div'
};

var CardDeck = function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-deck'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardDeck.propTypes = propTypes$23;
CardDeck.defaultProps = defaultProps$22;

var propTypes$24 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$23 = {
  tag: 'div'
};

var CardColumns = function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-columns'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardColumns.propTypes = propTypes$24;
CardColumns.defaultProps = defaultProps$23;

var propTypes$25 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$24 = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-body'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardBody.propTypes = propTypes$25;
CardBody.defaultProps = defaultProps$24;

function CardBlock(props) {
  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBody, props);
}

var propTypes$26 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$25 = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'innerRef']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-link'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
};

CardLink.propTypes = propTypes$26;
CardLink.defaultProps = defaultProps$25;

var propTypes$27 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$26 = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-footer'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardFooter.propTypes = propTypes$27;
CardFooter.defaultProps = defaultProps$26;

var propTypes$28 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$27 = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-header'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardHeader.propTypes = propTypes$28;
CardHeader.defaultProps = defaultProps$27;

var propTypes$29 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$28 = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);


  var cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, cardImgClassName), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardImg.propTypes = propTypes$29;
CardImg.defaultProps = defaultProps$28;

var propTypes$30 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$29 = {
  tag: 'div'
};

var CardImgOverlay = function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-img-overlay'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardImgOverlay.propTypes = propTypes$30;
CardImgOverlay.defaultProps = defaultProps$29;

var CarouselItem = function (_React$Component) {
  inherits(CarouselItem, _React$Component);

  function CarouselItem(props) {
    classCallCheck(this, CarouselItem);

    var _this = possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));

    _this.state = {
      startAnimation: false
    };

    _this.onEnter = _this.onEnter.bind(_this);
    _this.onEntering = _this.onEntering.bind(_this);
    _this.onExit = _this.onExit.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(CarouselItem, [{
    key: 'onEnter',
    value: function onEnter(node, isAppearing) {
      this.setState({ startAnimation: false });
      this.props.onEnter(node, isAppearing);
    }
  }, {
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      // getting this variable triggers a reflow
      var offsetHeight = node.offsetHeight;
      this.setState({ startAnimation: true });
      this.props.onEntering(node, isAppearing);
      return offsetHeight;
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({ startAnimation: false });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      this.setState({ startAnimation: true });
      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isIn = _props.in,
          children = _props.children,
          cssModule = _props.cssModule,
          slide = _props.slide,
          Tag = _props.tag,
          className = _props.className,
          transitionProps = objectWithoutProperties(_props, ['in', 'children', 'cssModule', 'slide', 'tag', 'className']);


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Transition,
        _extends({}, transitionProps, {
          enter: slide,
          exit: slide,
          'in': isIn,
          onEnter: this.onEnter,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }),
        function (status) {
          var direction = _this2.context.direction;

          var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
          var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
          var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
          var itemClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Tag,
            { className: itemClasses },
            children
          );
        }
      );
    }
  }]);
  return CarouselItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CarouselItem.propTypes = _extends({}, Transition.propTypes, {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  in: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  slide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

CarouselItem.defaultProps = _extends({}, Transition.defaultProps, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});

CarouselItem.contextTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var Carousel = function (_React$Component) {
  inherits(Carousel, _React$Component);

  function Carousel(props) {
    classCallCheck(this, Carousel);

    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.renderItems = _this.renderItems.bind(_this);
    _this.hoverStart = _this.hoverStart.bind(_this);
    _this.hoverEnd = _this.hoverEnd.bind(_this);
    _this.state = {
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  createClass(Carousel, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { direction: this.state.direction };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Set up the cycle
      if (this.props.ride === 'carousel') {
        this.setInterval();
      }

      // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
      document.addEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setInterval(nextProps);
      // Calculate the direction to turn
      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
        this.setState({ direction: 'right' });
      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
        this.setState({ direction: 'left' });
      } else if (this.props.activeIndex > nextProps.activeIndex) {
        this.setState({ direction: this.state.indicatorClicked ? 'left' : 'right' });
      } else if (this.props.activeIndex !== nextProps.activeIndex) {
        this.setState({ direction: this.state.indicatorClicked ? 'right' : 'left' });
      }
      this.setState({ indicatorClicked: false });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearInterval();
      document.removeEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'setInterval',
    value: function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      // make sure not to have multiple intervals going...
      this.clearInterval();
      if (props.interval) {
        this.cycleInterval = setInterval(function () {
          props.next();
        }, parseInt(props.interval, 10));
      }
    })
  }, {
    key: 'clearInterval',
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.cycleInterval);
    })
  }, {
    key: 'hoverStart',
    value: function hoverStart() {
      if (this.props.pause === 'hover') {
        this.clearInterval();
      }
      if (this.props.mouseEnter) {
        var _props;

        (_props = this.props).mouseEnter.apply(_props, arguments);
      }
    }
  }, {
    key: 'hoverEnd',
    value: function hoverEnd() {
      if (this.props.pause === 'hover') {
        this.setInterval();
      }
      if (this.props.mouseLeave) {
        var _props2;

        (_props2 = this.props).mouseLeave.apply(_props2, arguments);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(evt) {
      if (this.props.keyboard) {
        if (evt.keyCode === 37) {
          this.props.previous();
        } else if (evt.keyCode === 39) {
          this.props.next();
        }
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems(carouselItems, className) {
      var _this2 = this;

      var slide = this.props.slide;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { role: 'listbox', className: className },
        carouselItems.map(function (item, index) {
          var isIn = index === _this2.props.activeIndex;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(item, {
            in: isIn,
            slide: slide
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          cssModule = _props3.cssModule,
          slide = _props3.slide,
          className = _props3.className;

      var outerClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel', slide && 'slide'), cssModule);

      var innerClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('carousel-inner'), cssModule);

      // filter out booleans, null, or undefined
      var children = this.props.children.filter(function (child) {
        return child !== null && child !== undefined && typeof child !== 'boolean';
      });

      var slidesOnly = children.every(function (child) {
        return child.type === CarouselItem;
      });

      // Rendering only slides
      if (slidesOnly) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
          this.renderItems(children, innerClasses)
        );
      }

      // Rendering slides and controls
      if (children[0] instanceof Array) {
        var _carouselItems = children[0];
        var _controlLeft = children[1];
        var _controlRight = children[2];

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
          this.renderItems(_carouselItems, innerClasses),
          _controlLeft,
          _controlRight
        );
      }

      // Rendering indicators, slides and controls
      var indicators = children[0];
      var wrappedOnClick = function wrappedOnClick(e) {
        if (typeof indicators.props.onClickHandler === 'function') {
          _this3.setState({ indicatorClicked: true }, function () {
            return indicators.props.onClickHandler(e);
          });
        }
      };
      var wrappedIndicators = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(indicators, { onClickHandler: wrappedOnClick });
      var carouselItems = children[1];
      var controlLeft = children[2];
      var controlRight = children[3];

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
        wrappedIndicators,
        this.renderItems(carouselItems, innerClasses),
        controlLeft,
        controlRight
      );
    }
  }]);
  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  // called when the mouse enters the Carousel
  mouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when the mouse exits the Carousel
  mouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // controls whether the slide animation on the Carousel works or not
  slide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true
};

Carousel.childContextTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;


  var anchorClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-control-' + direction), cssModule);

  var iconClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('carousel-control-' + direction + '-icon'), cssModule);

  var screenReaderClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('sr-only'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'a',
    {
      className: anchorClasses,
      role: 'button',
      tabIndex: '0',
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: iconClasses, 'aria-hidden': 'true' }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      { className: screenReaderClasses },
      directionText || direction
    )
  );
};

CarouselControl.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prev', 'next']).isRequired,
  onClickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  directionText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;


  var listClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()({ active: activeIndex === idx }), cssModule);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('li', {
      key: '' + (item.key || item.src) + item.caption + item.altText,
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'ol',
    { className: listClasses },
    indicators
  );
};

CarouselIndicators.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: classes },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'h3',
      null,
      captionHeader
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'p',
      null,
      captionText
    )
  );
};

CarouselCaption.propTypes = {
  captionHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  captionText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var propTypes$31 = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  indicators: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  goToIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var UncontrolledCarousel = function (_Component) {
  inherits(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    classCallCheck(this, UncontrolledCarousel);

    var _this = possibleConstructorReturn(this, (UncontrolledCarousel.__proto__ || Object.getPrototypeOf(UncontrolledCarousel)).call(this, props));

    _this.animating = false;
    _this.state = { activeIndex: 0 };
    _this.next = _this.next.bind(_this);
    _this.previous = _this.previous.bind(_this);
    _this.goToIndex = _this.goToIndex.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(UncontrolledCarousel, [{
    key: 'onExiting',
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: 'onExited',
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  }, {
    key: 'previous',
    value: function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  }, {
    key: 'goToIndex',
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoPlay = _props.autoPlay,
          indicators = _props.indicators,
          controls = _props.controls,
          items = _props.items,
          goToIndex = _props.goToIndex,
          props = objectWithoutProperties(_props, ['autoPlay', 'indicators', 'controls', 'items', 'goToIndex']);
      var activeIndex = this.state.activeIndex;


      var slides = items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          CarouselItem,
          {
            onExiting: _this2.onExiting,
            onExited: _this2.onExited,
            key: item.src
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { className: 'd-block w-100', src: item.src, alt: item.altText }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselCaption, { captionText: item.caption, captionHeader: item.header || item.caption })
        );
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Carousel,
        _extends({
          activeIndex: activeIndex,
          next: this.next,
          previous: this.previous,
          ride: autoPlay ? 'carousel' : undefined
        }, props),
        indicators && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselIndicators, {
          items: items,
          activeIndex: props.activeIndex || activeIndex,
          onClickHandler: goToIndex || this.goToIndex
        }),
        slides,
        controls && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselControl, {
          direction: 'prev',
          directionText: 'Previous',
          onClickHandler: props.previous || this.previous
        }),
        controls && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselControl, {
          direction: 'next',
          directionText: 'Next',
          onClickHandler: props.next || this.next
        })
      );
    }
  }]);
  return UncontrolledCarousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

UncontrolledCarousel.propTypes = propTypes$31;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};

var propTypes$32 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$30 = {
  tag: 'h6'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-subtitle'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardSubtitle.propTypes = propTypes$32;
CardSubtitle.defaultProps = defaultProps$30;

var propTypes$33 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$31 = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-text'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardText.propTypes = propTypes$33;
CardText.defaultProps = defaultProps$31;

var propTypes$34 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$32 = {
  tag: 'h5'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-title'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardTitle.propTypes = propTypes$34;
CardTitle.defaultProps = defaultProps$32;

var propTypes$35 = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  bsSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

function CustomInput(props) {
  var className = props.className,
      label = props.label,
      inline = props.inline,
      valid = props.valid,
      invalid = props.invalid,
      cssModule = props.cssModule,
      children = props.children,
      bsSize = props.bsSize,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'label', 'inline', 'valid', 'invalid', 'cssModule', 'children', 'bsSize', 'innerRef']);


  var type = attributes.type;

  var customClass = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'custom-' + type, bsSize ? 'custom-' + type + '-' + bsSize : false), cssModule);

  var validationClassNames = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(invalid && 'is-invalid', valid && 'is-valid'), cssModule);

  if (type === 'select') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'select',
      _extends({}, attributes, { ref: innerRef, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, customClass) }),
      children
    );
  }

  if (type === 'file') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: customClass },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, attributes, { ref: innerRef, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, mapToCssModules('custom-file-input', cssModule)) })),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'label',
        { className: mapToCssModules('custom-file-label', cssModule), htmlFor: attributes.id },
        label || 'Choose file'
      )
    );
  }

  if (type !== 'checkbox' && type !== 'radio') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, attributes, { ref: innerRef, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, customClass) }));
  }

  var wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(customClass, mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('custom-control', { 'custom-control-inline': inline }), cssModule));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: wrapperClasses },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, attributes, {
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, mapToCssModules('custom-control-input', cssModule))
    })),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'label',
      { className: mapToCssModules('custom-control-label', cssModule), htmlFor: attributes.id },
      label
    ),
    children
  );
}

CustomInput.propTypes = propTypes$35;

var propTypes$36 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placementPrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  arrowClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  fallbackPlacement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  boundariesElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, DOMElement])
};

var defaultProps$33 = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {}
};

var childContextTypes$1 = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var PopperContent = function (_React$Component) {
  inherits(PopperContent, _React$Component);

  function PopperContent(props) {
    classCallCheck(this, PopperContent);

    var _this = possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));

    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
    _this.setTargetNode = _this.setTargetNode.bind(_this);
    _this.getTargetNode = _this.getTargetNode.bind(_this);
    _this.state = {};
    return _this;
  }

  createClass(PopperContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this.setTargetNode,
          getTargetNode: this.getTargetNode
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      } else if (this._element) {
        // rerender
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hide();
    }
  }, {
    key: 'setTargetNode',
    value: function setTargetNode(node) {
      this.targetNode = node;
    }
  }, {
    key: 'getTargetNode',
    value: function getTargetNode() {
      return this.targetNode;
    }
  }, {
    key: 'getContainerNode',
    value: function getContainerNode() {
      return getTarget(this.props.container);
    }
  }, {
    key: 'handlePlacementChange',
    value: function handlePlacementChange(data) {
      if (this.state.placement !== data.placement) {
        this.setState({ placement: data.placement });
      }
      return data;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.container !== 'inline') {
        if (this.props.isOpen) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (this._element) {
        this.getContainerNode().removeChild(this._element);
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(this._element);
        this._element = null;
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this._element = document.createElement('div');
      this.getContainerNode().appendChild(this._element);
      this.renderIntoSubtree();
      if (this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
        this._element.childNodes[0].focus();
      }
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          cssModule = _props.cssModule,
          children = _props.children,
          isOpen = _props.isOpen,
          flip = _props.flip,
          target = _props.target,
          offset = _props.offset,
          fallbackPlacement = _props.fallbackPlacement,
          placementPrefix = _props.placementPrefix,
          _arrowClassName = _props.arrowClassName,
          hideArrow = _props.hideArrow,
          className = _props.className,
          tag = _props.tag,
          container = _props.container,
          modifiers = _props.modifiers,
          boundariesElement = _props.boundariesElement,
          attrs = objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'arrowClassName', 'hideArrow', 'className', 'tag', 'container', 'modifiers', 'boundariesElement']);

      var arrowClassName = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('arrow', _arrowClassName), cssModule);
      var placement = (this.state.placement || attrs.placement).split('-')[0];
      var popperClassName = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);

      var extendedModifiers = _extends({
        offset: { offset: offset },
        flip: { enabled: flip, behavior: fallbackPlacement },
        preventOverflow: { boundariesElement: boundariesElement },
        update: {
          enabled: true,
          order: 950,
          fn: this.handlePlacementChange
        }
      }, modifiers);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_popper__WEBPACK_IMPORTED_MODULE_6__["Popper"],
        _extends({ modifiers: extendedModifiers }, attrs, { component: tag, className: popperClassName, 'x-placement': this.state.placement || attrs.placement }),
        children,
        !hideArrow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Arrow"], { className: arrowClassName })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      this.setTargetNode(getTarget(this.props.target));

      if (this.props.container === 'inline') {
        return this.props.isOpen ? this.renderChildren() : null;
      }

      return null;
    }
  }]);
  return PopperContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PopperContent.propTypes = propTypes$36;
PopperContent.defaultProps = defaultProps$33;
PopperContent.childContextTypes = childContextTypes$1;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};

var propTypes$37 = {
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  boundariesElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, DOMElement]),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  innerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placementPrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, hide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};

var DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};

var defaultProps$34 = {
  isOpen: false,
  hideArrow: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {}
};

var Popover = function (_React$Component) {
  inherits(Popover, _React$Component);

  function Popover(props) {
    classCallCheck(this, Popover);

    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.getRef = _this.getRef.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this._target = null;
    return _this;
  }

  createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleProps();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearShowTimeout();
      this.clearHideTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: 'getRef',
    value: function getRef(ref) {
      this._popover = ref;
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.clearHideTimeout();
      this.addTargetEvents();
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.clearShowTimeout();
      this.removeTargetEvents();
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (this._target) {
        if (e.target !== this._target && !this._target.contains(e.target) && e.target !== this._popover && !(this._popover && this._popover.contains(e.target))) {
          if (this._hideTimeout) {
            this.clearHideTimeout();
          }

          if (this.props.isOpen) {
            this.toggle(e);
          }
        }
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$37));
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('popover-inner', this.props.innerClassName), this.props.cssModule);

      var popperClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('popover', 'show', this.props.className), this.props.cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        PopperContent,
        {
          className: popperClasses,
          target: this.props.target,
          isOpen: this.props.isOpen,
          hideArrow: this.props.hideArrow,
          placement: this.props.placement,
          placementPrefix: this.props.placementPrefix,
          container: this.props.container,
          modifiers: this.props.modifiers,
          offset: this.props.offset,
          boundariesElement: this.props.boundariesElement
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _extends({}, attributes, { className: classes, ref: this.getRef }))
      );
    }
  }]);
  return Popover;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Popover.propTypes = propTypes$37;
Popover.defaultProps = defaultProps$34;

var propTypes$38 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$35 = {
  tag: 'h3'
};

var PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'popover-header'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PopoverHeader.propTypes = propTypes$38;
PopoverHeader.defaultProps = defaultProps$35;

function PopoverTitle(props) {
  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopoverHeader, props);
}

var propTypes$39 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$36 = {
  tag: 'div'
};

var PopoverBody = function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'popover-body'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PopoverBody.propTypes = propTypes$39;
PopoverBody.defaultProps = defaultProps$36;

function PopoverContent(props) {
  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopoverBody, props);
}

var propTypes$40 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  bar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  multi: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  animated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  barClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$37 = {
  tag: 'div',
  value: 0,
  max: 100
};

var Progress = function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);


  var percent = lodash_tonumber__WEBPACK_IMPORTED_MODULE_7___default()(value) / lodash_tonumber__WEBPACK_IMPORTED_MODULE_7___default()(max) * 100;

  var progressClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'progress'), cssModule);

  var progressBarClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);

  var ProgressBar = multi ? children : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    className: progressBarClasses,
    style: { width: percent + '%' },
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': '0',
    'aria-valuemax': max,
    children: children
  });

  if (bar) {
    return ProgressBar;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: progressClasses, children: ProgressBar }));
};

Progress.propTypes = propTypes$40;
Progress.defaultProps = defaultProps$37;

var propTypes$42 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var Portal = function (_React$Component) {
  inherits(Portal, _React$Component);

  function Portal() {
    classCallCheck(this, Portal);
    return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }

      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);
  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Portal.propTypes = propTypes$42;

function noop() {}

var FadePropTypes = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(Fade.propTypes);

var propTypes$41 = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['static'])]),
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modalClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdropClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  external: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

var propsToOmit = Object.keys(propTypes$41);

var defaultProps$38 = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition
  }
};

var Modal = function (_React$Component) {
  inherits(Modal, _React$Component);

  function Modal(props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_this);
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.handleTab = _this.handleTab.bind(_this);
    _this.onOpened = _this.onOpened.bind(_this);
    _this.onClosed = _this.onClosed.bind(_this);

    _this.state = {
      isOpen: props.isOpen
    };

    if (props.isOpen) {
      _this.init();
    }
    return _this;
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      }

      if (this.state.isOpen && this.props.autoFocus) {
        this.setFocus();
      }

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.setState({ isOpen: nextProps.isOpen });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen && !this.state.isOpen) {
        this.init();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }

      if (this._element && prevProps.zIndex !== this.props.zIndex) {
        this._element.style.zIndex = this.props.zIndex;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }

      if (this.state.isOpen) {
        this.destroy();
      }

      this._isMounted = false;
    }
  }, {
    key: 'onOpened',
    value: function onOpened(node, isAppearing) {
      this.props.onOpened();
      (this.props.modalTransition.onEntered || noop)(node, isAppearing);
    }
  }, {
    key: 'onClosed',
    value: function onClosed(node) {
      // so all methods get called before it is unmounted
      this.props.onClosed();
      (this.props.modalTransition.onExited || noop)(node);
      this.destroy();

      if (this._isMounted) {
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: 'setFocus',
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: 'getFocusableChildren',
    value: function getFocusableChildren() {
      return this._element.querySelectorAll(focusableElements.join(', '));
    }
  }, {
    key: 'getFocusedChild',
    value: function getFocusedChild() {
      var currentFocus = void 0;
      var focusableChildren = this.getFocusableChildren();

      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }
      return currentFocus;
    }

    // not mouseUp because scrollbar fires it, shouldn't close when user scrolls

  }, {
    key: 'handleBackdropClick',
    value: function handleBackdropClick(e) {
      if (e.target === this._mouseDownElement) {
        e.stopPropagation();
        if (!this.props.isOpen || this.props.backdrop !== true) return;

        var container = this._dialog;

        if (e.target && !container.contains(e.target) && this.props.toggle) {
          this.props.toggle(e);
        }
      }
    }
  }, {
    key: 'handleTab',
    value: function handleTab(e) {
      if (e.which !== 9) return;

      var focusableChildren = this.getFocusableChildren();
      var totalFocusable = focusableChildren.length;
      var currentFocus = this.getFocusedChild();

      var focusedIndex = 0;

      for (var i = 0; i < totalFocusable; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }

      if (e.shiftKey && focusedIndex === 0) {
        e.preventDefault();
        focusableChildren[totalFocusable - 1].focus();
      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
        e.preventDefault();
        focusableChildren[0].focus();
      }
    }
  }, {
    key: 'handleBackdropMouseDown',
    value: function handleBackdropMouseDown(e) {
      this._mouseDownElement = e.target;
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape(e) {
      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      try {
        this._triggeringElement = document.activeElement;
      } catch (err) {
        this._triggeringElement = null;
      }
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._originalBodyPadding = getOriginalBodyPadding();

      conditionallyUpdateScrollbar();

      document.body.appendChild(this._element);
      if (Modal.openCount === 0) {
        document.body.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
      }
      Modal.openCount += 1;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this._element) {
        document.body.removeChild(this._element);
        this._element = null;
      }

      if (this._triggeringElement) {
        if (this._triggeringElement.focus) this._triggeringElement.focus();
        this._triggeringElement = null;
      }

      if (Modal.openCount <= 1) {
        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
        // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
        var modalOpenClassNameRegex = new RegExp('(^| )' + modalOpenClassName + '( |$)');
        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
      }
      Modal.openCount -= 1;

      setScrollbarWidth(this._originalBodyPadding);
    }
  }, {
    key: 'renderModalDialog',
    value: function renderModalDialog() {
      var _classNames,
          _this2 = this;

      var attributes = omit(this.props, propsToOmit);
      var dialogBaseClass = 'modal-dialog';

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        _extends({}, attributes, {
          className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(dialogBaseClass, this.props.className, (_classNames = {}, defineProperty(_classNames, 'modal-' + this.props.size, this.props.size), defineProperty(_classNames, dialogBaseClass + '-centered', this.props.centered), _classNames)), this.props.cssModule),
          role: 'document',
          ref: function ref(c) {
            _this2._dialog = c;
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal-content', this.props.contentClassName), this.props.cssModule)
          },
          this.props.children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isOpen) {
        var _props = this.props,
            wrapClassName = _props.wrapClassName,
            modalClassName = _props.modalClassName,
            backdropClassName = _props.backdropClassName,
            cssModule = _props.cssModule,
            isOpen = _props.isOpen,
            backdrop = _props.backdrop,
            role = _props.role,
            labelledBy = _props.labelledBy,
            external = _props.external,
            innerRef = _props.innerRef;


        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onMouseDown: this.handleBackdropMouseDown,
          onKeyUp: this.handleEscape,
          onKeyDown: this.handleTab,
          style: { display: 'block' },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };

        var hasTransition = this.props.fade;
        var modalTransition = _extends({}, Fade.defaultProps, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });
        var backdropTransition = _extends({}, Fade.defaultProps, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        var Backdrop = hasTransition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends({}, backdropTransition, {
          'in': isOpen && !!backdrop,
          cssModule: cssModule,
          className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal-backdrop', backdropClassName), cssModule)
        })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal-backdrop', 'show', backdropClassName), cssModule) });

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Portal,
          { node: this._element },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: mapToCssModules(wrapClassName) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              Fade,
              _extends({}, modalAttributes, modalTransition, {
                'in': isOpen,
                onEntered: this.onOpened,
                onExited: this.onClosed,
                cssModule: cssModule,
                className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal', modalClassName), cssModule),
                innerRef: innerRef
              }),
              external,
              this.renderModalDialog()
            ),
            Backdrop
          )
        );
      }

      return null;
    }
  }]);
  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Modal.propTypes = propTypes$41;
Modal.defaultProps = defaultProps$38;
Modal.openCount = 0;

var propTypes$43 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  wrapTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  closeAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  charCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$39 = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      close = props.close,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel', 'charCode', 'close']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'modal-header'), cssModule);

  if (!close && toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'button',
      { type: 'button', onClick: toggle, className: mapToCssModules('close', cssModule), 'aria-label': closeAriaLabel },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { 'aria-hidden': 'true' },
        closeIcon
      )
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    WrapTag,
    _extends({}, attributes, { className: classes }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      { className: mapToCssModules('modal-title', cssModule) },
      children
    ),
    close || closeButton
  );
};

ModalHeader.propTypes = propTypes$43;
ModalHeader.defaultProps = defaultProps$39;

var propTypes$44 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$40 = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'modal-body'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ModalBody.propTypes = propTypes$44;
ModalBody.defaultProps = defaultProps$40;

var propTypes$45 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$41 = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'modal-footer'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ModalFooter.propTypes = propTypes$45;
ModalFooter.defaultProps = defaultProps$41;

var propTypes$46 = {
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  boundariesElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, DOMElement]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  innerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  arrowClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  autohide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  placementPrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, hide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var DEFAULT_DELAYS$1 = {
  show: 0,
  hide: 250
};

var defaultProps$42 = {
  isOpen: false,
  hideArrow: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS$1,
  autohide: true,
  toggle: function toggle() {}
};

var Tooltip = function (_React$Component) {
  inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    classCallCheck(this, Tooltip);

    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this._target = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_this);
    return _this;
  }

  createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.addTargetEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearHideTimeout();
      this.clearShowTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: 'onMouseOverTooltip',
    value: function onMouseOverTooltip(e) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
    }
  }, {
    key: 'onMouseLeaveTooltip',
    value: function onMouseLeaveTooltip(e) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onMouseOverTooltipContent',
    value: function onMouseOverTooltipContent() {
      if (this.props.autohide) {
        return;
      }
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
    }
  }, {
    key: 'onMouseLeaveTooltipContent',
    value: function onMouseLeaveTooltipContent(e) {
      if (this.props.autohide) {
        return;
      }
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onEscKeyDown',
    value: function onEscKeyDown(e) {
      if (e.key === 'Escape') {
        this.hide(e);
      }
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: 'show',
    value: function show(e) {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'hide',
    value: function hide(e) {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (this._target !== null && (e.target === this._target || this._target.contains(e.target))) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.toggle(e);
        }
      } else if (this.props.isOpen && e.target.getAttribute('role') !== 'tooltip') {
        if (this._showTimeout) {
          this.clearShowTimeout();
        }
        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      if (this.props.trigger) {
        var triggers = this.props.trigger.split(' ');
        if (triggers.indexOf('manual') === -1) {
          if (triggers.indexOf('click') > -1) {
            ['click', 'touchstart'].forEach(function (event) {
              return document.addEventListener(event, _this2.handleDocumentClick, true);
            });
          }
          if (this._target !== null) {
            if (triggers.indexOf('hover') > -1) {
              this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
              this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
            }
            if (triggers.indexOf('focus') > -1) {
              this._target.addEventListener('focusin', this.show, true);
              this._target.addEventListener('focusout', this.hide, true);
            }
            this._target.addEventListener('keydown', this.onEscKeyDown, true);
          }
        }
      } else {
        if (this._target !== null) {
          this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
          this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
          this._target.addEventListener('keydown', this.onEscKeyDown, true);
          this._target.addEventListener('focusin', this.show, true);
          this._target.addEventListener('focusout', this.hide, true);
        }
        ['click', 'touchstart'].forEach(function (event) {
          return document.addEventListener(event, _this2.handleDocumentClick, true);
        });
      }
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      if (this._target !== null) {
        this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
        this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
        this._target.addEventListener('keydown', this.onEscKeyDown, true);
        this._target.addEventListener('focusin', this.show, true);
        this._target.addEventListener('focusout', this.hide, true);
      }
      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$46));
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tooltip-inner', this.props.innerClassName), this.props.cssModule);

      var popperClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tooltip', 'show', this.props.className), this.props.cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        PopperContent,
        {
          className: popperClasses,
          target: this.props.target,
          isOpen: this.props.isOpen,
          hideArrow: this.props.hideArrow,
          boundariesElement: this.props.boundariesElement,
          placement: this.props.placement,
          placementPrefix: this.props.placementPrefix,
          arrowClassName: this.props.arrowClassName,
          container: this.props.container,
          modifiers: this.props.modifiers,
          offset: this.props.offset,
          cssModule: this.props.cssModule
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _extends({}, attributes, {
          ref: this.props.innerRef,
          className: classes,
          role: 'tooltip',
          'aria-hidden': this.props.isOpen,
          onMouseOver: this.onMouseOverTooltipContent,
          onMouseLeave: this.onMouseLeaveTooltipContent,
          onKeyDown: this.onEscKeyDown
        }))
      );
    }
  }]);
  return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tooltip.propTypes = propTypes$46;
Tooltip.defaultProps = defaultProps$42;

var propTypes$47 = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bordered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  borderless: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "dark"'),
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  responsiveTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$43 = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      inverse = props.inverse,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'borderless', 'striped', 'inverse', 'dark', 'hover', 'responsive', 'tag', 'responsiveTag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark || inverse ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);

  var table = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));

  if (responsive) {
    var responsiveClassName = responsive === true ? 'table-responsive' : 'table-responsive-' + responsive;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      ResponsiveTag,
      { className: responsiveClassName },
      table
    );
  }

  return table;
};

Table.propTypes = propTypes$47;
Table.defaultProps = defaultProps$43;

var propTypes$48 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  flush: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$44 = {
  tag: 'ul'
};

var ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroup.propTypes = propTypes$48;
ListGroup.defaultProps = defaultProps$44;

var propTypes$49 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$45 = {
  tag: 'form'
};

var Form = function (_Component) {
  inherits(Form, _Component);

  function Form(props) {
    classCallCheck(this, Form);

    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  createClass(Form, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: 'submit',
    value: function submit() {
      if (this.ref) {
        this.ref.submit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);


      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, inline ? 'form-inline' : false), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
    }
  }]);
  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Form.propTypes = propTypes$49;
Form.defaultProps = defaultProps$45;

var propTypes$50 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$46 = {
  tag: 'div',
  valid: undefined
};

var FormFeedback = function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'valid', 'tooltip', 'tag']);


  var validMode = tooltip ? 'tooltip' : 'feedback';

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, valid ? 'valid-' + validMode : 'invalid-' + validMode), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormFeedback.propTypes = propTypes$50;
FormFeedback.defaultProps = defaultProps$46;

var propTypes$51 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  row: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  check: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$47 = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'position-relative', row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormGroup.propTypes = propTypes$51;
FormGroup.defaultProps = defaultProps$47;

var propTypes$52 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$48 = {
  tag: 'small',
  color: 'muted'
};

var FormText = function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormText.propTypes = propTypes$52;
FormText.defaultProps = defaultProps$48;

/* eslint react/prefer-stateless-function: 0 */

var propTypes$53 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bsSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  state: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  static: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "plaintext"'),
  plaintext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$49 = {
  type: 'text'
};

var Input = function (_React$Component) {
  inherits(Input, _React$Component);

  function Input(props) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Input, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          type = _props.type,
          bsSize = _props.bsSize,
          state = _props.state,
          valid = _props.valid,
          invalid = _props.invalid,
          tag = _props.tag,
          addon = _props.addon,
          staticInput = _props.static,
          plaintext = _props.plaintext,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'state', 'valid', 'invalid', 'tag', 'addon', 'static', 'plaintext', 'innerRef']);


      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = new RegExp('\\D', 'g');

      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');

      var formControlClass = 'form-control';

      if (plaintext || staticInput) {
        formControlClass = formControlClass + '-plaintext';
        Tag = tag || 'p';
      } else if (fileInput) {
        formControlClass = formControlClass + '-file';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
        if (state === 'danger') {
          invalid = true;
        } else if (state === 'success') {
          valid = true;
        }
      }

      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);

      if (Tag === 'input' || tag && typeof tag === 'function') {
        attributes.type = type;
      }

      if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        warnOnce('Input with a type of "' + type + '" cannot have children. Please use "value"/"defaultValue" instead.');
        delete attributes.children;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
    }
  }]);
  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Input.propTypes = propTypes$53;
Input.defaultProps = defaultProps$49;

var propTypes$54 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$50 = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'input-group', size ? 'input-group-' + size : null), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

InputGroup.propTypes = propTypes$54;
InputGroup.defaultProps = defaultProps$50;

var propTypes$56 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$52 = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'input-group-text'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

InputGroupText.propTypes = propTypes$56;
InputGroupText.defaultProps = defaultProps$52;

var propTypes$55 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$51 = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'input-group-' + addonType), cssModule);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputGroupText, { children: children })
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes, children: children }));
};

InputGroupAddon.propTypes = propTypes$55;
InputGroupAddon.defaultProps = defaultProps$51;

var propTypes$57 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  groupClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  groupAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var InputGroupButton = function InputGroupButton(props) {
  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');

  var children = props.children,
      groupClassName = props.groupClassName,
      groupAttributes = props.groupAttributes,
      propsWithoutGroup = objectWithoutProperties(props, ['children', 'groupClassName', 'groupAttributes']);


  if (typeof children === 'string') {
    var cssModule = propsWithoutGroup.cssModule,
        tag = propsWithoutGroup.tag,
        addonType = propsWithoutGroup.addonType,
        attributes = objectWithoutProperties(propsWithoutGroup, ['cssModule', 'tag', 'addonType']);


    var allGroupAttributes = _extends({}, groupAttributes, {
      cssModule: cssModule,
      tag: tag,
      addonType: addonType
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      InputGroupAddon,
      _extends({}, allGroupAttributes, { className: groupClassName }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({}, attributes, { children: children }))
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputGroupAddon, _extends({}, props, { children: children }));
};

InputGroupButton.propTypes = propTypes$57;

var propTypes$58 = {
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, props);
};

InputGroupButtonDropdown.propTypes = propTypes$58;

var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp$1 = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]);

var columnProps$1 = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  size: stringOrNumberProp$1,
  push: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);

var propTypes$59 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  check: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  for: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  widths: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var defaultProps$53 = {
  tag: 'label',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props.for,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']);


  var colClasses = [];

  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass = void 0;

    if (lodash_isobject__WEBPACK_IMPORTED_MODULE_4___default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};

Label.propTypes = propTypes$59;
Label.defaultProps = defaultProps$53;

var propTypes$60 = {
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  list: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  middle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  object: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);


  var defaultTag = void 0;
  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }
  var Tag = tag || defaultTag;

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Media.propTypes = propTypes$60;

var propTypes$61 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  listClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps$54 = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var Pagination = function Pagination(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'size', 'tag', 'listTag', 'aria-label']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className), cssModule);

  var listClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(listClassName, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    { className: classes, 'aria-label': label },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListTag, _extends({}, attributes, { className: listClasses }))
  );
};

Pagination.propTypes = propTypes$61;
Pagination.defaultProps = defaultProps$54;

var propTypes$62 = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$55 = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PaginationItem.propTypes = propTypes$62;
PaginationItem.defaultProps = defaultProps$55;

var propTypes$63 = {
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$56 = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'page-link'), cssModule);

  var defaultAriaLabel = void 0;
  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  }
  var ariaLabel = props['aria-label'] || defaultAriaLabel;

  var defaultCaret = void 0;
  if (previous) {
    defaultCaret = '\xAB';
  } else if (next) {
    defaultCaret = '\xBB';
  }

  var children = props.children;
  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next) {
    children = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      {
        'aria-hidden': 'true',
        key: 'caret'
      },
      children || defaultCaret
    ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      {
        className: 'sr-only',
        key: 'sr'
      },
      ariaLabel
    )];
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    _extends({}, attributes, {
      className: classes,
      'aria-label': ariaLabel
    }),
    children
  );
};

PaginationLink.propTypes = propTypes$63;
PaginationLink.defaultProps = defaultProps$56;

var propTypes$64 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$57 = {
  tag: 'div'
};

var childContextTypes$2 = {
  activeTabId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var TabContent = function (_Component) {
  inherits(TabContent, _Component);
  createClass(TabContent, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.activeTab !== nextProps.activeTab) {
        return {
          activeTab: nextProps.activeTab
        };
      }
      return null;
    }
  }]);

  function TabContent(props) {
    classCallCheck(this, TabContent);

    var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));

    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  createClass(TabContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        activeTabId: this.state.activeTab
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag;


      var attributes = omit(this.props, Object.keys(propTypes$64));

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tab-content', className), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(TabContent);
TabContent.propTypes = propTypes$64;
TabContent.defaultProps = defaultProps$57;
TabContent.childContextTypes = childContextTypes$2;

var propTypes$65 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  tabId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var defaultProps$58 = {
  tag: 'div'
};

var contextTypes$3 = {
  activeTabId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

function TabPane(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
}
TabPane.propTypes = propTypes$65;
TabPane.defaultProps = defaultProps$58;
TabPane.contextTypes = contextTypes$3;

var propTypes$66 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$59 = {
  tag: 'div'
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      fluid = props.fluid,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Jumbotron.propTypes = propTypes$66;
Jumbotron.defaultProps = defaultProps$59;

var propTypes$67 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  transition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(Fade.propTypes),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

var defaultProps$60 = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _extends({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'closeAriaLabel', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transition', 'fade', 'innerRef']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);

  var closeClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('close', closeClassName), cssModule);

  var alertTransition = _extends({}, Fade.defaultProps, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Fade,
    _extends({}, attributes, alertTransition, { tag: Tag, className: classes, 'in': isOpen, role: 'alert', innerRef: innerRef }),
    toggle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'button',
      { type: 'button', className: closeClasses, 'aria-label': closeAriaLabel, onClick: toggle },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { 'aria-hidden': 'true' },
        '\xD7'
      )
    ) : null,
    children
  );
}

Alert.propTypes = propTypes$67;
Alert.defaultProps = defaultProps$60;

var _transitionStatusToCl;

var propTypes$68 = _extends({}, Transition.propTypes, {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
});

var defaultProps$61 = _extends({}, Transition.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERED, 'collapse show'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITED, 'collapse'), _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var Collapse = function (_Component) {
  inherits(Collapse, _Component);

  function Collapse(props) {
    classCallCheck(this, Collapse);

    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.state = {
      height: null
    };

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_this);
    });
    return _this;
  }

  createClass(Collapse, [{
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      this.setState({ height: getHeight(node) });
      this.props.onEntering(node, isAppearing);
    }
  }, {
    key: 'onEntered',
    value: function onEntered(node, isAppearing) {
      this.setState({ height: null });
      this.props.onEntered(node, isAppearing);
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({ height: getHeight(node) });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
      this.setState({ height: 0 });
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      this.setState({ height: null });
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Tag = _props.tag,
          isOpen = _props.isOpen,
          className = _props.className,
          navbar = _props.navbar,
          cssModule = _props.cssModule,
          children = _props.children,
          innerRef = _props.innerRef,
          otherProps = objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children', 'innerRef']);
      var height = this.state.height;

      // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
      // empty object "{}". This is the result of the `react-transition-group` babel
      // configuration settings. Therefore, to ensure that production builds work without
      // error, we can either explicitly define keys or use the Transition.defaultProps.
      // Using the Transition.defaultProps excludes any required props. Thus, the best
      // solution is to explicitly define required props in our utilities and reference these.
      // This also gives us more flexibility in the future to remove the prop-types
      // dependency in distribution builds (Similar to how `react-transition-group` does).
      // Note: Without omitting the `react-transition-group` props, the resulting child
      // Tag component would inherit the Transition properties as attributes for the HTML
      // element which results in errors/warnings for non-valid attributes.

      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
      var childProps = omit(otherProps, TransitionPropTypeKeys);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Transition,
        _extends({}, transitionProps, {
          'in': isOpen,
          onEntering: this.onEntering,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }),
        function (status) {
          var collapseClass = getTransitionClass(status);
          var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
          var style = height === null ? null : { height: height };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Tag,
            _extends({}, childProps, {
              style: _extends({}, childProps.style, style),
              className: classes,
              ref: _this2.props.innerRef
            }),
            children
          );
        }
      );
    }
  }]);
  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Collapse.propTypes = propTypes$68;
Collapse.defaultProps = defaultProps$61;

var propTypes$69 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$62 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'active', 'disabled', 'action', 'color']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item'), cssModule);

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItem.propTypes = propTypes$69;
ListGroupItem.defaultProps = defaultProps$62;

var propTypes$70 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$63 = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'list-group-item-heading'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItemHeading.propTypes = propTypes$70;
ListGroupItemHeading.defaultProps = defaultProps$63;

var propTypes$71 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$64 = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'list-group-item-text'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItemText.propTypes = propTypes$71;
ListGroupItemText.defaultProps = defaultProps$64;

var UncontrolledAlert = function (_Component) {
  inherits(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    classCallCheck(this, UncontrolledAlert);

    var _this = possibleConstructorReturn(this, (UncontrolledAlert.__proto__ || Object.getPrototypeOf(UncontrolledAlert)).call(this, props));

    _this.state = { isOpen: true };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledAlert, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledAlert;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var UncontrolledButtonDropdown = function (_Component) {
  inherits(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    classCallCheck(this, UncontrolledButtonDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledButtonDropdown.__proto__ || Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledButtonDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonDropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledButtonDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var propTypes$72 = {
  toggler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  toggleEvents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
};

var defaultProps$65 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse = function (_Component) {
  inherits(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    classCallCheck(this, UncontrolledCollapse);

    var _this = possibleConstructorReturn(this, (UncontrolledCollapse.__proto__ || Object.getPrototypeOf(UncontrolledCollapse)).call(this, props));

    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_this);

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  createClass(UncontrolledCollapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.togglers = findDOMElements(this.props.toggler);
      if (this.togglers.length) {
        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.togglers.length && this.removeEventListeners) {
        this.removeEventListeners();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return { isOpen: !isOpen };
      });
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          toggleEvents = _props.toggleEvents,
          rest = objectWithoutProperties(_props, ['toggleEvents']);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collapse, _extends({ isOpen: this.state.isOpen }, rest));
    }
  }]);
  return UncontrolledCollapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

UncontrolledCollapse.propTypes = propTypes$72;
UncontrolledCollapse.defaultProps = defaultProps$65;

var UncontrolledDropdown = function (_Component) {
  inherits(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    classCallCheck(this, UncontrolledDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledDropdown.__proto__ || Object.getPrototypeOf(UncontrolledDropdown)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var UncontrolledNavDropdown = function UncontrolledNavDropdown(props) {
  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UncontrolledDropdown, _extends({ nav: true }, props));
};

var UncontrolledTooltip = function (_Component) {
  inherits(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    classCallCheck(this, UncontrolledTooltip);

    var _this = possibleConstructorReturn(this, (UncontrolledTooltip.__proto__ || Object.getPrototypeOf(UncontrolledTooltip)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledTooltip, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tooltip, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


//# sourceMappingURL=reactstrap.es.js.map


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_831a3634f66cb1dada0c ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_831a3634f66cb1dada0c */ "dll-reference dll_831a3634f66cb1dada0c"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/quote.js":
/*!************************!*\
  !*** ./pages/quote.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StylistList_StylistList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StylistList/StylistList */ "./components/StylistList/StylistList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_shopify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/shopify.css */ "./styles/shopify.css");
/* harmony import */ var _styles_shopify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_shopify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/custom.css */ "./styles/custom.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "//cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770",
        type: "image/png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "FLAYR | Mobile Makeup Artists & Hair Stylists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StylistList_StylistList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: this.props.id
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var id = _ref.query.id;
      return {
        id: id
      };
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/quote")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 19:
/*!******************************!*\
  !*** multi ./pages/quote.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/quote', function() {
module.exports = __webpack_require__(/*! ./pages/quote.js */"./pages/quote.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_831a3634f66cb1dada0c":
/*!*******************************************!*\
  !*** external "dll_831a3634f66cb1dada0c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_831a3634f66cb1dada0c;

/***/ })

},[[19,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=quote.js.map