//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import SiteHomeCoverDescription from './SiteHomeCoverDescription.js'
import SiteHomeCoverImage from './SiteHomeCoverImage.js'
import SiteHomeCoverOverlay from './SiteHomeCoverOverlay.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHomeCover = () => (
  <Container 
    id="site-home-cover">
    <SiteHomeCoverOverlay/>
    <SiteHomeCoverImage/>
    <SiteHomeCoverDescription/>
  </Container> 
)
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: -1;
  position: fixed;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  height: 91vh;
  width: 100%;
`
export default SiteHomeCover