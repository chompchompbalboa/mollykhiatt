//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SiteMenuDesktopCategory extends Component {

  state = {
    isHovering: false
  }

  render() {
    const {
      category,
      height,
      listItems
    } = this.props
    const {
      isHovering
    } = this.state

    return (
      <Container
        height={height}
        onMouseEnter={() => this.setState({ isHovering: true })}
        onMouseLeave={() => this.setState({ isHovering: false })}>
        <Overlay
          category={category}
          isHovering={isHovering}>
          <OverlayText>
            {category}
          </OverlayText>
        </Overlay>
        <ListContainer
          isHovering={isHovering}>
          <List>
            <ListHeader>{category}</ListHeader>
            {listItems.map((listItem, index) => {
              return (
                <ListItem
                  key={index}>
                  <StyledLink
                    to={listItem.href}>
                    {listItem.title}
                  </StyledLink>
                </ListItem>
            )})}
          </List>
        </ListContainer>
      </Container>
    )
  }

}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteMenuDesktopCategory.propTypes = {
  category: string.isRequired,
  height: string.isRequired,
  listItems: array.isRequired
}

SiteMenuDesktopCategory.defaultProps = {
  category: "about",
  height: "calc(50% - 0.5vw)"
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: ${props => props.height};
`

const Overlay = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: ${props => props.isHovering ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: ${props => "url(/assets/Site/SiteMenuWeb/" + props.category + ".jpg)"};
`

const OverlayText = styled.div`
  color: white;
`

const ListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: ${props => props.isHovering ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`

const List = styled.ul`
  list-style: none;
  letter-spacing: 1px;
  font-size: 12px;
  text-transform: uppercase;
  color: black;
`

const ListItem = styled.li`
  text-align: center;
`

const ListHeader = styled(ListItem)`
  margin: 0 0 1.5vh 0
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
  color: rgba(200, 200, 200, 1);
  &:hover {
    color: rgba(150, 150, 150, 1)
  }
`