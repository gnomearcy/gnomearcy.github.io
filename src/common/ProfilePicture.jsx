import React, {Component} from 'react'
import style from './profile_picture_style'
import Radium from 'radium'
import grid from '../style/grid'
import Content from './Content'
import typo from '../style/typefaces'
import {throwIfUndef} from '../style/evaluator'
import RequireProps from 'react-require-props'

class ProfilePicture extends React.Component{

  constructor(props){
    super(props)
  }

  render() {
    if(this.props.hasTitle){
      throwIfUndef(this.props.title)
    }
    // this.props.hasTitle => throwIfUndef(this.props.title)
    return (
      <div style={style.root}>
        <div style={style.separator}></div>
        <div style={style.picTextContainer}>
          <div style={style.profilePicture}>
            <div style={style.profilePicture.outerCircle}></div>
            <div style={style.profilePicture.innerCircle}></div>
          </div>
          {
            ( this.props.title !== undefined
              && typeof this.props.title === 'string'
              && this.props.title.length > 0)
            ?
            <span style={style.title}>
                {this.props.title}
            </span>
            : null
          }
        </div>
      </div>
    );
  }
}

export default Radium(ProfilePicture)
