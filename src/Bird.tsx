import React from 'react';
import {BirdRenderer} from "./BirdRenderer";

export interface BirdProps {
    flightTime: number; // ms since take-off
    period: number;     // duration in ms of each wing beat.
    width: number       // width of the SVG image - wider than the bird.
}

export class Bird extends React.Component<BirdProps>{
    position= 0;            // px
    speed: number;          // px/s
    acceleration: number;   // px/s
    lastUpdate: number;
    constructor(props:BirdProps) {
        super(props);
        this.state = {position: 100};
        this.speed = 0;
        this.acceleration = +0.000005; // which is downwards
        this.lastUpdate = this.props.flightTime;
        window.addEventListener('keydown', (e) => {
            if (e.key === " ") {
                this.speed = this.speed - 0.05;
            }
        });
    }

    static wingScale(flightTime: number, period: number){
        return  Math.cos(flightTime / period);
    }

    render(){
        //console.log("Bird.render()")
        // Computing new state with local variables, because sequence is essential.
        let wingScale = Bird.wingScale(this.props.flightTime, this.props.period);
        let interval = this.props.flightTime - this.lastUpdate;
        this.speed = this.speed + (interval/1000)*this.acceleration;
        console.log("speed: " + this.speed.toString() + "position : " + this.position.toString());
        this.position = this.position + (interval/1000)*this.speed;
        // Should round position and wingScale, to suppress rendering of
        // inperceptibly small changes. TODO
        // In the unlikely case that changed flightTime does not change neither position nor wingScale,
        // BirdRenderer will not render.
        let positionRounding = 10;
        let roundedPosition = Math.round(this.position*positionRounding) / positionRounding;
        let scaleRounding = 1000;
        let roundedWingSScale = Math.round(wingScale*scaleRounding) / scaleRounding;
        // Also round width, if there will ever be small width changes.
        return <BirdRenderer position={roundedPosition} wingScale={roundedWingSScale} width={this.props.width}/>;
    }
}