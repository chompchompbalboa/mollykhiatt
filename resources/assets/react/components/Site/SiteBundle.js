//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import seedStore from '../../stores/seedStore'
import seedActions from '../../actions/seedActions'

import Site from './Site.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SiteBundle extends Component {

  state = {
    seed: null
  }

  componentDidMount = () => {
    seedStore.addChangeListener(this.handleStoreChange)
    seedActions.fetchSeed()
  }

  componentWillUnmount = () => {
    seedStore.removeChangeListener(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState({
      seed: seedStore.getContent()
    })
  }

  render = () => {
    const {
      seed
    } = this.state

    if(seed !== null) {
      return (
        <Router>
          <Site 
            seed={seed}/>
        </Router>
      ) 
    }
    return null
  }  
}