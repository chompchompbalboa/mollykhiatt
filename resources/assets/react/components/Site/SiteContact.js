//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteContact = ({ seed: { email, phone } }) => (
  <Container
    id="site-contact">
    <Header>Contact</Header>
    <Info
      href={"tel: " + phone}>
      PHONE (USA): {phone}
    </Info>
    <Info
      href={"mailto: " + email}>
      EMAIL: {email}
    </Info>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteContact.propTypes = {
  seed: shape({
    phone: string.isRequired,
    email: string.isRequired
  })
}

SiteContact.defaultProps = {
  seed: {
    email: "mollykhiatt@gmail.com",
    phone: "+1 206 307 5405"
  }
}
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  margin: -5vh 0 1.5vh 0;
  font-size: 15px;
  color: black;
  text-transform: uppercase;
`

const Info = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: rgba(150, 150, 150, 1);
`

export default SiteContact