import React from 'react';
import Slider from "react-slick";

const ReviewBox = () =>{
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      };

    return(
      <div className="slider-container"> 
        <Slider {...settings}>
        <div >
            <center className="review-container">
              <p ><strong>600+</strong> STYLISTS. <strong>10000+</strong> CUSTOMERS. <strong>2200+</strong> REVIEWS.</p>
              <img className="Testimonial__Logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg" alt=""/>
              </center>
        </div>
        <div>
        <center className="review-container">
              <p><strong>4.9 out of 5</strong> <br /> 235+ reviews on Facebook</p>
              <img className="Testimonial__Logo" src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.svg" alt=""/>
              </center>
        </div>
        <div>
        <center className="review-container">
        <p><strong>5 out of 5</strong> <br /> 100+ reviews on Google</p>
              <img className="Testimonial__Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt=""/>
              </center>
        </div>
        
      </Slider>
      </div>

      
    )
}

export default ReviewBox;