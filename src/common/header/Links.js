import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium'
import PropTypes from 'prop-types'

import routes from '../../data/routes.js';
import link_style from './links_style'

class Links extends Component{

  reportToHeader = (index) => {
    this.props.headerCallback(index)
  }

  render(){
    var links = [];

    // for(var i = routes.length - 1; i >= 0; i--)
    for(var i = 0, size = routes.length; i < size; i++)
    {
      var link =
      <SingleLink
        linkContainerHandle={this.reportToHeader}
        index={i}
        key={i}
        isActive={this.props.activeLink !== undefined
          && parseInt(this.props.activeLink) === i}/>

      links.push(link);
    }

    return (
      <div
        id="links_container"
        style={link_style.linkContainer}>
          {links}
      </div>
    );
  }
}

class SingleLink extends Component{

    render(){

      let index = this.props.index;

      console.log("is active - " + this.props.index);
      console.log(this.props.isActive);

      console.log(style);
      let style = this.props.isActive ? link_style.link.active : link_style.link.normal;
      console.log("style to use for link -> " + index);
      console.log(style);

      return(
        <Link
           id={`link_${index}`}
           key={`link_${index}`}
           style={this.props.isActive ? link_style.link.active : link_style.link.normal}
           to={routes[index].route}
           onClick={() => {this.props.linkContainerHandle(this.props.index)}}
           title={routes[index].visual}>
              {routes[index].visual}
         </Link>
      )
    }
}

SingleLink.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  linkContainerHandle: PropTypes.func.isRequired
}

Links.propTypes = {
  activeLink: PropTypes.string.isRequired,
  headerCallback: PropTypes.func.isRequired
}

export default Radium(Links)
