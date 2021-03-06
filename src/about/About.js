import React, { Component } from 'react';
import CoverPhoto, {propCreator} from '../common/CoverPhoto'
import Radium from 'radium'
import ProfilePicture from '../common/ProfilePicture'
import Content from '../common/Content'
import {skills, experience, education} from './data/ContentProvider'
import AboutCoverPhoto from '../data/assets/about_cover.jpg'

class About extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return (
      <div>
        <CoverPhoto {...propCreator(AboutCoverPhoto)}/>
        <ProfilePicture title="Who I am"/>
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
