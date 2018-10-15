//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteHomeFeedItemsItem = ({ project, projectIndex }) => {

  const column = Number(projectIndex) % 2 == 0 ? "RIGHT" : "LEFT"

  return (
    <Container
      column={column}>
      <LinkContainer 
        to={project.href}
        column={column}>
        <StyledImage
          src={project.feed_photo}/>
        <Title>
          {project.title}
        </Title>
      </LinkContainer>
    </Container>
  )
}
    
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteHomeFeedItemsItem.propTypes = {
  project: shape({
    feed_photo: string.isRequired,
    href: string.isRequired,
    title: string.isRequired
  }).isRequired,
  projectIndex: number.isRequired
}

SiteHomeFeedItemsItem.defaultProps = {
  project: {
    feed_photo: "/default.jpg",
    href: "/",
    title: "Default Title"
  },
  projectIndex: 0
}
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: ${props => props.column === "LEFT" ? "3vh 0 3vh 5%" : "3vh 5% 3vh 0"};
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em){
    margin: 3vh 0 3vh 0;
    width: 80%;
  }
`

const LinkContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  align-items: ${props => props.column === "LEFT" ? "flex-end" : "flex-start"};
  @media (max-width: 48em) {
      align-items: flex-start;
  }
  &:active {
      opacity: 0.7;
  }
  &:hover {
      opacity: 0.7;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`

const Title = styled.div`
  margin: 16px 0 0 0;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 300;
  color: gray;
  letter-spacing: 2px;
`

export default SiteHomeFeedItemsItem