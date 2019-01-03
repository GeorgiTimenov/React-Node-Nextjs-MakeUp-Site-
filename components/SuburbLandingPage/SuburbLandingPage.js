import React from 'react'; 
import NavBar from '../NavBar/NavBar';
import QuoteForm from '../QuoteForm/QuoteForm';
import ShopifyBar from '../ShopifyBar/ShopifyBar';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import ReviewBox from '../ReviewBox/ReviewBox';
import ReviewsBox from '../ReviewsBox/ReviewsBox';
import InstaFeed from '../InstaFeed/InstaFeed';
import NeedHelpBar from '../NeedHelpBar/NeedHelpBar';
import GetStartedBar from '../GetStartedBar/GetStartedBar';
import JoinBar from '../JoinBar/JoinBar';
import { Helmet } from 'react-helmet';
import StylistProfile from '../StylistProfile/StylistProfile';
import axios from 'axios';




class SuburbLandingPage extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            state: this.props.match.params.state,
            suburb: this.props.match.params.suburb,
            formHidden: false,
            isLoaded:false,
            stylists: [],
            viewPricingClicked: false,
            loadedStylist: false
        }
    }

    componentDidMount = () => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.suburb},${this.state.state},Australia&key=AIzaSyC5FYbQBRtJPiygtIbE7Z5_XEySg5ujwoM`)
      .then((geocode)=>{
        console.log(geocode);
          let latLng = geocode.data.results[0].geometry.location;
          return latLng;
        }
      ).then((latLng)=>{
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&key=AIzaSyC5FYbQBRtJPiygtIbE7Z5_XEySg5ujwoM`)
        .then((geocode)=>{
          let postcode;
          let addressArray = geocode.data.results[0].address_components;
          for(let a of addressArray){
            if(a.types.includes("postal_code")){
                postcode = a.short_name;
            }
          }
          return postcode;
        })
        .then((postcode)=>{
          axios.get('https://express-server-ap-southeast-2.flayr.io/p/stylists/'+postcode)
          .then(response=>{

            let stylistArray = response.data.body;
            stylistArray.sort(this.compare);

            this.setState({
              loadedStylist: true,
              stylists: stylistArray
            })
          })
        })
      })
     
    }


    onFormHideHandler = () => {
        this.setState({
            formHidden: true
        })
    }

    onLoadedHandler = () => {
        this.setState({
            isLoaded: true
        })

    }


   capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  compare = (a,b) => {
    if (a.num_of_reviews < b.num_of_reviews)
      return 1;
    if (a.num_of_reviews > b.num_of_reviews)
      return -1;
    return 0;
  }
  viewPricingHanlder = () => {
    this.setState({
      viewPricingClicked: true
    })

    window.scrollTo({
    top: 0,
    left: 100,
    behavior: 'smooth'
  })}


    render(){
        let loadingText = <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Generating your quote</div>
        let loading = <Loading  type="spin" color="black" height='10px' width='10px'/>
        let messageBox =  <center>
        <div className="loading-text">{loadingText}</div>
        <div className="loading-bar">{loading}</div>
        </center>

        let stylistLoadingText = <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Loading Stylists</div>
        let stylistLoading = <Loading  type="spin" color="black" height='10px' width='10px'/>
        let stylistMessageBox =  <center>
        <div className="loading-text">{stylistLoadingText}</div>
        <div className="loading-bar">{stylistLoading}</div>
        </center>

        if(this.state.isLoaded){
            messageBox = <div></div>
        }

        if(this.state.loadedStylists){
          stylistMessageBox = <div></div>
        }

    document.body.style = 'background-color: #efefef;';

       let metaContent = `FLAYR connects you with Top Rated Makeup Artists &amp; 
        Hair Stylists in ${this.capitalizeFirstLetter(this.state.suburb)} with over 2000+ reviews. Packages From $60 Including Travel &amp; 
        Free Lashes. Get An Instant Quote Now for Makeup Artists in ${this.capitalizeFirstLetter(this.state.suburb)} for anything from bridal to formals!`

        return(<div>
            <Helmet>
              <title>Mobile Hair And Makeup In {this.capitalizeFirstLetter(this.state.suburb)} </title>
             
            </Helmet>

            <ShopifyBar />
            <NavBar />

            {this.state.formHidden &&
                    messageBox
            }

            {!this.state.formHidden &&
                 <div className="form-background">
                 <div className="form-box">
                 <h3 class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1">Book Pro Makeup Artists &amp; hair stylists in {this.state.suburb}</h3>
 
                  {this.state.viewPricingClicked &&
                     <QuoteForm 
                        isSuburbQuote={true} 
                        suburb={this.state.suburb} 
                        state={this.state.state} 
                        submitRoute="/quote/"
                        loadedQuote={this.onLoadedHandler} 
                        hideForm={this.onFormHideHandler}
                    />
                  }
                  {!this.state.viewPricingClicked &&

                 
                  <button style={{marginTop: 10}} className="button-form Button Button--primary"  onClick={()=>{this.setState({viewPricingClicked: true})}}>View Pricing</button>
                  }
                 </div>
                </div>
            }


                
                
                 {!this.state.loadedStylist &&
                  stylistMessageBox
                }
                          
            {this.state.stylists.length > 0 &&
          <div className="Product__Aside " >
          <div className="Product__Tabs">
              <div id="offers" className="Container_Offers stylist-page-navbar-space">

            <div className="CollectionMain CollectionMain_Offers">
              <div className="CollectionInner">
                <div className="CollectionInner__Products">
                  <div className="ProductList_Wrapper">
                    <div className="Grid" data-mobile-count={2} data-desktop-count={4}>
                {this.state.stylists.map(s => {
                                    return <div  onClick={this.viewPricingHandler} style={{cursor: 'pointer'}}>
                                    <StylistProfile
                                    bigImage={s.cover_image} 
                                    smallImage={s.profile_image} 
                                    firstName={s.first_name}
                                    reviewScore={s.review_score}
                                    numOfReviews={s.num_of_reviews}
                                    forLandingPage={true}
                                    profile_blurb={s.profile_blurb}
                                    onViewPricingClick={this.viewPricingHanlder}
                                    />
                                    </div>
                                })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
          }

           <InstaFeed />
            <ReviewBox />
            <ReviewsBox />
            <JoinBar />
            <NeedHelpBar />
            <GetStartedBar />
            <Footer />
            
        </div>)
    }
}


export default SuburbLandingPage;