import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import Media from 'react-media'
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'
import PropTypes from 'prop-types'

// Components
import CollapsedMenu from './CollapsedMenu'
import Logo from './Logo'
import Links from './Links'
import Hamburger from './Hamburger'

import mq from '../../style/media_queries'
import strings from '../../data/strings';
import routes, { home } from '../../data/routes';
import grid from '../../style/grid';
import headerStyle from './header_style'
import HorizontalCenter from '../HorizontalCenter'

class Header extends Component{

  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      showCollapsedMenu: false,
    }
  }

  closeMenu(e){
    if(e !== undefined){
      e.preventDefault();
    }
    // this.setState({
    //     showCollapsedMenu: false,
    // });
    this.setState((prevState, props) => {
      return {
        showCollapsedMenu: false
      };
    });
  }

  toggleMenu(e){
    if(e !== undefined){
      e.preventDefault();
    }
    // Set completely new state with setState API, don't fiddle with current state
    // that was set in the constructor
    this.setState((prevState, props) => {
      return {
        showCollapsedMenu: !prevState.showCollapsedMenu
      };
    });
  }

  render(){

    // Highlight can be passed in via props (by url navigation in browser)
    // or via a click on one of the links in the header
    let highlight;
    if(this.state.chosenLink){
      // State has precedence over Route matching since it's user initiated action
      // This means that the user has clicked on the link in nav bar
      highlight = this.state.chosenLink
    } else {
      // Props are passed in via Route matching
      highlight = this.props.highlight;
    }

    return(

      <div
        id="header_root"
        style={headerStyle.root}>
        <div
          id="header"
          style={headerStyle.header}>
            <Logo onClick={this.closeMenu}/>
            <Links activeLinkCode={highlight} />
            <Hamburger onClick={this.toggleMenu}/>
        </div>
        <CollapsedMenu
          headerLink={this.closeMenu}
          show={this.state.showCollapsedMenu}/>
      </div>
    )
  }
}

Header.propTypes = {
  highlight: PropTypes.number.isRequired
}

export default Radium(Header)
