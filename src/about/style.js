import typo from '../style/typefaces'
import evaluator from '../style/evaluator'
import grid from '../style/grid'
import mq from '../style/media_queries'
import {header_height} from '../common/header/header_style'

export default {
  content_root:{
    paddingTop: header_height.mobile + grid.row(3)
  }
}
