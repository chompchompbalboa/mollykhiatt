//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object, shape } from 'prop-types'
import styled from 'styled-components'

import SiteHomeFeedHeader from './SiteHomeFeedHeader.js'
import SiteHomeFeedItems from './SiteHomeFeedItems.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHomeFeed = ({ seed: { projects } }) => (
  <Container
    id="site-home-feed">
    <FeedContainer>
      <SiteHomeFeedHeader/>
      <SiteHomeFeedItems 
        projects={projects}/>
    </FeedContainer>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHomeFeed.propTypes = {
  seed: shape({
    projects: object.isRequired
  }).isRequired
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 2;
  position: relative;
  top: 90.5vh;
  left: 0;
  width: 100%;
  overflow: hidden;
`

const FeedContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
`
export default SiteHomeFeed