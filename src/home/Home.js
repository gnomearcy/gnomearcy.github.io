import React, { Component } from 'react';
import CoverPhoto from '../common/CoverPhoto'
import ProfilePicture from '../common/ProfilePicture'
import Content from '../common/Content'
import {propCreator} from '../common/CoverPhoto'
import deskopPhoto from '../data/assets/home_cover_2.jpg'
import mobilePhoto from '../data/assets/home_cover_mobile.jpg'

class Home extends Component{
  render(){
    console.log("Home render");
    console.log(deskopPhoto);
    console.log(mobilePhoto);
    return(
      <div>
        <CoverPhoto {...propCreator(deskopPhoto, mobilePhoto)}/>
        <div> Home sweet home </div>
      </div>
    );
  };
}

export default Home;
