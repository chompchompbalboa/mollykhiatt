//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, object, string } from 'prop-types'
import styled from 'styled-components'

import Icon from '../lib/Icon/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHeaderMenu = ({ fontColor, history, isMenuActive }) => {
  
  const icon = isMenuActive ? "exit" : "menu"
  const text = isMenuActive ? "Back" : "Menu"

  const handleClick = () => {
    isMenuActive && history.goBack()
    !isMenuActive && history.push("/menu")
  }

  return (
    <Container
      id="site-header-menu">
      <LinkContainer
        onClick={() => handleClick()}>
        <MobileLink>
          <Icon
            icon={icon}
            color={fontColor}
            size="30px"/>
        </MobileLink>
        <DesktopLink
          color={fontColor}>
          {text}
        </DesktopLink>
      </LinkContainer>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHeaderMenu.propTypes = {
  fontColor: string.isRequired,
  history: object.isRequired,
  isMenuActive: bool.isRequired
}

SiteHeaderMenu.defaultProps = {
  fontColor: "white",
  isMenuActive: false
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 33vw;
  padding-left: 3vw;
  @media (max-width: 48em){
    width: 49vw;
    padding-left: 6vw;
  }
`

const LinkContainer = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const MobileLink = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 48em){
    display: none;
  }
`

const DesktopLink = styled.div`
  margin: 0 0 0 4px;
  color: ${props => props.color};
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 48em){
    display: none;
  }
`

export default SiteHeaderMenu