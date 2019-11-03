import React, { useState, useContext } from "react";
import { line } from "d3-shape";
import { DraggableCore } from "react-draggable";
import { Points } from './../interfaces'
import { getAllPointsAbsolutePosition } from "../utils";
import { RoomContext } from './../RoomContext'

export default function Segment({
    pathPoints,
    visible,
    segmentIndex,
    setPoints,
    points,
}: {
    pathPoints: any,
    visible: boolean,
    segmentIndex: number
    setPoints: any,
    points: any,
}) {

    const { __quickMenuPosition, __quickMenuState, __selectedPathPoints, __rooms } = useContext(RoomContext)

    const [quickMenuPosition, setQuickMenuPosition] = __quickMenuPosition
    const [quickMenuState, setQuickMenuState] = __quickMenuState
    const [selectedPathPoints, setSelectedPathPoints] = __selectedPathPoints
    const [rooms, setRooms] = __rooms

    const [isDragging, setIsDragging] = useState(false)

    ////////console.log(pathPoints)
    let [a, b] = pathPoints;

    let data = [a.XY, b.XY]

    ////////console.log(a)

    let [ax, ay] = a.XY;
    let [bx, by] = b.XY;

    //////////console.log(ax)

    let path = line()
        .x((d) => d[0])
        .y((d) => d[1])

    const dragging = (e, dnd) => {

        setIsDragging(true)

        const newPathPoints = [...pathPoints]
        newPathPoints[0] = [ax + dnd.deltaX, ay + dnd.deltaY]
        newPathPoints[1] = [bx + dnd.deltaX, by + dnd.deltaY]

        const newPoints = [...points]

        newPoints[a.i] = newPathPoints[0]
        newPoints[b.i] = newPathPoints[1]

        setPoints([...newPoints])
    }

    const dragEnd = (e, dnd) => {

        if (!isDragging) {
            segmentClicked(e)
            return
        }
        setIsDragging(false)

        let allPoints = getAllPointsAbsolutePosition(rooms)

        let newPoints = [...points]
        //////console.log(newPoints)

        allPoints.map(el => {

            if (Math.abs((el[0] + el.dx) - (ax + a.XY.dx)) <= 16) {
                newPoints[a.i][0] = el.dx + el[0] - a.XY.dx
                //////console.log('match')
            }
            if (Math.abs((el[1] + el.dy) - (ay + a.XY.dy)) <= 16) {
                newPoints[a.i][1] = el.dy + el[1] - a.XY.dy
                //////console.log('match')

            }
            if (Math.abs((el[0] + el.dx) - (bx + b.XY.dx)) <= 16) {
                newPoints[b.i][0] = el.dx + el[0] - b.XY.dx
                //////console.log('match')

            }
            if (Math.abs((el[1] + el.dy) - (by + b.XY.dy)) <= 16) {
                newPoints[b.i][1] = el.dy + el[1] - b.XY.dy
                //////console.log('match')

            }
            setPoints([...newPoints])
        })
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
