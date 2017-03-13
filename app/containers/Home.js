import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import Navigation from 'components/Navigation'
import SignUp from 'containers/SignUp'
import { signUp } from 'actions/auth'

class Home extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Helmet title="Home" />
        <div className="container">
          <SignUp onSignUp={this.props.onSignUp} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (username, password) => { dispatch(signUp(username, password ))}
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
