import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'

import { personal_name } from '../../data/config.js'
import { home } from '../../data/routes.js';
import logo_image from '../../data/assets/logo.png'

import logoStyle from './logo_style'


class Logo extends Component{

    render() {
      return (
        // <div style={logo_style.wrapper}>
            <a style={logoStyle.container}
               href={home}>
                  <img
                    style={logoStyle.logo}
                    src={logo_image}
                    alt="Tomislav Martinčić logo"/>
                  <span
                    style={logoStyle.initials}>
                    {personal_name}
                  </span>
            </a>
        // </div>
    )
  }
}

export default Radium(Logo)
