//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, func } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteProjectArrows = ({ handleArrowClick, leftArrowVisible, rightArrowVisible }) => (
  <Container>
    <LeftArrow
      onClick={() => handleArrowClick("LEFT")}
      src="/assets/Site/SiteProjectArrows/arrow.png"
      visible={leftArrowVisible}/>
    <RightArrow 
      onClick={() => handleArrowClick("RIGHT")}
      src="/assets/Site/SiteProjectArrows/arrow.png"
      visible={rightArrowVisible}/>
  </Container> 
)
    
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteProjectArrows.propTypes = {
  handleArrowClick: func.isRequired,
  leftArrowVisible: bool.isRequired,
  rightArrowVisible: bool.isRequired
}

SiteProjectArrows.defaultProps = {
  leftArrowVisible: false,
  rightArrowVisible: false
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  @media (max-width: 64em) {
    display: none;
  }
`

const Arrow = styled.img`
  cursor: pointer;
  position: fixed;
  height: 3vw;
  width: 3vw;
`

const LeftArrow = styled(Arrow)`
  display: ${props => props.visible ? "block" : "none"};
  top: 47.5vh;
  left: 0.5vw;
`

const RightArrow = styled(Arrow)`
  display: ${props => props.visible ? "block" : "none"};
  top: 47.5vh;
  left: 96.5vw;
  transform: rotate(180deg);
`

export default SiteProjectArrows