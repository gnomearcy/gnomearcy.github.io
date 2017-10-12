import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../about/About';
import CoverPhoto, {propCreator} from '../common/CoverPhoto'
import ProfilePicture from '../common/ProfilePicture'
import workStyle from './work_style'
import desktopCoverPhoto from '../data/assets/work_cover.jpg'
import Content from '../common/Content'
import sections from './data/sections'
import Section from './section/Section'
import Radium from 'radium'

class Work extends Component{

  render(){
    const secs = sections.map((section_data, index) => {
      return <Section key={`section${index}`} data={section_data}/>
    })

    console.log("Computed sections");
    console.log(secs);

    return (
      <div>
        <CoverPhoto {...propCreator(desktopCoverPhoto)} />
        <ProfilePicture title="My work"/>
        <Content>
          <div style={workStyle.description}>
            Description Description
            Description
            Description
            Description
            Description
            Description
            Description
            Description
            To Do This
          </div>
          {secs}
        </Content>
      </div>
    );
  }
}

export default Radium(Work)
