import React, { useContext } from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import { addCorner } from './../../utils'
import { RoomContext } from './../../RoomContext'

const QuickMenu = () => {

    const {
        __quickMenuPosition,
        __quickMenuState,
        __selectedPathPoints,
        __rooms,
        __selectedRoom
    } = useContext(RoomContext)

    const [quickMenuPosition, setQuickMenuPosition] = __quickMenuPosition
    const [quickMenuState, setQuickMenuState] = __quickMenuState
    const [selectedPathPoints, setSelectedPathPoints] = __selectedPathPoints
    const [rooms, setRooms] = __rooms
    const [selectedRoom, setSelectedRoom] = __selectedRoom

    const handleClose = (e) => {
        setQuickMenuState(false)
        setQuickMenuPosition(null)
    }

    const addDoor = e => {
        console.log('selectedPathPoints', selectedPathPoints)
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
                onClick={(e) => {
                    const newPoints = addCorner(e, selectedPathPoints)
                    const index1 = selectedPathPoints[0].i
                    const index2 = selectedPathPoints[1].i
                    const newRooms = [...rooms]
                    const index = newRooms.findIndex(room => room.id === selectedRoom)
                    newRooms[index] = { ... newRooms[index], points : newRooms[index].points.splice(index1 + 1, 0, ...newPoints)}
                    setRooms(newRooms)

                    handleClose(e)
                }}>
                new corner
            </MenuItem>

            <MenuItem onClick={addDoor}>new door</MenuItem>
        </Menu>
    )
}

export default QuickMenu
