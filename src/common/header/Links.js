import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium'
import PropTypes from 'prop-types'

import routes from '../../data/routes.js';
import style from './links_style'

class Links extends Component{

  reportToHeader = (index) => {
    console.log("Reporting to header from LINKs container");
    this.props.headerCallback(index)
  }

  render(){
    var links = [];
    for(var i = 0, size = routes.length; i < size; i++)
    {
      var link =
      <SingleLink
        linkContainerHandle={this.reportToHeader}
        index={i}
        isActive={this.props.activeLink !== undefined
          && parseInt(this.props.activeLink) === i}/>

      links.push(link);
    }

    return (<div style={style.linkContainer}>{links}</div>);
  }
}

class SingleLink extends Component{

    render(){

      let index = this.props.index;
      return(
      <div
        style={style.link.container}>
        <Link
           key={index}
           style={style.link}
           to={routes[index].route}
           onClick={() => {this.props.linkContainerHandle(this.props.index)}}
           title={routes[index].visual}>
              {routes[index].visual}
         </Link>
         {
           this.props.isActive ?
           <div style={style.link.underline}></div>
           : null
         }
      </div>)
    }
}

SingleLink.propTypes = {
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  linkContainerHandle: PropTypes.func.isRequired
}

Links.propTypes = {
  activeLink: PropTypes.number.isRequired,
  headerCallback: PropTypes.func.isRequired
}

export default Radium(Links)
