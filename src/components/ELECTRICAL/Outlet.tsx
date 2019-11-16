import React, { useContext } from 'react'
import { RoomContext } from '../../RoomContext'
import { DraggableCore } from 'react-draggable'
import { project } from '../../utils'


function Outlet({ outlet, i }) {

    const { __rooms, __outletPropertiesMenu } = useContext(RoomContext)
    const [rooms, setRooms] = __rooms
    const [outletPropertiesMenu, setOutletPropertiesMenu] = __outletPropertiesMenu

    const { anchorPoint, pointsIds, outletId, props } = outlet

    const { grounding, shutter, type } = props


    const room = rooms.find(({ id }) => id === pointsIds.a.split('.')[0])

    const a = room.getPoints().find(({ id }) => id === pointsIds.a)
    const b = room.getPoints().find(({ id }) => id === pointsIds.b)

    const coords = project(anchorPoint, a, b).point

    var angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI) - 90;

    const dragging = (e, dnd) => {

        const newAnchorPoint = { ...anchorPoint }
        newAnchorPoint.x += dnd.deltaX
        newAnchorPoint.y += dnd.deltaY

        const newPoint = project(newAnchorPoint, a, b)

        room.outlets[i].anchorPoint.x = newPoint.point.x
        room.outlets[i].anchorPoint.y = newPoint.point.y
        setRooms([...rooms])
    }


    return (
        <DraggableCore
            handle=".outlet"
            onDrag={dragging}
        >
            <g
                className='outlet'
                style={{ pointerEvents: 'all' }}
                onClick={() => {
                    setOutletPropertiesMenu(prev => { return { ...prev, open: true, outlet: outlet } })
                }
                }

            >


                <g
                    id="1"
                    transform={`translate(${coords.x} ${coords.y}) scale(1.75) rotate(${angle})`}
                >
                    <text
                        transform={'translate(10 5.5) rotate(90)'}
                        fontSize={'50%'}
                    >
                        {type === 1 ? null : type}
                    </text>
                    <g id="2"
                        transform={`translate(2 2)`}

                    >
                        <path // ground
                            d="M3.54 11.58 L3.54 0.24"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={grounding === true ? 'visible' : 'hidden'}
                        />

                        <path // protect left
                            d="M8.27 1.2 L8.27 0.25"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={shutter === true ? 'visible' : 'hidden'}


                        />
                        <path // protect right
                            d="M8.27 11.6 L8.27 10.65"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                            visibility={shutter === true ? 'visible' : 'hidden'}


                        />
                        <path //arc
                            d="M8.27 10.65 A4.72441 4.72441 0 0 1 3.55 5.93 A4.72441 4.72441 0 0 1 8.27 1.2"
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'

                        />
                        <path //foot
                            d="M3.54 5.92 L-0 5.92"
                            id='coucou'
                            stroke='black'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            fill='none'
                        />
                    </g>
                </g>

            </g>
        </DraggableCore>
    )
}

export default Outlet
