import grid from '../../style/grid'
import mq from '../../style/media_queries'
import headerDims from './header_style'

const fontSize = 18;

export default {

      linkContainer: {
        display: "none",
        [mq.desktop]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: headerDims.height
        }
      },

      link:{
        paddingLeft: '2.5rem',
        fontFamily: 'Comic-sans',
        textDecoration: 'none',
        fontSize: fontSize,
        letterSpacing: '0.05rem',
        color: '#a2a2a2',
        transition: 'all .4s ease 0s'
      }
}
