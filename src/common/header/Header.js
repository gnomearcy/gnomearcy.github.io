import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import Media from 'react-media'
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'

import './header_style.css';
// import 'src/style/common_style.css'

// Components
import CollapsedMenu from './CollapsedMenu'
import Logo from './Logo'
import Links from './Links'
import Hamburger from './Hamburger'

import mq from '../../style/media_queries'
import { personal_name } from '../../data/config';
import routes, { home } from '../../data/routes';
import grid from '../../style/grid';
import headerStyle from './header_style'

class Header extends Component{

  // == Define initial state ==
  // Don't use setState API with ES6 classes (we don't want to mutate the initial state with API call)
  // We're manually setting state via key/value pairs.
  state = {
      showCollapsedMenu: false,
  }

  toggleMenu(e){
    e.preventDefault();
    // Set completely new state with setState API, don't fiddle with current state
    // that was set in the constructor
    this.setState({ showCollapsedMenu: !this.state.showCollapsedMenu});
  }

  render(){

    return(
      <div style={{textAlign : 'center'}}>
        <div style={headerStyle}>
          <Logo />
          <Links />
          <Hamburger />
        </div>
        <CollapsedMenu />
      </div>
    )
  }
}

export default Radium(Header)