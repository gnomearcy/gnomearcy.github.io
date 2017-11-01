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
      <div
        style={{display: "inline-block"}}>
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
     <a
       id="project"
       key="project"
       href={project.url}
       style={mobile_style.root}>
        <div
          id="image"
          key="image"
          style={image_style}/>
        <div
          id="underlay_info"
          key="underlay_info"
          style={mobile_style.underlay}>

            <div
              id="title"
              key="title"
              style={mobile_style.underlay.title}>
                {project.name}
            </div>
            <div
              id="role"
              key="role"
              style={mobile_style.underlay.role}>
                {project.role}
            </div>

        </div>
      </a>
  );
}

const desktop_markup_for = (project) => {

    let bgExtension = {
      backgroundImage: `url(${project.image})`
    }
    let image_style = {...desktop_style.image, ...bgExtension};

    return(
       <a
         href={project.url}
         target="_blank"
         id="project_root"
         style={desktop_style.root}>
          <div
            id="image"
            style={image_style}/>
          <div
            id="info_overlay"
            style={desktop_style.top_overlay.container}>
            <div style={desktop_style.top_overlay.title}>
                {project.name}
            </div>
            <div style={desktop_style.top_overlay.role}>
                {project.role}
            </div>
          </div>
        </a>
    );
}

Project.propTypes = {
  data: PropTypes.instanceOf(project_model)
}

export default Radium(Project)
