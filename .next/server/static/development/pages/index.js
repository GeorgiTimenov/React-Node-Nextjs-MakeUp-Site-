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

/***/ "./components/GetStartedBar/GetStartedBar.js":
/*!***************************************************!*\
  !*** ./components/GetStartedBar/GetStartedBar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var GetStartedBar = function GetStartedBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "getaquote"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "SectionHeader SectionHeader--center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "Section__SubHeading Heading u-h6"
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "Section__Heading Heading u-h1"
  }, "Let's Get Started"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "With over 600 verified stylists, we've got you covered."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Button Button--primary",
    onClick: function onClick() {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });
    }
  }, "Check For Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA0"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (GetStartedBar);

/***/ }),

/***/ "./components/InstaFeed/InstaFeed.css":
/*!********************************************!*\
  !*** ./components/InstaFeed/InstaFeed.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/InstaFeed/InstaFeed.js":
/*!*******************************************!*\
  !*** ./components/InstaFeed/InstaFeed.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InstaFeed_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InstaFeed.css */ "./components/InstaFeed/InstaFeed.css");
/* harmony import */ var _InstaFeed_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InstaFeed_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-load-script */ "react-load-script");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var InstaFeed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InstaFeed, _React$Component);

  function InstaFeed(props) {
    var _this;

    _classCallCheck(this, InstaFeed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InstaFeed).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScriptLoad", function () {
      _this.setState({
        loadedScript: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scroll", function (direction) {
      var far = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.image-container').width() / 4 * direction;
      var pos = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.image-container').scrollLeft() + far;
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.image-container').animate({
        scrollLeft: pos
      }, 1000);
    });

    _this.state = {
      loadedScript: false
    };
    return _this;
  }

  _createClass(InstaFeed, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "widget"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_2___default.a, {
        url: "https://apps.elfsight.com/p/platform.js",
        onLoad: function onLoad(e) {
          return _this2.handleScriptLoad(e);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "SectionHeader SectionHeader--center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "Section__SubHeading Heading u-h6"
      }, "@withflayr"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "Section__Heading Heading u-h1"
      }, "work done by amazing stylists with flayr"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "elfsight-app-f3678d11-c61e-4522-b1e5-c22310a75211"
      }));
    }
  }]);

  return InstaFeed;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InstaFeed);

/***/ }),

/***/ "./components/JoinBar/JoinBar.js":
/*!***************************************!*\
  !*** ./components/JoinBar/JoinBar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var JoinBar = function JoinBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "shopify-section-1536725803289",
    className: "shopify-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "Section",
    id: "section-1536725803289",
    "data-section-id": 1536725803289,
    "data-section-type": "image-with-text-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FlexboxIeFix"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageHero ImageHero--large",
    style: {
      background: 'url(//cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1x1.progressive.jpg?v=1532500769)'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageHero__ImageWrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageHero__Image Image--zoomOut ImageHero__Image--parallax Image--lazyLoaded",
    "data-optimumx": "1.4",
    "data-expand": -150,
    "data-bgset": "//cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_750x960_crop_center.jpg?v=1532500769 750w, //cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1000x.jpg?v=1532500769 1000w, //cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1500x.jpg?v=1532500769 1500w",
    style: {
      backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1500x.jpg?v=1532500769")'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    style: {
      display: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    "data-srcset": "//cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_750x960_crop_center.jpg?v=1532500769 750w, //cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1000x.jpg?v=1532500769 1000w, //cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1500x.jpg?v=1532500769 1500w",
    sizes: "1680px",
    srcSet: "//cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_750x960_crop_center.jpg?v=1532500769 750w, //cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1000x.jpg?v=1532500769 1000w, //cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1500x.jpg?v=1532500769 1500w"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: true,
    className: "lazyautosizes Image--lazyLoaded",
    "data-sizes": "auto",
    "data-optimumx": "1.4",
    "data-parent-fit": "cover",
    "data-srcset": true,
    sizes: "1680px"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", null, "<div class=\"ImageHero__ImageWrapper\" style=\"background-image: url(//cdn.shopify.com/s/files/1/0118/3829/2025/files/makeup-brush-set_1000x.jpg?v=1532500769)\"></div>")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageHero__Wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageHero__Block ImageHero__Block--large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "ImageHero__BlockHeading Heading u-h6"
  }, "Are you a talented makeup artist or hair stylist?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageHero__BlockContent Rte"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Free Leads, No Monthly Fees")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/pages/jobs-for-makeup-artists",
    className: "ImageHero__BlockLink Link Link--underline"
  }, "Join For Free")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n  #section-1536725803289,\n  #section-1536725803289 .Heading {\n    color: #1c1b1b;\n  }\n\n  #section-1536725803289 .ImageHero__Block {\n    background: #ffffff;\n  }\n"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (JoinBar);

/***/ }),

