import typo from '../../style/typefaces'
import evaluator from '../../style/evaluator'
import grid from '../../style/grid'
import mq from '../../style/media_queries'

export default {

  root: {
    borderTop: "1px solid #ccc",

    display: "inline-block",
    width: grid.maxWidthMobile,
    [mq.desktop] : {
      width: grid.maxWidth
    }
  },

  title:
   {
      ...typo.mobile.heading1,
      ...{
        width: grid.col(3),
        display: "inline-block",
        marginTop: grid.row(1),
        marginBottom: grid.row(2),
        textAlign: "center",
        [mq.desktop]:
        {
          ...typo.desktop.heading1,
          ...{
            textAlign: "unset",
            width: grid.col(2),
          }
        }
      }
    },

  entries: {

    container: {
      width: grid.col(3),
      marginBottom: grid.row(2),

      // Allow the children to push bottom border with their bottom margin
      height: "100%",

      [mq.desktop]:{
        float: "right",
        width: grid.col(6),
        marginTop: grid.row(1),
        marginBottom: grid.row(2)
      }
    },

    entry: {
      container:{
        // TODo remove
        marginBottom: grid.row(1),

        [mq.desktop]:{
          marginBottom: grid.row(1)
        }
      },

      title: {...typo.mobile.heading2, ...{[mq.desktop]: typo.desktop.heading2}},

      // body: Object.assign({},
      //   typo.mobile.body,
      //   {
      //     [mq.desktop]: typo.desktop.body
      //   }
      // )
      // Equivalent to:
      body: { ...typo.mobile.body, ...{[mq.desktop]: typo.desktop.body}}
    }
  }
}
