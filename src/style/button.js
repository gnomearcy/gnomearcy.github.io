const border = 1;

export {
  border
}

export default {
  userSelect: "none",
  border: `${border}px solid #b6b6b6`,
  color: "#333",
  backgroundColor: "#eaeaea",
  textTransform: "uppercase",
  textAlign: "center",
  textDecoration: "none",

  ":hover":{
    backgroundColor: "#dedede"
  },

  ":active":{
    backgroundColor: "#d3d3d3"
  }
}
