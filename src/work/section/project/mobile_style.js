import typography from '../../../style/typefaces'
import mq from '../../../style/media_queries'
import grid from '../../../style/grid'
import base from './base_style'

export default {

    width: base.width,
    marginTop: grid.row(1),
    display: "inline-block",
    marginBottom: grid.row(1),

    image: {
      width: base.width,
      height: base.height,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: `${base.borderThickness}px solid ${base.colors.borderColor}`
    },

    info: {
      container:{
        width: base.width - base.borderThickness * 2
      },

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
