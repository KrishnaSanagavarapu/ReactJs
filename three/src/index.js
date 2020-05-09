import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*

3 folders and 3 files

package.json 
dependencies and scripts required for project
run and build the applications and tests
npm or yarn as the package manager

git ignore and read me file

folders

node modules - all dependencies are installed 
create app or npm install

public
contains
manifest is progressive webs apps= out of scope

favicon - icon

index.html - we need to concentrate

only html file
single page app
we are not adding any code in the application
id = root
run time - it is responsible for UI

src 
index.js
starting part of project
root component - app compoenent
DOM element

app.js

app.css

index.css

*/