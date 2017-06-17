import React, { Component } from 'react'
import {formatMoney} from 'accounting'
import dateFmt from 'dateformat'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick() {
    this.props.onClick(this.props.work.id)
  }
  render() {

    let {work} = this.props
    let dims = work.dimensions
    return (
      <div className='list-item' id={work.id}>
        <figure className='item-image'>
          <img src={work.image}/>
        </figure>
        <div className='item-info' onClick={()=>console.log('go to ')}>
          <span className='item-title'>{work.title}</span><br/>
          {/*it would make sense for the author to not show if it's yourself*/}
          <span className='item-artist-name'>{work.artist.name}</span><br/>
          <span className='item-medium'>{work.medium}</span><span>, </span>
          <span className='item-creation-date'>{dateFmt(work.creationDate, 'mediumDate')}</span><br/>
          <div className='item-dimensions'> {dims.width}&times;{dims.height}&times;{dims.width} {dims.units}</div>
          <div className='item-price'>{work.price.currency} {formatMoney(work.price.amount, '$', 0)}</div>
        </div>
        <div className='item-status'>
          <span className='item-label'>currently at:</span>
          <span className='item-location'>{work.location.current.label}</span><br/>
          {work.location.current.since ? <span><span className='item-label'>since </span><span className='item-location-since'>{dateFmt(work.location.current.since, 'mediumDate')} </span></span> : null }<br/>
          {work.location.current.until ? <span><span className='item-label'>until </span><span> {dateFmt(work.location.current.until, 'mediumDate')} </span></span> : null }
        </div>
      </div>
    )
  }
}


export default ListItem
