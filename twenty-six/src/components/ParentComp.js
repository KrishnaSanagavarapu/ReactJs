import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComponent from './PureComp'
 
 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'krishna'
         }
     }
     
     componentDidMount(){
         setInterval(() => {
             this.setState({
                 name: 'State Krishna'
             })
         }, 2000)
     }

     render() {
         console.log("*********************** Parent Component is Rendered ************")
         return (
             <div>
                 <PureComponent name={this.state.name}/>
                 <RegComp name={this.state.name} />
                 Parent Component {this.props.name}
             </div>
         )
     }
 }
 
 export default ParentComp
 