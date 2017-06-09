import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Artefact from '../components/Artefact'
import NavLink from '../components/Atoms/NavLink'

class Navigation extends Component {

  handleSignOut(e){
    e.preventDefault()
    this.props.onSignOut()
  }
  render() {
    console.log(this.props.currentPath)
    let {currentPath} = this.props
    return (
      <nav>
        <div className="Navigation">
          <div className="nav-group">
            <Link to="/" id="logo"><Artefact/></Link>
            <NavLink currentPath={currentPath} to="/works">Works</NavLink>
            <NavLink currentPath={currentPath} to="/people">People</NavLink>
          </div>      
          { this.props.loggedIn ?
            <div className="nav-group">
              <NavLink currentPath={currentPath} to="/profile"> Profile</NavLink>
              <a className="nav-link" href="#" onClick={(e)=>this.handleSignOut(e)}>Log Out</a>
            </div>
            :
            <div className="nav-group">
              <a className="nav-link" href="#">Log In</a>
            </div>
          }
        </div>
      </nav>
    )
  }
}

Navigation.propTypes = {
  onSignOut: PropTypes.func.isRequired
}
export default Navigation