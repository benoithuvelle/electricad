import React from "react";
import {DraggableCore} from "react-draggable";

function Point({ point, index, points, setPoints, visible }) {
    if (!visible) {
        return null;
    }

    const x = point[0];
    const y = point[1];

    const dragStarted = (e, dnd) => {
        console.log("start");
    };

    const dragging = (e, dnd) => {
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