/***/ "./components/LandingPage/LandingPage.css":
/*!************************************************!*\
  !*** ./components/LandingPage/LandingPage.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/LandingPage/LandingPage.js":
/*!***********************************************!*\
  !*** ./components/LandingPage/LandingPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var _QuoteForm_QuoteForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../QuoteForm/QuoteForm */ "./components/QuoteForm/QuoteForm.js");
/* harmony import */ var _ShopifyBar_ShopifyBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShopifyBar/ShopifyBar */ "./components/ShopifyBar/ShopifyBar.js");
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loading/Loading */ "./components/Loading/Loading.js");
/* harmony import */ var _LandingPage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LandingPage.css */ "./components/LandingPage/LandingPage.css");
/* harmony import */ var _LandingPage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LandingPage_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _ReviewBox_ReviewBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ReviewBox/ReviewBox */ "./components/ReviewBox/ReviewBox.js");
/* harmony import */ var _ReviewsBox_ReviewsBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ReviewsBox/ReviewsBox */ "./components/ReviewsBox/ReviewsBox.js");
/* harmony import */ var _InstaFeed_InstaFeed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InstaFeed/InstaFeed */ "./components/InstaFeed/InstaFeed.js");
/* harmony import */ var _NeedHelpBar_NeedHelpBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NeedHelpBar/NeedHelpBar */ "./components/NeedHelpBar/NeedHelpBar.js");
/* harmony import */ var _GetStartedBar_GetStartedBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../GetStartedBar/GetStartedBar */ "./components/GetStartedBar/GetStartedBar.js");
/* harmony import */ var _JoinBar_JoinBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../JoinBar/JoinBar */ "./components/JoinBar/JoinBar.js");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var LandingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage(props) {
    var _this;

    _classCallCheck(this, LandingPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFormHideHandler", function () {
      _this.setState({
        formHidden: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadedHandler", function () {
      _this.setState({
        isLoaded: true
      });
    });

    _this.state = {
      formHidden: false,
      isLoaded: false
    };
    return _this;
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      var loadingText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2"
      }, "Generating your quote");
      var loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "spin",
        color: "black",
        height: "10px",
        width: "10px"
      });
      var messageBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-text"
      }, loadingText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading-bar"
      }, loading));

      if (this.state.isLoaded) {
        messageBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShopifyBar_ShopifyBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), this.state.formHidden && messageBox, !this.state.formHidden && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-background"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        class: "SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1"
      }, "Book Pro Makeup Artists & hair stylists"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuoteForm_QuoteForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        submitRoute: "/quote/",
        loadedQuote: this.onLoadedHandler,
        hideForm: this.onFormHideHandler
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InstaFeed_InstaFeed__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewsBox_ReviewsBox__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JoinBar_JoinBar__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NeedHelpBar_NeedHelpBar__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GetStartedBar_GetStartedBar__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }]);

  return LandingPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

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

/***/ "./components/NeedHelpBar/NeedHelpBar.js":
/*!***********************************************!*\
  !*** ./components/NeedHelpBar/NeedHelpBar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var NeedHelpBar = function NeedHelpBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'white'
    },
    id: "shopify-section-1536883055189",
    className: "shopify-section shopify-section--bordered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "Section Section--spacingNormal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FeatureText "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FeatureText__ContentWrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FeatureText__Content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "SectionHeader"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "SectionHeader__SubHeading Heading u-h6"
  }, "contact us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "SectionHeader__Heading Heading u-h1"
  }, "Need help?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SectionHeader__Description Rte"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can click on the help button or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "call:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:0466986744"
  }, "0466 986 744"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "email:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:hey@flayr.io?Subject=Help%20please",
    title: "mailto:hey@flayr.io?Subject=Help%20please"
  }, "hey@flayr.io"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "text:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "sms://+61437635297"
  }, "0437 635 297")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NeedHelpBar);

/***/ }),

/***/ "./components/QuoteForm/QuoteForm.css":
/*!********************************************!*\
  !*** ./components/QuoteForm/QuoteForm.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/QuoteForm/QuoteForm.js":
/*!*******************************************!*\
  !*** ./components/QuoteForm/QuoteForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuoteForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuoteForm.css */ "./components/QuoteForm/QuoteForm.css");
/* harmony import */ var _QuoteForm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_QuoteForm_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-load-script */ "react-load-script");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-geocode */ "react-geocode");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dates */ "react-dates");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-day-picker/moment */ "react-day-picker/moment");
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .SingleDatePickerInput {\n    background-color: #EFEFEF\n\n  }\n  .DateInput_input{\n    font-size: 13px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background-color: #EFEFEF\n  }\n  .DateInput_input_1{\n    font-size: 13px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background-color: #EFEFEF;\n    \n  }\n\n    \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











react_geocode__WEBPACK_IMPORTED_MODULE_4___default.a.setApiKey("AIzaSyBvDA0hOnuN-KijkcT9IFYapOH9042QSso");
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject());

var QuoteForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QuoteForm, _React$Component);

  function QuoteForm() {
    var _this;

    _classCallCheck(this, QuoteForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuoteForm).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnterSubmit", function (e) {
      if (e.key === 'Enter') {
        _this.submitClickHandler(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputIsValid", function (e) {
      return true;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFieldChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      _this.validateInput(e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelectChange", function (e) {
      e.target.querySelector('#placeholder-select').disabled = true;

      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onServiceChange", function (e) {
      e.target.querySelector('#placeholder-select').disabled = true;

      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTextAreaChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPersonChange", function (e, serviceMap) {
      var _this$setState6;

      e.target.querySelector('#placeholder-select').disabled = true;

      _this.setState(_defineProperty({}, e.target.name, e.target.value));

      var serviceOptions = serviceMap.get(e.target.value); // let selector = e.target.parentNode.parentNode.querySelector("#"+e.target.id+"service");        

      var serviceInput = "<option id=\"placeholder-select\" >--select--</option>";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = serviceOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var service = _step.value;
          var val = service.value;
          var display = service.display;
          serviceInput += "<option value=".concat(val, ">").concat(display, "</option>");
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

      _this.setState((_this$setState6 = {}, _defineProperty(_this$setState6, e.target.name, e.target.value), _defineProperty(_this$setState6, "".concat(e.target.name, "serviceField"), serviceInput), _this$setState6));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScriptLoad", function () {
      // Declare Options For Autocomplete 
      var options = {
        componentRestrictions: {
          country: "au"
        }
      }; // Initialize Google Autocomplete 

      /*global google*/

      _this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('quoteAutofill'), options); // Fire Event when a suggested name is selected

      _this.autocomplete.addListener('place_changed', _this.handlePlaceSelect);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePlaceSelect", function () {
      // Extract City From Address Object
      var addressObject = _this.autocomplete.getPlace();

      var address = addressObject.address_components;
      var postCode = '';
      var state = '';
      var suburb = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = address[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var x = _step2.value;

          if (x.types.includes("locality")) {
            suburb = x.short_name;
          }

          if (x.types.includes("administrative_area_level_1")) {
            state = x.short_name;
          }

          if (x.types.includes("postal_code")) {
            postCode = x.short_name;
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

      _this.setState({
        autofill: addressObject.formatted_address,
        suburb: suburb,
        state: state,
        postcode: postCode
      }, function () {
        _this.fieldsAreValid(['state', 'suburb', 'postcode']);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDateChange", function (date) {
      var s = date;
      var formattedDate = date.format("YYYY-MM-DD");

      _this.setState({
        eventDate: formattedDate,
        date: date
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTimeChange", function (e) {
      var time = e.target.value + "";

      _this.setState({
        time: e.target.value,
        formattedTime: time
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNumPeopleChange", function (e) {
      var num = e.target.value;
      var page2fields = ['numOfPeople'];

      for (var i = 1; i <= num; i++) {
        page2fields.push("person".concat(i));
        page2fields.push("person".concat(i, "service"));
      }

      _this.setState({
        page2fields: page2fields,
        numOfPeople: num
      }, function () {
        _this.clearPage2Errors();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearPage2Errors", function () {
      Object.keys(_this.state.errors).map(function (key, index) {
        if (!_this.state.page2fields.includes(key.toString()) && !key.toString().includes('Msg')) {
          _this.state.errors[key] = false;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextClickHandler", function (e) {
      _this.clearAllErrors();

      e.preventDefault();
      window.scrollTo(0, 0);
      var fields;

      if (_this.state.page === 1) {
        fields = _this.state.page1fields;
      } else if (_this.state.page === 2) {
        fields = _this.state.page2fields;
      }

      if (!_this.fieldsAreValid(fields)) {
        var currPage = _this.state.page + 1;

        if (currPage < 4) {
          _this.setState({
            page: currPage
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (e) {
      if (e.key === 'Enter') {
        _this.nextClickHandler(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearAllErrors", function () {
      Object.keys(_this.state.errors).map(function (key, index) {
        if (!key.toString().includes('Msg')) {
          _this.state.errors[key] = false;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prevClickHandler", function (e) {
      e.preventDefault();
      var currPage = _this.state.page - 1;

      if (currPage > 0) {
        _this.setState({
          page: currPage
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitClickHandler", function (e) {
      e.preventDefault();
      var fields = _this.state.page3fields;

      if (!_this.fieldsAreValid(fields)) {
        _this.props.hideForm();

        var array = [];

        for (var i = 0; i < _this.state.numOfPeople; i++) {
          array.push([_this.state["person" + (i + 1)], _this.state["person" + (i + 1) + "service"]]);
        }

        var quoteInfo = {
          name: _this.state.firstName,
          email: _this.state.email,
          mobile: _this.state.mobile,
          state: _this.state.state,
          suburb: _this.state.suburb,
          postcode: _this.state.postcode,
          event_date: _this.state.eventDate,
          event_time: _this.state.time,
          event_desc: _this.state.event_desc,
          num_of_people: parseInt(_this.state.numOfPeople),
          person_service_list: array,
          look_desc: _this.state.lookDesc
        };
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://express-server-ap-southeast-2.flayr.io/quotes", quoteInfo).then(function (res) {
          _this.setState({
            isLoaded: true
          });

          _this.props.loadedQuote();
          /* this.props.history.push({
              pathname: `${this.props.submitRoute}`+res.data.body.shopify_id,
              fromQuotePage: true          
          }) */

        }).catch(function (err) {
          console.log(err);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "passedRegex", function (fieldKey, stringToTest) {
      var passed = false;
      var regexMap = new Map(); //key, regex

      regexMap.set('autofill', /(?!^ +$)^.+$/);
      regexMap.set('postcode', /^\d{4}$/);
      regexMap.set('state', /NSW|VIC|QLD|TAS|ACT|NT|WA|SA/);
      regexMap.set('suburb', /^[a-zA-Z ]+$/);
      regexMap.set('eventDate', /^\d{4}-\d{2}-\d{2}$/);
      regexMap.set('time', /^([01][0-9]|2[0-3]):([0-5][0-9])$/);
      regexMap.set('event_desc', /(?!^ +$)^.+$/);
      regexMap.set('numOfPeople', /^[1-9]$/);

      for (var i = 1; i <= _this.state.numOfPeople; i++) {
        regexMap.set("person".concat(i), /(?!^ +$)^.+$/);
        regexMap.set("person".concat(i, "service"), /(?!^ +$)^.+$/);
      }

      regexMap.set('firstName', /^[a-zA-Z ]+$/);
      regexMap.set('email', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      regexMap.set('mobile', /^04[0-9]{8}/);
      var regexToTest;

      if (regexMap.get(fieldKey)) {
        regexToTest = regexMap.get(fieldKey);
      } else {
        passed = false;
      }

      if (regexToTest) {
        passed = regexToTest.test(stringToTest);
      }

      return passed;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateDate", function (_ref) {
      var focused = _ref.focused;

      _this.setState({
        focused: focused
      });

      var errorsObj = _this.state.errors;
      var val = _this.state.eventDate;

      if (!focused) {
        if (!_this.passedRegex("eventDate", val)) {
          errorsObj["evetDate"] = true;

          _this.setState({
            errors: errorsObj
          });
        } else {
          errorsObj["eventDate"] = false;

          _this.setState({
            errors: errorsObj
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateInput", function (e) {
      var errorsObj = _this.state.errors;
      var val = _this.state[e.target.name];

      if (e.target.name !== undefined) {
        if (!_this.passedRegex(e.target.name, val)) {
          errorsObj[e.target.name] = true;

          _this.setState({
            errors: errorsObj
          });
        } else {
          errorsObj[e.target.name] = false;

          _this.setState({
            errors: errorsObj
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fieldsAreValid", function (fields) {
      var errorsObj = _this.state.errors;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = fields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var f = _step3.value;

          if (!_this.passedRegex(f, _this.state[f])) {
            errorsObj[f] = true;

            _this.setState({
              errors: errorsObj
            });
          } else {
            errorsObj[f] = false;

            _this.setState({
              errors: errorsObj
            });

            _this.setState({
              errors: errorsObj
            });
          }
        }
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

      var hasErrors = false;
      Object.keys(_this.state.errors).map(function (key, index) {
        if (_this.state.errors[key] === true && key) {
          hasErrors = true;
        }
      });
      return hasErrors;
    });

    _this.eventAddress = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      isSuburbQuote: false,
      page1fields: ['autofill', 'state', 'postcode', 'suburb', 'eventDate', 'time', 'event_desc'],
      page2fields: ['numOfPeople'],
      page3fields: ['firstName', 'email', 'mobile'],
      width: 0,
      height: 0,
      autofill: '',
      serviceMap: new Map(),
      isLoaded: false,
      page: 1,
      state: '',
      suburb: '',
      firstName: '',
      email: '',
      mobile: '',
      eventDate: '',
      time: '',
      postcode: '',
      formattedTime: '',
      event_desc: '',
      lookDesc: '',
      numOfPeople: 0,
      person1serviceField: '',
      person2serviceField: '',
      person3serviceField: '',
      person4serviceField: '',
      person5serviceField: '',
      person6serviceField: '',
      person7serviceField: '',
      person8serviceField: '',
      person1: '',
      person1service: '',
      person2: '',
      person2service: '',
      person3: '',
      person3service: '',
      person4: '',
      person4service: '',
      person5: '',
      person5service: '',
      person6: '',
      person6service: '',
      person7: '',
      person7service: '',
      person8: '',
      person8service: '',
      hasErrors: false,
      errors: {
        autofill: false,
        autofillMsg: 'please enter the event location',
        state: false,
        stateMsg: 'select your state',
        firstName: false,
        firstNameMsg: 'enter a valid first name',
        email: false,
        emailMsg: 'enter a valid email',
        mobile: false,
        mobileMsg: 'enter a valid mobile (04xxxxxxxx)',
        name: false,
        nameMsg: 'enter a valid first name',
        postcode: false,
        postcodeMsg: 'enter a valid postcode',
        suburb: false,
        suburbMsg: 'enter the suburb',
        eventDate: false,
        eventDateMsg: 'select event date',
        time: false,
        timeMsg: 'select time',
        event_desc: false,
        event_descMsg: 'enter an event description',
        numOfPeople: 0,
        numOfPeopleMsg: 'select number of people',
        person1: false,
        personMsg: 'select person',
        person1service: false,
        personServiceMsg: 'choose the service',
        person2: false,
        person2service: false,
        person3: false,
        person3service: false,
        person4: false,
        person4service: false,
        person5: false,
        person5service: false,
        person6: false,
        person6service: false,
        person7: false,
        person7service: false,
        person8: false,
        person8service: false
      }
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(QuoteForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);

      if (this.props.isSuburbQuote) {
        this.setState({
          isSuburbQuote: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement2;

      var datePlaceholder = this.state.errors.eventDate ? this.state.errors.eventDateMsg : "event date";

      if (this.state.eventDate) {
        datePlaceholder = Object(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(this.state.eventDate, 'LL', 'en');
      }

      var today = moment__WEBPACK_IMPORTED_MODULE_8___default()().format('YYYY-MM-DD');
      this.state.serviceMap.set("nonbridal", [{
        value: "_makeup_and_hair_up",
        display: "makeup & hair up"
      }, {
        value: "_makeup_and_hair_down",
        display: "makeup & hair down"
      }, {
        value: "_makeup_only",
        display: "makeup only"
      }, {
        value: "_hair_down",
        display: "hair down"
      }, {
        value: "_hair_up",
        display: "hair up"
      }]);
      this.state.serviceMap.set("bride", [{
        value: "_makeup_and_hair",
        display: "makeup & hair"
      }, {
        value: "_makeup_only",
        display: "makeup only"
      }, {
        value: "_hair_only",
        display: "hair only"
      }]);
      this.state.serviceMap.set("bridesmaid", [{
        value: "_makeup_and_hair",
        display: "makeup & hair"
      }, {
        value: "_makeup_only",
        display: "makeup only"
      }, {
        value: "_hair_only",
        display: "hair only"
      }]);
      this.state.serviceMap.set("mother", [{
        value: "_makeup_and_hair",
        display: "makeup & hair"
      }, {
        value: "_makeup_only",
        display: "makeup only"
      }, {
        value: "_hair_only",
        display: "hair only"
      }]);
      this.state.serviceMap.set("flowergirl", [{
        value: "_makeup_and_hair",
        display: "makeup & hair"
      }]);
      var formOptions = [];

      for (var i = 1; i <= this.state.numOfPeople; i++) {
        var for_ = "quotePerson" + i;
        var name = "person" + i;
        var id = "quotePerson" + i;
        var serviceId = "service" + id;
        var infoBoxvisible = "info-box Form__Item";
        var infoBoxhidden = "info-box info-box-hidden Form__Item";
        var subOptionvisible = "sub-option Form__Item info-box-hidden";
        var subOptionhidden = "sub-option Form__Item";
        formOptions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Form__Item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          className: !this.state.errors["".concat(name)] ? "Form__Input" : "Form__Input form-field-error",
          onChange: function onChange(e) {
            return _this2.onPersonChange(e, _this2.state.serviceMap);
          },
          onBlur: function onBlur(e) {
            return _this2.validateInput(e);
          },
          value: this.state["person" + i],
          type: "select",
          name: name,
          id: id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          id: "placeholder-select"
        }, "--select--"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "nonbridal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "bride"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "bridesmaid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "mother"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "flowergirl")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "infoBox",
          className: this.state["person".concat(i)] === 'nonbridal' ? infoBoxvisible : infoBoxhidden
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Hair down style"), " is hair straightening, blow wave, or curls with no pinning required.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Hair up style "), " is any other hairstyle.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "error-span"
        }, this.state.errors["".concat(name)] ? this.state.errors.personMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "Form__FloatingLabel",
          for: for_
        }, "person ", i)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: this.state["person".concat(i)] ? subOptionhidden : subOptionvisible
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          dangerouslySetInnerHTML: {
            __html: this.state["person".concat(i, "serviceField")]
          },
          className: !this.state.errors["".concat(name, "service")] ? "Form__Input" : "Form__Input form-field-error",
          onChange: function onChange(e) {
            return _this2.onServiceChange(e);
          },
          onBlur: function onBlur(e) {
            return _this2.validateInput(e);
          },
          value: this.state["person" + i + "service"],
          type: "select",
          name: name + "service",
          ref: name + "service",
          id: id + "service"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "error-span"
        }, this.state.errors["".concat(name, "service")] ? this.state.errors.personServiceMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "Form__FloatingLabel",
          for: id + "service"
        }, "person ", i, " service"))));
      }

      var pageMap = new Map();
      var dateClassString = "Form__Input date-input";

      if (this.state.errors.eventDate) {
        dateClassString = "Form__Input form-field-error date-input";
      }

      var page1 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_3___default.a, {
        url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvDA0hOnuN-KijkcT9IFYapOH9042QSso&libraries=places",
        onLoad: this.handleScriptLoad
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _defineProperty({
        className: !this.state.errors.autofill ? "Form__Input" : "Form__Input form-field-error",
        "aria-label": "EventAddress",
        onChange: function onChange(e) {
          return _this2.onFieldChange(e);
        },
        value: this.state.autofill,
        type: "text",
        name: "autofill",
        id: "quoteAutofill",
        placeholder: "where should the stylist come to",
        required: "true",
        ref: this.eventAddress,
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        }
      }, "required", true)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.autofill ? this.state.errors.autofillMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteAutofill"
      }, "where should the stylist come to"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: !this.state.errors.state ? "Form__Input" : "Form__Input form-field-error",
        onChange: function onChange(e) {
          return _this2.onSelectChange(e);
        },
        value: this.state.state,
        type: "select",
        name: "state",
        id: "quoteState",
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        id: "placeholder-select"
      }, "--select--"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "NSW"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "QLD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "VIC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "TAS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "WA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "NT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "SA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "ACT")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.state ? this.state.errors.stateMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteState"
      }, "state")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: !this.state.errors.postcode ? "Form__Input" : "Form__Input form-field-error",
        "aria-label": "Postcode",
        onChange: function onChange(e) {
          return _this2.onFieldChange(e);
        },
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        value: this.state.postcode,
        type: "text",
        name: "postcode",
        id: "quoteSuburb",
        placeholder: "postcode",
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.postcode ? this.state.errors.postcodeMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteState"
      }, "postcode"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: !this.state.errors.suburb ? "Form__Input" : "Form__Input form-field-error",
        "aria-label": "Suburb",
        onChange: function onChange(e) {
          return _this2.onFieldChange(e);
        },
        value: this.state.suburb,
        type: "text",
        name: "suburb",
        id: "quoteSuburb",
        placeholder: "suburb",
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.suburb ? this.state.errors.suburbMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteState"
      }, "suburb"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
        className: "form-field-error"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_6__["SingleDatePicker"], (_React$createElement2 = {
        hideKeyboardShortcutsPanel: true,
        date: this.state.date // momentPropTypes.momentObj or null
        ,
        onDateChange: function onDateChange(date) {
          return _this2.onDateChange(date);
        } // PropTypes.func.isRequired
        ,
        focused: this.state.focused // PropTypes.bool
        ,
        onFocusChange: function onFocusChange(focused) {
          return _this2.validateDate(focused);
        } // PropTypes.func.isRequired
        ,
        id: "your_unique_id" // PropTypes.string.isRequired,
        ,
        numberOfMonths: 1,
        withPortal: this.state.width < 600 ? true : false,
        displayFormat: "ddd MMM D YYYY",
        showClearDate: true,
        block: true
      }, _defineProperty(_React$createElement2, "showClearDate", false), _defineProperty(_React$createElement2, "readOnly", true), _React$createElement2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.eventDate ? this.state.errors.eventDateMsg : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "time",
        id: "quoteTime",
        "aria-label": "start time",
        className: !this.state.errors.time ? "Form__Input" : "Form__Input form-field-error",
        value: this.state.time,
        type: "select",
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        onChange: function onChange(e) {
          return _this2.onSelectChange(e);
        },
        required: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        id: "placeholder-select"
      }, "--select--"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "05:00"
      }, "5 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "05:30"
      }, "5:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "06:00"
      }, "6 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "06:30"
      }, "6:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "07:00"
      }, "7 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "07:30"
      }, "7:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "08:00"
      }, "8 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "08:30"
      }, "8:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "09:00"
      }, "9 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "09:30"
      }, "9:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "10:00"
      }, "10 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "10:30"
      }, "10:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "11:00"
      }, "11 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "11:30"
      }, "11:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "12:00"
      }, "Midday"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "12:30"
      }, "12:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "13:00"
      }, "1 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "13:30"
      }, "1:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "14:00"
      }, "2 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "14:30"
      }, "2:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "15:00"
      }, "3 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "15:30"
      }, "3:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "16:00"
      }, "4 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "16:30"
      }, "4:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "17:00"
      }, "5 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "17:30"
      }, "5:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "18:00"
      }, "6 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "18:30"
      }, "6:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "19:00"
      }, "7 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "19:30"
      }, "7:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "20:00"
      }, "8 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "20:30"
      }, "8:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "21:00"
      }, "9 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "21:30"
      }, "9:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "22:00"
      }, "10 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "22:30"
      }, "10:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "23:00"
      }, "11 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "23:30"
      }, "11:30 PM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "00:00"
      }, "Midnight"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "01:00"
      }, "1 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "01:30"
      }, "1:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "02:00"
      }, "2 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "02:30"
      }, "2:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "03:00"
      }, "3 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "03:30"
      }, "3:30 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "04:00"
      }, "4 AM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "04:30"
      }, "4:30 AM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.time ? this.state.errors.timeMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel"
      }, "time to be ready by"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item",
        onKeyPress: function onKeyPress(e) {
          return _this2.handleKeyPress(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: !this.state.errors.event_desc ? "Form__Input" : "Form__Input form-field-error",
        "aria-label": "event Description",
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        onChange: function onChange(e) {
          return _this2.onFieldChange(e);
        },
        value: this.state.event_desc,
        type: "text",
        name: "event_desc",
        id: "quoteDesc",
        placeholder: this.state.errors.event_desc ? this.state.errors.event_descMsg : "what's the event",
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.event_desc ? this.state.errors.event_descMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteDesc"
      }, "describe the event")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button-form Button Button--primary",
        style: {
          zIndex: '0'
        },
        onClick: this.nextClickHandler
      }, "Next"));
      pageMap.set(1, page1);
      var page2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: !this.state.errors.numOfPeople ? "Form__Input" : "Form__Input form-field-error",
        placeholder: "Select State",
        onChange: function onChange(e) {
          return _this2.onNumPeopleChange(e);
        },
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        value: this.state.numOfPeople,
        type: "select",
        name: "numOfPeople",
        id: "quoteNumOfPeople",
        required: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        id: "placeholder-select"
      }, "--select--"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "8")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.numOfPeople ? this.state.errors.numOfPeopleMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteNumOfPeople"
      }, "number of people")), formOptions.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, option);
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-form Button Button--secondary prev-div",
        onClick: this.prevClickHandler
      }, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button-form Button Button--primary",
        onClick: this.nextClickHandler
      }, "Next"));
      pageMap.set(2, page2);
      var page3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: !this.state.errors.firstName ? "Form__Input" : "Form__Input form-field-error",
        onChange: function onChange(e) {
          return _this2.onFieldChange(e);
        },
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        value: this.state.firstName,
        type: "text",
        name: "firstName",
        id: "quoteFirstName",
        placeholder: "first name"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.firstName ? this.state.errors.firstNameMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel"
      }, "first name"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: !this.state.errors.email ? "Form__Input" : "Form__Input form-field-error",
        onChange: function onChange(e) {
          return _this2.onFieldChange(e);
        },
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        value: this.state.email,
        type: "email",
        name: "email",
        id: "quoteEmail",
        placeholder: "email",
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.email ? this.state.errors.emailMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteEmail"
      }, "email"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Group",
        onKeyPress: function onKeyPress(e) {
          return _this2.handleEnterSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Form__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: !this.state.errors.mobile ? "Form__Input" : "Form__Input form-field-error",
        onChange: function onChange(e) {
          return _this2.onFieldChange(e);
        },
        onBlur: function onBlur(e) {
          return _this2.validateInput(e);
        },
        value: this.state.mobile,
        type: "text",
        name: "mobile",
        id: "quoteMobile",
        placeholder: "mobile number"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error-span"
      }, this.state.errors.mobile ? this.state.errors.mobileMsg : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "Form__FloatingLabel",
        for: "quoteMobile"
      }, "mobile number"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-form Button Button--secondary prev-div",
        onClick: function onClick(e) {
          return _this2.prevClickHandler(e);
        }
      }, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "button-form Button Button--primary",
        onClick: function onClick(e) {
          return _this2.submitClickHandler(e);
        }
      }, "Submit"));
      pageMap.set(3, page3);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-container"
      }, pageMap.get(this.state.page)));
    }
  }]);

  return QuoteForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (QuoteForm);

