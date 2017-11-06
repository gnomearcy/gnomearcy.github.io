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
import {footer_height} from '../common/footer_style'

import {home, work, about, contact} from '../data/routes'

// This is the wrapper for navigation in header section and the content section
// It is the root component being rendered via the ReactDOM.render() method.
// It hosts the Router tag (either HashRouter, MemoryRouter or BrowserRouter) as it's root
// to provide context for all the Link and/or Route children that are being wrapped.
class LayoutRoot extends Component {

  componentWillMount(){
    document.body.style["margin"] = "0px";
    document.body.style["padding"] = "0px";
    document.body.style["width"] = "100%";
    document.body.style["height"] = "100%";
    document.body.style["position"] = "absolute";

    // let tags = document.getElementsByTagName("html")
    // tags[0].style["height"] = "100%"

    // Part of "fix the footer to the bottom" problem
    // document.getElementById("root").style["height"] = "100%"
  }

  onRouteUpdate = () =>{
    console.log("rute update");
    console.log(window.location.pathname);
  }
  render(){
    return(
      <StyleRoot
        id="my_radium_style_root">
        <HashRouter
          onUpdate={this.onRouteUpdate}
          id="my_react_hash_router">
          <FeatureToHeaderConnection />
        </HashRouter>
      </StyleRoot>
    );
  }
}

// Style that aligns footer to the bottom of viewport if the content is not
// big enough vertically to push it down.
// Prerequisites are:
// - body and html should have height: 100%, this is solved in LayoutRoots'
// componentDidMount callback
// - everything but the Footer should be wrapped in a container - this is automatically
// achieved by wrapping all possible Route components in render method of
// FeatureToHeaderConnection component
// - the same container has the following style applied to it to fix the footer
//
// Source:
// https://stackoverflow.com/a/25671210/3744259
// const content_wrapper = {
//   minHeight:"100%",
//   marginBottom: -footer_height,
//   // paddingBottom: footer_height,
// }

class FeatureToHeaderConnection extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      // Home feature is first loaded
      highlight: home.code
    }
  }

  componentDidMount(){
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);

  }
  componentWillMount() {
      this.updateDimensions();
  }

  updateDimensions(){
    // Called when window is resized
    let viewportHeight = document.documentElement.clientHeight
    // on window resize -> calculate if header should be stickied to bottom if the content is too narrow or should it float underneath
    // on route changed
  }

  routeChanged = (new_content_height) => {
    console.log("Route changed");
    console.log(window.location.href);
    // let contentHeight = this.content.getBoundingClientRect().height;
    let contentHeight = document.getElementById("content_container")
    let viewportHeight = document.documentElement.clientHeight;
    console.log("content height  / viewport height");
    console.log(new_content_height);
    console.log(viewportHeight);

    this.setState({
      stickyFooter: viewportHeight - contentHeight > footer_height
    })
  }

  render(){
    return(
      <div
        id="header_content_footer_container"
        style={{
          minHeight: "100%",
          position: "relative"
        }}>
        <Header highlight={this.state.highlight}/>
        <div
          id="content_footer_container"
          style={{
            paddingBottom: footer_height
          }}>
          <RouteContainer
            routeChanged={this.routeChanged}
            id="content_container">
            <Route exact path={home.href} component={Home} />
            <Route exact path={work.href} component={Work} />
            <Route exact path={about.href}  component={About}/>
            <Route exact path={contact.href} component={Contact}/>
          </RouteContainer>
          <Footer/>
        </div>
      </div>
    )
  }
}

class ContentFooter extends React.Component{

    render(){
      return(
        <div
          id="content_footer_container">
          <RouteContainer
            routeChanged={this.routeChanged}
            id="content_container">
            <Route exact path={home.href} component={Home} />
            <Route exact path={work.href} component={Work} />
            <Route exact path={about.href}  component={About}/>
            <Route exact path={contact.href} component={Contact}/>
          </RouteContainer>
          <Footer sticky={this.state.stickyFooter}/>
        </div>
      )
    }
}

// TODO potentially remove this when footer problem is solved
class RouteContainer extends React.Component{
  componentDidUpdate(){
    console.log("Route got changed!");
    console.log(this.this_root.getBoundingClientRect().height);
    console.log(this.this_root.style["height"]);
    this.props.routeChanged(this.this_root.getBoundingClientRect().height)
  }
  render(){
    return <div ref={this_root => this.this_root = this_root}>{this.props.children}</div>
  }
}

// <Route
// ref={route => this.route = route}
// exact path={home.href} render={() => <Home reportTo={this.featureLoaded}/>} />
// <Route exact path={work.href} render={() => <Work reportTo={this.featureLoaded}/>} />
// <Route exact path={about.href}  render={() => <About reportTo={this.featureLoaded}/>}/>
// <Route exact path={contact.href} render={() => <Contact reportTo={this.featureLoaded}/>}/>

// <div
//   style={{height: "100%"}}
//   id="header_content_footer_container">
//   <Header highlight={this.state.highlight}/>
//   <div
//     style={{height: "100%"}}
//     id="content_footer_container">
//     <div
//       id="content_container"
//       style={content_wrapper}>
//         <Route exact path={home.href} render={() => <Home reportTo={this.featureLoaded}/>} />
//         <Route exact path={work.href} render={() => <Work reportTo={this.featureLoaded}/>} />
//         <Route exact path={about.href}  render={() => <About reportTo={this.featureLoaded}/>}/>
//         <Route exact path={contact.href} render={() => <Contact reportTo={this.featureLoaded}/>}/>
//     </div>
//     <Footer />
//   </div>
// </div>

// <Route exact path="*" component={NotFound}/>
// Only export the Root (wrapper) for usage outside of this file.
export default Radium(LayoutRoot);
