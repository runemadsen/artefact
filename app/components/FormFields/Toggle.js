import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import _ from 'lodash'

export default class Toggle extends Component {
  onChange(e){
    let value = e.target.value
    if( ['true','false'].includes(value) ){
      value = value === 'true'
    }
    this.props.onChange(value, this.props.name)
  }
  render() {
    let {label, name, value, options, className} = this.props
    let toggleClass = classnames(
      "form_input", 
      "form_toggle", 
      {"form_input_with_label": label },
      className
      )
    let optionsClasses = classnames(
      "form_toggle_options",
      )
    return (
      <div className={toggleClass}>
        {label ? <label htmlFor={name}>{label}</label> : null}
          <div className={optionsClasses}>
            {_.map(options,( val, lab)=>{
              let optionClasses = classnames(
                "form_toggle_option",
                {"form_toggle_option_selected": val == value }
              )
              return (
                <div className={optionClasses} key={`${name}-option-${val}`}>
                  <input
                    className="form_toggle_option_input"
                    name={name}
                    type="radio"
                    value={val}
                    id={`${name}-option-${val}`}
                    checked={val == value}
                    onChange={(e)=>this.onChange(e)} 
                  />
                  <label className="form_toggle_option_label" htmlFor={`${name}-option-${val}`}>{lab}</label>
                </div>
                )
            })}
        </div>
      </div>
    )
  }
}


Toggle.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string,PropTypes.bool,PropTypes.number]),
  name: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

