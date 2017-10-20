import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { personal_name } from '../../data/config.js'
import { home } from '../../data/routes.js';
import logo_image from '../../data/assets/logo.png'
import logoStyle from './logo_style'


class Logo extends Component{

    render() {
      return (
          <Link
             id="logo"
             key="logo"
             style={logoStyle.container}
             to={home}
             onClick={() => {this.props.headerCallback(-1)}}>
               <img
                 style={logoStyle.image}
                 src={logo_image}
                 alt="Tomislav Martinčić logo"/>
               <span
                 style={logoStyle.initials}>
                  {personal_name}
               </span>
          </Link>
    )
  }
}

Logo.propTypes = {
  headerCallback: PropTypes.func.isRequired
}

export default Radium(Logo)
