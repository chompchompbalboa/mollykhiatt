//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHeaderName = ({ fontColor }) => (
  <Container 
    id="site-header-name">
    <StyledLink 
      to="/"
      color={fontColor}>
      Molly Worth
    </StyledLink>
  </Container>
)
    
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHeaderName.propTypes = {
  fontColor: string.isRequired
}
    
SiteHeaderName.defaultProps = {
  fontColor: "white"
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 33vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em){
    width: 49vw;
    padding-right: 6vw;
    justify-content: flex-end;
  }
`

const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
`

export default SiteHeaderName