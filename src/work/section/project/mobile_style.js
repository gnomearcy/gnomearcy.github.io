import typography from '../../../style/typefaces'
import mq from '../../../style/media_queries'
import grid from '../../../style/grid'
import base from './base_style'
import {colors} from '../../../common/header/header_style'

export default {

    root:{
      width: base.width,
      marginTop: grid.row(1),
      display: "inline-block",
      marginBottom: grid.row(1),
      textDecoration: "none",
      color: "black",
      WebkitTapHighlightColor: colors.pressed,
    },

    image: {
      width: base.width,
      height: base.height,
      // backgroundPosition: "center",
      // backgroundRepeat: "no-repeat"
    },

    underlay: {

      marginTop: grid.row(1) / 2,
      width: base.width,

      title:{

        ...typography.mobile.heading2,
        ...{
          textAlign: "center",
          width: "100%",
          height: grid.row(1),
        }
      },

      role:{
        ...typography.mobile.body,
        ...{
          textAlign: "center",
          width: "100%",
          height: grid.row(1),
          }
      }
    }
}
