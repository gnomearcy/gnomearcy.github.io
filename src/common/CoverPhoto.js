import headerStyle from './header/header_style'
import footerStyle from './footer_style'
import Aligner from './Aligner'
import grid from '../style/grid'
import mq from '../style/media_queries'
import Radium from 'radium'
import { photo, label } from './cover_photo_style'
import React, {Component} from 'react'
import RequireProps from 'react-require-props'

const desktop_image_path = "image_path";
const mobile_image_path = "mobile_image_path"

/*
  Check documentation of propCreator for more information
*/
class CoverPhoto extends React.Component{

    render(){
      if(this.props[desktop_image_path] === undefined){
        throw "Cover photo requires a valid photo path"
      }

      const mobile_path_value = this.props[mobile_image_path];
      const mobilePicStyle = mobile_path_value ? {
        backgroundImage: `url(${mobile_path_value})`
      }
      : {
        backgroundImage: `url(${this.props[desktop_image_path]})`
      }

      const defaultPictureStyle = {...photo.image, ...mobilePicStyle};
      const backgroundStyle = Object.assign({}, defaultPictureStyle,
      {
        [mq.desktop]:{
          backgroundImage: `url(${this.props[desktop_image_path]})`
        }
      })

      console.log("final style");
      console.log(backgroundStyle);

      return(
        <div style={photo.container}>
          <img style={backgroundStyle}></img>
        </div>
      )
    }
}


/*
  Helper method to create proper prop object for CoverPhoto component.
  Accepts any number of arguments.

  On single argument:
  - exception if undefined, not a string or empty
  - desktop photo is used as mobile as well

  On two arguments:
  - exception if first argument is undefined, not a string or empty
  - second argument can be undefined or empty, desktop image path is used for mobile

  On more than two arguments:
  - first two arguments are recursively passed at once into the function, following
    two-argument rule pointed up above

  NOTE: image verification is not implemented
*/
function propCreator() {
    // if "arguments" are undefined, return value is empty array []
    let args = Array.prototype.slice.call(arguments);
    if(args.length === 0){
      throw "retrieved empty array";
    }

    const checkUndefinedTypeAndEmpty = (a) => {

      console.log("checkined undefined type empty");
      console.log(a);
      if(a === undefined){
        throw "undefined argument"
      }
      if(typeof a !== "string"){
        throw "expected string, but got " + typeof a;
      }

      if(a.length === 0){
        throw "got an empty string argument"
      }
    }

    switch(args.length){
      case 1: {
        let desktop_path = args[0];
        console.log("case 1");
        console.log(desktop_path);
        checkUndefinedTypeAndEmpty(desktop_path)
        return {
          [desktop_image_path] : desktop_path
        }
      }

      case 2: {
        let desktop_path = args[0];
        checkUndefinedTypeAndEmpty(desktop_path);
        let mobile_path = args[1];
        let filtered_mobile_path;
        if(mobile_path === undefined){
          filtered_mobile_path = undefined
        }
        // Is a string and is not empty
        else if(typeof mobile_path === String && mobile_path.length > 0){
          filtered_mobile_path = mobile_path;
        }
        else{
          // It's not undefined and it's not a String
          filtered_mobile_path = undefined;
        }

        return {
          [desktop_image_path] : desktop_path,
          [mobile_image_path] : filtered_mobile_path
        }
      }

      default:{
        let for_recursion = args.slice(0,2);
        return propCreator(for_recursion[0], for_recursion[1])
      }
    }
}

export {
  propCreator
}
export default Radium(CoverPhoto)
