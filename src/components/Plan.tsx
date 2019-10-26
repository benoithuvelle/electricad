import React, {useState} from "react";
import Background from "./Background";
import Room from "./Room";

export default function Plan() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Array.from(document.getElementsByTagName("circle")).map((e) => { return e.getBoundingClientRect()  })

    return (
        <svg width={width} height={height}>
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
                        coords={room.coords}
                        isSelected={selectedRoom === room.id ? true : false}
                        setSelectedRoom={setSelectedRoom}
                        rooms={rooms}
                        setRooms={setRooms}
                        room={room}
                    />
                );
            })}
        </svg>
    );
}
