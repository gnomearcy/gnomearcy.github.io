import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './work.css';
import { about } from '../Constants';
import About from '../about/About';

class Button extends Component{

  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }

  render(){
    return(
        <button label="Go to About section" onClick={this.handleClick}>Go to about section</button>
    );
  };

  handleClick(){
    window.alert(about);
  }
}

class Work extends Component{

  render(){
    return (
      <div className="WorkTitle">
        <h1>Work component</h1>
        <Button />
      </div>
    );
  }
}

export default Work;
