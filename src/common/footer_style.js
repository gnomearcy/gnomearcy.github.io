import grid from '../style/grid'
import mq from '../style/media_queries';
import fontAwesomeSizeConverter from '../util/font_awesome'

const iconSize = 32;
const iconColor = "#111";

// Shared header height for desktop and mobile screens.
// This value is used in a Footers' parent component to fixate Footer to the
// viewport bottom in case the page content is not high enough.
//
// In case where header height should be different on mobile and desktop,
// the parent component should implement media query components (via an npm package)
// and this module should export both sizes.
const footer_height = grid.rowHeight * 4;
export{
  footer_height
}

export default {
  height: footer_height,
  // width: grid.col(3),
  display: "inline-block",

  icon: {
    // Global measurements
    horizontalSpacing : "10px",

    container: {
      width: "36px",
      height: "36px",
      // color: iconColor,
      textAlign: "center",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "inline-block",
    },

    // TODO: Add hover pseudoelements
    color: "black",
    lineHeight: "36px",
    height: "36px",
    fontSize: "24px",

    // Overriding "display" property of ".fa" FontAwesome class
    display: "inline-block",

  },

  initials : {
    fontSize: 18,
    color: "#111",
    fontFamily: "Montserrat",
    container:{
      marginTop: "10px",
    }
  },

  underlay:{
    backgroundColor: "#ccc"
  }
}
