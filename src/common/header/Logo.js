import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import strings from '../../data/strings'
import { home } from '../../data/routes';
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
                 alt='${strings.initials} logo'/>
               <span
                 style={logoStyle.initials}>
                  {strings.initials}
               </span>
          </Link>
    )
  }
}

Logo.propTypes = {
  headerCallback: PropTypes.func.isRequired
}

export default Radium(Logo)
