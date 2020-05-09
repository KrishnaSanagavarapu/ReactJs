import React from 'react'

// create the function that returns html

const Hello = () => {

    // React application with and without JSX

    // return (
    //     <div>
    //         <h1> This is Krishna- JSX Tutorial </h1>
    //     </div>
    // )

    return React.createElement('div',
    {id : 'hello', className: 'dummyClass'}, 
    React.createElement('h1',null,'Hello Krishna - this is for JSX tutorial')
    )
}

export default Hello
