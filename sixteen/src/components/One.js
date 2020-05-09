import React, { Component } from 'react'

 class One extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedin: false
         }
     }
     
    render() {
        if(this.state.isLoggedin){
            return <div>This should return for true case </div>
        } else {
            return <h1>This should return for false casea</h1>
        }
    }
}

export default One

// if else case in conditional rendering