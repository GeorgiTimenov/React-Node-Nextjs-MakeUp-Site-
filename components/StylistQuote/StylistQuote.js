import React from 'react';
import NavBar from '../NavBar/NavBar';
import QuoteForm from '../QuoteForm/QuoteForm';
import ShopifyBar from '../ShopifyBar/ShopifyBar';
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './StylistQuote.css';
import StarRatings from 'react-star-ratings';
class StylistQuote extends React.Component {



    constructor(props){
        super(props);
        this.state = {
            notFound: false,
            stylistName: '',
            imageurl: '',
            isLoaded: false,
            cost: '',
            lastName: '',
            smallImage: '',
            reviewScore: '',
            numOfReviews: '',
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

    componentDidMount() {
        axios.get('https://express-server-ap-southeast-2.flayr.io/stylist/'+this.props.match.params.provider_id)
        .then((response) => {

            if(!response.data.body.isActive){
                console.log("inactive");
                this.setState({
                    foundButInactive: true,
                    stylistName: response.data.body.first_name
                })
            }else{
                this.setState({
                    isLoaded: true,
                    stylistName: response.data.body.first_name,
                    imageurl: response.data.body.cover_image,
                    cost: response.data.body.cost,
                    lastName: response.data.body.last_name,
                    smallImage: response.data.body.profile_image,
                    reviewScore: response.data.body.review_score,
                    numOfReviews: response.data.body.num_of_reviews
                })
            }
           
          })
          .catch((error) => {
            if(error.response.status === 404){
                this.setState({
                    notFound: true
                })
            }
          })
          .then( ()  =>{
          });
    }

    render(){
        let loadingText = <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Generating your quote</div>
        let loading = <Loading  type="spin" color="black" height='10px' width='10px'/>
        let messageBox =  <center>
        <div className="loading-text">{loadingText}</div>
        <div className="loading-bar">{loading}</div>
        </center>

        let notFoundText = <center>
        <div className="loading-text">
            <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Sorry, the stylist provided could not be found.</div>
            <br /> <br />
            <a className="typeform-share Button Button--secondary" 
                href="https://www.flayr.io" 
                data-mode="drawer_right" 
                data-hide-headers="true" 
                data-hide-footer="true"
                
                style={{background: 'white'}}>Get A New Quote</a> 
            </div></center>

        let foundButInactiveText = <center>
        <div className="loading-text">
            <div class="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h2">Sorry, {this.state.stylistName} is not available for a direct quote.</div>
            <br /> <br />
            <a className="typeform-share Button Button--secondary" 
                href="https://www.flayr.io" 
                data-mode="drawer_right" 
                data-hide-headers="true" 
                data-hide-footer="true"
                
                style={{background: 'white'}}>Check for other stylists</a> 
            </div></center>
       
        document.body.style = 'background-color: #efefef;';

        return(
        <div>
            <ShopifyBar />
            <NavBar />

            {this.state.formHidden &&
                    messageBox
            }

            {this.state.notFound &&
               notFoundText
            }
            
            {this.state.foundButInactive &&
                foundButInactiveText
            }

            {this.state.isLoaded && !this.state.formHidden &&
           <div>
            <div className="form-background">
                <div className="form-box">
                    <div className="profile-box">
                        <div className="profile-image-box">
                            <img src={`${this.state.smallImage}`} className="profile-pic"></img>
                        </div>
                        <div className="reviews-data-box">
                                <span className="ProductItem__Title Heading">{this.state.stylistName}</span>
                                    <span className="spr-starrating spr-badge-starrating">
                                    <StarRatings
                                                    rating={this.state.reviewScore}
                                                    starRatedColor="black"
                                                    numberOfStars={5}
                                                    name='rating'
                                                    starDimension="12px"
                                                    starSpacing="2px"
                                                />
                                </span>
                                    <span className="spr-badge-caption">{this.state.numOfReviews} reviews</span>



                        </div>
                    </div>

                <h3 className="SectionHeader__Heading SectionHeader__Heading--emphasize Heading u-h1">Get a quote from {this.state.stylistName}</h3>

                    <QuoteForm submitRoute={`/stylist-quote/${this.props.match.params.provider_id}/`} loadedQuote={this.onLoadedHandler} hideForm={this.onFormHideHandler}/>
                </div>
            </div>
                 </div>
                }
        </div>
        )
    }
   
}


export default StylistQuote;