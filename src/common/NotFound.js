import React, { Component } from 'react';
import Radium from 'radium'
import errorStateImage from '../data/assets/error_state.png'
import mq from '../style/media_queries'
import grid from '../style/grid'
import {footer_height} from './footer_style'
import {header_height} from './header/header_style'

const style = {
  container:{
    textAlign: "center",

    [mq.desktop]:{
      textAlign: "center",
      height: `calc(100vh - ${footer_height}px)`
    }
  },

  content:{
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    marginTop: `-${header_height.mobile / 2}px`,
    width: grid.maxWidthMobile,

    [mq.desktop]:{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      marginTop: `-${header_height.desktop}`,
      width: "100%"
    }
  },

  image:{

    width: `calc(${grid.maxWidthMobile} * 0.55px)`,
    marginBottom: grid.row(1),

    [mq.desktop]:{
      width: grid.col(3),
      marginBottom: grid.row(2)
    }
  },
  text:{
    fontSize: 30,
    lineHeight: "44px",
    fontFamily: "Montserrat",

    [mq.desktop]:{
      fontSize: 48,
      fontFamily: "Montserrat"
    }
  }
}

class NotFound extends React.Component{
  render(){
    return(
      <div
        id="not_found_component"
        style={style.container}>
        <div
          id="not_found_root"
          style={style.content}>
          <img
            id="error_state_image"
            src={errorStateImage}
            style={style.image}/>
          <div style={style.text}>
            00p5, th3 p4g3 d035n't 3x15t
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(NotFound);
