import React, { Component } from "react";
import MemComp from "./MemComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Krishna",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Set State Krishna name",
      });
    }, 5000);
  }

  render() {
    console.log("************ Parent Component is rendered **************")
    return (
      <div>
        <MemComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
