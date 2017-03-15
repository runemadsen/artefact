import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import SignUp from './SignUp'
import { signUp } from '../actions/auth'

class Home extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Helmet title="Home" />
        <div className="container">
          { this.props.loggedIn ?
            <p>You're logged in</p>
            :
            <SignUp onSignUp={this.props.onSignUp} />
          }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (username, password, email) => { dispatch(signUp(username, password, email))}
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.auth.get('loggedIn') }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
