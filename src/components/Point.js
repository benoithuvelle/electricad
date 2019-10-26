import React, { useState, useEffect } from 'react'
import { DraggableCore } from 'react-draggable'


function Point(props) {

    let { point, electricad, setRoom, setElectricad } = props
        
    const dragStarted = (e, dnd) => {
        ////console.log(e, dnd)
    }
    const dragging = (e, dnd) => {

        let room = electricad.find(room => room.id === point.id.split('.')[0])
        let thisPoint = room.points.find(e => e.id === point.id)

        thisPoint.x = point.x + dnd.deltaX
        thisPoint.y = point.y + dnd.deltaY

        setRoom({...room})
        //setElectricad([...electricad])
    }
    const dragEnd = (e, dnd) => {

        let room = electricad.find(room => room.id === point.id.split('.')[0])

        let thisPoint = room.points.find(e => e.id === point.id)


        let allPoints = electricad.reduce((acc, curr, i) => {
            curr.points.map(point => {
                point.dx = curr.x
                point.dy = curr.y
                acc.push(point)
            })
            return acc
        }, [])



        allPoints
            .filter(e => e.id !== point.id)
            .map(point => {

                if (Math.abs((point.x + point.dx) - (thisPoint.x + thisPoint.dx)) <= 16) {
                    thisPoint.x = point.dx + point.x - thisPoint.dx
                }
                if (Math.abs((point.y + point.dy) - (thisPoint.y + thisPoint.dy)) <= 16) {
                    thisPoint.y = point.dy + point.y - thisPoint.dy
                }

            setRoom({...room})
                //setElectricad([...electricad])


            })

    }

    return (
        <DraggableCore
            handle='.corner'
            onStart={dragStarted}
            onDrag={dragging}
            onStop={dragEnd}
        >
            <circle
                className='corner'
                id={point.id}
                cx={point.x}
                cy={point.y}
                r={16}
                fill={"white"}
                stroke={"#38a0f9"}
                strokeWidth={4}
                //opacity={0.6}
            />
        </DraggableCore >
    )
}

export default Point