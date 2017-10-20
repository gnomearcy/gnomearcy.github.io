import routes from '../../data/routes';
import mq from '../../style/media_queries';
import grid from '../../style/grid'
import headerLogo, {dims} from './logo_style.js'
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
    lineHeight: `${menuItemHeight}px`,
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

      marginLeft: dims.spacing.mobile,
      // Following properties are required to center the text vertically
      // Apparently it works only for oneline text
      // display: "inline-block",
      // position: "absolute",
      // lineHeight: `${menuItemHeight}px`,
      color: linkColor,
      ':visited': linkColor,
      ':hover': linkColor,
      ':active': linkColor
    }
  },

  icon:{
    verticalAlign: "middle",

    container:{
      // Paints the wrapped icon to specified color
      // color: linkColor,
      // Same width as the header logo to align the wrapped icon horizontally
      // width: headerLogo.image.width,
      width: dims.image.mobile,
      textAlign: "center",
      display: "inline-block",
      color: "black"
      // Centers the FontAwesome tag (rendered as inline span by default)
      // textAlign: "center",
      // marginTop: (menuItemHeight - headerLogo.image.width) / 2
    },
    size: fontAwesomeSizeConverter(iconSize)
  },
}
