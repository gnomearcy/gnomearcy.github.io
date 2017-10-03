import React, { Component } from 'react';

const horizontalStyle = {
  textAlign : "center"
}

{/* Custom styles can be injected via "style" prop on call site.
  Call site - place where this component is used */}
export default class HorizontalCenter extends React.Component{
  render(){
    return(
      <div style={{...horizontalStyle, ...this.props.style}}>
        {this.props.children}
      </div>
    );
  }
}
