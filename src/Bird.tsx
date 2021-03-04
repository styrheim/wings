import React from 'react';

export interface BirdProps {
    flightTime: number; // Use to compute wingScale and implicitly wingColor
}
export interface BirdState {
    wingScale: number; // High tips: +1, low tips -1. (More or less…)
    wingColor: string; // depending of which side of the wing is visible.
}

export class Bird extends React.Component<BirdProps, BirdState>{
    readonly wingColorBelow = "#e0efff";
    readonly wingColorAbove = "#650fa8";
    tookOff: number;    // time of take-off in ms.
    constructor(props:BirdProps) {
        super(props);
        this.state = {
            wingScale: 0.5, // TODO compute it
            //wingColor: this.state.wingScale>0 ? this.wingColorBelow : this.wingColorAbove
            wingColor: this.wingColorAbove
        }
        this.tookOff = Date.now(); // Initialize to 0, if initially not flying.
    }
    handleTick(){
        let age = Date.now() - this.tookOff;
    }

    public test01(){
        return(42);
    }

    render(){
        let translate = 116*(1-(this.state.wingScale));
        return <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg9">
        <g
            id="layer1"
            transform="translate(-25,-1)">
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
                fill={this.state.wingColor}
                fillOpacity={1}
                stroke={"#000000"}
                strokeWidth={0.264583}
                strokeLinecap={"butt"}
                strokeLinejoin={"miter"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}
                d="M 67.711351,116.0 H 106.28111 C 103.28124,5.1426344 44.998051,0 44.998051,1.7142115 80.139384,64.28293 67.711351,116.13782 67.711351,116.13782 Z"
                transform={`translate(0,${translate}) scale(1,${this.state.wingScale})`}
                id="wing"/>
        </g>
    </svg>;
    }
}