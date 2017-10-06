import grid from '../../style/grid'
import mq from '../../style/media_queries'

const headerHeight = grid.rowHeight * 3;

// Mobile first approach
export default {

    width: grid.col(3),
    height:  headerHeight,
    display: 'inline-block',
    [mq.desktop] : {
      width: grid.maxWidth
    },

    // Basically a div that provides background for the header but spans
    // the entire width of the viewport as per design.
    underlay: {
      backgroundColor: "rgba(204,204,204,0.8)",
      height: headerHeight
    }
}
