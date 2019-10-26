import React from "react";
import {DraggableCore, DraggableData} from "react-draggable";
import {Points, XY} from "../interfaces";

function Point({
    point,
    index,
    points,
    setPoints,
    visible,
}: {
    point: XY;
    index: number;
    points: Points;
    setPoints: any;
    visible: boolean;
}) {
    if (!visible) {
        return null;
    }

    const x = point[0];
    const y = point[1];

    const dragStarted = () => {
        console.log("start");
    };

    const dragging = (e: any, dnd: DraggableData) => {
        console.log("dragging");
        //e.target.setAttribute('transform', `translate(${x} ${y})`)

        const newPoints = [...points];
        newPoints[index] = [x + dnd.deltaX, y + dnd.deltaY];
        setPoints(newPoints);
    };

    const dragEnd = () => {
        console.log("stop");
    };

    return (
        <DraggableCore
            handle=".corner"
            onStart={dragStarted}
            onDrag={dragging}
            onStop={dragEnd}
        >
            <g>
                <circle
                    className="corner"
                    //id={point.id}
                    cx={x}
                    cy={y}
                    r={16}
                    fill={"white"}
                    stroke={"#38a0f9"}
                    strokeWidth={4}
                />
                <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    alignmentBaseline="central"
                    pointerEvents="none"
                    fill="grey"
                >
                    {2}
                </text>
            </g>
        </DraggableCore>
    );
}

export default Point;
