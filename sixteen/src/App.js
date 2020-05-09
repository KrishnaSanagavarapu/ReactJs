import React from "react";
import "./App.css";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from './components/Four'

function App() {
  return (
    <div className="App">
      <h1> This is Example for Conditional Rendereing</h1>
      <One />
      <Two />
      <Three/>
      <Four/>
    </div>
  );
}

export default App;
