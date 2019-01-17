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
    "priceRange": "$-$$"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating":  "5",
    "worstRating": "0",
    "reviewCount": 3000,
    "ratingCount": 3000
  }
}

`
}}>
            </script>
      </Head>
   <LandingPage state={this.props.state}/>
    </div>)
  }
}


export default Index;