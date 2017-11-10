import React, {Component} from 'react'
import RequireProps from 'react-require-props'
import Radium from 'radium'

import template from './template_style'
import {throwIfUndef} from '../../style/evaluator'
import { section_title, entries, entry_title, entry_body} from '../data/keys'
import Entries from './Entries'

class Section extends React.Component{

  constructor(props){
    super(props)
    RequireProps(
      'Section',
      props,
      {
        [section_title]: String,
        [entries]: Array
      }
    )
  }

  render() {
    return (
      <div style={template.root}>
        <span style={template.title}>{this.props[section_title]}</span>
        <Entries {...this.props}/>
      </div>
    );
  }
}

export default Radium(Section)
