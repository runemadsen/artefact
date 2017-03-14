import React, { Component, PropTypes } from 'react'
import ReactSelect from 'react-select';
import { ReactCreatable } from 'react-select';

import classnames from 'classnames'

export default class Select extends Component {
  onChange(e){
    this.props.onChange(e.value)
  }
  render() {
    let {label, name, value, options, placeholder, clearable, creatable} = this.props    
    let selectClass = classnames(
      "form_select", 
      )
    return (
      <div className={selectClass}>
        <label>{label}</label>
        <ReactSelect
            name={`${name}_year`}
            value={value} 
            placeholder={placeholder} 
            options={options}
            clearable={clearable}
            onChange={(e)=>this.onChangeYear(e)} 
            />
      </div>
    )
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
