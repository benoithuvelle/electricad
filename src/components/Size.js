import React from 'react'

function Size(props) {

    const { path } = props

    let a = path[0]
    let b = path[1]

    var dx = a.x - b.x;
    var dy = a.y - b.y;

    var c = Math.floor(Math.sqrt(dx * dx + dy * dy));

    return (

        <text >
            <textPath startOffset="45%" xlinkHref={"#" + path.id}>
                {c}
            </textPath>
        </text>
    )
}

export default Size
