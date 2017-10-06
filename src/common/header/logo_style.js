import mq from '../../style/media_queries'
import grid from '../../style/grid'
import headerDimensions from './header_style'
import hamburgerDims from './hamburger_style'

const imageDimension = 36;
const textColor = "#111";

export default {

    container: {

      // Subtracting an amount of pixels from width
      // to allow the Hamburger icon click event,
      // by shortening this components' width since
      // it's laying over the Hamburger and stealing clicks. :)
      width: grid.col(3) - hamburgerDims.size * 2,
      height: imageDimension,
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      outline: 0,
      color: textColor,

      // Vertical alignment in container
      position: "absolute",
      marginTop: (headerDimensions.height - imageDimension) / 2,
      [mq.desktop] : {
        width: grid.col(4)
      }
    },

    logo: {
      width: imageDimension,
      ':visited': textColor,
      ':hover': textColor,
      ':active': textColor
    },

    initials: {
      fontFamily: 'Comic-sans',
      fontSize: '1.2rem',
      letterSpacing: '0.05rem',
      paddingLeft: '1.0rem',
      paddingRight: '1.0rem'
    }
}
