import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {

  render() {
    return (
      <nav>
        <div className="Navigation">
          <Link to="/" id="logo">Artefact</Link>
          <Link to="/works">Works</Link>
          <Link to="/people">People</Link>
          <Link to="/user">Profile</Link>
          <a href="#" onClick={(e) => { e.preventDefault(); this.props.onSignOut()}}>Log Out</a>
        </div>
      </nav>
    )
  }
}

Navigation.propTypes = {
  onSignOut: React.PropTypes.func.isRequired
}

export default Navigation
