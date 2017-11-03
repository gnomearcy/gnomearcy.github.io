import React, {Component} from 'react'
import Radium, { Style }from 'radium'
import RequireProps from 'react-require-props'
import PropTypes from 'prop-types';

import Project from './project/Project'
import section_model from './model'
import section, {project_image} from './section_style'

class Section extends React.Component{

  render() {
    let projects_data = this.props["data"];
    var projects_markup = null;

    if(projects_data.projects){

      let size = projects_data.projects.length;
      projects_markup = [];

      for(var i = 0; i < size; i++){
        let project = projects_data.projects[i];
        projects_markup.push(<Project key={`project-${i}`} data={project}/>);

         if(i % 2 == 0){
           projects_markup.push(
              <div
                key={`key_divider_${i}`}
                style={section.content.projects.horizontalDivider}/>
           )
         }
       }
    }

    return (
      <div
        id="section"
        style={section}>
          <span
            id="section_title"
            style={section.title}>{projects_data.title}</span>
          <div style={section.content}>
              <span style={section.content.description}>{projects_data.description}</span>
              {projects_markup}
          </div>
      </div>
    );
  }
}

Section.propTypes = {
  data: PropTypes.instanceOf(section_model)
}

export default Radium(Section)
