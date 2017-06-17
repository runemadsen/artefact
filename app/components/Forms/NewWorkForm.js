import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import _ from 'lodash'

import Input from '../FormFields/Input'
import MultiInput from '../FormFields/MultiInput'
import MonthYearPicker from '../FormFields/MonthYearPicker'
import Select from '../FormFields/Select';
import Dimensions from '../FormFields/Dimensions';
import Toggle from '../FormFields/Toggle';

import {makeOptions} from '../../helpers'


export default class NewWorkForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  
  handleOnChange(data, loc){
    this.props.onChange(data,loc)
  }

  render(){
    let {work} = this.props
    return (
      <form>
        <Input label="title" name="title" value={work.title} placeholder="Artwork's Title" onChange={this.handleOnChange}/>
        <MonthYearPicker label="creation date" value={work.date} name="date" onChange={this.handleOnChange}/>
        <Select label="artist" name="artist" value={work.artist} placeholder="Artist" onChange={this.handleOnChange} 
          options={makeOptions(["Martin", "Rune", "Alex"])}/>
        <Select label="medium" name="medium" value={work.medium} placeholder="Oil, Metal,..." onChange={this.handleOnChange}
          creatable={true}  
          options={makeOptions(["Oil", "Metal", "Digital"])}/>
        <Dimensions label="dimensions" value={work.dimensions} name="dimensions" onChange={this.handleOnChange} />
        <Input label="" name="dimensions_words" value={work.dimensions_words} placeholder="Or describe it in words" onChange={this.handleOnChange}/>
        
        <Toggle name="editioned" label="editioned" value={work.editioned} options={ {unique: false, editioned: true} } onChange={this.handleOnChange} />
      </form>
    );
  }
}


NewWorkForm.propTypes = {
  work: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
