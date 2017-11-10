import React, {Component} from 'react'
import RequireProps from 'react-require-props'
import Radium from 'radium'

import template from './template_style'
import {throwIfUndef} from '../../style/evaluator'
import { section_title, entries, entry_title, entry_body} from '../data/keys'
import Entry from './Entry'

class Entries extends React.Component {

  constructor(props){
    super(props)
    RequireProps(
      'Entries',
      props,
      {
        [entries]: Array
      }
    )
  }

  render(){
    throwIfUndef(this.props[entries])
    let entriesMarkup = [];
    for(var i = 0, size = this.props[entries].length; i < size; i++){
      let piece = this.props[entries][i];
      entriesMarkup.push(
        <Entry key={i} {...piece}/>
      )
    }

    return (<div style={template.entries.container}>{entriesMarkup}</div>)
  }
}

export default Radium(Entries)
