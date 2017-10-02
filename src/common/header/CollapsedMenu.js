import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'

// import './collapsed_menu_style.css';
import style from './collapsed_menu_style'
import routes from '../../data/routes'

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
      var menuItem =
      <a style={style.item}
         href={routes[i].route}>
        <div style={style.icon.container}>
          <FontAwesome
             style={style.icon}
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


    // how to implement media queries here
    return <div style={style.menu}>{items}</div>
  }
}

export default Radium(CollapsedMenu)
// size={style.icon.size}
// key={`key${i}`}
