import React, { Component } from 'react'
import CoverPhoto, {propCreator} from '../common/CoverPhoto'
import Radium from 'radium'
import ProfilePicture from '../common/ProfilePicture'
import Content from '../common/Content'
import ContactCoverPhoto from '../data/assets/contact_cover_photo.jpg'
import style from './contact_style'
import data from './data'
import mq from '../style/media_queries'
import Media from 'react-media'
import Form from './Form'

class Contact extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){

    console.log(style.form);
    return(
      <div>
        <CoverPhoto {...propCreator(ContactCoverPhoto)}/>
        <ProfilePicture title={data.page_title}/>
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
