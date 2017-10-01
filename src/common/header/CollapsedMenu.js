import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import routes from 'data/routes.js';
import mq from 'style/media_queries.js';

import './collapsed_menu_style.css';

export default class CollapsedMenu extends Component{

  render(){
    var items = [];
    var nr = routes.length;
    for(var i = 0; i < nr; i++)
    {
      var menuItem =
      <a className="menu_item" href={routes[i].route}>
          <FontAwesome className={"menu_item_icon " + routes[i].icon }/>
          <span>{routes[i].visual}</span>
      </a>
      items.push(menuItem);
    }


    // how to implement media queries here
    return <div className="collapsed_menu_container">{items}</div>
  }
}
