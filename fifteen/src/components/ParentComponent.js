import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import Chile from './Chile'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName : 'I am Parent'
         }
         this.greetParent = this.greetParent.bind(this)
     }
    
     greetParent(childName){
         alert(`Hello ${this.state.parentName} from ${childName}`)
     }
     
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
                <Chile/>
            </div>
        )
    }
}

export default ParentComponent
