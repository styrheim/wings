import React from 'react';
import './App.css';
import {Bird} from "./BIrd";

let theBird = <Bird wingScale={+1.00}/>
const tick = new Event("tick");


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
    dispatchEvent(tick);
    // TODO repeat
}

export default App;
