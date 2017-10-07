import React, {Component} from 'react'
import grid from '../style/grid'
import MediaQuery from 'react-responsive'
import mq from '../style/media_queries'

const gutterStyle = {
  width: grid.gutter,
  height: "100%",
  display: "inline-block"
}

const columnStyle = {
    container:{
      position : "fixed",
      height: "100%",
      left: "50%",
      transform: "translateX(-50%)"
    },
    col : {
      width : grid.col(1),
      height: "100%",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
      display: "inline-block"
    }
}

const rowStyle = {
  container:{
      position: "absolute",
      width: "100%"
  },

  row: {
    height: grid.rowHeight,
    width: "100%",
    boxShadow: "inset 0 0 1px rgba(255, 0, 0, 0.1)",
  }
}

const buttonStyle = {
  width: "56px",
  height: "56px",
  position: "fixed",
  backgroundColor: "#ccc",
  border: "1px solid #333",
  bottom: "0",
  right: "0",
  marginBottom: "16px",
  marginRight: "16px",
  padding: "0px",
  zIndex: 10
}

class DebugGrid extends React.Component {

  state = {
    show: true,
    buttonMessage : "Off"
  }

  toggleGrid = (e) => {
    e.preventDefault();
    console.log("Click")
    this.setState((prevState, props) => {
      return {
        show: !prevState.show,
        buttonMessage: prevState.show ? "On" : "Off"
      };
    });
    console.log(this.state);
  }

  makeRows = () => {
      const nr = 200;
      let rows = [];
      for(var i = 0; i < nr; i++){
        rows.push(<div key={i} style={rowStyle.row}></div>)
      }

      return <div style={rowStyle.container}>{rows}</div>
  }

  makeCols = (isDesktop) => {

      const internalStyle = {
        width: isDesktop ? grid.maxWidth : grid.col(3)
      }
      const mergedStyle = {...columnStyle.container, ...internalStyle}

      let cols = [];
      const size = isDesktop ? grid.colNr.desktop : grid.colNr.mobile;
      for(var i = 0; i < size; i++){
        let column = <div key={`c${i}`} style={columnStyle.col}></div>
        cols.push(column);
        // Make a gutter
        if(i !== size - 1){
          cols.push(<div key={`g${i}`} style={gutterStyle}></div>);
        }
      }
      return <div style={mergedStyle}>{cols}</div>
  }

  render () {

   return(
     <div>
     <button style={buttonStyle} onClick={this.toggleGrid}>{this.state.buttonMessage}</button>
     {
       this.state.show ?
         <div>
            {this.makeRows()}
            <MediaQuery maxWidth={mq.mobile_desktop_breakpoint}>
               {(matches) => {
                 if (matches) {
                   return <div>{this.makeCols(false)}</div>;
                 } else {
                   return <div>{this.makeCols(true)}</div>;
                 }
               }}
             </MediaQuery>
         </div>
       :
        null
     }
     </div>)
  }
}
export default DebugGrid;

//
