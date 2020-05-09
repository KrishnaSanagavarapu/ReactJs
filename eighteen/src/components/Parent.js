import React from "react";
import Child from "./Child";

function Parent() {
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
  const personList = persons.map((person) => (
    <Child key={person.id} person={person} />
  ));

  //const personId = persons.map((x) => (<h2> {x.id}</h2>)) //  {personId}
  return <div>{personList}- this is Parent Data - Filtering</div>;
}

export default Parent;
