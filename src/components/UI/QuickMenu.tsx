import React, { useContext } from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import { getPointCoords, getAllPoints } from './../../utils'
import { RoomContext } from './../../RoomContext'

const QuickMenu = () => {

    const {
        __quickMenuPosition,
        __quickMenuState,
        __selectedPathPoints,
        __rooms,
        __pointer,
        __outletPropertiesMenu,
        __switchPropertiesMenu
    } = useContext(RoomContext)

    const [quickMenuPosition, setQuickMenuPosition] = __quickMenuPosition
    const [quickMenuState, setQuickMenuState] = __quickMenuState
    const [selectedPathPoints] = __selectedPathPoints
    const [rooms, setRooms] = __rooms
    const [pointer] = __pointer
    const [outletPropertiesMenu, setOutletPropertiesMenu] = __outletPropertiesMenu
    const [switchPropertiesMenu, setSwitchPropertiesMenu] = __switchPropertiesMenu

    const handleClose = () => {
        setQuickMenuState(false)
        setQuickMenuPosition(null)
    }

    const addCorner = e => {
        e.persist()

        const [a] = selectedPathPoints
        const roomIndex = rooms.findIndex(room => room.id === a.room)

        const x = pointer.x - rooms[roomIndex].x
        const y = pointer.y - rooms[roomIndex].y

        const newPoint = getPointCoords([x, y], selectedPathPoints)

        getAllPoints(rooms).forEach(point => {
            //console.log(newPoint)
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

        handleClose()
    }

    const addDoor = () => {

        const [a, b] = selectedPathPoints

        const roomIndex = rooms.findIndex(room => room.id === a.room)

        const x = pointer.x - rooms[roomIndex].x
        const y = pointer.y - rooms[roomIndex].y

        const doorCenter = getPointCoords([x, y], selectedPathPoints)
        const doorId = rooms[roomIndex].id + '.door.' + rooms[roomIndex].doors.length


        const pointsIds = { a: a.id, b: b.id }

        const door = { pointsIds, doorCenter, doorId }

        rooms[roomIndex].doors.push(door)

        setRooms([...rooms])

        handleClose()

    }

    const addOutlet = e => {
        const [a, b] = selectedPathPoints

        const room = rooms.find(({ id }) => id === a.room)

        const x = pointer.x - room.x
        const y = pointer.y - room.y

        const pointsIds = { a: a.id, b: b.id }
        const anchorPoint = getPointCoords([x, y], selectedPathPoints)
        const id = room.id + '.outlet.' + room.outlets.length

        const props = {
            type: 1,
            grounding: true,
            shutter: true
        }

        const outlet = { anchorPoint, pointsIds, id, props }
        console.log(props)

        room.outlets.push(outlet)
        setOutletPropertiesMenu(prev => { return { ...prev, open: true, outlet: outlet } })
        setRooms([...rooms])
        handleClose()


    }

    const addSwitch = e => {
        const [a, b] = selectedPathPoints

        const room = rooms.find(({ id }) => id === a.room)

        const x = pointer.x - room.x
        const y = pointer.y - room.y

        const pointsIds = { a: a.id, b: b.id }
        const anchorPoint = getPointCoords([x, y], selectedPathPoints)
        const id = room.id + '.switch.' + room.switches.length

        const props = {
            way : 1,
            pole : 1,
            dimmer : false,
            illuminated : false,
            type : 'switch'
        }

        const __switch = { anchorPoint, pointsIds, id, props }

        room.switches.push(__switch)
        setSwitchPropertiesMenu(prev => { return { ...prev, open: true, __switch: __switch } })
        setRooms([...rooms])
        handleClose()
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
            <MenuItem onClick={addCorner}>new corner</MenuItem>
            <MenuItem onClick={addDoor}>new door</MenuItem>
            <MenuItem onClick={addOutlet}>new outlet</MenuItem>
            <MenuItem onClick={addSwitch}>new switch</MenuItem>
        </Menu>
    )
}

export default QuickMenu
