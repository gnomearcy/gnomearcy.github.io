import grid from '../../style/grid'
import mq from '../../style/media_queries'
import headerStyle from './header_style'

// FontAwesome icons take "size" attribute for the image size
// The values are specified as 1x, 2x, 3x etc where x=16px
const iconSize = 32; // 2x

export default {
  container:{

    // Vertical alignment
    top: "50%",
    transform: "translateY(-50%)",
    position: "absolute",
    right: 0,

    [mq.desktop]:{
      display: "none"
    }
  },

  // FontAwesome code name for hamburger icon look-alike.
  // Used via className attribute on the FontAwesome tag.
  icon: {
    color: "black",
    fontSize: "32px",
    image: "fa-bars"
  },

  // Represents width / height
  // Exported for other components to know how big this one is, in case
  // they need this information for some calculation
  size: iconSize
}
