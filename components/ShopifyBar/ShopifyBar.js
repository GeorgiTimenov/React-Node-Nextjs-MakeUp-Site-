import React from 'react';

 
const ShopifyBar = (props) => {

  let defaultBar =   <div style={{background: '#000000', color: '#ffffff'}} id="shopify-section-announcement" /*class="shopify-section hidden-phone" */><section id="section-announcement" data-section-id="announcement" data-section-type="announcement-bar">
  <div class="AnnouncementBar">
    <div class="AnnouncementBar__Wrapper">
      <p class="AnnouncementBar__Content Heading"><a>♥ Free Lashes on all makeup bookings</a></p>
    </div>
  </div>
</section>
</div>

  if (props.fromStylistList){
    defaultBar =   <div id="shopify-section-announcement" /*class="shopify-section hidden-phone" */><section id="section-announcement" data-section-id="announcement" data-section-type="announcement-bar">
    <div class="AnnouncementBar" id="quotenotification-red">
      <div class="AnnouncementBar__Wrapper">
        <p class="AnnouncementBar__Content Heading"><a>This is not a reservation, prices are likely to rise.<strong> Lock In Your Price Today!</strong></a></p>
      </div>
    </div>
  </section>
 </div>
  }


    return(
defaultBar
    )

}

export default ShopifyBar;