import React, {useState} from "react";
import {DraggableCore} from "react-draggable";
import {getPath, getPolygon} from "./../utils";
import Floor from "./Floor";
import Point from "./Point";
import Segment from "./Segment";
import Size from "./Size";

function Room({
    setRooms,
    setSelectedRoom,
    isSelected,
    roomIndex,
    id,
    coords,
    room: defaultRoom
}) {
    console.log("room rendering");

    const [room, setRoom] = useState(defaultRoom);

    const [points, setPoints] = useState([
        [0, 0],
        [0, 150],
        [150, 150],
        [150, 0]
    ]);

    const deleteRoom = e => {
        if (isSelected) {
            if (e.keyCode === 8) {
                setRooms(rooms => rooms.filter(el => el.id !== id));
            }
        }
    };

    const updateRoom = (room, index) => {
        //console.log(' room updating')
        setRooms(rooms => [
            ...rooms.slice(0, index),
            { ...room },
            ...rooms.slice(index + 1)
        ]);
    };

    // const updatePoint = (coords, pointIndex) => {
    //     console.log(pointIndex)
    //     const room = new RoomObj(id, x, y)
    //     room.points = points
    //     room.points[pointIndex] = coords
    //     updateRoom(room, roomIndex)

    // }

    const dragging = (e, dnd) => {
        e.preventDefault();
        //console.log(e)
        //console.log(dnd)

        coords[0] += dnd.deltaX;
        coords[1] += dnd.deltaY;

        //const room = new RoomObj(id, x, y)
        //room.points = points

        updateRoom(room, roomIndex);
    };

    // const dragEnded = (e, dnd) => {
    //     roomX = dnd.x
    //     roomY = dnd.y

    //     // let allOtherPoints = electricad
    //     //     .filter(el => el.id !== room.id)
    //     //     .reduce((acc, curr, i) => {
    //     //         curr.points.map(point => {
    //     //             point.dx = curr.x
    //     //             point.dy = curr.y
    //     //             acc.push(point)
    //     //         })
    //     //         return acc
    //     //     }, [])

    //     let newPoints = room.points.map(pointA => {
    //         allOtherPoints.map(pointB => {
    //             let a = pointA.x + room.x
    //             let b = pointB.x + pointB.dx
    //             let dx = Math.abs(a - b)
    //             //////console.log(dx)
    //             if (dx <= 30) {
    //                 //////console.log('x match')
    //                 pointA.x = b - room.x
    //             }
    //         })
    //         allOtherPoints.map(pointB => {
    //             let a = pointA.y + room.y
    //             let b = pointB.y + pointB.dy
    //             let dy = Math.abs(a - b)
    //             //////console.log(dx)
    //             if (dy <= 30) {
    //                 //////console.log('x match')
    //                 pointA.y = b - room.y
    //             }
    //         })
    //     })
    //     ////console.log(room.points)
    //     setRoom({ ...room })
    // }

    return (
        <DraggableCore
            handle=".room"
            position={{ x: coords[0], y: coords[1] }}
            cancel={[".corner", ".segment"]}
            disabled={!isSelected}
            //onStop={dragEnded}
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
                    //points={points}
                />

                {getPath(points).map(pathPoints => (
                    <Segment
                        key={pathPoints}
                        pathPoints={pathPoints}
                        visible={isSelected}
                    />
                ))}

                {points.map((point, index) => (
                    <Point
                        key={index}
                        point={point}
                        index={index}
                        points={points}
                        setPoints={setPoints}
                        visible={isSelected}
                    />
                ))}
                {getPath(points).map(pathPoints => (
                    <Size
                        key={pathPoints}
                        pathPoints={pathPoints}
                        visible={isSelected}
                    />
                ))}
            </g>
        </DraggableCore>
    );
}

export default Room;
// export default React.memo(Room,
//     (prevProps, nextProps) => {
//         if (prevProps.room === nextProps.room && prevProps.isSelected === nextProps.isSelected) {
//             return true;
//         }
//         return false;
//     })
