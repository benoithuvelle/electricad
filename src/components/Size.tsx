import React from "react";

function Size({pathPoints, visible}) {
    const [a, b] = pathPoints;

    var dx = a.x - b.x;
    var dy = a.y - b.y;

    var c = Math.round(Math.floor(Math.sqrt(dx * dx + dy * dy)/5)*5)
    //console.log(c)

    if (!visible) {
        return null;
    }

    return ( // need to 
        <text style={{pointerEvents:'none', fill:'#404040'}}>
            <textPath startOffset="45%" xlinkHref={"#" + a.room + '.' + a.i + '.' + b.i}>
                {c}
            </textPath>
        </text>
    );
}

export default Size;
