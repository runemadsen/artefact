import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from '../store/configureStore'
import App from '../containers/App'
import Home from '../containers/Home'
import Works from '../containers/Works'
import People from '../containers/People'
import Profile from '../containers/Profile'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="works" component={Works} />
        <Route path="people" component={People} />
        <Route path="profile" component={Profile} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}
