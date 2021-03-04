import React from 'react';
import './App.css';
import {Bird, BirdProps, BirdState} from "./Bird";

let theBird = <Bird wingScale={+1.00}/>

interface AppProps{}
interface AppState{
    flightTime: number; //ms since take-off
}

class App  extends React.Component<AppProps, AppState>{

    render() {
        this.run();
        return(
        <div className="App">
            <br/>
            <div>
              {theBird}
            </div>
        </div>);
    }

    run(){
        // TODO repeat
    }
}

export default App;
