import grid from '../style/grid'
import mq from '../style/media_queries';
import fontAwesomeSizeConverter from '../util/font_awesome'

const iconSize = 32;

export default {
  height: grid.rowHeight * 4,
  width: grid.col(3),
  display: "inline-block",

  icon: {
    container: {
      width: 36,
      backgroundColor: "white",
      borderRadius: "50%",
      display: "inline-block"
    },
    size: fontAwesomeSizeConverter(iconSize)
  },

  initials : {
    height: 28,
    fontSize: 18,
    fontFamily: "Comic-sans"
  },

  underlay:{
    backgroundColor: "#ccc"
  }
}
