import React, { useState, useContext } from "react";
import { line } from "d3-shape";
import { DraggableCore } from "react-draggable";
import { Points } from './../interfaces'
import { RoomContext } from './../RoomContext'
import Point from "./Point";
import { getAllPoints } from "../utils";

export default function Segment({
    pathPoints,
    visible,
    segmentIndex,
}: {
    pathPoints: any,
    visible: boolean,
    segmentIndex: number
}) {

    const { __quickMenuPosition, __quickMenuState, __selectedPathPoints, __rooms } = useContext(RoomContext)

    const [quickMenuPosition, setQuickMenuPosition] = __quickMenuPosition
    const [quickMenuState, setQuickMenuState] = __quickMenuState
    const [selectedPathPoints, setSelectedPathPoints] = __selectedPathPoints
    const [rooms, setRooms] = __rooms

    const [isDragging, setIsDragging] = useState(false)

    let [a, b] = pathPoints;

    const roomIndex = rooms.findIndex(room => room.id === a.room)

    let data = [[a.x, a.y], [b.x, b.y]]

    let path = line()
        .x((d) => d[0])
        .y((d) => d[1])

    const dragging = (e, dnd) => {

        setIsDragging(true)

        a.x += dnd.deltaX
        a.y += dnd.deltaY

        b.x += dnd.deltaX
        b.y += dnd.deltaY

        rooms[roomIndex].points[a.i].x = a.x
        rooms[roomIndex].points[a.i].y = a.y

        rooms[roomIndex].points[b.i].x = b.x
        rooms[roomIndex].points[b.i].y = b.y

        setRooms([...rooms])
    }

    const dragEnd = (e, dnd) => {

        if (!isDragging) {
            segmentClicked(e)
            return
        }
        setIsDragging(false)

        let allPoints = getAllPoints(rooms)

        pathPoints.forEach(pathPoint => {
            allPoints.forEach(point => {
                if (pathPoint.room !== point.room) {
                    if (Math.abs(pathPoint.absX - point.absX) <= 16) {
                        rooms[roomIndex].points[pathPoint.i].x = point.absX - pathPoint.offsetX
                    }
                    if (Math.abs(pathPoint.absY - point.absY) <= 16) {
                        rooms[roomIndex].points[pathPoint.i].y = point.absY - pathPoint.offsetY
                    }
                }
            });
        });
        setRooms([...rooms])
    }

    const segmentClicked = e => {
        console.log(e.type)
        e.preventDefault()

        let x
        let y

        if (e.type === 'mouseup') {
            x = e.clientX
            y = e.clientY
        } else {
            x = e.touches[0].pageX
            y = e.touches[0].pageY
        }


        setQuickMenuPosition({ x, y })
        setQuickMenuState(prev => !prev)
        setSelectedPathPoints(pathPoints)
    }

    if (!visible) {
        return null;
    }

    return (
        <DraggableCore
            handle=".segment"
            //onStart={() => setIsDragging(true)}
            onDrag={dragging}
            onStop={dragEnd}
        >
            <path
                d={path(data)}
                id={a.i + '.' + b.i}
                className="segment"
                strokeWidth={20}
                stroke="#77cfff"
                opacity={0.8}
            //onClick={e => segmentClicked(e)}
            />
        </DraggableCore>
    );
}
