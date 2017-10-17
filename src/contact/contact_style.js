import typography from '../style/typefaces'
import mq from '../style/media_queries'
import grid from '../style/grid'

const form_padding = 2 * grid.gutter;
const form_width_desktop = grid.col(6);
const form_width_mobile = grid.col(3);

const input_padding = 20;
const input_border = 1;

const form_border = 1;

const form = {

  base:{
    border: `${form_border}px solid #ccc`,
    backgroundColor: "#F5F5F5",
    overflow: "hidden"
  },

  desktop:{
      width:  grid.col(6)
              - 4 * grid.gutter
              - 2 * form_border,
      padding: 2 * grid.gutter,
      margin: `0 auto ${grid.row(3)}px auto`
  },

  mobile:{
    width:  grid.col(3)
            - 2 * grid.gutter
            - 2 * form_border,
    padding: grid.gutter,
    marginBottom: grid.row(3)
  }
}


const input_pseudoselectors = {

  outline: "none",
  boxShadow: "0 0 1px #CCC",

  ":hover":{
    border: "1px solid #333"
  },
  ":active":{
    border: "1px solid #333"
  },
  ":focus":{
    border: "1px solid black"
  }
}

const input_base = {
  border: "1px solid #CCC",
  height: grid.row(2) - input_padding * 2,
  padding: input_padding
}

const button = {

  base:{
    float: "right",
    lineHeight: `${grid.row(2)}px`,
    userSelect: "none",
    border: "1px solid #b6b6b6",
    backgroundColor: "#eaeaea",
    textTransform: "uppercase",
    textAlign: "center",

    ":active":{
      backgroundColor: "black",
      backgroundColor: "#dedede"
    }
  }
}


export default {
  intro_message:{
    ...typography.mobile.body,

    // Mobile properties
    ...{
      width: grid.col(3),
      marginBottom: grid.row(3)
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

  form:{

    desktop:{
      ...form.base,
      ...form.desktop
    },

    mobile: {
      ...form.base,
      ...form.mobile
    },

    name:{
      mobile:{
        ...typography.mobile.body,
        ...{
          width: form.mobile.width
           - 2 * input_border
           - 2 * input_padding,
          marginBottom: grid.row(1) * 1.5,
        },
        ...input_pseudoselectors,
        ...input_base
      },

      desktop:{
        ...typography.desktop.body,
        ...{
          width:
                form.desktop.width
                - 2 * input_border
                - 2 * input_padding,
          height: grid.row(2) - input_padding * 2,
          padding: input_padding,
          marginBottom: grid.row(1) * 1.5,
          border: `${input_border}px solid #CCC`,
        },
        ...input_pseudoselectors,
        ...input_base
      }
    },

    email:{

      mobile:{
        ...typography.mobile.body,
        ...{
          width: form.mobile.width
           - 2 * input_border
           - 2 * input_padding,
          padding: input_padding,
          height: grid.row(2) - input_padding * 2,
          marginBottom: grid.row(2),
          border: `${input_border}px solid #CCC`,
        },
        ...input_pseudoselectors
      },

      desktop:{
        ...typography.desktop.body,
        ...{
          width: form.desktop.width
                - 2 * input_border
                - 2 * input_padding,
          height: grid.row(2) - input_padding * 2,
          padding: input_padding,
          marginBottom: grid.row(2),
          border: `${input_border}px solid #CCC`,
        },
        ...input_pseudoselectors
      }
    },

    message:{

      mobile: {
        ...typography.mobile.body,
        ...{
          width: form.mobile.width
           - 2 * input_border
           - 2 * input_padding,
          padding: input_padding,
          // height: grid.row(2),
          marginBottom: grid.row(1),
          minHeight: grid.row(6) - 2 * input_padding,
          height: grid.row(12),
          resize: "vertical"
        },
        ...input_pseudoselectors,
        ...input_base
      },

      desktop:{
        ...typography.desktop.body,
        ...{
          width: form.desktop.width
                - 2 * input_border
                - 2 * input_padding,
          paddingLeft: input_padding,
          paddingRight: input_padding,
          paddingTop: input_padding,
          marginBottom: grid.row(1),
          minHeight: grid.row(6) - 2 * input_padding,
          height: grid.row(12),
          resize: "vertical"
        },

        ...input_pseudoselectors,
        ...input_base
      }
    },

    send:{

      mobile:{
        ...typography.mobile.body,
        ...{
          width: grid.col(2),
          height: grid.row(2),
        },
        ...button.base
      },

      desktop:{
        ...typography.desktop.body,
        ...{
          height: grid.row(2),
          width: grid.col(3),
        },
        ...button.base
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
