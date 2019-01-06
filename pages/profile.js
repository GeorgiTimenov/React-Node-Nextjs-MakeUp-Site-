import React from 'react'
import Router from 'next/router'
import ErrorPage from 'next/error'
export default class extends React.Component {

  static async getInitialProps({ res, query }) {
    console.log(query.id)
    if (res && query.id) {
      res.writeHead(302, {
        Location: 'https://au.flayr.io/products/'+query.id
      })
      res.end()
    } else if(query.id) {
      Router.push('https://au.flayr.io/products/'+query.id)
    }else{
      return { id: query.id }
    }
    return { id: query.id }
  }
  render(){
    return(<div>
      {!this.props.id &&
          <ErrorPage statusCode={404} />
      }
      {this.props.id &&
          <span>{this.props.id}</span>

      }
    </div>)
  }
}