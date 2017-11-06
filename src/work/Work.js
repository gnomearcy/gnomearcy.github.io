import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'

import About from '../about/About';
import workStyle from './work_style'
import Content from '../common/Content'
import sections from './data/sections'
import Section from './section/Section'
import Title from '../common/Title'
import {work} from '../data/routes'

class Work extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
    // this.props.reportTo(work.code)
  }

  render(){
    const secs = sections.map((section_data, index) => {
      return <Section key={`section${index}`} data={section_data}/>
    })

    return (
      <div>
        <Title value="My work"/>
        <Content style={workStyle.content}>
          {secs}
        </Content>
      </div>
    );
  }
}

export default Radium(Work)
