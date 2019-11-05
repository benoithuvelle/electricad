import React, { useContext } from "react";
import { RoomContext } from './../RoomContext'

export default function Background({
    width,
    height,
}: {
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
            x : e.clientX ? e.clientX - 75 : width/2,
            y : e.clientY ? e.clientY - 75 : height/2,
            points: [
                {x : 0, y : 0},
                {x : 0, y : 150},
                {x : 150, y : 150},
                {x : 150, y : 0},
            ],
            getPoints() {
                return this.points.reduce((acc, curr, i) => {
                    acc[i] = {
                        x : curr.x,
                        y : curr.y,
                        absX : curr.x + this.x,
                        absY : curr.y + this.y,
                        offsetX : this.x,
                        offsetY : this.y,
                        i,
                        room : id,
                        id : `${this.id}.${i}`
                    }
                    return acc
                }, [])
            },
            doors : []
        };

        setRooms([...rooms, room]);
        setSelectedRoom(room.id);
    }

    const keyHandler = e => {
        if (e.keyCode === 78) {
            addRoom(e)
        }
    }

    return (
        <rect
            style={{'outline':'none'}}
            tabIndex={-1}
            id="background"
            width={width}
            height={height}
            fill="#38a0f9"
            onDoubleClick={addRoom}
            onClick={() => setSelectedRoom(null)}
            onKeyDown={keyHandler}
        />
    );
}
