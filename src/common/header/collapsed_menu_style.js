import routes from '../../data/routes';
import mq from '../../style/media_queries';
import grid from '../../style/grid'
import headerLogo, {dims} from './logo_style.js'
import fontAwesomeSizeConverter from '../../util/font_awesome'
import {colors} from './header_style'

const iconSize = 36;
const menuItemHeight = 70;
const linkColor = "#111";

export default {

  menu: {
    // width: grid.col(3),
    // display: "inline-block",
    backgroundColor: "#ecf0f1", // cloud, export to colors.js
    boxShadow: "0px 5px 10px -5px darkgrey",

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
    WebkitTapHighlightColor: colors.pressed,

    content:{
      width: grid.maxWidthMobile,
      margin: "0 auto",
      position: "relative"
    },

    label: {

      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: 16,
      marginLeft: iconSize + dims.spacing.mobile,
      lineHeight: `${menuItemHeight}px`,

      color: linkColor,
      ':visited': linkColor,
      ':hover': linkColor,
      ':active': linkColor
    }
  },

  icon:{
    // verticalAlign: "middle",
    color: "black",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: iconSize,
    height: iconSize,
    lineHeight: `${iconSize}px`,

    // Centers the icon horizontally since it's always a bit smaller than
    // specified width
    textAlign: "center",

    size: fontAwesomeSizeConverter(iconSize - (iconSize % 16))
  },
}
