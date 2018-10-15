//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import SiteHomeFeed from './SiteHomeFeed.js'
import SiteHomeCover from './SiteHomeCover.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHome = ({ seed }) => (
  <Container 
    id="site-home">
    <SiteHomeCover/>
    <SiteHomeFeed
      seed={seed}/>
  </Container> 
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHome.propTypes = {
  seed: object.isRequired
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

export default SiteHome