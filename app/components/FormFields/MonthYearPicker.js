import React, { Component, PropTypes } from 'react'
import Select from 'react-select';
import { Creatable } from 'react-select';

import classnames from 'classnames'

export default class MonthYearPicker extends Component {
  onChangeMonth(e){
    this.props.onChange(this.date.setMonth(e.value), this.props.name)
  }
  onChangeYear(e){
    this.props.onChange(this.date.setYear(e.value), this.props.name)
  }
  render() {
    
    let {label, name, value, options} = this.props    
    let today = new Date()
    console.log(value)
    this.date = typeof value !== "undefined" ? new Date(value) : new Date()
    let selectClass = classnames(
      "form_monthYearPicker", 
      "form_select",
      )
    let monthClass = classnames(
      "form_monthPicker",
      "Select-split-2",
      `${name}_month_field`
      )
    let yearClass = classnames(
      "form_monthYearPicker", 
      "Select-split-2",
      `${name}_year_field`
      )
    return (
      <div className={selectClass}>
        <label>{label}</label>
        <Select
            className={monthClass}
            name={`${name}_month` }
            clearable={false}
            value={this.date.getMonth()} 
            placeholder="month"
            options={makeMonthOptions(today.getMonth())}
            onChange={(e)=>this.onChangeMonth(e)} />
        <Creatable
            className={yearClass}
            clearable={false}
            isValidNewOption={option=>isFinite(option.label) && parseInt(option.label) > 1899 }
            promptTextCreator={(label)=>`Add ${label}`}
            name={`${name}_year`}
            value={this.date.getFullYear()} 
            placeholder="year" 
            options={makeYearOptions(today.getFullYear())}
            onChange={(e)=>this.onChangeYear(e)} />
      </div>
    )
  }
}

MonthYearPicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

// Internal helpers

function makeYearOptions(thisYear) {
  return Array(61).fill().map((_, i) => {
    let y = thisYear + 1 - i
    return { value: y, label: String(y) }
    } ); 
}
function makeMonthOptions(thisMonth){
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return months.map((k,v)=>{
    return {value: v, label: k  }
  })
}
