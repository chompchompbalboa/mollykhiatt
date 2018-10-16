//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { array, arrayOf, shape, string } from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Components
//-----------------------------------------------------------------------------
const SiteMenuMobile = ({ categories: { about, academic, art, film, photography, professional } }) => (
  <Container 
    id="site-menu-mobile">
      <Divider/>
      <List 
        header="Academic"
        listItems={academic}/>
      <Divider/>
      <List 
        header="Professional"
        listItems={professional}/>
      <Divider/>
      <List 
        header="Art"
        listItems={art}/>
      <Divider/>
      <List 
        header="Photography"
        listItems={photography}/>
      <Divider/>
      <List 
        header="Film"
        listItems={film}/>
      <Divider/>
      <List 
        header="About"
        listItems={about}/>
  </Container>
)

const List = ({ header, listItems }) => (
  <StyledList>
    <ListHeader>
      {header}
    </ListHeader>
    {listItems && listItems.map((listItem, index) => {
      const {
        href,
        title
      } = listItem
      return (
        <ListItem 
          key={index} 
          href={href} 
          text={title}/>
    )})}
  </StyledList>
)

const ListItem = ({ text, href }) => (
  <StyledListItem>
    <StyledLink
      to={href}>
      {text}
    </StyledLink>
  </StyledListItem>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteMenuMobile.propTypes = {
  categories: shape({
    academic: array.isRequired,
    art: array.isRequired,
    film: array.isRequired,
    photography: array.isRequired,
    professional: array.isRequired
  })
}

List.propTypes = {
  header: string,
  listItems: arrayOf(shape({
    href: string,
    title: string
  }))
}

ListItem.propTypes = {
  href: string,
  text: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  top: 10vh;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  @media (min-width: 48em){
    display: none;
  }
`

const Divider = styled.div`
  width: 100vw;
  height: 1px;
  background-color: rgba(200, 200, 200, 1);
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  letter-spacing: 2px;
`

const ListHeader = styled.li`
  margin: 2vh 0 1.5vh 0;
  font-size: 0.9em;
`

const StyledListItem = styled.li`
  margin: 1.5vh 0 1.5vh 0;
  font-size: 0.9em;
  color: rgba(200, 200, 200, 1);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(200, 200, 200, 1);
`

export default SiteMenuMobile