/***/ }),

/***/ "./components/ReviewBox/ReviewBox.css":
/*!********************************************!*\
  !*** ./components/ReviewBox/ReviewBox.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ReviewBox/ReviewBox.js":
/*!*******************************************!*\
  !*** ./components/ReviewBox/ReviewBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReviewBox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewBox.css */ "./components/ReviewBox/ReviewBox.css");
/* harmony import */ var _ReviewBox_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ReviewBox_css__WEBPACK_IMPORTED_MODULE_2__);




var ReviewBox = function ReviewBox() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    className: "review-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "600+"), " STYLISTS. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "10000+"), " CUSTOMERS. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "2200+"), " REVIEWS."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Testimonial__Logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg",
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    className: "review-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "4.9 out of 5"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " 235+ reviews on Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Testimonial__Logo",
    src: "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg",
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
    className: "review-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "5 out of 5"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " 100+ reviews on Google"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "Testimonial__Logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
    alt: ""
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewBox);

/***/ }),

/***/ "./components/ReviewsBox/ReviewsBox.css":
/*!**********************************************!*\
  !*** ./components/ReviewsBox/ReviewsBox.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ReviewsBox/ReviewsBox.js":
/*!*********************************************!*\
  !*** ./components/ReviewsBox/ReviewsBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewsBox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewsBox.css */ "./components/ReviewsBox/ReviewsBox.css");
