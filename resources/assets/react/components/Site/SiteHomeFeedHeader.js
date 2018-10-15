//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
var SiteHomeFeedHeader = () => (
  <Container
    id="site-container-feed-header">
    <Header>
      Selected Work
    </Header>
  </Container>
)
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 0 0 -3vh 0;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  letter-spacing: 0.1vh;
  font-size: 14px;
  text-transform: uppercase;
`

export default SiteHomeFeedHeader