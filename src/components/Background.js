import React from 'react'
import { createRoom } from './../actions'
import { Room } from './../actions'

export default function Background(props) {

    let { setElectricad, electricad, setSelectedRoom } = props

    return (
        <rect
            id='background'
            width={props.width}
            height={props.height}
            fill='#38a0f9'
            //fill='pink'
            onDoubleClick={
                (e) => {
                    let room = new Room('cuisine' + Math.floor(Math.random()*100), e.clientX-50, e.clientY-50)
                    setElectricad([...electricad, room])
                    setSelectedRoom(room.id)
                }
            }
            onClick={
                () => setSelectedRoom(null)
            }
        />
    )
}
