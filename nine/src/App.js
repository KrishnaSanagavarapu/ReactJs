import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="krishna" heroName="kelo">
        <p> This is children</p>
      </Greet>
      <Greet name="rama" heroName="melo" >

      <button>Clikc mel</button>
      </Greet>
      <Greet name="sana" heroName="oeru" />

      <Welcome name="sjfh" heroName="sudfhk"/>
      <Welcome name="sdjkfhsk" heroName="uifh"/>

    </div>
  );
}

export default App;
