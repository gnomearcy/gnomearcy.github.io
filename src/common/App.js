import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, HashRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import Media from 'react-media'
import Radium, {StyleRoot} from 'radium'

import Home from '../home/Home';
import Work from '../work/Work';
import About from '../about/About'
import Contact from '../contact/Contact'
import DebugGrid from '../common/DebugGrid'
import NotFound from '../common/NotFound'

import Header from '../common/header/Header';
import Footer from './Footer'
import {footer_height} from './footer_style'

import {work, about, contact} from '../data/routes'

// Style applied on all parents of the Content block so the Footer doesn't flow
// in middle of the page if there is not enough content
const height = {
  height: "100%"
}

// This is the wrapper for navigation in header section and the content section
// It is the root component being rendered via the ReactDOM.render() method.
// It hosts the Router tag (either HashRouter, MemoryRouter or BrowserRouter) as it's root
// to provide context for all the Link and/or Route children that are being wrapped.
class App extends Component {

  constructor(props){
    super(props)
    this.featureLoaded = this.featureLoaded.bind(this)
    this.state = {
      // Home feature is first loaded
      highlight: about.code
    }
  }

  featureLoaded(chosen_feature){
    if(chosen_feature === undefined || typeof chosen_feature !== "number"){
      throw "Cannot determine the feature";
      return
    }

    this.setState((prevState, props) => {
      return {
        highlight: chosen_feature
      };
    });
  }

  render(){
    return(
      <StyleRoot id="style_root" style={height}>
        <HashRouter id="router" style={height}>
          <div id="app_content" style={height}>
            <Header highlight={this.state.highlight}/>
            <div id="content"
              style={{
                minHeight: `calc(100% - ${footer_height}px)`,
                marginBottom: `-${footer_height}`,
                paddingBottom: `${footer_height}`
              }}>
              <Switch>
                <Route exact path={work.href} render={() => <Work reportTo={this.featureLoaded}/>} />
                <Route exact path={about.href} render={() => <About reportTo={this.featureLoaded}/>}/>
                <Route exact path={contact.href} render={() => <Contact reportTo={this.featureLoaded}/>}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
            <Footer/>
          </div>
        </HashRouter>
      </StyleRoot>
    );
  }
}


// <Route exact path="*" component={NotFound}/>
// Only export the Root (wrapper) for usage outside of this file.
export default Radium(App);
