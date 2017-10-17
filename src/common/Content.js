import React, {Component} from 'react'
import mq from '../style/media_queries'
import grid from '../style/grid'
import Radium from 'radium'

const style={
    width: grid.maxWidthMobile,
    // Horizontally centers a relative div
    margin: "0 auto",
    height: "100%",

    [mq.desktop]:{
      width: grid.maxWidth
    }
}

class Content extends React.Component{
  render() {
    console.log("Rendering Content");
    console.log(this.props.style);
    return (
      <div style={{...style,...this.props.style}}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Content)
