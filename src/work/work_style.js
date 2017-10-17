import typography from '../style/typefaces'
import mq from '../style/media_queries'
import grid from '../style/grid'

export default {
  content:{
      marginBottom: grid.row(3)
  },

  description:{
    ...typography.mobile.body,
    ...{
      width: grid.maxWidthMobile,
      height: "100%",
      marginBottom: grid.row(2),

      [mq.desktop]:
      {
        ...{
              width: grid.maxWidth,
              marginBottom: grid.row(1)
            },
        ...typography.desktop.body
      }
    }
  }
}
