import React, {Component} from 'react'
import Radium from 'radium'

class Block extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.getRef){
      this.props.getRef(this.block, this.props.i);
    }
    else {
      throw "callback ref not set on this Child"
    }
  }

  render(){
    let internalStyle={
      display:"inline-block"
    };

    internalStyle = undefined;

    return(
      <div
        style={{...this.props.style, ...internalStyle}}
        ref={block => this.block = block}>
          {this.props.children}
      </div>
    );
  }
}


/*
  Centers all elements vertically.
  Transfers attributes margin-top, margin-bottom and border from child root
  node one level up into the wrapping Block element.

  In case of multiple children:
  - margin-top of first child is ignored
  - margin-bottom of last child is ignored
  - margins of all other children are kept
*/
class Aligner extends React.Component{

  state = {
    computedTopMargin: false,
    topMargin: undefined
  }

  // Callback method given to Block children in order for them to report
  // their height. Check componentDidMount of Block component for call site.
  getRef = (ref, i) => {
    // console.log(`getRef callback -> registering index ${i}`);
    this.blocks.push(ref);
  }

  componentDidMount(){
    if(this.blocks === undefined){
      throw "undefined blocks, cannot compute anything"
    }

    let childrenHeight = 0;
    let size = this.blocks.length;

    if(size == 1){
      // Border width, paddingTop and paddingBottom are calculated in bounding height
      let height = parseInt(this.blocks[0].getBoundingClientRect().height);
      let top = parseInt(this.blocks[0].style.marginTop);
      let bottom = parseInt(this.blocks[0].style.marginBottom);
      childrenHeight = height + (isNaN(top) ? 0 : top) + (isNaN(bottom) ? 0 : bottom);
    }
    else {
      for(var i = 0; i < size; i++){
        let child = this.blocks[i];
        let childHeight = parseInt(child.getBoundingClientRect().height);

        childrenHeight += parseInt(child.getBoundingClientRect().height);
        if(i == 0){
          // For first child, ignore top margin
          let bottomMargin = parseInt(child.style.marginBottom);
          childrenHeight += isNaN(bottomMargin) ? 0 : bottomMargin;
        }
        else if(i === size - 1){
          // For last child, ignore bottom margin
          let topMargin = parseInt(child.style.marginTop);
          childrenHeight += isNaN(topMargin) ? 0 : topMargin;
        }
        else{
          let topMargin = parseInt(child.style.marginTop);
          let bottomMargin = parseInt(child.style.marginBottom);
          childrenHeight += isNaN(topMargin) ? 0 : topMargin;
          childrenHeight += isNaN(bottomMargin) ? 0 : bottomMargin;
        }
      }
    }

    if(childrenHeight === 0){
      throw "no children?"
    }

    let rootNodeHeight = this.DOMroot.parentElement.getBoundingClientRect().height;
    let borderAmount = parseInt(this.DOMroot.style.borderWidth);

    if(borderAmount > 0){
      rootNodeHeight -= borderAmount * 2;
    }

    if((rootNodeHeight - childrenHeight) < 0){
      throw "Children nodes are bigger than parent aligner"
    }

    let computedMargin = undefined;
    if((rootNodeHeight - childrenHeight) > 2){
      computedMargin = (rootNodeHeight - childrenHeight) / 2;
    }

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

    const size = React.Children.count(this.props.children);
    if(this.props.children === undefined || size === 0){
      throw "this.props.children === undefined or empty"
    }

    // We have to access the "children opaque structure", passed via props,
    // in an array fashion.
    // See the documentation for more details:
    // https://reactjs.org/docs/react-api.html#reactchildrentoarray
    const children = React.Children.toArray(this.props.children);

    this.wrappedChildren = [];

    if(size === 1){
      const onlyChild = children[0];
      // Extract both margins and border (which will account for total height)
      let {marginTop, marginBottom, border} = {...onlyChild.props.style};
      // Delete wanted attributes from child root element...
      delete onlyChild.props.style["marginTop"];
      delete onlyChild.props.style["marginBottom"];
      delete onlyChild.props.style["border"];
      // ... and construct a style object for Block element that'll wrap the child
      let injectStyle = {
        marginTop : marginTop,
        marginBottom: marginBottom,
        border: border
      }
      let newBlock =
      <Block style={injectStyle} key={0} getRef={this.getRef}>
        {onlyChild}
      </Block>
      this.wrappedChildren.push(newBlock);
    }
    else{
      for(var i = 0; i < size; i++){
        let child = children[i];
        let stolenStyle = undefined;

        if(child.props.style !== undefined){
          if(i === 0){
            // Stripping top margin from first child
            const {marginBottom, border} = {...child.props.style};
            stolenStyle = {
              marginBottom: marginBottom,
              border: border
            }
          }
          else if(i === size - 1){
            // Stripping bottom margin from last child
            const {marginTop, border} = {...child.props.style};
            stolenStyle = {
              marginTop: marginTop,
              border: border
            }
          }
          else{
            // Keeping both margins from current child
            const {marginBottom, marginTop, border} = {...child.props.style};
            stolenStyle = {
              marginBottom: marginBottom,
              marginTop: marginTop,
              border: border
            }
          }
          delete child.props.style["marginTop"];
          delete child.props.style["marginBottom"]
          delete child.props.style["border"];
        }

        // Injecting stolen margins and border to wrapping Block element
        let newBlock =
        <Block style={stolenStyle} key={i} getRef={this.getRef}>
          {child}
        </Block>
        this.wrappedChildren.push(newBlock);
      }
    }
    return this.wrappedChildren;
  }

  render() {
    let mergedStyle;

    if(this.state.computedTopMargin){
        // Merging styles after margin computation
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
      // Top margin has not yet been computed
      if(this.props.style){
        // Remove any passed in "height" attribute
        mergedStyle = JSON.parse(JSON.stringify(this.props.style))
        delete mergedStyle["height"]
      }
    }

    return (
      <div
        style={mergedStyle}
        ref={el => this.DOMroot = el}>
          {this.wrapChildren()}
      </div>
    )
  }
}

export default Aligner
