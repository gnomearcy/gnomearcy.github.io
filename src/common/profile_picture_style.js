import mq from '../style/media_queries'
import grid from '../style/grid'
import {undefinedEvaluator } from '../style/evaluator'
import typo from '../style/typefaces'

const outlineColor = "#e9e9e9"
const outlineWidth = 2
const separatorColor = "#fff"
const profilePictureHeight = 196;
const profilePictureHeightMobile = 140;
const innerCircleWidth = 14 - parseInt(outlineWidth);
const separatorThickness = 14;
const marginFix = -2 * outlineWidth;

const log = undefinedEvaluator({

  root:{
    position: "relative",
    width: "100%",
    height: grid.row(9) + marginFix,
    [mq.desktop]:{
      height: grid.row(6),
      // marginTop: `${marginFix}px`,
      marginBottom: `${marginFix / 2}px`
    }
  },

  separator:{
    boxSizing: "border-box",
    // Push up by half of the height
    marginTop: `-${separatorThickness / 2}px`,
    position: "absolute",
    // zIndex: 1,
    height: separatorThickness,
    width: "100%",
    borderTop: `${outlineWidth}px solid ${outlineColor}`,
    borderBottom: `${outlineWidth}px solid ${outlineColor}`,
    backgroundColor: separatorColor
  },

  picTextContainer:{
    width: grid.maxWidthMobile,
    height: profilePictureHeight,
    margin: "0 auto",

    [mq.desktop]:{
      width: grid.maxWidth,
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)"
    }
  },

  profilePicture: {
    position: "absolute",
    width: profilePictureHeightMobile,
    height: profilePictureHeightMobile,
    transform: "translateY(-50%) translateX(-50%)",
    left: "50%",
    marginTop: `${-separatorThickness / 2}px`,
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 2,

    // Horizontally center for absolute positioning
    // left: "50%",
    [mq.desktop]:{
      width: profilePictureHeight,
      height: profilePictureHeight,
      transform: "translateY(-50%) translateX(0%)",
      marginLeft: 0,
      marginRight: 0,
      left: "unset"
    },

    outerCircle: {
      border: `${parseInt(outlineWidth)}px solid ${outlineColor}`,
      position: "absolute",
      backgroundColor: "#e9e9e9",
      width: profilePictureHeightMobile,
      height: profilePictureHeightMobile,
      borderRadius: "50% 50%",

      [mq.desktop]: {
        width: profilePictureHeight,
        height: profilePictureHeight
      }
    },

    innerCircle: {
      position: "absolute",
      backgroundColor: "#f5f5f5",
      width: `${parseInt(profilePictureHeightMobile) - parseInt(innerCircleWidth * 2)}px`,
      height: `${parseInt(profilePictureHeightMobile) - parseInt(innerCircleWidth * 2)}px`,
      borderRadius: "50% 50%",
      border: `${parseInt(outlineWidth)}px solid ${outlineColor}`,
      marginLeft: `${parseInt(innerCircleWidth)}px`,
      marginTop: `${parseInt(innerCircleWidth)}px`,

      [mq.desktop]: {
        width: `${parseInt(profilePictureHeight) - parseInt(innerCircleWidth * 2)}px`,
        height: `${parseInt(profilePictureHeight) - parseInt(innerCircleWidth * 2)}px`,
      }
    }
  },

  title:
    Object.assign
    ({},

      Object.assign
      ({},
          {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: `${grid.row(5) + marginFix}px`,
            lineHeight: `${grid.rowHeight}px`,
            width: grid.maxWidthMobile,
            textAlign: "center"
          },

          typo.mobile.titleText
      ),

      {
        [mq.desktop]: Object.assign(
        {},
        {
          left: "unset",
          transform: "none",
          position: "absolute",
          marginLeft: grid.col(2) + grid.gutter,
          // In correlation with profile pic container's position "absolute" value
          lineHeight: `${grid.rowHeight}px`,

          textAlign: "left",
          // How many empty rows to place above title text
          marginTop: grid.row(2)
        },
        typo.desktop.titleText)
      }
  )
})

export default log;
