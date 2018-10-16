//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteBio = ({ seed: { about } }) => (
  <Container 
    id="site-bio">
    <Headshot 
      src="assets/Site/SiteBio/about.jpg"/>
    <About>
        {about}
    </About>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteBio.propTypes = {
  seed: shape({
    about: string.isRequired
  }).isRequired
}

SiteBio.defaultProps = {
  seed: {
    about: "Here's a brief description about me."
  }
}
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
      flex-direction: column;
  }
`

const Headshot = styled.img`
width: auto;
height: 70vh;
margin: 0 7vw 0 0;
@media (max-width: 48em) {
    height: 55vh;
    width: auto;
    margin: 5vh 0 4vh 0;
}
@media (min-width: 48em) and (max-width: 64em) {
    height: 55vh;
    margin: 0 4vw 0 5vw
} 
`

const About = styled.div`
  width: 50vw;
  text-align: justify;
  font-size: 15px;
  color: black;
  @media (max-width: 48em) {
      width: 80vw;
      margin: 0 0 4vh 0;
  };
  @media (min-width: 48em) and (max-width: 64em) {
      margin: 0 4vw 0 0;
  } 
`

export default SiteBio