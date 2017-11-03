import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import strings from '../../data/strings'
import { home } from '../../data/routes';
import SVGLogo from '../../data/assets/SVGLogo'
import logoStyle from './logo_style'

class Logo extends Component{

    render() {
      return (
          <Link
             id="logo"
             key="logo"
             style={logoStyle.container}
             to={home.href}>
             <SVGLogo
                custom_style={{verticalAlign: "middle"}}
                width={36}
                height={36} />
             <span
                style={logoStyle.initials}>
                  {strings.initials}
             </span>
          </Link>
    )
  }
}

export default Radium(Logo)
