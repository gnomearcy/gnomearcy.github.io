import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import routes, { home } from '../routes.js';
import Media from 'react-media'
import FontAwesome from 'react-fontawesome';
import './header_style.css';
import '../common_style.css'

// Components
import CollapsedMenu from './CollapsedMenu'
import Logo from './Logo'
import Links from './Links'
import Hamburger from './Hamburger'

import mq from '../media_queries.js'
import { personal_name } from '../config.js'

export default class Header extends Component{

  constructor(props){
    super(props);

    // == Define initial state ==
    // Don't use setState API with ES6 classes (we don't want to mutate the initial state with API call)
    // We're manually setting state via key/value pairs.
    this.state = {
        showCollapsedMenu: false
    }
  }

  toggleMenu(e){
    e.preventDefault();
    // Set completely new state with setState API, don't fiddle with current state
    // that was set in the constructor
    this.setState({ showCollapsedMenu: !this.state.showCollapsedMenu});
  }
  render(){

    const root_class = "header"
    return(
      <div>

        <Media query={mq.old}>
          <div>
            <div className={root_class}>
              <Logo />
              <Hamburger onClick={this.toggleMenu.bind(this)}/>
            </div>
            {this.state.showCollapsedMenu ? <CollapsedMenu /> : null}
          </div>
        </Media>

        <Media query={mq.mobile}>
          <div>
            <div className={root_class}>
              <Logo />
              <Hamburger onClick={this.toggleMenu.bind(this)}/>
            </div>
            {this.state.showCollapsedMenu ? <CollapsedMenu /> : null}
          </div>
        </Media>

        <Media query={mq.tablet}>
          <div>
            <div className={root_class}>
              <Logo />
              <Hamburger onClick={this.toggleMenu.bind(this)}/>
            </div>
            {this.state.showCollapsedMenu ? <CollapsedMenu /> : null}
          </div>
        </Media>

        <Media query={mq.desktop}>
          <div className={root_class}>
            <Logo />
            <Links />
          </div>
        </Media>

        <Media query={mq.wide}>
          <div className="header">
            <Logo />
            <Links />
          </div>
        </Media>
      </div>
    )
  }
}
