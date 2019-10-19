import React from 'react'
import { line } from 'd3-shape'
import { DraggableCore } from 'react-draggable'



export default function Segment(props) {
    let { room, path, setElectricad, electricad, index } = props

    let pointA = room.points.find(e => e.id === path[0].id)
    let pointB = room.points.find(e => e.id === path[1].id)

    //console.log(path.length)

    let segment = line()
        .x(d => d.x)
        .y(d => d.y)

    const dragging = (e, dnd) => {
        pointA.x = pointA.x + dnd.deltaX
        pointB.x = pointB.x + dnd.deltaX
        pointA.y = pointA.y + dnd.deltaY
        pointB.y = pointB.y + dnd.deltaY
        setElectricad([...electricad])
    }

    const dragEnd = (e, dnd) => {

        let allPoints = electricad.reduce((acc, curr, i) => {
            curr.points.map(point => {
                point.dx = curr.x
                point.dy = curr.y
                acc.push(point)
            })
            return acc
        }, [])

        let allOtherPoints = allPoints.filter(point => point.id !== pointA.id && point.id !== pointB.id)

        allOtherPoints.map(point => {

            if (Math.abs((point.x + point.dx) - (pointA.x + pointA.dx)) <= 16) {
                pointA.x = point.dx + point.x - pointA.dx
            }
            if (Math.abs((point.y + point.dy) - (pointA.y + pointA.dy)) <= 16) {
                pointA.y = point.dy + point.y - pointA.dy
            }
            if (Math.abs((point.x + point.dx) - (pointB.x + pointB.dx)) <= 16) {
                pointB.x = point.dx + point.x - pointB.dx
            }
            if (Math.abs((point.y + point.dy) - (pointB.y + pointB.dy)) <= 16) {
                pointB.y = point.dy + point.y - pointB.dy
            }

            setElectricad([...electricad])

        })
    }

    return (
        <DraggableCore
            handle='.segment'
            // onStart={dragStarted}
            onDrag={dragging}
            onStop={dragEnd}
        >
            <path
                d={segment(path)}
                className='segment'
                strokeWidth={20}
                stroke='#77cfff'
                opacity={.8}

            />

        </DraggableCore>
    )
}
