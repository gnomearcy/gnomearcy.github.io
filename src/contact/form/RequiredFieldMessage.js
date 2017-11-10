import React from 'react'
import PropTypes from 'prop-types'

const default_style = {
  color: "red",
  fontFamily: "Montserrat",
  fontSize: "19px",
  paddingTop: 10,
  paddingLeft: 20,
}

class RequiredFieldMessage extends React.Component{
  render(){
    return(
      this.props.message ?
      <div style={{...this.props.injected_style, ...default_style}}>
          {this.props.message}
      </div>
      : null
    )
  }
}


RequiredFieldMessage.propTypes = {

  // Message to display. If undefined, nothing is rendered
  message: PropTypes.string,

  // Custom object to merge with default style in case the parent
  // wants to customize this error message
  injected_style: PropTypes.object
}

export default RequiredFieldMessage
