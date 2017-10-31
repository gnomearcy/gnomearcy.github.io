import React, { Component } from 'react';
import Radium from 'radium'

import Content from '../common/Content'
import {skills, experience, education} from './data/ContentProvider'
import Title from '../common/Title'

class About extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return (
      <div>
        <Title value="Who I am" />
        <Content>
          {skills}
          {experience}
          {education}
        </Content>
      </div>
    );
  }
}
export default Radium(About);
