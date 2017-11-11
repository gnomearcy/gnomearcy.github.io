import mq from '../../style/media_queries'
import grid from '../../style/grid'
import {header_height} from './header_style'
import hamburgerDims from './hamburger_style'
import {nanEvaluator} from '../../style/evaluator'

const textColor = "#111";

const dimensions = {
  image: {
    mobile: 36,
    desktop: 36
  },

  spacing:{
    mobile: 12,
    desktop: 18
  }
}

export {
  dimensions as dims
}

export default nanEvaluator({

    container: {

      textDecoration: 'none',
      color: textColor,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      userSelect: "none",
      outline: 0,
      lineHeight: `${dimensions.image.mobile}px`
    },

    image:{
      // Only one dimension has to be specified for square image
      height: dimensions.image.mobile,
      float: "left"
    },


    initials: {
      display: "inline-block",
      marginLeft: dimensions.spacing.mobile,
      fontFamily: 'Montserrat',
      fontSize: '17px',
      letterSpacing: '0.05rem',
      fontWeight: "600",

      [mq.desktop]:{
        marginLeft: dimensions.spacing.desktop
      }
    }
})
