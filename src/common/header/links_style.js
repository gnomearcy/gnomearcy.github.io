import grid from '../../style/grid'
import mq from '../../style/media_queries'
import headerDims, {header_height} from './header_style'

const fontSize = 18;

const underline = {
  height: 3,
  marginTop: 6,
  color: "#ecec98"
}

const linkk = {
  base:{
    fontFamily: 'Comic-sans',
    textDecoration: 'none',
    fontSize: fontSize,
    letterSpacing: '0.05rem',
    color: '#000',
    transition: 'border 0.25s ease-out',
    textTransform: "uppercase",
    // float: "left",
    marginLeft: "2.5rem",

    ":hover":{
      backgroundColor: "green"
    },
    ":active":{
      backgroundColor: "green"
    },
    ":focus":{
      backgroundColor: "green"
    },
  },

  underline:{
    borderBottom: "3px solid #ecec98",
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
