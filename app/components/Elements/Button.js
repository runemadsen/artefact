import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import classnames from 'classnames'

class Button extends Component {
  render(){
    let classes = classnames("button", {
      "button_small" :  this.props.small
    } )
    return (
      <a className={classes} href={this.props.href}>{this.props.children}</a>
      )
  }
}

Button.propTypes = {
  to: PropTypes.string.isRequired
}

export default Button