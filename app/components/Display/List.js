import React, { Component } from 'react'

import ListItem from './ListItem'
class List extends Component {

  render() {
    return (
      <div className='list'>
        {this.props.works.map((w,i)=>{
          return <ListItem key={`work-${i}`} work={w} />
        })}
      </div>
    )
  }
}

export default List
