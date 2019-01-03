import React from 'react';
import './InstaFeed.css';
import Script from 'react-load-script';
import $ from 'jquery'; 


class InstaFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loadedScript: false
        }
    }
   
    handleScriptLoad = () => {
        this.setState({loadedScript: true})
    }

  
    scroll = (direction) => {
        let far = $( '.image-container' ).width()/4*direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate( { scrollLeft: pos }, 1000)
    }
    render(){
        return (


            <div className="widget">
            <Script url="https://apps.elfsight.com/p/platform.js" onLoad={(e)=>this.handleScriptLoad(e)}/>

                  <section className="SectionHeader SectionHeader--center">
    <div className="Container">
      <h3 className="Section__SubHeading Heading u-h6">@withflayr</h3>
      <h2 className="Section__Heading Heading u-h1">work done by amazing stylists with flayr</h2>
    </div>
  </section>  
 
           {
            <div class="elfsight-app-f3678d11-c61e-4522-b1e5-c22310a75211"></div>

           }

              </div>
          )
          
    }
    
}
  

export default InstaFeed;




