import React, { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';
import Index from '../index';

export default class extends Component {
  static async getInitialProps ({ query}) {
    const state = await fetch(`https://express-server-ap-southeast-2.flayr.io/states?state=${query.state.toLowerCase()}`)

    let data1;
    if(state.status === 200){
      data1 = await state.json();
    }else{
      data1 = null
    }

    let finalState 
    let state_long;
    if(data1 === null){
      finalState = null;
      state_long = null;
    }else{
      finalState = data1[0].state;
      state_long = data1[0].state_long;
    }
    
    return {state: finalState, country: query.country, state_long: state_long}
  }
  render () {
    return (
      <div>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770" type="image/png" />
        <title>FLAYR | Mobile Makeup Artists & Hair Stylists</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[
            {"@type":"ListItem","position":1,"name":"Australia","item":"https://flayr.io/au"},
            {"@type":"ListItem","position":2,"name":"${this.props.state_long}","item":"https://flayr.io/au/${this.props.state.toLowerCase()}"},
          `}}>
            </script>
        </Head>
        {this.props.state !== null &&
          <Index state={this.props.state.toUpperCase()}/>
        }
          {this.props.state === null &&
           <ErrorPage statusCode={404}/>

        }
        

      </div>
    )
    
  }
}