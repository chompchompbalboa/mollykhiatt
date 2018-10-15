//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

import icons from './icons'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
export default class Icon extends Component {

  static propTypes = {
    icon: string,
    color: string,
    size: string
  }

  static defaultProps = {
    icon: "menu",
    color: "black",
    size: "24px"
  }

  render() {
		const { icon, color, size } = this.props
    const styles = {
      svg: {
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      path: {
        fill: color,
      },
    }

    return (
			<svg
        style={styles.svg}
        width={`${size}`}
        height={`${size}`}
        viewBox="0 0 1024 1024"
        >
        <path
          style={styles.path}
          d={icons[icon]}
        ></path>
			</svg>
  )}
}
