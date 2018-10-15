//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, shape, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteProjectTilesTile = ({ dimensions, tile }) => {
  return (
    <Container
      dimensions={dimensions}>
      <Image
        src={tile.img.src}/>
    </Container> 
  )  
}
    
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteProjectTilesTile.propTypes = {
  dimensions: shape({
    height: number.isRequired,
    margin: shape({
      lg: number.isRequired
    }).isRequired
  }).isRequired,
  tile: shape({
    img: shape({
      src: string.isRequired
    }).isRequired
  }).isRequired
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  display: inline-block;
  float: left;
  height: ${props => props.dimensions.height + "px"};
  margin-left: ${props => props.dimensions.margin.lg + "px"};
`

const Image = styled.img`
  position: relative;
  width: auto;
  height: 100%;
`

export default SiteProjectTilesTile