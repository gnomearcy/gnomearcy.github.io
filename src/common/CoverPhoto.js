import React, {Component} from 'react'
import headerStyle from './header/header_style'
import footerStyle from './footer_style'
import homeCoverPhoto from '../data/assets/home_cover.jpg'
import Aligner from './Aligner'
import grid from '../style/grid'
import mq from '../style/media_queries'

const coverPhotoStyle =  {
  // backgroundColor: "#ff0f0f",
  // textAlign: "center",
  width: "100%",
  position: "absolute",
  background: `url(${homeCoverPhoto}) no-repeat scroll center top transparent`
};

const textStyle = {
  container: {
    width: grid.col(5),
    position: "absolute"
  },

  label: {
    color: "#CCCCCC",
    fontSize: 46,
    fontFamily: "Roboto Regular",
    textAlign: "center",

    [mq.desktop] : {
      color: "#CCCCCC",
      fontSize: 46,
      fontFamily: "Roboto Regular",
      textAlign: "center"
    }
  }
}

class CoverPhotoLabel extends React.Component {

    state = {
      newLeftMargin: "0px"
    }

    // Callback method invoked when the window is resized
    // By using the "arrow" syntax, the method is automatically bound to "this"
    // which let's us set new state on "this" and trigger a re-render.
    // Also, this way we don't need to bind in constructor
    updateDimensions = () => {

        const contentWidth = grid.maxWidth;
        const labelWidth = grid.col(5);
        const windowWidth = window.innerWidth;
        console.log(window);
        console.log(`windowWidth - ${windowWidth}`);

        const newMargin = (windowWidth - contentWidth) / 2;
        // Trigger re-render
        this.setState({
          newLeftMargin: newMargin
        });
    }

    componentWillMount(){
      this.updateDimensions();
    }

    componentDidMount(){
      window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUmount(){
      window.removeEventListener("resize", this.updateDimensions);
    }

    render(){
      const tempMarginTop = 250;
      const tempMarginLeft = 200;
      const internalStyle = {
        marginLeft: this.state.newLeftMargin + tempMarginLeft,
        marginTop: this.props.coverPhotoUnderHeader ? headerStyle.height + tempMarginTop : tempMarginTop
      }

      console.log(internalStyle);
      const mergedStyle = {...textStyle.container, ...internalStyle};
      return <div style={mergedStyle}>
        <div style={textStyle.label}>{this.props.message}</div>
      </div>
    }
}

class CoverPhoto extends React.Component{

    updateHeightAndWidth = () => {
      // Trigger re-render
      this.setState({
        coverWidth: window.innerWidth,
        coverHeight: window.innerHeight
      });
    }
    componentWillMount(){
      this.updateHeightAndWidth();
    }
    componentDidMount(){
      window.addEventListener("resize", this.updateHeightAndWidth);
    }

    componentWillUmount(){
      window.removeEventListener("resize", this.updateHeightAndWidth);
    }

    render(){
      let viewportHeight = document.documentElement.clientHeight;

      const resizedStyle = {
        height: this.state.coverHeight - (this.props.underHeader ? 0 : headerStyle.height),
        width: this.state.coverWidth
      };


      // const height = viewportHeight - (this.props.underHeader ? 0 : headerStyle.height);
      // const mergedStyle = {...coverPhotoStyle,...{height: height}}
      const mergedStyle = {...coverPhotoStyle,...resizedStyle};
      // const internalStyle = {
      //   position: "relative"
      // }

      console.log("Novi stil");
      return <div style={resizedStyle}>
          <img style={mergedStyle}></img>
          <CoverPhotoLabel coverPhotoUnderHeader={true} message="My name is Tomislav and I'm a software developer from Croatia"/>
        </div>
    }
}

export default CoverPhoto
