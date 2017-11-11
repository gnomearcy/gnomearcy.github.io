import grid from '../../style/grid'
import mq from '../../style/media_queries'
import headerDims, {header_height} from './header_style'

const linkk = {
  base:{
    fontFamily: 'Montserrat',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: '0.05rem',
    color: 'black',
    // transition: 'border 0.25s ease-out',
    textTransform: "uppercase",
    marginLeft: "2.5rem",
  },

  underline:{
    borderBottom: `3px solid #2dbe60`,
    paddingBottom: "2px",
    marginTop: "2px"
  }
}

export default {

      linkContainer: {
        display: "none",
        [mq.desktop]: {
          display: "inline-block",
          // lineHeight: `${header_height.desktop}px`,
          float: "right",
          // position: "absolute",
          // right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          position: "relative"
        }
      },

      link:{

        normal: {...linkk.base},

        active:{
          ...linkk.base,
          ...linkk.underline
        }
      },
}
