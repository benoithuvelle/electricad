import React from 'react'
import { line } from 'd3-shape'
import { DraggableCore } from 'react-draggable'



export default function Segment(props) {
    let { room, path, setElectricad, electricad, index } = props

    let pointA = room.points.find(e => e.id === path[0].id)
    let pointB = room.points.find(e => e.id === path[1].id)

    ////console.log(path.length)

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

    const addPoint = (e) => {
        //e.persist()
        //console.log(e.target.getBoundingClientRect())
        //console.log(e.clientX)

        let box = e.target.getBoundingClientRect()
        let pointer = { x: e.clientX, y: e.clientY }

        let point = { x: Math.abs(box.x - pointer.x) }
        // y = mx + b

        let a = path[0]
        let b = path[1]

        let dx = a.x - b.x
        let dy = a.y - b.y

        let m = dy / dx
        let p = a.x - m * a.y

        //console.log(m)

        if (m === 0) {
            //console.log('ligne horizontale')
            point.y = a.y
        }

        else if (m === Infinity || m === -Infinity) {
            //console.log('ligne verticale')
            point.y = Math.abs(box.y - pointer.y)
        }

        else {
            point.y = m * point.x + p
        }

        point.id = room.id +'.corner.' + room.points.length +1

        //room.points.push(point)
        let index1 = room.points.findIndex(point => point.id === a.id) 
        let index2 = room.points.findIndex(point => point.id === b.id) 
        console.log(index1, index2)
        
        room.points.splice(index1 + 1 , 0, point)

        setElectricad([...electricad])
      
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
                id={path.id}
                className='segment'
                strokeWidth={20}
                stroke='#77cfff'
                opacity={.8}
                onDoubleClick={addPoint}

            />

        </DraggableCore>
    )
}
