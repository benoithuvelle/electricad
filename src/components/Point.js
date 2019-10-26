import React from "react";
import { DraggableCore } from "react-draggable";

function Point(props) {
    const {
        updateRoom,
        points,
        point,
        pointIndex,
        roomIndex,
        room,
        setRoom,
        setPoints
    } = props;

    let x = point[0];
    let y = point[1];

    const dragStarted = (e, dnd) => {
        console.log("start");
    };

    const dragging = (e, dnd) => {
        console.log("dragging");

        x += dnd.deltaX;
        y += dnd.deltaY;

        let coords = [x, y];

        //e.target.setAttribute('transform', `translate(${x} ${y})`)
        const newPoints = [...points];

        newPoints[pointIndex] = coords;

        //setRoom({...room, points : room.points} )
        setPoints(newPoints);
        //updateRoom(room, roomIndex)
    };

    const dragEnd = () => {
        console.log("stop");
        //updateRoom(room, roomIndex)
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
