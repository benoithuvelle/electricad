import React, { useContext } from 'react'
import { getY, project } from '../utils'
import { RoomContext } from "../RoomContext"
import { DraggableCore } from "react-draggable"

export default function Door({ door, i }) {

    const { __rooms } = useContext(RoomContext)
    
    const [rooms, setRooms] = __rooms
    
    const { pointsIds, doorCenter } = door
    
    const room = rooms.find(({id}) => id === pointsIds.a.split('.')[0])
       
    const a = room.getPoints().find(({id}) => id === pointsIds.a)
    const b = room.getPoints().find(({id}) => id === pointsIds.b)

    const coords = project(doorCenter, a, b).point

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
            <circle
                className='doorCenter'
                cx={coords.x}
                cy={coords.y}
                r={10}
                fill='#ffffaa'
                stroke="steelblue"
                strokeWidth={4}
            />
        </DraggableCore>
    )
}
