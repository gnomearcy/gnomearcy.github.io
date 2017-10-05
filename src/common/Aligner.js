import React, {Component} from 'react'

class Block extends React.Component{

  componentDidMount(){
    console.log("Child DID mount");
    if(this.props.getRef){
      this.props.getRef(this.block, this.props.i);
    }
    else {
      throw "callback ref not set on this Child"
    }
  }

  render(){
    return(
      <div
        style={this.props.style}
        ref={block => this.block = block}>
          {this.props.children}
      </div>
    );
  }
}


/*
  Specified height via inline style on place where this Component is used,
  will be ignored. This component will center itself vertically in parent node.
*/
class Aligner extends React.Component{

  state = {
    computedTopMargin: false,
    topMargin: undefined
  }

  // Callback method given to Block children in order for them to report
  // their height. Check componentDidMount of Block component for call site.
  getRef = (ref, i) => {
    console.log(`getRef callback -> registering index ${i}`);
    this.blocks.push(ref);
  }

  componentDidMount(){
    if(this.blocks === undefined){
      throw "undefined blocks, cannot compute anything"
    }
    if(this.blocks.length === 0){
      throw "empty blocks"
    }

    console.log("PARENT did MOUNT");
    console.log("blocks ->");
    console.log(this.blocks);
    let childrenHeight = 0;
    this.blocks.forEach((block, i) => {
      console.log(`Block ${i} height -> ${block.getBoundingClientRect().height}`);
      childrenHeight += block.getBoundingClientRect().height;
    });


    let rootNodeHeight = this.DOMroot.parentElement.getBoundingClientRect().height;
    let borderAmount = parseInt(this.DOMroot.style.borderWidth);
    if(borderAmount > 0){
      rootNodeHeight -= borderAmount * 2;
    }
    console.log("border");
    console.log(this.DOMroot.style.borderWidth);


    if((rootNodeHeight - childrenHeight) < 0){
      throw "Children nodes are bigger than parent aligner"
    }

    let computedMargin = undefined;
    if((rootNodeHeight - childrenHeight) > 2){
      computedMargin = (rootNodeHeight - childrenHeight) / 2;
    }

    console.log(rootNodeHeight);
    console.log(childrenHeight);
    // Trigger re-render of child components by setting new state
    this.setState({
      computedTopMargin: true,
      topMargin: computedMargin
    });
  }

  // Initialize required data structures at this point in case this component
  // gets mounted / unmounted more than once.
  componentWillMount(){
    this.blocks = [];
  }

  // Clear all allocated memory of this component in case it gets re-mounted
  // more than once
  componentWillUnmount(){
    this.blocks = undefined;
  }

  // Wraps any DOM markup that was passed in as children of this component
  // into Block children, setting height-report-callback and returns an array
  // of those elements to be used in render method of this component.
  wrapChildren(){

    if(this.wrappedChildren !== undefined){
      // This check is required since we don't want to re-wrap the children
      // after they have reported their heights to this parent and the margin
      // was computed. Re-wrap will happen by triggering render method by
      // setting the newState object. Check componentDidMount method of this
      // component
      return this.wrappedChildren;
    }
    console.log("Wrapping children...");
    if(this.props.children === undefined || this.props.children.length === 0){
      throw "this.props.children === undefined or empty"
    }

    this.wrappedChildren = [];
    // Wrapping all passed in children into Block components and setting ref callback
    for(var i = 0, size = this.props.children.length; i < size; i++){
      let child = this.props.children[i];
      let newBlock =
      <Block key={i} getRef={this.getRef}>
        {child}
      </Block>
      this.wrappedChildren.push(newBlock);
    }

    return this.wrappedChildren;
  }

  render() {
    let mergedStyle;
    if(this.state.computedTopMargin){
      console.log("Merging after margin computation");
        const computedMargin = {
          marginTop : this.state.topMargin
        }
        // We have to copy the passed in "style" object that is part of props
        // because props object should not be mutated directly.
        // JSON stringify method is fine since passed in "style" object cannot
        // have functions which we don't care about.
        let injectedStyle = undefined;
        if(this.props.style){
          injectedStyle = JSON.parse(JSON.stringify(this.props.style))
          delete injectedStyle["height"]
        }
        mergedStyle = {...injectedStyle, ...computedMargin};
    }
    else{
      console.log("Top margin not yet computed");
      console.log(this.props.style);
      if(this.props.style){
        mergedStyle = JSON.parse(JSON.stringify(this.props.style))
        delete mergedStyle["height"]
      }
      console.log(mergedStyle);
    }

    return <div
      style={mergedStyle}
      ref={el => this.DOMroot = el}>
      {this.wrapChildren()}
    </div>
  }
}

export default Aligner
