import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'

// import './collapsed_menu_style.css';
import style from './collapsed_menu_style'
import routes from '../../data/routes'
import HorizontalCenter from '../HorizontalCenter'

class CollapsedMenu extends Component{

  /*
    Unique key is required for pseudo classes to work,
    since all items share same style where pseudo classes
    are defined. Without it, React wouldn't know, which
    item should trigger pseudo class behaviour.
  */
  render() {
    var items = [];
    for(var i = 0, size = routes.length; i < size; i++)
    {
      console.log(style.item.label);
      var menuItem =
      <a style={style.item}
         href={routes[i].route}>
        <div style={style.icon.container}>
          <FontAwesome
             size={style.icon.size}
             className={routes[i].icon}/>
        </div>
        <div
          style={style.item.label}
          key={i}>
            {routes[i].visual}
        </div>
      </a>
      items.push(menuItem);
    }

    return (
      <div style={style.container}>
        <div style={style.menu}>{items}</div>
      </div>
    )
  }
}

export default Radium(CollapsedMenu)
