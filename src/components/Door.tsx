import React, { useContext } from 'react'
import { project } from '../utils'
import { RoomContext } from "../RoomContext"
import { DraggableCore } from "react-draggable"

export default function Door({ door, i }) {

    const { __rooms } = useContext(RoomContext)

    const [rooms, setRooms] = __rooms

    const { pointsIds, doorCenter, doorId } = door

    const room = rooms.find(({ id }) => id === pointsIds.a.split('.')[0])

    const a = room.getPoints().find(({ id }) => id === pointsIds.a)
    const b = room.getPoints().find(({ id }) => id === pointsIds.b)

    const side1 = { x: doorCenter.x - 50, y: doorCenter.y - 50 }
    const side2 = { x: doorCenter.x + 50, y: doorCenter.y + 50 }

    //console.log(side1)

    const p1 = project(side1, a, b).point
    const p2 = project(side2, a, b).point

    const dragging = (e, dnd) => {

        const newDoorCenter = { ...doorCenter }
        newDoorCenter.x += dnd.deltaX
        newDoorCenter.y += dnd.deltaY

        const newPoint = project(newDoorCenter, a, b)

        room.doors[i].doorCenter.x = newPoint.point.x
        room.doors[i].doorCenter.y = newPoint.point.y
        setRooms([...rooms])
    }

    return (

        <DraggableCore
            handle=".doorCenter"
            onDrag={dragging}
        >

            <line
                className='doorCenter'
                id={doorId}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                fill='#ffffaa'
                stroke="#ffffaa"
                strokeWidth={8}
            />


        </DraggableCore>
    )
}
