import Express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { useRouterHistory, RouterContext, match } from 'react-router'
import { createMemoryHistory, useQueries } from 'history'
import compression from 'compression'
import Promise from 'bluebird'
import Immutable from 'immutable'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import passport from 'passport'
import { Strategy } from 'passport-local'
import bodyParser  from 'body-parser'
import session from 'express-session'
import methodOverride from 'method-override'
import _ from 'lodash'

import requestCheck from './middleware/requestCheck'
import configureStore from '../store/configureStore'
import createRoutes from '../routes/index'
import { UsersSignUp } from './api/users'

import User from './models/user'

let server = new Express()
let port = process.env.PORT || 3000
let scriptSrcs = [
  'http://localhost:3001/static/vendor.js',
  'http://localhost:3001/static/app.js',
  'http://localhost:3001/static/dev.js'
]
let styleSrc = '/App.css'

server.use(compression())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(methodOverride('_method'));
server.use(session({
  store: new (require('connect-pg-simple')(session))(),
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 360 * 24 * 60 * 60 * 1000 } // a year-ish
}));
server.use(Express.static(path.join(__dirname, '../..', 'dist')))
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

// Auth
// ---------------------------------------------

// Find user by username and password
passport.use(new Strategy(User.verify));

// Serialize / deserialize from session
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findOneBy({ id:id }, function (err, user) {
    if(err) { return cb(err); }
    cb(null, user);
  });
});

// Use passport middleware
server.use(passport.initialize());
server.use(passport.session());
server.use(requestCheck());

// API
// ---------------------------------------------

server.post('/api/users', UsersSignUp)

server.get('*', (req, res, next)=> {

  let initialState = {
    auth: Immutable.fromJS({
      loggedIn: !_.isUndefined(req.user)
    })
  }

  let history = useRouterHistory(useQueries(createMemoryHistory))()
  let store = configureStore(initialState)
  let routes = createRoutes(history)
  let location = history.createLocation(req.url)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    } else if (error) {
      res.status(500).send(error.message)
    } else if (renderProps == null) {
      res.status(404).send('Not found')
    } else {
      let [ getCurrentUrl, unsubscribe ] = subscribeUrl()
      let reqUrl = location.pathname + location.search

      getReduxPromise().then(()=> {
        let reduxState = escape(JSON.stringify(store.getState()))
        let html = ReactDOMServer.renderToString(
          <Provider store={store}>
            { <RouterContext {...renderProps}/> }
          </Provider>
        )
        let metaHeader = Helmet.rewind();

        if ( getCurrentUrl() === reqUrl ) {
          res.render('index', { metaHeader, html, scriptSrcs, reduxState, styleSrc })
        } else {
          res.redirect(302, getCurrentUrl())
        }
        unsubscribe()
      })
      .catch((err)=> {
        Helmet.rewind();
        unsubscribe()
        next(err)
      })
      function getReduxPromise () {
        let { query, params } = renderProps
        let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent
        let promise = comp.fetchData ?
          comp.fetchData({ query, params, store, history }) :
          Promise.resolve()

        return promise
      }
    }
  })
  function subscribeUrl () {
    let currentUrl = location.pathname + location.search
    let unsubscribe = history.listen((newLoc)=> {
      if (newLoc.action === 'PUSH' || newLoc.action === 'REPLACE') {
        currentUrl = newLoc.pathname + newLoc.search
      }
    })
    return [
      ()=> currentUrl,
      unsubscribe
    ]
  }
})

server.use((err, req, res, next)=> {
  console.log(err.stack)
  // TODO report error here or do some further handlings
  res.status(500).send("something went wrong...")
})

console.log(`Artefact server is listening on port: ${port}`)
server.listen(port)
