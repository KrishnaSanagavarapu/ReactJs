import React from "react";

const Greet = (props) => {
  console.log(props)
  return (
  <div>
  <h1> This is krishna { props.name } aka {props.heroName} </h1>
  {props.children }
  </div>
  )
};
export default Greet;

// use props
// props using functional componet