import grid from '../../style/grid'
import mq from '../../style/media_queries'
import headerStyle from './header_style'

// FontAwesome icons take "size" attribute for the image size
// The values are specified as 1x, 2x, 3x etc where x=16px
const iconSize = 32; // 2x

export default {
  style:{
    float: "right",
    fontSize: iconSize,
    // Vertically align the image
    [mq.desktop]:{
      display: "none"
    },
    marginTop: (headerStyle.height - iconSize) / 2,
  },

  // FontAwesome code name for hamburger icon look-alike.
  // Used via className attribute on the FontAwesome tag.
  icon: "fa-bars",

  // Represents width / height
  // Exported for other components to know how big this one is, in case
  // they need this information for some calculation
  size: iconSize
}
