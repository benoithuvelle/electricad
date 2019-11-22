import React, { useState, useEffect } from 'react'
import Point from './Point'
import Floor from './Floor'
import Segment from './Segment'
import Size from './Size'
import Draggable from 'react-draggable'

function Room(props) {

    ///////////////////////////////////////////
    /////////// props and states //////////////
    ///////////////////////////////////////////

    let { electricad, setElectricad, setSelectedRoom, isSelected, index } = props

    let [room, setRoom] = useState(props.room)
    useEffect(() => {
        //console.log('room changed')
        electricad[index] = room
        setElectricad([...electricad])
    }, [room])

    ///////////////////////////////////////////
    /////////// ////console.log  //////////////////
    ///////////////////////////////////////////

    //console.log('rendering room : ' + room.id)
    ////console.log(room.path())

    ///////////////////////////////////////////
    /////////////// functions /////////////////
    ///////////////////////////////////////////

    const deleteRoom = e => {
        if (isSelected) {
            if (e.keyCode === 8) {
                ////console.log('you want to delete this ?')
                setElectricad(electricad.filter(el => el.id !== room.id))
            }
        }
    }

    const dragging = (e, dnd) => {
        e.preventDefault()
    }

    const dragEnded = (e, dnd) => {
        room.x = dnd.x
        room.y = dnd.y

        let allOtherPoints = electricad
            .filter(el => el.id !== room.id)
            .reduce((acc, curr, i) => {
                curr.points.map(point => {
                    point.dx = curr.x
                    point.dy = curr.y
                    acc.push(point)
                })
                return acc
            }, [])

        let newPoints = room.points.map(pointA => {
            allOtherPoints.map(pointB => {
                let a = pointA.x + room.x
                let b = pointB.x + pointB.dx
                let dx = Math.abs(a - b)
                //////console.log(dx)
                if (dx <= 30) {
                    //////console.log('x match')
                    pointA.x = b - room.x
                }
            })
            allOtherPoints.map(pointB => {
                let a = pointA.y + room.y
                let b = pointB.y + pointB.dy
                let dy = Math.abs(a - b)
                //////console.log(dx)
                if (dy <= 30) {
                    //////console.log('x match')
                    pointA.y = b - room.y
                }
            })
        })
        ////console.log(room.points)
        setRoom({ ...room })
    }

    ///////////////////////////////////////////
    //////////////// return ///////////////////
    ///////////////////////////////////////////

    return (
        <Draggable
            handle='.room'
            position={{ x: room.x, y: room.y }}
            cancel={['.corner', '.segment']}
            disabled={!isSelected}
            onStop={dragEnded}
            onDrag={dragging}
        >
            <g
                className={'room'}
                id={room.id}
                transform={`translate(${room.x} ${room.y})`}
                onClick={() => {

                    setSelectedRoom(room.id)
                }}
                onKeyDown={deleteRoom}
                tabIndex={-1}
                style={{ outline: 0 }}
            >
                <Floor
                    //room={room}
                    points={room.points}
                />
                {
                    isSelected ?
                        room.path().map(path =>
                            <Segment
                                index={index}
                                electricad={electricad}
                                setElectricad={setElectricad}
                                key={path.id}
                                path={path}
                                electricad={electricad}
                                setRoom={setRoom}
                                room={room}
                            />)
                        :
                        null
                }


                {
                    isSelected ?
                        room.points.map(point =>
                            <Point
                                key={point.id}
                                point={point}
                                electricad={electricad}
                                setRoom={setRoom}
                                room={room}
                                setElectricad={setElectricad}
                            />)
                        :
                        null
                }
                {/* {
                    room.path().map(path => <Size
                        key={path.id}
                        path={path}
                    />)
                } */}

                



            </g>
        </Draggable>
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

