import React, { useContext } from "react";
import { RoomContext } from './../RoomContext'
import { DraggableCore, DraggableData } from "react-draggable";
import { Points, XY } from "../interfaces";
import { getPointsAbsolutePosition, getAllPointsAbsolutePosition } from "../utils";

function Point({
    coords,
    point,
    pointIndex,
    points,
    setPoints,
    visible,
}: {
    coords: any;
    point: any;
    pointIndex: number;
    points: any;
    setPoints: any;
    visible: boolean;
}) {

    const { __rooms } = useContext(RoomContext)
    const [rooms, setRooms] = __rooms


    if (!visible) {
        return null;
    }

    const x = point[0];
    const y = point[1];

    const dragging = (e: any, dnd: DraggableData) => {
        const newPoints = [...points];
        newPoints[pointIndex] = [x + dnd.deltaX, y + dnd.deltaY];
        setPoints(newPoints);
    };

    const dragEnd = () => {

        let newPoints = [...points]

        let allPoints = getAllPointsAbsolutePosition(rooms)

        allPoints.map(otherPoint => {
            if (otherPoint !== point) {
                if (Math.abs((point[0] + coords[0]) - (otherPoint[0] + otherPoint.dx)) < 10) {
                    newPoints[pointIndex][0] = otherPoint[0] + otherPoint.dx - coords[0]
                }
                if (Math.abs((point[1] + coords[1]) - (otherPoint[1] + otherPoint.dy)) < 10) {
                    console.log('match')
                    newPoints[pointIndex][1] = otherPoint[1] + otherPoint.dy - coords[1]
                }
            }
        })
        setPoints(newPoints)
    };

    return (
        <DraggableCore
            handle=".corner"
            onDrag={dragging}
            onStop={dragEnd}
        >
            <g>
                <circle
                    className="corner"
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
