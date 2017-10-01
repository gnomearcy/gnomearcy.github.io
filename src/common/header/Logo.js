import React, { Component } from 'react';
import Media from 'react-media'

import { personal_name } from 'src/data/config.js'
import { home } from 'src/data/routes.js';
// import logo_image from 'src/data/assets/logo.png'
import logo_image from 'data/assets/logo.png'
import mq from 'src/style/media_queries.js'
import './logo_style.css'

export default class Logo extends Component{

  render(){
    return(

      <div>
        <Media query={mq.old}>
          <a className="container_logo_initials
                        center_text
                        width_100"
              href={home}>
              <img className="logo" src={logo_image} alt="Tomislav Martinčić logo"/>
              <span className="initials">{personal_name}</span>
          </a>
        </Media>

        <Media query={mq.mobile}>
          <a className="container_logo_initials
                        center_text
                        width_100"
              href={home}>
              <img className="logo" src={logo_image} alt="Tomislav Martinčić logo"/>
              <span className="initials">{personal_name}</span>
          </a>
        </Media>

        <Media query={mq.tablet}>
          <a className="container_logo_initials" href={home}>
            <img className="logo" src={logo_image} alt="Tomislav Martinčić logo"/>
            <span className="initials">{personal_name}</span>
          </a>
        </Media>

        <Media query={mq.desktop}>
          <a className="container_logo_initials" href={home}>
            <img className="logo" src={logo_image} alt="Tomislav Martinčić logo"/>
            <span className="initials">{personal_name}</span>
          </a>
        </Media>

        <Media query={mq.wide}>
          <a className="container_logo_initials" href={home}>
            <img className="logo" src={logo_image} alt="Tomislav Martinčić logo"/>
            <span className="initials">{personal_name}</span>
          </a>
        </Media>
      </div>
    );
  }
}
