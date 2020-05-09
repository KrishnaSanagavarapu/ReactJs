import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}> Click me</button>
    </div>
  );
}

export default FunctionClick;

// clickHandler() - if we add the paranthesis - it will become function  call
//event handler is function not a function call

