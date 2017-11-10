import grid from '../style/grid'
import mq from '../style/media_queries';
import fontAwesomeSizeConverter from '../util/font_awesome'

const iconSize = 32;
const iconColor = "#111";
const footer_height = grid.rowHeight * 4;

const linkHoverGenerator = (color) => {
  return {
    ":hover": {
      color: `${color}`,
      transform: "scale(1.2)"
    }
  }
}

export {
  linkHoverGenerator,
  footer_height
}

export default {

  width: "100%",
  height: footer_height,
  // display: "inline-block",
  backgroundColor: "#ccc",
  position: "relative",
  // bottom: 0,

  content:{
    display: "inline-block",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translateY(-50%) translateX(-50%)",
    width: "100%"
  },

  icons: {
    // Global measurements
    horizontalSpacing : "10px",
    textAlign: "center",

    icon:{
      fontSize: "27px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",

      container: {
        color: "black",
        width: "36px",
        height: "36px",
        // color: iconColor,
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "inline-block",
        position: "relative",

        // For scale up on hover
        transition: "all 0.2 ease-in",

      }
    }
  },

  initials:{

    fontSize: 18,
    color: "#111",
    fontFamily: "Montserrat",
    marginTop: "10px",
    display: "inline-block",
    width: "100%",
    textAlign: "center"
  }
}
