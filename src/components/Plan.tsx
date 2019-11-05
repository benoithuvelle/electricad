import React, { useState, useContext } from "react";
import Background from "./Background";
import Room from "./Room";
import { RoomContext } from "../RoomContext";

export default function Plan() {

    const { __rooms, __selectedRoom, __doors } = useContext(RoomContext)

    const [rooms] = __rooms;
    const [selectedRoom] = __selectedRoom;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [doors] = __doors;

    return (
        <svg width={width} height={height}>
            <Background
                width={width}
                height={height}
            />

            {
                rooms
                    .sort((a, b) => {
                        const c = (a.id === selectedRoom)
                        const d = (b.id === selectedRoom)
                        return (c === d) ? 0 : c ? 1 : - 1
                    })
                    .map((room, i) => {
                        return (
                            <Room
                                key={room.id}
                                isSelected={selectedRoom === room.id ? true : false}
                                room={room}
                                i={i}
                            />
                        );
                    })
            }




        </svg>
    );
}
