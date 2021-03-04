import React from 'react';
import './App.css';
import {Bird} from "./Bird";

let theBird = <Bird wingScale={+1.00}/>

interface AppState{
    flightTime: number; //ms since take-off
}



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
