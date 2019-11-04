import React, { useContext } from "react";
import { RoomContext } from './../RoomContext'

export default function Background({
    //setSelectedRoom,
    //setRooms,
    //rooms,
    width,
    height,
}: {
    //setSelectedRoom: any;
    //setRooms: any;
    //rooms: any;
    width: number;
    height: number;
}) {

    const { __selectedRoom, __rooms } = useContext(RoomContext)
    const [rooms, setRooms] = __rooms
    const [_, setSelectedRoom] = __selectedRoom

    const addRoom = (e: any) => {
        const id = window.prompt("Dénomination de la pièce");

        if (id === '' || id === null) return

        if (rooms.find((room) => room.id === id)) {
            alert(`Une pièce nommée ${id} existe déjà. Création annulée !!!`);
            return;
        }

        const room = {
            id: id,
            coords: [e.clientX - 75, e.clientY - 75],
            points: [[0, 0], [0, 150], [150, 150], [150, 0]],
            getPoints() {
                return this.points.reduce((acc, curr, i) => {
                    acc[i] = {
                        x : curr[0],
                        y : curr[1],
                        absX : curr[0] + this.coords[0],
                        absY : curr[1] + this.coords[1],
                        offsetX : this.coords[0],
                        offsetY : this.coords[1],
                        i
                    }
                    return acc
                }, [])
            }
        };

        setRooms([...rooms, room]);
        setSelectedRoom(room.id);
    };  

    return (
        <rect
            id="background"
            width={width}
            height={height}
            fill="#38a0f9"
            onDoubleClick={addRoom}
            onClick={() => setSelectedRoom(null)}
        />
    );
}
