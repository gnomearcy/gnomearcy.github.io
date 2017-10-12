import React, { Component } from 'react';
import CoverPhoto, {propCreator} from '../common/CoverPhoto'
import Radium from 'radium'
import ProfilePicture from '../common/ProfilePicture'
import Content from '../common/Content'
import {skills, experience, education} from './data/ContentProvider'
import AboutCoverPhoto from '../data/assets/about_cover.jpg'

class About extends Component{
  render(){

    console.log("assig in");
    console.log(AboutCoverPhoto);
    return (
      <div>
        <CoverPhoto {...propCreator(AboutCoverPhoto)}/>
        <ProfilePicture title="Who I am"/>
        <Content>
          {skills}
          {experience}
          {education}
          <div style={{height: "200px", backgroundColor: "#eee", textAlign: "center", lineHeight: "200px", width: "100%"}}>
              About the website
          </div>
        </Content>
      </div>
    );
  }
}
export default Radium(About);
