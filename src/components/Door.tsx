import React, { useContext } from 'react'
import { getPointCoords } from '../utils'
import { RoomContext } from "../RoomContext";

export default function Door({door}) {

    const { __rooms } = useContext(RoomContext)

    const [rooms] = __rooms


    const { pointsIds, XFromOrigin } = door
    console.log(pointsIds.a)
    const roomId = pointsIds.a.split('.')[0]
    console.log(roomId)
    const roomIndex = rooms.findIndex(room => room.id === roomId)
    const aIndex = rooms[roomIndex].getPoints().findIndex(point => point.id === pointsIds.a)
    const bIndex = rooms[roomIndex].getPoints().findIndex(point => point.id === pointsIds.b)

    const a = rooms[roomIndex].points[aIndex]
    const b = rooms[roomIndex].points[bIndex]

    console.log(a)
    console.log(b)

    //console.log(pointsIds)
    //console.log(XFromOrigin)

    //const rel = el instanceof SVGPathElement ? el.getPointAtLength(door.XFromOrigin) : {x : 10, y : 10}
    //const point = { x : rel.x , y : rel.y }

    //console.log(point)
    
    return (


        <circle
            cx={(a.x + b.x)/2}
            cy={(a.y + b.y)/2}
            r={10}
            fill='pink'
        />
    )
}
