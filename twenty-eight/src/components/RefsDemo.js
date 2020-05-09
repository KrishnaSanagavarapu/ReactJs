import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount(){
      console.log("this.input Ref")
      this.inputRef.current.focus()
  }


  render() {
    return (
        <div>
            <input type="text" ref={this.inputRef} />

        </div>
    )
  }
}

export default RefsDemo;


//this is approach 1 - general appraoch