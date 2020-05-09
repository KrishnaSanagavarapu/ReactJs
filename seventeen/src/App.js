import React from 'react';
import './App.css';
import NameList from './components/NameList'
import Name from './components/Name'
import Namez from './components/Namez'
import Nume from './components/Nume'
import None from './components/None'
import NomeChild from './components/NomeChild'

function App() {
  return (
    <div className="App">
     <NameList/>
     <Name/>
     <Namez/>

     <Nume/>
     <None/>
    </div>
  );
}

export default App;
