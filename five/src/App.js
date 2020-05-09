import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Work from "./components/Work";
import {Help } from './components/Help'

function App() {
  return (
    <div className="App">
      <Greet />
      <Work />
      <Help />
    </div>
  );
}

export default App;
