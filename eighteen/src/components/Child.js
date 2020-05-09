import React from 'react'

function Child({person}) {
    return (
        <div>
            <h1>
                I am {person.name} this is {person.age} akdasj {person.skill}
            </h1>
        </div>
    )
}

export default Child
