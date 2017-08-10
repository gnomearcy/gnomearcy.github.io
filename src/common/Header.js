import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div>
        <ul id="navigation_links">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
