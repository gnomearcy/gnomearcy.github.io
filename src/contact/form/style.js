import typography from '../../style/typefaces'
import mq from '../../style/media_queries'
import grid from '../../style/grid'
import button from '../../style/button'

const form_padding = 2 * grid.gutter;
const form_border = 1;
const form_style = {
  width:{
    mobile: grid.col(3),
    desktop: grid.col(6)
  },
  padding: 2 * grid.gutter,

  content_width:{
    desktop: grid.col(6) - 2 * grid.gutter - 2 * form_border,
    mobile: grid.col(3) - 2 * grid.gutter - 2 * form_border
  }
}


const input_padding = 20;
const input_border = 1;
const input_style = {

  base:{
    border: `${input_border}px solid #CCC`,
    height: grid.row(2) - input_padding * 2,
    padding: input_padding,
    outline: "none",
    boxShadow: "0 0 1px #CCC"
  },

  pseudoselectors:{
    // Override the "input" elements user agent stylesheet
    outline: "none",
    border: `${input_border}px solid #CCC`,

    ":hover":{
      border: `${input_border}px solid #333`
    },
    ":active":{
      border: `${input_border}px solid #333`
    },
    ":focus":{
      border: `${input_border}px solid black`
    }
  }
}

export default {

  form: {
    border: `${form_border}px solid #ccc`,
    backgroundColor: "#F5F5F5",
    overflow: "hidden",

    width:  form_style.width.mobile
            - 2 * grid.gutter
            - 2 * form_border,
    padding: grid.gutter,
    marginBottom: grid.row(3),

    [mq.desktop]: {
      width:  form_style.width.desktop
              - 4 * grid.gutter
              - 2 * form_border,
      padding: 2 * grid.gutter,
      margin: `0 auto ${grid.row(3)}px auto`
    }
  },

  name: {
    container:{
      marginBottom: grid.row(1) * 1.5,
      [mq.desktop]: {
        // custom desktop style
      }
    },

    input: {
      // Mobile - order is important - custom style goes at end
      ...typography.mobile.body,
      ...input_style.pseudoselectors,
      ...{
        // custom style (at end)
        width: `calc(100% - 2 * ${input_padding}px - 2 * ${input_border}px)`,
        padding: input_padding,
        height: grid.row(2) - input_padding * 2,
      },

      [mq.desktop]: {
        ...typography.desktop.body,
        ...{
          width: `calc(100% - 2 * ${input_padding}px  - 2 * ${input_border}px)`,
          height: grid.row(2) - input_padding * 2,
          padding: input_padding
        },
      }
    }
    // Error message style can be added here to inject
    // and applied into the error component
  },

  email: {
    container:{
      marginBottom: grid.row(2),
      [mq.desktop]:{
        // custom desktop style
      }
    },

    input: {
      ...typography.mobile.body,
      ...input_style.pseudoselectors,
      ...{
        width: `calc(100% - 2 * ${input_padding}px - 2 * ${input_border}px)`,
        padding: input_padding,
        height: grid.row(2) - input_padding * 2,
      },

      [mq.desktop]:{
        ...typography.desktop.body,
        ...{
          width: `calc(100% - 2 * ${input_padding}px - 2 * ${input_border}px)`,
          height: grid.row(2) - input_padding * 2,
          padding: input_padding
        }
      }
    }
  },

  message:{

    container:{
      marginBottom: grid.row(1),
      [mq.desktop]:{
        marginBottom: grid.row(1),
      }
    },

    input:{
      ...typography.mobile.body,
      // Both mobile and desktop share the same pseudoselectors
      ...input_style.pseudoselectors,
      ...{
        width: `calc(100% - 2 * ${input_padding}px - 2 * ${input_border}px)`,
        padding: input_padding,
        minHeight: grid.row(6) - 2 * input_padding,
        height: grid.row(12),
        resize: "vertical"
      },

      [mq.desktop]:{
        ...typography.desktop.body,
        // Input an object with custom desktop pseudoselectors here

        // Also input an object with custom properties
        // NOTE: seting height apparently makes textbox not resizeable
      }
    }
  },

  button:{
    ...typography.mobile.body,
    ...button,
    ...{
      // Width is not required, it will fill entire space
      height: grid.row(2),
      lineHeight: `${grid.row(2)}px`
    },

    [mq.desktop]:{
      ...typography.desktop.body,
      ...{
        height: grid.row(2),
        width: grid.col(3),
        lineHeight: `${grid.row(2)}px`,
        float: "right"
      }
    }
  }
}
