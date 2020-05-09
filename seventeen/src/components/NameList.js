import React from "react";

function NameList() {
  const names = ["jksdh", "dkfjs", "jksdfj"];
  return (
    <div>
      <p> This is one way of representing data</p>
      <h1> {names[0]} </h1>
      <h1> {names[1]} </h1>
      <h1> {names[2]} </h1>
    </div>
  );
}

export default NameList;
