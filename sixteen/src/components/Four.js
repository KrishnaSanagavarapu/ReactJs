import React, { Component } from 'react'

 class Four extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedin : true
         }
     }
     
    render() {
        return this.state.isLoggedin && <div> This is short circiot</div>
    }
}

export default Four
