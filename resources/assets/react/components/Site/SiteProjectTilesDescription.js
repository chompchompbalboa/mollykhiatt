//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, shape, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteProjectTilesDescription = ({ dimensions, project: { location, tag, title }}) => (
  <Container
    dimensions={dimensions}>
    <Title>
      {title}
    </Title>
    <Subtitle>
      {tag}&nbsp;&nbsp;|&nbsp;&nbsp;{location}
    </Subtitle>
  </Container>   
)

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
SiteProjectTilesDescription.propTypes = {
  dimensions: shape({
    margin: shape({
      left: number.isRequired,
      right: number.isRequired
    }),
    width: shape({
      lg: number.isRequired,
      sm: number.isRequired
    })
  }).isRequired,
  project: shape({
    location: string.isRequired,
    tag: string.isRequired,
    title: string.isRequired
  }).isRequired
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  margin-top: 5vh;
  margin-left: ${props => props.dimensions.margin.left + "px"};
  margin-right: ${props => props.dimensions.margin.right + "px"};
  display: inline-flex;
  float: left;
  height: 100%;
  width: ${props => props.dimensions.width.lg + "px"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 48em) {
      width: ${props => props.dimensions.width.sm + "px"};
  }
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 16px;
`

const Subtitle = styled.div`
  margin: 1vh 0 0 0;
  text-transform: uppercase;
  font-size: 11px;
  color: rgba(200, 200, 200, 1);
`

export default SiteProjectTilesDescription