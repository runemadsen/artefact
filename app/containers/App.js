import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Navigation from '../components/Navigation'
import { signOut } from '../actions/auth'
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
        <Navigation onSignOut={this.props.onSignOut} loggedIn={this.props.loggedIn} />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSignOut: () => { dispatch(signOut()) }
  }
}
function mapStateToProps(state) {
  return { loggedIn: state.auth.get('loggedIn') }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)