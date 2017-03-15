import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

class People extends Component {

  // Add fetch data to fetch the component data!

  render() {
    return (
      <div>
        <Helmet title="People" />
        <p>People page!</p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(People)
