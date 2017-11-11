import React, { Component } from 'react';
import Radium from 'radium'
import PropTypes from 'prop-types'

import {header_height} from './header/header_style'
import grid from '../style/grid'
import mq from '../style/media_queries'
import typography from '../style/typefaces'

const default_style = {

    ...typography.mobile.titleText,
    ...{
      textAlign: "center",
      // paddingTop: header_height.mobile + grid.row(3),
      width: "100%",
      height: grid.row(1),
      marginBottom: grid.row(2)
    },

    [mq.desktop]:{
      ...typography.desktop.titleText,
      ...{
        // Copy same properties as on mobile version
        // paddingTop: header_height.desktop + grid.row(3)
      }
    }
}

class Title extends React.Component{
  render(){
    return(
      <div style={{...default_style, ...this.props.injectedStyle}}>
        {this.props.value}
      </div>
    )
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,

  // Custom style to inject
  injectedStyle: PropTypes.object
}

export default Radium(Title)
