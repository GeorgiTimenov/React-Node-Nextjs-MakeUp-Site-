import React from 'react'; 
import NavBar from '../NavBar/NavBar';
import SuburbQuoteForm from '../SuburbQuoteForm/SuburbQuoteForm';
import ShopifyBar from '../ShopifyBar/ShopifyBar';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import ReviewBox from '../ReviewBox/ReviewBox';
import ReviewsBox from '../ReviewsBox/ReviewsBox';
import InstaFeed from '../InstaFeed/InstaFeed';
import NeedHelpBar from '../NeedHelpBar/NeedHelpBar';
import GetStartedBar from '../GetStartedBar/GetStartedBar';
import JoinBar from '../JoinBar/JoinBar';
import 'react-dates/lib/css/_datepicker.css';

class LandingPage extends React.Component{

    constructor(props){
        super(props);
            this.state = {
                formHidden: false,
                isLoaded:false
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

    render(){
        let loadingText = <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Generating your quote</div>
        let loading = <Loading  type="spin" color="black" height='10px' width='10px'/>
        let messageBox =  <center>
        <div className="loading-text">{loadingText}</div>
        <div className="loading-bar">{loading}</div>
        </center>


        if(this.state.isLoaded){
            messageBox = <div></div>
        }


    return(
        <div>
            

            <ShopifyBar />
            <NavBar />

            {this.state.formHidden &&
                    messageBox
            }

            {!this.state.formHidden &&
                 <div className="form-background">
                 <div className="form-box">
                 <h1 class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h4">Book Pro Makeup Artists &amp; hair stylists</h1>
 
                     <SuburbQuoteForm submitRoute="/quote/" loadedQuote={this.onLoadedHandler} hideForm={this.onFormHideHandler}/>
                 </div>
                </div>
            }

            <InstaFeed />
            <ReviewsBox />
            <JoinBar />
            <NeedHelpBar />
            <GetStartedBar />
            <Footer />
            
        </div>
    )
    }
}

export default LandingPage;