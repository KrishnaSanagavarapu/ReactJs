import React from "react";
import "./App.css";
import Inline from './components/Inline'
import Stylesheet from './components/Stylesheet'
import './App.css'
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1> Styling React Components</h1>
       <Inline/>
       
       <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

       <Stylesheet/>

    </div>
  );
}

export default App;
