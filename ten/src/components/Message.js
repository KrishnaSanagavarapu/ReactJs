import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "This is clicked action",
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={() => this.changeMessage()}>Click Me</button>

        <h2> 
          State example in class compoennts</h2>
      </div>
    );
  }
}

export default Message;
