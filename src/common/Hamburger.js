import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './hamburger_style.css'

export default class Hamburger extends Component{

  render()
  {
    return(
      <FontAwesome
        onClick={this.props.onClick}
        className={"fa-bars hamburger " + this.props.className}
        size='2x'/>
    );
  }
}
