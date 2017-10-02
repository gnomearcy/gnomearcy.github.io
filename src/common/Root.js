import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Switch, Route, HashRouter } from 'react-router-dom'
import Media from 'react-media'
import {StyleRoot} from 'radium'

import Home from '../home/Home';
import Work from '../work/Work';
import About from '../about/About'
import Contact from '../contact/Contact'
import Tests from '../testing/Tests'

import Header from '../common/header/Header';
import Footer from '../common/Footer'

import './root_style.css'
import mq from '../style/media_queries'
import grid from '../style/grid'

// TODO: maybe move this to separate file?
const style = {
   width: grid.col(3),

   // Both margins will center the content horizontally
   marginLeft: "auto",
   marginRight: "auto",

   [mq.desktop]: {
     width: grid.maxWidth
   }
}
// This is the wrapper for navigation in header section and the content section
// It is the root component being rendered via the ReactDOM.render() method.
// It hosts the Router tag (either HashRouter, MemoryRouter or BrowserRouter) as it's root
// to provide context for all the Link and/or Route children that are being wrapped.
class Root extends Component {
  render(){
    return(
      <StyleRoot>
        <HashRouter>
          <div style={style}>
            <Header />
            <Content />
            <Footer />
          </div>
        </HashRouter>
      </StyleRoot>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/about' component={About} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/testing" component={Tests}/>
      </div>
    );
  }
}

// Only export the Root (wrapper) for usage outside of this file.
export default Root;
