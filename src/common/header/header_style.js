import grid from '../../style/grid'
import mq from '../../style/media_queries'

// Mobile first approach
export default {
  
    width: grid.col(3),
    height: grid.rowHeight * 3,
    display: 'inline-block',
    [mq.desktop] : {
      width: grid.maxWidth
    },

    // Basically a div that provides background for the header but spans
    // the entire width of the viewport as per design.
    underlay: {
      backgroundColor: "#ccc"
    }
}
