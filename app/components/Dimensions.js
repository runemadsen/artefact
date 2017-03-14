import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import ReactSelect from 'react-select'
import classnames from 'classnames'
import {makeOptions} from '../helpers'
export default class Dimensions extends Component {
    
  makeRef(d){
    return `${this.props.name}[${d}]`
  }
  onChange(e){
    // console.log(e.target, e.target.value, e.target.name)
    this.props.onChange(e.target.value, e.target.name)
  }
  render() {
    let {label, name, value} = this.props
    value = value ? value : this.defaultValues
    
    let dimensionsClass = classnames(
      "form_dimensions", 
      "form_input",
      )
    return (
      <div className={dimensionsClass}>
        <label>{label}</label>
        {
          this.props.subNames.map((n, i)=>{
            return (<input 
              className="input-split-4"
              key={this.makeRef(n)}
              ref={this.makeRef(n)}
              name={this.makeRef(n)}
              type="number"
              step="1"
              min="0" 
              value={value[n]} 
              placeholder={n}
              onChange={(e)=>this.onChange(e)} 
              />)
          })
        }
        <ReactSelect name={this.makeRef("units")} clearable={false}  
          className="Select-split-4"
          value="in"
          options={makeOptions(["in","cm"])} 
          onChange={(e)=>this.onChange(e)} />
      </div>
    )
  }
}

Dimensions.defaultProps = {
  value: {width: undefined, height: undefined, depth: undefined},
  subNames: ["width","height", "depth"]
}

Dimensions.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
