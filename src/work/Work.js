import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from '../about/About';
import './style.css';

class Button extends Component{

  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }

  render(){
    return(
        <button />
    );
  };
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
