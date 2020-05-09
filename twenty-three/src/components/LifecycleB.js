import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Krishna - The emporer"
        }
        console.log('LifeCycle b constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle b getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycle b compoenentDidMount')
    }
    
    render() {
        console.log('LifeCycle b render')
        return (
            <div>
                <h1> Life Cyclce b - Parent Compoenet</h1>
            </div>
        )
    }
}

export default LifecycleB
