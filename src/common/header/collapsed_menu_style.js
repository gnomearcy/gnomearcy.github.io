import routes from '../../data/routes';
import mq from '../../style/media_queries';
import grid from '../../style/grid'
import headerLogo from './logo_style.js'

const iconSize = 32;
const menuItemHeight = 70;
const linkColor = "#111";

const fontAwesomeSizeConverter = () => {
  if(iconSize % 16 !== 0){
    throw "iconSize has to me a multiple of 16";
  }
  // Formats the return value in "?x" format, where ? is computed value
  return `${iconSize / 16}x`;
}

export default {

  menu: {
    width: grid.col(3),

    [mq.desktop]:{
      display: "none"
    }
  },

  item: {
    textTransform: "uppercase",
    height: menuItemHeight,
    textDecoration: "none",
    display: "block",

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
    size: fontAwesomeSizeConverter()
  },
}
