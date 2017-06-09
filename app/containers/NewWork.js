import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'


import Input from '../components/FormFields/Input'
import MultiInput from '../components/FormFields/MultiInput'
import MonthYearPicker from '../components/FormFields/MonthYearPicker'
import Select from '../components/FormFields/Select';
import Dimensions from '../components/FormFields/Dimensions';
import Toggle from '../components/FormFields/Toggle';

import {makeOptions} from '../helpers'

class NewWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      date: undefined,
      artist: undefined,
      medium: undefined,
      dimensions : {
        width: undefined,
        height: undefined,
        depth: undefined,
        units: 'in'
      },
      dimensions_words: undefined,
      units: 'in'
      
  };
  }
  handleOnChange(data, name){
    console.log('changed %s to %s', name, data )
    let newState = {}
    newState[name] = data;
    this.state = Object.assign({}, this.state, newState)
    console.log(this.state)
  }
  render() {
    let { work } = this.props
    let handleOnChange = this.handleOnChange
    return (
      <div>
        <Helmet
          title={'New Work'}
        />

        <h1>New Work</h1>
        <form>
        <Input label="title" name="title" value={this.state.title} placeholder="Artwork's Title" onChange={handleOnChange.bind(this)}/>
        <MonthYearPicker label="creation date" value={this.state.date} name="date" onChange={handleOnChange.bind(this)}/>
        <Select label="artist" name="artist" value={this.state.artist} placeholder="Artist" onChange={handleOnChange.bind(this)} 
          options={makeOptions(["Martin", "Rune", "Alex"])}/>
        <Select label="medium" name="medium" value={this.state.medium} placeholder="Oil, Metal,..." onChange={handleOnChange.bind(this)}
          creatable={true}  
          options={makeOptions(["Oil", "Metal", "Digital"])}/>
        <Dimensions label="dimensions" value={this.state.dimensions} name="dimensions" onChange={handleOnChange.bind(this)} />
        <Input label="" name="dimensions_words" value={this.state.dimensions_words} placeholder="Or describe it in words" onChange={handleOnChange.bind(this)}/>
        
          <Toggle name="units" label="units" value={this.state.units} options={makeOptions(["in", "cm"])} onChange={handleOnChange.bind(this)} />
        </form>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return { work: state.work }
}



export { NewWork }
export default connect(mapStateToProps, {  })(NewWork)
