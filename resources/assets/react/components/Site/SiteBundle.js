//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import seedStore from '../../stores/seedStore'
import seedActions from '../../actions/seedActions'
import siteStore from '../../stores/siteStore'
import siteActions from '../../actions/siteActions'

import Site from './Site.js'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SiteBundle extends Component {

  state = {
    seed: null,
    site: null
  }

  componentDidMount = () => {
    seedStore.addChangeListener(this.handleStoreChange)
    siteStore.addChangeListener(this.handleStoreChange)
    seedActions.fetchSeed()
    siteActions.fetchSite()
  }

  componentWillUnmount = () => {
    seedStore.removeChangeListener(this.handleStoreChange)
    siteStore.removeChangeListener(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState({
      seed: seedStore.getContent(),
      site: siteStore.getContent()
    })
  }

  render = () => {
    const {
      seed,
      site
    } = this.state

    if(seed !== null && site !== null) {
      return (
        <Router>
          <Site 
            seed={seed}
            site={site}/>
        </Router>
      ) 
    }
    return null
  }  
}