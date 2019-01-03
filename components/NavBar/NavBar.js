import React from 'react'; 


class NavBar extends React.Component{
    constructor(props){
        super(props);


    }
    render(){
    return(
        <div>

        <div id="shopify-section-header" class="shopify-section shopify-section--header navbar-extra-space"><header id="section-header" class="Header Header--sidebar Header--initialized " data-section-id="header" data-section-type="header" data-section-settings="{
            &quot;navigationStyle&quot;: &quot;sidebar&quot;,
            &quot;hasTransparentHeader&quot;: false,
            &quot;isSticky&quot;: true
          }" role="banner">
            <div class="Header__Wrapper">
              <div class="Header__FlexItem Header__FlexItem--fill">
             
               </div>
          
          
          
              
          <div class="Header__FlexItem"><h2 class="Header__Logo"><a href="/" class="Header__LogoLink"><span class="Heading u-h4">FLAYR</span></a></h2></div>
          
              <div class="Header__FlexItem Header__FlexItem--fill">
                
          
          
          
              </div>
            </div>
          </header>
          
          
          </div>
          </div>
    )
}
}

export default NavBar;