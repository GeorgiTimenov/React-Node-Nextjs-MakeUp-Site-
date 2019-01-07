import React, { Component } from 'react'


export default class extends Component {
  static getInitialProps ({ query}) {
    return { provider_id: query.provider_id, quote_id: query.quote_id }
  }
  render () {
    return (
      <div>
        state page
      </div>
    )
    
  }
}