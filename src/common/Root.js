import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Switch, Route, HashRouter } from 'react-router-dom'

import Home from '../home/Home';
import Work from '../work/Work';
import About from '../about/About'
import Contact from '../contact/Contact'

import Header from '../common/Header';
import Footer from '../common/Footer'

// This is the wrapper for navigation in header section and the content section
// It is the root component being rendered via the ReactDOM.render() method.
// It hosts the Router tag (either HashRouter, MemoryRouter or BrowserRouter) as it's root
// to provide context for all the Link and/or Route children that are being wrapped.
class Root extends Component {
  render(){
    return(
      <HashRouter>
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </HashRouter>
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
export default Root;
