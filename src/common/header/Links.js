import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from 'src/data//routes.js';
import './links_style.css'

export default class Links extends Component{
  render(){
    var links = [];
    var nr = routes.length;
    for(var i = 0; i < nr; i++)
    {
      var link =
      <li>
        <Link to={routes[i].route} title={routes[i].visual}>{routes[i].visual}</Link>
      </li>
      links.push(link);
    }
    return <ul className="links">{links}</ul>
  }
}
