import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
        <title>FLAYR | Mobile Makeup Artists & Hair Stylists</title>
        <meta name="description" content="Mobile Hair And Makeup.Hairdressers,Hair Stylists &amp; Makeup Artists For A Special Occassion Or For The Latest Bridal Makeup. Free Travel To You. Prices From $60."></meta>   
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="w6QWVWHl2veXw8C82BBK7PzJ8WUAxNVeOFXH6W199Tg" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/1665/4771/files/favicon_flayr_mobile_makeupartists_and_hair_stylists_32x32.png?v=1536803770" type="image/png" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
