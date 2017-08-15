import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import routes from '../routes.js';
import logo_image from '../assets/logo.png'

import './header_style0.css';

export default class Header extends Component{
  render(){
    return(
      <div className="header">
        <Logo/>
        <Links/>
      </div>
    );
  }
}

class Logo extends Component{
  render(){
    return(
      <a className="logo" href="/">
          <img src={logo_image} alt="Tomislav Martinčić logo"/>
          <span>Tomislav Martinčić</span>
      </a>
    )
  }
}

class Links extends Component{
  render(){
    return(
      <ul className="links">
        <li>
          <Link to={routes.contact} className="link" title="Contact">Contact</Link>
        </li>
        <li>
          <Link to={routes.about} className="link" title="About">About</Link>
        </li>
        <li>
          <Link to={routes.work} className="link" title="Work">Work</Link>
        </li>
      </ul>
    )
  }
}
