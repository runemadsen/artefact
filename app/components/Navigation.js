import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classnames from 'classnames'
import Artefact from '../components/Artefact'

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
          <Link to="/" id="logo"><Artefact/></Link>
          <div className="left">  
            <NavLink currentPath={currentPath} to="/works">Works</NavLink>
            <NavLink currentPath={currentPath} to="/people">People</NavLink>
          </div>
          
            { this.props.loggedIn ?
              <div className="right">  
                <NavLink currentPath={currentPath} to="/profile"> Profile</NavLink>
                <a className="link" href="#" onClick={(e)=>this.handleSignOut(e)}>Log Out</a>
              </div>
              :
              null
            }
        </div>
      </nav>
    )
  }
}

class NavLink extends Component {
  render(){
    let classes = classnames("link", {
      "link-active" :  /this.props.to/.test(this.props.currentPath)
    } )
    return (
      <Link className={classes} to={this.props.to}>{this.props.children}</Link>
      )
  }
}
Navigation.propTypes = {
  onSignOut: React.PropTypes.func.isRequired
}

export default Navigation