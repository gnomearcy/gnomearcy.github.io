import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Radium from 'radium'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import style from './collapsed_menu_style'
import routes from '../../data/routes'
import HorizontalCenter from '../HorizontalCenter'


class CollapsedMenu extends Component{

  constructor(props){
    super(props);
    this.linkClicked = this.linkClicked.bind(this);
  }

  // Function passed to all Link children so they can report back to
  // this parent component when clicked
  linkClicked(index){
    console.log("Sending report back to header from MENU -> " + index);

    if(index === undefined){
      throw "invalid index"
    }

    // Report back to the header about new chosen index
    this.props.headerLink(index)
  }

  /*
    Unique key is required for pseudo classes to work,
    since all items share same style where pseudo classes
    are defined. Without it, React wouldn't know, which
    item should trigger pseudo class behaviour.
  */
  render() {
    if(this.props.showYourself === false){
      return null;
    }

    var items = [];
    for(var i = 0, size = routes.length; i < size; i++)
    {
      var menuItem =
      <MenuItem
        index={i}
        data={routes[i]}
        onLinkClick={this.linkClicked}/>
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

    linkClicked = () => {
      this.props.onLinkClick(this.props.index);
    }


    render(){
      let data = this.props.data;
      return(
        <Link style={style.item}
           key={"item_" + this.props.index}
           to={data.route}
           onClick={this.linkClicked}>
           <div style={style.item.content}
             key={"item_content_" + this.props.index}>
             <div style={style.icon.container}>
                <FontAwesome
                   size={style.icon.size}
                   className={data.icon}/>
              </div>
              <div
                style={style.item.label}
                key={this.props.index}>
                  {data.visual}
              </div>
          </div>
        </Link>
      )
    }
}

CollapsedMenu.propTypes = {
  headerLink: PropTypes.func.isRequired
}

MenuItem.propTypes = {
  index: PropTypes.number.isRequired,
}

export default Radium(CollapsedMenu)
