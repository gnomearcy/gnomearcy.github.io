import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'

import CoverPhoto from '../common/CoverPhoto'
import ProfilePicture from '../common/ProfilePicture'
import Content from '../common/Content'
import {propCreator} from '../common/CoverPhoto'
import deskopPhoto from '../data/assets/home_cover_2.jpg'
import mobilePhoto from '../data/assets/home_cover_mobile.jpg'
import ProjectGroup from './project_group/ProjectGroup'
import data from './data/project_showcase'
import style from './home_style'
import mq from '../style/media_queries'

class Home extends Component{

  constructor(props){
    super(props);
    this.goToContact = this.goToContact.bind(this);
  }

  goToContact(){
    window.alert("hello")
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
        <CoverPhoto {...propCreator(deskopPhoto, mobilePhoto)}/>
        <Content>

          <span
            id="page_title"
            style={style.title}>
            Check out my work...
          </span>

          <div
            id="project_info"
            style={style.info.container}>
            <ProjectGroup
              key="project_0"
              data={data[0]}/>
            <div style={style.info.separator}/>
            <ProjectGroup
              key="project_1"
              data={data[1]}/>
          </div>

          <div
            id="contact"
            style={style.contact.container}>
            <span
              id="message"
              style={style.contact.message}>
                ...or get directly in touch by
            </span>
            <Media query={mq.desktop_query}>
              <a
                key="contact_btn_desktop"
                id="button_desktop"
                style={style.contact.button_desktop}
                href="#/contact">
                Sending me a message
              </a>
            </Media>
            <Media query={mq.mobile_query}>
              <a
                key="contact_btn_mobile"
                id="button_mobile"
                style={style.contact.button_mobile}
                href="#/contact">
                Sending me a message
              </a>
            </Media>
          </div>

        </Content>
      </div>
    );
  };
}

export default Radium(Home)
