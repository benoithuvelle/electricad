import React, { useState, useEffect } from 'react'
import Room from './Room'
import Background from './Background'
import Size from './Size'

export default function Plan() {

    const [rooms, setRooms] = useState([])
    const [selectedRoom, setSelectedRoom] = useState(null)

    let width = window.innerWidth
    let height = window.innerHeight

    useEffect(() => {
        console.log('plan mounted or updated')
        return () => {
            console.log('room will unmount')
        };
    })

    

    return (
        <svg
            width={width}
            height={height}
        >
            <Background
                width={width}
                height={height}
                setSelectedRoom={setSelectedRoom}
                setRooms={setRooms}
                rooms={rooms}
            />

            {rooms.map((room, i) => {
                return (

                    <Room
                        key={room.id}
                        roomIndex={i}
                        id={room.id}
                        points={room.points}
                        coords={room.coords}
                        isSelected={selectedRoom === room.id ? true : false}
                        setSelectedRoom={setSelectedRoom}
                        rooms={rooms}
                        setRooms={setRooms}
                        room={room}
                    />
                )
            }
            )}

        </svg>
    )
}
