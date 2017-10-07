import React, { Component } from 'react';
import CoverPhoto from '../common/CoverPhoto'
import Radium from 'radium'
import ProfilePicture from '../common/ProfilePicture'
import Content from '../common/Content'
import {skills, experience, education} from './data/ContentProvider'

class About extends Component{
  render(){
    return (
      <div>
        <CoverPhoto />
        <ProfilePicture hasTitle={true} title="Home sweet home"/>
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
