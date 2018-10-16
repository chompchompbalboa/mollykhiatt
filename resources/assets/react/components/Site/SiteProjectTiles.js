//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import _ from 'lodash'
import { number, object } from 'prop-types'
import styled from 'styled-components'

import SiteProjectTilesDescription from './SiteProjectTilesDescription.js'
import SiteProjectTilesTile from './SiteProjectTilesTile.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SiteProjectTiles extends Component {

  static propTypes = {
    dimensions: object.isRequired,
    currentTile: number.isRequired,
    project: object.isRequired
  }

  componentDidUpdate = () => {
    this.scrollTo(this.getScrollLeft(), 500)
  }

  scrollTo = (to, duration) => {
    const start = this.section.scrollLeft
    const change = to - start
    const increment = 20
    this.animateScroll(0, start, change, duration, increment)
  }

  getScrollLeft = () => {
    const {
      currentTile,
      dimensions
    } = this.props
    let scrollLeft = 0
    if(currentTile !== 0) {
      const containerWidth = Math.floor(dimensions.width.windowDimensions.width * 0.9)
      const imageWidth = Math.floor(dimensions.width.imageWidths[currentTile])
      const imageAdjustment = Math.floor((containerWidth + imageWidth) / 2)
      const imageLeft = Math.floor(dimensions.width.imageLeftsLg[currentTile])
      scrollLeft = imageLeft - imageAdjustment
    }
    return scrollLeft;
  }

  easeInOut = (currentTime, start, change, duration) => {
    currentTime /= duration / 2
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start
    }
    currentTime -= 1
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
  }

  animateScroll = (elapsedTime, start, change, duration, increment) => {        
    elapsedTime += increment
    var position = this.easeInOut(elapsedTime, start, change, duration)                       
    this.section.scrollLeft = position
    if (elapsedTime < duration) {
        setTimeout(() => {this.animateScroll(elapsedTime, start, change, duration, increment)}, increment)
    }
  }

  render() {
    const {
      dimensions,
      project
    } = this.props
    return (
      <Container 
        id="site-project-tiles-wrapper"
        dimensions={dimensions}>
        <ScrollContainer 
          innerRef={(c) => this.section = c}
          dimensions={dimensions}>
          <TilesContainer
            dimensions={dimensions}>
            <SiteProjectTilesDescription
              dimensions={dimensions.width.description}
              project={project}/>
            {_.map(project.tiles, (tile, index) => {
              return (
                <SiteProjectTilesTile 
                  key={index}
                  dimensions={dimensions.width.tiles}
                  tile={tile}/>
              )
            })}
          </TilesContainer>
        </ScrollContainer>
      </Container>
    )
  }
}
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: calc(15vh + 10px);
  left: 0;
  width: 100vw;
  height: ${props => props.dimensions.height - 20 + "px"};
  overflow-x: hidden;
  webkit-overflow-scrolling: touch;
  @media (min-width: 64em) {
    left: 5vw;
    width: 90vw;
  }
`

const ScrollContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.dimensions.height + "px"};
  overflow-x: scroll;
  overflow-y: hidden;
  webkit-overflow-scrolling: touch;
`

const TilesContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: ${props => props.dimensions.height + "px"};
  width: ${props => props.dimensions.width.container.width.lg + "px"};
  display: block;
  @media (max-width: 48em) {
    width: ${props => props.dimensions.width.container.width.sm + "px"};
  }
`