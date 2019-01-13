const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/account', (req,res)=>{
    return app.render(req,res, '/account')
  })

  server.get('/join', (req, res) => {
    return app.render(req, res, `/join`)
  })
  
  const robotsOptions = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    }
  };
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', robotsOptions)
  ));
  
  const sitemapOptions = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
    }
  };
  server.get('/sitemap.xml', (req, res) => (
    res.status(200).sendFile('sitemap.xml', sitemapOptions)
  ));
  
  const faviconOptions = {
    root: __dirname + '/static/'
  };

  server.get('/:provider_id/get-quote', (req, res) => {
    return app.render(req, res, '/get-quote', { provider_id: req.params.provider_id})
  }) 
  server.get('/profile/:id', (req, res) => {
    return app.render(req, res, '/profile', { id: req.params.id })
  }) 

  server.get('/offer/:id', (req, res) => {
    return app.render(req, res, '/offer', { id: req.params.id })
  }) 

  server.get('/au/:state', (req, res) => {
    return app.render(req, res, `/au/state`, {state: req.params.state, country: 'au'})
  }) 

  server.get('/au/', (req, res) => {
    return app.render(req, res, `/au`)
  }) 

  server.get('/au/:state/:suburb/', (req, res) => {
    return app.render(req, res, '/MakeupArtists', { country: 'au', state: req.params.state, suburb: req.params.suburb, suburbLevel: true})
  }) 

  server.get('/au/:state/:suburb/MakeupArtists', (req, res) => {
    return app.render(req, res, '/MakeupArtists', { country: 'au', state: req.params.state, suburb: req.params.suburb })
  })

  server.get('/au/:state/:suburb/MakeupArtist', (req, res) => {
    return app.render(req, res, '/MakeupArtists', { country: 'au', state: req.params.state, suburb: req.params.suburb })
  }) 

  server.get('/stylist-quote/:provider_id/:quote_id', (req, res) => {
    return app.render(req, res, '/stylist-quote', {provider_id: req.params.provider_id, quote_id: req.params.quote_id})
  }) 

  server.get('/quote/:id', (req, res) => {
    return app.render(req, res, '/quote', { id: req.params.id })
  }) 

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})