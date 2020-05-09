import React, { Component } from "react";
import UpdatedComponent from './withCounter'

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
        <h2 onMouseOver={this.incrementCount}>  {this.props.name} Hover on Me {count}</h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
