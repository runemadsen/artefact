import React, { Component } from 'react'
import {formatMoney} from 'accounting'
import df from 'dateformat'

class ListItem extends Component {

  render() {

    let {work} = this.props
    let dims = work.dimensions
    return (
      <div className='list-item'>
        <figure className='item-image'>
          <img src={work.image}/>
        </figure>
        <div className='item-info'>
          <span className='item-title'>{work.title}</span><span>, </span>

          {/*it would make sense for the author to not show if it's yourself*/}
          <span className='item-artist-name'>{work.artist.name}</span><br/>
          <span className='item-medium'>{work.medium}</span><span>, </span>
          <span className='item-creation-date'>{df(work.creationDate, 'mediumDate')}</span><br/>
          <div className='item-dimensions'> {dims.width}&times;{dims.height}&times;{dims.width} {dims.units}</div>
          <div className='item-price'>{work.price.currency} {formatMoney(work.price.amount, '$', 0)}</div>
        </div>
        <div className='item-status'>
          <span className='item-label'>currently at:</span>
          <span className='item-location'>{work.location.current.label}</span><br/>
          {work.location.current.since ? <span><span className='item-label'>since </span><span className='item-location-since'>{df(work.location.current.since, 'mediumDate')} </span></span> : null }<br/>
          {work.location.current.until ? <span><span className='item-label'>until </span><span> {df(work.location.current.until, 'mediumDate')} </span></span> : null }
        </div>
        

      </div>
    )
  }
}


export default ListItem
