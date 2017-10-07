import headerStyle from './header/header_style'
import footerStyle from './footer_style'
import homeCoverPhoto from '../data/assets/home_cover_2.jpg'
import Aligner from './Aligner'
import grid from '../style/grid'
import mq from '../style/media_queries'
import Radium from 'radium'
import { photo, label } from './cover_photo_style'
import React, {Component} from 'react'


class CoverPhoto extends React.Component{

    render(){
      return <div style={photo.container}>
          <img style={photo.image}></img>
          <div style={label.container}>
            <div style={label.value}>My name is Tomislav and I'm a software developer from Croatia</div>
          </div>
        </div>
    }
}
export default Radium(CoverPhoto)
