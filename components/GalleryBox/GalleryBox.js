import React, { Component } from "react";
import Slider from "react-slick";

class GalleryBox extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
              <p>LINK</p>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div>
        <Slider {...settings}>
       
          <div>
            <img src={"//cdn.shopify.com/s/files/1/1665/4771/files/makeup_and_hair_for_races_1000x.jpg"} />
            <div>MAKEUP ARTISTS & HAIR STYLISTS FOR 
THE RACES
Get the perfect hair & makeup look to suit your race day outfit</div>
          </div>
          <div>
            <img src="//cdn.shopify.com/s/files/1/1665/4771/files/bridal_makeup_and_hair_9c707c0a-374a-4e65-ab43-819437eb2f89_1000x.JPG" />
          </div>
          <div>
            <img src="//cdn.shopify.com/s/files/1/1665/4771/files/makeup_and_hair_for_races_1000x.jpg" />
          </div>
          <div>
            <img src="//cdn.shopify.com/s/files/1/1665/4771/files/bridal_makeup_and_hair_9c707c0a-374a-4e65-ab43-819437eb2f89_1000x.JPG" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default GalleryBox;