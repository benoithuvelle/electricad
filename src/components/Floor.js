import React from 'react'

export default function Floor(props) {

    //console.log('floor rendering')

    let { points } = props

    let d = points.map(point => [point.x, point.y].join(' '))

    return (
        <polygon
            points={d}
            fill='#ffffaa'
            stroke='steelblue'
        />


    )
}
///add memo