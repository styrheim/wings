import React from 'react';
import './App.css';
import {Bird} from "./Bird";

let theBird = <Bird wingScale={+1.00}/>


function App() {
    run();
    return(
    <div className="App">
        <br/>
        <div>
          {theBird}
        </div>
    </div>);
}

function run(){
    // TODO repeat
}

export default App;
