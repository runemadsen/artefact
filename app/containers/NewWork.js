import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'
import _ from 'lodash'

import Input from '../components/FormFields/Input'
import MultiInput from '../components/FormFields/MultiInput'
import MonthYearPicker from '../components/FormFields/MonthYearPicker'
import Select from '../components/FormFields/Select';
import Dimensions from '../components/FormFields/Dimensions';
import Toggle from '../components/FormFields/Toggle';

import {makeOptions} from '../helpers'

import {emptyWork} from '../store/dummy'

class NewWork extends Component {
  
  handleOnChange(data, loc){
    if (!_.isArray(loc)) loc = [loc]
    this.setState(this.state.setIn(loc, data))
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
        <Input label="title" name="title" value={work.title} placeholder="Artwork's Title" onChange={handleOnChange.bind(this)}/>
        <MonthYearPicker label="creation date" value={work.date} name="date" onChange={handleOnChange.bind(this)}/>
        <Select label="artist" name="artist" value={work.artist} placeholder="Artist" onChange={handleOnChange.bind(this)} 
          options={makeOptions(["Martin", "Rune", "Alex"])}/>
        <Select label="medium" name="medium" value={work.medium} placeholder="Oil, Metal,..." onChange={handleOnChange.bind(this)}
          creatable={true}  
          options={makeOptions(["Oil", "Metal", "Digital"])}/>
        <Dimensions label="dimensions" value={work.dimensions} name="dimensions" onChange={handleOnChange.bind(this)} />
        <Input label="" name="dimensions_words" value={work.dimensions_words} placeholder="Or describe it in words" onChange={handleOnChange.bind(this)}/>
        
          <Toggle name="units" label="units" value={work.units} options={makeOptions(["in", "cm"])} onChange={handleOnChange.bind(this)} />
        </form>

      </div>
    )
  }
}
function mapStateToProps (state) {

  return { work: emptyWork }
}



export { NewWork }
export default connect(mapStateToProps, {  })(NewWork)
