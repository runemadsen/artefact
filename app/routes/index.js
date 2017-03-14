import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import NewWork from '../containers/NewWork'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="works/new" component={NewWork} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}
