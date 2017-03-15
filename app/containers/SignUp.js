import React, { Component, PropTypes } from 'react'

class SignUp extends Component {

  handleSubmit(e) {
    e.preventDefault()
    // Grab directly from input fields via ID's.
    // Replace with Martin's components when ready
    let username = document.getElementById('signUpUsername').value
    let password = document.getElementById('signUpPassword').value
    let email = document.getElementById('signUpEmail').value
    this.props.onSignUp(username, password, email)
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form autoComplete="off" onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" id="signUpUsername" name="username" placeholder="Pick a username" /><br />
          <input type="email" id="signUpEmail" name="email" placeholder="Your email address" /><br />
          <input type="password" id="signUpPassword" name="password" placeholder="Create a password" /><br />
          <button type="submit">Sign up for Artefact</button>
        </form>
      </div>
    )
  }

}

SignUp.propTypes = {
  onSignUp: React.PropTypes.func.isRequired
}

export default SignUp
