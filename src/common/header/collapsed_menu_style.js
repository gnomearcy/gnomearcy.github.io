import routes from '../../data/routes';
import mq from '../../style/media_queries';
import grid from '../../style/grid'
import headerLogo from './logo_style.js'
import fontAwesomeSizeConverter from '../../util/font_awesome'

const iconSize = 32;
const menuItemHeight = 70;
const linkColor = "#111";

export default {

  menu: {
    width: grid.col(3),
    display: "inline-block",

    [mq.desktop]:{
      display: "none"
    }
  },

  item: {
    textTransform: "uppercase",
    height: menuItemHeight,
    textDecoration: "none",
    display: "-webkit-box",

    label: {
      paddingLeft: headerLogo.initials.paddingLeft,

      // Following properties are required to center the text vertically
      // Apparently it works only for oneline text
      display: "inline-block",
      position: "absolute",
      lineHeight: `${menuItemHeight}px`,
      color: linkColor,
      ':visited': linkColor,
      ':hover': linkColor,
      ':active': linkColor
    }
  },

  icon:{
    container:{
      // Paints the wrapped icon to specified color
      color: linkColor,
      // Same width as the header logo to align the wrapped icon horizontally
      width: headerLogo.logo.width,
      display: "inline-block",
      // Centers the FontAwesome tag (rendered as inline span by default)
      textAlign: "center",
      marginTop: (menuItemHeight - headerLogo.logo.width) / 2
    },
    size: fontAwesomeSizeConverter(iconSize)
  },
}
