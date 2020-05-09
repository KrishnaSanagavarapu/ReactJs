import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 20}
    })
  };

  render() {
      const {count } = this.state
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hover on Me {count}</h2>
      </div>
    );
  }
}

export default HoverCounter;
