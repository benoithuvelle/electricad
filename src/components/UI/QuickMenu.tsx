import React, { useContext } from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import { getPointCoords, getPath, getAllPoints } from './../../utils'
import { RoomContext } from './../../RoomContext'

const QuickMenu = () => {

    const {
        __quickMenuPosition,
        __quickMenuState,
        __selectedPathPoints,
        __rooms,
        __selectedRoom,
        __pointer,
        __doors,
        __pathNode
    } = useContext(RoomContext)

    const [quickMenuPosition, setQuickMenuPosition] = __quickMenuPosition
    const [quickMenuState, setQuickMenuState] = __quickMenuState
    const [selectedPathPoints, setSelectedPathPoints] = __selectedPathPoints
    const [rooms, setRooms] = __rooms
    const [selectedRoom, setSelectedRoom] = __selectedRoom
    const [pointer] = __pointer
    const [doors, setDoors] = __doors
    const [pathNode] = __pathNode

    //console.log(pointer)

    const handleClose = (e) => {
        setQuickMenuState(false)
        setQuickMenuPosition(null)
    }

    const addCorner = e => {
        e.persist()
        console.log(e)


        const [a, b] = selectedPathPoints
        const roomIndex = rooms.findIndex(room => room.id === a.room)

        const x = pointer.x - rooms[roomIndex].x
        const y = pointer.y - rooms[roomIndex].y

        const newPoint = getPointCoords([x, y], selectedPathPoints)

        console.log(newPoint)

        getAllPoints(rooms).forEach(point => {
            console.log(newPoint)
            if (Math.abs(point.absX - (newPoint.x + rooms[roomIndex].x)) < 16) {
                newPoint.x = point.absX - rooms[roomIndex].x
            }
            if (Math.abs(point.absY - (newPoint.y + rooms[roomIndex].y)) < 16) {
                newPoint.y = point.absY - rooms[roomIndex].y
            }
        })

        const point1 = { ...newPoint }
        const point2 = { ...newPoint }

        rooms[roomIndex].points.splice(a.i + 1, 0, point1, point2)
        setRooms([...rooms])

        handleClose(e)
    }

    const addDoor = e => {

        const [a, b] = selectedPathPoints
        console.log(a,b)

        const roomIndex = rooms.findIndex(room => room.id === a.room)

        // const x = Math.abs(pointer.x - a.absX)
        // const y = Math.abs(pointer.y - b.absY)
        //const doorCenter = { x, y }

        const x = pointer.x - rooms[roomIndex].x
        const y = pointer.y - rooms[roomIndex].y
        const doorCenter = getPointCoords([x, y], selectedPathPoints)
        console.log(doorCenter)

        const pointsIds = { a: a.id, b: b.id }

        const door = { pointsIds, doorCenter }

        rooms[roomIndex].doors.push(door)

        setRooms([...rooms])

        handleClose(e)

    }


    return (
        <Menu
            id="quickMenu"
            transitionDuration={{ enter: 0, exit: 0 }}
            anchorReference="anchorPosition"
            anchorPosition={
                quickMenuPosition !== null
                    ? { top: quickMenuPosition.y, left: quickMenuPosition.x }
                    : undefined
            }
            open={quickMenuState}
            onClose={handleClose}
        >
            <MenuItem
                onClick={addCorner}>
                new corner
            </MenuItem>

            <MenuItem onClick={addDoor}>new door</MenuItem>
        </Menu>
    )
}

export default QuickMenu
