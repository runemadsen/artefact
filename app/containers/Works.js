import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

class Works extends Component {

  // Add fetch data to fetch the component data!

  render() {
    return (
      <div>
        <Helmet title="Works" />
        <p>Works page!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Works)
