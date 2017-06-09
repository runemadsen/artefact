import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { Link } from 'react-router'

class Works extends Component {

  // Add fetch data to fetch the component data!

  render() {
    return (
      <div>
        <Helmet title="Works" />
        <h1>Works</h1>
        <Link className="button" to="/works/new">New Work</Link>
        <Link className="button" to="/works/new">New Editioned Work</Link>
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
