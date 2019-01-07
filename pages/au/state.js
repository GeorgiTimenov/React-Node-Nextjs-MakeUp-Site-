import React, { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import ErrorPage from 'next/error';


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
    if(data1 === null){
      finalState = null;
    }else{
      finalState = data1[0].state;
    }
    
    return {state: finalState, country: query.country }
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
        {this.props.state !== null &&
          <div>
        page for {this.props.state} {this.props.country}
        </div>
        }
          {this.props.state === null &&
           <ErrorPage statusCode={404}/>

        }
        

      </div>
    )
    
  }
}