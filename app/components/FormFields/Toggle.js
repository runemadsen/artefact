import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Toggle extends Component {
  onChange(e){
    console.log(e)
    this.props.onChange(e.target.value)
  }
  render() {
    let {label, name, value, options} = this.props
    let toggleClass = classnames(
      "form_input", 
      "form_toggle", 
      )
    let optionsClasses = classnames(
      "form_toggle_options", 
      `form_toggle_options-${options.length}`
      )
    return (
      <div className={toggleClass}>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input 
          type="hidden"
          name={name} 
          value={value} />
          <div className={optionsClasses}>
            {options.map( (option, index)=>{
              return (<div 
                id={option.value}
                key={`${name}-option-${index}`}
                className={classnames("form_toggle_option", {
                  "is-selected" : option.value == value
                })}
                onClick={(e)=>this.onChange(e)} >
                {option.label}
                </div>)
            })}
        </div>
      </div>
    )
  }
}


Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

