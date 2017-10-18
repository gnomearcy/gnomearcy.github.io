import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'

// import './collapsed_menu_style.css';
import style from './collapsed_menu_style'
import routes from '../../data/routes'
import HorizontalCenter from '../HorizontalCenter'

const link = {
    width: "100%",
    height: 56,
    display: "block"
}

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
        key={"item_" + i}
         href={routes[i].route}>
         <div style={style.item.content}
           key={"item_content_" + i}>
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
        </div>
      </a>
      items.push(menuItem);
    }

    return (
      <div style={style.menu}>
        {items}
      </div>

    )
  }
}

export default Radium(CollapsedMenu)

// <div style={style.container}>
//   <div style={style.menu}>{items}</div>
// </div>

// <a style={style.item} href="/work">
//   <div style={style.item.content}>
//     <div style={style.icon.container}>
//       <FontAwesome
//          size={style.icon.size}
//          className={routes[0].icon}/>
//     </div>
//     <div
//       style={style.item.label}
//       key={1}>
//         {routes[0].visual}
//     </div>
//   </div>
// </a>
