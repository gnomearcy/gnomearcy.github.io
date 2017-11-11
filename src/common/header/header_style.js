import grid from '../../style/grid'
import mq from '../../style/media_queries'

// const headerHeight = grid.rowHeight * 3;
const header_height= {
  mobile: grid.rowHeight * 1.9,
  desktop: grid.rowHeight * 2
}
const headerBgColors= {
  normal: "#ecf0f1",
  pressed: "rgba(165,165,165,0.2)"
}

export {
  headerBgColors as colors,
  header_height
}

export default {

    header: {
      width: grid.col(3),
      position: "relative",
      margin: "0 auto",
      height: header_height.mobile,

      [mq.desktop] : {
        width: grid.maxWidth,
        height: header_height.desktop
      },
    },


    // Wrapper for header content that...
    root: {
      height: header_height.mobile,
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
      // ... either when asked nicely or forced to do so.
      top: 0,
      boxShadow: "0 5px 10px -5px darkgrey",
      [mq.desktop]:{
        height: header_height.desktop,
        opacity: "0.85"
      }
    }
}
