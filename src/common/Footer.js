import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Media from 'react-media'
import Radium from 'radium'

import links from '../data/social_media_links'
import mq from '../style/media_queries'
import footerStyle from './footer_style'
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

      let finalStyle = {...footerStyle.icon.container}
      if(i !== 0){
        // Add margin to all icons except first to create horizontal whitespace
        finalStyle = {...finalStyle,...{marginLeft: footerStyle.icon.horizontalSpacing}}
      }

      var single_link =
        <a
          key={i}
          style={finalStyle}
          href={links[i].link}
          target={openInNewTab}>
          <FontAwesome
            name="name"
            style={footerStyle.icon}
            className={links[i].icon}/>
        </a>

        links_markup.push(single_link);
    }


    const label = `${strings.initials}. ${strings.copyright}`;
    return(
      <HorizontalCenter
          id="horizontal_center_2"
          style={footerStyle.underlay}>

          <HorizontalCenter
            id="horizontal_center_2"
            style={footerStyle}>
              <Aligner>
                  <div id="links_container">
                    {links_markup}
                  </div>
                  <div
                    id="initials_container"
                    style={footerStyle.initials.container}>
                    <span
                      id="initials"
                      style={footerStyle.initials}>
                        {label}
                    </span>
                  </div>
              </Aligner>
          </HorizontalCenter>
      </HorizontalCenter>
    );
  }
}


// Footer.propTypes = {
//
//   // Indicats if the Footer should stay stick to the viewport bottom if the content
//   // above it is not high enough to push footer down
//   sticky: PropTypes.bool.isRequired
// }
export default Radium(Footer)
