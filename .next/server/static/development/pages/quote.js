module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Faqs/Faqs.js":
/*!*********************************!*\
  !*** ./components/Faqs/Faqs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
  }, "My Account")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Block Footer__Block--newsletter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    class: "Footer__Title Heading u-h6"
  }, "Newsletter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "Footer__Content Rte"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Subscribe to receive updates, access to exclusive deals, and more. We only post once a month.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    method: "post",
    action: "https://au.flayr.io/contact#footer-newsletter",
    id: "footer-newsletter",
    "accept-charset": "UTF-8",
    class: "Footer__Newsletter Form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "form_type",
    value: "customer"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "utf8",
    value: "\u2713"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "contact[tags]",
    value: "newsletter"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "contact[email]",
    class: "Form__Input",
    "aria-label": "Enter your email address",
    placeholder: "Enter your email address",
    required: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    class: "Form__Submit Button Button--primary"
  }, "Subscribe")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loading */ "react-loading");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./components/StylistList/StylistList.css":
/*!************************************************!*\
  !*** ./components/StylistList/StylistList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/StylistList/StylistList.js":
/*!***********************************************!*\
  !*** ./components/StylistList/StylistList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loading/Loading */ "./components/Loading/Loading.js");
/* harmony import */ var _ShopifyBar_ShopifyBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShopifyBar/ShopifyBar */ "./components/ShopifyBar/ShopifyBar.js");
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var _StylistList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StylistList.css */ "./components/StylistList/StylistList.css");
/* harmony import */ var _StylistList_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_StylistList_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _StylistProfile_StylistProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StylistProfile/StylistProfile */ "./components/StylistProfile/StylistProfile.js");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-star-ratings */ "react-star-ratings");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Faqs_Faqs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Faqs/Faqs */ "./components/Faqs/Faqs.js");
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants */ "constants");
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_11__);
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

      /*       if(this.props.match.path.toString().includes("stylist-quote")){
              this.setState({
                isStylistQuote: true,
                stylistProviderId: this.props.match.params.provider_id
      
              }, ()=>{
                
                axios.get('https://express-server-ap-southeast-2.flayr.io/stylist/'+this.props.match.params.provider_id)
                .then((response) => {
                  this.setState({
                    requestedSylistName: response.data.body.first_name
                  })
                })
                .catch((error) => {
                  console.log(error);
      
                  this.setState({
                    badRequest: true
                  })
                })
                
              
              })
            } */
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-star-ratings */ "react-star-ratings");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "query-string");
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
    class: "ProductItem__Image Image--fadeIn Image--lazyLoaded",
    src: "".concat(props.bigImage),
    className: "big-profile-pic",
    alt: "#bridal"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "Image__Loader"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ "./pages/quote.js":
/*!************************!*\
  !*** ./pages/quote.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StylistList_StylistList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StylistList/StylistList */ "./components/StylistList/StylistList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
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



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/quote.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/quote.js */"./pages/quote.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),

/***/ "react-star-ratings":
/*!*************************************!*\
  !*** external "react-star-ratings" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-star-ratings");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=quote.js.map