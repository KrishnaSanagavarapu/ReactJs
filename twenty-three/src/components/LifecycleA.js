import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Krishna - The emporer"
        }
        console.log('LifeCycle A constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycle A compoenentDidMount')
    }
    
    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <h1> Life Cyclce A - Parent Compoenet</h1>
            </div>
        )
    }
}

export default LifecycleA
