import React from 'react';
import './App.css';
import {Bird} from "./Bird";


interface AppProps{}
interface AppState{
    flightTime: number; //ms since take-off
}

class App  extends React.Component<AppProps, AppState>{
    takeOff: number; // ms since start of flight
    constructor(props: AppProps){
        super(props);
        this.takeOff = Date.now();
        this.setState({flightTime: 0});
    }



    render() {
        this.run();
        return(
        <div className="App">
            <br/>
            <div>
              <Bird flightTime={0}/>
            </div>
        </div>);
    }

    run(){
        // TODO repeat
    }
}

export default App;
