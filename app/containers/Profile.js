import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

class Profile extends Component {

  // Add fetch data to fetch the component data!

  render() {
    return (
      <div>
        <Helmet title="Profile" />
        <p>Profile page!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