/* harmony import */ var _ReviewsBox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReviewsBox_css__WEBPACK_IMPORTED_MODULE_1__);



var ReviewsBox = function ReviewsBox() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "outer-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    class: "SectionHeader__Heading Heading u-h1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "25",
    width: "23",
    class: "star rating",
    "data-rating": "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "25",
    width: "23",
    class: "star rating",
    "data-rating": "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "25",
    width: "23",
    class: "star rating",
    "data-rating": "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "25",
    width: "23",
    class: "star rating",
    "data-rating": "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "25",
    width: "23",
    class: "star rating",
    "data-rating": "1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "spr-badge-caption"
  }, "2569 reviews"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://au.flayr.io/pages/reviews-of-flayr",
    className: "Link Link--underline footer-link",
    style: {
      fontSize: '60%'
    }
  }, "read reviews"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewsBox);

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

/***/ "./layouts/LandingLayout.js":
/*!**********************************!*\
  !*** ./layouts/LandingLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar/NavBar */ "./components/NavBar/NavBar.js");
/* harmony import */ var _components_ShopifyBar_ShopifyBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShopifyBar/ShopifyBar */ "./components/ShopifyBar/ShopifyBar.js");
/* harmony import */ var _components_InstaFeed_InstaFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InstaFeed/InstaFeed */ "./components/InstaFeed/InstaFeed.js");
/* harmony import */ var _components_ReviewsBox_ReviewsBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ReviewsBox/ReviewsBox */ "./components/ReviewsBox/ReviewsBox.js");
/* harmony import */ var _components_JoinBar_JoinBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/JoinBar/JoinBar */ "./components/JoinBar/JoinBar.js");
/* harmony import */ var _components_NeedHelpBar_NeedHelpBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NeedHelpBar/NeedHelpBar */ "./components/NeedHelpBar/NeedHelpBar.js");
/* harmony import */ var _components_GetStartedBar_GetStartedBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/GetStartedBar/GetStartedBar */ "./components/GetStartedBar/GetStartedBar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");










