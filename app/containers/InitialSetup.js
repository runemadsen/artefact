import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import Input from '../components/FormFields/Input'
import Select from '../components/FormFields/Select'
import Status from '../components/Elements/Status'

import {makeOptions} from '../helpers'

class InitialSetup extends Component {

  // Add fetch data to fetch the component data!
  constructor(props) {
    super(props);
  
    this.state = {
      saveStatus: "saved",
      name: '',
      type: 'Artist',
      email: '',
      phone: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postal: '',
      country: ''
    };
  }
  
  handleOnChange(data, name){
    console.log(this)
    name = name ? name  : this.name
    this.state[name] = data
    console.log('changed %s to %s', name, data )
  }

  render() {
    return (
      <div>
        <Helmet title="Set up your account" />
        <h1>Initial Setup</h1>
        <form>
          <Status status="saved" />
          <Input label="name" name="name" value={this.state.name} name="name" onChange={this.handleOnChange}/>
          <Select label="type" name="type" value={this.state.type} options={makeOptions(['Artist', 'Collector'])} onChange={this.handleOnChange}/>
          <Input label="email" name="email" type="email" value={this.state.email} onChange={this.handleOnChange}/>
          <Input label="phone" name="phone" type="tel" value={this.state.phone} onChange={this.handleOnChange}/>
          <Input label="address" name="address_1" value={this.state.address_1} onChange={this.handleOnChange}/>
          <Input label="" name="address_2" value={this.state.address_2} onChange={this.handleOnChange}/>
          <Input label="city" name="city" value={this.state.city} onChange={this.handleOnChange}/>
          <Input label="state" name="state" value={this.state.state} onChange={this.handleOnChange}/>
          <Input label="postal code" name="postal" value={this.state.postal} onChange={this.handleOnChange}/>
          <Input label="country" name="country" value={this.state.country} onChange={this.handleOnChange}/>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(InitialSetup)
