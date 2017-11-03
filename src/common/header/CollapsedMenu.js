import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import style from './collapsed_menu_style'
import { nav_links } from '../../data/routes'
import HorizontalCenter from '../HorizontalCenter'

class CollapsedMenu extends Component{

  /*
    Unique key is required for pseudo classes to work,
    since all items share same style where pseudo classes
    are defined. Without it, React wouldn't know, which
    item should trigger pseudo class behaviour.
  */
  render() {
    if(this.props.show === false){
      return null;
    }

    var items = [];
    for(var i = 0, size = nav_links.length; i < size; i++)
    {
      let data = nav_links[i];
      var menuItem =
      <MenuItem
        key={i}
        icon={data.icon}
        value={data.name}
        href={data.href}
        headerLink={this.props.headerLink}/>
      items.push(menuItem);
    }

    return (
      <div style={style.menu}>
        {items}
      </div>
    )
  }
}

class MenuItem extends React.Component{

    render(){
      return(
        <Link
           style={style.item}
           key={"item_" + this.props.value}
           to={this.props.href}
           onClick={() => this.props.headerLink()}>

           <div
              id="item_content "
              style={style.item.content}
              key={"item_content_" + this.props.value}>

              <FontAwesome
                 style={style.icon}
                 name={this.props.value}
                 size={style.icon.size}
                 className={this.props.icon}/>

               <span
                style={style.item.label}
                key={`item_value_` + this.props.value}>
                  {this.props.value}
              </span>
            </div>
        </Link>
      )
    }
}

CollapsedMenu.propTypes = {
  // Flag indicating wether to render this component or not
  show: PropTypes.bool.isRequired,

  // Function reference link towards Header to signal open/close action
  headerLink: PropTypes.func.isRequired
}

MenuItem.propTypes = {

  // FontAwesome string icon
  icon: PropTypes.string.isRequired,

  // Text to display in an item
  value: PropTypes.string.isRequired,

  // Function reference link towards Header to signal open/close action
  // This is the same reference as passed in to CollapsedMenu component
  headerLink: PropTypes.func.isRequired
}

export default Radium(CollapsedMenu)
