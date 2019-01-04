import React, { Component } from 'react'
import Head from 'next/head'
import SuburbLandingPage from '../components/SuburbLandingPage/SuburbLandingPage';
import '../styles/shopify.css';
import '../styles/custom.css';
import 'react-dates/initialize';
import '../styles/react-dates-override.css';
import fetch from 'isomorphic-unfetch';


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
    console.log(stylistArray[0].num_of_reviews)

    let finalSuburb = query.suburb;
    if(finalSuburb.split('-')){
      finalSuburb = finalSuburb.replace('-', ' ');
    }

    return { state: query.state, country: query.country, suburb: finalSuburb, stylists: stylistArray.splice(0,10)}
  }

  render () {
    return (
      <div>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770" type="image/png" />
        <link rel="stylesheet" href="../styles/custom.css" />
        <title>{this.props.suburb} | Mobile Makeup Artists & Hair Stylists</title>
        </Head>
        <SuburbLandingPage suburb={this.props.suburb} state={this.props.state} stylists={this.props.stylists}/>
      </div>
    )
  }
}