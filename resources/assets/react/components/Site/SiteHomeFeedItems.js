//-----------------------------------------------------------------------------
// Requires
//-----------------------------------------------------------------------------
import React from 'react'
import _ from 'lodash'
import { object } from 'prop-types'
import styled from 'styled-components'

import SiteHomeFeedItemsItem from './SiteHomeFeedItemsItem.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHomeFeedItems = ({ projects }) => (
  <Container 
    id="site-home-feed-items">
    {_.map(projects, (project, index) => {
      if(project.category !== "film") {
        return (
          <SiteHomeFeedItemsItem 
            key={index}
            project={project}
            projectIndex={Number(index)}/>
        )
      }
    })}
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHomeFeedItems.propTypes = {
  projects: object.isRequired
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export default SiteHomeFeedItems