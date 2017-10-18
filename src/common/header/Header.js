import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { Link } from 'react-router-dom';
import Media from 'react-media'
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'

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
import HorizontalCenter from '../HorizontalCenter'

const clickedIndex = "clicked_index"

class Header extends Component{

  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      showCollapsedMenu: false,
      chosenLink: localStorage.getItem(clickedIndex)
    }
  }

  toggleMenu(e){
    e.preventDefault();
    // Set completely new state with setState API, don't fiddle with current state
    // that was set in the constructor
    // this.setState({ showCollapsedMenu: !this.state.showCollapsedMenu});
    // TODO: remove this
    this.setState((prevState, props) => {
      return {
        showCollapsedMenu: !prevState.showCollapsedMenu,
        chosenLink: prevState.chosenLink
      };
    });
  }

  handleForCollapsedMenu(clicked_link_index){
    console.log("Gor response from menu with NEW index -> " + clicked_link_index);
    if(clicked_link_index === undefined){
      throw "invalid clicked link index"
    }

    localStorage.setItem(clickedIndex, clicked_link_index)

    // Trigger re-render to update the UI
    this.setState((prevState, props) => {
      return {
        showCollapsedMenu: prevState.showCollapsedMenu,
        chosenLink: clicked_link_index
      };
    });
  }


  componentWillMount(){

      // TODO: implement a regex to filter out the subsection
      // such as work, about and contact and set the corresponding state
      // This method is triggered before render :)

      console.log("regexing");
      const regex = new RegExp("[\s\S]*(\/[\s\S]*)")
      let value = window.location.href;
      let result = regex.exec(value)
      console.log(result);
  }

  changeLinkState = (new_index) => {

    console.log("header link management");
    console.log("new value -> " + new_index);

    // TODO refactor the constant
    // Home button
    if(new_index === -1){
      localStorage.removeItem(clickedIndex)
    }
    else{
      localStorage.setItem(clickedIndex, new_index)
    }

// https?:\/\/[\s\S]*(\/[\s\S]*)(\/)
    // Re-render stuff
    let index = localStorage.getItem(clickedIndex);
    this.setState((prevState, props) => {
      return {
        showCollapsedMenu: prevState.showCollapsedMenu,
        chosenLink: index
      };
    });
  }

  // TODO: add open/close animation
  // TODO find a way how to close this menu when media query changes to desktop


  render(){

    console.log("Render of Header");
    console.log(this.state);
    return(

      <div style={headerStyle.root}>
        <div style={headerStyle.header}>
          <Logo
            headerCallback={this.changeLinkState}/>
          <Links
            headerCallback={this.changeLinkState}
            activeLink={this.state.chosenLink}/>
          <Hamburger onClick={this.toggleMenu}/>
        </div>
        <CollapsedMenu
          showYourself={this.state.showCollapsedMenu}
          headerLink={this.handleForCollapsedMenu}/>
      </div>
    )
  }
}

export default Radium(Header)
