import React, { Component } from 'react';
import CoverPhoto from '../common/CoverPhoto'

class Home extends Component{
  render(){
    return(
      <div>
        <CoverPhoto underHeader={true}/>
        <div style={{height: "200px", backgroundColor: "#eee", textAlign: "center", lineHeight: "200px", width: "100%"}}>
            In production, stay tuned!
        </div>
      </div>
    );
  };
}

export default Home;
