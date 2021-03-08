import React from 'react';
import './App.css';
import {Bird} from "./Bird";


interface AppProps{}
interface AppState{
    flightTime: number; //ms since take-off
}

class App extends React.Component<AppProps, AppState>{
    takeOff: number; // ms since start of flight
    running: boolean;
    state = {
        flightTime: 0
    };
    constructor(props: AppProps){
        super(props);
        console.log("App.constructor")
        this.takeOff = Date.now();
        this.running = true;
        window.addEventListener('keydown', (e) => {
            if (e.key === "0") {
                this.running = ! this.running;
                this.run();
            }
        });
        this.run();
    }

    render() {
        // console.log("App.render()");
        // console.log(this.state.flightTime.toString());
        return(
        <div className="App" >
            <div>
                <Bird flightTime={this.state.flightTime} period={500} width={200}/>
            </div>
        </div>);
    }

    run(){
        // console.log("App.run");
        // console.log(this.state.flightTime.toString());
        this.setState({flightTime: Date.now() - this.takeOff});
        // console.log(this.state.flightTime.toString());
        if(this.running){
            setTimeout(this.run.bind(this),8);
        }
    }
}

export default App;
