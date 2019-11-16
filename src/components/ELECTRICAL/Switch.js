import React, { useContext, useState } from 'react'
import { RoomContext } from '../../RoomContext'
import { DraggableCore } from 'react-draggable'
import { project } from '../../utils'


function Switch({ __switch, i }) {

    const { __rooms, __switchPropertiesMenu } = useContext(RoomContext)
    const [rooms, setRooms] = __rooms
    const [switchPropertiesMenu, setSwitchPropertiesMenu] = __switchPropertiesMenu

    const { anchorPoint, pointsIds, switchId, props } = __switch

    const { way, pole, dimmer, illuminated, type, circuit } = props

    const [isDragging, setIsDragging] = useState(false)



    const room = rooms.find(({ id }) => id === pointsIds.a.split('.')[0])

    const a = room.getPoints().find(({ id }) => id === pointsIds.a)
    const b = room.getPoints().find(({ id }) => id === pointsIds.b)

    const coords = project(anchorPoint, a, b).point

    var angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI) - 90;

    const dragging = (e, dnd) => {

        console.log(e.target)
        setIsDragging(true)

        const newAnchorPoint = { ...anchorPoint }
        newAnchorPoint.x += dnd.deltaX
        newAnchorPoint.y += dnd.deltaY

        const newPoint = project(newAnchorPoint, a, b)

        room.switches[i].anchorPoint.x = newPoint.point.x
        room.switches[i].anchorPoint.y = newPoint.point.y
        setRooms([...rooms])
    }

    const dragEnd = (e) => {

        if (!isDragging) {
            console.log(e.target)
            setSwitchPropertiesMenu(prev => { return { ...prev, open: true, __switch: __switch } })
            return
        }
        setIsDragging(false)
    }


    return (
        <DraggableCore
            handle=".switch"
            onDrag={dragging}
            onStop={dragEnd}
        >
            <g
                className='switch'
                style={{ pointerEvents: 'all' }}
                // onClick={(e) => {
                //     setSwitchPropertiesMenu(prev => { return { ...prev, open: true, __switch: __switch } })
                // }
                // }
            >
                <g id="1"
                    transform={`translate(${coords.x} ${coords.y}) scale(1.75) rotate(${angle + 90})`}
                >
                    <g id="2"
                        transform='translate(0 -17)'
                    >
                        {/* <title>Double pole change over switch</title> */}
                        <path
                            d="M8.55 10.53 A2.83465 2.83465 0 1 1 2.88 10.53 A2.83465 2.83465 0 1 1 8.55 10.53 Z"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                        // visibility={'hidden'}

                        />
                        <path // double pole
                            d="M8.68 2.39 L10.65 3.11"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={pole === 2 && type === 'switch' ? 'visible' : 'hidden'}


                        />
                        <path // main switch 
                            d="M6.69 7.87 L9.46 0.24 L11.44 0.96"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={type === 'push' ? 'hidden' : 'visible'}
                        />
                        <path // double pole ????
                            d="M8.55 10.53 A2.83465 2.83465 0 1 1 2.88 10.53 A2.83465 2.83465 0 1 1 8.55 10.53"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={pole === 2 && type === 'switch' ? 'hidden' : 'hidden'}

                        />
                        <path // double pole
                            d="M2.76 18.68 L0.78 17.96"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={pole === 2 && type === 'switch' && way === 2 ? 'visible' : 'hidden'}

                        />
                        <path // second throw
                            d="M4.75 13.2 L1.97 20.83 L0 20.11"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={way === 2 && type === 'switch' ? 'visible' : 'hidden'}
                        />
                    </g>
                    <g transform={`translate( 0 -20) scale(.5)`}>
                        <text>
                            { circuit ? circuit.name.toUpperCase() + circuit.number : null}
                        </text>
                    </g>
                </g>
            </g>



        </DraggableCore>
    )
}

export default Switch