var LandingLayout = function LandingLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShopifyBar_ShopifyBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_InstaFeed_InstaFeed__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReviewsBox_ReviewsBox__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_JoinBar_JoinBar__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NeedHelpBar_NeedHelpBar__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GetStartedBar_GetStartedBar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (LandingLayout);

/***/ }),

/***/ "./node_modules/react-dates/lib/css/_datepicker.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-dates/lib/css/_datepicker.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_LandingLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/LandingLayout */ "./layouts/LandingLayout.js");
/* harmony import */ var _components_LandingPage_LandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LandingPage/LandingPage */ "./components/LandingPage/LandingPage.js");
/* harmony import */ var _styles_shopify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/shopify.css */ "./styles/shopify.css");
/* harmony import */ var _styles_shopify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_shopify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/custom.css */ "./styles/custom.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_react_dates_override_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/react-dates-override.css */ "./styles/react-dates-override.css");
/* harmony import */ var _styles_react_dates_override_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_react_dates_override_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_QuoteForm_QuoteForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/QuoteForm/QuoteForm */ "./components/QuoteForm/QuoteForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dates/initialize */ "react-dates/initialize");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadedHandler", function () {
      _this.setState({
        isLoaded: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFormHideHandler", function () {
      _this.setState({
        formHidden: true
      });
    });

    _this.state = {};
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "//cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770",
        type: "image/png"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", null, "FLAYR | Mobile Makeup Artists & Hair Stylists")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_LandingPage_LandingPage__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/react-dates-override.css":
/*!*****************************************!*\
  !*** ./styles/react-dates-override.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/shopify.css":
/*!****************************!*\
  !*** ./styles/shopify.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dates":
/*!******************************!*\
  !*** external "react-dates" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),

/***/ "react-dates/initialize":
/*!*****************************************!*\
  !*** external "react-dates/initialize" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates/initialize");

/***/ }),

/***/ "react-day-picker/moment":
/*!******************************************!*\
  !*** external "react-day-picker/moment" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-day-picker/moment");

/***/ }),

/***/ "react-geocode":
/*!********************************!*\
  !*** external "react-geocode" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "react-load-script":
/*!************************************!*\
  !*** external "react-load-script" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-load-script");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map