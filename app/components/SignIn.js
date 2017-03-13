import React, { Component, PropTypes } from 'react'

class SignIn extends Component {
  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form autoComplete="off" onSubmit={this.props.handleSubmit}>
          <input type="text" name="username" placeholder="Username" /><br />
          <input type="password" name="password" placeholder="Password" /><br />
          <button type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}

SignIn.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
}

export default SignIn
