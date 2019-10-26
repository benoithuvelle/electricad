import React, { useState } from 'react'
import Point from './Point'
import Floor from './Floor'
import Segment from './Segment'
import Size from './Size'
import { DraggableCore } from 'react-draggable'
import { getPolygon, getPath } from './../utils'
import { RoomObj } from './../utils'

function Room(props) {
    //console.log(props)
    console.log('room rendering')


    let { setRooms, setSelectedRoom, isSelected, roomIndex, id, coords, points } = props

    const [room, setRoom] = useState(props.room)

    
    const deleteRoom = e => {
        if (isSelected) {
            if (e.keyCode === 8) {
                setRooms(rooms => rooms.filter(el => el.id !== id))
            }
        }
    }

    const updateRoom = (room, index) => {
        //console.log(' room updating')
        setRooms(rooms => [...rooms.slice(0, index), {...room}, ...rooms.slice(index + 1)])
    }

    // const updatePoint = (coords, pointIndex) => {
    //     console.log(pointIndex)
    //     const room = new RoomObj(id, x, y)
    //     room.points = points
    //     room.points[pointIndex] = coords
    //     updateRoom(room, roomIndex)

    // }

    const dragging = (e, dnd) => {
        e.preventDefault()
        //console.log(e)
        //console.log(dnd)

        coords[0] += dnd.deltaX
        coords[1] += dnd.deltaY


        //const room = new RoomObj(id, x, y)
        //room.points = points

        updateRoom(room, roomIndex)

    }

    // const dragEnded = (e, dnd) => {
    //     roomX = dnd.x
    //     roomY = dnd.y

    //     // let allOtherPoints = electricad
    //     //     .filter(el => el.id !== room.id)
    //     //     .reduce((acc, curr, i) => {
    //     //         curr.points.map(point => {
    //     //             point.dx = curr.x
    //     //             point.dy = curr.y
    //     //             acc.push(point)
    //     //         })
    //     //         return acc
    //     //     }, [])

    //     let newPoints = room.points.map(pointA => {
    //         allOtherPoints.map(pointB => {
    //             let a = pointA.x + room.x
    //             let b = pointB.x + pointB.dx
    //             let dx = Math.abs(a - b)
    //             //////console.log(dx)
    //             if (dx <= 30) {
    //                 //////console.log('x match')
    //                 pointA.x = b - room.x
    //             }
    //         })
    //         allOtherPoints.map(pointB => {
    //             let a = pointA.y + room.y
    //             let b = pointB.y + pointB.dy
    //             let dy = Math.abs(a - b)
    //             //////console.log(dx)
    //             if (dy <= 30) {
    //                 //////console.log('x match')
    //                 pointA.y = b - room.y
    //             }
    //         })
    //     })
    //     ////console.log(room.points)
    //     setRoom({ ...room })
    // }


    return (
        <DraggableCore
            handle='.room'
            position={{ x: coords[0], y: coords[1] }}
            cancel={['.corner', '.segment']}
            disabled={!isSelected}
            //onStop={dragEnded}
            onDrag={dragging}
        >
            <g
                className={'room'}
                id={id}
                transform={`translate(${coords[0]} ${coords[1]})`}
                onClick={() => {

                    setSelectedRoom(id)
                }}
                onKeyDown={deleteRoom}
                tabIndex={-1}
                style={{ outline: 0 }}
            >
                <Floor
                    polygon={getPolygon(points)}
                //points={points}
                />
                {
                    isSelected ?
                        getPath(points).map(pathPoints =>
                            <Segment
                                key={pathPoints}
                                pathPoints={pathPoints}
                            />)
                        :
                        null
                }


                {
                    isSelected ?
                        points.map((point, index) =>
                            <Point
                                key={point}
                                point={point}
                                //updatePoint={updatePoint}
                                updateRoom={updateRoom}
                                pointIndex={index}
                                roomIndex={roomIndex}
                                room={room}
                                setRoom={setRoom}
                            />)
                        : null
                }
                {
                    isSelected ?
                        getPath(points).map(pathPoints => <Size
                            key={pathPoints}
                            pathPoints={pathPoints}
                        />)
                        : null
                }








            </g>
        </DraggableCore>
    )
}


export default Room
// export default React.memo(Room,
//     (prevProps, nextProps) => {
//         if (prevProps.room === nextProps.room && prevProps.isSelected === nextProps.isSelected) {
//             return true;
//         }
//         return false;
//     })

