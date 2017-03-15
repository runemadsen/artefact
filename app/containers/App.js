import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Navigation from '../components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet
          defaultTitle="Artefact"
          titleTemplate="%s - Artefact"
          meta={[
            {"name": "description", "content": "Artefact is awesome"},
          ]}
          htmlAttributes={{"lang": "en"}}
        />
        <Navigation />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
