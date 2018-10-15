//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import _ from 'lodash'
import { object, shape, string } from 'prop-types'
import styled from 'styled-components'

import SiteProjectArrows from './SiteProjectArrows.js'
import SiteProjectTiles from './SiteProjectTiles.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SiteProject extends Component {

  static propTypes = {
    location: shape({
      pathname: string.isRequired
    }).isRequired,
    seed: shape({
      projects: object.isRequired
    }).isRequired
  }

  state = {
    currentTile: 0,
    leftArrowVisible: false,
    project: _.find(this.props.seed.projects, project => {return "/" + project.href === this.props.location.pathname}),
    rightArrowVisible: true
  }

  handleArrowClick = (direction) => {
    const {
      currentTile,
      project,
    } = this.state
    const max = Object.keys(project.tiles).length
    let nextCurrentTile = null
    if (direction === "RIGHT") {
        nextCurrentTile = (currentTile + 1 >= max ? max : currentTile + 1)
    }
    else if (direction === "LEFT") {
        nextCurrentTile = (currentTile - 1)
    }
    const nextLeftArrowVisible = nextCurrentTile !== 0
    const nextRightArrowVisible = nextCurrentTile !== max
    this.setState({
      currentTile: nextCurrentTile,
      leftArrowVisible: nextLeftArrowVisible,
      rightArrowVisible: nextRightArrowVisible
    })
  }

  render() {
    const {
      currentTile,
      leftArrowVisible,
      project,
      rightArrowVisible
    } = this.state

    const dimensions = getTilesContainerDimensions(project.tiles)
  
    return (
      <Container
        id="site-project">
        <SiteProjectArrows
          handleArrowClick={this.handleArrowClick}
          leftArrowVisible={leftArrowVisible}
          rightArrowVisible={rightArrowVisible}/>
        <SiteProjectTiles
          currentTile={currentTile}
          dimensions={dimensions}
          project={project}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

//-----------------------------------------------------------------------------
// Dimension Calculations
//-----------------------------------------------------------------------------

const getTilesContainerDimensions = (tiles) => {
  return {
    width: getTilesContainerDimensionsWidth(tiles),
    height: window.innerHeight * 0.75 + 20
  }
}

const getTilesContainerDimensionsWidth = (tiles) => {
  const height = window.innerHeight * 0.75
  const descriptionWidthLg = window.innerWidth * 0.3
  const descriptionWidthSm = window.innerWidth * 0.6
  const descriptionMarginLeft = window.innerWidth * 0.08
  const descriptionMarginRight = window.innerWidth * 0.03
  const tilesMargin = window.innerWidth * 0.05
  const containerExtra = window.innerWidth * 0.01
  let width = 0
  let count = 0
  let imageLeftsLg = {}
  let imageLeftsSm = {}
  let imageWidths = {}

  _.map(tiles, tile => {
    const ratio = Number(tile.img.width) / Number(tile.img.height)
    const imageWidth = height * ratio
    width = width + imageWidth + tilesMargin
    count = count + 1
    imageWidths[count] = imageWidth
    imageLeftsLg[count] = descriptionWidthLg + descriptionMarginLeft + descriptionMarginRight + width
    imageLeftsSm[count] = descriptionWidthSm + descriptionMarginLeft + descriptionMarginRight + width
  })

  var containerWidthLg = width + descriptionWidthLg + descriptionMarginLeft + descriptionMarginRight + containerExtra
  var containerWidthSm = width + descriptionWidthSm + descriptionMarginLeft + descriptionMarginRight + containerExtra
  return {
    container: {
      width: {
        lg: containerWidthLg,
        sm: containerWidthSm
      }
    },
    description: {
      width: {
        lg: descriptionWidthLg,
        sm: descriptionWidthSm
      },
      margin: {
        left: descriptionMarginLeft,
        right: descriptionMarginRight
      }
    },
    imageLeftsLg: imageLeftsLg,
    imageLeftsSm: imageLeftsSm,
    imageWidths: imageWidths,
    tiles: {
      height: height,
      margin: {
        lg: tilesMargin,
        sm: tilesMargin
      }
    },
    windowDimensions: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
}