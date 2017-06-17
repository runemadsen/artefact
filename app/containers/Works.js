import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { Link } from 'react-router'

import List from '../components/Display/List'
import Searchbar from '../components/Filter/SearchBar'

import {generateWorks} from '../store/dummy'

class Works extends Component {

  // Add fetch data to fetch the component data!

  render() {
    return (
      <div className='page-works'>
        <Helmet title='Works' />
        <div className='toolbar_horizontal'>
          <Searchbar />
          <div className='actions'>
            <Link className='button button_small' to='/works/new'>New Work</Link>
            <Link className='button button_small' to='/works/new'>New Editioned Work</Link>
          </div>
        </div>
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
