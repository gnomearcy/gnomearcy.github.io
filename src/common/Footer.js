import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import * as links from './social_media_links'
import './footer_style.css'

// Component representing bottom part of the UI.
// All other content components have this component as their sibling on the UI.
const openInNewTab = "_blank";

class Footer extends Component{
  render(){
    return(
        // Provides background and margins, centers its children
        <div id="footer">
            <div id="social">
                <a href={links.facebook} target={openInNewTab}>
                  <FontAwesome
                    className='fa-facebook'
                    size='2x'/></a>

                  <a href={links.github} target={openInNewTab}>
                  <FontAwesome
                    className='fa-github'
                    size='2x'/></a>

                  <a href={links.twitter} target={openInNewTab}>
                  <FontAwesome
                    className='fa-twitter'
                    size='2x'/></a>

                  <a href={links.codepen} target={openInNewTab}>
                  <FontAwesome
                    className='fa-codepen'
                    size='2x'/></a>

                  <a href={links.linkedin} target={openInNewTab}>
                    <FontAwesome
                      className='fa-linkedin'
                      size='2x'/></a>
              </div>
              <p id="copyright">© 2017 Tomislav Martinčić. All rights reserved.</p>
          </div>
    );
  }
}

export default Footer;
