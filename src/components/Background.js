import React from "react";
import { RoomObj } from "./../utils";

export default function Background(props) {
    const { setSelectedRoom, setRooms, rooms } = props;

    const addRoom = e => {
        const id = window.prompt("Dénomination de la pièce");

        if (rooms.find(room => room.id === id)) {
            alert(`Une pièce nommée ${id} existe déjà. Création annulée !!!`);
            return;
        }
        const room = {
            id: id,
            coords: [e.clientX - 75, e.clientY - 75]
            //points: [[0, 0], [0, 150], [150, 150], [150, 0]]
        };

        //const room = new RoomObj(id, e.clientX - 75, e.clientY - 75)

        setRooms([...rooms, room]);
        setSelectedRoom(room.id);
    };

    return (
        <rect
            id="background"
            width={props.width}
            height={props.height}
            fill="#38a0f9"
            onDoubleClick={addRoom}
            onClick={() => setSelectedRoom(null)}
        />
    );
}
