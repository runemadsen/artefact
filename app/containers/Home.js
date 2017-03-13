import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import Navigation from 'components/Navigation'
import SignUp from 'components/SignUp'
import SignIn from 'components/SignIn'

class Home extends Component {

  handleSignUp(e) {
    e.preventDefault()
    console.log('Sign Up')
  }

  handleSignIn(e) {
    e.preventDefault()
    console.log('Sign In')
  }

  render() {
    return (
      <div>
        <Navigation />
        <Helmet title="Home" />
        <div className="container">
          <SignUp handleSubmit={this.handleSignUp} />
          <SignIn handleSubmit={this.handleSignIn} />
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Home)
