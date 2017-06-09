import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { Link } from 'react-router'

import List from '../components/Display/List'

import {generateWorks} from '../store/dummy'



class Works extends Component {

  // Add fetch data to fetch the component data!

  render() {
    return (
      <div>
        <Helmet title='Works' />
        <h1>Works</h1>
        <Link className='button' to='/works/new'>New Work</Link>
        <Link className='button' to='/works/new'>New Editioned Work</Link>
        
        <List works={this.props.works}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(state) {
  
  return {works: generateWorks(10)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Works)
