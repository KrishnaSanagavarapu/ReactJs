import React, { Component } from "react";

class Two extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedIn: false,
    };
  }

  render() {
    let message;
    if (this.state.isloggedIn) {
      message = <h2>Element variable Approcah is workin</h2>;
    } else {
      message = <h3> Here the element variable is fasle</h3>;
    }
    return <div>{message}</div>
  }
}

export default Two;
