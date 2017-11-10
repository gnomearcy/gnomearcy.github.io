import typography from '../style/typefaces'
import mq from '../style/media_queries'
import grid from '../style/grid'
import {header_height} from '../common/header/header_style'

export default {
  container:{
    paddingTop: header_height.mobile + grid.row(3)
  },

  intro_message:{
    ...typography.mobile.body,

    // Mobile properties
    ...{
      width: grid.maxWidthMobile,
      marginBottom: grid.row(3),
      textAlign: "center"
    },

    // Desktop properties
    ...{
      [mq.desktop]:{
        width: grid.col(6),
        // Horizontal centering ...
        marginLeft: "auto",
        marginRight: "auto",
        // ...that allows bottom margin
        marginBottom: grid.row(3),

        textAlign: "center",
        fontSize: "20px",
        lineHeight: `${grid.gutter}px`
      }
    }
  },

  outro_message:{
    ...typography.mobile.body,

    // Mobile properties
    ...{
      width: grid.col(3),
      marginBottom: grid.row(3),
      textAlign: "center",
    },

    // Desktop properties
    ...{
      ...typography.desktop.body,
      ...{
        [mq.desktop]:{
          width: grid.col(6),
          marginBottom: grid.row(3),
          textAlign: "center",
          margin: `0 auto ${grid.row(3)}px auto`,
        }
      }
    }
  }
}
