import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Media from 'react-media'
import Radium from 'radium'

import links, { hoverColorKey } from '../data/social_media_links'
import mq from '../style/media_queries'
import footerStyle, {linkHoverGenerator} from './footer_style'
import HorizontalCenter from './HorizontalCenter'
import strings from '../data/strings'
import CenterTextBlock from './CenterTextBlock'

// TODO remove Aligner all together
import Aligner from './Aligner'

// Component representing bottom part of the UI.
// All other content components have this component as their sibling on the UI.
const openInNewTab = "_blank";

class Footer extends Component{
  render(){

    var links_markup = [];
    for(var i = 0, amount = links.length; i < amount; i++){

      // Icon container style
      let finalStyle = {
        ...footerStyle.icons.icon.container,
        ...linkHoverGenerator(links[i][hoverColorKey])
      }
      if(i !== 0){
        // Add margin to all icons except first to create horizontal whitespace
        finalStyle = {
          ...finalStyle,
          ...{marginLeft: footerStyle.icons.horizontalSpacing}
          }
      }

      var single_link =
        <a
          id={`link_${i}`}
          key={i}
          style={finalStyle}
          href={links[i].link}
          target={openInNewTab}>
          <FontAwesome
            name="name"
            style={footerStyle.icons.icon}
            className={links[i].icon}/>
        </a>

        links_markup.push(single_link);
    }


    const label = `${strings.initials}. ${strings.copyright}`;
    return(
      <div
        id="footer"
        style={footerStyle}>
        <div
          id="content"
          style={footerStyle.content}>
          <div
            id="links"
            style={footerStyle.icons}>
            {links_markup}
          </div>
          <span
            id="initials"
            style={footerStyle.initials}>
              {label}
          </span>
        </div>
      </div>
    );
  }
}

export default Radium(Footer)
