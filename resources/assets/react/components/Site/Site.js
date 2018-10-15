//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import SiteBio from './SiteBio.js'
import SiteContact from './SiteContact.js'
import SiteCV from './SiteCV.js'
import SiteFilm from './SiteFilm.js'
import SiteHeader from './SiteHeader.js'
import SiteHome from './SiteHome.js'
import SiteMenu from './SiteMenu.js'
import SiteProject from './SiteProject.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Site = ({ seed }) => (
  <Container>
    <SiteHeader/>
    <Switch>
      <Route
        exact
        path="/" 
        render={() => <SiteHome seed={seed}/>}/>
      <Route 
        path="/bio" 
        render={() => <SiteBio seed={seed}/>}/>
      <Route 
        path="/contact" 
        render={() => <SiteContact seed={seed}/>}/>
      <Route 
        path="/cv" 
        render={() => <SiteCV seed={seed}/>}/>
      <Route 
        path="/film/:film" 
        render={props => <SiteFilm seed={seed} {...props}/>}/>
      <Route 
        path="/menu" 
        render={() => <SiteMenu seed={seed}/>}/>
      <Route 
        path="/project/:project" 
        render={props => <SiteProject seed={seed} {...props}/>}/>
    </Switch>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Site.propTypes = {
  seed: object.isRequired
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 0;
  position: relative;
  width: 100vw;
  font-family: Raleway;
`

export default Site