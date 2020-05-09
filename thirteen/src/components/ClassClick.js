import React, { Component } from 'react'

 class ClassClick extends Component {
    clickhandler(){
        console.log("Class button clicke")
    } 

    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Click me class</button>
            </div>
        )
    }
}

export default ClassClick

// both are similar
//this.setState used by the event handlers
