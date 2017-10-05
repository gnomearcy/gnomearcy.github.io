import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Media from 'react-media'

import links from '../data/social_media_links'
import mq from '../style/media_queries'
import footerStyle from './footer_style'
import HorizontalCenter from './HorizontalCenter'
import strings from '../data/strings'
import CenterTextBlock from './CenterTextBlock'
import Aligner from './Aligner'

// Component representing bottom part of the UI.
// All other content components have this component as their sibling on the UI.
const openInNewTab = "_blank";

export default class Footer extends Component{
  render(){

    var links_markup = [];
    for(var i = 0, amount = links.length; i < amount; i++){

      var single_link =
        <a
          key={i}
          style={footerStyle.icon.container}
          href={links[i].link}
          target={openInNewTab}>
          <FontAwesome
            style={footerStyle.icon}
            className={links[i].icon}/>
        </a>

        links_markup.push(single_link);
    }


    const label = `${strings.initials}. ${strings.copyright}`;
    return(
      <HorizontalCenter style={footerStyle.underlay}>
          <HorizontalCenter style={footerStyle}>
              <Aligner>
                  <div>
                    {links_markup}
                  </div>
                  <div style={footerStyle.initials.container}>
                    <span style={footerStyle.initials}>{label}</span>
                  </div>
              </Aligner>
          </HorizontalCenter>
      </HorizontalCenter>
    );
  }
}
