import React, { useContext } from "react";
import { RoomContext } from './../RoomContext'
import { DraggableCore, DraggableData } from "react-draggable";
import { Points, XY } from "../interfaces";
import {  getAllPoints } from "../utils";

function Point({
    point,
    visible,
}: {
    point: any;
    visible: boolean;
}) {

    const { __rooms } = useContext(RoomContext)
    const [rooms, setRooms] = __rooms
    
    const roomIndex = rooms.findIndex(room => room.id === point.room)

    if (!visible) {
        return null;
    }

    const dragging = (e: any, dnd: DraggableData) => {

        rooms[roomIndex].points[point.i].x = point.x + dnd.deltaX
        rooms[roomIndex].points[point.i].y = point.y + dnd.deltaY

        setRooms([...rooms])
    };

    const dragEnd = () => {

        let allPoints = getAllPoints(rooms)

        console.log(allPoints)

        allPoints.map(otherPoint => {
            console.log(otherPoint.i)
            console.log(otherPoint.room)
            if (otherPoint.room !== point.room || otherPoint.i !== point.i) {
                if (Math.abs(point.absX - otherPoint.absX) < 16) {
                    rooms[roomIndex].points[point.i].x = otherPoint.absX - point.offsetX
                }
                if (Math.abs(point.absY - otherPoint.absY) < 16) {
                    rooms[roomIndex].points[point.i].y = otherPoint.absY - point.offsetY
                }
                
            }
        })
        setRooms([...rooms])
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
                    cx={point.x}
                    cy={point.y}
                    r={16}
                    fill={"white"}
                    stroke={"#38a0f9"}
                    strokeWidth={4}
                />
                <text
                    x={point.x}
                    y={point.y}
                    textAnchor="middle"
                    alignmentBaseline="central"
                    pointerEvents="none"
                    fill="grey"
                >
                    {point.i}
                </text>
            </g>
        </DraggableCore>
    );
}

export default Point;
