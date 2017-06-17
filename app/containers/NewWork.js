import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'

import NewWorkForm from '../components/Forms/NewWorkForm'

import {emptyWork} from '../store/dummy'


class NewWork extends Component {
  constructor(props) {
    super(props);
    this.state = {work : emptyWork};
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(data,loc){
    if (!_.isArray(loc)) loc = [loc]
    if (_.isObject(data)){
      this.setState( ({work})=> ({ work: work.mergeIn(loc, data) }));  
    } else {
      this.setState( ({work})=> ({ work: work.setIn(loc, data) }));  
    }
  }
  render() {
    
    return (
      <div>
        <Helmet
          title={'New Work'}
        />

        <h1>New Work</h1>
        
        <NewWorkForm work={this.state.work.toJS()} onChange={this.handleOnChange}/>

      </div>
    )
  }
}


// export default  NewWork 
export default connect(()=>{return {}}, {  })(NewWork)
