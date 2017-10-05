import mq from '../style/media_queries'
import grid from '../style/grid'
import footerStyle from './footer_style'
import headerStyle from './header/header_style'

// TODO: this file is obsolete?
const style = {
   width: grid.col(3),
   marginLeft: "auto",
   marginRight: "auto",

   [mq.desktop]: {
     width: grid.maxWidth
   }
}
