//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import _ from 'lodash'
import { object, shape } from 'prop-types'
import styled from 'styled-components'

import SiteMenuMobile from './SiteMenuMobile.js'
import SiteMenuDesktop from './SiteMenuDesktop.js'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteMenu = ({ seed: { projects } }) => {

  const filterProjectsByCategory = (category) => {
    return _.filter(projects, (project) => {return project.category === category})
  }

  const categories = {
    about: [
      {title: "Bio", href: "/bio"},
      {title: "CV", href: "/cv"},
      {title: "Contact", href: "/contact"}
    ],
    academic: filterProjectsByCategory("academic"),
    art: filterProjectsByCategory("art"),
    film: filterProjectsByCategory("film"),
    photography: filterProjectsByCategory("photography"),
    professional: filterProjectsByCategory("professional"),
  }

  return (
    <Container 
      id="site-menu">
      <SiteMenuMobile
        categories={categories}/>
      <SiteMenuDesktop
        categories={categories}/>
    </Container> 
  ) 
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteMenu.propTypes = {
  seed: shape({
    projects: object.isRequired
  }).isRequired
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.section`
`
export default SiteMenu