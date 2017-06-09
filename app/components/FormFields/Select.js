import React, { Component, PropTypes } from 'react'
import ReactSelect from 'react-select'
import { Creatable } from 'react-select'
import classnames from 'classnames'

export default class Select extends Component {
  
  onChange(e){
    this.props.onChange(e.value, this.props.name)
  }
  render() {
    let {label, name, value, options, placeholder, clearable, creatable} = this.props    
    clearable = typeof clearable === 'undefined' ? false : clearable
    let selectClass = classnames(
      "form_select", 
      {"form_select_creatable" : creatable ,} 
      )
    return (
      <div className={selectClass}>
        <label>{label}</label>
        {
          creatable ?
          <Creatable
              name={name}
              value={value} 
              placeholder={placeholder} 
              options={options}
              clearable={clearable}
              onChange={(e)=>this.onChange(e)}   
              />
          :
          <ReactSelect
              name={name}
              value={value} 
              placeholder={placeholder} 
              options={options}
              clearable={clearable}
              onChange={(e)=>this.onChange(e)}   
              />
        }
        
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
