import routes from '../../data/routes';
import mq from '../../style/media_queries';
import grid from '../../style/grid'
import headerLogo from './logo_style.js'
import fontAwesomeSizeConverter from '../../util/font_awesome'
import {colors} from './header_style'

const iconSize = 32;
const menuItemHeight = 70;
const linkColor = "#111";

export default {

  menu: {
    // width: grid.col(3),
    // display: "inline-block",
    backgroundColor: colors.normal,

    [mq.desktop]:{
      display: "none"
    }
  },

  item: {
    textTransform: "uppercase",
    height: menuItemHeight,
    textDecoration: "none",
    textAlign: "left",
    display: "block",
    "-webkit-tap-highlight-color": colors.pressed,

    // ":hover":{
    //   color: "green",
    //   backgroundColor: "yellow"
    // },
    // ":active":{
    //   color: "green",
    //   backgroundColor: "yellow"
    // },
    // ":focus":{
    //   color: "green",
    //   backgroundColor: "green"
    // },
    // ":checked":{
    //   color: "green",
    //   backgroundColor: "green"
    // },
    // ":enabled":{
    //   color: "green",
    //   backgroundColor: "green"
    // },
    // ":visited":{
    //   color: "green",
    //   backgroundColor: "green"
    // },

    content:{
      width: grid.maxWidthMobile,
      margin: "0 auto",
    },

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
