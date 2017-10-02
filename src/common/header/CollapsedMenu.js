import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'

// import './collapsed_menu_style.css';
import style from './collapsed_menu_style'
import routes from '../../data/routes'

class CollapsedMenu extends Component{

  render() {
    var items = [];
    for(var i = 0, size = routes.length; i < size; i++)
    {
      var menuItem =
        <a
          style={style.menuItem}
          href={routes[i].route}>
            <FontAwesome
               style={style.icon}
               size={style.icon.size}
               className={routes[i].icon}/>
            <span>{routes[i].visual}</span>
        </a>

      items.push(menuItem);
    }


    // how to implement media queries here
    return <div style={style.container}>{items}</div>
  }
}

export default Radium(CollapsedMenu)
