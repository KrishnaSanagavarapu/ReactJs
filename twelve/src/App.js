import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="jdf" heroName="jsdfhks" />
      <Greet name="sdfhksdj" heroName="ehk" />
      <Greet name="sefhks" heroName="djkfk" />
      <hr></hr>
      <Welcome name="jdf" heroName="jsdfhks" />
      <Welcome name="sdfhksdj" heroName="ehk" />
      <Welcome name="sefhks" heroName="djkfk" />
    </div>
  );
}

export default App;
