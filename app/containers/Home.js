import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { signUp, signIn } from '../actions/auth'

class Home extends Component {

  render() {
    return (
      <div>
        <Helmet title="Home" />
        <div className="container">
          { this.props.loggedIn ?
            <p>You are logged in</p>
            :
            <div>
              <SignUp onSignUp={this.props.onSignUp} />
              <SignIn onSignIn={this.props.onSignIn} />
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (username, password, email) => { dispatch(signUp(username, password, email)) },
    onSignIn: (username, password) => { dispatch(signIn(username, password)) }
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.auth.get('loggedIn') }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
