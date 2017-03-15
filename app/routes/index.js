import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import Works from '../containers/Works'
import People from '../containers/People'
import Profile from '../containers/Profile'
import NewWork from '../containers/NewWork'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="works" component={Works} />
        <Route path="works/new" component={NewWork} />
        <Route path="people" component={People} />
        <Route path="profile" component={Profile} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}
