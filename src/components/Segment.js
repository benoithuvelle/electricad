import {line} from "d3-shape";
import React from "react";
import {DraggableCore} from "react-draggable";

export default function Segment({ pathPoints, visible }) {
    const [a, b] = pathPoints;

    const [ax, ay] = a;
    const [bx, by] = b;

    let path = line()
        .x(d => d[0])
        .y(d => d[1]);

    // let pointA = room.points.find(e => e.id === path[0].id)
    // let pointB = room.points.find(e => e.id === path[1].id)

    // //////console.log(path.length)

    // let segment = line()
    //     .x(d => d.x)
    //     .y(d => d.y)

    // const dragging = (e, dnd) => {
    //     pointA.x = pointA.x + dnd.deltaX
    //     pointB.x = pointB.x + dnd.deltaX
    //     pointA.y = pointA.y + dnd.deltaY
    //     pointB.y = pointB.y + dnd.deltaY
    //     setElectricad([...electricad])
    // }

    // const dragEnd = (e, dnd) => {

    //     let allPoints = electricad.reduce((acc, curr, i) => {
    //         curr.points.map(point => {
    //             point.dx = curr.x
    //             point.dy = curr.y
    //             acc.push(point)
    //         })
    //         return acc
    //     }, [])

    //     let allOtherPoints = allPoints.filter(point => point.id !== pointA.id && point.id !== pointB.id)

    //     allOtherPoints.map(point => {

    //         if (Math.abs((point.x + point.dx) - (pointA.x + pointA.dx)) <= 16) {
    //             pointA.x = point.dx + point.x - pointA.dx
    //         }
    //         if (Math.abs((point.y + point.dy) - (pointA.y + pointA.dy)) <= 16) {
    //             pointA.y = point.dy + point.y - pointA.dy
    //         }
    //         if (Math.abs((point.x + point.dx) - (pointB.x + pointB.dx)) <= 16) {
    //             pointB.x = point.dx + point.x - pointB.dx
    //         }
    //         if (Math.abs((point.y + point.dy) - (pointB.y + pointB.dy)) <= 16) {
    //             pointB.y = point.dy + point.y - pointB.dy
    //         }
    //         setElectricad([...electricad])
    //     })
    // }

    // const addPoint = (e) => {
    //     e.persist()
    //     ////console.log(e.target.getBoundingClientRect())
    //     ////console.log(e.clientX)
    //     //console.log(e.target)

    //     let box = e.target.getBoundingClientRect()
    //     //console.log(box.left)
    //     //console.log(e.clientX)
    //     let pointer = { x: e.clientX, y: e.clientY }

    //     let point = {}

    //     point.x = pointer.x - box.left + path[0].x < path[1].x ? path[0].x : path[1].x
    //     point.x = path[0].x < path[1].x ? pointer.x - box.left + path[0].x : pointer.x - box.left + path[1].x
    //     //console.log(point.x)
    //     // y = mx + b

    //     let a = path[0]
    //     let b = path[1]

    //     console.log(a.id.split('.')[2],b.id.split('.')[2])

    //     let dx = a.x - b.x
    //     let dy = a.y - b.y

    //     let m =  dy / dx
    //     let p = a.x - m * a.y

    //     ////console.log(m)

    //     if (m === 0) {
    //         ////console.log('ligne horizontale')
    //         point.y = a.y
    //     }

    //     else if (m === Infinity || m === -Infinity) {
    //         ////console.log('ligne verticale')
    //         point.x = a.x
    //         point.y = a.y < b.y ? Math.abs(pointer.y - box.top + a.y) : Math.abs(pointer.y - box.top + b.y)
    //     }

    //     else {
    //          point.y = m * point.x + p + (a.x)
    //         //point.y = m * point.x + p
    //     }

    //     point.id = room.id +'.corner.' + room.points.length +1

    //     let index1 = room.points.findIndex(point => point.id === a.id)
    //     let index2 = room.points.findIndex(point => point.id === b.id)

    //     room.points.splice(index1 + 1 , 0, point)

    //     setElectricad([...electricad])

    // }

    if (!visible) {
        return null;
    }

    return (
        <DraggableCore
            handle=".segment"
            // onStart={dragStarted}
            //onDrag={dragging}
            //onStop={dragEnd}
        >
            <path
                d={path(pathPoints)}
                id={pathPoints}
                className="segment"
                strokeWidth={20}
                stroke="#77cfff"
                opacity={0.8}
                //onDoubleClick={addPoint}
            />
        </DraggableCore>
    );
}
