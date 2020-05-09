import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
     count : 0
    }
  }
// we should never modify the state direclty - we need to use setstate method need to be used
// from the call back function - execute the code after code - place in callback func
increment(){
    //   this.setState({
    //       count: this.state.count+1
    //   },()=> {console.log('Callback values', this.state.count)})
    //   console.log(this.state.count)

    this.setState((prevState)=> ({
        count: prevState.count+1
    }))
    console.log(this.state.count)

  }

  incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
  }

  render() {
    return (
        <div>
            <div>count - {this.state.count} </div>
            <button onClick= {()=> this.incrementFive()}>Click me</button>
        </div>
    )
  }
}

export default Counter;
