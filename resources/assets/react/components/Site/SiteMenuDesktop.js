//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { array, shape } from 'prop-types'
import styled from 'styled-components'

import SiteMenuDesktopCategory from './SiteMenuDesktopCategory'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteMenuDesktop = ({ categories: { about, academic, art, film, photography, professional } }) => (
  <Container id="site-menu-desktop">
    <Grid>
      <ColumnOne>
        <SiteMenuDesktopCategory
          category="photography"
          listItems={photography}/>
        <SiteMenuDesktopCategory
          category="art"
          listItems={art}/>
      </ColumnOne>
      <ColumnTwo>
        <SiteMenuDesktopCategory
          category="Academic"
          height="100%"
          listItems={academic}/>
      </ColumnTwo>
      <ColumnThree>
        <SiteMenuDesktopCategory
          category="Professional"
          listItems={professional}/>
        <SiteMenuDesktopCategory
          category="Film"
          listItems={film}/>
      </ColumnThree>
      <ColumnFour>
        <SiteMenuDesktopCategory
          category="About"
          height="100%"
          listItems={about}/>
      </ColumnFour>
    </Grid>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteMenuDesktop.propTypes = {
  categories: shape({
    academic: array.isRequired,
    art: array.isRequired,
    film: array.isRequired,
    photography: array.isRequired,
    professional: array.isRequired
  })
}
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: none;
  @media (min-width: 64em){
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      backface-visibility: hidden;
      top: 10vh;
      left: 0;
      width: 100vw;
      min-height: 90vh;
      font-size: 18px;
      text-transform: uppercase;
  }
`

const Grid = styled.div`
  width: 80vw;
  height: 33vh;
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  padding: 0 0.5vw 0 0.5vw;
  height: 100%;
` 

const ColumnOne = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24%;
`
const ColumnTwo = styled(Column)`
  width: 35%;
`
const ColumnThree = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
`

const ColumnFour = styled(Column)`
  width: 19%;
`

export default SiteMenuDesktop