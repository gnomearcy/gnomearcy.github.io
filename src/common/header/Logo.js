import React, { Component } from 'react';
import Media from 'react-media'
import Radium from 'radium'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import strings from '../../data/strings'
import { main_route } from '../../data/routes';
import SVGLogo from '../../data/assets/SVGLogo'
import logoStyle from './logo_style'

class Logo extends Component{

    // Header passed in a callback function when the Logo is clicked to toggle
    // off the collapsing dropdown menu.
    //
    // Invoke the passed in function and return false so that the "a" tag
    // invokes the "href" attribute (default behaviour is that "a" tag executes
    // onclick block of code and then "href" attribute if the block returns false)
    //
    // Arrow syntax => "this" is automatically bound
    reportAndClick = () => {
        this.props.onClick();
        return false;
    }

    render() {
      return (
          <Link
             id="logo"
             key="logo"
             style={logoStyle.container}
             onClick={() => this.reportAndClick()}
             to={main_route}>
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
