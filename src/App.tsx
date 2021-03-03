import React from 'react';
import './App.css';
import {Bird} from "./BIrd";

function App() {
      let theBird = <Bird wingScale={+1.00}/>
  return (
    <div className="App">
          {theBird}
    </div>
  );
}

export default App;
