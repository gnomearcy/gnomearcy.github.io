import React, { Component } from 'react';

export default class CenterTextBlock extends React.Component{
  render(){

      const internalStyle = {
        height: this.props.height,
        lineHeight: `${this.props.height}px`,
        display: "inline-block"
      };

      let purifiedText = this.props.text.split("\n")[0];

      return (
        <span style={{...internalStyle, ...this.props.style}}>
          {purifiedText}
        </span>)
  }
}
