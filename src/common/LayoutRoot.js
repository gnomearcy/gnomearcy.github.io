import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, HashRouter, BrowserRouter} from 'react-router-dom'
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
import Footer from '../common/Footer'

import {home, work, about, contact} from '../data/routes'

// This is the wrapper for navigation in header section and the content section
// It is the root component being rendered via the ReactDOM.render() method.
// It hosts the Router tag (either HashRouter, MemoryRouter or BrowserRouter) as it's root
// to provide context for all the Link and/or Route children that are being wrapped.
class LayoutRoot extends Component {

  componentDidMount(){
    document.body.style["margin"] = "0px";
    document.body.style["padding"] = "0px";
    document.body.style["width"] = "100%";
    document.body.style["height"] = "100%";
    document.body.style["position"] = "absolute";
  }

  render(){
    return(
      <StyleRoot>
        <HashRouter>
          <FeatureToHeaderConnection />
        </HashRouter>
      </StyleRoot>
    );
  }
}



class FeatureToHeaderConnection extends React.Component{

  constructor(props){
    super(props)
    this.featureLoaded = this.featureLoaded.bind(this)
    this.state = {
      // Home feature is first loaded
      highlight: home.code
    }
  }

  featureLoaded(chosen_feature){

    console.log("Chosen feature");
    console.log(chosen_feature);
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
      <div>
        <Header highlight={this.state.highlight}/>
        <div>
          <div>
            <Route exact path={home.href} render={() => <Home reportTo={this.featureLoaded}/>} />
            <Route exact path={work.href} render={() => <Work reportTo={this.featureLoaded}/>} />
            <Route exact path={about.href}  render={() => <About reportTo={this.featureLoaded}/>}/>
            <Route exact path={contact.href} render={() => <Contact reportTo={this.featureLoaded}/>}/>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

// <Route exact path="*" component={NotFound}/>
// Only export the Root (wrapper) for usage outside of this file.
export default Radium(LayoutRoot);
