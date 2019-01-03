import Link from 'next/link'
import Head from 'next/head'
import LandingLayout from '../layouts/LandingLayout';
import LandingPage from '../components/LandingPage/LandingPage';
import '../styles/shopify.css';
import '../styles/custom.css';
import '../styles/react-dates-override.css';
import QuoteForm from '../components/QuoteForm/QuoteForm';
import React from 'react';
import 'react-dates/initialize';



class Index extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }


onLoadedHandler = () => {
  this.setState({
      isLoaded: true
  })

}


onFormHideHandler = () => {
  this.setState({
      formHidden: true
  })
}

  render() {
    return(<div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770" type="image/png" />
      <title>FLAYR | Mobile Makeup Artists & Hair Stylists</title>
    </Head>
   <LandingPage />
    </div>)
  }
}


export default Index;