import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "This is the message",
    };
    //  this.clickHanlder = this.clickHanlder.bind(this) // approach -3
  }
  //approach 1-2-3
  //   clickHanlder() {
  //     this.setState({
  //       message: "Event Binded",
  //     });
  //     console.log(this);
  //     console.log(this.setState.message);
  //     console.log(this.state.message);
  //   }

  clickHanlder = () => {
    this.setState({
        message: 'bye-bye-approcah-4'
    });
  };

  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        {/* <button onClick={this.clickHanlder.bind(this)}>Click me</button> */}
        {/* <button onClick={() => this.clickHanlder() }>Click me</button> */}
        <button onClick={this.clickHanlder}>Click me</button>
      </div>
    );
  }
}

export default EventBind;
