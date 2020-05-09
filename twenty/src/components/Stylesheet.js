import React from 'react'
import './myStyles.css'

function Stylesheet( props) {
    let className = props.primary ? 'primary':''
    return (
        <div>
            <h1 className={`${className} font-xl mow milk`}> This is Style Sheet</h1>
            <h2 className= {`milk mow`} >This is planning</h2>
        </div>
    )
}

export default Stylesheet
