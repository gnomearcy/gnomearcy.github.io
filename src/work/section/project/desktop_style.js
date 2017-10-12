import typography from '../../../style/typefaces'
import mq from '../../../style/media_queries'
import grid from '../../../style/grid'
import base from './base_style'

export default {

    width: base.height - base.borderThickness * 2,
    marginTop: grid.row(1),
    display: "inline-block",
    border: `${base.borderThickness}px solid ${base.colors.borderColor}`,

    image: {
      width: base.width,
      height: base.height,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      zIndex: "-1"
    },

    info: {
      container:{

        width: base.width - base.borderThickness * 2,
        height: base.height - base.borderThickness * 2,
        opacity: 0,
        ":hover": {
          opacity: "1",
          backgroundColor: "#ccc",
          transition: "opacity .2s ease-out"
        }
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
