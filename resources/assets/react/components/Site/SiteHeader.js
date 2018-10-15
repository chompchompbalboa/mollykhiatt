//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { shape, string } from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import SiteHeaderMenu from './SiteHeaderMenu.js'
import SiteHeaderName from './SiteHeaderName.js'
import SiteHeaderContact from './SiteHeaderContact.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHeader = ({ history, location: { pathname } }) => {

  const isHomeActive = pathname === "/"
  const isMenuActive = pathname === "/menu"
  const backgroundColor = isHomeActive ? "transparent" : "white"
  const fontColor = isHomeActive ? "white" : "black"

  return (
    <Container 
      id="site-header"
      backgroundColor={backgroundColor}
      fontColor={fontColor}>
      <SiteHeaderMenu
        fontColor={fontColor}
        history={history}
        isMenuActive={isMenuActive}/>
      <SiteHeaderName
        fontColor={fontColor}/>
      <SiteHeaderContact
        fontColor={fontColor}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHeader.propTypes = {
  location: shape({
    pathname: string.isRequired
  }).isRequired
}

SiteHeader.defaultProps = {
  location: {
    pathname: "/"
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-Index: 1;
  position: fixed;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  font-size: 18px;
  color: ${props => props.fontColor};
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
`

export default withRouter(SiteHeader)