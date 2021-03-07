import React from 'react';

export interface BirdProps {
    flightTime: number; // ms since take-off
    period: number;     // duration in ms of each wing beat.
    width: number       // width of the SVG image - wider than the bird.
}
export interface BirdState{
    position: number;
}

export class Bird extends React.Component<BirdProps,BirdState>{
    readonly wingColorBelow = "#e0efff";
    readonly wingColorAbove = "#650fa8";
    position: number;
    speed: number;
    acceleration: number;
    lastUpdate: number;
    constructor(props:BirdProps) {
        super(props);
        this.position = 100;
        this.state = {position: this.position};
        this.speed = 0;
        this.acceleration = -0.5;
        this.lastUpdate = this.props.flightTime;
    }

    static wingScale(flightTime: number, period: number){
        return  Math.cos(flightTime / period);
    }

    render(){
        //console.log("Bird.render()")
        // Computing new state with local variables, because sequence is essential.
        let wingScale = Bird.wingScale(this.props.flightTime, this.props.period);
        let wingColor = wingScale>0 ? this.wingColorBelow : this.wingColorAbove;
        let translate = 116*(1-wingScale);
        let wobble = translate * (-0.06);
        let interval = this.props.flightTime - this.lastUpdate;
        this.speed = this.speed + interval*this.acceleration;
        console.log("speed: " + this.speed.toString());
        this.position = this.state.position + interval*this.speed;

        return <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg9"
        width={this.props.width}
        viewBox={"-50 0 300 800"}>
        <g
            id="layer1"
            transform={`translate(-25,${20 + wobble + this.position})`}>
            {/* <!-- body --> */}
            {"<!-- body debug comment -->"}
            <path
                id={"body"}
                fill={"#b4c9ff"}
                fillOpacity={1}
                stroke={"#000000"}
                strokeWidth={0.264583}
                strokeLinecap={"butt"}
                strokeLinejoin={"miter"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}
                d="m 146.66779,109.02908 c 0,0 -26.66687,-15.975924 -123.031245,4.82994 64.848985,51.64311 123.031245,-4.82994 123.031245,-4.82994 z"/>
            <ellipse
                id={"head"}
                fill={"#ffc9ff"}
                fillOpacity={1}
                stroke={"#000000"}
                strokeWidth={0.264583}
                strokeLinecap={"butt"}
                strokeLinejoin={"miter"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}
                cx="140.60713"
                cy="103.03109"
                rx="20.497709"
                ry="18.679514"/>
            <ellipse
                fill={"#ffff18"}
                fillOpacity={1}
                stroke={"#f60000"}
                strokeWidth={0.264583}
                strokeLinecap={"butt"}
                strokeLinejoin={"miter"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}
                id="eye"
                cx="142.31505"
                cy="93.334045"
                rx="4.3100801"
                ry="2.5815027"/>
            <path
                id={"beak_fill"}
                fill={"#ffff18"}
                fillOpacity={1}
                stroke={"none"}
                strokeWidth={0.264583}
                strokeLinecap={"butt"}
                strokeLinejoin={"miter"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}
                d="m 158.136,100.70992 33.6414,6.85685 -33.6414,0.21427 z"/>
            <path
                id={"bek_edge"}
                fill={"none"}
                fillOpacity={1}
                stroke={"#000000"}
                strokeWidth={0.264583}
                strokeLinecap={"butt"}
                strokeLinejoin={"miter"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}
                d="m 158.136,100.70992 33.6414,6.85685 -33.6414,0.21427"/>

            <path
                fill={wingColor}
                fillOpacity={1}
                stroke={"#000000"}
                strokeWidth={0.264583}
                strokeLinecap={"butt"}
                strokeLinejoin={"miter"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}
                d="M 67.711351,116.0 H 106.28111 C 103.28124,5.1426344 44.998051,0 44.998051,1.7142115 80.139384,64.28293 67.711351,116.13782 67.711351,116.13782 Z"
                transform={`translate(0,${translate}) scale(1,${wingScale})`}
                id="wing"/>
        </g>
    </svg>;
    }

    componentDidMount(){
        this.state = {
            position: this.position
        }
    }
}