import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'

import Input from '../components/Input'
import MultiInput from '../components/MultiInput'
import MonthYearPicker from '../components/MonthYearPicker'
import Select from '../components/Select';
import Dimensions from '../components/Dimensions';

import {makeOptions} from '../helpers'

class NewWork extends Component {
  componentWillMount() {
    
  }
  handleOnChange(data, name){
    console.log(data, name)
    // data = ? typeof data == "object" ? 
    name = name ? name  : this.name
    console.log('changed %s to %s', name, data )
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
        <Input label="title" name="title" placeholder="Artwork's Title" onChange={handleOnChange}/>
        <MonthYearPicker label="creation date" name="creation_date" onChange={handleOnChange}/>
        <Select label="artist" name="artist" placeholder="Artist" onChange={handleOnChange} 
          options={makeOptions(["Martin", "Rune", "Alex"])}/>
        <Select label="medium" name="medium"placeholder="Oil, Metal,..." onChange={handleOnChange}
          creatable={true}  
          options={makeOptions(["Oil", "Metal", "Digital"])}/>
        <Dimensions label="dimensions" name="dimensions" onChange={handleOnChange} />
        <Input label="" name="dimensions_words" placeholder="Or describe it in words" onChange={handleOnChange}/>
        <MultiInput label="Dimensions" fields={[
          {name: "width", placeholder: "in inches", type: "number", step: "1",  min: "0"},
          {name: "height", placeholder: "in inches"},
          {name: "depth", placeholder: "in inches"}
          ]} onChange={handleOnChange}/>
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
