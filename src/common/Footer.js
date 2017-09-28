import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Media from 'react-media'

import links from './social_media_links'
import './footer_style.css'
import mq from '../media_queries.js'

// Component representing bottom part of the UI.
// All other content components have this component as their sibling on the UI.
const openInNewTab = "_blank";

export default class Footer extends Component{
  render(){
    var amount = links.length;
    var links_markup = [];
    for(var i = 0; i < amount; i++){
      var single_link =
        <a href={links[i].link} target={openInNewTab}>
          <FontAwesome
            className={links[i].icon}
            size='2x'/>
        </a>

        links_markup.push(single_link);
    }

    return(
      <div id="footer">
        <Media query="(max-width:349px)">
          {matches => matches ?
            (
              <div id="social" style={{marginLeft: '8%', marginRight: '8%'}}>
                {links_markup}
              </div>
            )
           :
           (
              <div id="social">
                {links_markup}
              </div>
           )
        }
        </Media>
        <p id="copyright">© 2017 Tomislav Martinčić. All rights reserved.</p>
      </div>
    );
  }
}
