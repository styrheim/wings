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
        this.run();
    }

    render() {
        //console.log("App.render()")
        return(
        <div className="App">
            <br/>
            <div>
              <Bird  period={2000}/>
            </div>
        </div>);
    }

    run(){
        //console.log("App.run")
        this.setState({flightTime: 0});
        setTimeout(this.run.bind(this),500);
    }
}

export default App;
