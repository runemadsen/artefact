import React, { Component } from 'react'
import {formatMoney} from 'accounting'

class ListItem extends Component {

  render() {
    console.log(this.props.work)
    let {work} = this.props
    let dims = work.dimensions
    return (
      <div className='list-item'>
        <div className='item-info'>
          {work.name}, {work.artist.name}<br/>
          {work.medium}
          <div className='item-dimensions'> {dims.width}&times;{dims.height}&times;{dims.width} {dims.units}</div>
          <div className='item-creation-date'>{work.creationDate}</div>
          <div className='price'>{work.price.currency} {formatMoney(work.price.amount, '$', 0)}</div>
        </div>
        <div className='item-status'>

        </div>
        

      </div>
    )
  }
}


export default ListItem
