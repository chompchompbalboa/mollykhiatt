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
const SiteHeaderContact = ({ fontColor }) => (
  <Container
    id="site-header-share">
    <StyledLink
      to="/contact"
      color={fontColor}>
      Contact
    </StyledLink>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHeaderContact.propTypes = {
  fontColor: string.isRequired
}

SiteHeaderContact.defaultProps = {
  fontColor: "white"
}
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 30vw;
  padding-right: 3vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-transform: uppercase;
  @media (max-width: 48em){
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
`
export default SiteHeaderContact