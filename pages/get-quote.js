import React from 'react'
import Router from 'next/router'
import ErrorPage from 'next/error'
import StylistQuote from '../components/StylistQuote/StylistQuote'
import '../styles/shopify.css';
import '../styles/custom.css';
import 'react-dates/initialize';
import '../styles/react-dates-override.css';
import fetch from 'isomorphic-unfetch';

export default class extends React.Component {
  static async getInitialProps({query }) {
    
    return { id: query.provider_id }

  }
  render(){
    return(<div>
      {!this.props.id &&
          <ErrorPage statusCode={404} />
      }
      {this.props.id &&
          <StylistQuote provider_id={this.props.id}/>
      }
    </div>)
  }
}