//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import _ from 'lodash'
import { object, shape, string } from 'prop-types'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteFilm = ({ location, seed: { projects } }) => {

  const film = _.find(projects, project => {return "/" + project.href === location.pathname})
  
  const heightToWidthRatio = film.embed.height / film.embed.width
  const iframeDimensions = {
    lg: {
      width: window.innerWidth * 0.6,
      height: window.innerWidth * 0.6 * heightToWidthRatio
    },
    sm: {
      width: window.innerWidth * 0.9,
      height: window.innerWidth * 0.9 * heightToWidthRatio
    }
  }
        
  return (
    <Container 
      id="site-film">
      <InfoContainer>
        <Title>
          {film.title}
        </Title>
        <Subtitle>
          {film.tag}&nbsp;&nbsp;|&nbsp;&nbsp;{film.location}
        </Subtitle>
      </InfoContainer>
      <FilmContainer>
        <MobileFilm
          allowFullScreen
          width={iframeDimensions.sm.width}
          height={iframeDimensions.sm.height}
          frameBorder={film.embed.frameborder}
          src={film.embed.src}/>
        <DesktopFilm
          allowFullScreen
          width={iframeDimensions.lg.width}
          height={iframeDimensions.lg.height}
          frameBorder={film.embed.frameborder}
          src={film.embed.src}/>
      </FilmContainer>
    </Container>
  )
}
    
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
SiteFilm.propTypes = {
  seed: shape({
    projects: object.isRequired
  }),
  location: shape({
    pathname: string.isRequired
  })
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 48em){
    flex-direction: column;
    justify-content: center;
    margin: -5vh 0 0 0;
  }
`

const InfoContainer = styled.div`
  position: relative;
  display: inline-flex;
  height: 100%;
  width: 30vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 48em){
    width: 90vw;
    height: 30%;
  }
`

const Title = styled.div`
  margin: 10vh 0 0 0;
  text-transform: uppercase;
  font-size: 16px;
  @media (max-width: 48em){
    margin: -3vh 0 0 0;
  }
`

const Subtitle = styled.div`
  margin: 1vh 0 0 0;
  text-transform: uppercase;
  font-size: 11px;
  color: rgba(200, 200, 200, 1);
`

const FilmContainer = styled.div`
  margin: 0 5vw 0 0;
  @media (max-width: 48em){
    margin: 0;
  }
`

const Film = styled.iframe``

const MobileFilm = styled(Film)`
  @media (min-width: 48em){
    display: none;
  }
`

const DesktopFilm = styled(Film)`
  @media (max-width: 48em){
    display: none;
  }
`

export default SiteFilm