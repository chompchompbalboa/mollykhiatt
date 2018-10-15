//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHomeCoverImage = () => (
  <Image id="site-home-cover-image"/>
)
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(/assets/Site/SiteCover/current.jpg);
  transition: background-image 2.5s ease;
`

export default SiteHomeCoverImage