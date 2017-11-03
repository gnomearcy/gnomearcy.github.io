import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium'
import PropTypes from 'prop-types'

import {nav_links} from '../../data/routes.js'
import link_style from './links_style'


class Links extends Component{

  render(){

    var code = this.props.activeLinkCode;
    var links = [];

    for(var i = 0, size = nav_links.length; i < size; i++)
    {
      let link_data = nav_links[i];
      var link =
      <SingleLink
        id={`nav_link_${link_data.code}_${link_data.name}`}
        key={`nav_link_${link_data.code}_${link_data.name}`}
        label={link_data.name}
        href={link_data.href}
        isActive={code !== undefined && parseInt(code) === nav_links[i].code}/>

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
      let style = this.props.isActive ? link_style.link.active : link_style.link.normal;

      return(
        <Link
           id={`link_${this.props.label.toLowerCase()}`}
           key={`link_${this.props.label.toLowerCase()}`}
           style={this.props.isActive ? link_style.link.active : link_style.link.normal}
           to={this.props.href}
           title={this.props.label}>
              {this.props.label}
         </Link>
      )
    }
}

SingleLink.propTypes = {

  // Visual value of the link
  label: PropTypes.string.isRequired,

  // Relative link where to navigate when clicked
  href: PropTypes.string.isRequired,

  // Indicates if the link has underline visible
  isActive: PropTypes.bool.isRequired,
}

Links.propTypes = {
  // Route code to determine which link should be visually marked
  // If undefined, no children Links are are visually marked
  activeLinkCode: PropTypes.number.isRequired,
}

export default Radium(Links)
