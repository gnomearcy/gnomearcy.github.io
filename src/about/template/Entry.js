import React, {Component} from 'react'
import RequireProps from 'react-require-props'
import Radium from 'radium'

import template from './template_style'
import {throwIfUndef} from '../../style/evaluator'
import { section_title, entries, entry_title, entry_body} from '../data/keys'

class Entry extends React.Component{

  constructor(props){
    super(props);
    RequireProps(
      'Entry',
      props,
      {
        [entry_title]: String,
        [entry_body]: String
      }
    )
  }

  render(){
    return (
      <div style={template.entries.entry.container}>
        <div style={template.entries.entry.title}>{this.props[entry_title]}</div>
        <div style={template.entries.entry.body}>{this.props[entry_body]}</div>
      </div>
    )
  }
}

export default Radium(Entry)
