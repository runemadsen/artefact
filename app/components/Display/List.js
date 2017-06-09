import React, { Component } from 'react'

import ListItem from './ListItem'
class List extends Component {

  render() {
    return (
      <div>
        {this.props.works.map((w,i)=>{
          return <ListItem ref={`work-${i}`} work={w} />
        })}
      </div>
    )
  }
}

export default List
