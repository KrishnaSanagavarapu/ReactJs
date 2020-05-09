import React from 'react'

// const Greet = (props)=> {
//     return (
//         <div>
//             <h1>
//                 Hello {props.name} a.ka. {props.heroName}
//             </h1>
//         </div>
//     )
// }
// destructure it in functional parameter

// const Greet = ({name,heroName})=> {
//     return (
//         <div>
//             <h1>
//                 Hello {name} a.ka. {heroName}
//             </h1>
//         </div>
//     )
// }

// destructure it in fucntion body


const Greet = props => {
    const {name,heroName} =props
    return (
        <div>
            <h1>
                Hello {name} a.ka. {heroName}
            </h1>
        </div>
    )
}

export default Greet
