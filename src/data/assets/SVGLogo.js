import React, {Component} from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

const view_box = "0 0 434.67 434.67"
const background = 'M433.67,217.33c0,119.48-96.86,216.34-216.34,216.34S1,336.81,1,217.33,97.86,1,217.33,1,433.67,97.86,433.67,217.33Z'
const letter_t = 'M189,370.14V118H119L59,190V125l45-56H329l45,56v65l-60-72H244V370.14l-27.5,38.11Z'
const letter_m = 'M124,140h47l45.5,85L262,140h47V280.07l-42,58.2V225l-50.5,85L166,225V338.27l-42-58.2Z'
const letter_style = {
  stroke: "#000",
  fill: "#fff",
  strokeWidth: "3px"
}

class SVGLogo extends React.Component{
  render(){
    return(
      <svg
        style={this.props.custom_style}
        width={this.props.width}
        height={this.props.height}
        viewBox={view_box}>
          <path d={background}/>
          <path style={letter_style} d={letter_t}/>
          <path style={letter_style} d={letter_m}/>
      </svg>
    )
  }
}

SVGLogo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  custom_style: PropTypes.object,
}

export default Radium(SVGLogo)
