import React, {Component} from 'react'
import Radium from 'radium'
import Media from 'react-media'
import PropTypes from 'prop-types';

import mq from '../../../style/media_queries'
import project_model from './model'
import mobile_style from './mobile_style'
import desktop_style from './desktop_style'


/*
  This class wrapps multiple Media components to implement media query behaviour.
  This way is required because for some reason "hover" pseudoelements do not
  trigger when written as a child of a style property whose key is a media query.

  For example:

  {
    width: "100px",
    height: "100px",
    "@media only screen and (max-width: 1234px)": {
      ":hover":{
        // something
      }
    }
  }

  Since there is no way to get the callback when media query triggers with
  inline styling, this is temporary solution.

  TODO: fix this with other styling solution like Css-module or similar.
  TODO: Figure out how to get rid of the wrapping div element on Media elements
*/
class Project extends React.Component{
  render(){
    return (
      <div style={{display: "inline-block"}}>
        <Media query={mq.mobile_query}>
            {mobile_markup_for(this.props.data)}
        </Media>
        <Media query={mq.desktop_query}>
            {desktop_markup_for(this.props.data)}
        </Media>
      </div>
    )
  }
}

const mobile_markup_for = (project) => {
  let bgExtension = {
    backgroundImage: `url(${project.image})`
  }
  let image_style = {...mobile_style.image, ...bgExtension};

  return(
     <div
       id="project"
       key="project"
       style={mobile_style}>
        <div
          id="image"
          key="image"
          style={image_style}/>
        <div
          id="info"
          key="info"
          style={mobile_style.info.container}>
          <div
            id="title"
            key="title"
            style={mobile_style.info.title}>
              {project.name}
          </div>
          <div
            id="role"
            key="role"
            style={mobile_style.info.role}>
              {project.role}
          </div>
        </div>
      </div>
  );
}

const desktop_markup_for = (project) => {

    let bgExtension = {
      backgroundImage: `url(${project.image})`
    }
    let image_style = {...desktop_style.image, ...bgExtension};

    return(
       <div style={desktop_style}>
          <div style={image_style}/>
          <div style={desktop_style.info.container}>
            <div style={desktop_style.info.title}>
                {project.name}
            </div>
            <div style={desktop_style.info.role}>
                {project.role}
            </div>
          </div>
        </div>
    );
}

Project.propTypes = {
  data: PropTypes.instanceOf(project_model)
}

export default Radium(Project)
