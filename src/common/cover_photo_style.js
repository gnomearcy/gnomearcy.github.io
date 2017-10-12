import grid from '../style/grid'
import mq from '../style/media_queries'
import headerStyle from './header/header_style'
import desktopPhoto from '../data/assets/home_cover_2.jpg'
import mobilePhoto from '../data/assets/home_cover_mobile.jpg'
import {undefinedEvaluator } from '../style/evaluator'

const label = {
  container:{
    position: "absolute",
    marginTop: headerStyle.header.height,
    height: "100%",
    width: grid.maxWidthMobile,
    left: "50%",
    transform: "translateX(-50%) rotate(-7deg)",
    [mq.desktop] : {
      width: grid.maxWidth,
      transform: "translateX(-50%)"
    }
  },

  value : {
    position: "absolute",
    color: "#000000",
    fontSize: 32,
    fontFamily: "Roboto Regular",
    textAlign: "center",
    top: "50%",
    // left: "50%",
    width: grid.col(3),
    transform: "translateY(-50%)",
    [mq.desktop]: {
      fontSize: 46,
      color: "#CCCCCC",
      width: grid.col(5),

      // position: "absolute",
      // display: "block",
      // top: "50%",
      // left: "50%",
      // transform: "translateY(-50%) translateX(-50%)"
    }
  }
}

const photo = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100%"
  },

image: {
  width: "100%",
  height: "100vh",
  position: "absolute",
  display: "block",
  // background: `url(${homeCoverPhoto}) no-repeat center center fixed`
  backgroundSize: "cover",
  // backgroundImage: `url(${mobilePhoto})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",

  [mq.desktop] : {
    backgroundImage: `url(${desktopPhoto})`,
  }
}
}


// SAFE KEEPING - DO NOT DELETE
// const paralaxStyle = {
//   container: {
//     position: "relative",
//     height: "100vh",
//     width: "100%",
//     // background: `url(${homeCoverPhoto}) no-repeat center center fixed`
//     backgroundSize: "cover",
//     backgroundImage: `url(${homeCoverPhoto})`,
//     backgroundRepeat: "no-repeat",
//     backgroundAttachment: "fixed",
//     backgroundPosition: "center top"
//   }
// }

console.log("BLA!");
undefinedEvaluator(label)
export {
  label, photo
}
