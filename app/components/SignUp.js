import React, { Component, PropTypes } from 'react'

class SignUp extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form autoComplete="off" onSubmit={this.props.handleSubmit}>
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
  handleSubmit: React.PropTypes.func.isRequired
}

export default SignUp
