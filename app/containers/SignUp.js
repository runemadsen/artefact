import React, { Component, PropTypes } from 'react'

class SignUp extends Component {

  handleSubmit(e) {
    e.preventDefault()
    // grab from state whenever
    this.props.onSignUp("USERNAME", "PASSWORD")
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form autoComplete="off" onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" name="user[username]" placeholder="Pick a username" /><br />
          <input type="email" name="user[email]" placeholder="Your email address" /><br />
          <input type="password" name="user[password]" placeholder="Create a password" /><br />
          <button type="submit">Sign up for Artefact</button>
        </form>
      </div>
    )
  }

}

SignUp.propTypes = {
  onSignUp: React.PropTypes.func.isRequired
}

// USE CONNECT, ETC

export default SignUp
