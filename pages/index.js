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
   <LandingPage />
    </div>)
  }
}


export default Index;