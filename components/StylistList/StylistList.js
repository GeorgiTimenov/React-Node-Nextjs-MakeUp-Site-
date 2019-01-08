import React from 'react'; 
import axios from 'axios';
import Loading from '../Loading/Loading';
import ShopifyBar from '../ShopifyBar/ShopifyBar';
import NavBar from '../NavBar/NavBar';
import './StylistList.css';
import {Collapse} from 'reactstrap';import Footer from '../Footer/Footer';
import StylistProfile from '../StylistProfile/StylistProfile';
import StarRatings from 'react-star-ratings';
import Faqs from '../Faqs/Faqs';
import { defaultCoreCipherList } from 'constants';


class StylistList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
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
        }
        this.state.serviceMap.set("_makeup_only", "Makeup Only");
        this.state.serviceMap.set("_hair_only", "Hair Only");
        this.state.serviceMap.set("_makeup_and_hair", "Makeup & Hair");
        this.state.serviceMap.set("_makeup_and_hair_up", "Makeup & Hair Up");
        this.state.serviceMap.set("_makeup_and_hair_down", "Makeup & Hair Down");
        this.state.serviceMap.set("_hair_down", "Hair Down");
        this.state.serviceMap.set("_hair_up", "Hair Up");

        this.state.personMap.set("bride", "Bride");
        this.state.personMap.set("bridesmaid", "Bridesmaid");
        this.state.personMap.set("nonbridal", "Non-Bridal");
        this.state.personMap.set("mother","Mother Of Bride/Groom");
        this.state.personMap.set("flowergirl","Flower Girl");

        this.toggleQuoteDetails = this.toggleQuoteDetails.bind(this);
        this.toggleCollapseNeedHelp = this.toggleCollapseNeedHelp.bind(this);
        this.toggleCollapseFAQ = this.toggleCollapseFAQ.bind(this);
        this.componentDidMount.bind(this);
    }
    handleCloseQuote = () => {
      this.setState({
        cancelQuoteClicked: true
      })

      axios.post('https://express-server-ap-southeast-2.flayr.io/cancelquote', {

        shopify_id: this.props.id
      })
      .then((response) => {
        let newQuote = this.state.quote
        if(response.data.body === "success"){
          newQuote.status = 0;
          this.setState({
            quote: newQuote
          })
        }
       // window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    

    toggleQuoteDetails() {
        this.setState({ collapseQuoteDetails: !this.state.collapseQuoteDetails });
      }
    toggleCollapseNeedHelp() {
    this.setState({ collapseNeedHelp: !this.state.collapseNeedHelp });
    }
    toggleCollapseFAQ() {
    this.setState({ collapseFAQ: !this.state.collapseFAQ });
    }

    postNewQuote = (newQuote,callback) => {
      axios.post(`https://express-server-ap-southeast-2.flayr.io/quotes`, newQuote)
      .then(res => {
        console.log("sent");
          
          callback(null,res);

      })
      .catch(err => {
          callback(err,null);
          console.log(err)
      })
  
    }
    

    componentDidMount = () =>{

      //if direct quote is requested
       if(this.props.isStylistQuote){
        this.setState({
          isStylistQuote: true,
          stylistProviderId: this.props.provider_id

        }, ()=>{
          
          axios.get('https://express-server-ap-southeast-2.flayr.io/stylist/'+this.props.provider_id)
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
      }
      let _id = this.props.id;



      //defining requests
      function getQuote() {
        return axios.get('https://express-server-ap-southeast-2.flayr.io/quote/'+_id);
      }

      function getRequests() {
        return axios.get('https://express-server-ap-southeast-2.flayr.io/requests/'+ _id)

      }
      function getStylists() {
        return axios.get('https://express-server-ap-southeast-2.flayr.io/stylists/'+_id);
      }
     
      //do quote and stylist request at the same time
      axios.all([
        getQuote().catch(error=>{
          if(error.response){
            if(error.response.status === 404){
              this.setState({
                  badRequest: true
              })
            }
          }
        }), 
        getStylists(),
        getRequests().catch(err=>console.log(err))
      ])
        .then(axios.spread( (quote, stylists,requests) => {
          if(requests){
            this.setState({
              requests: requests.data.body
            })
          }
          //get requests for this quote
          if(quote && stylists){
            let stylistArray = [];

            if(stylists.data === 'no stylists available'){
              this.setState({
                notFound: true,
                badRequest: false
              })
            }else{

            let requestedStylists = []; 
            let responseArray = stylists.data.responseData;

           // for(let i = responseArray.length -1; i >= 0; i--)
            for(let s of responseArray){
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
              })
            }

            for(let i = stylistArray.length-1; i >=0; i--){
                //for requested stylists 
              for(let r of this.state.requests){
                if(r.provider_id === stylistArray[i].provider_id){
                  let toPush = {...stylistArray[i]};
                  toPush.stage = r.stage;
                  toPush.request_id = r.request_id;
                  toPush.cost = r.cost;
                  toPush.take = r.take;
                  toPush.payment = r.payment;
                  requestedStylists.push(toPush);
                  stylistArray.splice(i,1);
                  break;
                }
              }
            }
            this.setState({
              requestedStylists: requestedStylists,
              quote: quote.data

            })
           // stylistArray.sort(this.compare);
             stylistArray.sort((x, y) => {
                var n =   x.cost - y.cost;
                if (n !== 0) {
                    return n;
                }else{
                  if(x.numOfReviews > y.numOfReviews){
                    return -1
                  }else if (x.numOfReviews < y.numOfReviews){
                    return 1
                  }else{
                    return 0
                  }
                }
            });
            //if its a stylist direct quote and is found, redirect them to shopify
            if(this.state.isStylistQuote){
              let uniqueStylistArray = []
              stylistArray.map((val,index)=>{
                if(val.provider_id === this.state.stylistProviderId){
                  uniqueStylistArray = [stylistArray[index]];
                }
              })
              if(uniqueStylistArray.length < 1 ){
                this.setState({
                  notFound: true
                })
              } else if(uniqueStylistArray[0].unavailable_dates.includes(this.state.quote.event_date)){
                this.setState({
                  stylistBookedOut: true
                })
              }
              else{
                  window.location.href = uniqueStylistArray[0].link;
              }
            }
            else{
              this.setState({
                stylists: stylistArray,
                isLoaded: true,
                quoteInstanceId: stylists.data.instance_id,
                defaultCost: stylists.data.defaultCost
              });
            }
          }
        }
        }))
        .catch(error => {

          if(error.response){
            if(error.response.status === 400){
              this.setState({
                  badRequest: true
              })
            }
            else if(error.response.status === 404){
                this.setState({
                    notFound: true
                })
            }
            else if(error.response.status === 502){
                this.setState({
                    badRequest: true
                })
            }
            else if(error){
              this.setState({
                badRequest: true
            })
            }
          }else if(error){

          }
          
        })
    }

    isoToDate = (isoString) => {
      let date = new Date(isoString);
      date = date.toDateString();

      return date;
    }
    
     tConvert = (time) => {
      // Check correct time format and split into components
      time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    }

    compare = (a,b) => {
      if (a.cost < b.cost)
        return -1;
      if (a.cost > b.cost)
        return 1;
      return 0;
    }
    

    render(){

        let loadingText = <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">We're finding the best stylists in your area</div>
        let loading = <Loading  type="spin" color="black" height='10px' width='10px'/>
        if(this.state.isLoaded ){
            loading = <div></div>
            loadingText = <div></div>
        }
        else if(this.state.notFound && this.state.isStylistQuote){
          loading = <div></div>
            loadingText = <div>
            <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Sorry, {this.state.requestedSylistName} is not available for your quote.</div>
            <br /> <br />
       <a className="typeform-share Button Button--secondary" 
                href="https://www.flayr.io" 
                data-mode="drawer_right" 
                data-hide-headers="true" 
                data-hide-footer="true" 
                
                style={{background: 'white'}}>Get A New Quote</a> 
            </div>
        }
        else if(this.state.stylistBookedOut && this.state.isStylistQuote){
          loading = <div></div>
            loadingText = <div>
            <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Sorry, {this.state.requestedSylistName} is booked out for the date specified.</div>
            <br /> <br />
            <a className="typeform-share Button Button--secondary" 
                href="https://www.flayr.io" 
                data-mode="drawer_right" 
                data-hide-headers="true" 
                data-hide-footer="true" 
                style={{background: 'white'}}>Get A New Quote</a> 
            </div>
        }
        else if(this.state.notFound){
            loading = <div></div>
            loadingText = <div>
            <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Sorry, there are no stylists available for your quote.</div>
            <br /> <br />
       <a className="typeform-share Button Button--secondary" 
                href="https://www.flayr.io" 
                data-mode="drawer_right" 
                data-hide-headers="true" 
                data-hide-footer="true" 
                
                style={{background: 'white'}}>Get A New Quote</a> 
            </div>
        }
        
        else if(this.state.badRequest){
            loading = <div></div>
            loadingText =  <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Could not recognise quote. Please refresh the page or get a new quote.</div>
        }
        else if(this.state.quote.closed === true){
          loading = <div></div>
          loadingText =  <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">This quote has been closed.</div>
        }

        let messageBox =  <center>
        <div className="loading-text">{loadingText}</div>
        <div className="loading-bar">{loading}</div>
        </center>





        if(this.state.isLoaded){

            messageBox = <div></div>
          
        }


        let stylists = []
        let requestedStylists = []
        let offeredStylists = []
          var divStyle = {
            marginTop: 20,
            textAlign: 'center'
          };



        if(this.state.isLoaded ){
            for(let s of this.state.stylists){
                //changing link to contain the quote id

              //all stylists
                stylists.push(
                    <StylistProfile
                     link={s.link}
                     shopify_id={this.state.quote.shopify_id}
                     bigImage={s.bigImage} 
                     smallImage={s.smallImage} 
                     firstName={s.firstName}
                     reviewScore={s.reviewScore}
                     numOfReviews={s.numOfReviews}
                     cost={s.cost}
                     take={s.take}
                     payment={s.payment}
                     stage={s.stage}
                     unavailable_dates={s.unavailable_dates}
                     event_date={this.state.quote.event_date}
                     event_time={this.state.quote.event_time}
                     requests_past_day={s.requests_past_day}
                     defaultCost={this.state.defaultCost}
                     provider_id={s.provider_id}
                     />
                )
            }
            //requested stylists
            for(let s of this.state.requestedStylists){
              //offered stylists
              if(s.stage === 20 || s.stage === 30){
                offeredStylists.push(<StylistProfile
                  link={s.link}
                  shopify_id={this.state.quote.shopify_id}
                  bigImage={s.bigImage} 
                  smallImage={s.smallImage} 
                  firstName={s.firstName}
                  reviewScore={s.reviewScore}
                  numOfReviews={s.numOfReviews}
                  cost={s.cost}
                  take={s.take}
                  payment={s.payment}
                  stage={s.stage}
                  request_id={s.request_id}
                  unavailable_dates={s.unavailable_dates}
                  event_date={this.state.quote.event_date}
                  event_time={this.state.quote.event_time}
                  defaultCost={this.state.defaultCost}
                  requests_past_day={s.requests_past_day}
                  provider_id={s.provider_id}
                  />)
              }else{
                //all other ones
                requestedStylists.push(
                  <StylistProfile
                       link={s.link}
                       shopify_id={this.state.quote.shopify_id}
                       bigImage={s.bigImage} 
                       smallImage={s.smallImage} 
                       firstName={s.firstName}
                       reviewScore={s.reviewScore}
                       numOfReviews={s.numOfReviews}
                       cost={s.cost}
                       take={s.take}
                       payment={s.payment}
                       stage={s.stage}
                       unavailable_dates={s.unavailable_dates}
                       event_date={this.state.quote.event_date}
                       requests_past_day={s.requests_past_day}
                       event_time={this.state.quote.event_time}
                       defaultCost={this.state.defaultCost}
                       provider_id={s.provider_id}
                       />
                )
              }
              
            }
        }

        return(
            <div >

{/* set bar to false */}
            <ShopifyBar fromStylistList={false}/>
            <NavBar />
            {messageBox}


{this.state.cancelQuoteClicked && this.state.quote.status !== 0 &&
  <center>
       <div className="loading-text">
       <div className="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Closing Quote...</div>
       <div className="loading-bar">{loading}</div>

      </div>
  </center>
}



{this.state.quote.status === 0 &&
  
      <center>
       <div className="loading-text">
       <div className="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">This quote has been closed.</div>
       <br /> <br />
       <a className="typeform-share Button Button--secondary" 
                href="https://www.flayr.io" 
                data-mode="drawer_right" 
                data-hide-headers="true" 
                data-hide-footer="true" 
                
                style={{background: 'white'}}>Get A New Quote</a> 
       <div className="loading-bar">{loading}</div>

      </div>
      </center>
}

{this.state.isLoaded && this.state.quote.status === 1 && !this.state.cancelQuoteClicked &&
    <div>
        <div className="PageContainer">
        <div id="main">
    <div id="shopify-section-product-template-quote" className="shopify-section shopify-section--bordered">

    <section className="Product Product--large" data-section-id="product-template-quote" data-section-type="product" data-section-settings="{
  &quot;enableHistoryState&quot;: true,
  &quot;showInventoryQuantity&quot;: false,
  &quot;showThumbnails&quot;: true,
  &quot;inventoryQuantityThreshold&quot;: 0,
  &quot;enableImageZoom&quot;: true,
  &quot;showPaymentButton&quot;: false,
  &quot;useAjaxCart&quot;: true
}">

        <div className="Product__Wrapper">
        <div className="Product__InfoWrapper" style={{maxHeight: 146, marginTop: -100}}>
  <div className="Product__Info " style={{top: 75}}>
    <div className="Container">
      <div className="ProductMeta">
      <div className="Rte hidden-phone hidden-tablet">
            <h2>Quote Summary</h2><p />
            <h4>Event Details</h4>
            <p>{this.isoToDate(this.state.quote.event_date)}<br />to be ready by - {this.tConvert(this.state.quote.event_time)}{' '}
            <br />{this.state.quote.suburb} {this.state.quote.postcode}, {this.state.quote.state} 
                <a href={`https://maps.google.com?daddr=${this.state.quote.suburb} ${this.state.quote.state}`}
                className="Link Link--underline show-location-link" target="_blank" rel="noopener noreferrer">Show Location</a>
                </p>


                {this.state.quote.person_service_list.map(s => {
                                        return <div className="quoteLine"><span className="quotePerson">{this.state.personMap.get(s[0])}</span>
                                        <span className="quoteService">{this.state.serviceMap.get(s[1])}</span></div>
                                    })}
                
                
                
                <hr />
                <a className="typeform-share Button Button--secondary" 
                href="https://www.flayr.io" 
                data-mode="drawer_right" 
                data-hide-headers="true" 
                data-hide-footer="true" 
                target="_blank" 
                style={{background: 'white'}}>New Quote</a>       or  
                <a
                className="typeform-share Link Link--underline Text--subdued close-quote" 
                onClick={(e) => this.handleCloseQuote(e)}
                id="rejectQuote">close quote</a>
        </div>

      </div>
      {/* <link href="//cdn.shopify.com/s/files/1/1665/4771/t/426/assets/custom-flayr.css?113686243735784533" rel="stylesheet" type="text/css" media="all" /> */}
      <form method="post" action="/cart/add" id="product_form_1909522301039" acceptCharset="UTF-8" className="ProductForm" encType="multipart/form-data"><input type="hidden" name="form_type" defaultValue="product" /><input type="hidden" name="utf8" defaultValue="✓" /><div className="ProductForm__Variants"><input type="hidden" name="id" data-sku={1} defaultValue={17844282949743} /><input type="hidden" name="quantity" defaultValue={1} />
        </div>
        {/* RM Call to action button */}
        {/* if the quote already has offers  */}
        {/* RM call to action end */}</form>
      {/*           rm edit for quote secondary cta */}
    </div>
  </div></div>

          <div className="Product__Aside ">
                <div className="Product__Tabs">
  {/*     Offers Received */}
  <a id="offers" />
  <div id="offers" className="Container_Offers stylist-page-navbar-space">

    
    {offeredStylists.length > 0 &&
        <div className="SectionHeader SectionHeader">
         <h1 className="Heading u-h1 SectionHeader__Heading--ExtraSpaceOnTop">
         Offers Received
         </h1>
        </div>
    }
    {offeredStylists.length > 0 &&
        <div className="CollectionMain CollectionMain_Offers">
        <div className="CollectionInner">
          <div className="CollectionInner__Products">
            <div className="ProductList_Wrapper">
              <div className="Grid"  data-mobile-count={2} data-desktop-count={4}>
                      {offeredStylists.map(s => {
                                          return s
                                      })}
                <div className="Grid__Cell">
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    }
                        
    {requestedStylists.length > 0 &&
        <div className="SectionHeader SectionHeader">
         <h1 className="Heading u-h2 SectionHeader__Heading--ExtraSpaceOnTop">
         Requested Stylists
         </h1>
        </div>
    }
    {requestedStylists.length > 0 &&
        <div className="CollectionMain CollectionMain_Offers">
        <div className="CollectionInner">
          <div className="CollectionInner__Products">
            <div className="ProductList_Wrapper">
              <div className="Grid" data-mobile-count={2} data-desktop-count={4}>
                      {requestedStylists.map(s => {
                                          return s
                                      })}
                <div className="Grid__Cell">
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    }
   
    

    <div className="SectionHeader SectionHeader">

    {this.state.isStylistQuote && !this.state.badRequest && !this.state.notFound &&
      <h1 className="SectionHeader__Heading Heading u-h1">
        Your Offer From {this.state.requestedSylistName}
      </h1>
    }


    {!this.state.isStylistQuote &&
  <div>
    <h1 className="Heading u-h2 SectionHeader__Heading--ExtraSpaceOnTop">
    Stylists
    </h1>
    <span>Request up to 5 stylists to check their availability and get an appointment</span>
    <div>
      <i class="material-icons">check</i>No Obligation
      &nbsp;
      <i class="material-icons">check</i>Free Request
    </div>
  </div>

    }
    </div>


    


    <div className="CollectionMain CollectionMain_Offers">
      <div className="CollectionInner">
        <div className="CollectionInner__Products">
          <div className="ProductList_Wrapper">
            <div className="Grid" data-mobile-count={2} data-desktop-count={4}>
                    {stylists.map(s => {
                                        return s
                                    })}
              <div className="Grid__Cell">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*     Quote Details */}
  <div  className="Collapsible Collapsible--large hidden-lap-and-up">
    <button className="Collapsible__Button Heading u-h6 " onClick={this.toggleQuoteDetails} data-action="" aria-expanded="false">
      Quote Details<span className="Collapsible__Plus" ></span>
    </button>
    <Collapse isOpen={this.state.collapseQuoteDetails}>

      <div className="Collapsible__Content">
      <div className="Rte">
            <h2>Quote Summary</h2><p />
            <h4>Event Details</h4>
            <p>{this.isoToDate(this.state.quote.event_date)}<br />to be ready by - {this.tConvert(this.state.quote.event_time)}
            <br />{this.state.quote.suburb} {this.state.quote.postcode}, {this.state.quote.state}
                <a href={`https://maps.google.com?daddr=${this.state.quote.suburb} ${this.state.quote.state}`}
                className="Link Link--underline show-location-link" target="_blank" rel="noopener noreferrer">Show Location</a>
                </p>


                {this.state.quote.person_service_list.map(s => {
                                        return <div className="quoteLine"><span className="quotePerson">{this.state.personMap.get(s[0])}</span>
                                        <span className="quoteService">{this.state.serviceMap.get(s[1])}</span></div>
                                    })}
                
                
                
                <hr />
                <a className="typeform-share Button Button--secondary" href="https://www.flayr.io" data-mode="drawer_right" data-hide-headers="true" data-hide-footer="true" target="_blank" style={{background: 'white'}}>New Quote</a>       or  
                <a onClick={(e)=>this.handleCloseQuote(e)}className="typeform-share Link Link--underline Text--subdued close-quote" id="rejectQuote">close quote</a>
        </div>
      </div>
    </Collapse>
  </div>
  <div className="Collapsible Collapsible--large">
    <button className="Collapsible__Button Heading u-h6" onClick={this.toggleCollapseNeedHelp} data-action="toggle-collapsible" aria-expanded="false">
      Need Help<span className="Collapsible__Plus" />
    </button>
    <Collapse isOpen={this.state.collapseNeedHelp}>

      <div className="Collapsible__Content">
        <div className="Rte">
          <p>You can contact us using any of the links below and we'd be glad to help.</p>
          <p>Quote ID: Quote|{this.state.quoteInstanceId}</p>
          <div>
            <a href={`mailto:hey@flayr.com.au?Subject=QuoteID_${this.state.quoteInstanceId}`} className="icon-email"><strong>email: </strong>hey@flayr.com.au</a><br />
            <a href="tel:0466986744" className="icon-call"><strong>call: </strong>0466 986 744</a><br />
            <a className="txt-ios icon-text" href={`sms://+61437635297/&body=Help_quote-${this.state.quoteInstanceId}_TypeAfterThis__`}><strong>txt :</strong>0437 635 297</a>
          </div>
        </div>
      </div>
    </Collapse>
  </div>
  {/*     FAQS */}
  {/* 
Instructions
On the page title "Quote FAQs"
Switch on the Shopify FD metafields app.

For Unverified FAQs.
namespace = faqs
key = question
value = answer

For In Progress FAQs
namespace = faqs_inprogress

For Offers FAQs
namespace = faqs_offers
    
    
    
     */}
  <div className="Collapsible Collapsible--large">
    <button className="Collapsible__Button Heading u-h6" onClick={this.toggleCollapseFAQ} data-action="toggle-collapsible" aria-expanded="false">
      FAQs<span className="Collapsible__Plus" />
    </button>
    <Collapse isOpen={this.state.collapseFAQ}>
      <div className="Collapsible__Content">
        <div id="shopify-section-faqs-quote" className="shopify-section">
          <section data-section-type="faq" data-section-id="faqs-quote">
            <div className="Container">
              <div className="PageContent ">
                <div className="PageLayout">
                  <div className="PageLayout__Section">
                    <div className="Faq">
                      <Faqs/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Collapse>
  </div>
</div>

            </div>
            </div>
            </section>
</div>
</div>
</div>
    </div>
}
                <Footer />
            </div>
        )
    }
}

export default StylistList