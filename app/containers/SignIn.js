import React, { Component, PropTypes } from 'react'

class SignIn extends Component {

  handleSubmit(e) {
    e.preventDefault()
    // Grab directly from input fields via ID's.
    // Replace with Martin's components when ready
    let username = document.getElementById('signInUsername').value
    let password = document.getElementById('signInPassword').value
    this.props.onSignIn(username, password)
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form autoComplete="off" onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" id="signInUsername" name="username" placeholder="Username" /><br />
          <input type="password" id="signInPassword" name="password" placeholder="Password" /><br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }

}

SignIn.propTypes = {
  onSignIn: React.PropTypes.func.isRequired
}

export default SignIn
