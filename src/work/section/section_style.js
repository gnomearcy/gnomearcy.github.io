import typography from '../../style/typefaces'
import mq from '../../style/media_queries'
import grid from '../../style/grid'

const colors = {
    hoverBackground: "#333",
    borderColor: "#333"
}

const projectSize = grid.col(3)
const projectBorderThickness = 1

export default {

    borderTop: "1px solid #ccc",
    width: grid.maxWidthMobile,
    height: "100%",
    paddingTop: grid.row(2),

    [mq.desktop]:{
        width: grid.maxWidth,
        paddingTop: grid.row(1),
        marginBottom: grid.row(2)

    },

    title:{
        ...typography.mobile.heading1,
        ...{
          width: grid.col(3),
          display: "inline-block",
          // marginTop: grid.row(1),
          marginBottom: grid.row(2),
          textAlign: "center",
          [mq.desktop]:
          {
            ...typography.desktop.heading1,
            ...{
              textAlign: "unset",
              width: grid.col(2),
              float: "left"
            }
          }
        }
    },

    content: {

      width: grid.maxWidthMobile,

      [mq.desktop]: {

        paddingLeft: grid.gutter,
        width: grid.col(6),
        // marginLeft: grid.gutter,
        display: "inline-block"
      },

      description:
      {
        ...typography.mobile.body,
        ...{
            // Act as a block...
            display: "inline-block",
            // ... for margin to take effect
            marginBottom: grid.row(2),

            [mq.desktop]:
            {
              ...typography.desktop.body,
              ...{
                marginBottom: grid.row(1),
                // marginLeft: grid.gutter,
                display: "inline-block"
              }
            }
          }
      },

      projects : {
        container: {
          width: grid.col(3),
          height: "100%",
          [mq.desktop]: {
            width: grid.col(6),
          }
        },

        horizontalDivider:{
          display: "none",
          [mq.desktop]:{
            width: grid.gutter,
            // height: projectSize,
            display: "inline-block"
            // Optional?
            // marginBottom: grid.row(1)
          }
        },
      }
    }
}
