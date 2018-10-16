//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHomeCoverDescription = () => (
  <StyledLink
    to="academic/cantagalo-learning-lab">
    <Description>
      Cantagalo Learning Lab
    </Description>
  </StyledLink>  
)
    
//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
const StyledLink = styled(Link)`
  z-index: 0;
  position: relative;
  top: 81vh;
  left: 0;
  height: 10vh;
  width: 100%;
  background-color: rgba(255,255,255,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  text-decoration: none;
  @media (max-width: 24em){
      flex-direction: column;
  }
`

const Description = styled.div`
  margin: 0 4px 0 0;
  color: black;
  text-transform: uppercase;
`

export default SiteHomeCoverDescription