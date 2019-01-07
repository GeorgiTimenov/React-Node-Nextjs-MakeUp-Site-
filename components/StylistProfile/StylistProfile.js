import React from 'react'; 
import StarRatings from 'react-star-ratings';
import queryString from 'query-string';
import axios from 'axios';

class StylistProfile extends React.Component {

  constructor(props){
    super();
    this.state = {
      requests_past_day: 0
    }
  }

  componentDidMount(){
    axios.get('https://express-server-ap-southeast-2.flayr.io/stylist-requests/'+this.props.provider_id)
    .then(num=>{
      console.log(num.data.num_of_requests);
      this.setState({
        requests_past_day:  num.data.num_of_requests
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render(){

// Edit this to feed in actual default pricing
let defaultPricing = 170;

let CustomTag = `a`

if(!this.props.link) {
    CustomTag = `div`
}


let numOfReviews = this.props.numOfReviews;
let reviewString = numOfReviews + " reviews";
let link = this.props.link;
let buttonStyle = {};
if(numOfReviews === 0){
      reviewString = "new"
}
let errorStyle; //when a stylist is booked out

//checking for unavailable time;
let isUnavailableForTime

if(this.props.unavailable_dates){
  for(let d of this.props.unavailable_dates){
    let time;
      if(d.length >10){
        time = d.split("T")[1];
        let unavail_date = d.split("T")[0];
        if(unavail_date === this.props.event_date && this.props.event_time <= time ){
          isUnavailableForTime = true;
        }
      }
  }
}
let offerCardClass = `Grid__Cell Grid__Cell--white offer-item`;

if(!this.props.forLandingPage){
//default, if this.props.stage === 10
      if(this.props.stage === 10){
      link = link.replace("view=autoquote", "view=appointmentrequest_submitted");
      }


      //if this.props.stage === 0
      if(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date) || isUnavailableForTime){
      CustomTag = `div`
      errorStyle = {color: '#cc0000', fontSize: 17};
      link = "";
      offerCardClass = `Grid__Cell Grid__Cell--white offer-item Card-bookedout`
      }

      if(this.props.stage === 20 || this.props.stage === 30){
      CustomTag = `a`
      link = `https://au.flayr.io/products/${this.props.request_id}`
      }
}else{

}


let reqDriver;
if(this.state.requests_past_day !== 0){

  if(this.state.requests_past_day > 4){
    reqDriver = this.state.requests_past_day + " times";
  }else{
    reqDriver = "Today!"
  }
 
}



return(
<div className={offerCardClass} style={{marginRight: -100}}>
      <div className="ProductItem">
            <div className="ProductItem__Wrapper ">
                  <div className="Grid" data-mobile-count={2} data-desktop-count={4}>
                  <CustomTag  href={link} class="ProductItem__ImageWrapper ">
                        <div class="Grid__Cell Grid__Cell--12 1/3--phone 1/3--tablet-and-up offer-item">
                        <div class="offer-feature-image offer-feature-image-nomargin">

                              <img class="big-profile-pic ProductItem__Image Image--fadeIn Image--lazyLoaded" src={`${this.props.bigImage}`} className="big-profile-pic ProductItem__Image Image--fadeIn Image--lazyLoaded" alt="#bridal"></img>
                              <span class="Image__Loader"></span>
                      {!this.props.forLandingPage &&
                              <div class="ProductItem__Info ProductItem__Info--center offer-image-stylist-overlay">
                                    <span>View Photos</span>
                              </div>
                      }
                        </div>
                        </div>

                        <div class="Grid__Cell 2/3--phone 2/3--tablet-and-up offer-item">
                              <div class="Grid Grid__Cell--TopPad5">
                              {/* <span class="Viewprofile__arrow"><i class="material-icons">chevron_right</i></span> */}
                                    <div class="Grid__Cell 1/4--phone hidden-tablet-and-up hidden-lap-and-up offer-stylist-photo">
                                          <img src={`${this.props.smallImage}`} className="small-profile-pic"></img>
                                    </div>
                                    <div class="Grid__Cell hidden-phone 1/4--tablet-and-up  offer-stylist-photo">
                                          <img src={`${this.props.smallImage}`} className="small-profile-pic-fixedheight"></img>
                                    </div>
                                    <div class="Grid__Cell 3/4--phone 3/4--tablet-and-up offer-stylist-details">
                                          <span class="ProductItem__Title Heading">{this.props.firstName}</span>
                                          <small>
                                                <span class="spr-badge" id="spr_badge_10728817548" data-rating="4.75">
                                                <span class="spr-starrating spr-badge-starrating">
                                                <StarRatings
                                                      rating={this.props.reviewScore}
                                                      starRatedColor="black"
                                                      numberOfStars={5}
                                                      name='rating'
                                                      starDimension="12px"
                                                      starSpacing="2px"
                                                />
                                                </span>
                                                <span class="spr-badge-caption">{reviewString}</span>
                                          </span>
                                          </small>


{this.props.forLandingPage &&
  <div style={{width: '80%'}}>
  <div class="ProductMeta__Description Rte Offer__PricingCard">
  <div className="ProductItem__PriceList  Heading" style={{overflow: 'hidden', height: '5.5em', position: 'relative'}}>
  <span style={{fontSize: '93%'}} className="ProductItem__Price Price Text--subdued subdued--heading" data-money-convertible>
{this.props.profile_blurb}
  </span>
  <div className="profile-blurb-text" />
  </div>
  <button style={{marginTop: 20}} className="button-form Button Button--secondary Button--small Button--compressed"  onClick={this.props.onViewPricingClick}>View Pricing</button>

</div>
</div>
}


{!this.props.forLandingPage &&
                                          <div class="hidden-phone">
                                                <div class="ProductMeta__Description Rte Offer__PricingCard">
                                                      <span class="ProductMeta__Title Heading u-h3">Total Of ${this.props.cost}</span>
                                                      <div>
                                                      <p>Book with a deposit of ${this.props.take}
                                                            <br/>${this.props.payment} payable on the day<br/>
{/*<span style={{fontSize: '1em'}} class="Alert__Green"><i class="material-icons">check_circle</i>&nbsp;Accepts X% of Requests<br/></span> */}
                                                    { reqDriver && !(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date) || isUnavailableForTime) &&
                                                      <span style={{fontSize: '1em'}}class="Alert__Stats"><i class="material-icons">whatshot</i>&nbsp;<strong>In Demand</strong><span class="Alert__Stats--cycling"> Requested {reqDriver}</span></span>
                                                    }
                                                      </p>
                                                      </div>
                                                    

                                                </div>
                                                {(!(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date))&& (this.props.cost <= this.props.defaultCost))&&

                                                  <span style={{color: "#008489"}}><i class="material-icons">
                                            local_offer
                                            </i> Great Value</span>
                                                }
                                                {!(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date) || isUnavailableForTime)&&

                                                <span  class="ViewProfile--rightbottom Button Button--small Button--primary Button--compressed">View Profile</span>
                                                }
                                                  {(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date) || isUnavailableForTime)&&

                                                <div class="ProductMeta__Title Heading Alert__Booked">Booked Out</div>
                                                  }
                                                

                                          </div>
}
                                    
                                    </div>
                                    {/* pad left */}
{!this.props.forLandingPage &&
                                     
                                    <div class="hidden-tablet-and-up hidden-lap-and-up">
                                          <div class="ProductMeta__Description Rte Offer__PricingCard ">
                                                <span class="ProductMeta__Title Heading u-h3">Total Of ${this.props.cost}</span>
                                                <div>
                                                      <p>Book with a deposit of ${this.props.take}
                                                            <br/>${this.props.payment} payable on the day<br/>
                               {/*                          <span class="Alert__Green"><i class="material-icons">check_circle</i>&nbsp;Accepts X% of Requests<br/></span>*/}
                                                          {reqDriver && !(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date))&&
                                                          <span class="Alert__Stats"><i class="material-icons">whatshot</i>&nbsp;<strong>In Demand</strong><br/><span class="Alert__Stats--cycling"> Requested {reqDriver}</span></span>
                                                          }
                                                      </p>
                                                </div>

                                                <div class="Viewprofile__arrow"><i class="material-icons">
                                          chevron_right
                                          </i></div>

                                                {(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date))&&

                                               <div class="ProductMeta__Title Heading Alert__Booked">Booked Out</div>
                                                 }

                                          </div>
                                          {/* if a stylist is not booked out or declines */}
                                          {(!(this.props.stage < 10 || this.props.unavailable_dates.includes(this.props.event_date))&& (this.props.cost <= this.props.defaultCost))&&
                                          // <span class="Viewprofile__arrow"><i class="material-icons">
                                          // chevron_right
                                          // </i></span>

                                            <span class="Label__Great-Value--bottomright"><i class="material-icons">
                                            local_offer
                                            </i> Great Value</span>
                                         
                                          // <span>Great Value</span>
                                          
                                          }
                                          
                                    </div>
}                    
                              </div>
                        </div>


                  </CustomTag>
                  </div>
      </div>

      </div>
</div>
)
  }
}

export default StylistProfile;