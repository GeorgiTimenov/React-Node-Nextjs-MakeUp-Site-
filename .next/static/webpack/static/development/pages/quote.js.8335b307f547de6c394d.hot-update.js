webpackHotUpdate("static/development/pages/quote.js",{

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
        shopify_id: _this.props.match.params.id
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
      var _id = _this.props.match.params.id; //defining requests

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

      document.body.style = 'background-color: #efefef;';
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

/***/ "./node_modules/history/es/DOMUtils.js":
false,

/***/ "./node_modules/history/es/LocationUtils.js":
false,

/***/ "./node_modules/history/es/PathUtils.js":
false,

/***/ "./node_modules/history/es/createBrowserHistory.js":
false,

/***/ "./node_modules/history/es/createHashHistory.js":
false,

/***/ "./node_modules/history/es/createMemoryHistory.js":
false,

/***/ "./node_modules/history/es/createTransitionManager.js":
false,

/***/ "./node_modules/history/es/index.js":
false,

/***/ "./node_modules/history/node_modules/warning/browser.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/next/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/react-router-dom/es/BrowserRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/HashRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Link.js":
false,

/***/ "./node_modules/react-router-dom/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/NavLink.js":
false,

/***/ "./node_modules/react-router-dom/es/Prompt.js":
false,

/***/ "./node_modules/react-router-dom/es/Redirect.js":
false,

/***/ "./node_modules/react-router-dom/es/Route.js":
false,

/***/ "./node_modules/react-router-dom/es/Router.js":
false,

/***/ "./node_modules/react-router-dom/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Switch.js":
false,

/***/ "./node_modules/react-router-dom/es/generatePath.js":
false,

/***/ "./node_modules/react-router-dom/es/index.js":
false,

/***/ "./node_modules/react-router-dom/es/matchPath.js":
false,

/***/ "./node_modules/react-router-dom/es/withRouter.js":
false,

/***/ "./node_modules/react-router/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router/es/Prompt.js":
false,

/***/ "./node_modules/react-router/es/Redirect.js":
false,

/***/ "./node_modules/react-router/es/Route.js":
false,

/***/ "./node_modules/react-router/es/Router.js":
false,

/***/ "./node_modules/react-router/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router/es/Switch.js":
false,

/***/ "./node_modules/react-router/es/generatePath.js":
false,

/***/ "./node_modules/react-router/es/matchPath.js":
false,

/***/ "./node_modules/react-router/es/withRouter.js":
false,

/***/ "./node_modules/resolve-pathname/index.js":
false,

/***/ "./node_modules/value-equal/index.js":
false,

/***/ "./node_modules/warning/warning.js":
false

})
//# sourceMappingURL=quote.js.8335b307f547de6c394d.hot-update.js.map