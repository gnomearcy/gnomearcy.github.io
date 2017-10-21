import grid from './grid'

const titleText = "titleText";
const heading1 = "heading1";
const heading2 = "heading2";
const body = "body";
const lh = `${grid.row(1)}px`

const desktop = {
  [titleText]:{
    fontFamily : "Roboto",
    fontSize: "32px",
    fontWeight: "bolder",
    lineHeight: lh
  },
  [heading1] : {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: lh,
    textTransform: "uppercase"
  },
  [heading2]:{
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: lh
  },

  [body]:{
    fontFamily: "Open Sans",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: lh
  }
}

const mobile = {
  [titleText]:{
    fontFamily : "Roboto",
    fontSize: "32px",
    fontWeight: "bolder",
    lineHeight: lh
  },
  [heading1] : {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: lh,
    textTransform: "uppercase"
  },
  [heading2]:{
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: lh
  },

  [body]:{
    fontFamily: "Open Sans",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: lh
  }
}

export default {
  mobile: mobile,
  desktop: desktop
}
