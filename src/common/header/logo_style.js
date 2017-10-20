import mq from '../../style/media_queries'
import grid from '../../style/grid'
import {header_height} from './header_style'
import hamburgerDims from './hamburger_style'
import {nanEvaluator} from '../../style/evaluator'

const imageDimension = 36;
const textColor = "#111";

export default nanEvaluator({

    container: {

      textDecoration: 'none',
      color: textColor,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      userSelect: "none",
      outline: 0,
      lineHeight: `${imageDimension}px`
    },

    image:{
      // Only one dimension has to be specified for square image
      height: imageDimension,
      float: "left"
    },


    initials: {
      dispplay: "inline-block",
      marginLeft: imageDimension + 10,
      fontFamily: 'Comic-sans',
      fontSize: '1.2rem',
      letterSpacing: '0.05rem',
      // paddingLeft: '1.0rem',
      // paddingRight: '1.0rem'
    }
})
