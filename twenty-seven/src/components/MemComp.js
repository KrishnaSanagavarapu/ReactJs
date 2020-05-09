import React from 'react'

function MemComp({name}) {
    console.log("This is Memo for Functional Class")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemComp)
