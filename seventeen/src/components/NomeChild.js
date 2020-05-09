import React from "react";
import None from './None'

function NomeChild({x}) {
  return (
    <div>
      <h2>
        Parent C-Child Data {x.name} years i know {x.age} {x.skill}
      </h2>
    </div>
  );
}

export default NomeChild;
