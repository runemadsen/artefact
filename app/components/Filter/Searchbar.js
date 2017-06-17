import React, { Component, PropTypes } from 'react'

class Searchbar extends Component {

  render() {
  
    return (
      <div  className="Searchbar">
        <input placeholder="Search"/>
      </div>
    )
  }
}

Searchbar.propTypes = {
}
export default Searchbar