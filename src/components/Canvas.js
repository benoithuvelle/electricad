import React, { useState } from 'react'
import Room from './../components/Room'
import Background from './../components/Background'
import { data } from './../assets/data'

export default function Canvas() {

    //console.log('canvas rendering')

    const [electricad, setElectricad] = useState([])
    const [selectedRoom, setSelectedRoom] = useState(null)

    let width = window.innerWidth
    let height = window.innerHeight

    ////console.log('selectedRoom : ' + selectedRoom)


    return (
        <svg
            width={width}
            height={height}
        >
            <Background
                width={width}
                height={height}
                setElectricad={setElectricad}
                electricad={electricad}
                setSelectedRoom={setSelectedRoom}
            />

            {electricad.map((room, i) => {
                //////console.log(room)
                return (
                    <Room
                        key={room.id}
                        room={room}
                        electricad={electricad}
                        isSelected={selectedRoom === room.id ? true : false}
                        setSelectedRoom={setSelectedRoom}
                        setElectricad={setElectricad}
                        index={i}
                        
                    />
                )
            }
            )}

        </svg>
    )
}
