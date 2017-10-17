import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Switch, Route, HashRouter } from 'react-router-dom'
import Media from 'react-media'
import Radium, {StyleRoot} from 'radium'

import Home from '../home/Home';
import Work from '../work/Work';
import About from '../about/About'
import Contact from '../contact/Contact'
import DebugGrid from '../common/DebugGrid'

import Header from '../common/header/Header';
import Footer from '../common/Footer'

// This is the wrapper for navigation in header section and the content section
// It is the root component being rendered via the ReactDOM.render() method.
// It hosts the Router tag (either HashRouter, MemoryRouter or BrowserRouter) as it's root
// to provide context for all the Link and/or Route children that are being wrapped.
class LayoutRoot extends Component {

  componentDidMount(){
    console.log("Parents");
      console.log(document.body);
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
          <div>
            <Header/>
            <div>
              <Content />
              <Footer />
            </div>
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
      </div>
    );
  }
}

// Only export the Root (wrapper) for usage outside of this file.
export default Radium(LayoutRoot);
