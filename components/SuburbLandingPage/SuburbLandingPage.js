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
import JoinBarSmall from '../JoinBarSmall/JoinBarSmall';
import StylistProfile from '../StylistProfile/StylistProfile';
import '../StylistList/StylistList.css'
import axios from 'axios';



class SuburbLandingPage extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            state: this.props.state,
            suburb: this.props.suburb,
            formHidden: false,
            isLoaded:false,
            viewPricingClicked: false,
            loadedStylist: false
        }
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
        return(<div>
            

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
            {this.props.stylists.length > 0 &&
          <div className="Product__Aside " style={{marginBotton: '-100px'}}>
          <div className="Product__Tabs">


              <div id="offers" className="Container_Offers stylist-page-navbar-space">

              {(this.props.stylists.length === 5 || this.props.stylists.length === 3 ||  this.props.stylists.length === 10) &&
                <h1 class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1">top {this.props.stylists.length} makeup artists in {this.props.suburb}</h1>
          }
          {!(this.props.stylists.length === 5 || this.props.stylists.length === 3 ||  this.props.stylists.length === 10) &&
                <h1 class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1">top makeup artists in {this.props.suburb}</h1>
          }
            <div className="CollectionMain CollectionMain_Offers" >
              <div className="CollectionInner">
                <div className="CollectionInner__Products">
                  <div className="ProductList_Wrapper">
                    <div className="Grid" data-mobile-count={2} data-desktop-count={4}>
                {this.props.stylists.map(s => {
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
            <ReviewsBox style={{marginTop: '-110px'}}/>
            <NeedHelpBar />
            <JoinBarSmall />
            <Footer />
            
        </div>)
    }
}


export default SuburbLandingPage;