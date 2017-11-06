import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'

import Content from '../common/Content'
import Title from '../common/Title'
import ProjectGroup from './project_group/ProjectGroup'
import data from './data/project_showcase'
import style from './home_style'
import mq from '../style/media_queries'
import {home} from '../data/routes'

class Home extends Component{

  componentDidMount() {
    window.scrollTo(0,0);
    // this.props.reportTo(home.code)
  }

  render(){
    return(
      <div>
        <Content>
          <Title value="Check out my work..."/>

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
