import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'
import PropTypes from 'prop-types'

import model from './model'
import mq from '../../style/media_queries'
import Content from '../../common/Content'
import grid from '../../style/grid'

const border = 1;

const inline_style = {

    border: `${border}px solid black`,
    width: grid.col(3) - border * 2,
    height: grid.row(11) - border * 2,
    display: "inline-block",
    filter: "grayscale(100%)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "filter 0.1s ease-in",

    ":hover":{
      filter: "grayscale(0%)"
    }
}

class ProjectGroup extends React.Component {

  render(){
    let background = {
      backgroundImage: `url(${this.props.data.image})`
    };

    let imageStyle = {...background, ... inline_style}
    return(<div style={imageStyle}/>);
  }
}

ProjectGroup.propTypes = {
  data: PropTypes.instanceOf(model).isRequired
}

export default Radium(ProjectGroup)
