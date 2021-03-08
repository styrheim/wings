import React from 'react';


export interface BirdRendererProps {
    position:  number,
    wingScale: number,
    width:     number
}
export class BirdRenderer extends React.Component<BirdRendererProps> {
    readonly wingColorBelow = "#e0efff";
    readonly wingColorAbove = "#650fa8";
}