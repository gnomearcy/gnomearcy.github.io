import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium'

import routes from '../../data/routes.js';
import style from './links_style'

class Links extends Component{
  render(){
    var links = [];
    for(var i = 0, size = routes.length; i < size; i++)
    {
      var link =
      <Link
         style={style.link}
         to={routes[i].route}
         title={routes[i].visual}>
            {routes[i].visual}
       </Link>
      links.push(link);
    }

    return (<div style={style.linkContainer}>{links}</div>);
  }
}

export default Radium(Links)
