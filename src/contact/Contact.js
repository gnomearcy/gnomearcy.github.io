import React, { Component } from 'react'
import Radium from 'radium'
import Media from 'react-media'

import Content from '../common/Content'
import style from './contact_style'
import data from './data'
import mq from '../style/media_queries'
import Form from './Form'
import Title from '../common/Title'
import {contact} from '../data/routes'

class Contact extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
    this.props.reportTo(contact.code)
  }

  render(){

    return(
      <div>
        <Title value="Let's connect"/>
        <Content>
            <div style={style.intro_message}>
              {data.intro_message}
            </div>

            <Form />

            <div style={style.outro_message}>
              {data.outro_message}
            </div>

        </Content>
      </div>
    );
  };
}

export default Radium(Contact);
