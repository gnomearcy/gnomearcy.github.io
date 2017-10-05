import grid from '../style/grid'
import mq from '../style/media_queries';
import fontAwesomeSizeConverter from '../util/font_awesome'

const iconSize = 32;
const iconColor = "#111";

export default {
  height: grid.rowHeight * 4,
  width: grid.col(3),
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
    fontFamily: "Comic-sans",
    container:{
      marginTop: "10px",
    }
  },

  underlay:{
    backgroundColor: "#ccc"
  }
}
