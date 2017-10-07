import grid from '../../style/grid'
import mq from '../../style/media_queries'
import headerDims from './header_style'

const fontSize = 18;

export default {

      linkContainer: {
        display: "none",
        [mq.desktop]: {
          display: "inline-block",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)"
        }
      },

      link:{
        paddingLeft: '2.5rem',
        fontFamily: 'Comic-sans',
        textDecoration: 'none',
        fontSize: fontSize,
        letterSpacing: '0.05rem',
        color: '#000',
        transition: 'all .4s ease 0s',
        textTransform: "uppercase"
      }
}
