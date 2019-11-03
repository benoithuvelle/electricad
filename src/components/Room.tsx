import React, { useState, useEffect, useContext } from "react";
import { RoomContext } from './../RoomContext'
import { DraggableCore, DraggableData } from "react-draggable";
import { Points } from "../interfaces";
import { getPath, getPolygon, getAllPointsButThisRoom, getPointsAbsolutePosition, compareRoomPoints } from "./../utils";
import Floor from "./Floor";
import Point from "./Point";
import Segment from "./Segment";
import Size from "./Size";

function Room({
    isSelected,
    roomIndex,
    id,
    coords,
    room,
    points: defaultPoints,
}: {
    isSelected: boolean;
    roomIndex: number;
    id: string;
    coords: any;
    room: any;
    points: Points;
}) {

    const { __rooms, __selectedRoom } = useContext(RoomContext)
    const [rooms, setRooms] = __rooms
    const [selectedRoom, setSelectedRoom] = __selectedRoom

    const [points, setPoints] = useState<Points>(defaultPoints);

    useEffect(() => {
        updateRoom(room, roomIndex)
    }, [points])

    const deleteRoom = (e: any) => {
        if (isSelected) {
            if (e.keyCode === 8) {
                setRooms((rooms: any) => rooms.filter((el: any) => el.id !== id));
            }
        }
    };

    const updateRoom = (room: any, index: number) => {
        setRooms((rooms: any) => [
            ...rooms.slice(0, index),
            { ...room, points: points },
            ...rooms.slice(index + 1),
        ]);
    };

    const dragging = (e: any, dnd: DraggableData) => {
        e.preventDefault()

        coords[0] += dnd.deltaX
        coords[1] += dnd.deltaY

        updateRoom(room, roomIndex)
    };

    const dragEnded = (e, dnd) => {

        const roomPoints = getPointsAbsolutePosition(room)

        const allOtherPoints = getAllPointsButThisRoom(rooms, roomIndex)
        let newPoints = roomPoints.map(pointA => {
            allOtherPoints.map(pointB => {

                let a = pointA[0] + pointA.dx
                let b = pointB[0] + pointB.dx
                let dx = Math.abs(a - b)
                if (dx <= 10) {
                    pointA[0] = b - pointA.dx
                }
            })
            allOtherPoints.map(pointB => {
                let a = pointA[1] + pointA.dy
                let b = pointB[1] + pointB.dy
                let dy = Math.abs(a - b)
                if (dy <= 10) {
                    pointA[1] = b - pointA.dy
                }
            })
            return pointA
        })

        const roomUpdate = { ...room, points: newPoints }
        updateRoom(roomUpdate, roomIndex)

        compareRoomPoints(rooms)
    }

    return (
        <DraggableCore
            handle=".room"
            cancel=".corner, .segment"
            disabled={!isSelected}
            onStop={dragEnded}
            onDrag={dragging}
        >
            <g
                className={"room"}
                id={id}
                transform={`translate(${coords[0]} ${coords[1]})`}
                onClick={() => {
                    setSelectedRoom(id);
                }}
                onKeyDown={deleteRoom}
                tabIndex={-1}
                style={{ outline: 0 }}
            >
                <Floor
                    polygon={getPolygon(points)}
                />

                {getPath(points).map((pathPoints, index) => (
                    <Segment
                        key={index}
                        pathPoints={pathPoints}
                        visible={isSelected}
                        segmentIndex={index}
                        setPoints={setPoints}
                        points={points}
                    />
                ))}

                {points.map((point, index) => (
                    <Point
                        coords={coords}//remove
                        key={index}
                        point={point}
                        pointIndex={index}//remove
                        points={points}//remove
                        setPoints={setPoints}
                        visible={isSelected}
                    />
                ))}
                {getPath(points).map((pathPoints, index) => (
                    <Size
                        key={index}
                        pathPoints={pathPoints}
                        visible={isSelected}
                    />
                ))}
            </g>
        </DraggableCore>
    );
}

export default Room;

