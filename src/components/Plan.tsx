import React, { useState, useContext } from "react";
import Background from "./Background";
import Room from "./Room";
import Door from './Door'
import { RoomContext } from "../RoomContext";

export default function Plan() {

    const { __rooms, __selectedRoom, __doors } = useContext(RoomContext)

    const [rooms] = __rooms;
    const [selectedRoom] = __selectedRoom;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const [doors] = __doors;

    return (
        <svg
            id='plan'
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >

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
            {/* {rooms.reduce((acc, curr, i) => {
                acc.push(...curr.doors)
                return acc
            }, []).map((door, i) => (
                    <Door
                        key={i}
                        door={door}
                        i={i}
                    />
                ))} */}




        </svg>
    );
}
