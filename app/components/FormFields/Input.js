import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Input extends Component {
  onChange(e){
    console.log(e)
    this.props.onChange(e.target.value)
  }
  render() {
    let {label, name, value, type, placeholder, size} = this.props
    type = type || "text"
    let inputClass = classnames(
      "form_input", 
      { [`form_input_${type}`] : type,
        [`form_input_${size}`] : size
     })
    return (
      <div className={inputClass}>
        <label htmlFor={name}>{label}</label>
        <input 
          name={name} 
          type={type} 
          value={value} 
          placeholder={placeholder}
          onChange={(e)=>this.onChange(e)} />
      </div>
    )
  }
}


Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

