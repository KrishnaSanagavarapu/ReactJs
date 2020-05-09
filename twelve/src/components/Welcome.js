//now we will look at destructuring props in class components

import React, { Component } from 'react'

// export class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 Welcome {this.props.name} a.k.ka {this.props.heroName}
//             </div>
//         )
//     }
// }

export class Welcome extends Component {
    render() {
        const {name,heroName} = this.props
        // const { state1,state2} = this.state  // syntax for state
        return (
            <div>
                Welcome { name} a.k.ka {heroName}
            </div>
        )
    }
}



export default Welcome
