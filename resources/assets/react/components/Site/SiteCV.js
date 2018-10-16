//-----------------------------------------------------------------------------
// Imports 
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteCV = () => (
  <Container
    id="site-cv">
    <List>
      <ListHeader>Education</ListHeader>
      <ListItem>MArchD | Oxford School of Arch. | UK</ListItem>
      <ListItem>BArch | University of Washington | US</ListItem>
    </List>
    <List>
      <ListHeader>Experience</ListHeader>
      <ListItem>Hassell | UK | 2018</ListItem>
      <ListItem>Hassell | AUS | 2017</ListItem>
      <ListItem>WilkinsonEyre | UK | 2016</ListItem>
      <ListItem>Krause Architects | UK | 2015</ListItem>
      <ListItem>Elkus Manfredi Architects | US | 2014</ListItem>
      <ListItem>WilkinsonEyre | UK | 2013</ListItem>
      <ListItem>Shigeru Ban Architects | JP | 2012</ListItem>
      <ListItem>Johnson Architecture | US | 2011</ListItem>
    </List>
    <List>
      <ListHeader>Software</ListHeader>
      <ListItem>Revit</ListItem>
      <ListItem>Rhino</ListItem>
      <ListItem>MicroStation</ListItem>
      <ListItem>Adobe Suite</ListItem>
      <ListItem>AutoCAD</ListItem>
      <ListItem>SketchUp</ListItem>
      <ListItem>V-Ray</ListItem>
      <ListItem>Grasshopper</ListItem>
    </List>
  </Container>
)
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  text-align: center;
`

const ListItem = styled.li`
  margin: 0.5vh 0 0.5vh 0;
  color: rgba(200, 200, 200, 1);
  font-size: 15px;
  white-space: nowrap;
`

const ListHeader = styled(ListItem)`
  margin: 2vh 0 1.5vh 0;
  text-transform: uppercase;
  color: black;
`
export default SiteCV