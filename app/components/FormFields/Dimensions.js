import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import ReactSelect from 'react-select'
import classnames from 'classnames'
import _ from 'lodash'

import {makeOptions} from '../../helpers'
import Toggle from './Toggle'

export default class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.dimensionsKeys= ['width','height','depth']
    this.handleOnChangeUnits = this.handleOnChangeUnits.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }    

  handleOnChange(e){
    let loc = [this.props.name,e.name]
    this.props.onChange(e.value, loc)
  }
  handleOnChangeUnits(val, name){    
    let {value} = this.props
    if (val == value.units) return;

    const conversion = (val == 'in') ? 1 / 2.56 : 2.56;
    const step = (val == 'in') ? 1 : 0;
    let newValue = _.clone(value)
    newValue['units'] = val
    this.dimensionsKeys.forEach((k)=>{
      newValue[k] = newValue[k] ? _.round(newValue[k] * conversion, step) : newValue[k];
    })
    this.props.onChange(newValue, this.props.name)
  }
  render() {
    let {label, name, value} = this.props
    let dimensionsClass = classnames(
      "form_dimensions", 
      "form_input",
      {"form_input_with_label": label },
      )
    return (

      <div className={dimensionsClass}>
        <label>{label}</label>
        <div className="form_input_group">
          { this.dimensionsKeys.map((n, i)=>{
              return (<input 
                className="input-split-4"
                key={`${this.props.name}-${n}`}
                name={n}
                type="number"
                step={ value.units == "in" ? "0.25" : "1" }
                min="0" 
                value={value[n]} 
                placeholder={n}
                onChange={(e)=>this.handleOnChange(e.target)} 
                />)
            })
          }
          <Toggle className="input-split-4" name="units" value={value.units} options={ {cm: 'cm', in: 'in'} } onChange={this.handleOnChangeUnits} />
          
          {false ? <ReactSelect name={"units"} clearable={false}  
                    className="Select-split-4"
                    value={value.units}
                    options={makeOptions(["in","cm"])} 
                    onChange={this.handleOnChangeUnits} /> : null}
        </div>
      </div>
    )
  }
}


Dimensions.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
