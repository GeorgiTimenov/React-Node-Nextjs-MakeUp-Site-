import React from 'react'; 

const ReviewsBox = (props) => {
    return(
        <div className="outer-container" style={props.style}>

           <div className="inner-container">
           <h2 class="SectionHeader__Heading Heading u-h1">
      
        
           <svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/></svg>
           <svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/></svg>
           <svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/></svg>
           <svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/></svg>
           <svg height="25" width="23" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/></svg>

           <span class="spr-badge-caption">3000+ reviews</span>
            <a href="https://au.flayr.io/pages/reviews-of-flayr" className="Link Link--underline footer-link" style={{fontSize: '60%'}}>read reviews</a>
            </h2>
            </div>

        </div>
    )
}

export default ReviewsBox;