import routes from '../../data/routes';
import mq from '../../style/media_queries';
import grid from '../../style/grid'


export default {

  container:{
    width: grid.col(3),
    textTransform: "uppercase",

    [mq.desktop]:{
      display: "none",
      width: grid.maxWidth
    }
  },

  menuItem:{
    height: 70,
    textDecoration: "none",
    display: "block"
  },

  icon:{
    size: 32,
    width: '4em',
    height: '4em'
  }
}
