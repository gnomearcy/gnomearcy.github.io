import typography from '../../../style/typefaces'
import mq from '../../../style/media_queries'
import grid from '../../../style/grid'
import base from './base_style'
import {colors} from '../../../common/header/header_style'

const layer_base = {
  width: "inherit",
  height: "inherit",
  position: "absolute"
}

const info_height = 50;

// Base style properties for project name and role
const info_base = {
  // Font color
  color: "white",

  // Required to position:
  // - name on top
  // - role on bottom
  position: "absolute",

  // TODO should this be a brand color? If so, refactor out
  backgroundColor: "#2dbe60",

  width: "inherit",
  height: info_height,

  textAlign: "center",
  lineHeight: `${info_height}px`
}

export default {

    root: {
      width: base.width,
      height: base.height,
      marginTop: grid.row(1),
      display: "inline-block",
      WebkitTapHighlightColor: colors.pressed,
    },

    image: {
      ...layer_base,
      ...{
        // Obsolete?
        backgroundRepeat: "no-repeat",
      }
    },

    top_overlay: {
      container:{
        ...layer_base,
        ...{
          opacity: 0,

          ":hover": {
            opacity: "1",
            // backgroundColor: "#ccc",
            transition: "opacity .2s ease-out"
          }
        }
      },

      title:{
        ...typography.mobile.heading2,
        ...info_base
      },

      role:{
        ...typography.mobile.body,
        ...info_base,
        ...{
          bottom: 0
        }
      }
    }
}
