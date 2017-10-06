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
    const stackedHeaderStyle = {
      zIndex: 10,
      width: "100%",
      position: "absolute",

    }

    return(
      <StyleRoot>
        <HashRouter>
          <div>
                <DebugGrid style={{zIndex: 999}}/>
          </div>
        </HashRouter>
      </StyleRoot>
    );
    // return(
    //   <StyleRoot>
    //     <HashRouter>
    //       <div>
    //         <Header />
    //         <div>
    //           <div>
    //             <DebugGrid style={{zIndex: 999}}/>
    //             // <Content />
    //           </div>
    //           <Footer />
    //         </div>
    //       </div>
    //     </HashRouter>
    //   </StyleRoot>
    // );
  }
}


// <div>
//   <div>
//     <Header style={stackedHeaderStyle}/>
//     <Content />
//   </div>
//   <Footer />
// </div>
class Content extends Component {

  componentDidMount(){
    console.log("BODY");
    console.log(document.body);
  }
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
export default LayoutRoot;
