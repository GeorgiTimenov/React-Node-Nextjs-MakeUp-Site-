import React, { Component } from 'react'
import StylistList from '../components/StylistList/StylistList';
import Head from 'next/head'
import '../styles/shopify.css';
import '../styles/custom.css';

export default class extends Component {
  static getInitialProps ({ query}) {
    return { provider_id: query.provider_id, quote_id: query.quote_id }
  }
  render () {
    return (
      <div>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770" type="image/png" />
        <title>FLAYR | Mobile Makeup Artists & Hair Stylists</title>
        </Head>
         <StylistList isStylistQuote={true} provider_id={this.props.provider_id} id={this.props.quote_id}/>
      </div>
    )
    
  }
}