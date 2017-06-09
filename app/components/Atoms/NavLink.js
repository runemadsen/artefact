import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import classnames from 'classnames'

class NavLink extends Component {
  render(){
    let classes = classnames("nav-link", {
      "link-active" :  /this.props.to/.test(this.props.currentPath)
    } )
    return (
      <Link className={classes} to={this.props.to}>{this.props.children}</Link>
      )
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default NavLink