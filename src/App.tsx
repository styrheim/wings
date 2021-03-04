import React from 'react';
import './App.css';
import {Bird} from "./Bird";


interface AppProps{}
interface AppState{
    flightTime: number; //ms since take-off
}

class App extends React.Component<AppProps, AppState>{
    takeOff: number; // ms since start of flight
    state = {
        flightTime: 0
    };
    constructor(props: AppProps){
        super(props);
        console.log("App.constructor")
        this.takeOff = Date.now();
        //this.run();
    }

    render() {
        console.log("App.render()");
        console.log(this.state.flightTime.toString());
        return(
        <div className="App">
            <br/>
            <div>
                <Bird flightTime={this.state.flightTime} period={2000}/>
            </div>
        </div>);
    }

    run(){
        console.log("App.run");
        console.log(this.state.flightTime.toString());
        this.setState({flightTime: 0});
        console.log(this.state.flightTime.toString());
        // setTimeout(this.run.bind(this),500);
    }
}

export default App;
