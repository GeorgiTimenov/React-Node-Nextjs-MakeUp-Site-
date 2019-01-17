import React, { Component } from 'react'
import Head from 'next/head'
import SuburbLandingPage from '../components/SuburbLandingPage/SuburbLandingPage';
import '../styles/shopify.css';
import '../styles/custom.css';
import 'react-dates/initialize';
import '../styles/react-dates-override.css';
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';


export default class extends Component {
   static async getInitialProps ({query}) {
    const latRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query.suburb},${query.state},Australia&key=AIzaSyC5FYbQBRtJPiygtIbE7Z5_XEySg5ujwoM`)
    const data1 = await latRes.json()
    let latLng = data1.results[0].geometry.location;
    const geocode = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&key=AIzaSyC5FYbQBRtJPiygtIbE7Z5_XEySg5ujwoM`)
    const data2 = await geocode.json()
    let postcode;
    let addressArray = data2.results[0].address_components;
    for(let a of addressArray){
      if(a.types.includes("postal_code")){
          postcode = a.short_name;
      }
    }

    let compare = (a,b) => {
      if (a.num_of_reviews < b.num_of_reviews)
        return 1;
      if (a.num_of_reviews > b.num_of_reviews)
        return -1;
      return 0;
    }

    
    const stylists = await fetch('https://express-server-ap-southeast-2.flayr.io/p/stylists/'+postcode);
    const data3 = await stylists.json();

    let stylistArray = data3.body;
    stylistArray.sort(compare);

    let matchPostcode = [];
    let lowestMakeup = 1000;
    for(let i = stylistArray.length -1; i >=0; i--){
      if(stylistArray[i].nonbridal_makeup_only < lowestMakeup && stylistArray[i].nonbridal_makeup_only > 0){
        lowestMakeup = stylistArray[i].nonbridal_makeup_only
      }
      if(postcode === stylistArray[i].postcode){
        
        matchPostcode.push(stylistArray[i]);
        stylistArray.splice(i,1);
      }
    }

    lowestMakeup = Math.ceil(lowestMakeup / 0.78);
    

    let finalStylistArray = matchPostcode.concat(stylistArray).splice(0,10);

    let finalSuburb = query.suburb;
    
    finalSuburb = finalSuburb.replace(/-/g,' ').toLowerCase();

    console.log(finalSuburb.length);
    let validSuburb = false;
    const suburb = await fetch(`https://express-server-ap-southeast-2.flayr.io/suburbs?state=${query.state.toLowerCase()}&suburb=${finalSuburb.toLowerCase()}`)
    let  suburbData;
    if(suburb.status === 200){
      validSuburb = true;
      suburbData = await suburb.json();
    }


    let meta_title;
    let meta_desc;
    let state_long;

    
    let topNumber = ''

    if(finalStylistArray.length === 10) topNumber = 10;
    if(finalStylistArray.length === 5) topNumber = 5;


    if(finalSuburb.length < 16){
      meta_title = `Top ${topNumber} Makeup Artists In ${this.toTitleCase(finalSuburb)} | From $${lowestMakeup} with Free Lashes`
    }else{
      meta_title = `Top ${topNumber} Makeup Artists In ${this.toTitleCase(finalSuburb)} In 2019 | From $${lowestMakeup}`
    }

    meta_desc = `Find & Book Top Rated Makeup Artists & Hair Stylists in ${this.toTitleCase(finalSuburb)} 
    from $${lowestMakeup} Inclusive of  Travel & Free Lashes! Bridal, Formals, Events, Races, Commercial and more. Enquire Now!`
    if(suburbData){
      /* meta_title = suburbData[0].title;
      meta_desc = suburbData[0].desc; */
      state_long = suburbData[0].state_long;
    }
   
    return {meta_desc: meta_desc, meta_title: meta_title, validSuburb: validSuburb, 
      state: query.state, country: query.country, 
      suburb: this.toTitleCase(finalSuburb), stylists: finalStylistArray, 
      postcode: postcode, state_long: state_long, suburbLevel: query.suburbLevel}
    }

   static toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  render () {

    let urlSuburb = this.props.suburb.toLowerCase();
    urlSuburb = urlSuburb.replace(/\s+/g, '-').toLowerCase();
    return (
      <div>
        <Head>
        <title>{this.props.meta_title}</title>
        <meta name="description" content={this.props.meta_desc}></meta> 
        {this.props.suburbLevel &&
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[
            {"@type":"ListItem","position":1,"name":"Australia","item":"https://flayr.io/au"},
            {"@type":"ListItem","position":2,"name":"${this.props.state_long}","item":"https://flayr.io/au/${this.props.state.toLowerCase()}"},
            {"@type":"ListItem","position":3,"name":"${this.toTitleCase(this.props.suburb.toLowerCase())}","item":"https://flayr.io/au/${this.props.state.toLowerCase()}/${urlSuburb}"},
          `}}>
            </script>
        } 
        {!this.props.suburbLevel &&
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[
            {"@type":"ListItem","position":1,"name":"Australia","item":"https://flayr.io/au"},
            {"@type":"ListItem","position":2,"name":"${this.props.state_long}","item":"https://flayr.io/au/${this.props.state.toLowerCase()}"},
            {"@type":"ListItem","position":3,"name":"${this.toTitleCase(this.props.suburb.toLowerCase())}","item":"https://flayr.io/au/${this.props.state.toLowerCase()}/${urlSuburb}"},
            {"@type":"ListItem","position":4,"name":"Makeup Artists","item":"https://flayr.io/au/${this.props.state.toLowerCase()}/${urlSuburb}/makeupartists"}]}`}}>
            </script>
        }
        
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
            `
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "name": "makeup artists",
              "provider": {
                "@type": "ProfessionalService",
                "name": "FLAYR",
                "image": "https://cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770",
                "address": "Glebe",
                "priceRange": "$-$$"
              },
              "areaServed": {
                "@type": "State",
                "name": "${this.props.state.toUpperCase()}, Australia"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "bestRating":  "5",
                "worstRating": "0",
                "reviewCount": 505,
                "ratingCount": 505
              }
            }
            
          `}}>
            </script>
        


        </Head>

        {this.props.validSuburb &&
          <SuburbLandingPage suburbLevel={this.props.suburbLevel} urlSuburb={urlSuburb} suburb={this.props.suburb} state={this.props.state} postcode={this.props.postcode} stylists={this.props.stylists}/>
        }
        {!this.props.validSuburb &&
          <ErrorPage statusCode={404}/>

        }
      </div>
    )
  }
}