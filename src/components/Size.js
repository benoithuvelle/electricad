import React from 'react'

function Size(props) {

    const { pathPoints } = props

    const [ a, b ] = pathPoints
    const [ ax, ay ] = a
    const [ bx, by ] = b

    var dx = ax - bx;
    var dy = ay - by;

    var c = Math.floor(Math.sqrt(dx * dx + dy * dy));

    return (

        <text >
            <textPath startOffset="45%" xlinkHref={"#" + pathPoints}>
                {c}
            </textPath>
        </text>
    )
}

export default Size
