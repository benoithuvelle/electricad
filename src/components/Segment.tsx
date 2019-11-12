import React, { useState, useContext } from "react";
import { line } from "d3-shape";
import { DraggableCore } from "react-draggable";
import { RoomContext } from './../RoomContext'
import { getAllPoints } from "../utils";

export default function Segment({ pathPoints, visible, }) {

    const { __quickMenuPosition, __quickMenuState, __selectedPathPoints, __rooms, __pointer, __pathNode } = useContext(RoomContext)

    const setQuickMenuPosition = __quickMenuPosition[1]
    const setQuickMenuState = __quickMenuState[1]
    const setSelectedPathPoints = __selectedPathPoints[1]
    const [rooms, setRooms] = __rooms
    const setPointer = __pointer[1]
    const setPathNode = __pathNode[1]

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
                if (pathPoint.id !== point.id) {
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
        e.preventDefault()
        
        let coords = { x : null, y : null}
        
        if (e.type === 'mouseup') {
            coords.x = e.clientX
            coords.y = e.clientY
            setPointer(coords)
        } else {
            console.log(e)
            console.log(e.originalEvent)
            coords.x = e.changedTouches[0].clientX
            coords.y = e.changedTouches[0].clientY
            setPointer(coords)
        }


        setQuickMenuPosition(coords)
        setQuickMenuState(prev => !prev)
        setSelectedPathPoints(pathPoints)
        setPathNode(e.target)
    }

    // if (!visible) {
    //     return null;
    // }

    return (
        <DraggableCore
            handle=".segment"
            //onStart={() => setIsDragging(true)}
            onDrag={dragging}
            onStop={dragEnd}
            cancel=".doorCenter, .outlet"
        >
            <path
                style={visible ? { visibility: "visible" } : { visibility: 'hidden' }}
                d={path(data)}
                id={a.room + '.' + a.i + '.' + b.i}
                className="segment"
                strokeWidth={20}
                stroke="#77cfff"
                strokeLinecap='round'
                strokeLinejoin='round'
                opacity={0.8}
            //onClick={e => segmentClicked(e)}
            />
        </DraggableCore>
    );
}
