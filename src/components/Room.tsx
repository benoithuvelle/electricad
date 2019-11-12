import React, { useContext } from "react";
import { RoomContext } from './../RoomContext'
import { DraggableCore, DraggableData } from "react-draggable";
import { getPath, getPolygon, getAllPoints } from "./../utils";
import Floor from "./Floor";
import Point from "./Point";
import Segment from "./Segment";
import Size from "./Size";
import Door from './Door'
import Outlet from './ELECTRICAL/Outlet'
import Switch from './ELECTRICAL/Switch'

function Room({
    isSelected,
    room,
    i
}) {

    const { __rooms, __selectedRoom } = useContext(RoomContext)
    const [rooms, setRooms] = __rooms
    const setSelectedRoom = __selectedRoom[1]

    //console.log(room.outlets)

    const deleteRoom = (e: any) => {
        if (isSelected) {
            if (e.keyCode === 8) {
                setRooms((rooms: any) => rooms.filter((el: any) => el.id !== room.id));
            }
        }
    };

    const dragging = (e: any, dnd: DraggableData) => {
        e.preventDefault()

        const newRooms = [...rooms]
        newRooms[i].x += dnd.deltaX
        newRooms[i].y += dnd.deltaY

        setRooms(newRooms)
    };

    const dragEnded = () => {

        const allPoints = getAllPoints(rooms)

        room.getPoints().forEach(point => {
            allPoints.forEach(otherPoint => {

                let dx = Math.abs(point.absX - otherPoint.absX)
                let dy = Math.abs(point.absY - otherPoint.absY)

                if (point.room !== otherPoint.room) {
                    if (dx <= 16) {
                        rooms[i].points[point.i].x = otherPoint.absX - point.offsetX
                    }
                    if (dy <= 16) {
                        rooms[i].points[point.i].y = otherPoint.absY - point.offsetY
                    }
                }
            })
        })
        setRooms([...rooms])
    }

    return (
        <DraggableCore
            handle=".room"
            cancel=".corner, .segment, .doorCenter, .outlet, .switch"
            disabled={!isSelected}
            onStop={dragEnded}
            onDrag={dragging}
        >
            <g
                className={"room"}
                id={room.id}
                transform={`translate(${room.x} ${room.y})`}
                onClick={() => {
                    setSelectedRoom(room.id);
                }}
                onKeyDown={deleteRoom}
                tabIndex={-1}
                style={{ outline: 0 }}
            >
                <Floor
                    polygon={getPolygon(room.getPoints())}
                />

                {
                    getPath(room.getPoints()).map((pathPoints, index) => (
                        <Segment
                            key={index}
                            pathPoints={pathPoints}
                            visible={isSelected}
                        />
                    ))
                }

                {
                    room.getPoints().map((point, index) => (
                        <Point
                            key={index}
                            point={point}
                            visible={isSelected}
                        />
                    ))
                }
                {
                    getPath(room.getPoints()).map((pathPoints, index) => (
                        <Size
                            key={index}
                            pathPoints={pathPoints}
                            visible={isSelected}
                        />
                    ))
                }
                {
                    room.doors.map((door, i) => (
                        <Door
                            key={i}
                            door={door}
                            i={i}
                        />
                    ))
                }
                {
                    room.outlets.map((outlet, i) => (
                        <Outlet
                            key={i}
                            outlet={outlet}
                            i={i}
                        />
                    ))
                }
                {
                    room.switches.map((__switch, i) => (
                        <Switch
                            key={i}
                            __switch={__switch}
                            i={i}
                        />
                    ))
                }
            </g>
        </DraggableCore>
    );
}

export default Room;

