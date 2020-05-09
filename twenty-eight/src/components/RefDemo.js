//This is appracoh 2 - this approach is rarerly used

import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    console.log("This is Approach 2 of the Inpput focus");
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler =() => {
      alert(this.inputRef.current.value)
  }

  render() {
    return (
        <div>
            <input type="number"/>
            <input type="text" ref={this.setCbRef} />
            <button onClick= {this.clickHandler}>Click Me - Appraoch 2</button>
        </div>
    )
  }
}

export default RefDemo;
