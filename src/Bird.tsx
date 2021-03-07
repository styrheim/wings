import React from 'react';

export interface BirdProps {
    flightTime: number; // ms since take-off
    period: number;     // duration in ms of each wing beat.
    width: number       // width of the SVG image - wider than the bird.
}
export interface BirdState{
    wingScale: number;
    position:  number;
    speed: number;
    acceleration: number;
    lastUpdate: number
}


export class Bird extends React.Component<BirdProps,BirdState>{
    readonly wingColorBelow = "#e0efff";
    readonly wingColorAbove = "#650fa8";
    constructor(props:BirdProps) {
        super(props);
        this.state = {
            wingScale: Math.cos(this.props.flightTime),
            position: 100,
            speed: 0,
            acceleration: -0.1,
            lastUpdate: this.props.flightTime
        }
    }

    render(){
        //console.log("Bird.render()")
        // Computing new state with local variables, because sequence is essential.
        let wingScale = Math.cos(this.props.flightTime / this.props.period);
        wingScale = Math.sign(wingScale)*wingScale*wingScale;
        let wingColor = wingScale>0 ? this.wingColorBelow : this.wingColorAbove;
        let translate = 116*(1-wingScale);
        let wobble = translate * (-0.06);
        //TODO set lastUpdate;
        return <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg9"
        width={this.props.width}
        viewBox={"-50 0 300 800"}>
        <g
            id="layer1"
            transform={`translate(-25,${20 + wobble + this.state.position})`}>
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
}