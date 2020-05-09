import React, { Component } from 'react'

class Three extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn : false
        }
    }
    
    render() {
        return this.state.isloggedIn ? (
            <div> Ternary Operator Approach</div>
        ) : (
            <div>This is Ternary Operator apprach - false</div>
        )
    }
}

export default Three
