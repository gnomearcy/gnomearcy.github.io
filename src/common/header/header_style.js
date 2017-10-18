import grid from '../../style/grid'
import mq from '../../style/media_queries'

const headerHeight = grid.rowHeight * 3;
const headerBgColors= {
  normal: "rgba(204,204,204,0.8)",
  pressed: "rgba(165,165,165,0.2)"
}

export {
  headerBgColors as colors
}

export default {

    header: {
      width: grid.col(3),
      height:  headerHeight,
      display: 'inline-block',
      position: "relative",
      [mq.desktop] : {
        width: grid.maxWidth
      },
    },


    // Wrapper for header content that...
    root: {
      height: headerHeight + 4,
      // ... has its own style and dimension ...
      backgroundColor: headerBgColors.normal,
      // height: headerHeight,

      // ... spans entire viewport width...
      width: "100%",
      // left: "0",
      // right: "0",

      // ... is fixed on top of viewport and above every other element...
      zIndex: 9999,
      position: "fixed",

      // ... while centering wrapping content
      textAlign: "center",
      [mq.desktop]:{
        height: headerHeight
      }
    }
}
