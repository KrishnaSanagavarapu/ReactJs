import React from "react";

function Nume() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  const personList = persons.map( x => (
      <h2>
          I am krishna froemd {x.name} years i know {x.age} {x.skill}
      </h2>
  ))
  return <div>{personList}</div>;
}

export default Nume;
