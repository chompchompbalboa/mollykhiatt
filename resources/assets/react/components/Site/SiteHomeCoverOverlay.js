//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SiteCoverOverlay extends Component {

  state = {
    opacity: 0.25
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const height = window.innerHeight;
    const opacity = ((top/height) / 1.5) + 0.25;
    if(opacity > 0.24 && opacity < 0.75){
      this.setState({
        opacity: opacity
      })
    } 
  }

  render() {
    const {
      opacity
    } = this.state

    return (
      <Container opacity={opacity}/>
    )
  }   
}
    
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 99;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => "rgba(0,0,0," + props.opacity + ")"};
  @media (max-width: 48em) {
      background-color: rgba(0,0,0,0.25);
  }
`