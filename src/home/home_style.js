import typography from '../style/typefaces'
import mq from '../style/media_queries'
import grid from '../style/grid'
import button from '../style/button'

const button_border = 1;

export default {
  title: {

    ...typography.mobile.titleText,
    ...{
      width: grid.maxWidthMobile,
      textAlign: "center",
      display: "inline-block",
      marginTop: grid.row(3),
      marginBottom: grid.row(2),

      [mq.desktop]: {
        ...typography.desktop.titleText,
        ...{
          width: grid.maxWidth,
          textAlign: "center",
          display: "inline-block",
          marginTop: grid.row(3),
          marginBottom: grid.row(3)
        }
      }
    }
  },

  info: {
      container:{

        width: grid.col(3),
        marginBottom: grid.row(3),

        [mq.desktop]: {
          margin: "0 auto",
          width: grid.col(6),
          marginBottom: grid.row(4),
          // ,height: "auto"
        }
      },

      separator:{

        height: grid.row(2),

        [mq.desktop]: {
          width: grid.gutter,
          height: grid.col(1),
          display: "inline-block"
        }
      }
  },

  contact: {
    container:{
        width: grid.maxWidthMobile,
        marginBottom: grid.row(3),

        [mq.desktop]: {
          width: grid.maxWidth,
          // Fix for floating children
          // With this, the height of this wrapper is measured based on children
          overflow: "hidden",
          // ,height: "auto"
          marginBottom: grid.row(3)
        }
    },

    message: {

        ...typography.mobile.titleText,
        ...{

          // Mobile style
          lineHeight: `${grid.row(2)}px`,
          width: grid.col(3),
          display: "inline-block",
          textAlign: "center",
          marginBottom: grid.row(1),

          // Desktop style
          [mq.desktop]: {

            ...typography.desktop.titleText,
            ...{
              width: grid.col(4),
              display: "inline-block",
              marginBottom: 0,
              // Horizontal text alignment
              textAlign: "center",
              // Vertical text alignment
              lineHeight: `${grid.row(2)}px`,
            }
          }
        }
    },

    button_desktop: {
      ...typography.desktop.body,
      ...{
        width: grid.col(4),
        height: grid.row(2) - button_border * 2,
        float: "right",
        lineHeight: `${grid.row(2)}px`,
      },
      ...button
    },

    button_mobile:{
      ...typography.mobile.body,
      ...{
        width: grid.col(3),
        height: grid.row(2) - button_border * 2,
        border: `${button_border}px solid black`,
        backgroundColor: "#ccc",
        color: "#333",
        display: "inline-block",

        textDecoration: "none",

        // Disable text highlighting
        userSelect: "none",

        // Center text in the div
        textAlign: "center",
        lineHeight: `${grid.row(2)}px`,
        textTransform: "uppercase",
        fontWeight: "bold",

        ":hover":{
          backgroundColor: "#bbb",
          color: "#333"
        },

        ":active":{
          backgroundColor: "#aaa",
          color: "#111"
        }
      }
    }
  },
}
