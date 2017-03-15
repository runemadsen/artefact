import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Artefact from '../components/Artefact'

class Navigation extends Component {

  render() {
    return (
      <nav>
        <div className="Navigation">
          <Link to="/" id="logo"><Artefact/></Link>
          <div className="left">  
            <Link to="/works">Works</Link>
            <Link to="/people">People</Link>
          </div>
          <div className="right">
            <Link to="/user">Profile</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); this.props.onSignOut()}}>Log Out</a>
          </div>
        </div>
      </nav>
    )
  }
}

Navigation.propTypes = {
  onSignOut: React.PropTypes.func.isRequired
}

export default Navigation
