import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'
import hamburger from './hamburger_style'

class Hamburger extends Component{
  render(){
    return(

      // The FontAwesome tag has to be wrapped in a "div" element
      // for media queria to successfully trigger and hide this
      // component on mobile devices
      <div style={hamburger.style}>
        <FontAwesome
          className={hamburger.icon}
          onClick={this.props.onClick}/>
      </div>
    );
  }
}
export default Radium(Hamburger)
