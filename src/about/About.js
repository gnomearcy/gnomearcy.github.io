import React, { Component } from 'react';
import Radium from 'radium'

import Content from '../common/Content'
import Title from '../common/Title'
import HeroPhoto from './HeroPhoto'
import {skills, experience, education} from './data/ContentProvider'
import {about} from '../data/routes'
import style from './style'

class About extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
    this.props.reportTo(about.code)
  }

  render(){
    return (
      <div id="about_root">
        <HeroPhoto />
        <Content style={style.content_root}>
          <Title value="Who I am" />
          {skills}
          {experience}
          {education}
        </Content>
      </div>

    );
  }
}
export default Radium(About);
