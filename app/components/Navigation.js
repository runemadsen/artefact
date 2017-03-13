import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <Link to="/" id="logo">Artefact</Link>
          <Link to="/works">Works</Link>
          <Link to="/people">People</Link>
          <Link to="/user">Profile</Link>
          <Link to="/users/logout">Log out</Link>
        </div>
      </nav>
    )
  }
}

export default Navigation
